"use server"

import { cookies } from "next/headers"
import { cookieConfig } from "../config"
import { redirect } from "next/navigation"

const { accessCookieConfig, refreshCookieConfig } = cookieConfig

export const logout = async () => {
  const cookieStore = await cookies()

  // O método do http não existe um comando explícito para delete
  // então a melhor abordagem é setar o cookie para maxAge: 0
  cookieStore.set({
    ...accessCookieConfig,
    value: "",
    maxAge: 0
  })

  cookieStore.set({
    ...refreshCookieConfig,
    value: "",
    maxAge: 0
  })

  redirect("/auth/login")
}
