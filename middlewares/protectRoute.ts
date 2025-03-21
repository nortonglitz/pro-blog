import { NextRequest, NextResponse } from "next/server"
import { cookieConfig } from "@/auth/config"
import { verifyAccessToken } from "@/libs/tokens"
import { JWTExpired } from "jose/errors"

const { accessCookieConfig } = cookieConfig

export const protectRouteMiddleware = async (request: NextRequest) => {
  const accessToken = request.cookies.get(accessCookieConfig.name)?.value
  try {
    if (!accessToken) {
      return NextResponse.redirect(new URL("/auth/login", request.url))
    }
    if (accessToken) {
      await verifyAccessToken(accessToken)
      return NextResponse.next()
    }
  } catch (err) {
    if (err instanceof JWTExpired) {
      return NextResponse.rewrite(new URL("/api/auth/refresh", request.url))
    }

    if (process.env.NODE_ENV === "development") {
      console.error("protectRoute middleware error:", err)
    }
  }
  return NextResponse.redirect(new URL("/auth/login", request.url))
}
