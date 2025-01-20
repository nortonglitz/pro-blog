import clsx from "clsx"

type SpinnerProps = {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
  className?: string
}

const sizes = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-10 h-10",
  xl: "w-16 h-16",
  "2xl": "w-24 h-24",
  "3xl": "w-32 h-32"
}

export const Spinner = ({ size = "md", className }: SpinnerProps) => {
  return (
    <div className={clsx("relative w-fit h-fit", className)}>
      <div className={clsx(sizes[size], "border-2 rounded-full border-white/80")} />
      <div
        className="
          absolute 
          border-2
          rounded-full
          border-t-transparent
          border-b-transparent
          border-l-transparent
          animate-spin
          border-black/80
          inset-0
        "
      />
    </div>
  )
}
