import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findFirstAttachmentQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'Attachment',
    nullable: true,
    args: {
      where: t.arg({ type: Inputs.AttachmentWhereInput, required: false }),
      orderBy: t.arg({ type: [Inputs.AttachmentOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: Inputs.AttachmentWhereUniqueInput, required: false }),
      take: t.arg({ type: 'Int', required: false }),
      skip: t.arg({ type: 'Int', required: false }),
      distinct: t.arg({ type: [Inputs.AttachmentScalarFieldEnum], required: false }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.attachment.findFirst({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
        ...query,
      }),
  }),
);

export const findFirstAttachmentQuery = defineQuery((t) => ({
  findFirstAttachment: t.prismaField(findFirstAttachmentQueryObject(t)),
}));
