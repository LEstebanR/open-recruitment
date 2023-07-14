import React from 'react'
import PrivateRoute from '@/components/layout/PrivateRoute'
const Home = () => {
  return (
    <PrivateRoute>
      <p>Settings</p>
    </PrivateRoute>
  )
}

export default Home
