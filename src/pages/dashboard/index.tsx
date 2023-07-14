import React from 'react'
import PrivateRoute from '@/components/layout/PrivateRoute'
const Home = () => {
  return (
    <PrivateRoute>
      <p>Dashboard</p>
    </PrivateRoute>
  )
}

export default Home
