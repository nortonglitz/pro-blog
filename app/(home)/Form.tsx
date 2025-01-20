"use client"

import { Button, InputText, TextArea } from "@/components"
import { useZodForm } from "@/hooks"
import { sendMessageSchema, SendMessageSchema } from "@/schemas/validations"
import { useState } from "react"
import { sendMessage } from "@/db/actions/messages"
import { IconMailCheck } from "@tabler/icons-react"

export const Form = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [messageSent, setMessageSent] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useZodForm({
    schema: sendMessageSchema
  })

  const onSubmit = async (formData: SendMessageSchema) => {
    try {
      setIsLoading(true)
      await sendMessage(formData)
      setMessageSent(true)
    } catch (err) {
      if (process.env.NODE_ENV === "development") {
        console.error("Error sending message:", err)
      }
    } finally {
      setIsLoading(false)
    }
  }

  if (messageSent) {
    return (
      <article className="flex flex-col items-center justify-center gap-5 h-96 w-[60ch] border border-emerald-500">
        <IconMailCheck
          size="10rem"
          stroke={0.5}
        />
        <p className="text-xl">Thank you for your contact</p>
      </article>
    )
  }

  return (
    <form
      className="flex flex-col w-[60ch] gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputText
        disabled={isLoading}
        type="email"
        placeholder="E-mail"
        error={errors.from?.message}
        {...register("from")}
      />
      <InputText
        disabled={isLoading}
        type="text"
        placeholder="Subject"
        error={errors.subject?.message}
        {...register("subject")}
      />
      <TextArea
        disabled={isLoading}
        rows={10}
        placeholder="Type your message"
        error={errors.content?.message}
        {...register("content")}
      />
      <Button
        loading={isLoading}
        type="submit"
        className="self-end"
      >
        Send message
      </Button>
    </form>
  )
}
