import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { isAuthenticated } from '@/utils/auth'
import Alert from '@/utils/Alert'
import SideMenu from './SideMenu'
import { GoPersonFill } from 'react-icons/go'

interface Props {
  children: React.ReactNode
}

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

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const router = useRouter()
  const { pathname } = router

  useEffect(() => {
    if (!isAuthenticated(pathname)) {
      router.push('/login')
      Alert({
        message: 'You must be logged in to view this page',
        type: 'error',
      })
    }
  }, [pathname, router])

  return (
    <div className="h-full w-full flex justify-center items-center">
      <SideMenu items={MENU_ITEMS} />
      <div className="p-4 grow h-full flex flex-col items-center justify-start gap-2 border">
        {children}
      </div>
    </div>
  )
}

export default PrivateRoute
