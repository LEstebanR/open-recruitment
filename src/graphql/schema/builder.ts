import { Prisma } from '.prisma/client'
import SchemaBuilder from '@pothos/core'
import PrismaPlugin from '@pothos/plugin-prisma'
import { Scalars } from 'prisma-generator-pothos-codegen'
import { prisma } from '@/prisma'
import PrismaTypes from '@/prisma/types/objects'

// TODO: Context
export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
  Scalars: Scalars<Prisma.Decimal, Prisma.InputJsonValue | null, Prisma.InputJsonValue>;
}>({
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma,
  },
})