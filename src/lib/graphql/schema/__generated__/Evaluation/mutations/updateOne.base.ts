import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOneEvaluationMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Evaluation',
    nullable: true,
    args: {
      where: t.arg({ type: Inputs.EvaluationWhereUniqueInput, required: true }),
      data: t.arg({ type: Inputs.EvaluationUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.evaluation.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOneEvaluationMutation = defineMutation((t) => ({
  updateOneEvaluation: t.prismaField(updateOneEvaluationMutationObject(t)),
}));
