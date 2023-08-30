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
    $where2: TagSourceWhereInput
    $take: Int
    $orderBy: [TagSourceOrderByWithRelationInput!]
    $orderBy2: [TagSourceOrderByWithRelationInput!]
    $distinct: [CandidateTagScalarFieldEnum!]
  ) {
    tags: findManyTagSource(where: $where, take: $take, orderBy: $orderBy) {
      id
      name
      count: candidateTags(distinct: $distinct) {
        candidateId
      }
    }
    sources: findManyTagSource(where: $where2, take: $take, orderBy: $orderBy2) {
      id
      name
      count: candidateReferrer {
        id
      }
    }
  }
`

export const get_tagSources_variables = (take = 5, order = 'desc') => {
  return {
    where: {
      type: {
        equals: 'TAG_CANDIDATE',
      },
    },
    where2: {
      type: {
        equals: 'SOURCE',
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
    orderBy2: [
      {
        candidateReferrer: {
          _count: order,
        },
      },
    ],
    distinct: 'candidateId',
  }
}
