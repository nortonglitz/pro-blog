"use client"

import { FormSkeleton } from "./FormSkeleton"
import { Form } from "./Form"
import { useEffect, useState } from "react"
import { MetaDescription } from "@/db/types"
import { getMetaDescription } from "@/db/actions/meta-description"

export default function Options() {
  const [metaDescription, setMetaDescription] = useState<MetaDescription | undefined | null>(
    undefined
  )

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMetaDescription()
        setMetaDescription(data)
      } catch (err) {
        if (process.env.NODE_ENV === "development") {
          console.error("Error fetching meta description")
        }
        setMetaDescription(null)
      }
    }

    fetchData()
  }, [])
  return (
    <main className="h-screen overflow-y-auto px-2 pt-20 md:pt-10 md:px-10 pb-10 flex flex-col items-center">
      <header className="border-b border-neutral-800 pb-2 w-full mb-10">
        <h1 className="text-xl font-semibold tracking-wide uppercase">Options</h1>
      </header>
      {typeof metaDescription === "undefined" ? <FormSkeleton /> : <Form data={metaDescription} />}
    </main>
  )
}
