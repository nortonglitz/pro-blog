import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies"
import { JWTHeaderParameters } from "jose"

export const USER_CREDENTIALS = {
  username: "admin",
  password: "123456"
}

const EXPIRES_IN = {
  jwt: {
    access: "15m",
    refresh: "7d"
  },
  cookie: {
    access: 7 * 24 * 60 * 60,
    refresh: 7 * 24 * 60 * 60
  }
}

/******************************/
/********** TOKENS ************/
/******************************/

const protectedHeader: JWTHeaderParameters = {
  alg: "HS256"
}
const expirationTime = {
  acessToken: EXPIRES_IN.jwt.access,
  refreshToken: EXPIRES_IN.jwt.refresh
}

export const jwtConfig = {
  protectedHeader,
  expirationTime
}

/******************************/
/********** COOKIES ***********/
/******************************/

const baseCookieConfig: Partial<ResponseCookie> = {
  httpOnly: true,
  secure: true,
  path: "/"
}

const accessCookieConfig: Omit<ResponseCookie, "value"> = {
  ...baseCookieConfig,
  name: "access_token",
  maxAge: EXPIRES_IN.cookie.access
}

const refreshCookieConfig: Omit<ResponseCookie, "value"> = {
  ...baseCookieConfig,
  name: "refresh_token",
  maxAge: EXPIRES_IN.cookie.refresh
}

export const cookieConfig = {
  accessCookieConfig,
  refreshCookieConfig
}
