import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useIsAuthenticated } from '@/utils/auth'
import Sidebar from './Sidebar'

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const { isAuthenticated } = useIsAuthenticated()

  return (
    <div className='flex flex-col items-center min-h-screen '>
      <Header />
      <main className='flex-grow flex flex-col items-center'>
        {isAuthenticated ? (
          <div className='flex justify-around w-screen flex-grow'>
            <div className='w-8 flex-grow hidden sm:block'>
              <Sidebar />
            </div>
            <div className='w-11/12 flex justify-center bg-white rounded-lg flex-grow'>
              {children}
            </div>
          </div>
        ) : (
          <div className='flex-grow flex items-center flex-col justify-center'>
            {children}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
