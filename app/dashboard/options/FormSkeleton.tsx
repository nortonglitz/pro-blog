export const FormSkeleton = () => (
  <div className="max-w-prose flex flex-col gap-5 w-full animate-pulse">
    {/* Skeleton para o campo de título */}
    <div className="flex flex-col gap-2">
      <div className="h-5 w-24 bg-neutral-800" />
      <div className="h-10 w-full bg-neutral-800" />
    </div>

    {/* Skeleton para o campo de descrição */}
    <div className="flex flex-col gap-2">
      <div className="h-5 w-36 bg-neutral-800" />
      <div className="h-28 w-full bg-neutral-800" />
    </div>

    {/* Skeleton para o botão */}
    <div className="self-end">
      <div className="h-10 w-20 bg-neutral-800" />
    </div>
  </div>
)
