import { definePrismaObject } from '../../__generated__/utils'
import * as Company from '../../__generated__/Company'

export const CompanyObject = definePrismaObject('Company', {
  ...Company.CompanyObject,
  include: {
    owner: true,
  },
  fields: (t) => {
    // Type-safely omit and rename fields
    const fields = Company.CompanyObject.fields(t)

    return {
      ...fields,
      // Add custom fields
      email: t.field({
        type: 'String',
        select: {
          owner: {
            select: {
              email: true,
            },
          },
        },
        resolve: (parent) => {
          return parent.owner.email
        },
        authz: {
          compositeRules: [{ or: ['IsAdminRequest', 'UserBelongsToCompany'] }],
        },
      }),
    }
  },
})