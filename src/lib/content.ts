import { getCollection, type CollectionEntry } from "astro:content";

export type ContentType = "answer" | "use-case" | "update";
export type ContentEntry = CollectionEntry<"answers">;

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

function sortEntries(entries: ContentEntry[]): ContentEntry[] {
  return entries.sort((left, right) => {
    const dateDelta =
      new Date(right.data.publishedAt).getTime() -
      new Date(left.data.publishedAt).getTime();
    if (dateDelta !== 0) return dateDelta;

    const typeDelta =
      getTypeSortOrder(left.data.type) - getTypeSortOrder(right.data.type);
    if (typeDelta !== 0) return typeDelta;

    return left.data.title.localeCompare(right.data.title);
  });
}

export async function getAllContentEntries(): Promise<ContentEntry[]> {
  const entries = await getCollection("answers");
  return sortEntries(entries);
}

export async function getContentByType(
  type: ContentType,
): Promise<ContentEntry[]> {
  const all = await getAllContentEntries();
  return all.filter((entry) => entry.data.type === type);
}

export async function getFeaturedContent(
  limit = 3,
): Promise<ContentEntry[]> {
  const all = await getAllContentEntries();
  return all.filter((entry) => entry.data.featured).slice(0, limit);
}

export async function getAllContentTags(): Promise<string[]> {
  const all = await getAllContentEntries();
  return Array.from(
    new Set(all.flatMap((entry) => entry.data.tags)),
  ).sort((a, b) => a.localeCompare(b));
}

export async function getRelatedContent(
  entry: ContentEntry,
  limit = 3,
): Promise<ContentEntry[]> {
  const all = await getAllContentEntries();
  const others = all.filter((e) => e.id !== entry.id);
  const related = new Map<string, ContentEntry>();

  for (const slug of entry.data.relatedSlugs) {
    const match = others.find((e) => entrySlug(e) === slug);
    if (match) related.set(match.id, match);
  }

  for (const other of others) {
    if (related.size >= limit) break;
    if (other.data.tags.some((tag) => entry.data.tags.includes(tag))) {
      related.set(other.id, other);
    }
  }

  return Array.from(related.values()).slice(0, limit);
}

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

export function countWords(markdown: string): number {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/[#>*_\-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

export function readingTimeMinutes(wordCount: number): number {
  return Math.max(1, Math.round(wordCount / 220));
}

export function entrySlug(entry: ContentEntry): string {
  return entry.id.replace(/\.md$/, "");
}

export function contentUrl(slug: string): string {
  return `/${slug}`;
}

export function topicSlug(tag: string): string {
  return tag
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function topicUrl(tag: string): string {
  return `/topics/${topicSlug(tag)}`;
}

export interface TopicInfo {
  slug: string;
  label: string;
  entries: ContentEntry[];
}

export async function getAllTopics(): Promise<TopicInfo[]> {
  const all = await getAllContentEntries();
  const bySlug = new Map<string, { label: string; entries: ContentEntry[] }>();

  for (const entry of all) {
    for (const tag of entry.data.tags) {
      const slug = topicSlug(tag);
      if (!slug) continue;
      const existing = bySlug.get(slug);
      if (existing) {
        existing.entries.push(entry);
      } else {
        bySlug.set(slug, { label: tag, entries: [entry] });
      }
    }
  }

  return Array.from(bySlug.entries())
    .map(([slug, value]) => ({
      slug,
      label: value.label,
      entries: sortEntries(value.entries),
    }))
    .sort((a, b) => b.entries.length - a.entries.length || a.label.localeCompare(b.label));
}

export async function getTopicBySlug(slug: string): Promise<TopicInfo | null> {
  const topics = await getAllTopics();
  return topics.find((topic) => topic.slug === slug) ?? null;
}
