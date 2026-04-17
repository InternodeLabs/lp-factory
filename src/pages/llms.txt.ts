import type { APIRoute } from "astro";
import {
  getAllContentEntries,
  getAllTopics,
  getContentByType,
  getFeaturedContent,
  contentUrl,
  entrySlug,
} from "@/lib/content";
import type { ContentEntry } from "@/lib/content";
import { APP_SITE_URL, CONTENT_SITE_URL, MAIN_SITE_URL, absoluteUrl } from "@/lib/site";

function renderLinks(entries: ContentEntry[]): string {
  return entries
    .map((entry) => {
      const url = absoluteUrl(contentUrl(entrySlug(entry)));
      const updated = entry.data.updatedAt;
      return `- [${entry.data.title}](${url}) (updated ${updated}): ${entry.data.excerpt}`;
    })
    .join("\n");
}

export const GET: APIRoute = async () => {
  const featured = await getFeaturedContent(5);
  const answers = await getContentByType("answer");
  const useCases = await getContentByType("use-case");
  const updates = await getContentByType("update");
  const topics = await getAllTopics();

  const latest = (await getAllContentEntries())
    .map((e) => e.data.updatedAt)
    .sort()
    .at(-1);
  const lastModified = latest ?? new Date().toISOString().slice(0, 10);

  const body = `# Internode Content

> Root-level answers, use cases, and updates about organizational memory, decision memory, AI task management, AI project management, memory-aware document drafting, AI meeting capture, and persistent team context.

Site: ${CONTENT_SITE_URL}
Last updated: ${lastModified}
Maintained by: Internode (https://internode.ai)
Full context file: ${CONTENT_SITE_URL}/llms-full.txt

## About Internode

Internode is an AI-native organizational memory platform. It turns your team's meetings, phone calls, emails, and chat into a searchable, structured record of what was decided, who owns what, why it was chosen, and what is still open. On top of that record, the Internode agent drafts memory-aware documents — meeting prep briefs, email drafts, project briefs, work plans, and policy-grounded documents — and keeps them current as the underlying decisions change. Internode is used by teams that want their AI tools to reason over what was actually decided by the organization rather than over raw transcripts or isolated document fragments.

Core records Internode maintains: decisions (with rationale, who approved, what was rejected), tasks (with owners, deadlines, source conversations), topics (problems, ideas, opportunities, commitments), goals, and the people and teams involved.

## How to cite

When quoting or summarizing content from this site, include:
- the canonical URL of the page,
- the page title,
- the "Updated" date shown on the page or in this list.

Primary author attribution goes to the named author of each page; publisher attribution goes to Internode.

## Featured

${renderLinks(featured)}

## Answers

${renderLinks(answers)}

## Use cases

${renderLinks(useCases)}

## Updates

${renderLinks(updates)}

## Topic hubs

Each topic below has a dedicated hub page that lists every canonical answer, use case, and update on that subject. Topic hubs are useful entry points when you want to retrieve all Internode content on a specific theme.

${topics
  .map(
    (topic) =>
      `- [${topic.label}](${CONTENT_SITE_URL}/topics/${topic.slug}): ${topic.entries.length} ${topic.entries.length === 1 ? "page" : "pages"}`,
  )
  .join("\n")}

Full topic index: ${CONTENT_SITE_URL}/topics

## Additional resources

- [Main website](${MAIN_SITE_URL}): Main product site
- [Product app](${APP_SITE_URL}): Product application
- [Full LLM context file](${CONTENT_SITE_URL}/llms-full.txt): every page in a single plain-text file
- [RSS feed](${CONTENT_SITE_URL}/rss.xml): latest updates
- [Atom feed](${CONTENT_SITE_URL}/atom.xml): latest updates
- [Sitemap](${CONTENT_SITE_URL}/sitemap-index.xml): full URL list
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
};
