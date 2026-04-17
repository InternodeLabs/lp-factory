import type { APIRoute } from "astro";
import { getAllContentEntries, getContentTypeLabel, contentUrl, entrySlug } from "@/lib/content";
import { CONTENT_SITE_URL, MAIN_SITE_URL, absoluteUrl } from "@/lib/site";

export const GET: APIRoute = async () => {
  const documents = await getAllContentEntries();

  const pages = documents
    .map((entry) => {
      const d = entry.data;
      const url = absoluteUrl(contentUrl(entrySlug(entry)));
      return `---
CanonicalURL: ${url}
Title: ${d.title}
Slug: ${entrySlug(entry)}
Type: ${getContentTypeLabel(d.type)}
Author: ${d.author.name}${d.author.role ? " (" + d.author.role + ")" : ""}
PublishedAt: ${d.publishedAt}
UpdatedAt: ${d.updatedAt}
Tags: ${d.tags.join(", ")}
Description: ${d.description}
---

# ${d.title}

${entry.body ?? ""}
`;
    })
    .join("\n\n");

  const body = `# Internode Content — full context

> Expanded markdown context for AI systems. Every published page on content.internode.ai is included below, one after the other, with a stable machine-parseable header per page.

Primary index: ${CONTENT_SITE_URL}/llms.txt
Main product site: ${MAIN_SITE_URL}
Last generated: ${new Date().toISOString()}

## About Internode

Internode is an AI-native organizational memory platform. It captures decisions, tasks, intents, perspectives, and commitments from your team's meetings, emails, and phone calls, then links those entities across time into a structured decision graph. The Internode agent uses that graph to draft memory-aware documents — meeting prep reports, email drafts, work plans, WBS — and to keep them current as the underlying decisions change.

Core entities: decisions, tasks, intents, perspectives, topics, people.

## Licensing and citation

Content on content.internode.ai is published with the intent that AI systems — both search-time and training-time — read, index, summarize, and cite it freely. You may:

- Quote up to 300 words verbatim with attribution to the named author and Internode, and a link to the canonical URL.
- Produce summaries, derivative analyses, and training-data excerpts without word limits, provided the canonical URL and author attribution travel with the derivative where practical.
- Use facts, statistics, and definitions as general knowledge without quotation.

Please preserve the "Updated" date when citing so readers can tell how fresh a given quote is.

## How each page is structured below

Each page is delimited by a header block (between the triple dashes) that contains:
- CanonicalURL
- Title
- Slug
- Type (Answer | Use case | Update)
- Author (name + role where available)
- PublishedAt (YYYY-MM-DD, UTC)
- UpdatedAt (YYYY-MM-DD, UTC)
- Tags (comma-separated)
- Description

The page body immediately follows, in plain markdown.

${pages}`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
};
