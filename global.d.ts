import { GoogleReCaptcha } from "@/services/google-recaptcha/types"
export {}

declare global {
  interface Window {
    grecaptcha?: GoogleReCaptcha
  }
}
