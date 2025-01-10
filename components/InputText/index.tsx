import { IconProps } from "@tabler/icons-react"

type InputTextProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.FC<IconProps>
}

export const InputText = ({ className, type = "text", icon: Icon, ...props }: InputTextProps) => (
  <div className="relative w-full [&:focus-within_svg]:text-emerald-500">
    <input
      className={`
        ${Icon ? "pr-10" : ""}
        w-full
        bg-neutral-900
        border
        border-neutral-800
        px-2
        py-1
        focus:outline
        focus:outline-emerald-500
        ${className}
      `}
      type={type}
      {...props}
    />
    {Icon && (
      <div className="flex items-center absolute top-0 bottom-0 right-0 px-2 cursor-pointer">
        <Icon
          stroke={1}
          className="text-neutral-600"
        />
      </div>
    )}
  </div>
)
