import React from 'react'
import Sidebar from '@/components/layout/Sidebar'

export const AsideAuthenticated: React.FC = () => {
  return (<aside className='hidden sm:flex shrink-0 h-main w-sidebar justify-center'>
    <Sidebar />
  </aside>)
}
