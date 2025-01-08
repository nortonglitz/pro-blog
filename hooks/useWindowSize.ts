import { useState, useEffect } from "react"

type Screen = "sm" | "md" | "lg" | "xl" | "2xl"

const chooseScreen = (width: number) => {
  if (width <= 640) {
    return "sm"
  } else if (width <= 768) {
    return "md"
  } else if (width <= 1024) {
    return "lg"
  } else if (width <= 1280) {
    return "xl"
  } else {
    return "2xl"
  }
}

export const useScreenSize = () => {
  const [screen, setScreen] = useState<Screen>(chooseScreen(window.innerWidth))

  useEffect(() => {
    const handleResize = () => {
      setScreen(chooseScreen(window.innerWidth))
    }
    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return screen
}
