"use client";

import { usePathname } from "next/navigation";

import { getCampaign } from "@/config/campaigns";
import { ScrollDepth } from "@/components/tracking/ScrollDepth";

export function LpScrollDepthMount({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const match = pathname.match(/^\/lp\/([^/]+)/);
  const campaignSlug = match?.[1] ?? "";
  const campaignId = getCampaign(campaignSlug)?.tracking.campaignId ?? "";

  return (
    <>
      <ScrollDepth key={pathname} campaign={campaignSlug} campaignId={campaignId} />
      {children}
    </>
  );
}
