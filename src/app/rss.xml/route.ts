import { getAllContentDocuments } from "@/lib/content";
import { CONTENT_SITE_URL, absoluteUrl } from "@/lib/site";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const items = getAllContentDocuments()
    .map((entry) => {
      const description = escapeXml(entry.description);
      return `
  <item>
    <title>${escapeXml(entry.title)}</title>
    <link>${absoluteUrl(entry.url)}</link>
    <guid>${absoluteUrl(entry.url)}</guid>
    <pubDate>${entry.publishedDate.toUTCString()}</pubDate>
    <description>${description}</description>
  </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Internode Content</title>
    <link>${CONTENT_SITE_URL}</link>
    <description>Root-level answers, use cases, and updates from Internode.</description>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
