import React from 'react'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '@/components/UI/Button'
import { MobileNavLinks, NavLinks } from './mobile-nav-links'
import { HiMenu, HiChevronUp } from 'react-icons/hi'

export function BurgerMenu({
  links,
  isLogin,
  isSignUp,
}: NavLinks & { isLogin?: boolean; isSignUp?: boolean }) {
  return (
    <Popover className="sm:hidden">
      {({ open, close }) => (
        <>
          <Popover.Button
            className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
            aria-label="Toggle site navigation"
          >
            {open ? (
              <HiChevronUp className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </Popover.Button>

          <AnimatePresence initial={false}>
            {open && (
              <>
                <Popover.Overlay
                  static
                  as={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                />
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
                  className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-16 shadow-2xl shadow-gray-900/20 backdrop-blur"
                >
                  <MobileNavLinks links={links} />
                  <div className="mt-8 flex flex-col gap-4">
                    {!isLogin && (
                      <Button
                        href="/login"
                        variant="outline"
                        size="full"
                        onClick={() => close()}
                      >
                        Log in
                      </Button>
                    )}
                    {!isSignUp && (
                      <Button
                        href="/signup"
                        size="full"
                        onClick={() => close()}
                      >
                        Sign Up
                      </Button>
                    )}
                  </div>
                </Popover.Panel>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </Popover>
  )
}
