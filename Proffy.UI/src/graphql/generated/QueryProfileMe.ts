/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryProfileMe
// ====================================================

export interface QueryProfileMe_user_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryProfileMe_user_user_profile_area {
  __typename: "Area";
  id: string;
  name: string;
}

export interface QueryProfileMe_user_user_profile {
  __typename: "UserProfile";
  id: string;
  whatsapp: string | null;
  bio: string | null;
  area: QueryProfileMe_user_user_profile_area | null;
}

export interface QueryProfileMe_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  name: string;
  surname: string;
  image: QueryProfileMe_user_image | null;
  user_profile: QueryProfileMe_user_user_profile | null;
}

export interface QueryProfileMe_areas {
  __typename: "Area";
  id: string;
  name: string;
}

export interface QueryProfileMe {
  user: QueryProfileMe_user | null;
  areas: QueryProfileMe_areas[];
}

export interface QueryProfileMeVariables {
  identifier: string;
}
