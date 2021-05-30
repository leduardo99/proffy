/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryProffersWithFilters
// ====================================================

export interface QueryProffersWithFilters_proffers_schedules {
  __typename: "Schedule";
  id: string;
  from: number;
  to: number;
  weekDay: number;
}

export interface QueryProffersWithFilters_proffers {
  __typename: "Proffer";
  id: string;
  schedules: QueryProffersWithFilters_proffers_schedules[];
}

export interface QueryProffersWithFilters {
  proffers: QueryProffersWithFilters_proffers[];
}

export interface QueryProffersWithFiltersVariables {
  sort?: string | null;
  limit?: number | null;
  start?: number | null;
  where?: any | null;
}
