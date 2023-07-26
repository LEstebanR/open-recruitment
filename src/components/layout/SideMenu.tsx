import React, { useState } from 'react'
import { Listbox } from '@headlessui/react'
import Link from 'next/link'
import { GoChevronDown, GoChevronUp } from 'react-icons/go'

interface Props {
  items: {
    name: string
    href: string
    icon: React.ReactNode
    type: string
    collaspse_items: {
      name: string
      href: string
    }[]
  }[]
}

interface CollapseProps {
  name: string
  icon: React.ReactNode
  items: {
    name: string
    href: string
  }[]
}

const SideMenu: React.FC<Props> = ({ items }) => {
  const [selectedOption, setSelectedOption] = useState(items[0])

  const Collapse: React.FC<CollapseProps> = ({ icon, name, items }) => {
    return (
      <Listbox value={selectedOption} onChange={setSelectedOption}>
        <Listbox.Button className="w-full">
          {({ open }) => (
            <div className="flex justify-between items-center gap-4 p-2 w-full">
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
                <p>{item.name}</p>
              </Link>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    )
  }

  return (
    <div className="h-full border-r w-52 hidden md:block">
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
