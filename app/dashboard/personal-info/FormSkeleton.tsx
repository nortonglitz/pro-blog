export const FormSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-col gap-10 w-full md:max-w-prose">
      {/* Name */}
      <fieldset>
        <div className="flex gap-2 items-center mb-1">
          <div className="h-6 w-32 bg-neutral-800"></div>
        </div>
        <div className="flex gap-5 flex-wrap md:flex-nowrap">
          <div className="h-10 w-full bg-neutral-800"></div>
          <div className="h-10 w-full bg-neutral-800"></div>
        </div>
      </fieldset>

      {/* Job */}
      <fieldset>
        <div className="flex gap-2 items-center mb-1">
          <div className="h-6 w-32 bg-neutral-800"></div>
        </div>
        <div className="flex w-full gap-2 items-start">
          <div className="h-10 w-full bg-neutral-800"></div>
          <div className="h-10 w-10 bg-neutral-800"></div>
        </div>
        <div className="flex gap-2 mt-2">
          <div className="h-8 w-20 bg-neutral-800"></div>
          <div className="h-8 w-20 bg-neutral-800"></div>
        </div>
      </fieldset>

      {/* Social Medias */}
      <fieldset>
        <div className="flex gap-2 items-center mb-1">
          <div className="h-6 w-32 bg-neutral-800"></div>
        </div>
        <div className="flex w-full gap-2 items-start">
          <div className="h-10 w-full bg-neutral-800"></div>
          <div className="h-10 w-10 bg-neutral-800"></div>
        </div>
        <div className="flex gap-2 mt-2">
          <div className="h-8 w-20 bg-neutral-800"></div>
          <div className="h-8 w-20 bg-neutral-800"></div>
          <div className="h-8 w-20 bg-neutral-800"></div>
        </div>
      </fieldset>

      {/* About */}
      <fieldset>
        <div className="flex gap-2 items-center mb-1">
          <div className="h-6 w-32 bg-neutral-800"></div>
        </div>
        <div className="h-32 w-full bg-neutral-800"></div>
      </fieldset>

      {/* Submit Button */}
      <div className="w-fit self-end">
        <div className="h-10 w-32 bg-neutral-800"></div>
      </div>
    </div>
  )
}
