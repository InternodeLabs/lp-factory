import type { CampaignConfig } from "./types";

export const campaigns = new Map<string, CampaignConfig>([
  [
    "founders-decision-memory",
    {
      slug: "founders-decision-memory",
      meta: {
        title: "Stop losing decisions in Slack | Internode",
        description:
          "Capture decisions automatically, see your decision graph, and keep teams aligned—without another tool to babysit.",
      },
      theme: {
        primaryColor: "#6366f1",
        accentColor: "#22d3ee",
        darkMode: true,
      },
      sections: [
        {
          type: "hero",
          headline: "Stop Losing Decisions in Slack Threads and Meeting Notes",
          subheadline:
            "Internode captures decisions where they happen and keeps a living record your whole team can trust.",
          ctaText: "Start Capturing Decisions",
        },
        {
          type: "pain-points",
          title: "Why decisions slip through the cracks",
          points: [
            {
              icon: "🧩",
              title: "Scattered across tools",
              description:
                "Decisions live in Slack threads, Notion pages, and meeting notes—nobody can find the source of truth.",
            },
            {
              icon: "🚪",
              title: "Context walks out the door",
              description:
                "When someone leaves or switches teams, the rationale behind past calls disappears with them.",
            },
            {
              icon: "🔁",
              title: "The same debate, twice",
              description:
                "Without a shared decision log, teams rehash old conversations instead of shipping the next thing.",
            },
          ],
        },
        {
          type: "features",
          title: "Built for how you already work",
          features: [
            {
              icon: "⚡",
              title: "Automatic decision capture",
              description:
                "Surface and record decisions from conversations so nothing important is left implicit.",
            },
            {
              icon: "🕸️",
              title: "Decision graph",
              description:
                "See how choices connect across projects, teams, and time—not just a flat doc archive.",
            },
            {
              icon: "📈",
              title: "Team alignment tracking",
              description:
                "Know who’s on the same page and where follow-ups still matter before they become blockers.",
            },
          ],
        },
        {
          type: "social-proof",
          title: "Teams shipping with clarity",
          testimonials: [
            {
              quote:
                "We finally stopped re-litigating the same roadmap calls. The decision trail is worth it alone.",
              name: "Alex Rivera",
              role: "VP Engineering",
              company: "Northline Systems",
            },
            {
              quote:
                "Onboarding used to mean weeks of Slack archaeology. Now new leads read decisions, not threads.",
              name: "Jordan Kim",
              role: "Head of Product",
              company: "Relayboard",
            },
            {
              quote:
                "It’s the first tool our exec team actually checks before strategy offsites.",
              name: "Sam Okonkwo",
              role: "COO",
              company: "Brightforge",
            },
          ],
        },
        {
          type: "faq",
          title: "Common questions",
          items: [
            {
              question: "How does Internode capture decisions?",
              answer:
                "Internode connects to the places your team already works and helps extract, link, and summarize decisions so they’re searchable and attributable.",
            },
            {
              question: "Will this replace our wiki or project tool?",
              answer:
                "No—think of it as a decision layer on top. Wikis store pages; Internode answers “what did we decide, when, and why?”",
            },
            {
              question: "Is my data secure?",
              answer:
                "We follow industry-standard encryption in transit and at rest, with role-based access so only the right people see sensitive calls.",
            },
            {
              question: "How long does setup take?",
              answer:
                "Most teams connect core sources in under an hour. Deeper workflows roll out as you’re ready—no big-bang migration.",
            },
          ],
        },
        {
          type: "final-cta",
          headline: "Ready to keep every decision in one place?",
          subheadline:
            "Join teams who’ve stopped losing context in endless threads.",
          ctaText: "Start Capturing Decisions",
        },
      ],
      cta: {
        text: "Start Capturing Decisions",
        href: "https://app.internode.ai",
        style: "primary",
      },
      tracking: {
        campaignId: "founders-q2-2026",
        source: "linkedin",
        conversionEvent: "signup_click",
      },
    },
  ],
]);

export function getCampaign(slug: string): CampaignConfig | undefined {
  return campaigns.get(slug);
}

export function getAllCampaignSlugs(): string[] {
  return Array.from(campaigns.keys());
}
