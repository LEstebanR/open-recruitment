import * as Inputs from '@/graphql/schema/__generated__/inputs'
import { prisma } from '@/prisma';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOneAccountMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Account',
    nullable: true,
    args: {
      where: t.arg({ type: Inputs.AccountWhereUniqueInput, required: true }),
      data: t.arg({ type: Inputs.AccountUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.account.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOneAccountMutation = defineMutation((t) => ({
  updateOneAccount: t.prismaField(updateOneAccountMutationObject(t)),
}));
