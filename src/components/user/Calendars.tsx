import React from 'react'
import { user } from '@/utils/mockdata'
import { Button } from '../UI/Button'
import { GoCalendar, GoPlus } from 'react-icons/go'
import CalendarConnectedCard from '../UI/cards/CalendarConnectedCard'

const EmptyState = () => {
  return (
    <div className="m-4 border bg-gray-200 rounded-lg flex flex-col items-center py-4 gap-4">
      <GoCalendar className="w-16 h-16 text-gray-500" />
      <h2 className="text-gray-500 text-lg font-bold">No calendars synced</h2>
      <p className="text-gray-500 text-center">
        Sync your calendar to start scheduling meetings
      </p>
      <Button icon={<GoPlus />} size="large">
        Sync Calendar
      </Button>
    </div>
  )
}

const Calendars = () => {
  return user.calendars ? (
    <div>
      {user.calendars.map((calendar) => (
        <CalendarConnectedCard key={calendar.id} calendar={calendar} />
      ))}
      <div className="flex flex-row-reverse mt-4">
        <Button variant="solid" color="primary" size="large" icon={<GoPlus />}>
          Add Calendar
        </Button>
      </div>
    </div>
  ) : (
    <EmptyState />
  )
}

export default Calendars
