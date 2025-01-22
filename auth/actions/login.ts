"use server"
import { generateAccessToken, generateRefreshToken } from "@/libs/tokens"
import { USER_CREDENTIALS, cookieConfig } from "../config"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

type LoginProps = {
  username: string
  password: string
}

const { accessCookieConfig, refreshCookieConfig } = cookieConfig

export const login = async ({ password, username }: LoginProps) => {
  if (username === USER_CREDENTIALS.username && password === USER_CREDENTIALS.password) {
    const accessToken = await generateAccessToken({ username })
    const refreshToken = await generateRefreshToken({ username })

    const cookieStore = await cookies()
    cookieStore.set({
      ...accessCookieConfig,
      value: accessToken
    })
    cookieStore.set({
      ...refreshCookieConfig,
      value: refreshToken
    })

    redirect("/dashboard/personal-info")
  } else {
    return false
  }
}
