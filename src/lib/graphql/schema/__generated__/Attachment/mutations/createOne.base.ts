import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneAttachmentMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Attachment',
    nullable: false,
    args: { data: t.arg({ type: Inputs.AttachmentCreateInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.attachment.create({ data: args.data, ...query }),
  }),
);

export const createOneAttachmentMutation = defineMutation((t) => ({
  createOneAttachment: t.prismaField(createOneAttachmentMutationObject(t)),
}));
