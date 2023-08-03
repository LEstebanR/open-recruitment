import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueAccountQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'Account',
    nullable: true,
    args: { where: t.arg({ type: Inputs.AccountWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.account.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueAccountQuery = defineQuery((t) => ({
  findUniqueAccount: t.prismaField(findUniqueAccountQueryObject(t)),
}));
