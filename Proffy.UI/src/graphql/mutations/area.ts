import { gql } from '@apollo/client'

export const MUTATION_CREATE_AREA = gql`
  mutation CreateArea($input: createAreaInput!) {
    createArea(input: $input) {
      area {
        id
        name
      }
    }
  }
`
