import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://content.internode.ai",
  output: "static",
  adapter: vercel(),
  trailingSlash: "never",
  prefetch: true,
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes("/lp/"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: ["remark-gfm"],
  },
});
