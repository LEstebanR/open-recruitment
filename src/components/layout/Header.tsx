import React from 'react'
import { useIsAuthenticated } from '@/utils/auth'
import { AuthenticatedHeader } from './header/header-authenticated'
import { LandingHeader } from './header/header-landing'

export const Header: React.FC = () => {
  const { isAuthenticated } = useIsAuthenticated()

  return (
    <header className="w-screen">
      {isAuthenticated ? <AuthenticatedHeader /> : <LandingHeader />}
    </header>
  )
}
