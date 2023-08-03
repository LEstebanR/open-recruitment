import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOneAuditLogMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'AuditLog',
    nullable: true,
    args: {
      where: t.arg({ type: Inputs.AuditLogWhereUniqueInput, required: true }),
      data: t.arg({ type: Inputs.AuditLogUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.auditLog.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOneAuditLogMutation = defineMutation((t) => ({
  updateOneAuditLog: t.prismaField(updateOneAuditLogMutationObject(t)),
}));
