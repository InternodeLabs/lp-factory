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
      /** Small kicker label rendered above the H1 (e.g. "Prepared for Daniel @ Pario") */
      kicker?: string;
      /** Optional URL — when set, the kicker renders as an external link */
      kickerHref?: string;
      /**
       * Co-branded partner header rendered at the top of the hero (MOU style).
       * When set, the Internode + partner logos are centered side-by-side with
       * a soft divider. When unset, the default left-aligned Internode logo block is shown.
       */
      coBrand?: {
        /** Partner display name (alt text + label) */
        name: string;
        /** Partner logo for light backgrounds */
        logo: string;
        /** Partner logo for dark backgrounds (falls back to `logo` if omitted) */
        logoDark?: string;
        /** Logo intrinsic width in pixels */
        logoWidth?: number;
        /** Logo intrinsic height in pixels */
        logoHeight?: number;
        /** Optional URL — when set, the partner logo links here */
        href?: string;
      };
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
      type: "personal-note";
      /** Author display name, e.g. "Istvan Lorincz" */
      from: string;
      /** Short role line, e.g. "Co-founder, Internode" */
      role?: string;
      /** Optional avatar image src */
      avatar?: string;
      /** Initials shown when no avatar (e.g. "IL"); falls back to first char of `from` */
      initials?: string;
      /** Small label above the author line, e.g. "From Istvan" */
      kicker?: string;
      /** Body content as HTML; rendered with set:html so links work */
      body: string;
    }
  | {
      type: "final-cta";
      headline: string;
      subheadline: string;
      ctaText: string;
      ctaSubtext?: string;
    };
