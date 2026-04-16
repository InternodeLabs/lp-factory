import type { APIRoute } from "astro";
import { getAllContentEntries, getContentTypeLabel, contentUrl, entrySlug } from "@/lib/content";
import { CONTENT_SITE_URL, MAIN_SITE_URL, absoluteUrl } from "@/lib/site";

export const GET: APIRoute = async () => {
  const documents = await getAllContentEntries();

  const pages = documents
    .map(
      (entry) => {
        const d = entry.data;
        return `## ${d.title}

URL: ${absoluteUrl(contentUrl(entrySlug(entry)))}
Type: ${getContentTypeLabel(d.type)}
Published: ${d.publishedAt}
Updated: ${d.updatedAt}
Tags: ${d.tags.join(", ")}
Description: ${d.description}

${entry.body ?? ""}
`;
      },
    )
    .join("\n");

  const body = `# Internode Content Full Context

> Expanded markdown context for AI systems that want the key Internode content in a single plain-text file.

Primary index: ${CONTENT_SITE_URL}/llms.txt
Main product site: ${MAIN_SITE_URL}

${pages}`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
};
