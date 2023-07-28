import { withAuth } from 'next-auth/middleware'

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      if (req.nextUrl.pathname === '/api/graphql') {
        if (req.method === 'GET') {
          return token?.userRole === 'SUPERADMIN'
        } else if (req.method === 'POST') {
          return true
        }
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
    '/((?!auth|login|signup).*)(.+)',
  ],
}