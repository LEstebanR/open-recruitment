import React from 'react'
import Layout from '@/components/layout/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider, useSession } from 'next-auth/react'
import { ApolloProvider } from '@apollo/client'
import client from '@/lib/apollo-client'

interface CustomAppProps extends Omit<AppProps, 'Component'> {
  Component: AppProps['Component'] & {
    auth?: boolean
  };
}

export default function App({ Component, pageProps: { session, ...pageProps } }: CustomAppProps) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <Layout>
          {Component.auth ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
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
