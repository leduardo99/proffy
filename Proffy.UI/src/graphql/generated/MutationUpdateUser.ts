/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { updateUserInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationUpdateUser
// ====================================================

export interface MutationUpdateUser_updateUser_user_area {
  __typename: "Area";
  id: string;
  name: string;
}

export interface MutationUpdateUser_updateUser_user_image {
  __typename: "UploadFile";
  url: string;
}

export interface MutationUpdateUser_updateUser_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  name: string;
  surname: string;
  whatsapp: string | null;
  bio: string | null;
  area: MutationUpdateUser_updateUser_user_area | null;
  image: MutationUpdateUser_updateUser_user_image | null;
}

export interface MutationUpdateUser_updateUser {
  __typename: "updateUserPayload";
  user: MutationUpdateUser_updateUser_user | null;
}

export interface MutationUpdateUser {
  /**
   * Update an existing user
   */
  updateUser: MutationUpdateUser_updateUser | null;
}

export interface MutationUpdateUserVariables {
  input: updateUserInput;
}
