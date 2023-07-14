import React from 'react'

interface Props {
  children: React.ReactNode
}

const Chip: React.FC<Props> = ({ children }) => {
  return (
    <div className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800 h-10">
      {children}
    </div>
  )
}

export default Chip
