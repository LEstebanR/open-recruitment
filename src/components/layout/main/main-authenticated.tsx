import React, { ReactNode } from 'react'

export const MainAuthenticated: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="flex h-main w-main grow overflow-hidden rounded-tl-lg">
      <div className={'flex w-full grow justify-center rounded-lg bg-white'}>{children}</div>
    </main>
  )
}
