import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  UserIcon,
  Squares2X2Icon,
  BarsArrowDownIcon,
  PuzzlePieceIcon,
} from '@heroicons/react/24/outline'

import React, { useCallback, useRef, useState, ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

type childrenNavigationItem = {
  name: string
  href: string
}

interface NavigationItem {
  name: string
  href: string
  icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>
  children?: childrenNavigationItem[]
}

type Navigation = Record<string, NavigationItem[]>

const navigation: Navigation = {
  dashboard: [
    { name: 'Overview', href: '/', icon: HomeIcon },
    { name: 'Calendar', href: '/', icon: CalendarIcon },
    { name: 'Events', href: '/', icon: ChartPieIcon },
    { name: 'Evaluations', href: '/', icon: DocumentDuplicateIcon },
    { name: 'Tasks', href: '/', icon: FolderIcon },
    { name: 'Activity', href: '/', icon: UsersIcon },
  ],
  settings: [
    {
      name: 'My account',
      href: '/settings/account',
      icon: UserIcon,
      children: [
        { name: 'Profile', href: '/settings/profile' },
        { name: 'Notifications', href: '/settings/notifications' },
      ],
    },
    {
      name: 'Company',
      href: '#',
      icon: HomeIcon,
      children: [
        { name: 'Company settings', href: '/settings' },
        { name: 'Team members', href: '/settings' },
        { name: 'Hiring roles', href: '/settings' },
        { name: 'Billing', href: '/settings' },
        { name: 'ReferralsHub', href: '/settings' },
        { name: 'Meeting rooms', href: '/settings' },
        { name: 'Audit logs', href: '/settings' },
      ],
    },
    {
      name: 'Workflow',
      href: '/settings',
      icon: Squares2X2Icon,
      children: [
        { name: 'Requisition approvals', href: '/settings' },
        { name: 'Desqualify reasons', href: '/settings' },
        { name: 'Tags & Sources', href: '/settings' },
        { name: 'Departments', href: '/settings' },
        { name: 'Shared candidates', href: '#' },
        { name: 'Event scheduling', href: '/settings' },
      ],
    },
    {
      name: 'Templates',
      href: '/settings',
      icon: BarsArrowDownIcon,
      children: [
        { name: 'Pipelines', href: '/settings' },
        { name: 'Profile fields', href: '/settings' },
        { name: 'Email templates', href: '/settings' },
        { name: 'Evaluation forms', href: '/settings' },
        { name: 'Questionnaires', href: '/settings' },
        { name: 'Screening questions', href: '/settings' },
      ],
    },
    {
      name: 'Apps and plugins',
      href: '/settings',
      icon: PuzzlePieceIcon,
    },
  ],
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const getLocalStorageKey = (email: string | null | undefined, key: string) =>
  btoa(`${email ?? ''}//${key ?? ''}`)

export default function SideMenu() {
  const { data: session } = useSession()
  const router = useRouter()
  const path = (router.asPath || '/').match(/^\/([^/]+)/)?.[1] || ''
  const [sideMenuState, setSideMenuState] = useState<Record<string, boolean>>(() => {
    if (typeof window === 'undefined') return { none: false }

    const getSideMenuState = (name: string) => {
      const itemState = JSON.parse(
        window.localStorage.getItem(getLocalStorageKey(session?.user?.email, name)) || '{}'
      )

      return itemState['open'] || false
    }

    return Object.assign(
      {},
      ...navigation[path]
        .map((item) => {
          if (item.children) {
            return { [btoa(item.name)]: getSideMenuState(item.name) }
          }
          return null
        })
        .filter((i) => i)
    )
  })
  const itemsRef = useRef<Record<string, HTMLElement | null>>({})

  const setSideMenuLocalStorage = useCallback(
    (name: string) => {
      const itemState =
        itemsRef.current[btoa(name)]?.getAttribute('data-headlessui-state') === 'open'

      window.localStorage.setItem(
        getLocalStorageKey(session?.user?.email, name),
        JSON.stringify({ open: !itemState })
      )

      setSideMenuState((prevState) => ({ ...prevState, [btoa(name)]: !itemState }))
    },
    [session?.user?.email]
  )

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white pt-3">
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col">
          {navigation[path].map((item) => (
            <li key={item.name}>
              {!item.children ? (
                <Link
                  href={item.href}
                  className={classNames(
                    router.asPath === item.href ? 'bg-gray-50' : 'hover:bg-gray-50',
                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-700'
                  )}
                >
                  <item.icon className="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                  {item.name}
                </Link>
              ) : (
                sideMenuState && (
                  <Disclosure
                    as="div"
                    ref={(el) => (itemsRef.current[btoa(item.name)] = el)}
                    defaultOpen={
                      !!item.children.find((subItem) => router.asPath === subItem.href) ||
                      sideMenuState[btoa(item.name)] ||
                      false
                    }
                    onClick={() => {
                      setSideMenuLocalStorage(item.name)
                    }}
                  >
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={classNames(
                            router.asPath === item.href ? 'bg-gray-50' : 'hover:bg-gray-50',
                            'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700'
                          )}
                        >
                          <item.icon
                            className="h-6 w-6 shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          {item.name}
                          <ChevronRightIcon
                            className={classNames(
                              open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                              'ml-auto h-5 w-5 shrink-0'
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel as="ul" className="mt-1 px-2">
                          {item.children &&
                            item.children.map((subItem) => (
                              <li key={subItem.name}>
                                <Link
                                  href={subItem.href}
                                  className={classNames(
                                    router.asPath === subItem.href
                                      ? 'bg-gray-50'
                                      : 'hover:bg-gray-50',
                                    'block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700'
                                  )}
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                )
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
