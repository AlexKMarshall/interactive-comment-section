import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const juliusomo = await prisma.user.upsert({
    where: {
      username: 'juliusomo',
    },
    update: {},
    create: {
      username: 'juliusomo',
    },
  })
  const amyrobson = await prisma.user.upsert({
    where: {
      username: 'amyrobson',
    },
    update: {},
    create: {
      username: 'amyrobson',
    },
  })
  const maxblagun = await prisma.user.upsert({
    where: {
      username: 'maxblagun',
    },
    update: {},
    create: {
      username: 'maxblagun',
    },
  })

  await prisma.comment.create({
    data: {
      content: `Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.`,
      author: {
        connect: {
          id: amyrobson.id,
        },
      },
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 35),
    },
  })

  await prisma.comment.create({
    data: {
      content: `Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!`,
      author: {
        connect: {
          id: maxblagun.id,
        },
      },
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 15),
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
