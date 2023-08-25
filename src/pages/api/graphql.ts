import { authZApolloPlugin } from '@graphql-authz/apollo-server-plugin'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { schema } from '@/lib/graphql/schema'
import * as rules from '@/lib/graphql/schema/rules'
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from '@apollo/server/plugin/landingPage/default'

export interface IContext {
  abc: string
  isAdminRequest?: boolean
  session: {
    user: {
      id: string
      name: string
      email: string
      userRole?: string
      selectedCompany?: string
    }
    expires: string
  } | null
}

/* authz rules
const IsAuthenticated = preExecRule({
  error: 'User is not authenticated',
})((context: IContext) => !!context.session?.user)

const IsAdmin = preExecRule({
  error: 'User is not admin',
})((context: IContext) => context.session?.user?.role === 'Admin')

const CanReadPost = postExecRule({
  error: 'Access denied',
  selectionSet: '{ status author { id } }',
})(
  (
    context: IContext,
    fieldArgs: unknown,
    post: { status: string; author: { id: string } },
  ) => post.status === 'public' || context.session?.user?.id === post.author.id,
)

/*
const CanPublishPost = preExecRule()(
  async (context: IContext, fieldArgs: { postId: string }) => {
    const post = await Promise.resolve(
      posts.find(({ id }) => id === fieldArgs.postId),
    )
    return !post || post.authorId === context.user?.id
  },
)*/

const server = new ApolloServer({
  schema,
  // authz apollo plugin
  plugins: [
    authZApolloPlugin({ rules: rules }),
    process.env.NODE_ENV === 'production'
      ? ApolloServerPluginLandingPageProductionDefault({
          includeCookies: true,
        })
      : ApolloServerPluginLandingPageLocalDefault({ includeCookies: true }),
  ],
})

export default startServerAndCreateNextHandler(server, {
  context: async (req, res): Promise<IContext> => {
    return {
      abc: '2',
      session: await getServerSession(req, res, authOptions),
    }
  },
})
