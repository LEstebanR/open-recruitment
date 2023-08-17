import React, { ReactNode } from 'react'
import Footer from './footer'
import Sidebar from './Sidebar'
import { Header } from './Header'
import { useSession } from 'next-auth/react'

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const { data: session } = useSession()

  return (
    <div className='flex flex-col items-center min-h-screen '>
      <Header />
      <main className='flex-grow flex flex-col items-center'>
        {session &&
          <div className='flex justify-around w-screen flex-grow'>
            <div className='w-8 flex-grow hidden sm:block'>
              <Sidebar />
            </div>
            <div className='w-11/12 flex justify-center bg-white rounded-lg flex-grow'>
              {children}
            </div>
          </div>
        }
        {!session &&
          <div className='flex-grow flex items-center flex-col justify-center'>
            {children}
          </div>
        }
      </main>
      <Footer />
    </div>
  )
}

export default Layout
