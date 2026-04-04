# lp-factory

Landing page factory for ad campaign testing. Define campaigns in config, ship static Next.js routes under `/lp/[slug]`, and measure performance with PostHog.

## Stack

- **Next.js 14** (App Router) + TypeScript + Tailwind CSS v4  
- **pnpm** for installs  
- **Vercel** for hosting (see `vercel.json`)  
- **PostHog** for product analytics  

## Setup

1. **Clone the repo** and open the project root (`lp-factory`).

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and set:

   - `NEXT_PUBLIC_POSTHOG_KEY` — project API key from PostHog  
   - `NEXT_PUBLIC_POSTHOG_HOST` — usually `https://us.i.posthog.com` (or your self-hosted URL)  

   Do **not** commit `.env.local` (it is gitignored).

4. **Run locally**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see the campaign index with links to all LPs.

## Creating a new landing page

1. Open `src/config/types.ts` if you need new section shapes or fields.  
2. Add a **`CampaignConfig`** entry in `src/config/campaigns.ts` (use `campaigns.set("your-slug", { ... })` or extend the `Map` initializer).  
3. Include a unique **`slug`** (URL path: `/lp/your-slug`), **`meta`**, **`theme`**, **`sections`**, **`cta`**, and **`tracking`**.  
4. Commit and **push to GitHub**.  
   - **Preview**: push to any branch other than `main` — GitHub Actions runs lint + build; Vercel creates a preview deployment if the project is connected.  
   - **Production**: merge to **`main`** — CI runs again; Vercel promotes production via the GitHub integration.  

Static params are generated from the campaign map, so new slugs are picked up on the next build.

## Deploying

| Goal | What to do |
|------|------------|
| **Preview URL** | Push a branch (not `main`). CI validates the build; Vercel comments/links the preview when the Git integration is enabled. |
| **Production** | Merge to `main`. CI must pass; Vercel deploys production automatically. |

Project defaults in `vercel.json`:

- **Region**: `sfo1`  
- **LP headers** (paths matching `/lp/*`): `X-Robots-Tag: noindex` so paid LPs do not compete with your main site in organic search, plus short cache headers. Remove or adjust `noindex` in `vercel.json` for any LP you want indexed.  

Set `NEXT_PUBLIC_POSTHOG_*` in the Vercel project **Environment Variables** for Preview and Production.

## Analytics (PostHog)

- **Dashboard**: [PostHog](https://app.posthog.com) (US cloud) — use your team/project URL after login.  
- **Useful events to monitor**  
  - **`$pageview`** — traffic and UTM-attributed landings (SPA route changes included).  
  - **`lp_click`** — CTA and tracked clicks (`element`, `section`, `cta_text`, `campaign_slug`, etc.).  
  - **`section_viewed`** — first time a section enters the viewport.  
  - **`section_time`** — cumulative visible time per section.  
  - **`scroll_depth`** — milestones (25 / 50 / 75 / 90 / 100%).  
  - **Conversion-related properties** on clicks — e.g. `conversion_event` (from campaign config) and `campaign_id` in event properties.  

Filter by `campaign_slug` or `campaign_id` to compare campaigns.

## CI

- **`.github/workflows/preview.yml`** — on push to any branch **except** `main`: `pnpm install`, `pnpm lint`, `pnpm build`.  
- **`.github/workflows/production.yml`** — on push to **`main`**: same steps.  

Deploys are still performed by Vercel; these workflows catch broken builds before or alongside preview/production deploys.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Development server |
| `pnpm build` | Production build |
| `pnpm start` | Start production server locally |
| `pnpm lint` | ESLint (Next.js config) |
