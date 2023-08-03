import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneHiringRoleMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'HiringRole',
    nullable: false,
    args: { data: t.arg({ type: Inputs.HiringRoleCreateInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.hiringRole.create({ data: args.data, ...query }),
  }),
);

export const createOneHiringRoleMutation = defineMutation((t) => ({
  createOneHiringRole: t.prismaField(createOneHiringRoleMutationObject(t)),
}));
