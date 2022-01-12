import { ContextFunction } from 'apollo-server-core'
import { NextApiRequest } from 'next'
import { PrismaClient } from '@prisma/client'
import prisma from 'src/prisma'

type ContextFunctionParams = {
  req: NextApiRequest
}

export type Context = {
  db: PrismaClient
  currentUser: string
}

export const context: ContextFunction<ContextFunctionParams, Context> = ({
  req,
}) => {
  const username = req.cookies['username']
  return {
    db: prisma,
    currentUser: username,
  }
}
