import type { Metadata, Viewport } from "next";

import { LpLayoutShell } from "@/components/lp/LpLayoutShell";
import { PostHogContextProvider } from "@/components/tracking/PostHogProvider";
import { LpScrollDepthMount } from "@/components/tracking/LpScrollDepthMount";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: "%s | Internode",
    default: "Internode",
  },
};

export default function LpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PostHogContextProvider>
      <LpScrollDepthMount>
        <LpLayoutShell>{children}</LpLayoutShell>
      </LpScrollDepthMount>
    </PostHogContextProvider>
  );
}
