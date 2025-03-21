import { Button } from "@/components/UI"
import { Message } from "@/db/types"
import { IconX } from "@tabler/icons-react"
import { formatDistanceToNow } from "date-fns"

type MessageModalProps = {
  message?: Message | null
  isOpen?: boolean
  onClose?: () => void
}

export const MessageModal = ({ message, isOpen, onClose }: MessageModalProps) => {
  if (!isOpen || !message) return null

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-30 bg-black/70 backdrop-blur-sm">
      <article className="bg-neutral-900 p-4 flex flex-col border-neutral-800 border mx-1">
        <header className="border-b border-neutral-600 pb-2 flex justify-between gap-10 items-center">
          <h1 className="text-lg sm:text-xl md:text-2xl">{message.subject}</h1>
          <Button
            onClick={() => onClose?.()}
            variant="ghost"
            className="w-fit self-start"
          >
            <IconX />
          </Button>
        </header>
        <div className="text-sm flex justify-between items-baseline gap-10 mt-2 text-neutral-400 mb-4">
          <p className="flex-1 text-sm">{message.from}</p>
          <p className="text-xs sm:text-sm">{formatDistanceToNow(message.created_at) + " ago"}</p>
        </div>
        <p className="mt-2 p-4 bg-neutral-800 text-justify max-w-prose">{message.content}</p>
      </article>
    </div>
  )
}
