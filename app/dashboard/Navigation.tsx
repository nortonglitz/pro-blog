"use client"

import clsx from "clsx"

import { usePathname } from "next/navigation"
import { IconId, IconSettings, IconMessage, IconBook, IconDashboard } from "@tabler/icons-react"
import Link from "next/link"
import { MenuMobile } from "./MenuMobile"

export const LINKS = [
  { label: "Personal info", href: "/dashboard/personal-info", icon: IconId },
  { label: "Posts", href: "/dashboard/posts", icon: IconBook },
  { label: "Messages", href: "/dashboard/messages", icon: IconMessage },
  { label: "Options", href: "/dashboard/options", icon: IconSettings }
]

export const Navigation = () => {
  const pathname = usePathname()

  return (
    <>
      <MenuMobile />
      <aside className="hidden md:flex flex-col h-screen py-10 bg-neutral-900">
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
        <ul>
          {LINKS.map(({ href, label, icon: Icon }) => (
            <li key={`${label}-link`}>
              <Link
                href={href}
                className={clsx(
                  pathname.includes(href) ? "bg-neutral-950" : "hover:bg-neutral-800",
                  "cursor-pointer flex items-center gap-5 h-full pl-5 py-4 text-lg"
                )}
              >
                <Icon stroke={1.5} />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}
