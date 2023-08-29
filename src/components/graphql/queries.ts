import { gql } from '@apollo/client'

export const GET_ME_DATA_AND_COMPANIES = gql`
  query GET_ME_DATA_AND_COMPANIES {
    me {
      hiringRoles {
        company {
          name
        }
        id
      }
      email
    }
  }
`

export const GET_ME_COMPANIES = gql`
  query GET_ME_COMPANIES {
    me {
      hiringRoles {
        company {
          id
          name
        }
      }
    }
  }
`

export const GET_DASHBOARD_COUNTS = gql`
  query GET_DASHBOARD_COUNTS {
    countCandidate
    countOffer
    countTalentPool
  }
`
