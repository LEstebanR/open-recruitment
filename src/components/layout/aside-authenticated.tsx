import React from 'react'
import Sidebar from '@/components/layout/sidebar'

export const AsideAuthenticated: React.FC = () => {
  return (
    <aside className="hidden h-main w-sidebar shrink-0 justify-center sm:flex">
      <Sidebar />
    </aside>
  )
}
