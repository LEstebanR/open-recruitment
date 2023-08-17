import React, { ReactNode } from 'react'
import { useSession } from 'next-auth/react'
import { AuthenticatedMain } from '@/components/layout/main/main-authenticated'
import { LandingMain } from '@/components/layout/main/main-landing'

export const Main: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const { data: session } = useSession()
  const MainComponent = session ? AuthenticatedMain : LandingMain

  return (
    <MainComponent>
      {children}
    </MainComponent>
  )
}
