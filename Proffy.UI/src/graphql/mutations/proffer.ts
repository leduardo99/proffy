import { gql } from '@apollo/client'

export const MUTATION_CREATE_PROFFER = gql`
  mutation MutationCreateProffer($input: createProfferInput!) {
    createProffer(input: $input) {
      proffer {
        id
      }
    }
  }
`

export const MUTATION_UPDATE_PROFFER = gql`
  mutation MutationUpdateProffer($input: updateProfferInput!) {
    updateProffer(input: $input) {
      proffer {
        id
      }
    }
  }
`
