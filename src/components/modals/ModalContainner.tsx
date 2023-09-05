import React from 'react'
import { Dialog } from '@headlessui/react'

type props = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  children: React.ReactNode
}

const ModalContainner: React.FC<props> = ({ isOpen, setIsOpen, children, title }) => {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/80 " aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="mx-auto min-h-[200px] min-w-[400px] max-w-sm rounded-xl bg-white p-4">
          <Dialog.Title className="text-2xl font-bold">{title}</Dialog.Title>
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default ModalContainner
