import * as Inputs from '@/graphql/schema/__generated__/inputs'
import { prisma } from '@/prisma';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueAttachmentQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'Attachment',
    nullable: true,
    args: { where: t.arg({ type: Inputs.AttachmentWhereUniqueInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.attachment.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueAttachmentQuery = defineQuery((t) => ({
  findUniqueAttachment: t.prismaField(findUniqueAttachmentQueryObject(t)),
}));
