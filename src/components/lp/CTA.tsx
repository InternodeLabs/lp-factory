import { TrackClick } from "@/components/tracking/TrackClick";
import type { CampaignConfig, SectionConfig } from "@/config/types";

import { finalCtaButtonClassName } from "./lp-cta-classes";
import { cn } from "@/lib/utils";

type FinalCtaSection = Extract<SectionConfig, { type: "final-cta" }>;

export function CTA({
  section,
  config,
  campaign,
}: Readonly<{
  section: FinalCtaSection;
  config: CampaignConfig;
  campaign: string;
}>) {
  const { theme, cta, tracking } = config;
  const captureExtras = {
    traffic_source: tracking.source,
    conversion_event: tracking.conversionEvent,
    href: cta.href,
  };

  return (
    <section
      className={cn(
        "py-16 px-4 md:py-24 md:px-8",
        theme.darkMode && "dark",
      )}
    >
      <div className="mx-auto max-w-5xl">
        <div
          className={cn(
            "relative overflow-hidden rounded-3xl px-6 py-14 text-center shadow-2xl md:px-12 md:py-20",
            "bg-[var(--lp-primary)] text-white",
            "ring-1 ring-white/10",
          )}
        >
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--lp-accent)]/25 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {section.headline}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-white/90 md:mt-8 md:text-xl">
              {section.subheadline}
            </p>
            <div className="mt-10 md:mt-12">
              <TrackClick
                campaign={campaign}
                campaignId={tracking.campaignId}
                section="final-cta"
                ctaText={section.ctaText}
                element="final_cta_primary"
                captureExtras={captureExtras}
              >
                <a
                  href={cta.href}
                  className={finalCtaButtonClassName(theme.darkMode)}
                >
                  {section.ctaText}
                </a>
              </TrackClick>
              {section.ctaSubtext && (
                <p className="mt-3 text-sm text-white/70">
                  {section.ctaSubtext}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
