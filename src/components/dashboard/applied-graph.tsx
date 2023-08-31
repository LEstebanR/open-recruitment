import React, { useEffect, useMemo, useReducer } from 'react'
import { Select } from '../UI/select'
import { Chart, GoogleChartOptions } from 'react-google-charts'
import { appliesData } from '../../utils/mockdata'
import {
  endOfMonth,
  endOfWeek,
  format,
  parseISO,
  startOfDay,
  startOfMonth,
  startOfWeek,
  subDays,
} from 'date-fns'
import { useQuery } from '@apollo/client'
import {
  GET_CANDIDATES_CREATED_AT_BY_DATE,
  get_candidates_created_at_by_date_variables,
} from '../graphql/queries'
import { useSession } from 'next-auth/react'

export const filterGraphOptions = [
  { label: 'Last 7 days', value: 'last7days' },
  { label: 'Last 30 days', value: 'last30days' },
  { label: 'This week', value: 'thisWeek' },
  { label: 'This month', value: 'thisMonth' },
]

const baseChartOptions: GoogleChartOptions = {
  backgroundColor: '#fff',
  legend: { position: 'none' },
  vAxis: { minValue: 0, maxValue: 10, gridlines: { count: 5 } },
  hAxis: {
    format: 'M/d/yy',
    gridlines: { count: 15 },
  },
  chartArea: { width: '95%', height: '80%' },
}

function reducerTimeRange(state: GoogleChartOptions, action: string) {
  const currentDate = new Date()
  let dates = null

  switch (action) {
    case 'last7days':
      dates = { start: subDays(currentDate, 7), end: currentDate }
      break
    case 'last30days':
      dates = { start: subDays(currentDate, 30), end: currentDate }
      break
    case 'thisWeek':
      dates = {
        start: startOfWeek(currentDate, { weekStartsOn: 1 }),
        end: endOfWeek(currentDate, { weekStartsOn: 1 }),
      }
      break
    case 'thisMonth':
      dates = { start: startOfMonth(currentDate), end: endOfMonth(currentDate) }
      break
    default:
      dates = null
  }

  return {
    ...state,
    hAxis: {
      ...(state.hAxis ?? {}),
      ...(dates ? { minValue: dates.start, maxValue: dates.end } : {}),
    },
  }
}

const dateFormat = 'MM-dd-yyyy'

function countRecordsByDay(createdAtStrings: string[]): [string, number][] {
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

  return resultArray
}

function fillMissingDaysWithDefault(
  countsArray: [string, number][],
  startDate: Date,
  endDate: Date,
  defaultCount: number
): [string, number][] {
  const filledCountsArray: [string, number][] = []
  const currentDate = new Date(startDate)

  while (currentDate <= endDate) {
    const dateString = format(currentDate, dateFormat)
    const existingEntry = countsArray.find(([date]) => date === dateString)

    if (existingEntry) {
      filledCountsArray.push(existingEntry)
    } else {
      filledCountsArray.push([dateString, defaultCount])
    }

    currentDate.setDate(currentDate.getDate() + 1)
  }

  return filledCountsArray
}

const AppliedGraph: React.FC = () => {
  const [selectedGraphFilter, setSelectedGraphFilter] = React.useState('last30days')
  const [chartOptions, dispatchTimeRange] = useReducer(
    reducerTimeRange,
    reducerTimeRange(baseChartOptions, selectedGraphFilter)
  )

  const {
    data: dataCandidatesCreatedAt,
    loading: loadingCandidatesCreatedAt,
    refetch,
  } = useQuery(GET_CANDIDATES_CREATED_AT_BY_DATE, {
    variables: get_candidates_created_at_by_date_variables(
      chartOptions?.hAxis?.minValue,
      chartOptions?.hAxis?.maxValue
    ),
  })

  useEffect(() => {
    refetch(
      get_candidates_created_at_by_date_variables(
        chartOptions?.hAxis?.minValue,
        chartOptions?.hAxis?.maxValue
      )
    ).then()
  }, [chartOptions, refetch])

  const dataChart = useMemo(() => {
    const defaultDataChart = [
      ['Day', 'Applicants'],
      [new Date().toLocaleDateString(), 0],
    ]

    if (loadingCandidatesCreatedAt) return defaultDataChart

    let data: [string, number][] = []

    if (dataCandidatesCreatedAt?.findManyCandidate?.length) {
      data = fillMissingDaysWithDefault(
        countRecordsByDay(
          dataCandidatesCreatedAt.findManyCandidate.map(
            (item: { createdAt: string }) => item.createdAt
          )
        ),
        chartOptions?.hAxis?.minValue,
        chartOptions?.hAxis?.maxValue,
        0
      )
    }

    return data.length > 0 ? [['Day', 'Applicants'], ...data] : defaultDataChart
  }, [
    chartOptions?.hAxis?.maxValue,
    chartOptions?.hAxis?.minValue,
    dataCandidatesCreatedAt?.findManyCandidate,
    loadingCandidatesCreatedAt,
  ])

  return (
    <div className="w-full rounded border">
      <div className="flex items-center border-b py-4">
        <p className="px-4 text-lg font-semibold">Candidates</p>
        <Select
          list={filterGraphOptions}
          selected={selectedGraphFilter}
          onChange={(e) => {
            setSelectedGraphFilter(e)
            dispatchTimeRange(e)
          }}
        />
      </div>

      <div className="flex items-center justify-center">
        <Chart
          width={'100%'}
          height={'300px'}
          chartType="AreaChart"
          loader={<div>Loading Chart</div>}
          data={dataChart}
          options={chartOptions}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
      <div className="mt-4 grid w-full grid-cols-4 gap-1 divide-x-2">
        {appliesData.map((apply) => (
          <div className="flex flex-col items-center justify-center" key={apply.id}>
            <p>{apply.type}</p>
            <p className="font-bold">{apply.number}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AppliedGraph
