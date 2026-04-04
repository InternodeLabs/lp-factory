import type { CampaignConfig } from "@/config/types";

import { cn } from "@/lib/utils";

const base =
  "inline-flex min-h-[3rem] items-center justify-center rounded-xl px-8 py-3 text-base font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--lp-primary)] focus-visible:ring-offset-2 md:min-h-[3.25rem] md:px-10 md:text-lg";

export function ctaClassName(
  style: CampaignConfig["cta"]["style"],
  darkMode: boolean,
): string {
  const ringOffset = darkMode ? "ring-offset-gray-950" : "ring-offset-white";
  switch (style) {
    case "primary":
      return cn(
        base,
        ringOffset,
        "bg-[var(--lp-primary)] text-white shadow-lg shadow-[var(--lp-primary)]/30 hover:brightness-110 active:scale-[0.98]",
      );
    case "outline":
      return cn(
        base,
        ringOffset,
        "border-2 border-[var(--lp-primary)] text-[var(--lp-primary)] hover:bg-[var(--lp-primary)]/10 active:scale-[0.98]",
      );
    case "ghost":
      return cn(
        base,
        ringOffset,
        "text-[var(--lp-accent)] hover:bg-gray-500/10 dark:hover:bg-white/10 active:scale-[0.98]",
      );
    default:
      return cn(base, ringOffset);
  }
}

/** High-contrast button on top of primary-colored backgrounds (final CTA band) */
export function finalCtaButtonClassName(darkMode: boolean): string {
  return cn(
    base,
    darkMode ? "ring-offset-[var(--lp-primary)]" : "ring-offset-white",
    "bg-white text-[var(--lp-primary)] shadow-xl hover:bg-gray-100 active:scale-[0.98]",
  );
}
