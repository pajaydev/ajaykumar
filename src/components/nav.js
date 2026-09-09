"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const items = [
  { href: "/", label: "Projects" },
  { href: "/blog/", label: "Writing" },
  { href: "/about/", label: "About" },
]

export default function Nav() {
  const pathname = usePathname()
  return (
    <nav className="nav">
      {items.map(({ href, label }) => {
        const active =
          href === "/" ? pathname === "/" : pathname.startsWith(href)
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
