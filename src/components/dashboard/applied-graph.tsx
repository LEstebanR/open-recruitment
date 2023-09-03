import React, { useEffect, useMemo, useReducer } from 'react'
import { Select } from '../UI/select'
import { Chart, GoogleChartOptions } from 'react-google-charts'
import { endOfMonth, endOfWeek, startOfMonth, startOfWeek, subDays } from 'date-fns'
import { useQuery } from '@apollo/client'
import {
  GET_CANDIDATES_CREATED_AT_BY_DATE,
  get_candidates_created_at_by_date_variables,
} from '../graphql/queries'
import { countRecordsByDay } from '../utils/data-parsing'
import type { Tag as filterTagType } from '@/components/dashboard/filter-tag'
import Link from 'next/link'

export const filterGraphOptions = [
  { label: 'Last 7 days', value: 'last7days' },
  { label: 'Last 30 days', value: 'last30days' },
  { label: 'This week', value: 'thisWeek' },
  { label: 'This month', value: 'thisMonth' },
]

const dateFormat = 'MM-dd-yyyy'

const baseChartOptions: GoogleChartOptions = {
  backgroundColor: '#fff',
  legend: { position: 'none' },
  vAxis: { minValue: 0, gridlines: { interval: [1] }, viewWindow: { min: 0 } },
  hAxis: {
    format: dateFormat,
    gridlines: { interval: [1] },
    minorGridlines: { count: 0 },
  },
  chartArea: { width: '95%', height: '80%' },
  pointSize: 5,
}

function reducerChartOptions(state: GoogleChartOptions, action: string) {
  const currentDate = new Date()
  let dates = null

  switch (action) {
    case 'last7days':
      dates = { start: subDays(currentDate, 7), end: currentDate }
      break
    case 'last30days':
      dates = { start: subDays(currentDate, 30), end: currentDate }
      break
    case 'thisWeek':
      dates = {
        start: startOfWeek(currentDate, { weekStartsOn: 1 }),
        end: endOfWeek(currentDate, { weekStartsOn: 1 }),
      }
      break
    case 'thisMonth':
      dates = { start: startOfMonth(currentDate), end: endOfMonth(currentDate) }
      break
    default:
      dates = null
  }

  return {
    ...state,
    hAxis: {
      ...(state.hAxis ?? {}),
      ...(dates ? { minValue: dates.start, maxValue: dates.end } : {}),
      ...(dates ? { viewWindow: { min: dates.start, max: dates.end } } : {}),
    },
  }
}

// const filterTagSourceDataByDate = (
//   tagSource: { id: number; name: string; list: Record<string, string>[] }[] | undefined,
//   startDate: Date,
//   endDate: Date
// ): filterTagType[] => {
//   const filterTags: filterTagType[] = []

//   if (tagSource) {
//     tagSource.map((tag: { id: number; name: string; list: Record<string, string>[] }) =>
//       tag.list.map((createObj) => {
//         const createdAtDate = parseISO(createObj.createdAt)
//         const localDate = startOfDay(createdAtDate) // Adjust to the local date by setting time to 00:00:00
//         const localDateString = format(localDate, dateFormat)
//       })
//     )

//     return filterTags
//   }
// }

const filterTagSourceDataByReferrer = (candidatesData: { referrer: { name: string } }[]) => {
  const filterTags: { type: string; label: string; number?: number }[] = [
    {
      type: 'Careers Site',
      label: 'Applied via Careers Site',
    },
    {
      type: 'LinkedIn',
      label: 'Aplieed via LinkedIn',
    },
    {
      type: 'Manual',
      label: 'Applied manually',
    },
    {
      type: 'Source',
      label: 'Source',
    },
  ]

  if (candidatesData) {
    filterTags.map((tag: { type: string; label: string; number?: number | undefined }) => {
      const filtered = candidatesData.filter(
        (candidate: { referrer: { name: string } }) => candidate.referrer.name === tag.type
      )
      tag.number = filtered.length
    })
  }

  return filterTags
}

const AppliedGraph: React.FC = () => {
  const [selectedGraphFilter, setSelectedGraphFilter] = React.useState('last30days')
  const [chartOptions, dispatchCartOptions] = useReducer(
    reducerChartOptions,
    reducerChartOptions(baseChartOptions, selectedGraphFilter)
  )

  const {
    data: dataCandidatesCreatedAt,
    loading: loadingCandidatesCreatedAt,
    refetch,
  } = useQuery(GET_CANDIDATES_CREATED_AT_BY_DATE, {
    variables: get_candidates_created_at_by_date_variables(
      chartOptions?.hAxis?.minValue,
      chartOptions?.hAxis?.maxValue
    ),
  })

  useEffect(() => {
    refetch(
      get_candidates_created_at_by_date_variables(
        chartOptions?.hAxis?.minValue,
        chartOptions?.hAxis?.maxValue
      )
    ).then()
  }, [chartOptions, refetch])

  const dataChart = useMemo(() => {
    const header = [
      { type: 'date', label: 'Day' },
      { type: 'number', label: 'Applicants' },
    ]
    const defaultDataChart = [header, [new Date(), 0]]

    if (loadingCandidatesCreatedAt) return defaultDataChart

    let data: [Date, number][] = []

    if (dataCandidatesCreatedAt?.findManyCandidate?.length) {
      data = countRecordsByDay(
        dataCandidatesCreatedAt.findManyCandidate.map(
          (item: { createdAt: string }) => item.createdAt
        ),
        dateFormat
      )
    }

    return data.length > 0 ? [header, ...data] : defaultDataChart
  }, [dataCandidatesCreatedAt?.findManyCandidate, loadingCandidatesCreatedAt])

  return (
    <div className="w-full rounded border">
      <div className="flex items-center border-b py-4">
        <p className="px-4 text-lg font-semibold">Candidates</p>
        <Select
          list={filterGraphOptions}
          selected={selectedGraphFilter}
          onChange={(e) => {
            setSelectedGraphFilter(e)
            dispatchCartOptions(e)
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
        {filterTagSourceDataByReferrer(dataCandidatesCreatedAt?.findManyCandidate).map((apply) => (
          <Link href={'#'} key={apply.type}>
            <div className="flex h-12 flex-col items-center justify-between">
              <p>{apply.label}</p>
              <p className="font-bold">{apply.number}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AppliedGraph
