"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  type MouseEvent,
  type PropsWithChildren,
  useCallback,
} from "react";
import { usePostHog } from "posthog-js/react";

import { cn } from "@/lib/utils";
import {
  getContentSlugFromPathname,
  getTrackingBaseProperties,
} from "@/lib/tracking";

const NAVIGATION_DELAY_MS = 250;

type TrackedContentLinkProps = PropsWithChildren<{
  href: string;
  className?: string;
  trackingLabel?: string;
  trackingLocation: string;
  trackingType?: "internal" | "external" | "cta";
  rel?: string;
  target?: string;
}>;

function isExternalHref(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

function isHashHref(href: string): boolean {
  return href.startsWith("#");
}

export function TrackedContentLink({
  href,
  className,
  trackingLabel,
  trackingLocation,
  trackingType,
  rel,
  target,
  children,
}: TrackedContentLinkProps) {
  const pathname = usePathname();
  const posthog = usePostHog();
  const externalHref = isExternalHref(href);
  const hashHref = isHashHref(href);

  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (!posthog || !pathname) {
        return;
      }

      const inferredTrackingType = trackingType
        ? trackingType
        : externalHref
          ? "external"
          : "internal";

      posthog.capture("content_link_click", {
        ...getTrackingBaseProperties({
          pathname,
          contentSlug: getContentSlugFromPathname(pathname),
        }),
        destination_url: href,
        link_label: trackingLabel ?? href,
        link_location: trackingLocation,
        link_type: inferredTrackingType,
      });

      if (
        inferredTrackingType === "external" &&
        !event.defaultPrevented &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.shiftKey &&
        event.button === 0
      ) {
        event.preventDefault();
        window.setTimeout(() => {
          window.location.href = href;
        }, NAVIGATION_DELAY_MS);
      }
    },
    [externalHref, posthog, pathname, href, trackingLabel, trackingLocation, trackingType],
  );

  const classes = cn("underline decoration-current underline-offset-4", className);

  if (externalHref || hashHref) {
    return (
      <a
        href={href}
        className={classes}
        onClick={handleClick}
        rel={externalHref ? rel ?? "noopener noreferrer" : rel}
        target={externalHref ? target : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={handleClick}>
      {children}
    </Link>
  );
}
