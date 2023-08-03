import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneEventScheduleEvaluationMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'EventScheduleEvaluation',
    nullable: false,
    args: { data: t.arg({ type: Inputs.EventScheduleEvaluationCreateInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.eventScheduleEvaluation.create({ data: args.data, ...query }),
  }),
);

export const createOneEventScheduleEvaluationMutation = defineMutation((t) => ({
  createOneEventScheduleEvaluation: t.prismaField(createOneEventScheduleEvaluationMutationObject(t)),
}));
