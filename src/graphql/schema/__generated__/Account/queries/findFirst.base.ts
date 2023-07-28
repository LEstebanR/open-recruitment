import * as Inputs from '@/graphql/schema/__generated__/inputs'
import { prisma } from '@/prisma';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findFirstAccountQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'Account',
    nullable: true,
    args: {
      where: t.arg({ type: Inputs.AccountWhereInput, required: false }),
      orderBy: t.arg({ type: [Inputs.AccountOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: Inputs.AccountWhereUniqueInput, required: false }),
      take: t.arg({ type: 'Int', required: false }),
      skip: t.arg({ type: 'Int', required: false }),
      distinct: t.arg({ type: [Inputs.AccountScalarFieldEnum], required: false }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.account.findFirst({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
        ...query,
      }),
  }),
);

export const findFirstAccountQuery = defineQuery((t) => ({
  findFirstAccount: t.prismaField(findFirstAccountQueryObject(t)),
}));
