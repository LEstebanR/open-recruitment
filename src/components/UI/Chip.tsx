import React from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}

const Chip: React.FC<Props> = ({ children, className }) => {
  return (
    <div className="hidden sm:inline-flex items-center px-2 rounded-lg text-sm font-base bg-gray-100 text-gray-800 ">
      {children}
    </div>
  )
}

export default Chip
