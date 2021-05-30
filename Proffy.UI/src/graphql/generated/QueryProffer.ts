/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryProffer
// ====================================================

export interface QueryProffer_proffer_schedules {
  __typename: "Schedule";
  id: string;
  from: number;
  to: number;
  weekDay: number;
}

export interface QueryProffer_proffer_user_area {
  __typename: "Area";
  id: string;
  name: string;
}

export interface QueryProffer_proffer_user_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryProffer_proffer_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  name: string;
  surname: string;
  whatsapp: string | null;
  bio: string | null;
  area: QueryProffer_proffer_user_area | null;
  image: QueryProffer_proffer_user_image | null;
}

export interface QueryProffer_proffer {
  __typename: "Proffer";
  id: string;
  schedules: QueryProffer_proffer_schedules[];
  user: QueryProffer_proffer_user | null;
}

export interface QueryProffer {
  proffer: QueryProffer_proffer | null;
}

export interface QueryProfferVariables {
  id: string;
}
