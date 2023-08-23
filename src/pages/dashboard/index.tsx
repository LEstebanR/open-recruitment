import React from 'react'
import { getSession } from 'next-auth/react'
import type { NextPageWithLayout } from '../_app'
import { GetServerSidePropsContext } from 'next'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import LayoutAuthenticated from '@/components/layout/layout-authenticated'
import { useRedirectionFlag } from '@/hooks/redirection'
import { LayoutSideMenu } from '@/components/layout/main/layout-side-menu'

const Dashboard: NextPageWithLayout = () => {
  useRedirectionFlag()

  return (
    <LayoutSideMenu>
      <button
        onClick={async () => {
          const session = await getSession()
          console.log(session)
        }}
      >
        Get Session
      </button>
      <p>Dashboard</p>
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
