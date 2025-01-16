"use client"

import { getUserInfo } from "@/db/actions/user-info"
import { Form } from "./Form"
import { FormSkeleton } from "./FormSkeleton"
import { useEffect, useState } from "react"
import { UserInfo } from "@/db/types"

export default function PersonalInfo() {
  const [userInfo, setUserInfo] = useState<UserInfo | undefined | null>(undefined)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserInfo()
        setUserInfo(data)
      } catch (err) {
        if (process.env.NODE_ENV === "development") {
          console.error("Error fetching user info:", err)
        }
        setUserInfo(null)
      }
    }

    fetchData()
  }, [])

  return (
    <main className="h-screen overflow-y-auto px-2 pt-20 md:pt-10 md:px-10 pb-10 flex flex-col items-center">
      <header className="border-b border-neutral-800 pb-2 w-full mb-10">
        <h1 className="text-xl font-semibold tracking-wide uppercase">Personal Information</h1>
      </header>
      {typeof userInfo === "undefined" ? <FormSkeleton /> : <Form data={userInfo} />}
    </main>
  )
}
