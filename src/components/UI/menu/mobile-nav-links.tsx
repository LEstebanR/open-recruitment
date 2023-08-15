import React, { ReactNode } from 'react'
import { Popover } from '@headlessui/react'
import Link from 'next/link'

interface MobileNavLinkProps {
  children: ReactNode
  href: string
}

export interface NavLinks {
  links: [href: string, text: string][]
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

export function MobileNavLinks({
  links,
  className,
}: NavLinks & { className?: string }) {
  return (
    <div className={`space-y-4 ${className}`}>
      {links.map(([href, text]) => (
        <MobileNavLink key={href} href={href}>
          {text}
        </MobileNavLink>
      ))}
    </div>
  )
}
