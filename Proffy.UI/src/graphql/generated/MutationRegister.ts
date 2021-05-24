/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UsersRegisterInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationRegister
// ====================================================

export interface MutationRegister_registerUser {
  __typename: "UsersPermissionsLoginPayload";
  jwt: string | null;
}

export interface MutationRegister {
  registerUser: MutationRegister_registerUser;
}

export interface MutationRegisterVariables {
  input: UsersRegisterInput;
}
