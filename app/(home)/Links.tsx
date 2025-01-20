"use client"

import { LINKS } from "@/content"
import clsx from "clsx"
import Link from "next/link"
import { useState } from "react"

const linksId = LINKS.map(title => title.replace(" ", "-").toLocaleLowerCase())

export const Links = () => {
  const [activeLink, setActiveLink] = useState(linksId[0])
  return (
    <nav>
      <ul>
        {LINKS.map((title, i) => (
          <li
            key={`nav-item-${i}`}
            onClick={() => setActiveLink(linksId[i])}
            className={clsx(
              "transition text-center border-b border-b-neutral-800 border-r-2 pointer-events-none last:border-b-0",
              activeLink === linksId[i]
                ? "border-r-emerald-500 bg-white/10 font-semibold"
                : "border-r-transparent"
            )}
          >
            <Link
              className="transition w-full h-full block py-3 pointer-events-auto hover:scale-110"
              href={`/#${linksId[i]}`}
              key={`side-nav-${i}`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
