import type { PostHogConfig, PostHogInterface } from "posthog-js";

export function getPostHogConfig(): Partial<PostHogConfig> {
  return {
    api_host: "/ingest",
    ui_host: "https://us.posthog.com",
    autocapture: true,
    capture_pageview: false,
    capture_pageleave: true,
    enable_heatmaps: true,
    enable_recording_console_log: false,
    session_recording: {
      maskAllInputs: false,
      maskInputOptions: { password: true },
    },
    loaded: (client: PostHogInterface) => {
      if (process.env.NODE_ENV === "development") {
        client.debug();
      }
    },
  };
}
