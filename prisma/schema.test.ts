import faker from 'faker'
import prisma from 'src/prisma'

function buildUser() {
  return {
    username: faker.internet.userName(),
    avatarSrc: 'someUrl', // faker.internet.avatar(),
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

describe('User', () => {
  test('create user', async () => {
    const user = buildUser()
    const savedUser = await prisma.user.create({
      data: user,
    })

    expect(savedUser).toMatchObject({
      id: expect.any(String),
      username: user.username,
      avatarSrc: user.avatarSrc,
    })
  })

  test('avatar optional', async () => {
    const { avatarSrc: _avatarSrc, ...userWithoutAvatar } = buildUser()

    const user = await prisma.user.create({
      data: userWithoutAvatar,
    })

    expect(user).toMatchObject({
      id: expect.any(String),
      username: userWithoutAvatar.username,
      avatarSrc: null,
    })
  })
})

describe('Comment', () => {
  let user: ReturnType<typeof buildUser>
  let userId: string

  beforeEach(async () => {
    user = buildUser()
    const savedUser = await prisma.user.create({ data: user })
    userId = savedUser.id
  })

  test('create comment', async () => {
    const comment = buildComment({ author: user })

    const createdComment = await prisma.comment.create({
      data: {
        content: comment.content,
        authorId: userId,
      },
      include: {
        author: true,
      },
    })

    expect(createdComment).toMatchObject({
      id: expect.any(String),
      content: comment.content,
      createdAt: expect.any(Date),
      author: {
        id: expect.any(String),
        username: comment.author.username,
        avatarSrc: comment.author.avatarSrc,
      },
    })
  })
})

afterEach(async () => {
  const deleteComments = prisma.comment.deleteMany()
  const deleteUsers = prisma.user.deleteMany()
  await prisma.$transaction([deleteComments, deleteUsers])
})
