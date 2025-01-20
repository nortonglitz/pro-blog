import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Options | Dashboard"
}

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
