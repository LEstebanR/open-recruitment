import * as Inputs from '@/graphql/schema/__generated__/inputs'
import { prisma } from '@/prisma';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOneAttachmentMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Attachment',
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.AttachmentWhereUniqueInput, required: true }),
      create: t.arg({ type: Inputs.AttachmentCreateInput, required: true }),
      update: t.arg({ type: Inputs.AttachmentUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.attachment.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOneAttachmentMutation = defineMutation((t) => ({
  upsertOneAttachment: t.prismaField(upsertOneAttachmentMutationObject(t)),
}));
