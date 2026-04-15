import { getAllContentDocuments, getContentTypeLabel } from "@/lib/content";
import { CONTENT_SITE_URL, MAIN_SITE_URL, absoluteUrl } from "@/lib/site";

export function GET() {
  const documents = getAllContentDocuments();

  const pages = documents
    .map(
      (entry) => `## ${entry.title}

URL: ${absoluteUrl(entry.url)}
Type: ${getContentTypeLabel(entry.type)}
Published: ${entry.publishedAt}
Updated: ${entry.updatedAt}
Tags: ${entry.tags.join(", ")}
Description: ${entry.description}

${entry.markdown}
`,
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
}
