import type { SectionConfig } from "@/config/types";

import { cn } from "@/lib/utils";

type FeaturesSection = Extract<SectionConfig, { type: "features" }>;

export function Features({
  section,
  darkMode,
}: Readonly<{
  section: FeaturesSection;
  darkMode: boolean;
}>) {
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
        <ul className="mt-12 space-y-16 md:mt-20 md:space-y-24">
          {section.features.map((feature, index) => (
            <li
              key={feature.title}
              className={cn(
                "flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16",
                index % 2 === 1 && "lg:flex-row-reverse",
              )}
            >
              <div className="flex flex-1 justify-center lg:justify-center">
                <div
                  className={cn(
                    "flex h-28 w-28 items-center justify-center rounded-3xl md:h-32 md:w-32",
                    "bg-gradient-to-br from-[var(--lp-primary)]/20 to-[var(--lp-accent)]/15 ring-1 ring-[var(--lp-primary)]/20",
                  )}
                >
                  <span className="inline-flex text-4xl" aria-hidden="true" role="img">{feature.icon}</span>
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl lg:text-4xl">
                  {feature.title}
                </h3>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 md:mt-5 md:text-xl">
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
