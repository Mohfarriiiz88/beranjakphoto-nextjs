import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // opsional, aman ditambahkan
  ],
  theme: {
    extend: {
      fontFamily: {
        elegante: ["EleganteClassica", "serif"],
      },
    },
  },
  plugins: [],
}

export default config
