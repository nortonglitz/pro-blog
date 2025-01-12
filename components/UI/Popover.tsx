import React, { useState, useRef, useEffect } from "react"

type PopoverProps = {
  text: string // Texto a ser exibido no popover
  children: React.ReactNode // Elemento em que o popover será exibido
}

export const Popover = ({ text, children }: PopoverProps) => {
  const [visible, setVisible] = useState(false)
  const [direction, setDirection] = useState<"top" | "bottom" | "left" | "right">("top")
  const [offset, setOffset] = useState({ x: 0, y: 0 }) // Ajustes dinâmicos
  const popoverRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const adjustPosition = () => {
      if (visible) {
        const popover = popoverRef.current
        const trigger = triggerRef.current

        if (popover && trigger) {
          const triggerRect = trigger.getBoundingClientRect()
          const popoverRect = popover.getBoundingClientRect()

          // Determina a direção com base no espaço disponível
          let newDirection: "top" | "bottom" | "left" | "right" = "top"
          if (triggerRect.top > popoverRect.height) {
            newDirection = "top"
          } else if (window.innerHeight - triggerRect.bottom > popoverRect.height) {
            newDirection = "bottom"
          } else if (triggerRect.left > popoverRect.width) {
            newDirection = "left"
          } else {
            newDirection = "right"
          }
          setDirection(newDirection)

          // Ajusta deslocamentos para centralizar o popover
          const newOffset = { x: 0, y: 0 }
          if (newDirection === "top" || newDirection === "bottom") {
            newOffset.x = (triggerRect.width - popoverRect.width) / 2 // Centraliza horizontalmente
          } else if (newDirection === "left" || newDirection === "right") {
            newOffset.y = (triggerRect.height - popoverRect.height) / 2 // Centraliza verticalmente
          }

          setOffset(newOffset)
        }
      }
    }

    adjustPosition()
    window.addEventListener("resize", adjustPosition)
    return () => window.removeEventListener("resize", adjustPosition)
  }, [visible])

  const handleMouseEnter = () => setVisible(true)
  const handleMouseLeave = () => setVisible(false)
  const handleTouchStart = () => setVisible(!visible)

  return (
    <div
      ref={triggerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      className="relative inline-block"
    >
      {children}
      {visible && (
        <div
          ref={popoverRef}
          className={`absolute z-10 px-2 py-1 text-black bg-white w-48 md:w-60 text-justify text-sm`}
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px)`,
            ...(direction === "top"
              ? { bottom: "100%", marginBottom: "8px" }
              : direction === "bottom"
                ? { top: "100%", marginTop: "8px" }
                : direction === "left"
                  ? { right: "100%", marginRight: "8px" }
                  : { left: "100%", marginLeft: "8px" })
          }}
        >
          {text}
        </div>
      )}
    </div>
  )
}
