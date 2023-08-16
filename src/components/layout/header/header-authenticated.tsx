import React from 'react'
import { SelectCompany } from '@/components/UI/select-company'
import { Logo } from '@/components/UI/Logo'
import Chip from '@/components/UI/Chip'
import { user } from '@/utils/mockdata'
import { UserMenu } from '@/components/layout/header/menu-user'
import { IoMdNotificationsOutline } from 'react-icons/io'

const navOptions: [string, string][] = [
  ['/dashboard', 'Dashboard'],
  ['/candidates', 'Candidates'],
  ['/jobs', 'Jobs'],
  ['/mailbox', 'Mailbox'],
  ['/reports', 'Reports'],
  ['/talent-pool', 'Talent pool'],
  ['/acquisition', 'Acquisition'],
  ['/settings', 'Settings'],
]

export function AuthenticatedHeader() {
  return (
    <div className="flex justify-between md:px-8 h-14 items-center max-w-screen z-10">
      <div className="flex items-center gap-8 px-2">
        <Logo />
        <div className="md:flex gap-2 hidden">
          <SelectCompany />
          <Chip>{user.plan}</Chip>
        </div>
      </div>
      <div className="flex items-center md:gap-8">
        <IoMdNotificationsOutline className="h-8 w-8" />
        <UserMenu links={navOptions} />
      </div>
    </div>
  )
}
