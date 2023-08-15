import React from 'react'
import { useIsAuthenticated } from '@/utils/auth'
import { AuthenticatedHeader } from './header/authenticated-header'
import { LandingHeader } from './header/landing-header'

export const Header: React.FC = () => {
  const { isAuthenticated } = useIsAuthenticated()

  return (
    <header className="w-screen">
      {isAuthenticated ? <AuthenticatedHeader /> : <LandingHeader />}
    </header>
  )
}
