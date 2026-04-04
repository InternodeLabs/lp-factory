"use client";

import { usePathname } from "next/navigation";

import { ScrollDepth } from "@/components/tracking/ScrollDepth";

export function LpScrollDepthMount({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const match = pathname.match(/^\/lp\/([^/]+)/);
  const campaignSlug = match?.[1] ?? "";

  return (
    <>
      <ScrollDepth key={pathname} campaign={campaignSlug} />
      {children}
    </>
  );
}
