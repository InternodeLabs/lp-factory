"use client";

import type { CSSProperties } from "react";
import { usePathname } from "next/navigation";

import { getCampaign } from "@/config/campaigns";

import { Footer } from "./Footer";

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

  const style = {
    "--lp-primary": campaignConfig?.theme.primaryColor ?? FALLBACK_PRIMARY,
    "--lp-accent": campaignConfig?.theme.accentColor ?? FALLBACK_ACCENT,
  } as CSSProperties;

  return (
    <div className="flex min-h-dvh flex-col" style={style}>
      <main className="flex-1">{children}</main>
      <Footer darkMode={darkMode} />
    </div>
  );
}
