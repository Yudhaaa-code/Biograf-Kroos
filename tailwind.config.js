/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-deep)",
        foreground: "var(--text-bone)",
        muted: "var(--bg-surface)",
        "muted-foreground": "var(--text-caption)",
        border: "var(--line-hairline)",
      }
    },
  },
  plugins: [],
}
