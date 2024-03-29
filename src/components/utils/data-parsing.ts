import { format, parseISO, startOfDay } from 'date-fns'

export function countRecordsByDay(
  createdAtStrings: string[],
  dateFormat: string
): [Date, number][] {
  const countsByDay: Record<string, number> = {}

  createdAtStrings.forEach((createdAtString) => {
    const createdAtDate = parseISO(createdAtString)
    const localDate = startOfDay(createdAtDate) // Adjust to the local date by setting time to 00:00:00
    const localDateString = format(localDate, dateFormat)

    if (!countsByDay[localDateString]) {
      countsByDay[localDateString] = 1
    } else {
      countsByDay[localDateString]++
    }
  })

  // Convert countsByDay to an array of arrays with [date, count]
  const resultArray: [string, number][] = Object.entries(countsByDay)

  // Sort the resultArray by date (first element of each sub-array)
  resultArray.sort((a, b) => a[0].localeCompare(b[0]))

  return resultArray.map((count) => [new Date(count[0]), count[1]])
}

export function normalizePath(inputPath: string): string {
  // Check if the inputPath starts with '/public'
  if (inputPath.startsWith('/public')) {
    // Remove '/public' from the beginning
    inputPath = inputPath.substring('/public'.length)
  }

  // Ensure the path starts with '/'
  if (!inputPath.startsWith('/')) {
    inputPath = '/' + inputPath
  }

  // Ensure the path ends with a trailing slash
  if (!inputPath.endsWith('/')) {
    inputPath += '/'
  }

  return inputPath
}

export const parseGQLData = (
  data: { id: number | string; name: string }[] | undefined,
  suffix?: string
) => {
  if (!Array.isArray(data)) return []

  return [
    ...(data
      .map((item) => {
        if (!item) return null
        const extra = suffix ? ` ${suffix}` : ''
        return {
          value: `${item.id}${extra}`,
          label: `${item.name}${extra}`,
        }
      })
      .filter((i) => i) as { value: string; label: string }[]),
  ]
}

export const isValidURL = (url: string | null | undefined) => {
  if (!url) return false

  try {
    new URL(url)
    return true
  } catch (error) {
    return false
  }
}
