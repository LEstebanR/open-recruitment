import React, { useState } from 'react'
import format from 'date-fns/format'
import { formClasses, Label } from '@/components/ui/fields'
import { parseISO } from 'date-fns'

type DatePickerType = {
  className?: string
  label?: string
  hasTime?: boolean
  onChange?: (x: string) => void
  initialValue?: string
}

export const DatePicker: React.FC<DatePickerType> = ({
  className,
  label,
  hasTime = false,
  onChange,
  initialValue = '',
}) => {
  const getDateInput = (date: string) => {
    const localDate = new Date(date)
    let formattedDate = null

    try {
      formattedDate = hasTime
        ? format(localDate, "yyyy-MM-dd'T'HH:mm:ss.SSS")
        : format(localDate, 'yyyy-MM-dd')
    } catch (e) {
      console.log(e)
    }
    return formattedDate
  }

  const getDateOutput = (date: string) => {
    if (!date) return null

    const localDate = parseISO(date)
    return localDate.toISOString()
  }

  const [value, setValue] = useState(() => getDateInput(initialValue as string))

  const handleOnChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setValue(getDateInput(e.target.value as string))
    if (onChange) {
      onChange(getDateOutput(e.target.value as string) ?? '')
    }
  }

  return (
    <div className={className}>
      {label && <Label id="date">{label}</Label>}
      <input
        id="date"
        type={hasTime ? 'datetime-local' : 'date'}
        className={formClasses}
        onChange={handleOnChange}
        value={value ?? undefined}
      />
    </div>
  )
}
