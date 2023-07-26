import React from 'react'

interface Props {
  children: React.ReactNode
}

const Chip: React.FC<Props> = ({ children }) => {
  return (
    <div className="inline-flex items-center px-2  rounded-lg text-sm font-base bg-gray-100 text-gray-800 ">
      {children}
    </div>
  )
}

export default Chip
