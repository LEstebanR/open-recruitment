import React from 'react'
import { useSession } from 'next-auth/react'
import Sidebar from '@/components/layout/Sidebar'

export const Aside: React.FC = () => {
  const { data: session } = useSession()

  return (
    <>
      {session &&
        <aside className='hidden sm:flex shrink-0 h-main w-sidebar justify-center'>
          <Sidebar />
        </aside>}
    </>
  )
}
