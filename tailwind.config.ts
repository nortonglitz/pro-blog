import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)"
      },
      fontFamily: {
        jura: ["var(--font-jura)", "sans-serif"],
        "azeret-mono": ["var(--font-azeret-mono)", "mono"]
      }
    }
  },
  plugins: []
} satisfies Config
