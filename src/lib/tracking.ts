export const UTM_PARAM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

export type UtmParamKey = (typeof UTM_PARAM_KEYS)[number];

export type UtmParams = Partial<Record<UtmParamKey, string>>;

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
  page_url: string;
  referrer: string;
  timestamp: string;
};

export function getCampaignSlugFromPathname(pathname: string): string {
  const match = pathname.match(/^\/lp\/([^/]+)/);
  return match?.[1] ?? "";
}

export function getTrackingBaseProperties(
  campaignSlug: string,
): TrackingBaseProperties {
  const timestamp = new Date().toISOString();
  if (typeof window === "undefined") {
    return {
      campaign_slug: campaignSlug,
      page_url: "",
      referrer: "",
      timestamp,
    };
  }
  return {
    campaign_slug: campaignSlug,
    page_url: window.location.href,
    referrer: document.referrer ?? "",
    timestamp,
  };
}
