import { ApolloServer } from 'apollo-server-micro'
import Cors from 'micro-cors'
import { PageConfig } from 'next'
import { context } from 'src/schema/context'
import { schema } from 'src/schema/schema'

const cors = Cors()

// there's a conflict with the schema definition here that TS is complaining about
const apolloServer = new ApolloServer({
  // @ts-ignore
  schema,
  context,
})
const startServer = apolloServer.start()

export default cors(async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }
  await startServer

  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
})

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
}
