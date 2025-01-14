import clsx from "clsx"
import { Spinner } from "./Spinner"

const baseStyles = "transition-all active:scale-95"
const disabledStyles = "disabled:opacity-50 disabled:cursor-not-allowed"

const styles = {
  standard: {
    primary: "bg-white text-black hover:bg-neutral-300",
    error: "bg-red-500 text-black hover:bg-red-700",
    warning: "bg-yellow-400 text-black hover:bg-yellow-600",
    success: "bg-green-400 text-black hover:bg-green-600",
    info: "bg-cyan-500 text-black hover:bg-cyan-600"
  },
  outline: {
    primary: "border border-white hover:bg-white/20",
    error: "border border-red-500 hover:bg-red-500/20",
    warning: "border border-yellow-400 hover:bg-yellow-400/20",
    success: "border border-green-400 hover:bg-green-400/20",
    info: "border border-cyan-500 hover:bg-cyan-500/20"
  },
  ghost: {
    primary: "hover:bg-white/10",
    error: "text-red-500 hover:bg-red-500/10",
    warning: "text-yellow-400 hover:bg-yellow-400/10",
    success: "text-green-400 hover:bg-green-400/10",
    info: "text-cyan-500 hover:bg-cyan-500/10"
  }
}

const sizeStyles = {
  small: "px-1 text-sm",
  medium: "px-2 py-1 text-base",
  large: "px-3 py-2 text-lg"
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "standard" | "outline" | "ghost"
  color?: "primary" | "error" | "warning" | "success" | "info"
  size?: "small" | "medium" | "large"
  loading?: boolean
}

export const Button = ({
  children,
  loading = false,
  type = "button",
  disabled,
  size = "medium",
  variant = "standard",
  color = "primary",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      aria-busy={loading ? "true" : undefined}
      aria-disabled={disabled || loading ? "true" : undefined}
      className={clsx(sizeStyles[size], styles[variant][color], disabledStyles, className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className={clsx("flex items-center", loading && children && "gap-4")}>
          <Spinner />
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  )
}
