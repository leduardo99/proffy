/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createAreaInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateArea
// ====================================================

export interface CreateArea_createArea_area {
  __typename: "Area";
  id: string;
  name: string;
}

export interface CreateArea_createArea {
  __typename: "createAreaPayload";
  area: CreateArea_createArea_area | null;
}

export interface CreateArea {
  createArea: CreateArea_createArea | null;
}

export interface CreateAreaVariables {
  input: createAreaInput;
}
