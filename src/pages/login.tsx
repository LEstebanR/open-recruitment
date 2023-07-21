import LoginForm from '@/components/forms/LoginForm'
import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'


const LoginPage: React.FC = () => {
  const { data: session, status } = useSession()

  useEffect(() => {
    console.log(session);
  }, [session])

  if (status === 'authenticated') {
    return <p>Signed in as {session?.user?.email}</p>
  }

  return <LoginForm />
}

export default LoginPage
