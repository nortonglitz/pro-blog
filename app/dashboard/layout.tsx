import { Navigation } from "./Navigation"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Pro Blog editor"
}

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="md:grid md:grid-cols-[14rem_1fr]">
      <Navigation />
      {children}
    </div>
  )
}
