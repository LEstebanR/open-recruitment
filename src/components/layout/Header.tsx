import React from 'react'
import { AuthenticatedHeader } from './header/header-authenticated'
import { LandingHeader } from './header/header-landing'
import { useSession } from 'next-auth/react'

export const Header: React.FC = () => {
  const { data: session } = useSession()

  return (
    <header className='w-screen'>
      {session ? <AuthenticatedHeader /> : <LandingHeader />}
    </header>
  )
}
