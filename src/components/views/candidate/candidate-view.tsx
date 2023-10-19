import React, { FC, Fragment, useState } from 'react'
import Avatar from '@/components/ui/Avatar'
import { ActivityTab, EmailTab, EvaluationTab, FileTab, OverviewTab } from './tabs'
import EvaluationCandidate from './evaluation'
import Loader from '@/components/ui/loader'
import { useQuery } from '@apollo/client'
import { GET_CANDIDATE_BY_ID } from '@/graphql-operations/queries'
import { find } from 'lodash'
import { AUDIT_LOGS } from '@/utils/mockdata'
import { LinkIcon } from '@heroicons/react/24/solid'
import { Tooltip } from 'react-tooltip'
import CopyLinkToClipboard from '@/components/ui/copy-link-to-clipboard'

type Props = {
  candidateId?: string | number
}

const tabs = [
  {
    id: 'overview',
    name: 'Overview',
    component: OverviewTab,
  },
  {
    id: 'email',
    name: 'Email',
    component: EmailTab,
  },
  {
    id: 'evaluation',
    name: 'Evaluation',
    component: EvaluationTab,
  },
  {
    id: 'file',
    name: 'File',
    component: FileTab,
  },
  {
    id: 'activity',
    name: 'Activity',
    component: ActivityTab,
  },
]

const CandidateView: FC<Props> = ({ candidateId }) => {
  const [tabSelected, setTabSelected] = useState('overview')

  const {
    loading: loadingCandidate,
    data: dataCandidate,
    refetch: refetchCandidate,
    error: errorCandidate,
  } = useQuery(GET_CANDIDATE_BY_ID, {
    fetchPolicy: 'cache-and-network',
    variables: { where: { id: parseInt(String(candidateId)) } },
  })

  const candidate = queryToCandidate(dataCandidate?.findUniqueCandidate)

  if (loadingCandidate) return <Loader />
  if (!candidateId || !candidate || errorCandidate) return <Loader className="border-red-500" />

  const Tab = find(tabs, { id: tabSelected })?.component ?? Fragment
  const props = tabSelected === 'overview' ? { candidate: candidate, logs: AUDIT_LOGS } : {}

  return (
    <div className="flex h-full gap-2">
      <div className="w-100 p-2">
        <div className="flex items-center justify-between gap-16">
          <div className="flex items-center gap-2">
            <Avatar name={candidate.name} />
            <div>
              <h3>{candidate.name}</h3>
              <p className="text-gray-600">Added manually by user 4 days ago</p>
            </div>
          </div>
          <CopyLinkToClipboard url={`${window.location.origin}/candidate/${candidateId}`} />
          <div>Following</div>
        </div>
        <div className="my-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`rounded-md px-4 py-2 ${tabSelected === tab.id ? 'bg-gray-200' : ''}`}
              onClick={() => setTabSelected(tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        {<Tab {...props} />}
      </div>

      <div className="w-[320px] bg-gray-300 p-2">
        <EvaluationCandidate />
      </div>
    </div>
  )
}

export default CandidateView

export type CandidateType = {
  id: number
  name: string
  email: string
  phone: string
  tagSource: {
    tag: {
      id: string
      name: string
    }[]
    source: {
      id: string
      name: string
    }[]
  }
}
const queryToCandidate = (data: any): CandidateType | null => {
  if (!data) return null

  return {
    id: data.id,
    name: data.name,
    email: data.email,
    phone: data.phone,
    tagSource: {
      tag: [
        { id: 'tag1', name: 'tag1' },
        { id: 'tag2', name: 'tag2' },
      ],
      source: [
        { id: 'source1', name: 'source1' },
        { id: 'source2', name: 'source2' },
      ],
    },
  }
}
