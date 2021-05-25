import { gql } from '@apollo/client'

export const AreasFragment = gql`
  fragment AreasFragment on Area {
    id
    name
  }
`
