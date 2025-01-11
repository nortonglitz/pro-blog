type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`
        transition-all
        bg-white
        text-black
        px-2
        py-1

        hover:bg-neutral-200
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}
