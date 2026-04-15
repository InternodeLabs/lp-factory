"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

const ANSWER_FORMAT =
  "+Then+answer+in+four+parts:" +
  "+(1)+Why+this+happens,+in+2-3+sentences." +
  "+(2)+What+to+do+about+it,+as+a+short+list." +
  "+(3)+How+Internode+specifically+solves+this,+based+on+what+the+pages+describe." +
  "+(4)+One+concrete+thing+I+can+try+this+week." +
  "+Keep+it+under+400+words.+No+filler,+no+emojis.";

const PROMPTS = [
  {
    label:
      "I spend more time updating tasks than doing them. How can I automate it?",
    query:
      "I+spend+half+my+day+copying+stuff+between+tools,+updating+task+descriptions,+and+fixing+things+that+got+out+of+sync." +
      "+Read+these+pages+for+context:" +
      "+content.internode.ai/how-to-capture-decisions-from-meetings-without-writing-everything-down" +
      "+content.internode.ai/how-to-connect-meeting-decisions-to-project-tasks" +
      "+content.internode.ai/the-knowledge-system-that-builds-itself" +
      ANSWER_FORMAT,
  },
  {
    label:
      "I hold my boss\u2019s entire world together in my head. Is there a better way?",
    query:
      "I+am+an+executive+assistant+and+I+track+every+follow-up,+birthday,+preference,+and+promise+my+boss+made+across+dozens+of+meetings+a+week.+If+I+miss+one+thing+it+reflects+badly+on+both+of+us." +
      "+Read+these+pages+for+context:" +
      "+content.internode.ai/how-executive-assistants-stop-being-the-only-person-who-remembers" +
      "+content.internode.ai/how-to-build-a-briefing-system-that-does-not-depend-on-memory" +
      "+content.internode.ai/use-case-executive-assistant-tracking-decisions-across-meetings" +
      ANSWER_FORMAT,
  },
  {
    label:
      "We keep having the same meeting. Why does this happen?",
    query:
      "My+team+keeps+having+the+same+discussions+because+nobody+remembers+what+we+already+decided." +
      "+Read+these+pages+for+context:" +
      "+content.internode.ai/why-your-team-keeps-rediscussing-the-same-decisions" +
      "+content.internode.ai/what-changes-when-your-team-actually-remembers-what-was-decided" +
      "+content.internode.ai/how-to-capture-decisions-from-meetings-without-writing-everything-down" +
      ANSWER_FORMAT,
  },
  {
    label: "I forget why half my tasks exist. How do I fix that?",
    query:
      "I+look+at+my+task+list+and+half+the+items+lost+their+context+because+nobody+wrote+down+why+they+were+created." +
      "+Read+these+pages+for+context:" +
      "+content.internode.ai/how-to-capture-decisions-from-meetings-without-writing-everything-down" +
      "+content.internode.ai/the-hidden-cost-of-scattered-knowledge-at-work" +
      "+content.internode.ai/how-to-connect-meeting-decisions-to-project-tasks" +
      ANSWER_FORMAT,
  },
  {
    label: "My second brain became a second job. What actually works?",
    query:
      "I+have+tried+Notion+and+Obsidian+but+I+spend+more+time+organizing+my+notes+than+using+them." +
      "+Read+these+pages+for+context:" +
      "+content.internode.ai/why-your-second-brain-keeps-failing" +
      "+content.internode.ai/ai-first-vs-ai-added-why-bolting-ai-onto-notion-is-not-enough" +
      "+content.internode.ai/knowledge-management-for-people-who-gave-up-on-knowledge-management" +
      ANSWER_FORMAT,
  },
  {
    label:
      "Nobody wrote down what was said on the call. How do we stop this?",
    query:
      "Someone+on+my+team+took+a+call+and+nobody+wrote+down+what+was+agreed.+Now+we+have+to+call+back+and+ask+again." +
      "+Read+these+pages+for+context:" +
      "+content.internode.ai/how-to-turn-phone-calls-into-searchable-business-knowledge" +
      "+content.internode.ai/how-small-businesses-stop-losing-information-from-phone-calls" +
      "+content.internode.ai/use-case-small-business-capturing-phone-call-decisions" +
      ANSWER_FORMAT,
  },
  {
    label:
      "If I\u2019m out sick, nobody knows anything. Can I fix that?",
    query:
      "If+I+take+a+sick+day+everything+falls+apart+because+all+the+important+details+live+in+my+head+and+nowhere+else." +
      "+Read+these+pages+for+context:" +
      "+content.internode.ai/what-is-institutional-knowledge-and-why-teams-lose-it" +
      "+content.internode.ai/the-hidden-cost-of-scattered-knowledge-at-work" +
      "+content.internode.ai/what-changes-when-your-team-actually-remembers-what-was-decided" +
      ANSWER_FORMAT,
  },
];

function FaviconImg({ domain, alt }: { domain: string; alt: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
      alt={alt}
      width={20}
      height={20}
      className="size-5 rounded-sm"
      loading="lazy"
    />
  );
}

const AI_ASSISTANTS = [
  { name: "ChatGPT", domain: "chatgpt.com", urlTemplate: "https://chatgpt.com/?hints=search&prompt=" },
  { name: "Claude", domain: "claude.ai", urlTemplate: "https://claude.ai/new?q=" },
  { name: "Perplexity", domain: "perplexity.ai", urlTemplate: "https://www.perplexity.ai/search?q=" },
  { name: "Grok", domain: "grok.com", urlTemplate: "https://grok.com/?q=" },
] as const;

export function AskYourAI() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePrompt = PROMPTS[activeIndex];

  return (
    <section className="mt-14 rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 sm:px-6">
      <h2 className="text-lg font-semibold text-zinc-950">
        Ask your AI assistant
      </h2>
      <p className="mt-1 text-sm text-zinc-600">
        Pick a question that sounds like yours, then open it in the AI you
        prefer.
      </p>

      <div className="mt-4 grid gap-2">
        {PROMPTS.map((prompt, i) => (
          <button
            key={prompt.label}
            type="button"
            onClick={() => setActiveIndex(i)}
            className={cn(
              "rounded-lg border px-4 py-2.5 text-left text-sm transition-colors",
              i === activeIndex
                ? "border-zinc-900 bg-zinc-900 text-white"
                : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400 hover:text-zinc-900",
            )}
          >
            {prompt.label}
          </button>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {AI_ASSISTANTS.map((ai) => (
          <a
            key={ai.name}
            href={`${ai.urlTemplate}${activePrompt.query}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-950"
          >
            <FaviconImg domain={ai.domain} alt={ai.name} />
            {ai.name}
          </a>
        ))}
      </div>
    </section>
  );
}
