import React from 'react'
import { user } from '@/utils/mockdata'
import { IoMdNotificationsOutline } from 'react-icons/io'
import Avatar from '../Avatar'
import { Button } from '../Button'
import { signOut } from 'next-auth/react'
import { BurgerMenu } from '@/components/UI/menu/burger-menu'
import { NavLinks } from '@/components/UI/menu/mobile-nav-links'

export function UserMenu({ links }: NavLinks) {
  return (
    <div className='flex items-center md:gap-8'>
      <IoMdNotificationsOutline className='h-8 w-8' />
      <BurgerMenu links={links} enableOnDesktop={true}>
        <BurgerMenu.Icon>
          <Avatar src={user.avatar} name={user.name} />
        </BurgerMenu.Icon>
        <BurgerMenu.Buttons>
          <Button
            href='#'
            variant='solid'
            size='full'
            onClick={() => {
              signOut().then(r => close())
            }}
          >
            Logout
          </Button>
        </BurgerMenu.Buttons>
      </BurgerMenu>
    </div>
  )
}