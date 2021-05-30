/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { updateProfferInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationUpdateProffer
// ====================================================

export interface MutationUpdateProffer_updateProffer_proffer {
  __typename: "Proffer";
  id: string;
}

export interface MutationUpdateProffer_updateProffer {
  __typename: "updateProfferPayload";
  proffer: MutationUpdateProffer_updateProffer_proffer | null;
}

export interface MutationUpdateProffer {
  updateProffer: MutationUpdateProffer_updateProffer | null;
}

export interface MutationUpdateProfferVariables {
  input: updateProfferInput;
}
