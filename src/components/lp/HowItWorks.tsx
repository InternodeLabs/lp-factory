import Image from "next/image";

import type { SectionConfig } from "@/config/types";

import { cn } from "@/lib/utils";

type HowItWorksSection = Extract<SectionConfig, { type: "how-it-works" }>;

export function HowItWorks({
  section,
  darkMode,
}: Readonly<{
  section: HowItWorksSection;
  darkMode: boolean;
}>) {
  return (
    <section
      className={cn("py-16 px-4 md:py-24 md:px-8", darkMode && "dark")}
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          {section.title}
        </h2>
        <ol className="mt-12 grid gap-8 md:mt-16 md:grid-cols-3">
          {section.steps.map((step) => (
            <li
              key={step.step}
              className={cn(
                "relative flex flex-col rounded-2xl border p-6 md:p-8",
                "border-gray-200 bg-white/80 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/40",
              )}
            >
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--lp-primary)] text-sm font-bold text-white">
                {step.step}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 flex-1 text-lg text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
              {step.image && (
                <div className="mt-6 overflow-hidden rounded-lg border border-gray-200/20 dark:border-gray-700/40">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={800}
                    height={480}
                    className="w-full"
                    unoptimized
                  />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
