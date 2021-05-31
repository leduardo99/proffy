/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createConnectionInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationConnections
// ====================================================

export interface MutationConnections_createConnection_connection {
  __typename: "Connection";
  id: string;
}

export interface MutationConnections_createConnection {
  __typename: "createConnectionPayload";
  connection: MutationConnections_createConnection_connection | null;
}

export interface MutationConnections {
  createConnection: MutationConnections_createConnection | null;
}

export interface MutationConnectionsVariables {
  input: createConnectionInput;
}
