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
      /** Italic emphasis line rendered below the subheadline */
      subheadlineEmphasis?: string;
      ctaText: string;
      ctaSubtext?: string;
      backgroundImage?: string;
      /** Product screenshot displayed below the CTA */
      heroImage?: string;
      /** YouTube video ID — when set, heroImage becomes a click-to-play poster */
      heroVideo?: string;
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
      type: "how-it-works";
      title: string;
      steps: {
        step: number;
        title: string;
        description: string;
        image?: string;
      }[];
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
      type: "live-demo";
      /** Optional heading above the embed */
      title?: string;
      subtitle?: string;
      /** URL loaded inside the inline iframe */
      demoUrl: string;
      /** Static image shown before the visitor activates the embed */
      posterImage?: string;
      /** Label on the activation overlay (default "Try it live") */
      ctaText?: string;
    }
  | {
      type: "tab-showcase";
      title?: string;
      subtitle?: string;
      tabs: {
        icon: string;
        label: string;
        /** Path to the showcase image (SVG, PNG, etc.) */
        image: string;
        /** Alt text for the image */
        alt?: string;
      }[];
    }
  | {
      type: "infographic";
      /** Optional section heading rendered above the image */
      title?: string;
      /** Optional supporting line under the title */
      subtitle?: string;
      /** Path to the infographic image (PNG, SVG, etc.) */
      image: string;
      /** Alt text for the image (required for accessibility + SEO) */
      alt: string;
      /** Optional caption rendered below the image */
      caption?: string;
      /** Image intrinsic width in pixels (used for layout / CLS) */
      imageWidth?: number;
      /** Image intrinsic height in pixels (used for layout / CLS) */
      imageHeight?: number;
      /** Container max width: "narrow" = 2xl, "default" = 3xl, "wide" = 4xl */
      maxWidth?: "narrow" | "default" | "wide";
    }
  | {
      type: "final-cta";
      headline: string;
      subheadline: string;
      ctaText: string;
      ctaSubtext?: string;
    };
