import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueTemplateQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'Template',
    nullable: true,
    args: { where: t.arg({ type: Inputs.TemplateWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.template.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueTemplateQuery = defineQuery((t) => ({
  findUniqueTemplate: t.prismaField(findUniqueTemplateQueryObject(t)),
}));
