import React from 'react'
import Avatar from '../Avatar'
import { Button } from '../Button'

interface props {
  calendar: calendar
}

interface calendar {
  id: number
  name: string
  logo: string
  email: string
}

const CalendarConnectedCard: React.FC<props> = ({ calendar }) => {
  return (
    <div className="border mt-4 rounded-md flex justify-between py-2 border-l-4 border-l-primary-500">
      <div className="flex gap-4 ">
        <Avatar name={calendar.name} />
        <div className="flex flex-col">
          <h2 className="text-sm md:text-lg font-bold">{calendar.name}</h2>
          <p className="text-xs md:text-sm text-gray-500">{calendar.email}</p>
        </div>
      </div>
      <div className="flex gap-4 items-center p-2">
        <p className="text-gray-500 text-xs md:text-lg">Connected</p>
        <Button variant="outline" color="gray" size="small">
          Disconnect
        </Button>
      </div>
    </div>
  )
}

export default CalendarConnectedCard
