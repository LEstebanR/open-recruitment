import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneTagSourceMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'TagSource',
    nullable: false,
    args: { data: t.arg({ type: Inputs.TagSourceCreateInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.tagSource.create({ data: args.data, ...query }),
  }),
);

export const createOneTagSourceMutation = defineMutation((t) => ({
  createOneTagSource: t.prismaField(createOneTagSourceMutationObject(t)),
}));
