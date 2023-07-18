import * as Inputs from '@/graphql/schema/__generated__/inputs'
import { BatchPayload } from '../../objects';
import { prisma } from '@/prisma';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyAccountMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.AccountWhereInput, required: false }),
      data: t.arg({ type: Inputs.AccountUpdateManyMutationInput, required: true }),
    },
    resolve: async (_root, args, _context, _info) =>
      await prisma.account.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyAccountMutation = defineMutation((t) => ({
  updateManyAccount: t.field(updateManyAccountMutationObject(t)),
}));
