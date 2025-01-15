"use client"

import {
  IconBook,
  IconId,
  IconMessage,
  IconSettings,
  IconDashboard,
  IconMenu2,
  IconX
} from "@tabler/icons-react"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export const LINKS = [
  { label: "Personal info", href: "/dashboard/personal-info", icon: IconId },
  { label: "Posts", href: "/dashboard/posts", icon: IconBook },
  { label: "Messages", href: "/dashboard/messages", icon: IconMessage },
  { label: "Options", href: "/dashboard/options", icon: IconSettings }
]

export const MenuMobile = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <header className="md:hidden px-5 sm:px-10 fixed top-0 right-0 left-0 h-16 drop-shadow z-20 bg-neutral-950 flex items-center justify-between">
        <Link href="/dashboard">
          <div className="flex items-center gap-2">
            <IconDashboard size="2rem" />
            <span className="text-xl font-azeret-mono">Dashboard</span>
          </div>
        </Link>
        <button onClick={() => setIsOpen(true)}>
          <IconMenu2
            size="2rem"
            stroke="1px"
          />
        </button>
      </header>
      <section
        className={clsx(
          "fixed z-30 inset-0 md:hidden bg-neutral-900/90 backdrop-blur flex-col items-center py-10",
          isOpen ? "flex" : "hidden"
        )}
      >
        <button
          className="absolute top-0 right-0 mr-5 mt-5"
          onClick={() => setIsOpen(false)}
        >
          <IconX size="2rem" />
        </button>
        <header>
          <div className="flex flex-col gap-2 items-center">
            <IconDashboard
              size="4rem"
              stroke={1}
            />
            <span className="text-2xl font-azeret-mono tracking-wider">Dashboard</span>
          </div>
        </header>
        <nav className="mt-10 w-full">
          <ul>
            {LINKS.map(({ href, icon: Icon, label }, i) => (
              <li
                key={`nav-item-${i}`}
                onClick={() => setIsOpen(false)}
              >
                <Link
                  href={href}
                  className={clsx(
                    "flex gap-2 items-center text-xl w-full py-5 pl-20",
                    pathname.includes(href) && "bg-neutral-950"
                  )}
                >
                  <Icon stroke={1} />
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </>
  )
}
