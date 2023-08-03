import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOneSharedCandidateLinkMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'SharedCandidateLink',
    nullable: true,
    args: {
      where: t.arg({ type: Inputs.SharedCandidateLinkWhereUniqueInput, required: true }),
      data: t.arg({ type: Inputs.SharedCandidateLinkUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.sharedCandidateLink.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOneSharedCandidateLinkMutation = defineMutation((t) => ({
  updateOneSharedCandidateLink: t.prismaField(updateOneSharedCandidateLinkMutationObject(t)),
}));
