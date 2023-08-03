import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyFollowMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['Follow'],
    nullable: false,
    args: { data: t.arg({ type: [Inputs.FollowCreateInput], required: true }) },
    resolve: async (_query, _root, args, _context, _info) =>
      await prisma.$transaction(args.data.map((data) => prisma.follow.create({ data }))),
  }),
);

export const createManyFollowMutation = defineMutation((t) => ({
  createManyFollow: t.prismaField(createManyFollowMutationObject(t)),
}));
