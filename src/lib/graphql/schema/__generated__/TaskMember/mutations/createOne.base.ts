import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneTaskMemberMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'TaskMember',
    nullable: false,
    args: { data: t.arg({ type: Inputs.TaskMemberCreateInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.taskMember.create({ data: args.data, ...query }),
  }),
);

export const createOneTaskMemberMutation = defineMutation((t) => ({
  createOneTaskMember: t.prismaField(createOneTaskMemberMutationObject(t)),
}));
