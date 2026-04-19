import {
  CONTENT_SITE_URL,
  DEFAULT_OG_IMAGE,
  LOGO_RASTER_PATH,
  MAIN_SITE_URL,
  SITE_BRAND,
  SITE_DESCRIPTION,
  SITE_TITLE,
  absoluteUrl,
} from "./site";
import { FOUNDERS, authorSameAs, type AuthorProfile } from "./authors";

export interface JsonLdGraph {
  "@context": "https://schema.org";
  "@graph": Record<string, unknown>[];
}

const ORGANIZATION_ID = absoluteUrl("/#organization");
const WEBSITE_ID = absoluteUrl("/#website");

export function buildWebSiteSchema(): Record<string, unknown> {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: CONTENT_SITE_URL,
    name: SITE_BRAND,
    alternateName: "Internode Content Hub",
    description: SITE_DESCRIPTION,
    inLanguage: "en",
    publisher: { "@id": ORGANIZATION_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${CONTENT_SITE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

function personSchema(author: AuthorProfile): Record<string, unknown> {
  return {
    "@type": "Person",
    "@id": `${CONTENT_SITE_URL}/about#${author.id}`,
    name: author.name,
    jobTitle: author.role,
    url: author.url,
    sameAs: authorSameAs(author),
    worksFor: { "@id": ORGANIZATION_ID },
    description: author.bio,
  };
}

export function buildOrganizationSchema(): Record<string, unknown> {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Internode",
    legalName: "Internode AI",
    url: MAIN_SITE_URL,
    description:
      "Internode is an AI-native organizational memory platform that captures decisions, tasks, and context from your team's meetings, emails, and calls, then drafts documents that stay current as those decisions change.",
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(LOGO_RASTER_PATH),
      width: 512,
      height: 512,
    },
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    sameAs: [
      "https://www.linkedin.com/company/internode-ai",
      "https://x.com/internode_ai",
      "https://www.producthunt.com/products/internode",
      "https://www.crunchbase.com/organization/internode-6739",
      "https://github.com/internode-ai",
    ],
    founder: FOUNDERS.map(personSchema),
    knowsAbout: [
      "organizational memory",
      "decision memory",
      "institutional knowledge",
      "meeting intelligence",
      "AI agents",
      "knowledge management",
      "memory-aware drafting",
    ],
  };
}

export function buildSoftwareApplicationSchema(): Record<string, unknown> {
  return {
    "@type": "SoftwareApplication",
    "@id": absoluteUrl("/#software"),
    name: "Internode",
    url: MAIN_SITE_URL,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, macOS, Windows",
    description:
      "Internode is organizational memory for teams and AI agents. It captures decisions, tasks, and context from meetings, emails, and calls; links them across time; and drafts memory-aware documents that stay current as those decisions change.",
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    publisher: { "@id": ORGANIZATION_ID },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${MAIN_SITE_URL}/pricing`,
    },
    featureList: [
      "Decision memory across meetings, emails, and calls",
      "Automatic task creation from conversation",
      "Memory-aware document drafting",
      "Meeting prep report generation",
      "Work plans and WBS from team knowledge",
      "Policy-grounded document drafts",
      "Auto-updating documents when decisions change",
    ],
  };
}

export function buildWebPageSchema(opts: {
  url: string;
  name: string;
  description: string;
  dateModified?: string;
  image?: string;
}): Record<string, unknown> {
  const base: Record<string, unknown> = {
    "@type": "WebPage",
    "@id": `${opts.url}#webpage`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": WEBSITE_ID },
    inLanguage: "en",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "article > header p", "main p:first-of-type"],
    },
  };
  if (opts.dateModified) {
    base.dateModified = new Date(`${opts.dateModified}T00:00:00Z`).toISOString();
  }
  if (opts.image) {
    base.primaryImageOfPage = {
      "@type": "ImageObject",
      url: opts.image,
    };
  }
  return base;
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
  author: AuthorProfile | { name: string; url?: string; linkedin?: string; role?: string };
  image?: string;
  imageAlt?: string;
  type?: "Article" | "TechArticle";
}): Record<string, unknown> {
  const imageUrl = opts.image ?? absoluteUrl(DEFAULT_OG_IMAGE);

  const isProfile = (x: unknown): x is AuthorProfile =>
    typeof x === "object" && x !== null && "id" in (x as Record<string, unknown>);

  const authorJson: Record<string, unknown> = isProfile(opts.author)
    ? {
        "@type": "Person",
        "@id": `${CONTENT_SITE_URL}/about#${opts.author.id}`,
        name: opts.author.name,
        jobTitle: opts.author.role,
        url: opts.author.url,
        sameAs: authorSameAs(opts.author),
        worksFor: { "@id": ORGANIZATION_ID },
      }
    : {
        "@type": "Person",
        name: opts.author.name,
        ...(opts.author.role ? { jobTitle: opts.author.role } : {}),
        ...(opts.author.url ? { url: opts.author.url } : {}),
        ...(opts.author.linkedin ? { sameAs: [opts.author.linkedin] } : {}),
        worksFor: { "@id": ORGANIZATION_ID },
      };

  return {
    "@type": opts.type ?? "TechArticle",
    "@id": `${opts.url}#article`,
    headline: opts.headline,
    description: opts.description,
    articleBody: opts.body,
    datePublished: new Date(`${opts.published}T00:00:00Z`).toISOString(),
    dateModified: new Date(`${opts.modified}T00:00:00Z`).toISOString(),
    articleSection: opts.section,
    keywords: opts.tags.join(", "),
    wordCount: opts.wordCount,
    inLanguage: "en",
    creativeWorkStatus: "Published",
    mainEntityOfPage: opts.url,
    isPartOf: { "@id": WEBSITE_ID },
    image: [
      {
        "@type": "ImageObject",
        url: imageUrl,
        ...(opts.imageAlt ? { caption: opts.imageAlt } : {}),
      },
    ],
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["article h1", "article > header p"],
    },
    author: authorJson,
    publisher: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "Internode",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(LOGO_RASTER_PATH),
        width: 512,
        height: 512,
      },
    },
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

export function buildItemListSchema(opts: {
  id: string;
  name: string;
  items: { url: string; name: string; description?: string }[];
}): Record<string, unknown> {
  return {
    "@type": "ItemList",
    "@id": opts.id,
    name: opts.name,
    itemListElement: opts.items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: item.url,
      name: item.name,
      ...(item.description ? { description: item.description } : {}),
    })),
  };
}

export function buildCollectionPageSchema(opts: {
  url: string;
  name: string;
  description: string;
  dateModified?: string;
}): Record<string, unknown> {
  return {
    "@type": "CollectionPage",
    "@id": `${opts.url}#collection`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": WEBSITE_ID },
    inLanguage: "en",
    ...(opts.dateModified
      ? { dateModified: new Date(`${opts.dateModified}T00:00:00Z`).toISOString() }
      : {}),
  };
}

export function buildAboutPageSchema(opts: {
  url: string;
  name: string;
  description: string;
}): Record<string, unknown> {
  return {
    "@type": "AboutPage",
    "@id": `${opts.url}#about`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    about: { "@id": ORGANIZATION_ID },
    isPartOf: { "@id": WEBSITE_ID },
    inLanguage: "en",
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

export { SITE_TITLE };
