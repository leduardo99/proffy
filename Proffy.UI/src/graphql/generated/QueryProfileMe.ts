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

export interface QueryProfileMe_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  name: string;
  surname: string;
  image: QueryProfileMe_user_image | null;
}

export interface QueryProfileMe {
  user: QueryProfileMe_user | null;
}

export interface QueryProfileMeVariables {
  identifier: string;
}
