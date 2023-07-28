import * as Inputs from '@/graphql/schema/__generated__/inputs'
import { prisma } from '@/prisma';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOneAuditLogMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'AuditLog',
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.AuditLogWhereUniqueInput, required: true }),
      create: t.arg({ type: Inputs.AuditLogCreateInput, required: true }),
      update: t.arg({ type: Inputs.AuditLogUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.auditLog.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOneAuditLogMutation = defineMutation((t) => ({
  upsertOneAuditLog: t.prismaField(upsertOneAuditLogMutationObject(t)),
}));
