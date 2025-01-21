import { TablerIcon } from "@tabler/icons-react"
import React from "react"
import clsx from "clsx"

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

const chipStyles = "flex items-center border border-neutral-700"
const disabledStyles = "disabled:cursor-not-allowed disabled:opacity-50"
const buttonStyles = "cursor-pointer hover:bg-neutral-800"
const iconStyles = "flex items-center px-2 h-full"

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
  return React.createElement(
    as === "button" ? "button" : "span",
    {
      type: as === "button" ? "button" : undefined,
      className: clsx(
        chipStyles,
        as === "button" && [buttonStyles, disabledStyles],
        RightIcon && "pl-2",
        LeftIcon && "pr-2",
        className
      ),
      ...props
    },
    <>
      {LeftIcon &&
        React.createElement(
          leftIconAs === "button" ? "button" : "span",
          {
            onClick: onLeftIconClick,
            className: clsx(
              iconStyles,
              "mr-1",
              leftIconAs === "button" && [buttonStyles, disabledStyles],
              leftIconClassName
            )
          },
          <LeftIcon size="1rem" />
        )}
      <span className={clsx("py-1", textClassName)}>{children}</span>
      {RightIcon &&
        React.createElement(
          rightIconAs === "button" ? "button" : "span",
          {
            onClick: onRightIconClick,
            className: clsx(
              iconStyles,
              "ml-1",
              rightIconAs === "button" && [buttonStyles, disabledStyles],
              rightIconClassName
            )
          },
          <RightIcon size="1rem" />
        )}
    </>
  )
}
