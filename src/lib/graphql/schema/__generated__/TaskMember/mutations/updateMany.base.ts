import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { BatchPayload } from '../../objects';
import { prisma } from '@/lib/prisma';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyTaskMemberMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.TaskMemberWhereInput, required: false }),
      data: t.field({ type: Inputs.TaskMemberUpdateManyMutationInput, required: true }),
    }))

export const updateManyTaskMemberMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: updateManyTaskMemberMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.taskMember.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyTaskMemberMutation = defineMutation((t) => ({
  updateManyTaskMember: t.field(updateManyTaskMemberMutationObject(t)),
}));
