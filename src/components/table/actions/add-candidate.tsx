import React, { Dispatch, SetStateAction, createContext, useState } from 'react'
import { PlusIcon } from '@heroicons/react/20/solid'
import { Tooltip } from 'react-tooltip'
import AddCandidateModal from '@/components/modals/add-candidate-modal'
import { ModalControlContext } from '@/hooks/contexts'

const AddCandidate = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div data-tooltip-id="button-tooltip" data-tooltip-content="add candidates">
      <button
        className="relative cursor-pointer rounded-md bg-secondary-400 p-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary-200"
        data-tooltip-content="Add candidates"
        id="button-tooltip"
        onClick={() => setOpenModal(true)}
      >
        <PlusIcon className="h-5 w-5 text-white" />
      </button>
      <Tooltip place="top" content="add candidates" id="button-tooltip" className="capitalize">
        <span>Add candidates</span>
      </Tooltip>
      <ModalControlContext.Provider value={[openModal, setOpenModal]}>
        <AddCandidateModal />
      </ModalControlContext.Provider>
    </div>
  )
}

export default AddCandidate