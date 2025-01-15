"use client"

import { Button, InputText, TextArea } from "@/components/UI"
import { Popover } from "@/components/UI/client"
import { useZodForm } from "@/hooks/useZodForm"
import { IconHelp } from "@tabler/icons-react"
import { siteOptionsSchema } from "@/schemas/validations"

const TIPS = {
  title: "This will be shown on the tab, so don't put it too long. Stay less than 60 characters.",
  description:
    "This will help SEO. Try to explain the content of website in less than 160 characters."
}

type LabelProps = {
  title: string
  tip: string
}

const Label = ({ tip, title }: LabelProps) => (
  <div className="flex items-center gap-2 mb-1">
    <h2 className="text-lg">{title}</h2>
    <Popover text={tip}>
      <IconHelp
        className="cursor-help text-neutral-600"
        size="1.2rem"
        stroke={2}
      />
    </Popover>
  </div>
)

export default function Options() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useZodForm({
    schema: siteOptionsSchema,
    options: {
      defaultValues: {
        title: "",
        description: ""
      }
    }
  })
  return (
    <main className="h-screen overflow-y-auto px-10 py-10 flex flex-col items-center">
      <header className="border-b border-neutral-800 pb-2 w-full mb-10">
        <h1 className="text-xl font-semibold tracking-wide uppercase">Options</h1>
      </header>
      <form
        className="max-w-prose flex flex-col gap-5 w-full"
        onSubmit={handleSubmit(data => console.log(data))}
      >
        <InputText
          placeholder="My blog"
          error={errors.title?.message}
          {...register("title")}
          label={
            <Label
              title="Title"
              tip={TIPS.title}
            />
          }
        />
        <TextArea
          {...register("description")}
          label={
            <Label
              title="Meta description"
              tip={TIPS.description}
            />
          }
          charactersCount={watch("description").length}
          placeholder="Tell about what kind of content people will find out."
          rows={5}
          error={errors.description?.message}
        />
        <Button
          className="w-fit self-end"
          color="success"
          type="submit"
        >
          Save
        </Button>
      </form>
    </main>
  )
}
