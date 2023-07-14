import React from 'react'
import Image from 'next/image'

interface Props {
  src: string
  alt: string
}
const Avatar: React.FC<Props> = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={40}
      height={40}
      className="rounded-full border border-black"
    />
  )
}

export default Avatar
