import React from 'react'
import type { NextPageWithLayout } from '../_app'
import { GetServerSidePropsContext } from 'next'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import LayoutAuthenticated from '@/components/layout/layout-authenticated'
import { useRedirectionFlag } from '@/hooks/redirection'
import { LayoutSideMenu } from '@/components/layout/main/layout-side-menu'
import { gql, useQuery } from '@apollo/client'
import { useSession } from 'next-auth/react'
import Loader from '@/components/UI/loader'
import { events, sourceData, tagData, titles } from '@/utils/mockdata'
import RecentEvents from '@/components/dashboard/recent-events'
import AppliedGraph from '@/components/dashboard/applied-graph'
import FilterTag from '@/components/dashboard/filter-tag'

const GET_DATA = gql`
  query getData {
    me {
      hiringRoles {
        company {
          name
        }
        id
      }
      email
    }
  }
`

const Dashboard: NextPageWithLayout = () => {
  const { data, loading } = useQuery(GET_DATA)
  const { data: session } = useSession()
  const company = session?.user?.selectedCompany
    ? data?.me.hiringRoles.filter(
        (company: { _typename: string; name: string; id: number }) =>
          company.id === session?.user.selectedCompany
      )[0].company
    : {}

  useRedirectionFlag()

  return (
    <LayoutSideMenu>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex w-full flex-col gap-4 px-2">
          <div className="grid w-full grid-cols-4 gap-1 divide-x-2">
            <div className="flex flex-col">
              <p className="font-bold">{company.name}</p>
              <p>{data?.me.email}</p>
            </div>
            {titles.map((title: { icon: React.JSX.Element; title: string; number: number }) => (
              <div className="flex items-center gap-2 px-4 text-base" key={title.title}>
                <title.icon className="h-6 w-6" />
                <p>{title.title}</p>
                <p className="font-bold">{title.number}</p>
              </div>
            ))}
          </div>
          <RecentEvents events={events} />
          <AppliedGraph />
          <div className="grid w-full grid-cols-2 gap-1">
            <FilterTag tagData={tagData} label="Tag" />
            <FilterTag tagData={sourceData} label="Source" />
          </div>
        </div>
      )}
    </LayoutSideMenu>
  )
}

Dashboard.auth = {
  permission: 'SUPERADMIN',
  loading: <LayoutAuthenticated>Dashboard Loading</LayoutAuthenticated>,
}

export default Dashboard

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)

  return { props: { session } }
}
