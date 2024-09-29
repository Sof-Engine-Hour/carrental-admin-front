export interface User {
  [prop: string]: any;

  id?: number | string | null;
  name?: string;
  email?: string;
  avatar?: string;
  roles?: any[];
  permissions?: any[];
}


export interface UserV2 {
  [prop: string]: any;

  sub?: number | string | null;
  name?: string;
  email?: string;
  avatar?: string;
  realm_access?: {
    roles: string[];  // Assuming roles is an array of strings
  };
  // permissions?: any[];
}

export interface Token {
  [prop: string]: any;

  access_token: string;
  token_type?: string;
  expires_in?: number;
  exp?: number;
  refresh_token?: string;
}
