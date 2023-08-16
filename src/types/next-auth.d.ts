import { DefaultSession } from 'next-auth'

declare module 'next-auth/jwt' {
  interface JWT extends JWT {
    companySelected?: string
    userRole?: string
  }
}

declare module 'next-auth' {

  interface User extends User {
    userRole?: string
    photo?: {
      path?: string
    }
  }

  interface Session extends DefaultSession {
    user: {
      userRole?: string
      companySelected?: string
    } & defaultSession['user']
  }
}