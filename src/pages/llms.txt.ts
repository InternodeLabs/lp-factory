import type { APIRoute } from "astro";
import {
  getAllContentEntries,
  getContentByType,
  getFeaturedContent,
  contentUrl,
} from "@/lib/content";
import type { ContentEntry } from "@/lib/content";
import { entrySlug } from "@/lib/content";
import { APP_SITE_URL, CONTENT_SITE_URL, MAIN_SITE_URL, absoluteUrl } from "@/lib/site";

function renderLinks(entries: ContentEntry[]): string {
  return entries
    .map(
      (entry) =>
        `- [${entry.data.title}](${absoluteUrl(contentUrl(entrySlug(entry)))}): ${entry.data.excerpt}`,
    )
    .join("\n");
}

export const GET: APIRoute = async () => {
  const featured = await getFeaturedContent(5);
  const answers = await getContentByType("answer");
  const useCases = await getContentByType("use-case");
  const updates = await getContentByType("update");

  const body = `# Internode Content

> Root-level answers, use cases, and updates about organizational memory, AI agents, team decisions, and persistent context.

This subdomain is intentionally minimal. Pages use simple HTML, direct headings, and link-rich markdown-derived content so humans and AI systems can retrieve specific answers without heavy interface noise.

## Core pages

- [Home](${CONTENT_SITE_URL}/): Entry point for the full content index
- [RSS feed](${CONTENT_SITE_URL}/rss.xml): Feed of the latest content updates
- [Expanded LLM context](${CONTENT_SITE_URL}/llms-full.txt): Larger context file that includes full page markdown

## Featured

${renderLinks(featured)}

## Answers

${renderLinks(answers)}

## Use cases

${renderLinks(useCases)}

## Updates

${renderLinks(updates)}

## Optional

- [Main website](${MAIN_SITE_URL}): Main product site
- [Product app](${APP_SITE_URL}): Product application
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
};
