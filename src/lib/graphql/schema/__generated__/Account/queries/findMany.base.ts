import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findManyAccountQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: ['Account'],
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.AccountWhereInput, required: false }),
      orderBy: t.arg({ type: [Inputs.AccountOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: Inputs.AccountWhereUniqueInput, required: false }),
      take: t.arg({ type: 'Int', required: false }),
      skip: t.arg({ type: 'Int', required: false }),
      distinct: t.arg({ type: [Inputs.AccountScalarFieldEnum], required: false }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.account.findMany({
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

export const findManyAccountQuery = defineQuery((t) => ({
  findManyAccount: t.prismaField(findManyAccountQueryObject(t)),
}));
