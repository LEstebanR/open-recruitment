import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyTaskMemberMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['TaskMember'],
    nullable: false,
    args: { data: t.arg({ type: [Inputs.TaskMemberCreateInput], required: true }) },
    resolve: async (_query, _root, args, _context, _info) =>
      await prisma.$transaction(args.data.map((data) => prisma.taskMember.create({ data }))),
  }),
);

export const createManyTaskMemberMutation = defineMutation((t) => ({
  createManyTaskMember: t.prismaField(createManyTaskMemberMutationObject(t)),
}));
