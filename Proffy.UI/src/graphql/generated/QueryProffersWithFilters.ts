/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryProffersWithFilters
// ====================================================

export interface QueryProffersWithFilters_proffers_user_area {
  __typename: "Area";
  id: string;
  name: string;
}

export interface QueryProffersWithFilters_proffers_user_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryProffersWithFilters_proffers_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  name: string;
  surname: string;
  whatsapp: string | null;
  bio: string | null;
  area: QueryProffersWithFilters_proffers_user_area | null;
  image: QueryProffersWithFilters_proffers_user_image | null;
}

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
  user: QueryProffersWithFilters_proffers_user | null;
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
