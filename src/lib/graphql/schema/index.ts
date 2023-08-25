import { generateAllCrud } from './extended/crud'
import { builder } from './builder'
import { User, Company } from '@prisma/client'
import { prisma } from '@/lib/prisma'

generateAllCrud()

builder.queryType({})
builder.mutationType({})

export const schema = builder.toSchema({})
