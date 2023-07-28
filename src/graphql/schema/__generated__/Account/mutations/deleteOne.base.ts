import * as Inputs from '@/graphql/schema/__generated__/inputs'
import { prisma } from '@/prisma';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOneAccountMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Account',
    nullable: true,
    args: { where: t.arg({ type: Inputs.AccountWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.account.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneAccountMutation = defineMutation((t) => ({
  deleteOneAccount: t.prismaField(deleteOneAccountMutationObject(t)),
}));
