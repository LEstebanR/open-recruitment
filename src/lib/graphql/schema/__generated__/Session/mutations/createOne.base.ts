import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneSessionMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Session',
    nullable: false,
    args: { data: t.arg({ type: Inputs.SessionCreateInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.session.create({ data: args.data, ...query }),
  }),
);

export const createOneSessionMutation = defineMutation((t) => ({
  createOneSession: t.prismaField(createOneSessionMutationObject(t)),
}));
