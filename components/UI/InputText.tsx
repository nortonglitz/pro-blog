import clsx from "clsx"
import { useId } from "react"

type InputTextProps = React.InputHTMLAttributes<HTMLInputElement> & {
  onEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  error?: string
  label?: React.ReactNode
  labelClassName?: string
}

const baseStyles = "border px-2 py-1 w-full border bg-neutral-900"
const standardStyles = "border-neutral-700"
const errorStyles = "border-red-600"

export const InputText = ({
  type = "text",
  error,
  className,
  labelClassName,
  label,
  onEnter,
  onKeyDown: onKeyDownExternal,
  ...props
}: InputTextProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onEnter) {
      onEnter(e)
    }
    onKeyDownExternal?.(e)
  }

  const id = useId()

  return (
    <div className={clsx("w-full", className)}>
      {label && (
        <label
          htmlFor={`input-text-${id}`}
          className={clsx("flex", labelClassName)}
        >
          {label}
        </label>
      )}
      <input
        id={`input-text-${id}`}
        onKeyDown={handleKeyDown}
        className={clsx(baseStyles, error ? errorStyles : standardStyles)}
        type={type}
        {...props}
      />

      {error && <p className="text-sm mt-0.5 text-red-600">{error}</p>}
    </div>
  )
}
