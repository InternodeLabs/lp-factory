import Image from "next/image";
import { Quote } from "lucide-react";

import type { SectionConfig } from "@/config/types";

import { cn } from "@/lib/utils";

type SocialSection = Extract<SectionConfig, { type: "social-proof" }>;

function TestimonialLogo({
  logoUrl,
  company,
  darkMode,
}: Readonly<{
  logoUrl?: string;
  company: string;
  darkMode: boolean;
}>) {
  if (logoUrl) {
    return (
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <Image
          src={logoUrl}
          alt={`${company} logo`}
          width={40}
          height={40}
          className="object-contain p-1"
          unoptimized
        />
      </div>
    );
  }
  return (
    <div
      className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-dashed text-xs font-medium",
        darkMode
          ? "border-gray-600 text-gray-500"
          : "border-gray-300 text-gray-400",
      )}
      aria-hidden
    >
      {company.slice(0, 2).toUpperCase()}
    </div>
  );
}

export function SocialProof({
  section,
  darkMode,
}: Readonly<{
  section: SocialSection;
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
        <ul className="mt-12 grid gap-8 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {section.testimonials.map((t) => (
            <li
              key={t.name + t.company}
              className={cn(
                "relative flex flex-col rounded-2xl border p-6 md:p-8",
                "border-gray-200 bg-white/90 shadow-sm dark:border-gray-800 dark:bg-gray-900/50",
              )}
            >
              <Quote
                className="absolute right-5 top-5 h-8 w-8 text-[var(--lp-primary)]/25 md:h-10 md:w-10"
                strokeWidth={1.25}
                aria-hidden
              />
              <blockquote className="relative flex-1 text-lg italic leading-relaxed text-gray-700 dark:text-gray-200 md:text-xl">
                “{t.quote}”
              </blockquote>
              <footer className="mt-8 flex items-center gap-3 border-t border-gray-200 pt-6 dark:border-gray-800">
                <TestimonialLogo
                  logoUrl={t.logoUrl}
                  company={t.company}
                  darkMode={darkMode}
                />
                <div className="min-w-0">
                  <p className="font-bold text-gray-900 dark:text-white">
                    {t.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t.role} · {t.company}
                  </p>
                </div>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
