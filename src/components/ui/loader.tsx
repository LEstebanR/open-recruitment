import React from 'react'
import clsx, { ClassValue } from 'clsx'

const Loader: React.FC<{
  size?: string
  className?: ClassValue
  fullScreen?: boolean
}> = ({ size = 'h-32 w-32', className, fullScreen = true }) => {
  const spinner = (
    <div
      className={clsx('animate-spin rounded-full border-y-2 border-gray-900', size, className)}
    ></div>
  )

  if (fullScreen) {
    return <div className="flex h-full items-center justify-center">{spinner}</div>
  }

  return spinner
}

export default Loader
