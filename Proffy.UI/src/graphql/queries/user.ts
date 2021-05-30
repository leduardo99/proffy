import { gql } from '@apollo/client'

import { UserFragment } from '../fragments/user'

export const QUERY_PROFILE_ME = gql`
  query QueryProfileMe($identifier: ID!) {
    user(id: $identifier) {
      ...UserFragment
    }
  }
  ${UserFragment}
`
