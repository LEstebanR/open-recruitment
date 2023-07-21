import * as Inputs from '@/graphql/schema/__generated__/inputs'
import {
  defineExposeObject,
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../../__generated__/utils'
import * as Account from '../../__generated__/Account'

export const AccountObject = definePrismaObject('Account', {
  ...Account.AccountObject,
  fields: (t) => {
    // Type-safely omit and rename fields
    const { provider: asopotaPhone, type: emailAddress, ...fields } = Account.AccountObject.fields(t)

    return {
      ...fields,
      // Renamed field
      emailAddress,
      asopotaPhone,
      // Add custom fields
      customField: t.field({ type: 'String', resolve: () => 'Hello world!' }),
    }
  },
})