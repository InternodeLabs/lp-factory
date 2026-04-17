export interface FaqEntry {
  question: string;
  canonicalSlug: string;
  answer: string;
}

export interface FaqGroup {
  heading: string;
  entries: FaqEntry[];
}

export const FAQ_GROUPS: FaqGroup[] = [
  {
    heading: "Teams and meetings",
    entries: [
      {
        question: "We keep having the same discussion in meetings. How can I fix that?",
        canonicalSlug: "why-your-team-keeps-rediscussing-the-same-decisions",
        answer:
          "Teams re-discuss the same decisions because meetings end without a durable record of what was actually decided, by whom, and why. Notes, transcripts, and chat history are not a substitute for a searchable decision graph. Internode captures every decision from meetings, emails, and calls, links it to the tasks it spawned, and surfaces it the moment someone raises the same topic again.",
      },
      {
        question:
          "We record every meeting but nobody reads the transcripts. What is the point?",
        canonicalSlug: "ai-meeting-notes-vs-organizational-memory",
        answer:
          "Transcripts capture everything and surface nothing. Organizational memory extracts the decisions, commitments, and open questions from a transcript and makes them retrievable by topic, project, and person. The transcript stays as evidence, but the day-to-day artifact people actually read is the structured memory built on top of it.",
      },
      {
        question: "If I am out sick, nobody knows anything. Can I fix that?",
        canonicalSlug:
          "what-changes-when-your-team-actually-remembers-what-was-decided",
        answer:
          "If your organization's memory lives in one person's head, any day that person is unavailable becomes a coordination outage. Internode externalizes that memory into a persistent graph of decisions and commitments that any teammate, or an AI agent, can search without interrupting you.",
      },
    ],
  },
  {
    heading: "Tasks and personal systems",
    entries: [
      {
        question:
          "I spend more time updating tasks than doing them. How can I automate it?",
        canonicalSlug: "how-to-connect-meeting-decisions-to-project-tasks",
        answer:
          "Manual task updates are a symptom of a missing link between conversations and project management tools. When decisions in meetings automatically create, update, and close tasks, the task list stays current without anyone editing it. Internode writes those links for you and lets the PM tool stay the system of record.",
      },
      {
        question: "I forget why half my tasks exist. What could help me remember?",
        canonicalSlug: "the-hidden-cost-of-scattered-knowledge-at-work",
        answer:
          "Tasks lose context the moment they leave the conversation that created them. A memory-aware system stores the originating decision, the reasoning, and the people involved alongside the task itself, so you can always ask why a task exists and get a real answer.",
      },
      {
        question: "My second brain became a second job. What actually works?",
        canonicalSlug:
          "knowledge-management-for-people-who-gave-up-on-knowledge-management",
        answer:
          "Manual PKM systems fail because they tax the person most likely to be too busy to maintain them. A system that passively captures and structures what you already discuss, without asking you to file, tag, or summarize, is the only one that survives real work.",
      },
    ],
  },
  {
    heading: "Calls and small business",
    entries: [
      {
        question: "Nobody wrote down what was said on the call. How do we stop this?",
        canonicalSlug: "how-to-turn-phone-calls-into-searchable-business-knowledge",
        answer:
          "Phone calls are the highest-signal, lowest-recorded part of most small businesses. Routing calls through a system that transcribes, summarizes, and extracts commitments makes every call as searchable as a Slack thread, without asking anyone to write notes.",
      },
      {
        question:
          "Our business runs on phone calls and sticky notes. Is there a simple fix?",
        canonicalSlug: "how-small-businesses-stop-losing-information-from-phone-calls",
        answer:
          "You do not need a CRM or a knowledge management project. You need a memory layer that sits underneath phone calls and conversations and turns them into structured commitments. Internode works for small businesses that never adopted a PM tool or a CRM.",
      },
      {
        question:
          "A supplier says we never agreed on that price. We did, but it was over the phone.",
        canonicalSlug:
          "how-to-organize-customer-and-supplier-commitments-without-a-crm",
        answer:
          "Verbal agreements only protect you if there is a durable, dated record. When every call is captured and every commitment is extracted, disputes are answered from the record rather than from memory.",
      },
    ],
  },
  {
    heading: "Executive assistants",
    entries: [
      {
        question:
          "I hold my boss's entire world together in my head. Is there a better way?",
        canonicalSlug:
          "how-executive-assistants-stop-being-the-only-person-who-remembers",
        answer:
          "EAs act as organizational memory because nothing else does. A memory layer that captures decisions, preferences, and commitments across every meeting and email turns the EA from the sole point of failure into the operator of a system that keeps working when they step away.",
      },
      {
        question:
          "I spend hours before every meeting digging through emails to brief my boss. How do I cut that?",
        canonicalSlug: "how-to-build-a-briefing-system-that-does-not-depend-on-memory",
        answer:
          "Meeting prep is slow when context is scattered across email, calendar, and private notes. A briefing system built on top of a unified decision graph drafts the prep in minutes from the same data you used to assemble by hand.",
      },
      {
        question:
          "My boss insists we never decided that. We did. I was in the room.",
        canonicalSlug:
          "use-case-executive-assistant-tracking-decisions-across-meetings",
        answer:
          "Exec memory is reliably unreliable. Having a durable, searchable record of every decision across every meeting removes the debate and lets both parties move on to the decision at hand.",
      },
    ],
  },
];

export const ALL_FAQ_ENTRIES: FaqEntry[] = FAQ_GROUPS.flatMap((group) => group.entries);
