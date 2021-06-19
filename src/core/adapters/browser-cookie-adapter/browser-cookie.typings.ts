export enum CookieKeys {
  RefreshToken = 'REFRESH_TOKEN',
  AccessToken = 'ACCESS_TOKEN',
  XsrfToken = 'XSRF-TOKEN',
}

export enum CookieSameSite {
  Strict = 'strict',
  Lax = 'lax',
}

export interface CookieOptions<ExpireType = Date> {
  domain?: string;
  expires?: ExpireType;
  maxAge?: number;
  path?: string;
  sameSite?: CookieSameSite;
  secure?: boolean;
  httpOnly?: boolean;
}

export type CookieSetOptions = CookieOptions<string>;