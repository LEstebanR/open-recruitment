import React from 'react'
import Link from 'next/link'

export type RecentlyWorkOnType = {
  icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>
  description: string
  href: string
}

type RecentWorkOnProps = {
  logs: RecentlyWorkOnType[]
}

const RecentlyWorkedOn = ({ logs }: RecentWorkOnProps) => {
  return (
    <div className="w-full rounded border p-4">
      <span className="flex gap-1">
        <p className="font-bold">👋 Hi! </p>
        <p>Recently, you worked on...</p>
      </span>
      <div className="mt-4 flex flex-wrap gap-2">
        {logs.map((event: RecentlyWorkOnType) => (
          <Link href={event.href} key={event.href}>
            <div className="flex w-full items-center justify-between rounded-md border bg-white px-4 py-2 shadow-md">
              <div className="flex items-center gap-2">
                <event.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                <p className="text-sm text-gray-500">{event.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RecentlyWorkedOn
