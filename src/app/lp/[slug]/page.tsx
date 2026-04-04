import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LpSectionBody } from "@/components/lp/LpSectionBody";
import { TrackSection } from "@/components/tracking/TrackSection";
import { getAllCampaignSlugs, getCampaign } from "@/config/campaigns";

import { cn } from "@/lib/utils";

type PageProps = Readonly<{
  params: { slug: string };
}>;

export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return getAllCampaignSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const campaign = getCampaign(params.slug);
  if (!campaign) {
    return { title: "Not found" };
  }

  const { meta } = campaign;

  const openGraph: Metadata["openGraph"] = {
    title: meta.title,
    description: meta.description,
    type: "website",
  };
  if (meta.ogImage) {
    openGraph.images = [{ url: meta.ogImage, alt: meta.title }];
  }

  const twitter: Metadata["twitter"] = {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
  };
  if (meta.ogImage) {
    twitter.images = [meta.ogImage];
  }

  return {
    title: meta.title,
    description: meta.description,
    openGraph,
    twitter,
  };
}

function buildSectionNames(sections: { type: string }[]): string[] {
  const counts = new Map<string, number>();
  return sections.map((s) => {
    const n = (counts.get(s.type) ?? 0) + 1;
    counts.set(s.type, n);
    return n > 1 ? `${s.type}-${n}` : s.type;
  });
}

export default function CampaignPage({ params }: PageProps) {
  const campaignConfig = getCampaign(params.slug);
  if (!campaignConfig) {
    notFound();
  }

  const { theme } = campaignConfig;
  const sectionNames = buildSectionNames(campaignConfig.sections);

  return (
    <div
      className={cn(
        "min-h-full antialiased",
        theme.darkMode && "dark",
        theme.darkMode
          ? "bg-gray-950 text-gray-50"
          : "bg-white text-gray-900",
      )}
      style={
        {
          "--lp-primary": theme.primaryColor,
          "--lp-accent": theme.accentColor,
        } as CSSProperties
      }
    >
      {campaignConfig.sections.map((section, index) => (
        <TrackSection
          key={`${section.type}-${index}`}
          campaign={params.slug}
          campaignId={campaignConfig.tracking.campaignId}
          sectionName={sectionNames[index]}
        >
          <LpSectionBody
            section={section}
            config={campaignConfig}
            campaign={params.slug}
          />
        </TrackSection>
      ))}
    </div>
  );
}
