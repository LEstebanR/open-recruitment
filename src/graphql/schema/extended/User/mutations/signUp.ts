import { Prisma } from '@prisma/client'
import * as Inputs from '@/graphql/schema/__generated__/inputs'
import { prisma } from '@/prisma'
import { builder } from '@/graphql/schema/builder'
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../../__generated__/utils'

const UserSignUpInput = builder.inputRef<Prisma.UserCreateInput & {
  companyName: string
}>('UserSignUpInput').implement({
  fields: (t) => ({
    ...Inputs.UserCreateInputFields(t),
    companyName: t.field({ 'required': true, 'type': 'String' }),
  }),
})

export const signUpUserMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'User',
    nullable: false,
    args: { data: t.arg({ type: UserSignUpInput, required: true }) },
    resolve: async (query, _root, args, _context, _info) => {
      const { companyName, ...userArgs } = args.data
      const user = await prisma.user.create({ data: userArgs, ...query })
      await prisma.company.create({ data: { name: companyName, ownerId: user.id } })

      return await prisma.user.findUnique({ where: { id: user.id } }) ?? user
    },
  }),
)