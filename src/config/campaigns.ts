import type { CampaignConfig } from "./types";

export const campaigns = new Map<string, CampaignConfig>([
  [
    "founders-decision-memory",
    {
      slug: "founders-decision-memory",
      meta: {
        title: "Stop losing decisions in Slack",
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
  [
    "reddit-facepalm",
    {
      slug: "reddit-facepalm",
      meta: {
        title: "That Decision Was Made 3 Weeks Ago | Internode",
        description:
          "You watched two engineers argue about a decision that was already made. Internode makes sure that never happens again. 6 months free, no credit card.",
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
            "You clicked because you\u2019ve been there \u2014 watching the same debate unfold for the third time, facepalming so hard you leave a mark. What if your team actually remembered what it decided?",
          ctaText: "Try 6 Months Free \u2014 No Credit Card",
        },
        {
          type: "pain-points",
          title: "You\u2019ve seen all of these. Probably this week.",
          points: [
            {
              icon: "\uD83E\uDD26",
              title: "The d\u00e9j\u00e0 vu standup",
              description:
                "Someone brings up \u2018the thing we discussed\u2019 and three people have three different memories of what was decided. A fourth wasn\u2019t in that meeting. A fifth was, but was multitasking.",
            },
            {
              icon: "\uD83D\uDD0D",
              title: "The Slack archaeology expedition",
              description:
                "\u2018Didn\u2019t we already decide this?\u2019 Everyone agrees you did. Nobody can find where. 40 minutes of thread-scrolling later, you just\u2026 decide again.",
            },
            {
              icon: "\uD83C\uDFAC",
              title: "The Groundhog Day meeting",
              description:
                "Same topic. Same arguments. Same people. Different Tuesday. You sit there with the quiet resignation of someone who knows exactly how this movie ends.",
            },
          ],
        },
        {
          type: "features",
          title: "This is how you break the loop",
          features: [
            {
              icon: "\u26A1",
              title: "Decisions get captured, not forgotten",
              description:
                "Internode joins your meetings and reads your threads. It extracts the actual decisions \u2014 who made them, why, and what they affect \u2014 without anyone needing to take notes.",
            },
            {
              icon: "\uD83E\uDDE0",
              title: "Your team gets a shared memory",
              description:
                "Every decision is linked, searchable, and attributed. When someone asks \u2018why did we choose X?\u2019 the answer exists \u2014 even if the person who made the call left six months ago.",
            },
            {
              icon: "\uD83C\uDFAF",
              title: "Tasks know why they exist",
              description:
                "When you pick up a task, the full reasoning is right there: the decision behind it, the constraints, the context. No more \u2018wait, why are we doing this again?\u2019",
            },
          ],
        },
        {
          type: "social-proof",
          title: "From fellow facepalm survivors",
          testimonials: [
            {
              quote:
                "We had what we called \u2018The Postgres Debate.\u2019 It resurfaced every quarter for two years. After Internode, it came up zero times. Zero.",
              name: "Sarah Chen",
              role: "Engineering Lead",
              company: "Stackframe",
            },
            {
              quote:
                "I spent half my week making sure people remembered what we decided last week. Now I actually do product work.",
              name: "Mike Okafor",
              role: "Product Manager",
              company: "Clearpath",
            },
            {
              quote:
                "Onboarding used to be \u2018go ask Dave, he was in that meeting.\u2019 Now new hires read the decision trail. Dave is much happier.",
              name: "Rachel Torres",
              role: "VP Engineering",
              company: "Gridline",
            },
          ],
        },
        {
          type: "faq",
          title: "Yeah but\u2026",
          items: [
            {
              question: "Is this just another meeting bot?",
              answer:
                "Meeting bots give you a transcript. Congratulations, you now have 47 minutes of audio to re-listen to. Internode pulls out the decisions \u2014 the 2 minutes that actually mattered \u2014 and links them to your projects, tasks, and team.",
            },
            {
              question: "We already use Notion/Confluence for this",
              answer:
                "Great, so you have a wiki page where someone was supposed to document the decision but didn\u2019t. Internode captures decisions automatically from where they happen \u2014 meetings, Slack, wherever \u2014 so they exist even when humans forget.",
            },
            {
              question: "What\u2019s the catch with \u20186 months free\u2019?",
              answer:
                "No catch. No credit card required. No \u2018surprise, you\u2019re on annual billing now.\u2019 We\u2019re betting that once your team has a shared decision memory, you won\u2019t go back. That\u2019s the whole play.",
            },
            {
              question: "My team hates adopting new tools",
              answer:
                "Good news: there\u2019s nothing to adopt. Internode plugs into your meetings, your Slack, your existing PM tool. Your team doesn\u2019t adopt Internode \u2014 Internode adopts your team.",
            },
          ],
        },
        {
          type: "final-cta",
          headline: "Stop facepalming. Start shipping.",
          subheadline:
            "6 months free. No credit card. No commitments. Just a team that finally remembers what it decided.",
          ctaText: "Get 6 Months Free",
        },
      ],
      cta: {
        text: "Get 6 Months Free",
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
