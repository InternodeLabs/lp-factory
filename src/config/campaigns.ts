import type { CampaignConfig } from "./types";

export const campaigns = new Map<string, CampaignConfig>([
  [
    "founders-decision-memory",
    {
      slug: "founders-decision-memory",
      meta: {
        title: "Stop losing decisions in Slack",
        description:
          "Capture decisions automatically, see your decision graph, and keep teams aligned, without another tool to babysit.",
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
                "Decisions live in Slack threads, Notion pages, and meeting notes, yet nobody can find the source of truth.",
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
                "See how choices connect across projects, teams, and time, not just a flat doc archive.",
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
                "No. Think of it as a decision layer on top. Wikis store pages; Internode answers “what did we decide, when, and why?”",
            },
            {
              question: "Is my data secure?",
              answer:
                "We follow industry-standard encryption in transit and at rest, with role-based access so only the right people see sensitive calls.",
            },
            {
              question: "How long does setup take?",
              answer:
                "Most teams connect core sources in under an hour. Deeper workflows roll out as you’re ready, with no big-bang migration.",
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
  [
    "reddit-facepalm",
    {
      slug: "reddit-facepalm",
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
            "Internode isn't a meeting bot. It is a memory engine that remembers decisions, reasoning, and impact: who made them, why, and what they affect; and connects them across time and people. So the next time someone asks 'didn't we already decide this?' the answer is right there when it's needed.",
          ctaText: "Try It Free",
          ctaSubtext:
            "Sign up and we'll send 3 months of Pro to your inbox. No credit card.",
          heroImage: "/images/reddit-facepalm/hero-product.png",
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
          headline: "Break the loop",
          subheadline:
            "Stop re-litigating the same decisions. Sign up and we'll send 3 months of Pro to your inbox.",
          ctaText: "Try It Free",
          ctaSubtext: "No credit card required.",
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
              image: "/images/reddit-facepalm/step-conversations.png",
            },
            {
              step: 2,
              title: "Decisions get captured",
              description:
                "Internode starts where your note takers stop: connect transcripts, notes, emails, chats and Internode takes care of the rest.",
              image: "/images/reddit-facepalm/step-knowledge.png",
            },
            {
              step: 3,
              title: "Your team builds a memory",
              description:
                "Every decision, every idea, every problem is linked, surfaced right when they're needed. New hires read the decision trail instead of asking Dave about that db migration.",
              image: "/images/reddit-facepalm/step-decisions.png",
            },
          ],
        },
        {
          type: "final-cta",
          headline: "Stop facepalming. Start shipping.",
          subheadline:
            "3 months free. No credit card. No commitments. Just a team that finally remembers what it decided.",
          ctaText: "Get Started",
          ctaSubtext:
            "We'll email your 3-month Pro code after sign-up.",
        },
      ],
      cta: {
        text: "Try It Free",
        href: "https://app.internode.ai",
        style: "primary",
      },
      tracking: {
        campaignId: "reddit-facepalm-q2-2026",
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
