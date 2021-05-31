import { gql } from '@apollo/client'

export const QUERY_CONNECTIONS = gql`
  query QueryConnections {
    connections {
      id
    }
  }
`
