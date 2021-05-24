import { gql } from '@apollo/client'

export const MUTATION_FORGOT_PASSWORD = gql`
  mutation MutationForgotPassword($email: String!) {
    forgotPassword(email: $email) {
      ok
    }
  }
`
