type InputTextProps = React.InputHTMLAttributes<HTMLInputElement> & {
  onEnter?: () => void
}

export const InputText = ({
  type = "text",
  className,
  onEnter,
  onKeyDown: onKeyDownExternal,
  ...props
}: InputTextProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onEnter) {
      e.preventDefault()
      onEnter()
    }
    onKeyDownExternal?.(e)
  }

  return (
    <input
      onKeyDown={handleKeyDown}
      className={`
        bg-neutral-900
        border
        border-neutral-700
        px-2
        py-1
        w-full
        ${className}
      `}
      type={type}
      {...props}
    />
  )
}
