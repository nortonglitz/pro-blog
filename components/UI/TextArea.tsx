type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  onEnter?: () => void
}

export const TextArea = ({ onEnter, onKeyDown: onKeyDownExternal, ...props }: TextAreaProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && onEnter) {
      e.preventDefault()
      onEnter()
    }
    onKeyDownExternal?.(e)
  }

  return (
    <textarea
      className="
        bg-neutral-900
        border
        border-neutral-700
        px-2
        py-1
        w-full
        resize-none
      "
      onKeyDown={handleKeyDown}
      {...props}
    />
  )
}
