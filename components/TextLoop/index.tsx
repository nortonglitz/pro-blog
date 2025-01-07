"use client"

import React, { useState, useEffect } from "react"

interface TextLoopProps {
  delayMs?: number
  texts: string[]
}

export const TextLoop = ({ texts, delayMs = 3000 }: TextLoopProps) => {
  const [index, setIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false) // Inicia a transição de opacidade para ocultar
      setTimeout(() => {
        setIndex(prevIndex => (prevIndex + 1) % texts.length) // Troca o texto
        setIsVisible(true) // Volta a mostrar o texto
      }, 500) // Deve ser igual ao `duration-500` em Tailwind
    }, delayMs)

    return () => clearInterval(interval)
  }, [texts.length, delayMs])

  return (
    <span
      className={`${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      } transition-opacity duration-500 ease-in-out`}
    >
      {texts[index]}
    </span>
  )
}
