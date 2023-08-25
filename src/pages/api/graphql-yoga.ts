// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createYoga } from 'graphql-yoga'
import type { Session } from 'next-auth'
import { getServerSession } from 'next-auth/next'
import { authOptions } from './auth/[...nextauth]'
import { schema } from '@/lib/graphql/schema'

export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
}

export default createYoga<
  {
    req: NextApiRequest;
    res: NextApiResponse;
  },
  {
    session: Session | null
  }
>({
  context: async ({ req, res }) => {
    return {
      session: await getServerSession(req, res, authOptions),
    }
  },
  schema: schema,
  graphiql: {
    defaultQuery: `query { countUser }`,
  },
  graphqlEndpoint: '/api/graphql-yoga',
})