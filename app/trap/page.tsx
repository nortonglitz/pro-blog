"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Trap() {
  const router = useRouter()

  useEffect(() => {
    // Redireciona para a mesma página após 100ms
    const timeout = setTimeout(() => {
      router.push("/trap")
    }, 100)

    return () => clearTimeout(timeout) // Limpa o timeout ao desmontar
  }, [router])

  return (
    <div>
      <h1>Hello, bot!</h1>
      <p>You are stuck in an infinite loop. 😊</p>
    </div>
  )
}
