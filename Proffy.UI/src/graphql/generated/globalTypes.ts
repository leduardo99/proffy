/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface AreaInput {
  name: string;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface InputID {
  id: string;
}

export interface UsersRegisterInput {
  email: string;
  password: string;
  name: string;
  surname: string;
}

export interface createAreaInput {
  data?: AreaInput | null;
}

export interface editUserInput {
  username?: string | null;
  email?: string | null;
  provider?: string | null;
  password?: string | null;
  resetPasswordToken?: string | null;
  confirmationToken?: string | null;
  confirmed?: boolean | null;
  blocked?: boolean | null;
  role?: string | null;
  name?: string | null;
  surname?: string | null;
  image?: string | null;
  whatsapp?: string | null;
  bio?: string | null;
  area?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface updateUserInput {
  where?: InputID | null;
  data?: editUserInput | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
