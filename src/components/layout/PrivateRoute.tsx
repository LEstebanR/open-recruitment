import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { isAuthenticated } from '@/utils/auth'
import Alert from '@/components/alert'
import SideMenu from './side-menu'

interface Props {
  children: React.ReactNode
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const router = useRouter()
  const { pathname } = router

  useEffect(() => {
    if (!isAuthenticated(pathname)) {
      router.push('/login')
      Alert({
        message: 'You must be logged in to view this page',
        type: 'error',
      })
    }
  }, [pathname, router])

  return (
    <div className="flex h-full  w-full items-center justify-center">
      <SideMenu />
      <div className="flex h-full grow flex-col items-center justify-start gap-2 border p-4">
        {children}
      </div>
    </div>
  )
}

export default PrivateRoute
