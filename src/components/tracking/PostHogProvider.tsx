"use client";

import posthog from "posthog-js";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { PostHogProvider as PHProvider } from "posthog-js/react";

import { getCampaign } from "@/config/campaigns";
import { getPostHogConfig } from "@/lib/posthog";
import {
  getCampaignSlugFromPathname,
  getContentSlugFromPathname,
  getTrackingBaseProperties,
  getUtmParamsFromSearchParams,
} from "@/lib/tracking";

function PostHogPageView(): null {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    const searchParams = new URLSearchParams(window.location.search);

    const campaignSlug = getCampaignSlugFromPathname(pathname);
    const contentSlug = getContentSlugFromPathname(pathname);
    const campaignConfig = campaignSlug ? getCampaign(campaignSlug) : undefined;
    const campaignId = campaignConfig?.tracking.campaignId ?? "";

    if (campaignConfig) {
      posthog.group("campaign", campaignSlug, {
        campaign_id: campaignId,
        name: campaignConfig.meta.title,
        traffic_source: campaignConfig.tracking.source,
      });
    }

    const base = getTrackingBaseProperties({
      pathname,
      campaignSlug,
      campaignId,
      contentSlug,
    });
    const utm = getUtmParamsFromSearchParams(searchParams);

    if (Object.keys(utm).length > 0) {
      posthog.people.set(utm);
    }

    posthog.capture("$pageview", {
      ...base,
      ...utm,
    });
  }, [pathname]);

  return null;
}

/**
 * Standalone PostHog initializer — renders nothing, does not wrap children.
 * Place as a sibling in the root layout so page content stays server-rendered.
 */
export function PostHogInit() {
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!apiKey || posthog.__loaded) return;
    posthog.init(apiKey, getPostHogConfig());
  }, []);

  return <PostHogPageView />;
}

/**
 * React context wrapper for pages that need the usePostHog() hook
 * (landing pages with TrackSection, ScrollDepth, etc.).
 */
export function PostHogContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PHProvider client={posthog}>{children}</PHProvider>;
}
