import React, { useEffect } from 'react'
import { getSession, useSession } from 'next-auth/react'
import { GoPersonFill } from 'react-icons/go'
import type { NextPageWithLayout } from '../_app'
import { LayoutSideMenu } from '@/components/layout/main/layout-side-menu'


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
  const { data: session, status, update } = useSession()

  useEffect(() => {
    console.log(session)
    console.log(status)
  }, [session, status])
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

Dashboard.auth = true

export default Dashboard

/*export async function getServerSideProps(context: GetServerSidePropsContext) {
  let session = await getServerSession(context.req, context.res, authOptions)

  return { props: { session } }
}*/