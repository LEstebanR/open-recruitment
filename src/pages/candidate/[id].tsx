import React from 'react'
import { useRouter } from 'next/router'
import CandidateView from '@/components/views/candidate/candidate-view'
import Loader from '@/components/ui/loader'

const Page = () => {
  const router = useRouter()
  const { id } = router.query

  if (!id) {
    router.push('/candidates').then()
  }

  if (!id) {
    return <Loader />
  }

  return (
    <div className="overflow-y-auto">
      <CandidateView candidateId={id as string} />
    </div>
  )
}

Page.auth = {}
export default Page
