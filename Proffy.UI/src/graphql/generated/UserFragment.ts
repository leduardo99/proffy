/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserFragment
// ====================================================

export interface UserFragment_area {
  __typename: "Area";
  id: string;
  name: string;
}

export interface UserFragment_image {
  __typename: "UploadFile";
  url: string;
}

export interface UserFragment {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  name: string;
  surname: string;
  whatsapp: string | null;
  bio: string | null;
  area: UserFragment_area | null;
  image: UserFragment_image | null;
}
