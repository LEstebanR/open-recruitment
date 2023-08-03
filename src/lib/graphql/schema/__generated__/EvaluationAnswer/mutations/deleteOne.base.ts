import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOneEvaluationAnswerMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'EvaluationAnswer',
    nullable: true,
    args: { where: t.arg({ type: Inputs.EvaluationAnswerWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.evaluationAnswer.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneEvaluationAnswerMutation = defineMutation((t) => ({
  deleteOneEvaluationAnswer: t.prismaField(deleteOneEvaluationAnswerMutationObject(t)),
}));
