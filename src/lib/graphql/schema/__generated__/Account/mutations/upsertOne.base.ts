import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOneAccountMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Account',
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.AccountWhereUniqueInput, required: true }),
      create: t.arg({ type: Inputs.AccountCreateInput, required: true }),
      update: t.arg({ type: Inputs.AccountUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.account.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOneAccountMutation = defineMutation((t) => ({
  upsertOneAccount: t.prismaField(upsertOneAccountMutationObject(t)),
}));
