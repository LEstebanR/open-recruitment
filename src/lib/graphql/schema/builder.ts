import { Prisma } from '.prisma/client'
import SchemaBuilder from '@pothos/core'
import PrismaPlugin from '@pothos/plugin-prisma'
import { Scalars } from 'prisma-generator-pothos-codegen'
import { prisma } from '@/lib/prisma'
import PrismaTypes from '@/lib/prisma/types/objects'
import AuthzPlugin from '@pothos/plugin-authz'
import * as rules from '@/lib/graphql/schema/rules'
import { Session } from 'next-auth'


// TODO: Context
export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes,
  Scalars: Scalars<Prisma.Decimal, Prisma.InputJsonValue | null, Prisma.InputJsonValue>,
  AuthZRule: keyof typeof rules,
  Context: {
    session: Session | null;
  };
}>({
  plugins: [PrismaPlugin, AuthzPlugin],
  prisma: {
    client: prisma,
  },
})