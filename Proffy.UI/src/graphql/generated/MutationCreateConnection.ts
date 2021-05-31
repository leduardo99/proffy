/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createConnectionInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationCreateConnection
// ====================================================

export interface MutationCreateConnection_createConnection_connection {
  __typename: "Connection";
  id: string;
}

export interface MutationCreateConnection_createConnection {
  __typename: "createConnectionPayload";
  connection: MutationCreateConnection_createConnection_connection | null;
}

export interface MutationCreateConnection {
  createConnection: MutationCreateConnection_createConnection | null;
}

export interface MutationCreateConnectionVariables {
  input: createConnectionInput;
}
