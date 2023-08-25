import LoginForm from '@/components/forms/LoginForm'
import React, { useEffect } from 'react'
import { getProviders, useSession } from 'next-auth/react'
import { authOptions } from './api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { useRouter } from 'next/router'

export default function LoginPage({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard').then()
    }
  }, [status, router])

  return <>{status !== 'authenticated' && <LoginForm providers={providers} />}</>
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (session) {
    return { redirect: { destination: '/dashboard' } }
  }
  const providers = await getProviders()

  return {
    props: { providers: providers ?? [] },
  }
}
