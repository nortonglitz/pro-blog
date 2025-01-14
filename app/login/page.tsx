"use client"

import { Button, InputText } from "@/components/UI"
import { IconDashboard } from "@tabler/icons-react"

export default function Login() {
  return (
    <main className="flex justify-center items-center h-screen bg-gradient-to-tl from-neutral-900 via-neutral-950 to-black">
      <form className="space-y-4 w-72 flex flex-col mb-32">
        <header>
          <figure className="pb-2 flex flex-col items-center">
            <IconDashboard
              size="5rem"
              stroke={1}
            />
            <figcaption className="text-center">
              <h1 className="text-3xl font-semibold tracking-wider font-azeret-mono">Dashboard</h1>
              <p className="text-neutral-500">Here you can edit all your website</p>
            </figcaption>
          </figure>
        </header>
        <InputText placeholder="Username" />
        <InputText
          type="password"
          placeholder="Password"
        />
        <Button>Submit</Button>
      </form>
    </main>
  )
}
