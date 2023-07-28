import { withAuth } from 'next-auth/middleware'

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      if (req.nextUrl.pathname === '/api/graphql' && req.method === 'GET') {
        return token?.userRole === 'SUPERADMIN'
      }

      if (req.nextUrl.pathname === '/api/graphql-yoga') {
        return token?.userRole === 'SUPERADMIN'
      }

      return !!token
    },
  },
})

export const config = {
  matcher: [
    '/dashboard',
    '/api/graphql',
    '/api/graphql-yoga',
  ],
}