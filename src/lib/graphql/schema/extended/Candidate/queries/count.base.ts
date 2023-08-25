import { prisma } from '@/lib/prisma'
import { defineQueryFunction, defineQueryObject } from '@/lib/graphql/schema/__generated__/utils'
import { countCandidateQueryArgs } from '@/lib/graphql/schema/__generated__/Candidate/queries/count.base'

export const countCandidateQueryObject = defineQueryFunction(() =>
  defineQueryObject({
    type: 'Int',
    authz: {
      rules: ['IsAuthenticated'],
    },
    nullable: false,
    args: countCandidateQueryArgs,
    resolve: async (_root, args, _context) => {
      const selectedCompany = _context?.session?.user?.selectedCompany
      const whereCompanyFromSession = {
        AND: {
          ...args.where,
          companyId: selectedCompany,
        },
      }

      return !selectedCompany
        ? 0
        : prisma.candidate.count({
            where: whereCompanyFromSession,
            cursor: args.cursor || undefined,
            take: args.take || undefined,
            distinct: args.distinct || undefined,
            skip: args.skip || undefined,
            orderBy: args.orderBy || undefined,
          })
    },
  })
)
