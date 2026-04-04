import { cn } from "@/lib/utils";

import { InternodeLogo } from "./InternodeLogo";

const MAIN_SITE = "https://internode.ai";

export function Footer({
  darkMode,
}: Readonly<{
  darkMode: boolean;
}>) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "relative z-10 border-t py-10 px-4 md:px-8",
        darkMode
          ? "border-gray-800 bg-gray-950/80 text-gray-500 backdrop-blur-sm"
          : "border-gray-200 bg-white/80 text-gray-500 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-center text-sm md:flex-row md:text-left">
        <div className="flex items-center gap-2">
          <InternodeLogo
            className={cn(
              darkMode ? "text-gray-200" : "text-gray-800",
            )}
            color={darkMode ? "#e5e7eb" : "#1f2937"}
          />
          <span className="mx-1 text-gray-400 dark:text-gray-600">·</span>
          <span>&copy; {year}</span>
        </div>
        <a
          href={MAIN_SITE}
          className="font-medium text-[var(--lp-primary)] transition hover:underline"
          rel="noopener noreferrer"
        >
          internode.ai
        </a>
      </div>
    </footer>
  );
}
