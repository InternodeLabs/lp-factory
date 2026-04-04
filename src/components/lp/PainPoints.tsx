import type { SectionConfig } from "@/config/types";

import { LpIcon } from "./LpIcon";
import { cn } from "@/lib/utils";

type PainSection = Extract<SectionConfig, { type: "pain-points" }>;

export function PainPoints({
  section,
  darkMode,
}: Readonly<{
  section: PainSection;
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
        <ul className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {section.points.map((point) => (
            <li
              key={point.title}
              className={cn(
                "group rounded-2xl border p-6 transition duration-300 md:p-8",
                "border-gray-200 bg-white/80 shadow-sm backdrop-blur-sm",
                "hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900/40 dark:hover:shadow-[var(--lp-primary)]/10",
              )}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--lp-primary)]/10 transition group-hover:bg-[var(--lp-primary)]/20">
                <LpIcon name={point.icon} size={32} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-gray-900 dark:text-white md:text-2xl">
                {point.title}
              </h3>
              <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 md:text-xl">
                {point.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
