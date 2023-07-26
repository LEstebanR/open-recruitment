import React from 'react'
import { user } from '@/utils/mockdata'
import Avatar from '../Avatar'

const UserCard = () => {
  return (
    <div className="flex gap-2 p-2 my-2 border rounded-xl">
      <Avatar src={user.avatar} name={user.name} />
      <div>
        <h2 className="text-xl font-bold">{user.name}</h2>
        <p className="text-gray-500">{user.email}</p>
      </div>
    </div>
  )
}

export default UserCard
