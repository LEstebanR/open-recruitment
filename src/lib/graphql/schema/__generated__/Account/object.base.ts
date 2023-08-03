import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import {
  defineExposeObject,
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const AccountObject = definePrismaObject('Account', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.exposeID('id', AccountIdFieldObject),
    userId: t.exposeString('userId', AccountUserIdFieldObject),
    type: t.exposeString('type', AccountTypeFieldObject),
    provider: t.exposeString('provider', AccountProviderFieldObject),
    providerAccountId: t.exposeString('providerAccountId', AccountProviderAccountIdFieldObject),
    refresh_token: t.exposeString('refresh_token', AccountRefresh_tokenFieldObject),
    access_token: t.exposeString('access_token', AccountAccess_tokenFieldObject),
    expires_at: t.exposeInt('expires_at', AccountExpires_atFieldObject),
    token_type: t.exposeString('token_type', AccountToken_typeFieldObject),
    scope: t.exposeString('scope', AccountScopeFieldObject),
    id_token: t.exposeString('id_token', AccountId_tokenFieldObject),
    session_state: t.exposeString('session_state', AccountSession_stateFieldObject),
    user: t.relation('user', AccountUserFieldObject),
  }),
});

export const AccountIdFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const AccountUserIdFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const AccountTypeFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const AccountProviderFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const AccountProviderAccountIdFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const AccountRefresh_tokenFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: true,
});

export const AccountAccess_tokenFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: true,
});

export const AccountExpires_atFieldObject = defineExposeObject('Int', {
  description: undefined,
  nullable: true,
});

export const AccountToken_typeFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: true,
});

export const AccountScopeFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: true,
});

export const AccountId_tokenFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: true,
});

export const AccountSession_stateFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: true,
});

export const AccountUserFieldObject = defineRelationObject('Account', 'user', {
  description: undefined,
  nullable: false,
  args: undefined,
  query: undefined,
});
