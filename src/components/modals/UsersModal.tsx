import { BaseModal } from './BaseModal'
import { useState, Dispatch, SetStateAction } from 'react'
import db from '../../firebase'
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore'

type User = {
  id: string
  name: string
  completed: boolean
  taken: boolean
  number_guesses: number
}

type Props = {
  isOpen: boolean
  handleClose: () => void
  handleSelectUser: Dispatch<SetStateAction<string | null>>
  users: Array<User>
}

export const UsersModal = ({
  isOpen,
  handleClose,
  handleSelectUser,
  users,
}: Props) => {
  const [user, setUser] = useState<string>('')

  const claimUser = async (id: string) => {
    const userDoc = doc(db, 'users', id)
    await updateDoc(userDoc, { taken: true })
  }

  console.log(user)

  return (
    <BaseModal
      title="Please select your name"
      isOpen={isOpen}
      showCloseButton={false}
    >
      <select
        className="p-1 rounded-md"
        onChange={(e) => setUser(e.target.value)}
      >
        <option key="" value="">
          Select...
        </option>
        {users
          .filter((user) => user.taken === false)
          .map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
      </select>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Happy birthday to Jesse, Hong, and Vivian!
      </p>

      <button
        onClick={() => {
          if (user) {
            localStorage.setItem('user', user)
            claimUser(user)
            handleSelectUser(user)
            handleClose()
          }
        }}
      >
        Continue
      </button>
    </BaseModal>
  )
}
