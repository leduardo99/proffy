import { gql } from '@apollo/client'
import { ProfileFragment } from 'graphql/fragments/profile'
import { UserFragment } from 'graphql/fragments/user'

export const MUTATION_UPDATE_USER = gql`
  mutation MutationUpdateUser($input: updateUserInput!) {
    updateUser(input: $input) {
      user {
        ...UserFragment
        ...ProfileFragment
      }
    }
  }
  ${UserFragment}
  ${ProfileFragment}
`

export const MUTATION_UPDATE_USER_PROFILE = gql`
  mutation MutationUpdateUserProfile($input: updateUserProfileInput!) {
    updateUserProfile(input: $input) {
      userProfile {
        id
      }
    }
  }
`
