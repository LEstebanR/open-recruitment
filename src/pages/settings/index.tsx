import React from 'react'
import Link from 'next/link'
import { GoBell, GoPerson } from 'react-icons/go'

const Page = () => {
  return (
    <>
      <div className="flex w-full flex-col justify-start gap-2 p-4">
        <h2 className="text-2xl font-bold">Settings</h2>
        <ul className="flex flex-col gap-2">
          <li>
            <Link href="/settings/profile">
              <span className="flex items-center gap-2">
                <GoPerson />
                <p className="text-xl">Profile</p>
              </span>
            </Link>
          </li>

          <li>
            <Link href="/settings/notifications">
              <span className="flex items-center gap-2">
                <GoBell />
                <p className="text-xl">Notifications</p>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

Page.auth = {}
export default Page
