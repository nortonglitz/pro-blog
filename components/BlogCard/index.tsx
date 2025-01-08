import Image from "next/image"

type BlogCardProps = {
  content: string
  imgUrl: string
  title: string
}

export const BlogCard = ({ content, imgUrl, title }: BlogCardProps) => (
  <article
    className="
      h-full
      bg-neutral-900
      cursor-pointer
      hover:outline
      hover:outline-4
      hover:outline-emerald-500
      [&:hover_img]:scale-110
    "
  >
    <figure className="h-96 relative overflow-hidden">
      <Image
        className="object-cover transition duration-300"
        src={imgUrl}
        fill
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
