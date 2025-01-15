import clsx from "clsx"
import { useId } from "react"

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string
  resize?: boolean
  label?: React.ReactNode
  charactersCount?: number
  labelClassName?: string
}

const baseStyles = "border px-2 py-1 w-full bg-neutral-900 "
const standardStyles = "border-neutral-700"
const errorStyles = "border-red-600"

export const TextArea = ({
  resize = false,
  error,
  charactersCount,
  label,
  labelClassName,
  className,
  ...props
}: TextAreaProps) => {
  const id = useId()
  return (
    <div className={clsx("w-full", className)}>
      {label && (
        <label
          htmlFor={`text-area-${id}`}
          className={clsx("flex", labelClassName)}
        >
          {label}
        </label>
      )}
      <textarea
        id={`text-area-${id}`}
        className={clsx(baseStyles, error ? errorStyles : standardStyles, !resize && "resize-none")}
        {...props}
      />
      {typeof charactersCount === "number" && (
        <p className="text-right text-neutral-500 text-sm leading-none">{charactersCount}</p>
      )}
      {error && <p className="text-sm mt-0.5 text-red-600">{error}</p>}
    </div>
  )
}
