import React, { ReactElement } from 'react'
import { LayoutSideMenu } from '@/components/layout/main/layout-side-menu'
import LayoutAuthenticated from '@/components/layout/layout-authenticated'

const Notifications = () => {
  return (
    <LayoutSideMenu>
      <p>Notifications</p>
    </LayoutSideMenu>
  )
}

Notifications.auth = {}

export default Notifications
