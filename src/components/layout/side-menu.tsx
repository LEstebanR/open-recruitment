import React, { useState } from 'react'
import { Listbox } from '@headlessui/react'
import Link from 'next/link'
import { GoChevronDown, GoChevronUp, GoPersonFill } from 'react-icons/go'

interface CollapseProps {
  name: string
  icon: React.ReactNode
  items: {
    name: string
    href: string
  }[]
}

const MENU_ITEMS = [
  {
    name: 'My account',
    href: '/settings/account',
    icon: <GoPersonFill />,
    type: 'collapse',
    collaspse_items: [
      {
        name: 'Profile',
        href: '/settings/profile',
      },
      {
        name: 'Notifications',
        href: '/settings/notifications',
      },
    ],
  },
]

const SideMenu: React.FC = () => {
  const items = MENU_ITEMS
  const [selectedOption, setSelectedOption] = useState(items[0])

  const Collapse: React.FC<CollapseProps> = ({ icon, name, items }) => {
    return (
      <Listbox value={selectedOption} onChange={setSelectedOption}>
        <Listbox.Button className="w-full">
          {({ open }) => (
            <div className="flex w-full items-center justify-between gap-4 p-2">
              {icon}
              <p>{name}</p>
              {open ? <GoChevronUp /> : <GoChevronDown />}
            </div>
          )}
        </Listbox.Button>
        <Listbox.Options>
          {items.map((item, index) => (
            <Listbox.Option
              key={index}
              value={item}
              className="p-2 hover:bg-primary-500 hover:text-white"
            >
              <Link href={item.href}>
                <p onClick={(e) => e.stopPropagation()}>{item.name}</p>
              </Link>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    )
  }

  return (
    <div className="hidden h-full w-full border-r md:block">
      <ul className="list-none">
        {items.map((item, index) => {
          if (item.type === 'collapse') {
            return (
              <Collapse
                key={index}
                icon={item.icon}
                name={item.name}
                items={item.collaspse_items}
              />
            )
          } else {
            return <p key={index}>{item.name}</p>
          }
        })}
      </ul>
      <hr />
    </div>
  )
}

export default SideMenu
