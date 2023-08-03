import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { BatchPayload } from '../../objects';
import { prisma } from '@/lib/prisma';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyAccountMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: { where: t.arg({ type: Inputs.AccountWhereInput, required: true }) },
    resolve: async (_root, args, _context, _info) =>
      await prisma.account.deleteMany({ where: args.where }),
  }),
);

export const deleteManyAccountMutation = defineMutation((t) => ({
  deleteManyAccount: t.field(deleteManyAccountMutationObject(t)),
}));
