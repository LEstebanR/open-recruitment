import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyTagSourceMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['TagSource'],
    nullable: false,
    args: { data: t.arg({ type: [Inputs.TagSourceCreateInput], required: true }) },
    resolve: async (_query, _root, args, _context, _info) =>
      await prisma.$transaction(args.data.map((data) => prisma.tagSource.create({ data }))),
  }),
);

export const createManyTagSourceMutation = defineMutation((t) => ({
  createManyTagSource: t.prismaField(createManyTagSourceMutationObject(t)),
}));
