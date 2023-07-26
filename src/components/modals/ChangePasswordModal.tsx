import React from 'react'
import ModalContainner from './ModalContainner'
import { TextField } from '../UI/Fields'
import { Button } from '../UI/Button'

type props = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ChangePasswordModal: React.FC<props> = ({ isOpen, setIsOpen }) => {
  return (
    <ModalContainner
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Change Password"
    >
      <div className="flex flex-col gap-4 mt-4">
        <p>Choose a new password</p>
        <TextField
          label="New Password"
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
        />
        <TextField
          label="Confirm Password"
          id="confirm_password"
          name="confirm_password"
          type="password"
          autoComplete="current-password"
          required
        />
      </div>

      <div className="flex gap-2 justify-end mt-4">
        <Button
          variant="noborder"
          color="primary"
          size="small"
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </Button>
        <Button variant="solid" color="gray" size="small">
          Continue
        </Button>
      </div>
    </ModalContainner>
  )
}

export default ChangePasswordModal
