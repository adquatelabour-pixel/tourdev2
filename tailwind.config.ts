import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Assam-inspired palette
        tea: { DEFAULT: "#1B7A5A", dark: "#0F5138", light: "#2E9B74" },
        river: { DEFAULT: "#1E6091", light: "#2A9DB5" },
        sunset: { DEFAULT: "#E8A93D", light: "#F4C430" },
        cream: "#FAF7F0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        premium: "0 10px 40px -10px rgba(15, 81, 56, 0.25)",
        card: "0 4px 24px -6px rgba(30, 96, 145, 0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: { "fade-up": "fade-up 0.6s ease-out forwards" },
    },
  },
  plugins: [],
};
export default config;
