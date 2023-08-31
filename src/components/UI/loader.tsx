import React from 'react'
import classNames from 'classnames'

const Loader: { size: string; className: any } = ({ size = 'h-32 w-32', className }) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div
        className={classNames(
          size,
          className,
          'animate-spin rounded-full border-y-2 border-gray-900'
        )}
      ></div>
    </div>
  )
}

export default Loader
