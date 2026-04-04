"use client";

import type { CSSProperties } from "react";
import { usePathname } from "next/navigation";

import { getCampaign } from "@/config/campaigns";

import { Footer } from "./Footer";
import { InteractiveBackground } from "./InteractiveBackground";

const FALLBACK_PRIMARY = "#6366f1";
const FALLBACK_ACCENT = "#22d3ee";

export function LpLayoutShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const slug = pathname.match(/^\/lp\/([^/]+)/)?.[1];
  const campaignConfig = slug ? getCampaign(slug) : undefined;
  const darkMode = campaignConfig?.theme.darkMode ?? true;
  const primary = campaignConfig?.theme.primaryColor ?? FALLBACK_PRIMARY;
  const accent = campaignConfig?.theme.accentColor ?? FALLBACK_ACCENT;

  const style = {
    "--lp-primary": primary,
    "--lp-accent": accent,
  } as CSSProperties;

  return (
    <div className="flex min-h-dvh flex-col" style={style}>
      <InteractiveBackground
        primaryColor={primary}
        accentColor={accent}
        darkMode={darkMode}
      />
      <main className="relative z-[1] flex-1">{children}</main>
      <Footer darkMode={darkMode} />
    </div>
  );
}
