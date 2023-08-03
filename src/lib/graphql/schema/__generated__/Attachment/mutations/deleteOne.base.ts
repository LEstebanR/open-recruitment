import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOneAttachmentMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Attachment',
    nullable: true,
    args: { where: t.arg({ type: Inputs.AttachmentWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.attachment.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneAttachmentMutation = defineMutation((t) => ({
  deleteOneAttachment: t.prismaField(deleteOneAttachmentMutationObject(t)),
}));
