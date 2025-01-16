"use client"
import { useEffect, useState } from "react"
import { MessagesList } from "./MessagesList"
import { MessagesListSkeleton } from "./MessagesListSkeleton"
import { Message } from "@/db/types"
import { getMessages } from "@/db/actions/messages"

export default function Messages() {
  const [messages, setMessages] = useState<Message[] | undefined | null>(undefined)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMessages()
        setMessages(data)
      } catch (err) {
        if (process.env.NODE_ENV === "development") {
          console.error("Error fetching messages")
        }
        setMessages(null)
      }
    }

    fetchData()
  }, [])

  return (
    <main className="h-screen overflow-y-auto pt-20 md:pt-10 md:px-10 md:pb-10 flex flex-col items-center">
      <header className="px-2 md:px-0 border-b border-neutral-800 pb-2 w-full md:mb-10">
        <h1 className="text-xl font-semibold tracking-wide uppercase">Messages</h1>
      </header>
      {typeof messages === "undefined" ? (
        <MessagesListSkeleton />
      ) : (
        <MessagesList data={messages} />
      )}
    </main>
  )
}
