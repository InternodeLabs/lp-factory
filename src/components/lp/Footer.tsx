import { cn } from "@/lib/utils";

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
        "border-t py-10 px-4 md:px-8",
        darkMode
          ? "border-gray-800 bg-gray-950 text-gray-500"
          : "border-gray-200 bg-white text-gray-500",
      )}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-center text-sm md:flex-row md:text-left">
        <p>
          <span className="font-semibold text-gray-800 dark:text-gray-200">
            Internode
          </span>
          <span className="mx-2 text-gray-400 dark:text-gray-600">·</span>
          <span>© {year}</span>
        </p>
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
