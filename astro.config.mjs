// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  image: {
    service: passthroughImageService(),
  },
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
