import {
  asNexusMethod,
  makeSchema,
  nonNull,
  objectType,
  queryType,
} from 'nexus'

import { DateTimeResolver } from 'graphql-scalars'
import { join } from 'path'

const DateTime = asNexusMethod(DateTimeResolver, 'DateTime')

const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.string('username')
    t.string('avatarSrc')
  },
})

const Comment = objectType({
  name: 'Comment',
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.string('content')
    t.field('author', { type: nonNull('User') })
    t.field('createdAt', { type: 'DateTime' })
  },
})

const Query = queryType({
  definition(t) {
    t.list.field('getComments', {
      type: 'Comment',
      resolve: (_parent, _args, ctx) => {
        return ctx.db.comment.findMany({ include: { author: true } })
      },
    })
  },
})

export const schema = makeSchema({
  types: [Query, DateTime, User, Comment],
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
