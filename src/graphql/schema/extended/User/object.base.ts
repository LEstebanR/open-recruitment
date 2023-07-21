import * as Inputs from '@/graphql/schema/__generated__/inputs'
import {
  defineExposeObject,
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../../__generated__/utils'
import * as User from '../../__generated__/User'

export const UserObject = definePrismaObject('User', {
  ...User.UserObject,
  fields: (t) => {
    // Type-safely omit and rename fields
    const { phone: asopotaPhone, email: emailAddress, ...fields } = User.UserObject.fields(t)

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

