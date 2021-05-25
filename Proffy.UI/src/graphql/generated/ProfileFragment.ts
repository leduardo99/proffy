/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProfileFragment
// ====================================================

export interface ProfileFragment_user_profile_area {
  __typename: "Area";
  id: string;
  name: string;
}

export interface ProfileFragment_user_profile {
  __typename: "UserProfile";
  id: string;
  whatsapp: string | null;
  bio: string | null;
  area: ProfileFragment_user_profile_area | null;
}

export interface ProfileFragment {
  __typename: "UsersPermissionsUser";
  user_profile: ProfileFragment_user_profile | null;
}
