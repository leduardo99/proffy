/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createProfferInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationCreateProffer
// ====================================================

export interface MutationCreateProffer_createProffer_proffer {
  __typename: "Proffer";
  id: string;
}

export interface MutationCreateProffer_createProffer {
  __typename: "createProfferPayload";
  proffer: MutationCreateProffer_createProffer_proffer | null;
}

export interface MutationCreateProffer {
  createProffer: MutationCreateProffer_createProffer | null;
}

export interface MutationCreateProfferVariables {
  input: createProfferInput;
}
