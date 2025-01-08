type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ className, children, ...props }: ButtonProps) => (
  <button
    className={`
      transition
      duration-300
      border-2
      px-4
      py-2
      border-emerald-500

      hover:bg-emerald-500
      hover:text-black

      ${className}
    `}
    {...props}
  >
    {children}
  </button>
)
