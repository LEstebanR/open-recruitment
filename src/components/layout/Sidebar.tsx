import React from 'react'
import Link from 'next/link'
import {
  GoBriefcase,
  GoGraph,
  GoHome,
  GoInbox,
  GoPeople,
  GoPersonAdd,
  GoRss,
} from 'react-icons/go'
import { IoMdSettings } from 'react-icons/io'
import { Tooltip } from 'react-tooltip'

const iconStyles = 'w-8 h-8 text-gray-500 hover:text-black'

const roots = [
  {
    name: 'dashboard',
    href: '/dashboard',
    icon: <GoHome className={iconStyles} />,
  },
  {
    name: 'candidates',
    href: '/candidates',
    icon: <GoPeople className={iconStyles} />,
  },
  {
    name: 'jobs',
    href: '/jobs',
    icon: <GoBriefcase className={iconStyles} />,
  },
  {
    name: 'mailbox',
    href: '/mailbox',
    icon: <GoInbox className={iconStyles} />,
  },
  {
    name: 'reports',
    href: '/reports',
    icon: <GoGraph className={iconStyles} />,
  },
  {
    name: 'talent pools',
    href: '/talent_pool',
    icon: <GoPersonAdd className={iconStyles} />,
  },
  {
    name: 'acquisition',
    href: '/acquisition',
    icon: <GoRss className={iconStyles} />,
  },
]

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col justify-between items-center h-full py-4">
      <ul className="flex flex-col gap-8">
        {roots.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              data-tooltip-id="my-tooltip"
              data-tooltip-content={item.name}
            >
              {item.icon}{' '}
            </Link>
            <Tooltip
              place="right"
              content={item.name}
              id="my-tooltip"
              className="capitalize"
            >
              <span className="text-xs ">{item.name}</span>
            </Tooltip>
          </li>
        ))}
      </ul>
      <Link
        href="settings"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="settings"
      >
        <IoMdSettings className="w-8 h-8 text-gray-500 hover:text-black" />
        <Tooltip
          place="right"
          content="settings"
          id="my-tooltip"
          className="capitalize"
        >
          <span className="text-xs ">settings</span>
        </Tooltip>
      </Link>
    </div>
  )
}

export default Sidebar
