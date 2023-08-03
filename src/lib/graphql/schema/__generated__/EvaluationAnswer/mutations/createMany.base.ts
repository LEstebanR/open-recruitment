import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyEvaluationAnswerMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['EvaluationAnswer'],
    nullable: false,
    args: { data: t.arg({ type: [Inputs.EvaluationAnswerCreateInput], required: true }) },
    resolve: async (_query, _root, args, _context, _info) =>
      await prisma.$transaction(args.data.map((data) => prisma.evaluationAnswer.create({ data }))),
  }),
);

export const createManyEvaluationAnswerMutation = defineMutation((t) => ({
  createManyEvaluationAnswer: t.prismaField(createManyEvaluationAnswerMutationObject(t)),
}));
