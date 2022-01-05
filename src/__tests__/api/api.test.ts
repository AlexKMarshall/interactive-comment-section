/**
 * @jest-environment node
 */
import graphqlEndpoint, { config } from 'src/pages/api/graphql'

import type { PageConfig } from 'next'
import { createClient } from 'src/schema/generated/genql'
import faker from 'faker'
import prisma from 'src/prisma'
import { testApiHandler } from 'next-test-api-route-handler'

function buildUser() {
  return {
    username: faker.internet.userName(),
    avatarSrc: faker.internet.avatar(),
  }
}

type User = ReturnType<typeof buildUser>

type BuildCommentProps = {
  author?: User
}
function buildComment({ author = buildUser() }: BuildCommentProps = {}) {
  return {
    author,
    content: faker.lorem.paragraph(),
  }
}

const handler: typeof graphqlEndpoint & { config?: PageConfig } =
  graphqlEndpoint
handler.config = config

let comments: ReturnType<typeof buildComment>[] = []

beforeEach(async () => {
  comments = [buildComment(), buildComment()]

  for (let comment of comments) {
    await prisma.comment.create({
      data: {
        content: comment.content,
        author: {
          connectOrCreate: {
            create: {
              username: comment.author.username,
              avatarSrc: comment.author.avatarSrc,
            },
            where: {
              username: comment.author.username,
            },
          },
        },
      },
    })
  }
})

test('getComments', async () => {
  await testApiHandler({
    handler,
    url: '/api/graphql',
    test: async ({ fetch }) => {
      const client = createClient({
        fetcher: (operation) => {
          return fetch({
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(operation),
          }).then((res) => {
            return res.json()
          })
        },
      })

      const result = await client.query({
        getComments: {
          id: true,
          content: true,
          author: {
            id: true,
            username: true,
            avatarSrc: true,
          },
          createdAt: true,
        },
      })

      expect(result).toMatchObject({
        getComments: comments.map((comment) => ({
          id: expect.any(String),
          content: comment.content,
          author: {
            id: expect.any(String),
            username: comment.author.username,
            avatarSrc: comment.author.avatarSrc,
          },
        })),
      })
    },
  })
})

afterEach(async () => {
  const deleteComments = prisma.comment.deleteMany()
  const deleteUsers = prisma.user.deleteMany()
  await prisma.$transaction([deleteComments, deleteUsers])
})
