import { NextRequest } from "next/server"
import { protectRouteMiddleware, authRouteMiddleware } from "@/middlewares"

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (pathname.startsWith("/dashboard")) {
    return protectRouteMiddleware(request)
  }

  if (pathname.startsWith("/auth")) {
    return authRouteMiddleware(request)
  }
}
