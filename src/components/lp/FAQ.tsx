"use client";

import { useCallback, useId, useState } from "react";
import { Minus, Plus } from "lucide-react";

import type { SectionConfig } from "@/config/types";

import { cn } from "@/lib/utils";

type FaqSection = Extract<SectionConfig, { type: "faq" }>;

export function FAQ({
  section,
  darkMode,
}: Readonly<{
  section: FaqSection;
  darkMode: boolean;
}>) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section
      className={cn(
        "py-16 px-4 md:py-24 md:px-8",
        darkMode && "dark",
      )}
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          {section.title}
        </h2>
        <div className="mt-12 space-y-3 md:mt-16 md:space-y-4">
          {section.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;

            return (
              <div
                key={item.question}
                className={cn(
                  "overflow-hidden rounded-2xl border transition-shadow",
                  "border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/60",
                  isOpen && "shadow-md ring-1 ring-[var(--lp-primary)]/20 dark:shadow-lg",
                )}
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                  className={cn(
                    "flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6 md:py-6",
                    "text-lg font-semibold text-gray-900 transition-colors md:text-xl",
                    "hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800/80",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--lp-primary)] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900",
                  )}
                >
                  <span className="text-pretty pr-2">{item.question}</span>
                  <span
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
                      "border-[var(--lp-primary)]/30 text-[var(--lp-primary)]",
                      isOpen && "border-[var(--lp-accent)]/40 bg-[var(--lp-primary)]/10",
                    )}
                    aria-hidden
                  >
                    <Plus
                      className={cn(
                        "h-5 w-5 transition-transform duration-300 ease-out",
                        isOpen && "hidden",
                      )}
                    />
                    <Minus
                      className={cn(
                        "hidden h-5 w-5 transition-transform duration-300 ease-out",
                        isOpen && "block",
                      )}
                    />
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="border-t border-gray-200 px-5 pb-6 pt-2 text-lg leading-relaxed text-gray-600 dark:border-gray-800 dark:text-gray-300 md:px-6 md:pb-7 md:text-xl">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
