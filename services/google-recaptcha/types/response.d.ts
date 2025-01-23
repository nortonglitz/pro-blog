export type RecaptchaApiResponse = {
  /** Se foi possível ou não fazer a requisição. */
  success: boolean
  /** Data em que foi feita a requisição no formato `ISO 8601 yyyy-MM-ddTHH:mm:ssZZ`. */
  challenge_ts: string
  /** Site que foi feita a requisição, por exemplo hostname. */
  hostname: string
  /** Número entre `0 a 1`, que representa confiabilidade do visitante 0 mais provável de ser bot e 1 humano. */
  score: number
  /** Uma tag opcional atribuída no hook para poder identificar de onde foi chamado */
  action?: string
  /** Códigos de erros referentes a requisição. Aparece quando `success: false`. */
  "error-codes"?: string[]
}
