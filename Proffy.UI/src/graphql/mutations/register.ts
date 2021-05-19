import { gql } from '@apollo/client'

export const MUTATION_REGISTER = gql`
  mutation MutationRegister($input: UsersRegisterInput!) {
    registerUser(input: $input) {
      jwt
    }
  }
`
