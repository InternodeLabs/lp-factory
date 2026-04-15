export const CONTENT_SITE_URL = "https://content.internode.ai";
export const MAIN_SITE_URL = "https://internode.ai";
export const APP_SITE_URL = "https://app.internode.ai";

export const SITE_TITLE = "Internode Content";
export const SITE_DESCRIPTION =
  "Root-level answers, use cases, and updates about organizational memory, AI agents, decision history, and team context.";

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
