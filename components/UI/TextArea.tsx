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
    <div className={clsx("w-full flex flex-col", className)}>
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
      {(error || typeof charactersCount === "number") && (
        <div className="flex text-sm justify-end gap-5 mt-1">
          {error && <p className="text-red-600 flex-1">{error}</p>}
          {typeof charactersCount === "number" && (
            <p className="place-self-end text-neutral-500">{charactersCount}</p>
          )}
        </div>
      )}
    </div>
  )
}
