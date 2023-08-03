import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { prisma } from '@/lib/prisma';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneAuditLogMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'AuditLog',
    nullable: false,
    args: { data: t.arg({ type: Inputs.AuditLogCreateInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.auditLog.create({ data: args.data, ...query }),
  }),
);

export const createOneAuditLogMutation = defineMutation((t) => ({
  createOneAuditLog: t.prismaField(createOneAuditLogMutationObject(t)),
}));
