import { useEffect, useState } from "react"

const SITE_KEY = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY

export const useRecaptcha = (action: string) => {
  const [token, setToken] = useState<string | undefined>(undefined)
  const [error, setError] = useState<string | undefined>(undefined)

  useEffect(() => {
    const loadRecaptchaScript = () => {
      if (document.querySelector("#recaptcha-script")) return

      const script = document.createElement("script")
      script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`
      script.id = "recaptcha-script"
      script.async = true
      document.body.append(script)
    }

    loadRecaptchaScript()
  }, [])

  const executeRecaptcha = async () => {
    try {
      const grecaptcha = window.grecaptcha
      if (!grecaptcha) {
        setError("reCAPTCHA not loaded")
        return
      }

      const recaptchaToken = await grecaptcha.execute(SITE_KEY, {
        action: action
      })
      setToken(recaptchaToken)
      return recaptchaToken
    } catch (err) {
      setError("Failed to execute reCAPTCHA")
      if (process.env.NODE_ENV === "development") {
        console.error(err)
      }
    }
  }

  return { token, executeRecaptcha, error }
}
