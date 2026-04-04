"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { PostHogProvider as PHProvider, usePostHog } from "posthog-js/react";

import { getPostHogConfig } from "@/lib/posthog";
import {
  getCampaignSlugFromPathname,
  getTrackingBaseProperties,
  getUtmParamsFromSearchParams,
} from "@/lib/tracking";

function PostHogPageView(): null {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthog = usePostHog();
  const searchParamsString = searchParams.toString();

  useEffect(() => {
    if (!posthog || !pathname) {
      return;
    }

    const campaignSlug = getCampaignSlugFromPathname(pathname);
    const base = getTrackingBaseProperties(campaignSlug);
    const params = new URLSearchParams(searchParamsString);
    const utm = getUtmParamsFromSearchParams(params);

    if (Object.keys(utm).length > 0) {
      posthog.people.set(utm);
    }

    posthog.capture("$pageview", {
      ...base,
      ...utm,
    });
  }, [pathname, posthog, searchParamsString]);

  return null;
}

export function PostHogProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;

  if (!apiKey) {
    return <>{children}</>;
  }

  return (
    <PHProvider apiKey={apiKey} options={getPostHogConfig()}>
      <PostHogPageView />
      {children}
    </PHProvider>
  );
}
