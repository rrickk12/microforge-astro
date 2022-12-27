import { defineConfig } from "astro/config";
// storyblok
import storyblok from "@storyblok/astro";
// vite
import { loadEnv } from "vite";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  integrations: [
    image(),
    svelte(),
    tailwind(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        blogPost: "storyblok/BlogPost",
        Product: "storyblok/Product",
        productGroup: "storyblok/ProductGroup",
      },
      apiOptions: {
        // Choose your Storyblok space region
        region: "us",
      },
    }),
  ],
});
