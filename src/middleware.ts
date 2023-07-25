import { withAuth } from 'next-auth/middleware'

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      if (req.nextUrl.pathname === '/api/graphql') {
        return token?.userRole === 'SUPERADMIN'
      }

      return !!token
    },
  },
})

export const config = { matcher: ['/api/graphql'] }