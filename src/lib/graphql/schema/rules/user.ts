import { preExecRule } from '@graphql-authz/core'
import { IContext } from '@/pages/api/graphql'

export const IsAuthenticated = preExecRule()((context: IContext) => {
  return !!context.session?.user
})

export const HasSelectedCompany = preExecRule()((context: IContext) => {
  return !!context.session?.user?.selectedCompany
})

export const IsAdminRequest = preExecRule()((context: IContext) => {
  return !!context.isAdminRequest
})
