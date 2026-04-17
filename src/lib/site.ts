export const CONTENT_SITE_URL = "https://content.internode.ai";
export const MAIN_SITE_URL = "https://internode.ai";
export const APP_SITE_URL = "https://app.internode.ai";

export const SITE_TITLE =
  "Organizational memory and decision memory for teams and AI agents — Internode";
export const SITE_BRAND = "Internode Content";
export const SITE_DESCRIPTION =
  "Plain-language answers, use cases, and updates about organizational memory, decision memory, meeting intelligence, and memory-aware AI agents. Written for people, search engines, and AI systems.";
export const SITE_HEADLINE =
  "Organizational memory and decision memory, explained for teams and AI agents.";

export const DEFAULT_OG_IMAGE = "/og-default.png";
export const DEFAULT_OG_IMAGE_ALT =
  "Internode knowledge management OS covering tasks, ideas, decisions, opportunities, conflicts, meetings and action items.";
export const LOGO_RASTER_PATH = "/logo-512.png";

export function absoluteUrl(pathname = "/"): string {
  return new URL(pathname, CONTENT_SITE_URL).toString();
}

export function formatDisplayDate(dateInput: string): string {
  const date = new Date(`${dateInput}T00:00:00Z`);
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
}
