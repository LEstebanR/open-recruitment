import React, { ReactNode, SVGProps } from 'react'
import { Popover } from '@headlessui/react'
import { Container } from '../UI/Container'
import { Logo } from '../UI/Logo'
import { NavLinks } from '../UI/NavLinks'
import Link from 'next/link'
import { Button } from '../UI/Button'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter, NextRouter } from 'next/router'
import { isAuthenticated } from '@/utils/auth'
import { SelectCompany } from '../UI/Fields'
import { user } from '@/utils/mockdata'
import Chip from '../UI/Chip'
import { IoMdNotificationsOutline } from 'react-icons/io'
import Avatar from '../UI/Avatar'

interface MobileNavLinkProps {
  children: ReactNode
  href: string
}

function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink({ children, ...props }: MobileNavLinkProps) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  )
}

const MobileNavLinks = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <div className="space-y-4">
        <MobileNavLink href="/dashboard">Dashboard</MobileNavLink>
        <MobileNavLink href="/candidates">Candidates</MobileNavLink>
        <MobileNavLink href="/jobs">Jobs</MobileNavLink>
        <MobileNavLink href="/reports">Reports</MobileNavLink>
        <MobileNavLink href="/settings">Settings</MobileNavLink>
      </div>
    )
  } else {
    return (
      <div className="space-y-4 m">
        <MobileNavLink href="/features">Features</MobileNavLink>
        <MobileNavLink href="/reviews">Reviews</MobileNavLink>
        <MobileNavLink href="/pricing">Pricing</MobileNavLink>
        <MobileNavLink href="/faqs">FAQs</MobileNavLink>
      </div>
    )
  }
}

const Header: React.FC = () => {
  const router: NextRouter = useRouter()
  const currentPath = router.pathname

  const navOptions: [string, string][] = [
    ['Features', '#features'],
    ['Reviews', '#reviews'],
    ['Pricing', '#pricing'],
    ['FAQs', '#faqs'],
  ]

  const AuthenticatedHeader = () => {
    return (
      <div className="flex justify-between px-8 py-4 items-center max-w-screen">
        <div className="flex items-center gap-8">
          <Logo />
          <div className="md:flex gap-2 hidden">
            <SelectCompany companies={user.companies} />
            <Chip>{user.plan}</Chip>
          </div>
        </div>
        <div className="md:flex items-center gap-8 hidden">
          <IoMdNotificationsOutline className="h-8 w-8" />
          <Avatar src={user.avatar} alt={user.name} />
        </div>
        <Popover className="md:hidden">
          {({ open, close }) => (
            <>
              <Popover.Button
                className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                aria-label="Toggle site navigation"
              >
                {open ? (
                  <ChevronUpIcon className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
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
                      {MobileNavLinks(isAuthenticated(currentPath))}
                      <div className="mt-4">
                        <Button
                          href="#"
                          variant="solid"
                          size="full"
                          onClick={() => close()}
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

  return (
    <header className="w-screen">
      {isAuthenticated(currentPath) ? (
        <AuthenticatedHeader />
      ) : (
        <nav className="h-12">
          <Container>
            <div className="flex justify-between py-4">
              <div className="relative  flex items-center gap-16">
                <Logo />
                <div className="hidden lg:flex lg:gap-10">
                  {currentPath == '/' && <NavLinks links={navOptions} />}
                </div>
              </div>
              <div className="flex items-center md:gap-4">
                <Popover className="lg:hidden">
                  {({ open, close }) => (
                    <>
                      <Popover.Button
                        className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                        aria-label="Toggle site navigation"
                      >
                        {open ? (
                          <ChevronUpIcon className="h-6 w-6" />
                        ) : (
                          <MenuIcon className="h-6 w-6" />
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
                              {MobileNavLinks(isAuthenticated(currentPath))}
                              <div className="mt-8 flex flex-col gap-4">
                                {currentPath !== '/login' &&
                                  !isAuthenticated(currentPath) && (
                                    <Button
                                      href="/login"
                                      variant="outline"
                                      size="full"
                                      onClick={() => close()}
                                    >
                                      Log in
                                    </Button>
                                  )}
                                {currentPath !== '/signup' &&
                                  !isAuthenticated(currentPath) && (
                                    <Button
                                      href="/signup"
                                      size="full"
                                      onClick={() => close()}
                                    >
                                      Sign Up
                                    </Button>
                                  )}
                                {isAuthenticated(currentPath) && (
                                  <Button
                                    href="#"
                                    size="full"
                                    onClick={() => close()}
                                  >
                                    Log out
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
                {currentPath !== '/login' && !isAuthenticated(currentPath) && (
                  <Button
                    href="/login"
                    variant="outline"
                    size="medium"
                    className="hidden lg:block"
                  >
                    Log in
                  </Button>
                )}
                {currentPath !== '/signup' && !isAuthenticated(currentPath) && (
                  <Button
                    href="/signup"
                    className="hidden lg:block"
                    size="medium"
                  >
                    Sign Up
                  </Button>
                )}
              </div>
            </div>
          </Container>
        </nav>
      )}
    </header>
  )
}

export default Header
