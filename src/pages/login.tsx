import LoginForm from '@/components/forms/LoginForm'
import React from 'react'
import { useSession } from 'next-auth/react'


const LoginPage: React.FC = () => {
  const { data: session, status } = useSession()

  if (status === 'authenticated') {
    return <p>Signed in as {session?.user?.email}</p>
  }

  return <LoginForm />
}

export default LoginPage
