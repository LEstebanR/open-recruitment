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

export const GET_TAGSOURCES = gql`
  query GET_TAGSOURCES(
    $where: TagSourceWhereInput
    $take: Int
    $orderBy: [TagSourceOrderByWithRelationInput!]
    $distinct: [CandidateTagScalarFieldEnum!]
  ) {
    findManyTagSource(where: $where, take: $take, orderBy: $orderBy) {
      id
      name
      candidateTags(distinct: $distinct) {
        candidateId
      }
    }
  }
`

export const get_tagSources_variables = (take = 5, type = 'TAG_CANDIDATE', order = 'desc') => {
  return {
    where: {
      type: {
        equals: type,
      },
    },
    take: take,
    orderBy: [
      {
        candidateTags: {
          _count: order,
        },
      },
    ],
    distinct: 'candidateId',
  }
}
