import React, { useEffect } from 'react'
import PrivateRoute from '@/components/layout/PrivateRoute'
import { useSession } from 'next-auth/react'

const Home = () => {
  const { data: session, status } = useSession()

  useEffect(() => {
    console.log(session)
    console.log(status)
  }, [session, status])
  return (
    <PrivateRoute>
      <p>Dashboard</p>
    </PrivateRoute>
  )
}

export default Home
