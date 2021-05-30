/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createScheduleInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationCreateSchedule
// ====================================================

export interface MutationCreateSchedule_createSchedule_schedule {
  __typename: "Schedule";
  id: string;
}

export interface MutationCreateSchedule_createSchedule {
  __typename: "createSchedulePayload";
  schedule: MutationCreateSchedule_createSchedule_schedule | null;
}

export interface MutationCreateSchedule {
  createSchedule: MutationCreateSchedule_createSchedule | null;
}

export interface MutationCreateScheduleVariables {
  input: createScheduleInput;
}
