import React from 'react'
import PrivateRoute from '@/components/layout/PrivateRoute'
const Home = () => {
  return (
    <PrivateRoute>
      <p>Acquisition</p>
    </PrivateRoute>
  )
}

export default Home
