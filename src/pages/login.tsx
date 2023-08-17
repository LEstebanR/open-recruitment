import LoginForm from '@/components/forms/LoginForm'
import React from 'react'
import { getProviders, useSession } from 'next-auth/react'
import { authOptions } from './api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

export default function LoginPage({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { status } = useSession()

  return (<>
    {status !== 'authenticated' && <LoginForm providers={providers} />}
  </>)
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