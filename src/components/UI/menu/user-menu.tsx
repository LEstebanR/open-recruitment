import React from 'react'
import { user } from '@/utils/mockdata'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { IoMdNotificationsOutline } from 'react-icons/io'
import Avatar from '../Avatar'
import { Button } from '../Button'
import { signOut } from 'next-auth/react'

export function UserMenu() {
  return (
    <div className="flex items-center md:gap-8">
      <IoMdNotificationsOutline className="h-8 w-8" />
      <Popover className="">
        {({ open, close }) => (
          <>
            <Popover.Button
              className="h-full relative z-10  inline-flex items-center rounded-lg stroke-gray-900  hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
              aria-label="Toggle site navigation"
            >
              <Avatar src={user.avatar} name={user.name} />
            </Popover.Button>

            <AnimatePresence initial={false}>
              {open && (
                <>
                  <Popover.Panel
                    static
                    as={motion.div}
                    initial={{ opacity: 0, y: -32 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{
                      opacity: 0,
                      y: -32,
                      transition: { duration: 0.2 },
                    }}
                    className="w-60 absolute right-0 z-0 origin-top rounded-2xl bg-gray-50 px-6 py-6 p-7 shadow-2xl shadow-gray-900/20 backdrop-blur"
                  >
                    <div>
                      <Button
                        href="#"
                        variant="solid"
                        size="full"
                        onClick={() => {
                          signOut()
                          close()
                        }}
                      >
                        Logout
                      </Button>
                    </div>
                  </Popover.Panel>
                </>
              )}
            </AnimatePresence>
          </>
        )}
      </Popover>
    </div>
  )
}
