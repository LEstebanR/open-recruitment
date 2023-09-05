import React from 'react'
import { LayoutSideMenu } from '@/components/layout/main/layout-side-menu'

const Notifications = () => {
  return (
    <LayoutSideMenu menu={'settings'}>
      <p>Notifications</p>
    </LayoutSideMenu>
  )
}

Notifications.auth = {}

export default Notifications
