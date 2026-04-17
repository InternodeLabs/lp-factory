import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

// Build a slug->lastmod map from the answers content collection at sitemap-serialize time.
// Frontmatter is parsed with a minimal regex rather than gray-matter to avoid pulling
// the content collection API outside of the Astro runtime.
async function loadContentDates() {
  const dir = "src/content/answers";
  const slugDates = new Map();
  try {
    const files = await readdir(dir);
    for (const file of files) {
      if (!file.endsWith(".md")) continue;
      const slug = file.replace(/\.md$/, "");
      const raw = await readFile(join(dir, file), "utf8");
      const match = raw.match(/^---\n([\s\S]*?)\n---/);
      if (!match) continue;
      const fm = match[1];
      const updated = fm.match(/^updatedAt:\s*"?([0-9]{4}-[0-9]{2}-[0-9]{2})"?/m);
      const published = fm.match(/^publishedAt:\s*"?([0-9]{4}-[0-9]{2}-[0-9]{2})"?/m);
      const date = updated?.[1] ?? published?.[1];
      if (date) slugDates.set(slug, date);
    }
  } catch {
    /* swallow — sitemap will just lack lastmod */
  }
  return slugDates;
}

const contentDatesPromise = loadContentDates();

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
      changefreq: "weekly",
      priority: 0.7,
      serialize: async (item) => {
        const slugDates = await contentDatesPromise;
        const url = new URL(item.url);
        const pathname = url.pathname.replace(/\/$/, "");
        const slug = pathname.startsWith("/") ? pathname.slice(1) : pathname;

        if (slug === "" || slug === "/") {
          let latest = undefined;
          for (const d of slugDates.values()) {
            if (!latest || d > latest) latest = d;
          }
          return {
            ...item,
            priority: 1.0,
            changefreq: "daily",
            lastmod: latest ? new Date(`${latest}T00:00:00Z`).toISOString() : new Date().toISOString(),
          };
        }

        if (slug.startsWith("topics/")) {
          return { ...item, priority: 0.6, changefreq: "weekly" };
        }

        const date = slugDates.get(slug);
        if (date) {
          return {
            ...item,
            lastmod: new Date(`${date}T00:00:00Z`).toISOString(),
            priority: 0.8,
            changefreq: "monthly",
          };
        }

        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: ["remark-gfm"],
  },
});
