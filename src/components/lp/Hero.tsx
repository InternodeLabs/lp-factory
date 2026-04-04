import Image from "next/image";

import { TrackClick } from "@/components/tracking/TrackClick";
import type { CampaignConfig, SectionConfig } from "@/config/types";

import { ctaClassName } from "./lp-cta-classes";
import { cn } from "@/lib/utils";

type HeroSection = Extract<SectionConfig, { type: "hero" }>;

export function Hero({
  section,
  config,
  campaign,
}: Readonly<{
  section: HeroSection;
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
        "relative flex min-h-screen flex-col overflow-hidden",
        theme.darkMode && "dark",
      )}
    >
      {section.backgroundImage ? (
        <>
          <Image
            src={section.backgroundImage}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-gray-950/85 via-gray-950/75 to-gray-950/90 dark:from-gray-950/90 dark:via-gray-950/80 dark:to-gray-950/95"
            aria-hidden
          />
        </>
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
          aria-hidden
        />
      )}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12] dark:opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--lp-primary) 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      <div className="relative z-10 flex flex-1 flex-col py-16 px-4 md:py-24 md:px-8">
        {/* Branding */}
        <div className="mx-auto w-full max-w-5xl">
          <p className="text-sm font-semibold tracking-wide text-[var(--lp-primary)]">
            INTERNODE
          </p>
        </div>

        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center text-center">
          <h1
            className={cn(
              "text-balance bg-gradient-to-br from-[var(--lp-primary)] via-[var(--lp-primary)] to-[var(--lp-accent)] bg-clip-text py-[30px] text-4xl font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl",
              section.backgroundImage && "drop-shadow-sm",
            )}
          >
            {section.headline}
          </h1>
          <p
            className={cn(
              "mx-auto mt-6 max-w-3xl text-pretty text-lg md:mt-8 md:text-xl",
              "text-gray-600 dark:text-gray-300",
            )}
          >
            {section.subheadline}
          </p>
          <div className="mt-10 md:mt-12">
            <TrackClick
              campaign={campaign}
              campaignId={tracking.campaignId}
              section="hero"
              ctaText={section.ctaText}
              element="hero_primary_cta"
              captureExtras={captureExtras}
            >
              <a
                href={cta.href}
                className={ctaClassName(cta.style, theme.darkMode)}
              >
                {section.ctaText}
              </a>
            </TrackClick>
            {section.ctaSubtext && (
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                {section.ctaSubtext}
              </p>
            )}
          </div>

          {section.heroImage && (
            <div className="mx-auto mt-12 w-full max-w-4xl md:mt-16">
              <div className="relative overflow-hidden rounded-xl border border-gray-200/20 shadow-2xl shadow-[var(--lp-primary)]/10 ring-1 ring-white/10 md:rounded-2xl">
                <Image
                  src={section.heroImage}
                  alt="Internode product: decisions captured from meetings and linked to your projects"
                  width={2048}
                  height={1456}
                  priority
                  className="w-full"
                  unoptimized
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
