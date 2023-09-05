/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth, { DefaultSession } from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth/jwt' {
  interface JWT {
    selectedCompany?: string
    userRole?: string
  }
}

declare module 'next-auth' {
  interface User {
    userRole?: string
    photo?: {
      path?: string
    }
  }

  interface Session {
    user: {
      userRole?: string
      selectedCompany?: string
    } & defaultSession['user']
  }
}
