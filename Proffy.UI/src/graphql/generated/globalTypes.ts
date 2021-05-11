/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface UserInput {
  username: string;
  email: string;
  provider?: string | null;
  password?: string | null;
  resetPasswordToken?: string | null;
  confirmationToken?: string | null;
  confirmed?: boolean | null;
  blocked?: boolean | null;
  role?: string | null;
  name: string;
  surname: string;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface createUserInput {
  data?: UserInput | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
