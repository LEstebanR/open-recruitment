import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneMembershipMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Membership',
    nullable: false,
    args: { data: t.arg({ type: Inputs.MembershipCreateInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.membership.create({ data: args.data, ...query }),
  }),
);

export const createOneMembershipMutation = defineMutation((t) => ({
  createOneMembership: t.prismaField(createOneMembershipMutationObject(t)),
}));
