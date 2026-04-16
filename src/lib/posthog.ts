import type { PostHogConfig } from "posthog-js";

export function getPostHogConfig(): Partial<PostHogConfig> {
  return {
    api_host: "/ingest",
    ui_host: "https://us.posthog.com",
    autocapture: true,
    capture_pageview: true,
    capture_pageleave: true,
    enable_heatmaps: true,
    enable_recording_console_log: false,
    session_recording: {
      maskAllInputs: false,
      maskInputOptions: { password: true },
    },
  };
}
