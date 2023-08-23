import { ApolloClient, InMemoryCache } from '@apollo/client'
import { SchemaLink } from '@apollo/client/link/schema'
import { schema } from '@/lib/graphql/schema'

export const clientSSR = <T extends { session: { user: { email: string } } }>(context: T) => new ApolloClient({
  cache: new InMemoryCache(),
  ssrMode: true,
  link: new SchemaLink({ schema, context }),
})