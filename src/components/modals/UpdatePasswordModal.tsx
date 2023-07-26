import React from 'react'
import ModalContainner from './ModalContainner'
import UserCard from '../UI/cards/UserCard'
import { TextField } from '../UI/Fields'
import { Button } from '../UI/Button'
import Alert from '@/utils/Alert'

type props = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const UpdatePasswordModal: React.FC<props> = ({ isOpen, setIsOpen }) => {
  const [password, setPassword] = React.useState('')
  const [isVerified, setIsVerified] = React.useState(false)

  const checkPassword = (password: string) => {
    //this is temporal
    if (password === '123') {
      setIsVerified(true)
    } else {
      Alert({ message: 'Wrong password', type: 'error' })
      setPassword('')
    }
  }

  const cancel = () => {
    setPassword('')
    setIsVerified(false)
    setIsOpen(false)
  }

  return (
    <ModalContainner
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={isVerified ? 'Update Password' : 'Verify your identity'}
    >
      <UserCard />
      {isVerified ? (
        <div>
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
              onClick={() => cancel()}
            >
              Cancel
            </Button>
            <Button variant="solid" color="gray" size="small">
              Continue
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-base text-gray-500 mb-4 ease-in duration-300">
            Verify that it&apos;s you in order to continue
          </p>
          <TextField
            label="Current Password"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <div className="flex gap-2 justify-end mt-4">
            <Button
              variant="noborder"
              color="primary"
              size="small"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="solid"
              color="gray"
              size="small"
              onClick={() => checkPassword(password)}
            >
              Continue
            </Button>
          </div>
        </div>
      )}
    </ModalContainner>
  )
}

export default UpdatePasswordModal
