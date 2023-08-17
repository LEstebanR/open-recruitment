import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { gql, useQuery } from '@apollo/client'
import { Select } from '@/components/UI/select'
import { HiBuildingOffice2 } from 'react-icons/hi2'

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
  const { data: query, loading } = useQuery(GET_USER_COMPANIES)
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
    } else if (query?.me.hiringRoles) {
      update({ selectedCompany: query.me.hiringRoles[0].company.id }).then()
    }
  }, [session?.user?.selectedCompany, query?.me.hiringRoles])

  let companies = [
    { label: 'Select a Company...', value: 'placeholder', placeholder: true },
  ]

  if (query?.me.hiringRoles) {
    companies = [
      ...companies,
      ...query.me.hiringRoles.map((hr: { company: Company }) => (
        { label: hr.company.name, value: hr.company.id }
      )),
    ]
  }

  return (
    <div className='flex items-center'>
      <HiBuildingOffice2 className='h-6 w-6 mr-2' />
      <Select selected={selectedCompanyId} list={companies}
              onChange={(value: string) => update({ selectedCompany: value })} />
    </div>
  )
}
