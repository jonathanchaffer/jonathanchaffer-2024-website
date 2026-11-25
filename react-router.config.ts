import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";

export default {
  ssr: true,
  // Keep a single server bundle for local `npm start`.
  presets: process.env.VERCEL === "1" ? [vercelPreset()] : [],
} satisfies Config;
