import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueStageVisibilityQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'StageVisibility',
    nullable: true,
    args: { where: t.arg({ type: Inputs.StageVisibilityWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.stageVisibility.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueStageVisibilityQuery = defineQuery((t) => ({
  findUniqueStageVisibility: t.prismaField(findUniqueStageVisibilityQueryObject(t)),
}));
