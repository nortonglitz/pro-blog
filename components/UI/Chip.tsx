import { TablerIcon } from "@tabler/icons-react"
import React from "react"

type ChipProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  textClassName?: string
  as?: "button" | "span"

  leftIcon?: TablerIcon
  leftIconClassName?: string
  leftIconAs?: "button" | "span"
  onLeftIconClick?: () => void

  rightIcon?: TablerIcon
  rightIconClassName?: string
  rightIconAs?: "button" | "span"
  onRightIconClick?: () => void
}

export const Chip = ({
  as,
  rightIcon: RightIcon,
  rightIconClassName,
  rightIconAs = "span",
  onRightIconClick,
  leftIcon: LeftIcon,
  leftIconClassName,
  leftIconAs = "span",
  onLeftIconClick,
  textClassName,
  className,
  children,
  ...props
}: ChipProps) => {
  const buttonClassName = "cursor-pointer hover:bg-neutral-800"

  return React.createElement(as === "button" ? "button" : "span", {
    className: `
          flex
          items-center
          border
          border-neutral-700
          ${as === "button" ? buttonClassName : ""}
          ${RightIcon ? "" : "pr-2"}
          ${LeftIcon ? "" : "pl-2"}
          ${className}`,
    children: (
      <>
        {LeftIcon &&
          React.createElement(leftIconAs === "button" ? "button" : "span", {
            onClick: onLeftIconClick,
            className: `
              flex
              items-center
              px-2
              h-full
              mr-1
              ${leftIconAs === "button" ? buttonClassName : ""}
              ${leftIconClassName}
            `,
            children: <LeftIcon size="1rem" />
          })}
        <span className={`py-1 ${textClassName}`}>{children}</span>
        {RightIcon &&
          React.createElement(rightIconAs === "button" ? "button" : "span", {
            onClick: onRightIconClick,
            className: `
              flex
              items-center
              px-2
              h-full
              ml-1
              ${rightIconAs === "button" ? buttonClassName : ""}
              ${rightIconClassName}
            `,
            children: <RightIcon size="1rem" />
          })}
      </>
    ),
    ...props
  })
}
