import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneOfferMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Offer',
    nullable: false,
    args: { data: t.arg({ type: Inputs.OfferCreateInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.offer.create({ data: args.data, ...query }),
  }),
);

export const createOneOfferMutation = defineMutation((t) => ({
  createOneOffer: t.prismaField(createOneOfferMutationObject(t)),
}));
