import { metaFormSchema, MetaFormSchema } from "@/schemas/validations"
import { updateMetaDescription } from "@/db/actions/meta-description"
import { useZodForm } from "@/hooks"
import { Button, InputText, TextArea } from "@/components/UI"
import { MetaDescription } from "@/db/types"
import { toast } from "react-hot-toast"
import { Popover } from "@/components/UI/client"
import { IconHelp } from "@tabler/icons-react"
import { useState } from "react"

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

type FormProps = {
  data: MetaDescription | null
}

export const Form = ({ data }: FormProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useZodForm({
    schema: metaFormSchema,
    options: {
      defaultValues: {
        title: data?.title || "",
        description: data?.description || ""
      }
    }
  })

  const onSubmit = async (formData: MetaFormSchema) => {
    try {
      setIsLoading(true)
      await updateMetaDescription(formData)
      toast.success("Meta description updated")
    } catch (err) {
      if (process.env.NODE_ENV === "development") {
        console.error("Error updating meta description:", err)
      }
      toast.error("Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form
      className="max-w-prose flex flex-col gap-5 w-full"
      onSubmit={handleSubmit(formData => onSubmit(formData))}
    >
      <InputText
        disabled={isLoading}
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
        disabled={isLoading}
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
        loading={isLoading}
        className="w-fit self-end"
        color="success"
        type="submit"
      >
        Save
      </Button>
    </form>
  )
}
