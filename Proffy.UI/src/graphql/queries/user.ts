import { gql } from '@apollo/client'

import { UserFragment } from '../fragments/user'
import { ProfileFragment } from '../fragments/profile'
import { AreasFragment } from '../fragments/areas'

export const QUERY_PROFILE_ME = gql`
  query QueryProfileMe($identifier: ID!) {
    user(id: $identifier) {
      ...UserFragment
      ...ProfileFragment
    }

    areas {
      ...AreasFragment
    }
  }
  ${UserFragment}
  ${ProfileFragment}
  ${AreasFragment}
`
