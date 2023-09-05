import React, { ReactNode } from 'react'
import FooterLanding from './footer-landing'
import { HeaderLanding } from '@/components/layout/header/header-landing'
import { MainLanding } from '@/components/layout/main/main-landing'

interface Props {
  children: ReactNode
}

const LayoutLanding: React.FC<Props> = ({ children }) => {
  return (
    <div className={'flex min-h-screen w-screen flex-col justify-between'}>
      <HeaderLanding />
      <MainLanding>{children}</MainLanding>
      <FooterLanding />
    </div>
  )
}

export default LayoutLanding
