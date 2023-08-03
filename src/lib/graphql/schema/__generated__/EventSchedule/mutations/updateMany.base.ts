import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { BatchPayload } from '../../objects';
import { prisma } from '@/lib/prisma';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyEventScheduleMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.EventScheduleWhereInput, required: false }),
      data: t.arg({ type: Inputs.EventScheduleUpdateManyMutationInput, required: true }),
    },
    resolve: async (_root, args, _context, _info) =>
      await prisma.eventSchedule.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyEventScheduleMutation = defineMutation((t) => ({
  updateManyEventSchedule: t.field(updateManyEventScheduleMutationObject(t)),
}));
