import React from 'react'
import { getSession } from 'next-auth/react'
import { GoPersonFill } from 'react-icons/go'
import type { NextPageWithLayout } from '../_app'
import { LayoutSideMenu } from '@/components/layout/main/layout-side-menu'
import { GetServerSidePropsContext } from 'next'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import LayoutAuthenticated from '@/components/layout/layout-authenticated'
import { useRedirectionFlag } from '@/hooks/redirection'


const MENU_ITEMS = [
  {
    name: 'My account',
    href: '/settings/account',
    icon: <GoPersonFill />,
    type: 'collapse',
    collaspse_items: [
      {
        name: 'Profile',
        href: '/settings/profile',
      },
      {
        name: 'Notifications',
        href: '/settings/notifications',
      },
    ],
  },
]

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
  let session = await getServerSession(context.req, context.res, authOptions)

  return { props: { session } }
}