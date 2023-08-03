import { preExecRule } from '@graphql-authz/core'
import { IContext } from '@/pages/api/graphql'

export const IsAuthenticated = preExecRule()((context: IContext) => {
  return true || !!context.session?.user
})

export const IsAuthenticated2 = preExecRule()((context: IContext) => {
// context.session?.user?.userRole === 'SUPERADMIN'
  return false
})

export const IsAdminRequest = preExecRule()((context: IContext) => {
  return !!context.isAdminRequest
})