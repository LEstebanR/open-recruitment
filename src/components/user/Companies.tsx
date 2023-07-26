import React from 'react'
import { Button } from '../UI/Button'
import { GoPlus } from 'react-icons/go'
import { user } from '@/utils/mockdata'
import CompanyCard from '../UI/cards/CompanyCard'

const Companies = () => {
  return (
    <div>
      <div className="flex  items-center justify-between mt-2">
        <h2 className="text-xl">My companies</h2>
        <Button variant="solid" color="primary" size="large" icon={<GoPlus />}>
          Add Company
        </Button>
      </div>
      {user.companies.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </div>
  )
}

export default Companies
