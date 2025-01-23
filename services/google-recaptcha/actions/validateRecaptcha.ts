"use server"

import { RecaptchaError } from "../error"
import { redirect } from "next/navigation"
import { RecaptchaApiResponse } from "../types"

const SECRET_KEY = process.env.GOOGLE_RECAPTCHA_SECRET_KEY

export const validateRecaptcha = async (token: string) => {
  try {
    if (!token) {
      throw new RecaptchaError("TOKEN_NOT_FOUND", "No token was provided")
    }

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${SECRET_KEY}&response=${token}`
    })

    if (!response) {
      throw new RecaptchaError("SERVER_ERROR", "Could not reach api")
    }

    const data: RecaptchaApiResponse = await response.json()

    if (!data.success) {
      throw new RecaptchaError(
        "SERVER_ERROR",
        `Invalid call to api, api errors: ${data["error-codes"]}`
      )
    }

    const score = data.score

    if (score < 0.5) {
      throw new RecaptchaError("LOW_SCORE", "Visitor may be a bot")
    }

    return data.score
  } catch (err) {
    if (err instanceof RecaptchaError) {
      if (err.code === "LOW_SCORE") {
        redirect("/trap")
      }
      console.error(`reCAPTCHA validation error (${err.code}): ${err.message}`)
      throw err
    } else {
      console.error("Unexpected error during reCAPTCHA validation:", err)
      throw new RecaptchaError("SERVER_ERROR", "Unexpected error during reCAPTCHA validation")
    }
  }
}
