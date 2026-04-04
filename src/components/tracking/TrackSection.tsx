"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePostHog } from "posthog-js/react";

import { getTrackingBaseProperties } from "@/lib/tracking";

export type TrackSectionProps = Readonly<{
  campaign: string;
  sectionName: string;
  children: ReactNode;
}>;

export function TrackSection({
  campaign,
  sectionName,
  children,
}: TrackSectionProps) {
  const posthog = usePostHog();
  const rootRef = useRef<HTMLDivElement>(null);

  const inViewRef = useRef(false);
  const tabVisibleRef = useRef(
    typeof document !== "undefined"
      ? document.visibilityState === "visible"
      : true,
  );
  const segmentStartRef = useRef<number | null>(null);
  const totalVisibleMsRef = useRef(0);
  const hasViewedRef = useRef(false);
  const hasSentTimeRef = useRef(false);

  const metaRef = useRef({ campaign, sectionName, posthog });
  metaRef.current = { campaign, sectionName, posthog };

  const stopSegment = () => {
    if (segmentStartRef.current != null) {
      totalVisibleMsRef.current += Date.now() - segmentStartRef.current;
      segmentStartRef.current = null;
    }
  };

  const sendSectionTimeRef = useRef(() => {});
  sendSectionTimeRef.current = () => {
    const { posthog: ph, campaign: slug, sectionName: name } = metaRef.current;
    if (hasSentTimeRef.current || !ph) {
      return;
    }
    stopSegment();
    const visibleMs = totalVisibleMsRef.current;
    if (visibleMs <= 0) {
      return;
    }
    hasSentTimeRef.current = true;
    const base = getTrackingBaseProperties(slug);
    ph.capture("section_time", {
      section_name: name,
      visible_ms: visibleMs,
      ...base,
    });
  };

  const syncSegmentTimerRef = useRef(() => {});
  syncSegmentTimerRef.current = () => {
    const shouldCount = inViewRef.current && tabVisibleRef.current;
    if (shouldCount && segmentStartRef.current == null) {
      segmentStartRef.current = Date.now();
    } else if (!shouldCount) {
      stopSegment();
    }
  };

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) {
          return;
        }
        const isIntersecting =
          entry.isIntersecting && entry.intersectionRatio > 0;
        inViewRef.current = isIntersecting;

        const { posthog: ph, campaign: slug, sectionName: name } =
          metaRef.current;
        if (isIntersecting && ph && !hasViewedRef.current) {
          hasViewedRef.current = true;
          const base = getTrackingBaseProperties(slug);
          ph.capture("section_viewed", {
            section_name: name,
            ...base,
          });
        }

        syncSegmentTimerRef.current();
      },
      { threshold: [0, 0.01, 0.25, 0.5, 1] },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, [sectionName, campaign, posthog]);

  useEffect(() => {
    const onVisibility = () => {
      tabVisibleRef.current = document.visibilityState === "visible";
      syncSegmentTimerRef.current();
    };

    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    const onPageHide = () => {
      sendSectionTimeRef.current();
    };
    window.addEventListener("pagehide", onPageHide);
    return () => window.removeEventListener("pagehide", onPageHide);
  }, []);

  useEffect(
    () => () => {
      sendSectionTimeRef.current();
    },
    [],
  );

  return <div ref={rootRef}>{children}</div>;
}
