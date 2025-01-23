import { ErrorCode } from "../types"

export class RecaptchaError extends Error {
  code: ErrorCode

  constructor(code: ErrorCode, message: string) {
    super(message)
    this.name = "RecaptchaError"
    this.code = code
  }
}
