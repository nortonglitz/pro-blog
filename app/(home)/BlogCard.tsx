type BlogCardProps = {
  content: string
  imgUrl: string
  title: string
  className?: string
}

export const BlogCard = ({ content, imgUrl, title, className = "h-96" }: BlogCardProps) => (
  <article
    className={`
      bg-neutral-900
      cursor-pointer
      hover:outline
      hover:outline-4
      hover:outline-emerald-500
      [&:hover_img]:scale-110
      ${className}
    `}
  >
    <figure className="relative overflow-hidden h-full">
      <img
        className="object-cover transition duration-300 h-full w-full"
        src={imgUrl}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        alt="title image"
      />
      <figcaption className="p-4 absolute bottom-0 left-0 right-0 bg-neutral-950/85">
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="text-nowrap text-ellipsis overflow-hidden text-neutral-100">{content}</p>
      </figcaption>
    </figure>
  </article>
)
