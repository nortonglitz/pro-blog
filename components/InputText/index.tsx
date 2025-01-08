type InputTextProps = React.InputHTMLAttributes<HTMLInputElement>

export const InputText = ({ className, ...props }: InputTextProps) => (
  <input
    className={`
      bg-neutral-900
      border
      border-neutral-800
      px-2
      py-1
      focus:outline
      focus:outline-emerald-500
      ${className}
    `}
    {...props}
  />
)
