import * as Lucide from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function toPascalFromKebab(raw: string): string {
  return raw
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join("");
}

function resolveLucideName(raw: string): string {
  const trimmed = raw.trim();
  if (/^[A-Z][a-zA-Z0-9]*$/.test(trimmed)) {
    return trimmed;
  }
  return toPascalFromKebab(trimmed);
}

function looksLikeEmoji(raw: string): boolean {
  const t = raw.trim();
  if (t.length === 0 || t.length > 8) {
    return false;
  }
  if (/^[a-zA-Z][\w-]*$/.test(t)) {
    return false;
  }
  if (/^[A-Z][a-zA-Z0-9]*$/.test(t)) {
    return false;
  }
  return true;
}

export function LpIcon({
  name,
  className,
  size = 28,
}: Readonly<{
  name: string;
  className?: string;
  size?: number;
}>) {
  const trimmed = name.trim();
  if (!trimmed) {
    return null;
  }

  if (looksLikeEmoji(trimmed)) {
    return (
      <span
        className={cn("inline-flex select-none text-3xl leading-none", className)}
        aria-hidden
        role="img"
      >
        {trimmed}
      </span>
    );
  }

  const key = resolveLucideName(trimmed) as keyof typeof Lucide;
  const Icon = Lucide[key] as LucideIcon | undefined;
  if (Icon && typeof Icon === "function") {
    return (
      <Icon
        className={cn("shrink-0 stroke-[var(--lp-primary)]", className)}
        size={size}
        strokeWidth={1.75}
        aria-hidden
      />
    );
  }

  return (
    <span
      className={cn("inline-flex text-2xl leading-none", className)}
      aria-hidden
      role="img"
    >
      {trimmed}
    </span>
  );
}
