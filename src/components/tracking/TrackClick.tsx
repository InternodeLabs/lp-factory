"use client";

import {
  cloneElement,
  isValidElement,
  useCallback,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
} from "react";
import { usePostHog } from "posthog-js/react";

import { getTrackingBaseProperties } from "@/lib/tracking";

export type TrackClickCaptureExtras = Record<
  string,
  string | number | boolean | null | undefined
>;

export type TrackClickProps = Readonly<{
  campaign: string;
  campaignId: string;
  section: string;
  ctaText: string;
  element: string;
  /** Additional properties merged into the `lp_click` payload */
  captureExtras?: TrackClickCaptureExtras;
  children: ReactNode;
}>;

export function TrackClick({
  campaign,
  campaignId,
  section,
  ctaText,
  element,
  captureExtras,
  children,
}: TrackClickProps) {
  const posthog = usePostHog();

  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (!posthog) {
        return;
      }
      const base = getTrackingBaseProperties(campaign, campaignId);
      const target = event.currentTarget;
      const interactiveTag =
        target instanceof Element ? target.tagName.toLowerCase() : undefined;
      posthog.capture("lp_click", {
        element,
        section,
        cta_text: ctaText,
        interactive_tag: interactiveTag,
        ...base,
        ...captureExtras,
      });
    },
    [posthog, campaign, campaignId, section, ctaText, element, captureExtras],
  );

  if (!isValidElement(children)) {
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console -- developer feedback for misuse
      console.warn(
        "TrackClick expects a single React element child so click events can be composed.",
      );
    }
    return <>{children}</>;
  }

  const child = children as ReactElement<{
    onClick?: (e: MouseEvent) => void;
  }>;
  const originalOnClick = child.props.onClick;
  return cloneElement(child, {
    onClick: (e: MouseEvent) => {
      handleClick(e);
      originalOnClick?.(e);
    },
  });
}
