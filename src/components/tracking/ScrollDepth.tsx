"use client";

import { useEffect, useRef } from "react";
import { usePostHog } from "posthog-js/react";

import { getTrackingBaseProperties } from "@/lib/tracking";

const THRESHOLDS = [25, 50, 75, 90, 100] as const;

export type ScrollDepthProps = Readonly<{
  campaign: string;
  campaignId: string;
}>;

function getScrollDepthPercent(): number {
  const scrollHeight = document.documentElement.scrollHeight;
  const viewport = window.innerHeight;
  if (scrollHeight <= viewport) {
    return 100;
  }
  const raw = ((window.scrollY + viewport) / scrollHeight) * 100;
  return Math.min(100, Math.max(0, Math.round(raw * 10) / 10));
}

export function ScrollDepth({ campaign, campaignId }: ScrollDepthProps) {
  const posthog = usePostHog();
  const maxDepthRef = useRef(0);
  const firedRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    if (!posthog) {
      return;
    }

    const onScroll = () => {
      const depth = getScrollDepthPercent();
      if (depth > maxDepthRef.current) {
        maxDepthRef.current = depth;
      }
      const base = getTrackingBaseProperties(campaign, campaignId);
      for (const threshold of THRESHOLDS) {
        if (maxDepthRef.current >= threshold && !firedRef.current.has(threshold)) {
          firedRef.current.add(threshold);
          posthog.capture("scroll_depth", {
            depth_percent: threshold,
            max_depth_percent: Math.round(maxDepthRef.current * 100) / 100,
            ...base,
          });
        }
      }
    };

    const onScrollThrottled = () => {
      window.requestAnimationFrame(onScroll);
    };

    onScroll();
    window.addEventListener("scroll", onScrollThrottled, { passive: true });
    window.addEventListener("resize", onScrollThrottled, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScrollThrottled);
      window.removeEventListener("resize", onScrollThrottled);
    };
  }, [posthog, campaign, campaignId]);

  return null;
}
