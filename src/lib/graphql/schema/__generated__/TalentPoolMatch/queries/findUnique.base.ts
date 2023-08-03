import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueTalentPoolMatchQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'TalentPoolMatch',
    nullable: true,
    args: { where: t.arg({ type: Inputs.TalentPoolMatchWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.talentPoolMatch.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueTalentPoolMatchQuery = defineQuery((t) => ({
  findUniqueTalentPoolMatch: t.prismaField(findUniqueTalentPoolMatchQueryObject(t)),
}));
