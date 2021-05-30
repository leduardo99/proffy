/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryProffers
// ====================================================

export interface QueryProffers_proffers_schedules {
  __typename: "Schedule";
  id: string;
  from: number;
  to: number;
  weekDay: number;
}

export interface QueryProffers_proffers_user_area {
  __typename: "Area";
  id: string;
  name: string;
}

export interface QueryProffers_proffers_user_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryProffers_proffers_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  name: string;
  surname: string;
  whatsapp: string | null;
  bio: string | null;
  area: QueryProffers_proffers_user_area | null;
  image: QueryProffers_proffers_user_image | null;
}

export interface QueryProffers_proffers {
  __typename: "Proffer";
  id: string;
  schedules: QueryProffers_proffers_schedules[];
  user: QueryProffers_proffers_user | null;
}

export interface QueryProffers {
  proffers: QueryProffers_proffers[];
}
