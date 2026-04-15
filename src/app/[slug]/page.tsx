import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContentShell } from "@/components/content/ContentShell";
import { StructuredData } from "@/components/content/StructuredData";
import { TrackedContentLink } from "@/components/content/TrackedContentLink";
import {
  getAllContentSlugs,
  getContentBySlug,
  getContentTypeLabel,
  getRelatedContent,
} from "@/lib/content";
import {
  MAIN_SITE_URL,
  absoluteUrl,
  formatDisplayDate,
} from "@/lib/site";

type PageProps = Readonly<{
  params: {
    slug: string;
  };
}>;

export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return getAllContentSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const document = getContentBySlug(params.slug);
  if (!document) {
    return {
      title: "Not found",
    };
  }

  const canonicalUrl = document.canonicalUrl ?? absoluteUrl(document.url);

  return {
    title: document.title,
    description: document.description,
    keywords: document.tags,
    alternates: {
      canonical: canonicalUrl,
      types: {
        "text/plain": "/llms-full.txt",
      },
    },
    openGraph: {
      type: "article",
      url: canonicalUrl,
      title: document.title,
      description: document.description,
      authors: [document.author.name],
      tags: document.tags,
      publishedTime: document.publishedDate.toISOString(),
      modifiedTime: document.updatedDate.toISOString(),
    },
    twitter: {
      card: "summary",
      title: document.title,
      description: document.description,
    },
  };
}

export default function ContentPage({ params }: PageProps) {
  const document = getContentBySlug(params.slug);
  if (!document) {
    notFound();
  }

  const relatedEntries = getRelatedContent(document);
  const articleType =
    document.type === "update" ? "Article" : "TechArticle";

  const graphEntries: Record<string, unknown>[] = [
    {
      "@type": articleType,
      "@id": absoluteUrl(`${document.url}#article`),
      headline: document.title,
      description: document.description,
      articleBody: document.markdown,
      datePublished: document.publishedDate.toISOString(),
      dateModified: document.updatedDate.toISOString(),
      articleSection: getContentTypeLabel(document.type),
      keywords: document.tags,
      wordCount: document.wordCount,
      mainEntityOfPage: absoluteUrl(document.url),
      author: {
        "@type": "Person",
        name: document.author.name,
        url: document.author.url,
      },
      publisher: {
        "@type": "Organization",
        name: "Internode",
        url: MAIN_SITE_URL,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": absoluteUrl(`${document.url}#breadcrumb`),
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: document.title,
          item: absoluteUrl(document.url),
        },
      ],
    },
  ];

  if (document.question) {
    graphEntries.push({
      "@type": "FAQPage",
      "@id": absoluteUrl(`${document.url}#faq`),
      mainEntity: [
        {
          "@type": "Question",
          name: document.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: document.excerpt,
          },
        },
      ],
    });
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": graphEntries,
  };

  return (
    <ContentShell>
      <StructuredData value={structuredData} />

      <main className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <article className="max-w-3xl">
          <header className="space-y-4 border-b border-zinc-200 pb-8">
            <p className="text-sm text-zinc-600">
              {getContentTypeLabel(document.type)} ·{" "}
              {formatDisplayDate(document.publishedAt)} · {document.readingTimeMinutes}{" "}
              min read
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
              {document.title}
            </h1>
            <p className="text-lg leading-8 text-zinc-700">{document.excerpt}</p>
            <div className="text-sm leading-7 text-zinc-600">
              <p>Author: {document.author.name}</p>
              <p>Updated: {formatDisplayDate(document.updatedAt)}</p>
              <p>Tags: {document.tags.join(", ")}</p>
            </div>
          </header>

          {document.headings.length > 1 && (
            <nav
              aria-label="On this page"
              className="mt-8 border-b border-zinc-200 pb-8 text-sm text-zinc-700"
            >
              <p className="font-medium text-zinc-950">On this page</p>
              <ul className="mt-3 space-y-2">
                {document.headings.map((heading) => (
                  <li
                    key={heading.id}
                    className={heading.depth === 3 ? "pl-4" : undefined}
                  >
                    <TrackedContentLink
                      href={`#${heading.id}`}
                      trackingLocation="table_of_contents"
                      trackingLabel={heading.text}
                    >
                      {heading.text}
                    </TrackedContentLink>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div
            className="content-rich mt-8"
            dangerouslySetInnerHTML={{ __html: document.html }}
          />

          {relatedEntries.length > 0 && (
            <section className="mt-12 border-t border-zinc-200 pt-8">
              <h2 className="text-xl font-semibold text-zinc-950">Related pages</h2>
              <ul className="mt-4 space-y-3">
                {relatedEntries.map((entry) => (
                  <li key={entry.slug}>
                    <TrackedContentLink
                      href={entry.url}
                      trackingLocation="related_pages"
                      trackingLabel={entry.title}
                      className="font-medium text-zinc-950"
                    >
                      {entry.title}
                    </TrackedContentLink>
                    <p className="mt-1 text-sm text-zinc-600">{entry.excerpt}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="mt-12 border-t border-zinc-200 pt-8">
            <h2 className="text-xl font-semibold text-zinc-950">Next step</h2>
            <p className="mt-4 leading-8 text-zinc-700">
              If this topic is relevant to your team, continue on the main site or
              explore the product directly.
            </p>
            <p className="mt-4">
              <TrackedContentLink
                href={document.ctaHref}
                trackingLocation="content_cta"
                trackingLabel={document.ctaLabel}
                trackingType="cta"
                className="font-semibold text-zinc-950"
              >
                {document.ctaLabel}
              </TrackedContentLink>
            </p>
          </section>
        </article>
      </main>

      <div hidden>
        <article>
          <h1>{document.title}</h1>
          <p>{document.description}</p>
          <div dangerouslySetInnerHTML={{ __html: document.html }} />
        </article>
      </div>
    </ContentShell>
  );
}
