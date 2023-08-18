import React, { ReactNode } from 'react'

export const MainLanding: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className='flex flex-grow h-main w-full'>
      <div
        className={'flex-grow flex items-center flex-col justify-center'}>
        {children}
      </div>
    </main>

  )
}
