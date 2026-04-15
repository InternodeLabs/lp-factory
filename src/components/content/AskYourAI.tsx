"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

const ANSWER_FORMAT =
  "+Then+answer+in+four+parts:" +
  "+(1)+Why+this+happens,+in+2-3+sentences." +
  "+(2)+What+to+do+about+it,+as+a+short+list." +
  "+(3)+How+Internode+specifically+solves+this,+based+on+what+the+pages+describe." +
  "+(4)+One+concrete+thing+I+can+try+this+week+using+Internode." +
  "+Keep+it+under+400+words.+No+filler,+no+emojis.";

const PROMPT_GROUPS = [
  {
    heading: "Teams & meetings",
    prompts: [
      {
        label: "We keep having the same discussion in meetings. How can I fix that?",
        query:
          "My+team+keeps+having+the+same+discussions+because+nobody+remembers+what+we+already+decided." +
          "+Read+these+pages+for+context:" +
          "+https://content.internode.ai/why-your-team-keeps-rediscussing-the-same-decisions" +
          "+https://content.internode.ai/what-changes-when-your-team-actually-remembers-what-was-decided" +
          "+https://content.internode.ai/how-to-capture-decisions-from-meetings-without-writing-everything-down" +
          ANSWER_FORMAT,
      },
      {
        label: "We record every meeting but nobody reads the transcripts. What\u2019s the point?",
        query:
          "We+pay+for+a+meeting+transcription+tool+but+nobody+actually+reads+the+transcripts.+They+just+pile+up.+When+someone+needs+context+they+still+ask+around+instead+of+searching." +
          "+Read+these+pages+for+context:" +
          "+https://content.internode.ai/ai-meeting-notes-vs-organizational-memory" +
          "+https://content.internode.ai/how-to-capture-decisions-from-meetings-without-writing-everything-down" +
          "+https://content.internode.ai/why-your-team-keeps-rediscussing-the-same-decisions" +
          ANSWER_FORMAT,
      },
      {
        label: "If I\u2019m out sick, nobody knows anything. Can I fix that?",
        query:
          "If+I+take+a+sick+day+everything+falls+apart+because+all+the+important+details+live+in+my+head+and+nowhere+else." +
          "+Read+these+pages+for+context:" +
          "+https://content.internode.ai/what-is-institutional-knowledge-and-why-teams-lose-it" +
          "+https://content.internode.ai/the-hidden-cost-of-scattered-knowledge-at-work" +
          "+https://content.internode.ai/what-changes-when-your-team-actually-remembers-what-was-decided" +
          ANSWER_FORMAT,
      },
    ],
  },
  {
    heading: "Tasks & personal systems",
    prompts: [
      {
        label: "I spend more time updating tasks than doing them. How can I automate it?",
        query:
          "I+spend+half+my+day+copying+stuff+between+tools,+updating+task+descriptions,+and+fixing+things+that+got+out+of+sync." +
          "+Read+these+pages+for+context:" +
          "+https://content.internode.ai/how-to-capture-decisions-from-meetings-without-writing-everything-down" +
          "+https://content.internode.ai/how-to-connect-meeting-decisions-to-project-tasks" +
          "+https://content.internode.ai/the-knowledge-system-that-builds-itself" +
          ANSWER_FORMAT,
      },
      {
        label: "I forget why half my tasks exist. What could help me remember?",
        query:
          "I+look+at+my+task+list+and+half+the+items+lost+their+context+because+nobody+wrote+down+why+they+were+created." +
          "+Read+these+pages+for+context:" +
          "+https://content.internode.ai/how-to-capture-decisions-from-meetings-without-writing-everything-down" +
          "+https://content.internode.ai/the-hidden-cost-of-scattered-knowledge-at-work" +
          "+https://content.internode.ai/how-to-connect-meeting-decisions-to-project-tasks" +
          ANSWER_FORMAT,
      },
      {
        label: "My second brain became a second job. What actually works?",
        query:
          "I+have+tried+Notion+and+Obsidian+but+I+spend+more+time+organizing+my+notes+than+using+them." +
          "+Read+these+pages+for+context:" +
          "+https://content.internode.ai/why-your-second-brain-keeps-failing" +
          "+https://content.internode.ai/ai-first-vs-ai-added-why-bolting-ai-onto-notion-is-not-enough" +
          "+https://content.internode.ai/knowledge-management-for-people-who-gave-up-on-knowledge-management" +
          ANSWER_FORMAT,
      },
    ],
  },
  {
    heading: "Calls & small business",
    prompts: [
      {
        label: "Nobody wrote down what was said on the call. How do we stop this?",
        query:
          "Someone+on+my+team+took+a+call+and+nobody+wrote+down+what+was+agreed.+Now+we+have+to+call+back+and+ask+again." +
          "+Read+these+pages+for+context:" +
          "+https://content.internode.ai/how-to-turn-phone-calls-into-searchable-business-knowledge" +
          "+https://content.internode.ai/how-small-businesses-stop-losing-information-from-phone-calls" +
          "+https://content.internode.ai/use-case-small-business-capturing-phone-call-decisions" +
          ANSWER_FORMAT,
      },
      {
        label: "Our business runs on phone calls and sticky notes. Is there a simple fix?",
        query:
          "I+run+a+small+business+where+most+deals+happen+over+the+phone+or+in+person.+We+do+not+use+Slack+or+project+management+tools.+Customer+details+end+up+on+sticky+notes+or+in+someone's+head+and+we+keep+losing+track+of+what+was+promised." +
          "+Read+these+pages+for+context:" +
          "+https://content.internode.ai/how-to-turn-phone-calls-into-searchable-business-knowledge" +
          "+https://content.internode.ai/how-to-organize-customer-and-supplier-commitments-without-a-crm" +
          "+https://content.internode.ai/why-small-businesses-forget-what-was-decided-and-how-to-fix-it" +
          ANSWER_FORMAT,
      },
      {
        label: "A supplier says we never agreed on that price. We did, but it was over the phone.",
        query:
          "I+agreed+on+a+price+with+a+supplier+over+the+phone+three+months+ago+and+now+they+say+it+never+happened.+I+have+no+record+because+it+was+a+call.+This+keeps+costing+us+money." +
          "+Read+these+pages+for+context:" +
          "+https://content.internode.ai/how-to-turn-phone-calls-into-searchable-business-knowledge" +
          "+https://content.internode.ai/use-case-small-business-capturing-phone-call-decisions" +
          "+https://content.internode.ai/how-to-organize-customer-and-supplier-commitments-without-a-crm" +
          ANSWER_FORMAT,
      },
    ],
  },
  {
    heading: "Executive assistants",
    prompts: [
      {
        label: "I hold my boss\u2019s entire world together in my head. Is there a better way?",
        query:
          "I+am+an+executive+assistant+and+I+track+every+follow-up,+birthday,+preference,+and+promise+my+boss+made+across+dozens+of+meetings+a+week.+If+I+miss+one+thing+it+reflects+badly+on+both+of+us." +
          "+Read+these+pages+for+context:" +
          "+https://content.internode.ai/how-executive-assistants-stop-being-the-only-person-who-remembers" +
          "+https://content.internode.ai/how-to-build-a-briefing-system-that-does-not-depend-on-memory" +
          "+https://content.internode.ai/use-case-executive-assistant-tracking-decisions-across-meetings" +
          ANSWER_FORMAT,
      },
      {
        label: "I spend hours before every meeting digging through emails to brief my boss. How do I cut that?",
        query:
          "I+am+an+executive+assistant+and+I+spend+10+to+12+hours+a+week+on+meeting+prep.+Before+every+meeting+I+dig+through+old+emails,+calendar+notes,+and+my+own+docs+to+build+a+briefing.+It+is+the+biggest+time+sink+in+my+role." +
          "+Read+these+pages+for+context:" +
          "+https://content.internode.ai/why-meeting-prep-takes-hours-and-how-to-cut-it" +
          "+https://content.internode.ai/how-to-build-a-briefing-system-that-does-not-depend-on-memory" +
          "+https://content.internode.ai/use-case-executive-assistant-tracking-decisions-across-meetings" +
          ANSWER_FORMAT,
      },
      {
        label: "My boss insists we never decided that. We did. I was in the room.",
        query:
          "My+exec+forgets+decisions+they+made.+I+showed+them+the+email+trail+and+they+still+insisted+it+never+happened.+I+need+a+way+to+capture+what+was+decided+in+meetings+so+there+is+a+clear+record+that+is+easy+to+find." +
          "+Read+these+pages+for+context:" +
          "+https://content.internode.ai/how-executive-assistants-stop-being-the-only-person-who-remembers" +
          "+https://content.internode.ai/how-to-capture-decisions-from-meetings-without-writing-everything-down" +
          "+https://content.internode.ai/what-happens-when-the-executive-assistant-leaves" +
          ANSWER_FORMAT,
      },
    ],
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

const ALL_PROMPTS = PROMPT_GROUPS.flatMap((g) => g.prompts);

export function AskYourAI() {
  const [activeQuery, setActiveQuery] = useState(ALL_PROMPTS[0].query);

  return (
    <section className="mt-14 rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 sm:px-6">
      <h2 className="text-lg font-semibold text-zinc-950">
        Learn directly from your own AI assistant
      </h2>
      <p className="mt-1 text-sm text-zinc-600">
        If you don&apos;t like reading long articles, simply select a problem
        and have your AI assistant explain what matters to you.
      </p>

      <div className="mt-4 space-y-4">
        {PROMPT_GROUPS.map((group) => (
          <div key={group.heading}>
            <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-zinc-500">
              {group.heading}
            </p>
            <div className="grid gap-1.5">
              {group.prompts.map((prompt) => (
                <button
                  key={prompt.label}
                  type="button"
                  onClick={() => setActiveQuery(prompt.query)}
                  className={cn(
                    "rounded-lg border px-4 py-2.5 text-left text-sm transition-colors",
                    prompt.query === activeQuery
                      ? "border-zinc-900 bg-zinc-900 text-white"
                      : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400 hover:text-zinc-900",
                  )}
                >
                  {prompt.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="text-sm text-zinc-600">Select your preferred AI:</span>
        {AI_ASSISTANTS.map((ai) => (
          <a
            key={ai.name}
            href={`${ai.urlTemplate}${activeQuery}`}
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
