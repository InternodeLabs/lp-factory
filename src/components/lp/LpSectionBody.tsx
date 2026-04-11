import type { CampaignConfig, SectionConfig } from "@/config/types";

import { CTA } from "./CTA";
import { FAQ } from "./FAQ";
import { Features } from "./Features";
import { Hero } from "./Hero";
import { HowItWorks } from "./HowItWorks";
import { LiveDemo } from "./LiveDemo";
import { PainPoints } from "./PainPoints";
import { SocialProof } from "./SocialProof";
import { TabShowcase } from "./TabShowcase";

export function LpSectionBody({
  section,
  config,
  campaign,
}: Readonly<{
  section: SectionConfig;
  config: CampaignConfig;
  campaign: string;
}>) {
  const { darkMode } = config.theme;

  switch (section.type) {
    case "hero":
      return <Hero section={section} config={config} campaign={campaign} />;
    case "pain-points":
      return <PainPoints section={section} darkMode={darkMode} />;
    case "features":
      return <Features section={section} darkMode={darkMode} />;
    case "how-it-works":
      return <HowItWorks section={section} darkMode={darkMode} />;
    case "live-demo":
      return <LiveDemo section={section} config={config} campaign={campaign} />;
    case "tab-showcase":
      return (
        <TabShowcase
          section={section}
          darkMode={darkMode}
          campaign={campaign}
          campaignId={config.tracking.campaignId}
        />
      );
    case "social-proof":
      return <SocialProof section={section} darkMode={darkMode} />;
    case "faq":
      return <FAQ section={section} darkMode={darkMode} />;
    case "final-cta":
      return <CTA section={section} config={config} campaign={campaign} />;
  }
}
