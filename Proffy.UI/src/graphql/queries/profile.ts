import { gql } from '@apollo/client'

import { ProfileFragment } from '../fragments/profile'
import { AreasFragment } from '../fragments/areas'

export const QUERY_PROFILE_ME = gql`
  query QueryProfileMe($identifier: ID!) {
    user(id: $identifier) {
      id
      email
      name
      surname
      image {
        url
      }
      ...ProfileFragment
    }

    areas {
      ...AreasFragment
    }
  }
  ${ProfileFragment}
  ${AreasFragment}
`
