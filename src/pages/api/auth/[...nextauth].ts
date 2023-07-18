import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/prisma'

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'abcd@xyz.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async function(credentials, req) {
        const user = await fetch(
          `${process.env.NEXTAUTH_URL}/api/user/check-credentials`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              accept: 'application/json',
            },
            body: Object.entries(credentials)
              .map((e) => e.join('='))
              .join('&'),
          },
        )
          .then((res) => res.json())
          .catch((err) => {
            return null
          })

        if (user) {
          return user
        } else {
          throw new Error('Wrong credentials. Try again.')
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  secret: process.env.SECRET,
  session: { strategy: 'jwt' },
})