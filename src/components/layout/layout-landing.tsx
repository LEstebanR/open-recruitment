import React, { ReactNode } from 'react'
import FooterLanding from './footer-landing'
import { HeaderLanding } from '@/components/layout/header/header-landing'
import { MainLanding } from '@/components/layout/main/main-landing'

interface Props {
  children: ReactNode
}

const LayoutLanding: React.FC<Props> = ({ children }) => {
  return (
    <div className={'w-screen'}>
      <HeaderLanding />
      <MainLanding>
        {children}
      </MainLanding>
      <FooterLanding />
    </div>
  )
}

export default LayoutLanding