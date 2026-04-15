import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { cache } from "react";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { z } from "zod";

export const RESERVED_CONTENT_SLUGS = new Set([
  "lp",
  "robots.txt",
  "sitemap.xml",
  "rss.xml",
  "llms.txt",
  "llms-full.txt",
  "favicon.ico",
  "icon",
  "apple-icon",
  "manifest.webmanifest",
  "site.webmanifest",
  "opengraph-image",
  "twitter-image",
]);

const CONTENT_DIRECTORY = path.join(process.cwd(), "content", "answers");
const CONTENT_TYPE_VALUES = ["answer", "use-case", "update"] as const;

const isoDateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
const normalizedIsoDateSchema = z.preprocess((value) => {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  return value;
}, isoDateSchema);
const contentSlugSchema = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);

const contentAuthorSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1).optional(),
  url: z.string().url().optional(),
});

const contentFrontmatterSchema = z.object({
  title: z.string().min(1),
  slug: contentSlugSchema,
  description: z.string().min(1),
  excerpt: z.string().min(1),
  type: z.enum(CONTENT_TYPE_VALUES),
  publishedAt: normalizedIsoDateSchema,
  updatedAt: normalizedIsoDateSchema,
  author: contentAuthorSchema,
  tags: z.array(z.string().min(1)).min(1),
  featured: z.boolean().default(false),
  question: z.string().min(1).optional(),
  canonicalUrl: z.string().url().optional(),
  ctaHref: z.string().url(),
  ctaLabel: z.string().min(1),
  relatedSlugs: z.array(contentSlugSchema).default([]),
});

export type ContentType = (typeof CONTENT_TYPE_VALUES)[number];
export type ContentFrontmatter = z.infer<typeof contentFrontmatterSchema>;

export type ContentHeading = {
  id: string;
  text: string;
  depth: number;
};

export type ContentDocument = ContentFrontmatter & {
  html: string;
  markdown: string;
  headings: ContentHeading[];
  url: string;
  publishedDate: Date;
  updatedDate: Date;
  wordCount: number;
  readingTimeMinutes: number;
};

type HeadingNode = {
  depth?: number;
  data?: {
    hProperties?: Record<string, string>;
  };
  children?: unknown[];
  value?: unknown;
};

function getNodeText(node: unknown): string {
  if (!node || typeof node !== "object") {
    return "";
  }

  const textNode = node as {
    value?: unknown;
    children?: unknown[];
  };

  if (typeof textNode.value === "string") {
    return textNode.value;
  }

  if (!Array.isArray(textNode.children)) {
    return "";
  }

  return textNode.children.map((child) => getNodeText(child)).join("");
}

function slugifyText(value: string): string {
  const base = value
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return base || "section";
}

function countWords(markdown: string): number {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/[#>*_\-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

function renderMarkdown(markdown: string): {
  html: string;
  headings: ContentHeading[];
} {
  const headings: ContentHeading[] = [];
  const seenHeadingIds = new Map<string, number>();

  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(function collectHeadings() {
      return (tree) => {
        visit(tree, "heading", (node: HeadingNode) => {
          const text = getNodeText(node).trim();
          if (!text) {
            return;
          }

          const slugBase = slugifyText(text);
          const nextCount = (seenHeadingIds.get(slugBase) ?? 0) + 1;
          seenHeadingIds.set(slugBase, nextCount);

          const id = nextCount === 1 ? slugBase : `${slugBase}-${nextCount}`;

          node.data ??= {};
          const data = node.data;
          data.hProperties = {
            ...(data.hProperties ?? {}),
            id,
          };

          headings.push({
            id,
            text,
            depth: typeof node.depth === "number" ? node.depth : 2,
          });
        });
      };
    })
    .use(remarkRehype)
    .use(rehypeStringify);

  const html = processor.processSync(markdown).toString();

  return {
    html,
    headings: headings.filter((heading) => heading.depth >= 2 && heading.depth <= 3),
  };
}

function getTypeSortOrder(type: ContentType): number {
  switch (type) {
    case "answer":
      return 0;
    case "use-case":
      return 1;
    case "update":
      return 2;
  }
}

function parseContentFile(fileName: string): ContentDocument {
  const absolutePath = path.join(CONTENT_DIRECTORY, fileName);
  const source = fs.readFileSync(absolutePath, "utf8");
  const parsed = matter(source);
  const frontmatter = contentFrontmatterSchema.parse(parsed.data);

  const expectedSlug = fileName.replace(/\.md$/, "");
  if (frontmatter.slug !== expectedSlug) {
    throw new Error(
      `Content slug mismatch in ${fileName}: expected "${expectedSlug}" but found "${frontmatter.slug}".`,
    );
  }

  if (RESERVED_CONTENT_SLUGS.has(frontmatter.slug)) {
    throw new Error(
      `Content slug "${frontmatter.slug}" is reserved and cannot be used.`,
    );
  }

  const markdown = parsed.content.trim();
  const { html, headings } = renderMarkdown(markdown);
  const wordCount = countWords(markdown);

  return {
    ...frontmatter,
    html,
    markdown,
    headings,
    url: `/${frontmatter.slug}`,
    publishedDate: new Date(`${frontmatter.publishedAt}T00:00:00Z`),
    updatedDate: new Date(`${frontmatter.updatedAt}T00:00:00Z`),
    wordCount,
    readingTimeMinutes: Math.max(1, Math.round(wordCount / 220)),
  };
}

const getAllContentDocumentsCached = cache((): ContentDocument[] => {
  const entries = fs
    .readdirSync(CONTENT_DIRECTORY, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => parseContentFile(entry.name));

  return entries.sort((left, right) => {
    const dateDelta =
      right.publishedDate.getTime() - left.publishedDate.getTime();

    if (dateDelta !== 0) {
      return dateDelta;
    }

    const typeDelta = getTypeSortOrder(left.type) - getTypeSortOrder(right.type);
    if (typeDelta !== 0) {
      return typeDelta;
    }

    return left.title.localeCompare(right.title);
  });
});

export function getContentTypeLabel(type: ContentType): string {
  switch (type) {
    case "answer":
      return "Answer";
    case "use-case":
      return "Use case";
    case "update":
      return "Update";
  }
}

export function isReservedContentSlug(slug: string): boolean {
  return RESERVED_CONTENT_SLUGS.has(slug);
}

export function getAllContentDocuments(): ContentDocument[] {
  return getAllContentDocumentsCached();
}

export function getAllContentSlugs(): string[] {
  return getAllContentDocuments().map((entry) => entry.slug);
}

export function getContentBySlug(slug: string): ContentDocument | undefined {
  if (isReservedContentSlug(slug)) {
    return undefined;
  }

  return getAllContentDocuments().find((entry) => entry.slug === slug);
}

export function getContentByType(type: ContentType): ContentDocument[] {
  return getAllContentDocuments().filter((entry) => entry.type === type);
}

export function getFeaturedContent(limit = 3): ContentDocument[] {
  return getAllContentDocuments()
    .filter((entry) => entry.featured)
    .slice(0, limit);
}

export function getAllContentTags(): string[] {
  return Array.from(
    new Set(getAllContentDocuments().flatMap((entry) => entry.tags)),
  ).sort((left, right) => left.localeCompare(right));
}

export function getRelatedContent(
  document: ContentDocument,
  limit = 3,
): ContentDocument[] {
  const allEntries = getAllContentDocuments().filter(
    (entry) => entry.slug !== document.slug,
  );

  const related = new Map<string, ContentDocument>();

  for (const slug of document.relatedSlugs) {
    const match = allEntries.find((entry) => entry.slug === slug);
    if (match) {
      related.set(match.slug, match);
    }
  }

  for (const entry of allEntries) {
    if (related.size >= limit) {
      break;
    }

    const sharesTag = entry.tags.some((tag) => document.tags.includes(tag));
    if (sharesTag) {
      related.set(entry.slug, entry);
    }
  }

  return Array.from(related.values()).slice(0, limit);
}
