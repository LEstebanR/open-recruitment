import * as Inputs from '@/graphql/schema/__generated__/inputs'
import { prisma } from '@/prisma';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findManyAuditLogQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: ['AuditLog'],
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.AuditLogWhereInput, required: false }),
      orderBy: t.arg({ type: [Inputs.AuditLogOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: Inputs.AuditLogWhereUniqueInput, required: false }),
      take: t.arg({ type: 'Int', required: false }),
      skip: t.arg({ type: 'Int', required: false }),
      distinct: t.arg({ type: [Inputs.AuditLogScalarFieldEnum], required: false }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.auditLog.findMany({
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

export const findManyAuditLogQuery = defineQuery((t) => ({
  findManyAuditLog: t.prismaField(findManyAuditLogQueryObject(t)),
}));
