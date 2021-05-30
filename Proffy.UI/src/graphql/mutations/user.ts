import { gql } from '@apollo/client'
import { UserFragment } from 'graphql/fragments/user'

export const MUTATION_UPDATE_USER = gql`
  mutation MutationUpdateUser($input: updateUserInput!) {
    updateUser(input: $input) {
      user {
        ...UserFragment
      }
    }
  }
  ${UserFragment}
`

export const MUTATION_UPDATE_USER_AVATAR = gql`
  mutation UploadUserAvatar($file: Upload!) {
    upload(file: $file) {
      id
    }
  }
`
