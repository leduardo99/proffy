/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { updateUserProfileInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationUpdateUserProfile
// ====================================================

export interface MutationUpdateUserProfile_updateUserProfile_userProfile {
  __typename: "UserProfile";
  id: string;
}

export interface MutationUpdateUserProfile_updateUserProfile {
  __typename: "updateUserProfilePayload";
  userProfile: MutationUpdateUserProfile_updateUserProfile_userProfile | null;
}

export interface MutationUpdateUserProfile {
  updateUserProfile: MutationUpdateUserProfile_updateUserProfile | null;
}

export interface MutationUpdateUserProfileVariables {
  input: updateUserProfileInput;
}
