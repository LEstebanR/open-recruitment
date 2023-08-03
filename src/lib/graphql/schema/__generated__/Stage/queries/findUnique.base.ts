import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueStageQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'Stage',
    nullable: true,
    args: { where: t.arg({ type: Inputs.StageWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.stage.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueStageQuery = defineQuery((t) => ({
  findUniqueStage: t.prismaField(findUniqueStageQueryObject(t)),
}));
