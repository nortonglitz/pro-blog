import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { generateAccessToken, verifyRefreshToken } from "@/libs/tokens"
import { cookieConfig } from "@/auth/config"
import { AuthenticationPayload } from "@/auth/types"

export async function GET(request: NextRequest) {
  if (request.nextUrl.pathname === "/api/auth/refresh") {
    return NextResponse.redirect(new URL("/auth/login", request.url))
  }
  const cookieStore = await cookies()

  const { refreshCookieConfig, accessCookieConfig } = cookieConfig

  const refreshToken = cookieStore.get(refreshCookieConfig.name)?.value

  if (!refreshToken) {
    return NextResponse.redirect(new URL("/auth/login", request.url))
  }

  try {
    const rtPayload = (await verifyRefreshToken(refreshToken)) as AuthenticationPayload
    const newAccessToken = await generateAccessToken({ username: rtPayload.username })

    cookieStore.set({
      ...accessCookieConfig,
      value: newAccessToken
    })

    return NextResponse.redirect(request.url)
  } catch {
    if (process.env.NODE_ENV === "development") {
      console.error("api/auth/refresh: Invalid refresh token")
    }
    return NextResponse.redirect(new URL("/auth/login", request.url))
  }
}
