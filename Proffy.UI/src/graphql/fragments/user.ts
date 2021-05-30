import { gql } from '@apollo/client'

export const UserFragment = gql`
  fragment UserFragment on UsersPermissionsUser {
    id
    email
    name
    surname
    whatsapp
    bio
    area {
      id
      name
    }
    image {
      url
    }
  }
`
