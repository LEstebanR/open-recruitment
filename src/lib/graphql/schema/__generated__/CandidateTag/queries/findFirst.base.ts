import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findFirstCandidateTagQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.CandidateTagWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.CandidateTagOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.CandidateTagWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.CandidateTagScalarFieldEnum], required: false }),
}))

export const findFirstCandidateTagQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'CandidateTag',
    nullable: true,
    args: findFirstCandidateTagQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.candidateTag.findFirst({
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

export const findFirstCandidateTagQuery = defineQuery((t) => ({
  findFirstCandidateTag: t.prismaField(findFirstCandidateTagQueryObject(t)),
}));
