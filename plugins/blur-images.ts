import { resolve } from "node:path";
import sharp from "sharp";
import type { Plugin } from "vite";

// Import a public image with ?blur to get its dimensions and an inline preview.
export function blurImages(): Plugin {
  const prefix = "\0blur-image:";
  let publicDir: string;

  return {
    name: "blur-images",
    enforce: "pre",
    configResolved(config) {
      publicDir = config.publicDir;
    },
    resolveId(source) {
      if (/^\/images\/[^?]+\?blur$/.test(source)) {
        return prefix + source.slice(0, -"?blur".length);
      }
    },
    async load(id) {
      if (!id.startsWith(prefix)) return;

      const src = id.slice(prefix.length);
      const file = resolve(publicDir, `.${src}`);
      this.addWatchFile(file);

      const image = sharp(file);
      const { width, height } = await image.metadata();
      if (!width || !height) throw new Error(`Missing dimensions for ${src}`);

      const preview = await image
        .resize({ width: 16, height: 16, fit: "inside", withoutEnlargement: true })
        .webp({ quality: 30 })
        .toBuffer();

      return `export default ${JSON.stringify({
        src,
        width,
        height,
        placeholder: `data:image/webp;base64,${preview.toString("base64")}`,
      })};`;
    },
  };
}
