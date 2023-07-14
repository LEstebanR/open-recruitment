import React from 'react'
import PrivateRoute from '@/components/layout/PrivateRoute'
const Home = () => {
  return (
    <PrivateRoute>
      <p>Jobs</p>
    </PrivateRoute>
  )
}

export default Home
