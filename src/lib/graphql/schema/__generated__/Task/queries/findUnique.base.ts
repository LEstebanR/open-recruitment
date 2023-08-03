import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueTaskQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'Task',
    nullable: true,
    args: { where: t.arg({ type: Inputs.TaskWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.task.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueTaskQuery = defineQuery((t) => ({
  findUniqueTask: t.prismaField(findUniqueTaskQueryObject(t)),
}));
