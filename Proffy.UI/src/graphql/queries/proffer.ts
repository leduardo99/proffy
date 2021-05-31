import { gql } from '@apollo/client'

export const QUERY_PROFFER = gql`
  query QueryProffer($id: ID!) {
    proffer(id: $id) {
      id
      schedules {
        id
        from
        to
        weekDay
      }
      user {
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
    }
  }
`

export const QUERY_PROFFERS = gql`
  query QueryProffers {
    proffers {
      id
      schedules {
        id
        from
        to
        weekDay
      }
      user {
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
    }
  }
`

export const QUERY_PROFFERS_WITH_FILTERS = gql`
  query QueryProffersWithFilters(
    $sort: String
    $limit: Int
    $start: Int
    $where: JSON
  ) {
    proffers(sort: $sort, limit: $limit, start: $start, where: $where) {
      id
      user {
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
      schedules {
        id
        from
        to
        weekDay
      }
    }
  }
`
