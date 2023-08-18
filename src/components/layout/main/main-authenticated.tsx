import React, { ReactNode } from 'react'

export const MainAuthenticated: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className='flex flex-grow h-main w-main overflow-hidden'>
      <div
        className={'w-full flex justify-center bg-white rounded-lg flex-grow'}>
        {children}
      </div>
    </main>
  )
}
