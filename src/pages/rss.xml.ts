import type { APIRoute } from "astro";
import { getAllContentEntries, contentUrl, entrySlug } from "@/lib/content";
import { CONTENT_SITE_URL, absoluteUrl } from "@/lib/site";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const GET: APIRoute = async () => {
  const entries = await getAllContentEntries();

  const items = entries
    .map((entry) => {
      const d = entry.data;
      const url = absoluteUrl(contentUrl(entrySlug(entry)));
      const categories = d.tags
        .map((tag) => `    <category>${escapeXml(tag)}</category>`)
        .join("\n");
      return `  <item>
    <title>${escapeXml(d.title)}</title>
    <link>${url}</link>
    <guid>${url}</guid>
    <pubDate>${new Date(`${d.publishedAt}T00:00:00Z`).toUTCString()}</pubDate>
    <description>${escapeXml(d.description)}</description>
    <dc:creator>${escapeXml(d.author.name)}</dc:creator>
${categories}
  </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
>
  <channel>
    <title>Internode Content</title>
    <link>${CONTENT_SITE_URL}</link>
    <description>Root-level answers, use cases, and updates from Internode.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${absoluteUrl("/rss.xml")}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
};
