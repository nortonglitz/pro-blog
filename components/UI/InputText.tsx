type InputTextProps = React.InputHTMLAttributes<HTMLInputElement>

export const InputText = ({ type = "text", ...props }: InputTextProps) => {
  return (
    <input
      className="
        bg-neutral-900
        border
        border-neutral-700
        px-2
        py-1
        w-full
      "
      type={type}
      {...props}
    />
  )
}
