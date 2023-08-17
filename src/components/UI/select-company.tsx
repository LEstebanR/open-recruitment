import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { PiBuildingsBold } from 'react-icons/pi'
import { gql, useQuery } from '@apollo/client'

interface Company {
  id: string
  name: string
}

const GET_USER_COMPANIES = gql`
    query getCurrentUserCompanies {
        me {
            hiringRoles {
                company {
                    id
                    name
                }
            }
        }
    }
`

export function SelectCompany() {
  const { data: session, update } = useSession()
  const { data: query } = useQuery(GET_USER_COMPANIES)
  const [selectedCompanyId, setSelectedCompanyId] = React.useState<string>(() => {
    if (session?.user?.selectedCompany) return session?.user?.selectedCompany
    return 'placeholder'
  })

  useEffect(() => {
    const selectedCompany = localStorage.getItem(btoa('selectedCompany' + session?.user.email))

    if (session?.user?.selectedCompany) {
      setSelectedCompanyId(session.user.selectedCompany)
      localStorage.setItem(btoa('selectedCompany' + session.user.email), session.user.selectedCompany)
    } else if (selectedCompany) {
      localStorage.removeItem(btoa('selectedCompany' + session?.user.email))
      update({ selectedCompany: selectedCompany }).then()
    }
  }, [session?.user?.selectedCompany])

  return (
    <div className='flex items-center'>
      <PiBuildingsBold className='h-6 w-6' />
      <select
        id='company'
        name='company'
        className='block text-base focus:outline-none focus:ring-cyan-500  rounded-md h-10 bg-transparent'
        value={selectedCompanyId}
        onChange={(e) => update({ selectedCompany: e.target.value })}
      >
        <option key='placeholder' value='placeholder' disabled>
          Select a Company...
        </option>
        {query?.me.hiringRoles.map((hr: { company: Company }) => (
          <option key={hr.company.id} value={hr.company.id}>
            {hr.company.name}
          </option>
        ))}
      </select>
    </div>
  )
}
