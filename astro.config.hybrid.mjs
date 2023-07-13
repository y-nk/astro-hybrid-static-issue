import { defineConfig } from "astro/config";
import image from "@astrojs/image";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  outDir: "./__hybrid-build",
  integrations: [image()],
  output: "hybrid",
  adapter: node({
    mode: "standalone",
  }),
});
