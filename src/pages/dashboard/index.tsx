import React from 'react'
import type { NextPageWithLayout } from '../_app'
import { GetServerSidePropsContext } from 'next'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import LayoutAuthenticated from '@/components/layout/layout-authenticated'
import { useRedirectionFlag } from '@/hooks/redirection'
import { LayoutSideMenu } from '@/components/layout/main/layout-side-menu'
import { useQuery } from '@apollo/client'
import { useSession } from 'next-auth/react'
import Loader from '@/components/UI/loader'
import { events } from '@/utils/mockdata'
import RecentEvents from '@/components/dashboard/recent-events'
import AppliedGraph from '@/components/dashboard/applied-graph'
import FilterTag from '@/components/dashboard/filter-tag'
import type { Tag as filterTagType } from '@/components/dashboard/filter-tag'

import {
  GET_ME_DATA_AND_COMPANIES,
  GET_DASHBOARD_COUNTS,
  get_tagSources_variables,
  GET_TAGSOURCES,
} from '@/components/graphql/queries'
import { BriefcaseIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/outline'

export const countComponents = [
  {
    icon: UserIcon,
    title: 'Candidates',
    query: 'countCandidate',
  },
  {
    icon: BriefcaseIcon,
    title: 'Job openings',
    query: 'countOffer',
  },
  {
    icon: UserGroupIcon,
    title: 'Talent Pools',
    query: 'countTalentPool',
  },
]

const filterTagSourceData = (
  tagSource: { id: number; name: string; count: Record<string, string>[] }[] | undefined
): filterTagType[] => {
  const filterTags: filterTagType[] = []

  if (tagSource) {
    tagSource.map((tag: { id: number; name: string; count: Record<string, string>[] }) => {
      filterTags.push({
        id: tag?.id,
        name: tag?.name,
        number: tag?.count?.length ?? 0,
      })
    })
  }

  return filterTags
}

const Dashboard: NextPageWithLayout = () => {
  const { data: session } = useSession()
  const { data: meCompany, loading } = useQuery(GET_ME_DATA_AND_COMPANIES)
  const { data: counts, loading: loadingCounts } = useQuery(GET_DASHBOARD_COUNTS)
  const { data: tagSourceData } = useQuery(GET_TAGSOURCES, {
    variables: get_tagSources_variables(),
  })

  const company = session?.user?.selectedCompany
    ? meCompany?.me.hiringRoles.filter(
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
              <p>{meCompany?.me.email}</p>
            </div>
            {countComponents.map((countElement) => (
              <div className="flex items-center gap-2 px-4 text-base" key={countElement.title}>
                <countElement.icon className="h-6 w-6" />
                <p>{countElement.title}</p>
                <p className="font-bold">
                  {!loadingCounts && counts && counts[countElement.query]
                    ? counts[countElement.query]
                    : 0}
                </p>
              </div>
            ))}
          </div>
          <RecentEvents events={events} />
          <AppliedGraph />
          <div className="grid w-full grid-cols-2 gap-1">
            <FilterTag tagData={filterTagSourceData(tagSourceData?.tags)} label="Tag" />
            <FilterTag tagData={filterTagSourceData(tagSourceData?.sources)} label="Source" />
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
