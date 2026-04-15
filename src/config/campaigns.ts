import type { CampaignConfig } from "./types";

export const campaigns = new Map<string, CampaignConfig>([
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
          headline: "Stop facepalming. Start executing.",
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
  [
    "agent-amnesia",
    {
      slug: "agent-amnesia",
      meta: {
        title:
          "Other AI Tools Start From Scratch. Ours Remembers. | Internode",
        description:
          "AI agents without memory re-read your entire history every single time. Internode is built on persistent organizational memory. 3 months free, no credit card.",
      },
      theme: {
        primaryColor: "#10B981",
        accentColor: "#6366f1",
        darkMode: true,
      },
      sections: [
        {
          type: "hero",
          headline:
            "Other AI Tools Start From Scratch Every Time. Ours Remembers.",
          subheadline:
            "Most AI agents have no memory. Ask them something today and they dig through raw transcripts and Slack threads to figure it out. Ask them tomorrow and they do the exact same work all over again. Internode is different. Our agents are built on persistent organizational memory. Decisions, reasoning, and context your team has already reached. Ready the moment it's needed.",
          subheadlineEmphasis:
            "Encoded context is the new software. LLMs are just the chips.",
          ctaText: "Try Internode Free",
          ctaSubtext: "3 months free. No credit card.",
          heroImage: "/images/decision-facepalm/hero-product.png",
          heroVideo: "JE5BR-Av0zg",
        },
        {
          type: "pain-points",
          title: "This is how every other AI tool works",
          points: [
            {
              icon: "\uD83D\uDD25",
              title: "The re-read tax",
              description:
                "Other tools feed your LLM 40 hours of raw Zoom transcripts every time you ask a question. Tomorrow they feed it the same 40 hours. That is not intelligence. That is a meter running.",
            },
            {
              icon: "\uD83E\uDDD0",
              title: "The context-free guess",
              description:
                "Without a decision history, AI tools guess. They cannot tell you why you chose Vendor A over Vendor B. Just that both were mentioned in a meeting somewhere.",
            },
            {
              icon: "\uD83D\uDCB8",
              title: "The amnesia tax",
              description:
                "Every employee, every question, every day. The same work re-derived from scratch. Token costs scale linearly with amnesia. Marc Andreessen says daily costs are heading to thousands per employee. This is why.",
            },
          ],
        },
        {
          type: "how-it-works",
          title: "What makes Internode different",
          steps: [
            {
              step: 1,
              title: "Connect your conversations",
              description:
                "Plug in your meetings, Slack, and PM tools. Internode ingests the raw material once. Takes about 5 minutes. Your team does not need to install anything.",
              image: "/images/decision-facepalm/step-conversations.png",
            },
            {
              step: 2,
              title: "We build the memory layer",
              description:
                "Internode extracts decisions, reasoning, and relationships. Then it encodes them as persistent, structured knowledge. Not a transcript dump. A decision trail your agents can actually use.",
              image: "/images/decision-facepalm/step-knowledge.png",
            },
            {
              step: 3,
              title: "Our agents use it, instantly",
              description:
                "When you ask Internode a question, the answer draws on the full decision history. No re-reading. No re-deriving. The context is already there.",
              image: "/images/decision-facepalm/step-decisions.png",
            },
          ],
        },
        {
          type: "faq",
          title: "Yeah but...",
          items: [
            {
              question: "Isn't this just RAG?",
              answer:
                "RAG retrieves text chunks that look similar to your query. Internode encodes decisions. Who made them, why, what they affect, and how they connect to everything else. That is a fundamentally different foundation.",
            },
            {
              question:
                "How is this different from ChatGPT / Copilot / other AI tools?",
              answer:
                "Those tools are stateless. They read your files on demand and forget everything between sessions. Internode's agents are built on persistent organizational memory that grows over time. They do not just process. They know.",
            },
            {
              question: "What's the catch with '3 months free'?",
              answer:
                "No catch. No credit card. We are confident that once your team has agents with real memory, going back to stateless tools will feel like a downgrade you cannot unsee.",
            },
            {
              question: "Do I need to change how my team works?",
              answer:
                "No. Internode plugs into your existing meetings, Slack, and PM tools. Your team keeps working the way they already do. Internode builds the memory in the background.",
            },
          ],
        },
        {
          type: "final-cta",
          headline: "Stop paying for organizational amnesia.",
          subheadline:
            "Every other AI tool re-reads your entire history every time. Internode remembers it. 3 months free, no credit card.",
          ctaText: "Try Internode Free",
          ctaSubtext: "We'll email your 3-month Pro code after sign-up.",
        },
      ],
      cta: {
        text: "Try Internode Free",
        href: "https://app.internode.ai",
        style: "primary",
      },
      tracking: {
        campaignId: "agent-amnesia-q2-2026",
        source: "linkedin",
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
