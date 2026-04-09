import type { CampaignConfig } from "./types";

export const campaigns = new Map<string, CampaignConfig>([
  [
    "try-internode",
    {
      slug: "try-internode",
      meta: {
        title: "Try Internode — Interactive Product Demo | Internode",
        description:
          "See Internode in action. Click through an interactive prototype and explore how decisions are captured, linked, and surfaced.",
      },
      theme: {
        primaryColor: "#6366f1",
        accentColor: "#22d3ee",
        darkMode: true,
      },
      sections: [
        {
          type: "hero",
          headline: "See It in Action. Right Here.",
          subheadline:
            "Click through an interactive prototype of Internode. Explore how decisions are captured, linked, and surfaced — no signup needed.",
          ctaText: "Sign Up for Free",
        },
        {
          type: "live-demo",
          title: "Explore the product",
          subtitle:
            "Click around the interactive prototype below — this is what your team's decision memory looks like.",
          demoUrl: "https://embed.figma.com/proto/UloTqTUaC5udIgutafB2xn/Product-Interface--Live-?node-id=6625-15867&scaling=fit-width&content-scaling=fixed&starting-point-node-id=6625%3A15537&page-id=5745%3A7207&embed-host=share&hide-ui=1&footer=false",
        },
        {
          type: "final-cta",
          headline: "Ready to build your team's decision memory?",
          subheadline: "You've seen the product. Now make it yours.",
          ctaText: "Get Started Free",
        },
      ],
      cta: {
        text: "Sign Up for Free",
        href: "https://app.internode.ai",
        style: "primary",
      },
      tracking: {
        campaignId: "try-internode-q2-2026",
        source: "direct",
        conversionEvent: "signup_click",
      },
    } satisfies CampaignConfig,
  ],
  [
    "decision-facepalm",
    {
      slug: "decision-facepalm",
      meta: {
        title: "That Decision Was Made 3 Weeks Ago | Internode",
        description:
          "You watched two engineers argue about a decision that was already made. Internode makes sure that never happens again. 3 months free, no credit card.",
      },
      theme: {
        primaryColor: "#F97316",
        accentColor: "#FBBF24",
        darkMode: true,
      },
      sections: [
        {
          type: "hero",
          headline:
            "That Decision Was Made Three Weeks Ago. Nobody Wrote It Down.",
          subheadline:
            "Internode is a memory engine that remembers decisions, reasoning, and impact: who made them, why, and what they affect.",
          subheadlineEmphasis:
            "So the next time you ask 'didn't we already decide this?', the answer is right there when it's needed.",
          ctaText: "Give Your Team a Memory",
          ctaSubtext: "3 months free. No credit card.",
          heroImage: "/images/decision-facepalm/hero-product.png",
          heroVideo: "JE5BR-Av0zg",
        },
        {
          type: "pain-points",
          title: "Sound familiar?",
          points: [
            {
              icon: "\uD83E\uDD26",
              title: "The d\u00e9j\u00e0 vu standup",
              description:
                "Three people, three different memories of what was decided. A fourth wasn't in the meeting. A fifth was, but was multitasking.",
            },
            {
              icon: "\uD83D\uDD0D",
              title: "The Slack archaeology expedition",
              description:
                "Everyone agrees you decided this. Nobody can find where. 40 minutes later, you just decide again.",
            },
            {
              icon: "\uD83C\uDFAC",
              title: "The Groundhog Day meeting",
              description:
                "Same topic. Same arguments. Same people. Different Tuesday.",
            },
          ],
        },
        {
          type: "how-it-works",
          title: "How it works",
          steps: [
            {
              step: 1,
              title: "Connect your tools",
              description:
                "Plug in your meetings, Slack, and PM tool. Takes about 5 minutes. Your team doesn't need to install anything.",
              image: "/images/decision-facepalm/step-conversations.png",
            },
            {
              step: 2,
              title: "Decisions get captured",
              description:
                "Internode starts where your note takers stop: connect transcripts, notes, emails, chats and Internode takes care of the rest.",
              image: "/images/decision-facepalm/step-knowledge.png",
            },
            {
              step: 3,
              title: "Your team builds a memory",
              description:
                "Every decision, every idea, every problem is linked, surfaced right when they're needed. New hires read the decision trail instead of asking Dave about that db migration.",
              image: "/images/decision-facepalm/step-decisions.png",
            },
          ],
        },
        {
          type: "faq",
          title: "Yeah but...",
          items: [
            {
              question: "Is this just another meeting bot?",
              answer:
                "Meeting bots give you a transcript. Congratulations, you now have 47 minutes of audio to re-listen to. Internode pulls out the decisions: the 2 minutes that actually mattered, and links them to your projects, tasks, and team.",
            },
            {
              question: "We already use Notion/Confluence for this",
              answer:
                "Great, so you have a wiki page where someone was supposed to document the decision but didn't. Internode captures decisions automatically from where they happen: meetings, Slack, wherever, so they exist even when humans forget.",
            },
            {
              question: "What's the catch with '3 months free'?",
              answer:
                "No catch. Sign up, and we email you a code for 3 months of Pro. No credit card required. No 'surprise, you're on annual billing now.' We're betting that once your team has a shared memory, you won't go back.",
            },
            {
              question: "My team hates adopting new tools",
              answer:
                "Good news: there's nothing to adopt. Internode plugs into your meetings, your Slack, your existing PM tool. Your team doesn't adopt Internode: Internode adopts your team.",
            },
          ],
        },
        {
          type: "final-cta",
          headline: "Stop facepalming. Start shipping.",
          subheadline:
            "3 months free. No credit card. No commitments. Just a team that finally remembers what it decided.",
          ctaText: "Give Your Team a Memory",
          ctaSubtext:
            "We'll email your 3-month Pro code after sign-up.",
        },
      ],
      cta: {
        text: "Give Your Team a Memory",
        href: "https://app.internode.ai",
        style: "primary",
      },
      tracking: {
        campaignId: "decision-facepalm-q2-2026",
        source: "reddit",
        conversionEvent: "signup_click",
      },
    } satisfies CampaignConfig,
  ],
]);

export function getCampaign(slug: string): CampaignConfig | undefined {
  return campaigns.get(slug);
}

export function getAllCampaignSlugs(): string[] {
  return Array.from(campaigns.keys());
}
