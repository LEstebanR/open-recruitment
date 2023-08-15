import React from 'react'
import { SelectCompany } from '@/components/UI/Fields'
import { Logo } from '@/components/UI/Logo'
import Chip from '@/components/UI/Chip'
import { user } from '@/utils/mockdata'
import { UserMenu } from '@/components/UI/menu/user-menu'

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
    <div className='flex justify-between md:px-8 h-14 items-center max-w-screen z-10'>
      <div className='flex items-center gap-8'>
        <Logo />
        <div className='md:flex gap-2 hidden'>
          <SelectCompany companies={user.companies} />
          <Chip>{user.plan}</Chip>
        </div>
      </div>
      <UserMenu links={navOptions} />
    </div>
  )
}
