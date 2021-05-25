/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { updateUserInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationUpdateUser
// ====================================================

export interface MutationUpdateUser_updateUser_user_image {
  __typename: "UploadFile";
  url: string;
}

export interface MutationUpdateUser_updateUser_user_user_profile_area {
  __typename: "Area";
  id: string;
  name: string;
}

export interface MutationUpdateUser_updateUser_user_user_profile {
  __typename: "UserProfile";
  id: string;
  whatsapp: string | null;
  bio: string | null;
  area: MutationUpdateUser_updateUser_user_user_profile_area | null;
}

export interface MutationUpdateUser_updateUser_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  name: string;
  surname: string;
  image: MutationUpdateUser_updateUser_user_image | null;
  user_profile: MutationUpdateUser_updateUser_user_user_profile | null;
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
