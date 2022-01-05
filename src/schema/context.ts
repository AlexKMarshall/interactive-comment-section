import { PrismaClient } from '@prisma/client'
import prisma from 'src/prisma'

export type Context = {
  db: PrismaClient
}

export const context = {
  db: prisma,
}
