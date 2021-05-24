/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: MutationForgotPassword
// ====================================================

export interface MutationForgotPassword_forgotPassword {
  __typename: "UserPermissionsPasswordPayload";
  ok: boolean;
}

export interface MutationForgotPassword {
  forgotPassword: MutationForgotPassword_forgotPassword | null;
}

export interface MutationForgotPasswordVariables {
  email: string;
}
