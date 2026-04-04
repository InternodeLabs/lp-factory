export interface CampaignConfig {
  slug: string;
  meta: {
    title: string;
    description: string;
    ogImage?: string;
  };
  theme: {
    primaryColor: string;
    accentColor: string;
    darkMode: boolean;
  };
  sections: SectionConfig[];
  cta: {
    text: string;
    href: string;
    style: "primary" | "outline" | "ghost";
  };
  tracking: {
    campaignId: string;
    source: string;
    conversionEvent: string;
  };
}

export type SectionConfig =
  | {
      type: "hero";
      headline: string;
      subheadline: string;
      ctaText: string;
      backgroundImage?: string;
    }
  | {
      type: "pain-points";
      title: string;
      points: { icon: string; title: string; description: string }[];
    }
  | {
      type: "features";
      title: string;
      features: { title: string; description: string; icon: string }[];
    }
  | {
      type: "social-proof";
      title: string;
      testimonials: {
        quote: string;
        name: string;
        role: string;
        company: string;
        /** Optional logo URL (remote or same-origin); shows placeholder if omitted */
        logoUrl?: string;
      }[];
    }
  | {
      type: "faq";
      title: string;
      items: { question: string; answer: string }[];
    }
  | {
      type: "final-cta";
      headline: string;
      subheadline: string;
      ctaText: string;
    };
