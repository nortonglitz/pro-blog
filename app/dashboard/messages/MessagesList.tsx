import { format } from "date-fns"
import { IconMail, IconMailOpened } from "@tabler/icons-react"
import clsx from "clsx"
import { MessageModal } from "./MessageModal"
import { Message } from "@/db/types"
import { useState } from "react"
import { IconMailOff } from "@tabler/icons-react"
import { updateMessageReadStatus } from "@/db/actions/messages"

type MessagesListProps = {
  data: Message[] | null
}

export const MessagesList = ({ data }: MessagesListProps) => {
  const [messageModal, setMessageModal] = useState<Message | null>(null)
  const [messages, setMessages] = useState(data)

  if (data === null) {
    return (
      <div className="flex flex-col items-center text-neutral-400 mt-10 md:mt-0">
        <IconMailOff
          size="10rem"
          stroke={0.5}
        />
        <h3 className="text-xl">There are no messages yet</h3>
      </div>
    )
  }

  const handleMessageClick = (id: number, message: Message) => {
    try {
      setMessageModal(message)
      if (message.read === false) {
        updateMessageReadStatus(id, true)
      }
      setMessages(prevMessages => {
        if (prevMessages && prevMessages.length > 1) {
          return prevMessages.map(prevMsg =>
            prevMsg.id === id ? { ...prevMsg, read: true } : prevMsg
          )
        }
        return prevMessages
      })
    } catch {
      if (process.env.NODE_ENV === "development") {
        console.error("Failed to update message read status")
      }
    }
  }

  return (
    <>
      <MessageModal
        message={messageModal}
        isOpen={!!messageModal}
        onClose={() => setMessageModal(null)}
      />
      <div className="w-full flex flex-col">
        {messages &&
          messages.map((message, i) => (
            <button
              key={`msg-${message.from}-${i}`}
              className={clsx(
                message.read ? "bg-neutral-900 text-neutral-400 outline-white" : "bg-neutral-800",
                "flex gap-4 items-center py-4 px-2 md:px-4 flex-wrap relative",
                "hover:outline hover:scale-[101%] hover:z-10 cursor-pointer",
                "[&:not(:last-child)]:border-b [&:not(:last-child)]:border-neutral-700"
              )}
              onClick={() => handleMessageClick(message.id, message)}
            >
              <span>
                {message.read ? <IconMailOpened stroke={1.5} /> : <IconMail stroke={1} />}
              </span>
              <div className="flex flex-wrap flex-1 justify-between">
                <span className="line-clamp-1 text-left font-semibold flex-1 min-w-60">
                  {message.subject}
                </span>
                <span className="text-sm md:text-base text-left flex-1 min-w-60">
                  {message.from}
                </span>
              </div>
              <span className="text-xs lg:text-base absolute lg:static right-2 bottom-1 lowercase">
                {format(message.created_at, "d MMM")}
              </span>
            </button>
          ))}
      </div>
    </>
  )
}
