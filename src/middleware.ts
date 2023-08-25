import { withAuth } from 'next-auth/middleware'

export default withAuth({
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ req, token }) {
      const excludedPrefixes = [
        '/api/auth',
        '/login',
        '/forgot-password',
        '/signup',
        '/api/user/check-credentials',
      ]
      const excludeHome = req.nextUrl.pathname === '/'

      if (
        excludeHome ||
        excludedPrefixes.some(
          (prefix) =>
            req.nextUrl.pathname === prefix || req.nextUrl.pathname.startsWith(`${prefix}/`)
        )
      ) {
        return true
      }

      if (req.nextUrl.pathname.startsWith('/api/graphql')) {
        if (req.method === 'GET') {
          return token?.userRole === 'SUPERADMIN'
        } else if (req.method === 'POST') {
          return true
        }
      }

      if (req.nextUrl.pathname.startsWith('/api/graphql-yoga')) {
        return token?.userRole === 'SUPERADMIN'
      }

      return !!token
    },
  },
})

export const config = {
  matcher: ['/(.*)'],
}
