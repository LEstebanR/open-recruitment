import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneTaskMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Task',
    nullable: false,
    args: { data: t.arg({ type: Inputs.TaskCreateInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.task.create({ data: args.data, ...query }),
  }),
);

export const createOneTaskMutation = defineMutation((t) => ({
  createOneTask: t.prismaField(createOneTaskMutationObject(t)),
}));
