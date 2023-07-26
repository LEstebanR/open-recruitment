import React from 'react'
import Image from 'next/image'
import { Button } from '../Button'
import { GoCheck } from 'react-icons/go'

type emailProvider = {
  name: string
  icon: string
  email?: string
  isConnected: boolean
}

const EmailSettingsCard: React.FC<emailProvider> = ({
  name,
  icon,
  email,
  isConnected,
}) => {
  return (
    <div className="my-4 p-2 border flex gap-4 rounded-md border-l-4 border-l-primary-500 ">
      <Image
        src={icon}
        alt={name}
        width={50}
        height={50}
        className="border  rounded-md object-contain "
      />
      <div className="flex flex-col justify-center">
        <h3 className="text-sm md:text-xl font-bold">{name}</h3>
        <p className="text-gray-500 text-xs md:text-sm">
          {email ? email : '---'}
        </p>
      </div>
      <div className="flex items-center ml-auto  w-40">
        {isConnected ? (
          <span className="flex items-center">
            <GoCheck className="text-gray-500" />
            <p className="text-gray-500 font-bold">Connected</p>
          </span>
        ) : (
          <Button variant="outline" color="primary">
            Connect
          </Button>
        )}
      </div>
    </div>
  )
}

export default EmailSettingsCard
