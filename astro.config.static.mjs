import { defineConfig } from "astro/config";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  outDir: "./__static-build",
  integrations: [image()],
});
