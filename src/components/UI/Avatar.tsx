import React from 'react'
import Image from 'next/image'

interface Props {
  src?: string | null
  name?: string | null
  className?: string
}

const Avatar: React.FC<Props> = ({ src, name, className }) => {
  const altName = name || 'avatar'
  return src ? (
    <Image
      src={src}
      alt={altName}
      width={40}
      height={40}
      className={`${className} rounded-full border border-black`}
    />
  ) : (
    <div
      className={`${className} bg-primary-500 w-9 h-9 flex justify-center items-center rounded-full border border-black m-0.5 text-white`}
    >
      <p>{altName?.charAt(0)}</p>
    </div>
  )
}

export default Avatar
