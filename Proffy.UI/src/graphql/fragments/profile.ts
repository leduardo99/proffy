import { gql } from '@apollo/client'

export const ProfileFragment = gql`
  fragment ProfileFragment on UsersPermissionsUser {
    user_profile {
      id
      whatsapp
      bio
      area {
        id
        name
      }
    }
  }
`
