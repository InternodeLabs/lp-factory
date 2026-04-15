import type { Metadata } from "next";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/next";

import { PostHogProvider } from "@/components/tracking/PostHogProvider";
import {
  CONTENT_SITE_URL,
  SITE_DESCRIPTION,
  SITE_TITLE,
} from "@/lib/site";

import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(CONTENT_SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Internode",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_TITLE,
  alternates: {
    canonical: "/",
    types: {
      "text/plain": "/llms-full.txt",
    },
  },
  openGraph: {
    type: "website",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_TITLE,
    url: "/",
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-950 antialiased">
        <Suspense fallback={null}>
          <PostHogProvider>{children}</PostHogProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
