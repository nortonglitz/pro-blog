import { SignJWT, jwtVerify, JWTPayload } from "jose"
import { jwtConfig } from "@/auth/config"

// Transforma as variáveis em uma representação de bytes (Uint8Array)
// que é a representação necessária para o jose. Isso se dá porque o jose
// utiliza operações criptográficas que lidam diretamente com dados binários
const textEncoder = new TextEncoder()

const ACCESS_TOKEN_SECRET = textEncoder.encode(process.env.ACCESS_TOKEN_SECRET)
const REFRESH_TOKEN_SECRET = textEncoder.encode(process.env.REFRESH_TOKEN_SECRET)

const { expirationTime, protectedHeader } = jwtConfig

// Access token

export const generateAccessToken = async (payload: JWTPayload) => {
  return await new SignJWT(payload)
    .setProtectedHeader(protectedHeader)
    .setExpirationTime(expirationTime.acessToken)
    .setIssuedAt()
    .setNotBefore("0s")
    .sign(ACCESS_TOKEN_SECRET)
}

export const verifyAccessToken = async (token: string) => {
  try {
    const { payload } = await jwtVerify(token, ACCESS_TOKEN_SECRET)
    return payload
  } catch (err) {
    throw err
  }
}

// Refresh token

export const generateRefreshToken = async (payload: JWTPayload) => {
  return await new SignJWT(payload)
    .setProtectedHeader(protectedHeader)
    .setExpirationTime(expirationTime.refreshToken)
    .setIssuedAt()
    .setNotBefore("0s")
    .sign(REFRESH_TOKEN_SECRET)
}

export const verifyRefreshToken = async (token: string) => {
  try {
    const { payload } = await jwtVerify(token, REFRESH_TOKEN_SECRET)
    return payload
  } catch (err) {
    throw err
  }
}
