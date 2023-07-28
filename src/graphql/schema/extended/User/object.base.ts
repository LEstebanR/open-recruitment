import { definePrismaObject } from '../../__generated__/utils'
import * as User from '../../__generated__/User'

export const UserObject = definePrismaObject('User', {
  ...User.UserObject,
  authz: {
    rules: ['IsAuthenticated2'],
  },
  fields: (t) => {
    // Type-safely omit and rename fields
    const { phone: asopotaPhone, email: emailAddress, ...fields } = User.UserObject.fields(t)

    return {
      ...fields,
      // Renamed field
      emailAddress,
      asopotaPhone,
      // Add custom fields
      customField: t.field({
        type: 'String', authz: {
          rules: ['IsAuthenticated'],
        }, resolve: () => 'Hello world!2',
      }),
    }
  },
})

