import { prisma } from '@/lib/prisma'
import { defineQuery } from '../../../__generated__/utils'

export const getCurrentCompany = defineQuery((t) => ({
  me: t.prismaField({
    type: 'User',
    nullable: true,
    args: {},
    authz: {
      rules: ['IsAuthenticated'],
    },
    resolve: async (query, root, args, ctx) => {
      return prisma.user.findUniqueOrThrow({
        // the `query` argument will add in `include`s or `select`s to
        // resolve as much of the request in a single query as possible
        ...query,
        where: { email: ctx?.session?.user?.email ?? '' },
      })
    },
  }),
}))
