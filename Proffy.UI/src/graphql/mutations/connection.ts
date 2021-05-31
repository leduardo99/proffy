import { gql } from '@apollo/client'

export const MUTATION_CREATE_CONNECTION = gql`
  mutation MutationCreateConnection($input: createConnectionInput!) {
    createConnection(input: $input) {
      connection {
        id
      }
    }
  }
`
