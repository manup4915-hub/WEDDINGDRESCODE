import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        rosewash: "#fbe8ed",
        ivory: "#fffaf2",
        champagne: "#d5b46a",
        blush: "#eeb7c3",
        sage: "#9ead8d",
        ink: "#312424",
        espresso: "#5d4435"
      },
      boxShadow: {
        romantic: "0 24px 70px rgba(88, 54, 54, 0.14)",
        card: "0 18px 45px rgba(84, 58, 51, 0.12)"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
