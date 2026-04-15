export const UTM_PARAM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

export type UtmParamKey = (typeof UTM_PARAM_KEYS)[number];

export type UtmParams = Partial<Record<UtmParamKey, string>>;

const RESERVED_SINGLE_SEGMENT_PATHS = new Set([
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

export function getUtmParamsFromSearchParams(
  searchParams: URLSearchParams,
): UtmParams {
  const out: UtmParams = {};
  for (const key of UTM_PARAM_KEYS) {
    const value = searchParams.get(key);
    if (value != null && value !== "") {
      out[key] = value;
    }
  }
  return out;
}

export type TrackingBaseProperties = {
  campaign_slug: string;
  campaign_id: string;
  content_slug: string;
  page_type: "landing_page" | "content_index" | "content_page" | "other";
  page_url: string;
  referrer: string;
  timestamp: string;
};

export function getCampaignSlugFromPathname(pathname: string): string {
  const match = pathname.match(/^\/lp\/([^/]+)/);
  return match?.[1] ?? "";
}

export function getContentSlugFromPathname(pathname: string): string {
  if (!pathname || pathname === "/" || pathname.startsWith("/lp/")) {
    return "";
  }

  const normalizedPath = pathname.replace(/\/+$/, "") || "/";
  const match = normalizedPath.match(/^\/([^/]+)$/);
  const slug = match?.[1] ?? "";

  if (!slug || RESERVED_SINGLE_SEGMENT_PATHS.has(slug)) {
    return "";
  }

  return slug;
}

export function getPageTypeFromPathname(
  pathname: string,
): TrackingBaseProperties["page_type"] {
  if (getCampaignSlugFromPathname(pathname)) {
    return "landing_page";
  }

  if (pathname === "/") {
    return "content_index";
  }

  if (getContentSlugFromPathname(pathname)) {
    return "content_page";
  }

  return "other";
}

export function getTrackingBaseProperties(
  options: {
    pathname?: string;
    campaignSlug?: string;
    campaignId?: string;
    contentSlug?: string;
  } = {},
): TrackingBaseProperties {
  const {
    pathname,
    campaignSlug = "",
    campaignId = "",
    contentSlug = "",
  } = options;
  const timestamp = new Date().toISOString();
  const resolvedPathname =
    pathname ??
    (typeof window !== "undefined" ? window.location.pathname : campaignSlug ? `/lp/${campaignSlug}` : contentSlug ? `/${contentSlug}` : "");
  const resolvedCampaignSlug =
    campaignSlug || getCampaignSlugFromPathname(resolvedPathname);
  const resolvedContentSlug =
    contentSlug || getContentSlugFromPathname(resolvedPathname);
  const page_type = getPageTypeFromPathname(resolvedPathname || "/");

  if (typeof window === "undefined") {
    return {
      campaign_slug: resolvedCampaignSlug,
      campaign_id: campaignId,
      content_slug: resolvedContentSlug,
      page_type,
      page_url: "",
      referrer: "",
      timestamp,
    };
  }
  return {
    campaign_slug: resolvedCampaignSlug,
    campaign_id: campaignId,
    content_slug: resolvedContentSlug,
    page_type,
    page_url: window.location.href,
    referrer: document.referrer ?? "",
    timestamp,
  };
}
