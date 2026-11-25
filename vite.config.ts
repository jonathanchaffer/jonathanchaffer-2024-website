import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { blurImages } from "./plugins/blur-images";

export default defineConfig({
  plugins: [blurImages(), reactRouter(), tsconfigPaths()],
});
