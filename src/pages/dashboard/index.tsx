import React from 'react'
import type { NextPageWithLayout } from '../_app'
import { GetServerSidePropsContext } from 'next'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import LayoutAuthenticated from '@/components/layout/layout-authenticated'
import { useRedirectionFlag } from '@/hooks/redirection'
import { LayoutSideMenu } from '@/components/layout/main/layout-side-menu'
import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import { Chart } from 'react-google-charts'
import Link from 'next/link'
import { gql, useQuery } from '@apollo/client'
import { useSession } from 'next-auth/react'
import { Select } from '@/components/UI/select'
import Loader from '@/components/UI/loader'
import {
  filterGraphOptions,
  events,
  titles,
  appliesData,
  tagData,
  sourceData,
  dataChart,
} from '@/utils/mockdata'
import RecentEvents from '@/components/dashboard/recent-events'

const chartOptions = {
  legend: { position: 'none' },
  vAxis: { minValue: 0, maxValue: 10, gridlines: { count: 5 } },
  hAxis: {
    format: 'M/d/yy',
    gridlines: { count: 15 },
  },
  chartArea: { width: '95%', height: '80%' },
}

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
  const [selectedGraphFilter, setSelectedGraphFilter] = React.useState('last30days')
  const company = data?.me.hiringRoles.filter(
    (company: { _typename: string; name: string; id: number }) =>
      company.id === session?.user.selectedCompany
  )[0].company

  console.log(data)

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
            {titles.map((title) => (
              <div className="flex items-center gap-2 px-4 text-base" key={title.title}>
                <title.icon className="h-6 w-6" />
                <p>{title.title}</p>
                <p className="font-bold">{title.number}</p>
              </div>
            ))}
          </div>
          <RecentEvents events={events} />
          <div className="w-full rounded border">
            <div className="flex items-center border-b py-4">
              <p className="px-4 text-lg font-semibold">Candidates</p>
              <Select
                list={filterGraphOptions}
                selected={selectedGraphFilter}
                onChange={(e) => {
                  setSelectedGraphFilter(e)
                }}
              />
            </div>

            <div className="flex items-center justify-center">
              <Chart
                width={'100%'}
                height={'300px'}
                chartType="AreaChart"
                loader={<div>Loading Chart</div>}
                data={dataChart}
                options={chartOptions}
                rootProps={{ 'data-testid': '1' }}
              />
            </div>
            <div className="mt-4 grid w-full grid-cols-4 gap-1 divide-x-2">
              {appliesData.map((apply) => (
                <div className="flex flex-col items-center justify-center" key={apply.id}>
                  <p>{apply.type}</p>
                  <p className="font-bold">{apply.number}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-1">
            <div className="flex flex-col gap-2">
              <span className="flex gap-1 font-bold">
                <p>Tag</p>
                <Cog6ToothIcon className="h-6 w-6" />
              </span>
              {
                <div className="flex flex-wrap gap-2">
                  {tagData.map((tag) => (
                    <Link href={`/candidates?tag=${tag.type}`} key={tag.id}>
                      <div
                        className="flex items-center justify-center gap-2 divide-x-2 rounded-md border px-4 py-2"
                        key={tag.id}
                      >
                        <p>{tag.type}</p>
                        <p className="pl-2 font-bold">{tag.number}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              }
            </div>
            <div className="flex flex-col gap-2">
              <span className="flex gap-1 font-bold">
                <p>Source</p>
                <Cog6ToothIcon className="h-6 w-6" />
              </span>
              {
                <div className="flex flex-wrap gap-2">
                  {sourceData.map((tag) => (
                    <Link href={`/candidates?source=${tag.type}`} key={tag.id}>
                      <div
                        className="flex items-center justify-center gap-2 divide-x-2 rounded-md border px-4 py-2"
                        key={tag.id}
                      >
                        <p>{tag.type}</p>
                        <p className="pl-2 font-bold">{tag.number}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              }
            </div>
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
