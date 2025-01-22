"use client"

import { Button, InputText } from "@/components/UI"
import { IconDashboard } from "@tabler/icons-react"
import { useZodForm } from "@/hooks"
import { loginFormSchema, LoginFormSchema } from "@/schemas/validations"
import { login } from "@/auth/actions/login"
import { useState } from "react"
import toast from "react-hot-toast"

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useZodForm({ schema: loginFormSchema })

  const onSubmit = async (formData: LoginFormSchema) => {
    setIsLoading(true)
    const isValid = await login(formData)
    if (!isValid) {
      toast.error("Invalid credentials")
    }
    setIsLoading(false)
  }

  return (
    <main className="flex flex-col gap-10 justify-center items-center h-screen">
      <header>
        <figure className="pb-2 flex flex-col items-center">
          <IconDashboard
            size="5rem"
            stroke={1}
          />
          <figcaption className="text-center">
            <h1 className="text-3xl font-semibold tracking-wider font-azeret-mono">Dashboard</h1>
            <p className="text-neutral-500">Edit your professional blog</p>
          </figcaption>
        </figure>
      </header>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="gap-4 flex flex-col mb-32 max-w-72 w-full"
      >
        <InputText
          disabled={isLoading}
          placeholder="Username"
          {...register("username")}
          error={errors.username?.message}
        />
        <InputText
          disabled={isLoading}
          type="password"
          placeholder="Password"
          {...register("password")}
          error={errors.password?.message}
        />
        <Button
          loading={isLoading}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </main>
  )
}
