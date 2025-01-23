declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test"
    NEONDB_URL: string
    ACCESS_TOKEN_SECRET: string
    REFRESH_TOKEN_SECRET: string
    NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY: string
    GOOGLE_RECAPTCHA_SECRET_KEY: string
  }
}
