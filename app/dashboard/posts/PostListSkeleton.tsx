export const PostListSkeleton = () => (
  <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 w-full gap-5">
    {Array.from({ length: 10 }).map((_, i) => (
      <article
        key={`post-placeholder-${i}`}
        className="transition flex h-96 xl:h-48 border border-neutral-800 group relative flex-wrap xl:flex-nowrap animate-pulse"
      >
        {/* Skeleton for Image */}
        <figure className="relative w-full h-48 xl:w-52 flex-shrink-0 bg-neutral-800">
          <div className="w-full h-full bg-neutral-800"></div>
        </figure>

        {/* Skeleton for Content Section */}
        <section className="px-5 py-2 flex flex-col justify-between w-full">
          {/* Header Skeleton */}
          <div>
            <header className="flex justify-between gap-5 mb-2">
              {/* Skeleton Title */}
              <div className="h-5 w-2/3 bg-neutral-800"></div>

              {/* Skeleton Buttons */}
              <menu className="flex flex-nowrap gap-5 invisible md:group-hover:visible">
                <div className="h-8 w-8 bg-neutral-800"></div>
                <div className="h-8 w-8 bg-neutral-800"></div>
              </menu>
            </header>

            {/* Skeleton Text */}
            <div className="space-y-2">
              <div className="h-4 w-full bg-neutral-800"></div>
              <div className="h-4 w-full bg-neutral-800"></div>
              <div className="h-4 w-3/4 bg-neutral-800"></div>
            </div>
          </div>

          {/* Footer Skeleton */}
          <footer className="self-end">
            <div className="h-4 w-20 bg-neutral-800"></div>
          </footer>
        </section>
      </article>
    ))}
  </section>
)
