import React, { ReactNode } from 'react'

export const MainLanding: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="flex w-full grow">
      <div className={'flex grow flex-col items-center justify-center'}>{children}</div>
    </main>
  )
}
