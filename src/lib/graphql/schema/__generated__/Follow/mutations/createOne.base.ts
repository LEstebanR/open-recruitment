import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneFollowMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Follow',
    nullable: false,
    args: { data: t.arg({ type: Inputs.FollowCreateInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.follow.create({ data: args.data, ...query }),
  }),
);

export const createOneFollowMutation = defineMutation((t) => ({
  createOneFollow: t.prismaField(createOneFollowMutationObject(t)),
}));
