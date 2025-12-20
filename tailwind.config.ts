import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class", "string"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  plugins: [
    require("tailwindcss-animate"),
  ],
}

export default config