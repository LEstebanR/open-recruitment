import SideMenu from '@/components/layout/side-menu'
import React, { ReactNode } from 'react'

export const LayoutSideMenu: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-full w-submenu overflow-y-auto overflow-x-hidden">
        <SideMenu />
      </div>
      <div className="flex h-full w-panel grow flex-col items-center justify-start gap-2 overflow-auto border p-4">
        {children}
      </div>
    </div>
  )
}
