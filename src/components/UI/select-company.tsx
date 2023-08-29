import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useApolloClient, useQuery } from '@apollo/client'
import { Select } from '@/components/UI/select'
import { HiBuildingOffice2 } from 'react-icons/hi2'
import { GET_ME_COMPANIES } from '../graphql/queries'

interface Company {
  id: string
  name: string
}

export function SelectCompany() {
  const client = useApolloClient()
  const { data: session, update } = useSession()
  const { data: query } = useQuery(GET_ME_COMPANIES)
  const [selectedCompanyId, setSelectedCompanyId] = React.useState<string>(() => {
    if (session?.user?.selectedCompany) return session?.user?.selectedCompany
    return 'placeholder'
  })

  useEffect(() => {
    const selectedCompany = localStorage.getItem(btoa('selectedCompany' + session?.user.email))

    if (session?.user?.selectedCompany) {
      setSelectedCompanyId(session.user.selectedCompany)
      localStorage.setItem(
        btoa('selectedCompany' + session.user.email),
        session.user.selectedCompany
      )
    } else if (selectedCompany) {
      localStorage.removeItem(btoa('selectedCompany' + session?.user.email))
      update({ selectedCompany: selectedCompany }).then()
    } else if (query?.me.hiringRoles) {
      update({ selectedCompany: query.me.hiringRoles[0].company.id }).then()
    }
  }, [session?.user.selectedCompany, query?.me?.hiringRoles, session?.user.email, update])

  let companies = [{ label: 'Select a Company...', value: 'placeholder', placeholder: true }]

  if (query?.me.hiringRoles) {
    companies = [
      ...companies,
      ...query.me.hiringRoles.map((hr: { company: Company }) => ({
        label: hr.company.name,
        value: hr.company.id,
      })),
    ]
  }

  return (
    <div className="flex items-center">
      <HiBuildingOffice2 className="mr-2 h-6 w-6" />
      <Select
        selected={selectedCompanyId}
        list={companies}
        onChange={(value: string) =>
          update({ selectedCompany: value }).then(async () => {
            await client.refetchQueries({
              include: 'all', // Consider using "active" instead!
            })
          })
        }
      />
    </div>
  )
}
