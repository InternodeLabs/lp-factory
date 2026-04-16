import {
  useState,
  useCallback,
  useRef,
  useEffect,
  type ReactNode,
} from "react";
import posthog from "posthog-js";

import type { CampaignConfig, SectionConfig } from "@/config/types";
import { getTrackingBaseProperties } from "@/lib/tracking";
import { cn } from "@/lib/utils";

type LiveDemoSection = Extract<SectionConfig, { type: "live-demo" }>;

export function LiveDemo({
  section,
  config,
  campaign,
}: Readonly<{
  section: LiveDemoSection;
  config: CampaignConfig;
  campaign: string;
}>) {
  const [active, setActive] = useState(!section.posterImage);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const openedAtRef = useRef<number | null>(
    section.posterImage ? null : Date.now(),
  );
  const { darkMode } = config.theme;

  const handleActivate = useCallback(() => {
    setActive(true);
    openedAtRef.current = Date.now();
    if (posthog.__loaded) {
      posthog.capture("live_demo_opened", {
        ...getTrackingBaseProperties({
          campaignSlug: campaign,
          campaignId: config.tracking.campaignId,
        }),
        demo_url: section.demoUrl,
      });
    }
  }, [campaign, config.tracking.campaignId, section.demoUrl]);

  useEffect(() => {
    if (!active) return;
    const trackTime = () => {
      if (posthog.__loaded && openedAtRef.current) {
        posthog.capture("live_demo_time", {
          ...getTrackingBaseProperties({
            campaignSlug: campaign,
            campaignId: config.tracking.campaignId,
          }),
          visible_ms: Date.now() - openedAtRef.current,
        });
      }
    };
    window.addEventListener("beforeunload", trackTime);
    return () => window.removeEventListener("beforeunload", trackTime);
  }, [active, campaign, config.tracking.campaignId]);

  return (
    <section className={cn("px-4 py-16 md:px-8 md:py-24", darkMode && "dark")}>
      <div className="mx-auto max-w-6xl">
        {section.title && (
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
            {section.title}
          </h2>
        )}
        {section.subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300">
            {section.subtitle}
          </p>
        )}

        <div
          className={cn(
            "relative mt-10 w-full overflow-hidden rounded-2xl border shadow-2xl shadow-[var(--lp-primary)]/10 md:mt-14",
            "border-gray-200/20 ring-1 ring-white/10",
          )}
        >
          {!active && section.posterImage && (
            <button
              type="button"
              onClick={handleActivate}
              className="group relative block w-full cursor-pointer"
              style={{ aspectRatio: "16 / 9" }}
            >
              <img
                src={section.posterImage}
                alt="Click to launch live demo"
                className="absolute inset-0 h-full w-full object-cover object-top"
                loading="eager"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/30 transition-colors duration-200 group-hover:bg-black/40">
                <PlayIcon />
                <span className="rounded-full bg-[var(--lp-primary)] px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform duration-200 group-hover:scale-105 md:text-base">
                  {section.ctaText ?? "Try it live"}
                </span>
              </div>
            </button>
          )}

          {active && (
            <iframe
              src={section.demoUrl}
              title="Internode interactive demo"
              onLoad={() => setIframeLoaded(true)}
              className={cn(
                "block w-full border-0 transition-opacity duration-500",
                iframeLoaded ? "opacity-100" : "opacity-0",
              )}
              style={{ height: "75vh", minHeight: "500px" }}
              allow="clipboard-read; clipboard-write"
            />
          )}

          {active && !iframeLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-950">
              <div className="flex flex-col items-center gap-3">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-600 border-t-[var(--lp-primary)]" />
                <span className="text-sm text-gray-400">Loading prototype…</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function PlayIcon(): ReactNode {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className="h-16 w-16 drop-shadow-lg md:h-20 md:w-20"
      aria-hidden
    >
      <circle cx="32" cy="32" r="32" className="fill-white/90" />
      <path d="M26 20l20 12-20 12V20z" className="fill-[var(--lp-primary)]" />
    </svg>
  );
}
