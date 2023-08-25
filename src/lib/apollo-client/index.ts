import { ApolloClient, InMemoryCache } from '@apollo/client'
import { getURL } from '@/utils/dual'

const client = new ApolloClient({
  uri: getURL('/api/graphql'),
  cache: new InMemoryCache(),
})

export default client