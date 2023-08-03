import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyEventInterviewerMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['EventInterviewer'],
    nullable: false,
    args: { data: t.arg({ type: [Inputs.EventInterviewerCreateInput], required: true }) },
    resolve: async (_query, _root, args, _context, _info) =>
      await prisma.$transaction(args.data.map((data) => prisma.eventInterviewer.create({ data }))),
  }),
);

export const createManyEventInterviewerMutation = defineMutation((t) => ({
  createManyEventInterviewer: t.prismaField(createManyEventInterviewerMutationObject(t)),
}));
