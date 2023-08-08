import { clientSSR } from '@/lib/apollo-client/ssr'
import { gql } from '@apollo/client'

export const getUserCompanies = async (userEmail: string): Promise<string[]> => {
  const client = clientSSR({ session: { user: { email: userEmail } }, isAdminRequest: true })
  const getCurrentUserCompanies = gql`
      query getCurrentUserCompanies{
          me {
              hiringRoles {
                  company {
                      id
                  }
              }
          }
      }
  `
  try {
    const { data } = await client.query({
      query: getCurrentUserCompanies,
    })

    const user = data?.me

    return user.hiringRoles?.map((hiringRole: any) => hiringRole.company.id) ?? [] //eslint-disable-line

  } catch (error) {
    console.error('Error fetching user companies:', error)
  }

  return []
}

export const userBelongsToCompany = async (userEmail: string | undefined, companyId: string | undefined): Promise<boolean> => {
  const userCompanies = userEmail ? await getUserCompanies(userEmail) : []

  if (companyId)
    return userCompanies.includes(companyId)

  return false
}