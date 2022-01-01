import { makeSchema, queryType } from 'nexus'

import { join } from 'path'

const Query = queryType({
  definition(t) {
    t.field('hello', {
      type: 'String',
      resolve: () => 'hello world',
    })
  },
})

export const schema = makeSchema({
  types: [Query],
  outputs: {
    schema: join(process.cwd(), 'src/schema/generated/schema.graphql'),
    typegen: join(process.cwd(), 'src/schema/generated/nexus.d.ts'),
  },
  contextType: {
    module: join(process.cwd(), 'src/schema/context.ts'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [{ module: '@prisma/client', alias: 'db' }],
  },
})
