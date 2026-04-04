import type { Metadata } from "next";
import { Suspense } from "react";

import { PostHogProvider } from "@/components/tracking/PostHogProvider";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "lp-factory",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={null}>
          <PostHogProvider>{children}</PostHogProvider>
        </Suspense>
      </body>
    </html>
  );
}
