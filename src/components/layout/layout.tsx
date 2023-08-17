import React, { ReactNode } from 'react'
import Footer from './footer'
import { Header } from './header'
import { useSession } from 'next-auth/react'
import { Aside } from '@/components/layout/aside'
import { Main } from '@/components/layout/main'

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const { data: session } = useSession()
  const classes = session ? 'flex flex-wrap h-screen w-screen overflow-hidden' : ''

  return (
    <div className={`${classes}`}>
      <Header />
      <Aside />
      <Main>
        {children}
      </Main>
      <Footer />
    </div>
  )
}

export default Layout
