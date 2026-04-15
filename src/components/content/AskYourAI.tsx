"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

const PROMPTS = [
  {
    label: "We keep having the same meeting",
    query:
      "My+team+keeps+having+the+same+discussions+because+nobody+remembers+what+we+already+decided.+Read+content.internode.ai+and+tell+me+what+I+can+do+about+this",
  },
  {
    label: "I forget why half my tasks exist",
    query:
      "I+look+at+my+task+list+and+half+the+items+lost+their+context+because+nobody+wrote+down+why+they+were+created.+Read+content.internode.ai+and+tell+me+how+to+keep+decisions+and+context+together",
  },
  {
    label: "My second brain became a second job",
    query:
      "I+have+tried+Notion+and+Obsidian+but+I+spend+more+time+organizing+my+notes+than+using+them.+Read+content.internode.ai+and+tell+me+if+there+is+something+that+works+without+all+the+upkeep",
  },
  {
    label: "Nobody wrote down what was said on the call",
    query:
      "Someone+on+my+team+took+a+call+and+nobody+wrote+down+what+was+agreed.+Now+we+have+to+call+back+and+ask+again.+Read+content.internode.ai+and+tell+me+how+to+stop+losing+details+from+conversations",
  },
  {
    label: "If I\u2019m out sick, nobody knows anything",
    query:
      "If+I+take+a+sick+day+everything+falls+apart+because+all+the+important+details+live+in+my+head+and+nowhere+else.+Read+content.internode.ai+and+tell+me+how+to+fix+this",
  },
] as const;

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
  { name: "ChatGPT", domain: "chatgpt.com", urlTemplate: "https://chatgpt.com/?prompt=" },
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
