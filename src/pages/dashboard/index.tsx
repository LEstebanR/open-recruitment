import React, { useEffect } from 'react'
import { getSession, useSession } from 'next-auth/react'
import SideMenu from '@/components/layout/SideMenu'
import { GoPersonFill } from 'react-icons/go'

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

const Home = () => {
  const { data: session, status, update } = useSession()

  useEffect(() => {
    console.log(session)
    console.log(status)
  }, [session, status])
  return (
    <div className='h-full w-full flex justify-center items-center'>
      <SideMenu items={MENU_ITEMS} />
      <div className='p-4 grow h-full flex flex-col items-center justify-start gap-2 border'>
        <button
          onClick={async () => {
            const session = await getSession()
            console.log(session)
          }}
        >
          Get Session
        </button>
        <p>Dashboard</p>
      </div>
    </div>
  )
}

Home.auth = true

export default Home

/*export async function getServerSideProps(context: GetServerSidePropsContext) {
  let session = await getServerSession(context.req, context.res, authOptions)

  return { props: { session } }
}*/