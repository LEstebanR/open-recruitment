import React from 'react'
import Image from 'next/image'

interface Props {
  src?: string
  name: string
}

const Avatar: React.FC<Props> = ({ src, name }) => {
  return src ? (
    <Image
      src={src}
      alt={name}
      width={40}
      height={40}
      className="rounded-full border border-black"
    />
  ) : (
    <div className="bg-primary-500 w-10 h-10 flex justify-center items-center rounded-full border border-black m-2 text-white">
      <p>{name.charAt(0)}</p>
    </div>
  )
}

export default Avatar
