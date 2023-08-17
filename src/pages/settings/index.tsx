import React from 'react'
import Link from 'next/link'
import { GoBell, GoPerson } from 'react-icons/go'

const Home = () => {
  return (
    <>
      <div className='flex flex-col justify-start w-full p-4 gap-2'>
        <h2 className='text-2xl font-bold'>Settings</h2>
        <ul className='flex flex-col gap-2'>
          <li>
            <Link href='/settings/profile'>
              <span className='flex gap-2 items-center'>
                <GoPerson />
                <p className='text-xl'>Profile</p>
              </span>
            </Link>
          </li>

          <li>
            <Link href='/settings/notifications'>
              <span className='flex gap-2 items-center'>
                <GoBell />
                <p className='text-xl'>Notifications</p>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

Home.Auth = true
export default Home
