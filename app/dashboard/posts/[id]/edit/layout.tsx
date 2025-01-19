export default function PostsLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="h-screen overflow-y-auto px-2 pt-20 md:pt-10 md:px-10 pb-10 flex flex-col items-center">
      <header className="border-b border-neutral-800 pb-2 w-full mb-10">
        <h1 className="text-xl font-semibold tracking-wide uppercase">Edit post</h1>
      </header>
      {children}
    </main>
  )
}
