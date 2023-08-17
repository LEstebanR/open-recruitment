import React from 'react'
import { AuthenticatedHeader } from './header/header-authenticated'
import { LandingHeader } from './header/header-landing'
import { useSession } from 'next-auth/react'

export const Header: React.FC = () => {
  const { data: session } = useSession()
  const HeaderComponent = session ? AuthenticatedHeader : LandingHeader

  return (<HeaderComponent />)
}
