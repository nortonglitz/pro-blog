import { cookieConfig } from "@/auth/config"
import { verifyAccessToken } from "@/libs/tokens"
import { JWTExpired } from "jose/errors"
import { NextRequest, NextResponse } from "next/server"

const { accessCookieConfig } = cookieConfig

export const authRouteMiddleware = async (request: NextRequest) => {
  const accessToken = request.cookies.get(accessCookieConfig.name)?.value

  try {
    if (accessToken) {
      await verifyAccessToken(accessToken)
      return NextResponse.redirect(new URL("/dashboard/personal-info", request.url))
    }
  } catch (err) {
    if (err instanceof JWTExpired) {
      return NextResponse.rewrite(new URL("/api/auth/refresh", request.url))
    }
    if (process.env.NODE_ENV === "development") {
      console.error("authRoute middleware error:", err)
    }
  }
  return NextResponse.next()
}
