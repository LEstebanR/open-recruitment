import React from 'react'
import LayoutAuthenticated from '@/components/layout/layout-authenticated'

const Page = () => {
  return (
    <p className={'text-xl text-primary-50'}>Jobs</p>
  )
}
Page.auth = {
  permission: 'REGULAR',
  loading: <LayoutAuthenticated>Jobs Loading</LayoutAuthenticated>,
}

export default Page