export function MessagesListSkeleton() {
  return (
    <div className="w-full flex flex-col">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="flex gap-4 items-center py-4 px-2 md:px-4 flex-wrap relative bg-neutral-900 animate-pulse border-b border-neutral-800"
        >
          <div className="h-6 w-6 bg-neutral-700"></div>
          <div className="flex flex-wrap flex-1 justify-between gap-2">
            <div className="h-4 bg-neutral-700 w-1/2"></div>
            <div className="h-4 bg-neutral-700 w-1/3"></div>
          </div>
          <div className="h-3 bg-neutral-700 w-20 absolute lg:static right-2 bottom-1"></div>
        </div>
      ))}
    </div>
  )
}
