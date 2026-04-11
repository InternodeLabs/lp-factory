"use client";

import { useState, useCallback } from "react";
import { usePostHog } from "posthog-js/react";

import type { SectionConfig } from "@/config/types";
import { LpIcon } from "./LpIcon";
import { cn } from "@/lib/utils";

type TabShowcaseSection = Extract<SectionConfig, { type: "tab-showcase" }>;

export function TabShowcase({
  section,
  darkMode,
  campaign,
  campaignId,
}: Readonly<{
  section: TabShowcaseSection;
  darkMode: boolean;
  campaign: string;
  campaignId: string;
}>) {
  const [activeIndex, setActiveIndex] = useState(0);
  const posthog = usePostHog();

  const handleTabClick = useCallback(
    (index: number) => {
      setActiveIndex(index);
      const tab = section.tabs[index];
      if (posthog && tab) {
        posthog.capture("tab_showcase_click", {
          campaign_slug: campaign,
          campaign_id: campaignId,
          tab_label: tab.label,
          tab_index: index,
          section: "tab-showcase",
        });
      }
    },
    [posthog, campaign, campaignId, section.tabs],
  );

  const activeTab = section.tabs[activeIndex];

  return (
    <section
      className={cn("py-16 px-4 md:py-24 md:px-8", darkMode && "dark")}
    >
      <div className="mx-auto max-w-5xl">
        {section.title && (
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            {section.title}
          </h2>
        )}
        {section.subtitle && (
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray-600 dark:text-gray-300 md:mt-6 md:text-xl">
            {section.subtitle}
          </p>
        )}

        <div
          className={cn(
            "mt-10 flex flex-wrap justify-center gap-3 md:mt-14 md:gap-4",
          )}
          role="tablist"
          aria-label={section.title ?? "Feature tabs"}
        >
          {section.tabs.map((tab, i) => (
            <button
              key={tab.label}
              role="tab"
              aria-selected={i === activeIndex}
              aria-controls="tab-showcase-panel"
              onClick={() => handleTabClick(i)}
              className={cn(
                "group flex min-w-[140px] flex-col items-center gap-2.5 rounded-xl border px-5 py-4 text-sm font-medium transition-all duration-200 md:min-w-[160px] md:px-6 md:py-5 md:text-base",
                i === activeIndex
                  ? "border-[var(--lp-primary)]/40 bg-[var(--lp-primary)]/10 text-[var(--lp-primary)] shadow-md shadow-[var(--lp-primary)]/10 dark:border-[var(--lp-primary)]/50 dark:bg-[var(--lp-primary)]/15"
                  : "border-gray-200 bg-white/80 text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-200",
              )}
            >
              <span
                className={cn(
                  "text-2xl transition-transform duration-200",
                  i === activeIndex && "scale-110",
                )}
              >
                <LpIcon name={tab.icon} size={28} />
              </span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div
          id="tab-showcase-panel"
          role="tabpanel"
          aria-label={activeTab?.label}
          className="mt-8 md:mt-12"
        >
          <div
            className={cn(
              "relative mx-auto overflow-hidden rounded-2xl border shadow-2xl md:rounded-3xl",
              "border-gray-200/30 bg-gradient-to-b from-gray-50 to-gray-100 dark:border-gray-700/40 dark:from-gray-800/60 dark:to-gray-900/80",
              "shadow-[var(--lp-primary)]/5",
            )}
          >
            {activeTab && (
              <div className="w-full p-4 md:p-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  key={activeTab.image}
                  src={activeTab.image}
                  alt={activeTab.alt ?? activeTab.label}
                  className="mx-auto h-auto max-h-[320px] w-auto max-w-full"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
