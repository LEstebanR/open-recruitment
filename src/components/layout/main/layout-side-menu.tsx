import SideMenu from '@/components/layout/SideMenu'
import React, { ReactNode } from 'react'
import { GoPersonFill } from 'react-icons/go'

export const LayoutSideMenu: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='h-full w-full flex justify-center items-center'>
      <div className='w-submenu h-full overflow-y-auto overflow-x-hidden'>
        <SideMenu />
      </div>
      <div className='w-panel h-full p-4 overflow-auto grow flex flex-col items-center justify-start gap-2 border'>
        {children}
      </div>
    </div>
  )
}