/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: MutationResetPassword
// ====================================================

export interface MutationResetPassword_resetPassword {
  __typename: "UsersPermissionsLoginPayload";
  jwt: string | null;
}

export interface MutationResetPassword {
  resetPassword: MutationResetPassword_resetPassword | null;
}

export interface MutationResetPasswordVariables {
  password: string;
  passwordConfirmation: string;
  code: string;
}
