import { CONTENT_SITE_URL, MAIN_SITE_URL, absoluteUrl } from "./site";

export interface JsonLdGraph {
  "@context": "https://schema.org";
  "@graph": Record<string, unknown>[];
}

export function buildWebSiteSchema(): Record<string, unknown> {
  return {
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: CONTENT_SITE_URL,
    name: "Internode Content",
    description:
      "Root-level answers, use cases, and updates about organizational memory, AI agents, decision history, and team context.",
    publisher: { "@id": absoluteUrl("/#organization") },
  };
}

export function buildOrganizationSchema(): Record<string, unknown> {
  return {
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: "Internode",
    url: MAIN_SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/favicon.svg"),
    },
  };
}

export function buildWebPageSchema(opts: {
  url: string;
  name: string;
  description: string;
}): Record<string, unknown> {
  return {
    "@type": "WebPage",
    "@id": `${opts.url}#webpage`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": absoluteUrl("/#website") },
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[],
): Record<string, unknown> {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildArticleSchema(opts: {
  url: string;
  headline: string;
  description: string;
  body: string;
  published: string;
  modified: string;
  section: string;
  tags: string[];
  wordCount: number;
  authorName: string;
  authorUrl?: string;
  type?: "Article" | "TechArticle";
}): Record<string, unknown> {
  return {
    "@type": opts.type ?? "TechArticle",
    "@id": `${opts.url}#article`,
    headline: opts.headline,
    description: opts.description,
    articleBody: opts.body,
    datePublished: new Date(`${opts.published}T00:00:00Z`).toISOString(),
    dateModified: new Date(`${opts.modified}T00:00:00Z`).toISOString(),
    articleSection: opts.section,
    keywords: opts.tags,
    wordCount: opts.wordCount,
    mainEntityOfPage: opts.url,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["article h1", "article > header p"],
    },
    author: {
      "@type": "Person",
      name: opts.authorName,
      ...(opts.authorUrl ? { url: opts.authorUrl } : {}),
    },
    publisher: { "@id": absoluteUrl("/#organization") },
  };
}

export function buildFaqSchema(
  items: { question: string; answer: string }[],
): Record<string, unknown> {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildHowToSchema(opts: {
  name: string;
  steps: { name: string; text: string; image?: string }[];
}): Record<string, unknown> {
  return {
    "@type": "HowTo",
    name: opts.name,
    step: opts.steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
      ...(step.image ? { image: step.image } : {}),
    })),
  };
}

export function buildVideoSchema(opts: {
  name: string;
  description: string;
  thumbnailUrl: string;
  videoId: string;
}): Record<string, unknown> {
  return {
    "@type": "VideoObject",
    name: opts.name,
    description: opts.description,
    thumbnailUrl: opts.thumbnailUrl,
    embedUrl: `https://www.youtube.com/embed/${opts.videoId}`,
    uploadDate: new Date().toISOString().slice(0, 10),
  };
}

export function wrapGraph(
  ...items: Record<string, unknown>[]
): string {
  const graph: JsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": items,
  };
  return JSON.stringify(graph);
}
