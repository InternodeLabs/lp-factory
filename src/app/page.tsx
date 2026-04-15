import type { Metadata } from "next";

import { ContentShell } from "@/components/content/ContentShell";
import { StructuredData } from "@/components/content/StructuredData";
import { TrackedContentLink } from "@/components/content/TrackedContentLink";
import {
  getAllContentDocuments,
  getAllContentTags,
  getContentByType,
  getFeaturedContent,
  getContentTypeLabel,
} from "@/lib/content";
import {
  CONTENT_SITE_URL,
  MAIN_SITE_URL,
  SITE_DESCRIPTION,
  SITE_TITLE,
  absoluteUrl,
  formatDisplayDate,
} from "@/lib/site";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
};

function ContentList({
  entries,
  trackingLocation,
}: Readonly<{
  entries: ReturnType<typeof getAllContentDocuments>;
  trackingLocation: string;
}>) {
  return (
    <ul className="space-y-6">
      {entries.map((entry) => (
        <li key={entry.slug} className="space-y-1">
          <TrackedContentLink
            href={entry.url}
            trackingLocation={trackingLocation}
            trackingLabel={entry.title}
            className="font-semibold text-zinc-950"
          >
            {entry.title}
          </TrackedContentLink>
          <p className="text-sm text-zinc-600">
            {getContentTypeLabel(entry.type)} · {formatDisplayDate(entry.publishedAt)}
          </p>
          <p className="text-zinc-800">{entry.excerpt}</p>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  const allContent = getAllContentDocuments();
  const featuredContent = getFeaturedContent(3);
  const answers = getContentByType("answer");
  const useCases = getContentByType("use-case");
  const updates = getContentByType("update");
  const tags = getAllContentTags();

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        url: CONTENT_SITE_URL,
        name: SITE_TITLE,
        description: SITE_DESCRIPTION,
      },
      {
        "@type": "Organization",
        "@id": absoluteUrl("/#organization"),
        name: "Internode",
        url: MAIN_SITE_URL,
      },
      {
        "@type": "ItemList",
        "@id": absoluteUrl("/#content-index"),
        itemListElement: allContent.map((entry, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(entry.url),
          name: entry.title,
        })),
      },
    ],
  };

  return (
    <ContentShell>
      <StructuredData value={structuredData} />

      <main className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <section className="max-w-3xl space-y-5">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
            Answers, use cases, and updates about organizational memory for teams
            and AI agents.
          </h1>
          <p className="text-lg leading-8 text-zinc-700">
            This site publishes plain-language pages on root-level URLs so people,
            search engines, and AI systems can reach the content directly.
          </p>
          <p className="leading-8 text-zinc-700">
            Start with the fundamentals, move into the workflow examples, or visit{" "}
            <TrackedContentLink
              href={MAIN_SITE_URL}
              trackingLocation="home_intro"
              trackingLabel="main site"
              trackingType="external"
            >
              internode.ai
            </TrackedContentLink>{" "}
            for the main product site.
          </p>
          <p className="text-sm text-zinc-600">
            Topics covered: {tags.join(", ")}.
          </p>
        </section>

        {featuredContent.length > 0 && (
          <section className="mt-14 border-t border-zinc-200 pt-10">
            <h2 className="text-xl font-semibold text-zinc-950">Featured</h2>
            <div className="mt-6">
              <ContentList entries={featuredContent} trackingLocation="featured" />
            </div>
          </section>
        )}

        <section className="mt-14 border-t border-zinc-200 pt-10" id="answers">
          <h2 className="text-xl font-semibold text-zinc-950">Answers</h2>
          <div className="mt-6">
            <ContentList entries={answers} trackingLocation="answers" />
          </div>
        </section>

        <section className="mt-14 border-t border-zinc-200 pt-10" id="use-cases">
          <h2 className="text-xl font-semibold text-zinc-950">Use cases</h2>
          <div className="mt-6">
            <ContentList entries={useCases} trackingLocation="use_cases" />
          </div>
        </section>

        <section className="mt-14 border-t border-zinc-200 pt-10" id="updates">
          <h2 className="text-xl font-semibold text-zinc-950">Updates</h2>
          <div className="mt-6">
            <ContentList entries={updates} trackingLocation="updates" />
          </div>
        </section>
      </main>
    </ContentShell>
  );
}
