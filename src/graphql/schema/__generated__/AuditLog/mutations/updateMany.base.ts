import * as Inputs from '@/graphql/schema/__generated__/inputs'
import { BatchPayload } from '../../objects';
import { prisma } from '@/prisma';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyAuditLogMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.AuditLogWhereInput, required: false }),
      data: t.arg({ type: Inputs.AuditLogUpdateManyMutationInput, required: true }),
    },
    resolve: async (_root, args, _context, _info) =>
      await prisma.auditLog.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyAuditLogMutation = defineMutation((t) => ({
  updateManyAuditLog: t.field(updateManyAuditLogMutationObject(t)),
}));
