import { definePrismaObject } from '../../__generated__/utils'
import * as User from '../../__generated__/User'

export const UserObject = definePrismaObject('User', {
  ...User.UserObject,
  fields: (t) => {
    // Type-safely omit and rename fields
    const { password, ...fields } = User.UserObject.fields(t)

    return {
      ...fields,
      // Add custom fields
      customField: t.field({
        authz: {
          rules: ['IsAuthenticated2'],
        },
        type: 'String', resolve: () => 'Hello world!2',
      }),
    }
  },
})

