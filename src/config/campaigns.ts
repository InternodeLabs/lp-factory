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
  [
    "ai-first-km",
    {
      slug: "ai-first-km",
      meta: {
        title: "Why Your Knowledge Base Goes Stale | Internode",
        description:
          "Wikis go stale because writing and working are separate workflows. AI-first knowledge management makes work the input. 3 months free.",
      },
      theme: {
        primaryColor: "#3B82F6",
        accentColor: "#10B981",
        darkMode: false,
      },
      sections: [
        {
          type: "hero",
          headline: "Prepared for Daniel @ pario.ai: Your Wiki Is Going Stale Because of How You Write, Not Who Writes.",
          subheadline:
            "Pages are an output of writing. Decisions are an output of working. When those are two separate workflows, the wiki always loses. The fix is not more discipline. The fix is a knowledge model where work is the input and structured records are the output.",
          subheadlineEmphasis:
            "It is a workflow problem, not a people problem.",
          ctaText: "Try AI-first knowledge management",
          ctaSubtext: "3 months Pro for free. No credit card.",
        },
        {
          type: "infographic",
          title: "The full picture",
          subtitle:
            "How an AI-first knowledge model breaks the decay chain in one image.",
          image: "/images/ai-first-km/why-wikis-go-stale.png",
          alt: "Infographic comparing the old wiki model to an AI-first knowledge model: conversations become input, structured outcomes become records, every record links to its source moment, and updates are proposed automatically.",
          caption:
            "Old wiki model vs AI-first knowledge model. Same team. Two completely different outcomes.",
          imageWidth: 941,
          imageHeight: 1410,
          maxWidth: "default",
        },
        {
          type: "how-it-works",
          title: "The four moves Internode does for you",
          steps: [
            {
              step: 1,
              title: "Make conversations the input",
              description:
                "Record Zoom, Meet, calls, or ad hoc discussions. Internode plugs into the tools your team already uses.",
            },
            {
              step: 2,
              title: "Extract structured outcomes",
              description:
                "Decisions, tasks, topics, goals, owners, even rejected options. The outcome lives somewhere other than a transcript.",
            },
            {
              step: 3,
              title: "Link every record to its source",
              description:
                "Each decision points back to the meeting, person, task, and prior decision. The trail is always there.",
            },
            {
              step: 4,
              title: "Propose updates automatically",
              description:
                "When reality drifts, the system flags the change. Humans approve instead of rewriting pages.",
            },
          ],
        },
        {
          type: "faq",
          title: "Yeah but...",
          items: [
            {
              question: "Is this just an AI meeting bot?",
              answer:
                "Meeting bots give you a transcript and a summary. Internode gives you a connected decision graph: decisions, owners, tasks, and prior reasoning, linked to every source moment. The transcript is a byproduct, not the output. More on the difference: <a href=\"https://content.internode.ai/ai-meeting-notes-vs-organizational-memory\">AI meeting notes vs organizational memory</a>.",
            },
            {
              question: "What happens to our existing wiki?",
              answer:
                "Internode does not replace your wiki. It changes the source of truth. The working layer (conversations, calls, chats) becomes the input, structured records become the source, and Internode proposes updates to your wiki when reality drifts. Humans still approve. See <a href=\"https://content.internode.ai/internode-vs-notion-as-a-wiki\">Internode vs Notion as a wiki</a> and <a href=\"https://content.internode.ai/ai-native-alternative-to-notion\">an AI-native alternative to Notion</a>.",
            },
            {
              question: "Will my team actually use it?",
              answer:
                "That is the point: there is nothing for them to use. Internode plugs into the meetings, calls, and tools your team already uses. The behavior change is 'do nothing.' Knowledge accumulates as a side effect of working. Read more on <a href=\"https://content.internode.ai/the-knowledge-system-that-builds-itself\">the knowledge system that builds itself</a>.",
            },
            {
              question: "Why is the old wiki model broken?",
              answer:
                "Pages are an output of writing. Decisions are an output of working. When you ask one workflow (working) to feed a different workflow (writing), the wiki loses every time the team is busy. AI-first means those workflows are the same workflow. Background reading: <a href=\"https://content.internode.ai/what-is-institutional-knowledge-and-why-teams-lose-it\">what institutional knowledge is and why teams lose it</a> and <a href=\"https://content.internode.ai/ai-knowledge-base-that-builds-itself\">an AI knowledge base that builds itself</a>.",
            },
            {
              question: "What is the catch with three months free?",
              answer:
                "No catch. No credit card. We are confident: once your team has connected, structured knowledge that updates itself, going back to a snapshot wiki feels like a downgrade you cannot unsee.",
            },
          ],
        },
        {
          type: "final-cta",
          headline: "Run the 30-minute test.",
          subheadline:
            "Pick your next real product call. Record it. Run it through Internode. Compare the output to your hand notes, or to your stale wiki page. If the output is better than the page nobody wrote, the model works.",
          ctaText: "Start the 30-minute test",
          ctaSubtext: "3 months Pro for free. No credit card.",
        },
      ],
      cta: {
        text: "Try AI-first knowledge management",
        href: "https://app.internode.ai",
        style: "primary",
      },
      tracking: {
        campaignId: "ai-first-km-q2-2026",
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
