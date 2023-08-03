import { preExecRule } from '@graphql-authz/core'
import { userBelongsToCompany } from '@/utils/backend'

export const UserBelongsToCompany = preExecRule()(async (
  context: any,
) => {
  return await userBelongsToCompany(context.session?.user?.email, context.session?.user?.companySelected)
})