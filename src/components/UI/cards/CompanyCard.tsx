import React from 'react'
import Avatar from '../Avatar'
import Chip from '../Chip'
import { GoPeople, GoCheck, GoKebabHorizontal } from 'react-icons/go'
import { Button } from '../Button'
import { Tooltip } from 'react-tooltip'

type props = {
  company: company
}

type company = {
  id: number
  name: string
  role: string
  members: number
  signed: boolean
}

const CompanyCard: React.FC<props> = ({ company }) => {
  return (
    <div className="border mt-4 rounded-md flex justify-between py-2 border-l-4 border-l-primary-500">
      <div className="flex gap-4 ">
        <Avatar name={company.name} />
        <div className="flex flex-col">
          <span className="flex gap-4">
            <h2 className="text-xs md:text-lg">{company.name}</h2>
            <Chip>ID: {company.id}</Chip>
          </span>
          <div className="flex gap-2 items-center text-gray-500">
            <p>{company.role}</p>
            <span className="flex gap-1 items-center">
              <GoPeople data-tooltip-id="members-tooltip" />
              <Tooltip
                place="bottom"
                content="Team members"
                id="members-tooltip"
                className="capitalize"
              />
              <p>{company.members}</p>
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center mr-4">
        {company.signed ? (
          <div className="flex gap-2 items-center">
            <GoCheck className="text-primary-500" />
            <p className="text-primary-500">Signed in</p>
            <GoKebabHorizontal
              data-tooltip-id="more-tooltip"
              className="w-6 h-6 text-base cursor-pointer hover:bg-gray-200 rounded-lg "
            />
            <Tooltip
              place="bottom"
              content="More"
              id="more-tooltip"
              className="capitalize"
            />
          </div>
        ) : (
          <Button variant="solid" color="primary" size="small">
            Sign in
          </Button>
        )}
      </div>
    </div>
  )
}

export default CompanyCard
