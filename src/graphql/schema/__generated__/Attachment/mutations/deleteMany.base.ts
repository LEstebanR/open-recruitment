import * as Inputs from '@/graphql/schema/__generated__/inputs'
import { BatchPayload } from '../../objects';
import { prisma } from '@/prisma';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyAttachmentMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: { where: t.arg({ type: Inputs.AttachmentWhereInput, required: true }) },
    resolve: async (_root, args, _context, _info) =>
      await prisma.attachment.deleteMany({ where: args.where }),
  }),
);

export const deleteManyAttachmentMutation = defineMutation((t) => ({
  deleteManyAttachment: t.field(deleteManyAttachmentMutationObject(t)),
}));
