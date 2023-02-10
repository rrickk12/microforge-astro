import { defineConfig } from "astro/config";
// storyblok
import storyblok from "@storyblok/astro";
// vite
import { loadEnv } from "vite";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config


// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), image(), storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      blogPost: "storyblok/BlogPost",
      Product: "storyblok/Product",
      productGroup: "storyblok/ProductGroup"
    },
    apiOptions: {
      // Choose your Storyblok space region
      region: "us"
    }
  }), sitemap()]
});