import { gql } from '@apollo/client'

export const MUTATION_RESET_PASSWORD = gql`
  mutation MutationResetPassword(
    $password: String!
    $passwordConfirmation: String!
    $code: String!
  ) {
    resetPassword(
      password: $password
      passwordConfirmation: $passwordConfirmation
      code: $code
    ) {
      jwt
    }
  }
`
