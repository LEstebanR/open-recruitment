import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueSharedCandidateLinkQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'SharedCandidateLink',
    nullable: true,
    args: { where: t.arg({ type: Inputs.SharedCandidateLinkWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.sharedCandidateLink.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueSharedCandidateLinkQuery = defineQuery((t) => ({
  findUniqueSharedCandidateLink: t.prismaField(findUniqueSharedCandidateLinkQueryObject(t)),
}));
