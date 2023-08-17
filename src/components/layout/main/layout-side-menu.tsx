import SideMenu from '@/components/layout/SideMenu'
import React, { ReactNode } from 'react'
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
export const LayoutSideMenu: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='h-full w-full flex justify-center items-center'>
      <SideMenu items={MENU_ITEMS} />
      <div className='p-4 grow h-full flex flex-col items-center justify-start gap-2 border'>
        {children}
      </div>
    </div>
  )
}