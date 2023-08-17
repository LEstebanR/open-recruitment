import React, { ReactElement, ReactNode } from 'react'
import Layout from '@/components/layout/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider, useSession } from 'next-auth/react'
import { ApolloProvider } from '@apollo/client'
import client from '@/lib/apollo-client'
import { NextPage } from 'next'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
  auth?: boolean
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <Layout>
          {Component.auth ? (
            <Auth>
              {getLayout(<Component {...pageProps} />)}
            </Auth>
          ) : (
            getLayout(<Component {...pageProps} />)
          )}
        </Layout>
      </SessionProvider>
    </ApolloProvider>
  )
}

function Auth({ children }: { children: React.ReactNode }) {
  const { status } = useSession({ required: true })

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (<>{children}</>)
}
