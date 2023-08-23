import { preExecRule } from '@graphql-authz/core'
import { userBelongsToCompany } from '@/utils/backend'
import { IContext } from '@/pages/api/graphql'

export const UserBelongsToCompany = preExecRule()(async (context: IContext) => {
  return await userBelongsToCompany(
    context.session?.user?.email,
    context.session?.user?.selectedCompany
  )
})
