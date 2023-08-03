import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOneMembershipMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Membership',
    nullable: true,
    args: { where: t.arg({ type: Inputs.MembershipWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.membership.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneMembershipMutation = defineMutation((t) => ({
  deleteOneMembership: t.prismaField(deleteOneMembershipMutationObject(t)),
}));
