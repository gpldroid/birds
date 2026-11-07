import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  site: "https://gpldroid.github.io",
  base: "/birds",
  output: "static",
  trailingSlash: "always",
  compressHTML: true,
  vite: { plugins: [tailwindcss()] }
});