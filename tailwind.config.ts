import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      bg: "var(--color-bg)",
      "bg-alt": "var(--color-bg-alt)",
      "bg-contrast": "var(--color-bg-contrast)",
      primary: "var(--color-primary)",
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
