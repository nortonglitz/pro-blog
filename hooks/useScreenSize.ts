import { useState, useEffect, useMemo } from "react"

type Screen = "sm" | "md" | "lg" | "xl" | "2xl"

const chooseScreen = (width: number): Screen => {
  if (width < 640) {
    return "sm"
  } else if (width < 768) {
    return "md"
  } else if (width < 1024) {
    return "lg"
  } else if (width < 1280) {
    return "xl"
  } else {
    return "2xl"
  }
}

export const useScreenSize = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const screen = useMemo(() => chooseScreen(width), [width])
  const isMobile = useMemo(() => width <= 768, [width])

  return { screen, width, isMobile }
}
