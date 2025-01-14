"use client"

import clsx from "clsx"

import { usePathname } from "next/navigation"
import { useId } from "react"
import { IconId, IconSettings, IconMessage, IconBook, IconDashboard } from "@tabler/icons-react"

const LINKS = [
  { label: "Personal info", href: "/dashboard/personal-info", icon: IconId },
  { label: "Posts", href: "/dashboard/posts", icon: IconBook },
  { label: "Options", href: "/dashboard/options", icon: IconSettings },
  { label: "Messages", href: "/dashboard/messages", icon: IconMessage }
]

export const Navigation = () => {
  const pathname = usePathname()

  return (
    <aside className="h-screen py-10 bg-neutral-900">
      <header className="mb-10">
        <h1 className="font-azeret-mono tracking-wider flex justify-center text-xl">
          <IconDashboard
            className="mr-2"
            size="1.8rem"
            stroke={1.5}
          />
          <span className="w-fit">Dashboard</span>
        </h1>
      </header>
      <ul
        className="
          text-lg

          [&_li]:py-4
          [&_li]:pl-5
        "
      >
        {LINKS.map(({ href, label, icon: Icon }) => (
          <li
            key={`${label}-${useId()}`}
            className={clsx(
              href === pathname ? "bg-neutral-950" : "hover:bg-neutral-800",
              "cursor-pointer flex items-center gap-5"
            )}
          >
            <Icon stroke={1.5} />
            {label}
          </li>
        ))}
      </ul>
    </aside>
  )
}
