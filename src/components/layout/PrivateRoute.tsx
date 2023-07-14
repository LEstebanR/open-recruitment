import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { isAuthenticated } from '@/utils/auth'
import Alert from '@/utils/Alert'

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
    <div className="h-full w-full flex justify-center items-center">
      {children}
    </div>
  )
}

export default PrivateRoute
