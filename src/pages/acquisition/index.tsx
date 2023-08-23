import React from 'react'
import { GetServerSidePropsContext } from 'next'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

const Page = () => {
  return (
    <p>Acquisition</p>
  )
}

Page.auth = {}
export default Page

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (session?.user.userRole !== 'asdf') {
    return { redirect: { destination: '/dashboard?redirectionFlag=1' } }
  }

  return {
    props: {},
  }
}