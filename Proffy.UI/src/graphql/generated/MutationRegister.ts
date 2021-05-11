/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createUserInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationRegister
// ====================================================

export interface MutationRegister_createUser_user {
  __typename: "UsersPermissionsUser";
  id: string;
  username: string;
  email: string;
  name: string;
  surname: string;
}

export interface MutationRegister_createUser {
  __typename: "createUserPayload";
  user: MutationRegister_createUser_user | null;
}

export interface MutationRegister {
  /**
   * Create a new user
   */
  createUser: MutationRegister_createUser | null;
}

export interface MutationRegisterVariables {
  input: createUserInput;
}
