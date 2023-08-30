import React, { useCallback, useEffect } from 'react'
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

  console.log('re-render select-company')

  const refetchAll = useCallback(async () => {
    console.log('asdfasdfasdfasdfasdf')
    await client.refetchQueries({
      include: ['GET_TAGSOURCES'], // Consider using "active" instead!
      updateCache(cache) {
        console.log('cahceuodate')
        console.log(cache)
        cache.evict({ fieldName: 'GET_TAGSOURCES' })
      },
      onQueryUpdated(observableQuery) {
        // Logging and/or debugger breakpoints can be useful in development to
        // understand what client.refetchQueries is doing.
        console.log(`Examining ObservableQuery ${observableQuery.queryName}`)
        // Proceed with the default refetching behavior, as if onQueryUpdated
        // was not provided.
        return true
      },
    })
  }, [client])

  useEffect(() => {
    console.log('use-effect select-company')

    const selectedCompany = localStorage.getItem(btoa('selectedCompany' + session?.user.email))

    if (session?.user?.selectedCompany) {
      setSelectedCompanyId(session.user.selectedCompany)
      localStorage.setItem(
        btoa('selectedCompany' + session.user.email),
        session.user.selectedCompany
      )
    } else if (selectedCompany) {
      localStorage.removeItem(btoa('selectedCompany' + session?.user.email))
      update({ selectedCompany: selectedCompany }).then(refetchAll)
    } else if (query?.me.hiringRoles) {
      update({ selectedCompany: query.me.hiringRoles[0].company.id }).then(refetchAll)
    }
  }, [
    session?.user?.selectedCompany,
    query?.me?.hiringRoles,
    session?.user?.email,
    update,
    refetchAll,
  ])

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
        onChange={(value: string) => update({ selectedCompany: value }).then(refetchAll)}
      />
    </div>
  )
}
