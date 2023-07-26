import React from 'react'
import PrivateRoute from '@/components/layout/PrivateRoute'

const Notifications = () => {
  return (
    <PrivateRoute>
      <p>Notifications</p>
    </PrivateRoute>
  )
}

export default Notifications
