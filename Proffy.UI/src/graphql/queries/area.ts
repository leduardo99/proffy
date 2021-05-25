import { gql } from '@apollo/client'

export const QUERY_AREAS = gql`
  query QueryAreas {
    areas {
      id
      name
    }
  }
`
