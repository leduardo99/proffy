import { gql } from '@apollo/client'

export const MUTATION_CREATE_SCHEDULE = gql`
  mutation MutationCreateSchedule($input: createScheduleInput!) {
    createSchedule(input: $input) {
      schedule {
        id
      }
    }
  }
`
