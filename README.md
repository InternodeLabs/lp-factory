# lp-factory

Internode content hub and landing page factory. The root of the site serves static, markdown-first answer pages on `content.internode.ai`, while campaign landing pages continue to live under `/lp/[slug]`.

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

Open [http://localhost:3000](http://localhost:3000) to see the content hub homepage and the root-level content routes.

## Content hub

The public content surface is intentionally minimal:

- root homepage: `/`
- root-level content pages: `/<slug>`
- LLM/search discovery files: `/robots.txt`, `/sitemap.xml`, `/rss.xml`, `/llms.txt`, `/llms-full.txt`

### Content authoring

- Store published pages in `content/answers/*.md`
- Use the starter templates in `content/templates/`
- Keep slugs root-safe; avoid reserved paths such as `lp`, `robots.txt`, `sitemap.xml`, `rss.xml`, `llms.txt`, and `llms-full.txt`

Each page is validated against a strict frontmatter schema in `src/lib/content.ts`.

Supported content types:

- `answer`
- `use-case`
- `update`

Required frontmatter fields include:

- `title`
- `slug`
- `description`
- `excerpt`
- `type`
- `publishedAt`
- `updatedAt`
- `author`
- `tags`
- `ctaHref`
- `ctaLabel`

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
- **LP headers** (paths matching `/lp/*`): `X-Robots-Tag: noindex` so paid LPs do not compete with the content surface in organic search, plus short cache headers. Remove or adjust `noindex` in `vercel.json` for any LP you want indexed.  

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

Filter by `campaign_slug`, `campaign_id`, `content_slug`, or `page_type` to compare landing pages against the root content surface.

## CI

- **`.github/workflows/preview.yml`** — on push to any branch **except** `main`: `pnpm install`, `pnpm lint`, `pnpm build`.  
- **`.github/workflows/production.yml`** — on push to **`main`**: same steps.  
- **`.github/workflows/indexnow-on-deploy.yml`** — fires whenever Vercel marks a Production deployment as `success`; POSTs the live sitemap to `api.indexnow.org` via our signed endpoint.

Deploys are still performed by Vercel; these workflows catch broken builds before or alongside preview/production deploys.

## IndexNow

The site auto-pings IndexNow (Bing, Yandex, and partner search engines) on every successful production deploy so freshly published or updated pages are re-crawled quickly.

### How it works

1. Vercel finishes a Production deploy and GitHub's Vercel integration marks the `deployment_status` as `success` with environment `Production`.
2. `.github/workflows/indexnow-on-deploy.yml` reacts to that event and `curl`s `POST https://content.internode.ai/api/indexnow-ping` with a Bearer token.
3. [`src/pages/api/indexnow-ping.ts`](src/pages/api/indexnow-ping.ts) authenticates the call, fetches `/sitemap-index.xml`, collects every `<loc>`, and submits the batch to `https://api.indexnow.org/indexnow` using our key. The existing sitemap integration in [`astro.config.mjs`](astro.config.mjs) filters `/lp/*` out, so only indexable URLs are pushed.

### Required configuration

Two values must match between Vercel (runtime) and GitHub (the workflow).

| Name | Where | Value | Purpose |
|------|-------|-------|---------|
| `INDEXNOW_KEY` | Vercel → Project → Environment Variables (Production) | `001c1634ad984cb1852ab12b1fe36b74` | Key IndexNow uses to authenticate submissions; must match `public/001c1634ad984cb1852ab12b1fe36b74.txt` so the `keyLocation` check passes. |
| `INDEXNOW_WEBHOOK_SECRET` | Vercel → Environment Variables (Production) **and** GitHub → Repo Settings → Secrets and variables → Actions | any long random string (e.g. `openssl rand -hex 32`) | Shared secret the workflow sends as `Authorization: Bearer …` and the API route verifies. |

### Verifying the setup

- Key file must be reachable: <https://content.internode.ai/001c1634ad984cb1852ab12b1fe36b74.txt> should return exactly `001c1634ad984cb1852ab12b1fe36b74`.
- Manual ping (smoke test):

  ```bash
  curl -sS -X POST https://content.internode.ai/api/indexnow-ping \
    -H "Authorization: Bearer $INDEXNOW_WEBHOOK_SECRET" \
    -H "Content-Type: application/json"
  ```

  A healthy response is `{"submitted":<n>,"status":"ok","indexNowStatus":200}`.
- Workflow runs are visible under the repo's Actions tab as **IndexNow on deploy**; they are skipped for preview deploys by design.

### Rotating the key

If `INDEXNOW_KEY` ever needs to change, generate a new 32-char hex string, rename `public/<newkey>.txt` to match (with the new key as its only content), update the Vercel env var, and redeploy. IndexNow's own host-level "ownership" is proven by the file being reachable — no Bing Webmaster Tools reconfiguration is needed.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Development server |
| `pnpm build` | Production build |
| `pnpm start` | Start production server locally |
| `pnpm lint` | ESLint (Next.js config) |
