import Link from 'next/link'
import React from 'react'
import { GetServerSidePropsContext } from 'next'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <div>
        <h1>Open Recruitment</h1>
        <Link href="#about">@Devpeoplz</Link>
      </div>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (session) {
    return { redirect: { destination: '/dashboard' } }
  }

  return { props: {} }
}
