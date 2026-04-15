import type { MetadataRoute } from "next";

import { getAllContentDocuments } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = getAllContentDocuments().map((entry) => ({
    url: absoluteUrl(entry.url),
    lastModified: entry.updatedDate,
    changeFrequency: "weekly" as const,
    priority: entry.featured ? 0.9 : 0.7,
  }));

  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...pages,
  ];
}
