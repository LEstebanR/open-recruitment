import * as Inputs from '@/graphql/schema/__generated__/inputs'
import { BatchPayload } from '../../objects';
import { prisma } from '@/prisma';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyAuditLogMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: { where: t.arg({ type: Inputs.AuditLogWhereInput, required: true }) },
    resolve: async (_root, args, _context, _info) =>
      await prisma.auditLog.deleteMany({ where: args.where }),
  }),
);

export const deleteManyAuditLogMutation = defineMutation((t) => ({
  deleteManyAuditLog: t.field(deleteManyAuditLogMutationObject(t)),
}));
