import { useState } from "react";

import { cn } from "@/lib/utils";
import { FAQ_GROUPS, type FaqEntry } from "@/lib/faq";
import { CONTENT_SITE_URL } from "@/lib/site";

const ANSWER_FORMAT =
  "+Then+answer+in+four+parts:" +
  "+(1)+Why+this+happens,+in+2-3+sentences." +
  "+(2)+What+to+do+about+it,+as+a+short+list." +
  "+(3)+How+Internode+specifically+solves+this,+based+on+what+the+pages+describe." +
  "+(4)+One+concrete+thing+I+can+try+this+week+using+Internode." +
  "+Keep+it+under+400+words.+No+filler,+no+emojis." +
  "+If+I+ask+follow-up+questions+about+Internode,+read+https://content.internode.ai/llms-full.txt+for+comprehensive+context+about+the+product+and+all+published+content.";

function buildPromptUrl(entry: FaqEntry): string {
  const primaryUrl = `${CONTENT_SITE_URL}/${entry.canonicalSlug}`;
  const seedContext = [
    "Read+this+page+for+context:",
    encodeURIComponent(primaryUrl).replace(/%20/g, "+"),
  ].join("+");
  const question = encodeURIComponent(entry.question).replace(/%20/g, "+");
  return `${question}+${seedContext}${ANSWER_FORMAT}`;
}

function FaviconImg({ domain, alt }: { domain: string; alt: string }) {
  return (
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

const ALL_ENTRIES = FAQ_GROUPS.flatMap((group) => group.entries);

export function AskYourAI() {
  const [activeQuery, setActiveQuery] = useState(
    ALL_ENTRIES[0] ? buildPromptUrl(ALL_ENTRIES[0]) : "",
  );

  return (
    <section className="mt-14 rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 sm:px-6">
      <h2 className="text-lg font-semibold text-zinc-950">
        Learn about Internode from your favorite AI
      </h2>
      <p className="mt-1 text-sm text-zinc-600">
        If you don&apos;t like reading long articles, select a question
        and chat about Internode with your own AI to get answers that matter to you.
      </p>

      <div className="mt-4 space-y-4">
        {FAQ_GROUPS.map((group) => (
          <div key={group.heading}>
            <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-zinc-500">
              {group.heading}
            </p>
            <div className="grid gap-1.5">
              {group.entries.map((entry) => {
                const query = buildPromptUrl(entry);
                return (
                  <button
                    key={entry.question}
                    type="button"
                    onClick={() => setActiveQuery(query)}
                    className={cn(
                      "rounded-lg border px-4 py-2.5 text-left text-sm transition-colors",
                      query === activeQuery
                        ? "border-zinc-900 bg-zinc-900 text-white"
                        : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400 hover:text-zinc-900",
                    )}
                  >
                    {entry.question}
                  </button>
                );
              })}
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
