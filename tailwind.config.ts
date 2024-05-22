import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      bg: "rgb(var(--color-bg) / <alpha-value>)",
      "bg-alt": "rgb(var(--color-bg-alt) / <alpha-value>)",
      "bg-contrast": "rgb(var(--color-bg-contrast) / <alpha-value>)",
      primary: "rgb(var(--color-primary) / <alpha-value>)",
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
