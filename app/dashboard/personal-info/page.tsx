"use client"

import { Popover } from "@/components/UI/client"
import { Button, TextArea, Chip, InputText } from "@/components/UI"
import { IconPlus, IconHelp, IconX } from "@tabler/icons-react"
import { getSiteNameFromURL } from "@/libs/url"
import { useZodForm } from "@/hooks/useZodForm"
import { personalInfoSchema } from "@/schemas/validations"
import { useState } from "react"

const HELPERS = {
  name: "This will be used to create your logo. Avoid using long names to prevent disrupting the layout.",
  job: "You can put more than one. This will be used on top of your name on home page.",
  socials:
    "You can select up to 3 medias. This will be shown on sidebar and mobile menu. Just copy and paste the URLs.",
  about:
    "This will be shown on home page as a description of you. Describe yourself between 450 and 550 characters."
}

const HeaderFieldset = ({ title, text }: { title: string; text: string }) => (
  <header className="flex gap-2 items-center mb-1">
    <h2 className="text-lg">{title}</h2>
    <Popover text={text}>
      <IconHelp
        className="cursor-help text-neutral-600"
        size="1.2rem"
        stroke={2}
      />
    </Popover>
  </header>
)

export default function PersonalInfo() {
  const {
    register,
    handleSubmit,
    validateField,
    watch,
    formState: { errors },
    setValue
  } = useZodForm({
    schema: personalInfoSchema,
    options: {
      defaultValues: {
        firstName: "Norton",
        lastName: "Glitz",
        jobs: [],
        socialMedias: {},
        about: ""
      }
    }
  })

  const jobs = watch("jobs")
  const socialMedias = watch("socialMedias")

  const [newJob, setNewJob] = useState("")
  const [newURL, setNewURL] = useState("")

  return (
    <main className="h-screen overflow-y-auto px-10 py-10 flex flex-col items-center">
      <header className="border-b border-neutral-800 pb-2 w-full mb-10">
        <h1 className="text-xl font-semibold tracking-wide uppercase">Personal Information</h1>
      </header>
      <form
        className="flex flex-col max-w-prose gap-10 w-full"
        onSubmit={handleSubmit(data => console.log(data))}
      >
        {/* Name */}
        <fieldset>
          <HeaderFieldset
            title="Name"
            text={HELPERS.name}
          />
          <div className="flex gap-5">
            <InputText
              placeholder="John"
              {...register("firstName")}
              error={errors.firstName?.message}
            />
            <InputText
              placeholder="Schmitt"
              {...register("lastName")}
              error={errors.lastName?.message}
            />
          </div>
        </fieldset>

        {/* Job */}
        <fieldset>
          <HeaderFieldset
            title="Job"
            text={HELPERS.job}
          />
          <div className="flex w-full gap-2 items-start">
            <InputText
              name="newJob"
              placeholder="Photographer"
              value={newJob}
              onChange={e => setNewJob(e.target.value)}
              onEnter={e => {
                e.preventDefault()
                if (validateField("jobs", [...jobs, newJob])) {
                  if (jobs.includes(newJob)) return
                  setValue("jobs", [...jobs, newJob])
                  setNewJob("")
                }
              }}
              error={errors.jobs?.message}
            />
            <Button
              className="w-fit h-8"
              onClick={() => {
                if (validateField("jobs", [...jobs, newJob])) {
                  if (jobs.includes(newJob)) return
                  setValue("jobs", [...jobs, newJob])
                  setNewJob("")
                }
              }}
            >
              <IconPlus size="1.2rem" />
            </Button>
          </div>
          <div className="flex gap-5 mt-2">
            {jobs.map((job, i) => (
              <Chip
                key={`job-${i}`}
                as="button"
                rightIcon={IconX}
                textClassName="capitalize"
                title={job}
                onClick={() => {
                  const newJobs = jobs.filter((j: string) => j !== job)
                  if (validateField("jobs", newJobs)) {
                    setValue("jobs", newJobs)
                  }
                }}
              >
                {job}
              </Chip>
            ))}
          </div>
        </fieldset>

        {/* Social Medias */}
        <fieldset>
          <HeaderFieldset
            title="Social medias"
            text={HELPERS.socials}
          />
          <div className="flex w-full gap-2 items-start">
            <InputText
              name="newURL"
              placeholder="https://www.linkedin.com/in/username/"
              value={newURL}
              onChange={e => setNewURL(e.target.value)}
              onEnter={e => {
                e.preventDefault()
                if (!validateField("newURL", newURL)) return
                const name = getSiteNameFromURL(newURL)
                if (!name) return
                const newSocialMedias = { ...socialMedias, [name]: newURL }
                if (validateField("socialMedias", newSocialMedias)) {
                  setValue("socialMedias", newSocialMedias)
                  setNewURL("")
                }
              }}
              error={
                errors.socialMedias
                  ? Object.entries(errors.socialMedias)
                      .map(([key, value]) => {
                        if (key === "message") {
                          return value
                        }
                      })
                      .filter(Boolean)
                      .join(", ") || errors.newURL?.message
                  : errors.newURL?.message
              }
            />
            <Button
              className="w-fit h-8"
              onClick={() => {
                if (!validateField("newURL", newURL)) return
                const name = getSiteNameFromURL(newURL)
                if (!name) return
                const newSocialMedias = { ...socialMedias, [name]: newURL }
                if (validateField("socialMedias", newSocialMedias)) {
                  setValue("socialMedias", newSocialMedias)
                  setNewURL("")
                }
              }}
            >
              <IconPlus size="1.2rem" />
            </Button>
          </div>
          <div className="flex gap-5 mt-2">
            {Object.entries(socialMedias).map(([name, url]) => (
              <Chip
                key={name}
                as="button"
                rightIcon={IconX}
                textClassName="capitalize"
                title={url}
                onClick={() => {
                  const { [name]: _, ...newSocialMedias } = socialMedias
                  if (validateField("socialMedias", newSocialMedias)) {
                    setValue("socialMedias", newSocialMedias)
                  }
                }}
              >
                {name}
              </Chip>
            ))}
          </div>
        </fieldset>

        {/* About */}
        <fieldset>
          <HeaderFieldset
            title="About"
            text={HELPERS.about}
          />
          <div className="flex flex-col w-full gap-2">
            <TextArea
              rows={10}
              placeholder="Type about yourself here"
              {...register("about")}
              error={errors.about?.message}
              charactersCount={watch("about").length}
            />
          </div>
        </fieldset>

        {/* Submit */}
        <Button
          type="submit"
          color="success"
          className="w-fit self-end"
        >
          Save
        </Button>
      </form>
    </main>
  )
}
