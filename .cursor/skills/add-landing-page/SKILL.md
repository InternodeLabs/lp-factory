---
name: add-landing-page
description: Add or update an Astro landing page campaign in the LP factory. Use when the user wants to create a new landing page, add an ad campaign, or change LP config, sections, assets, tracking, or deployment checks.
---

# Add a Landing Page

## Architecture overview

- Add the campaign entry in `src/config/campaigns.ts`. That map is the source of truth.
- Types live in `src/config/types.ts`. Use it as the section schema reference.
- Routing is Astro-based: `src/pages/lp/[slug].astro` uses `getStaticPaths()` from the campaign map. New slug -> new page at `/lp/<slug>`.
- Sections render in array order directly inside `src/pages/lp/[slug].astro`.
- Landing page components live in `src/components/lp/`. Some are `.astro`, some are React islands.

## Step-by-step

### 1. Choose a slug

- Use lowercase kebab-case, descriptive of the campaign angle, for example `founders-decision-memory`.
- The slug must be both the map key and the `slug` field in the config.
- The page URL will be `/lp/<slug>`.

### 2. Add the config entry

Open `src/config/campaigns.ts` and add a new entry to the `campaigns` map:

```typescript
[
  "<slug>",
  {
    slug: "<slug>",
    meta: {
      title: "Page <title> tag",
      description: "Meta description for SEO and sharing",
      // ogImage: "https://..." // optional
    },
    theme: {
      primaryColor: "#hex",
      accentColor: "#hex",
      darkMode: true,
    },
    sections: [
      // section order here is the page order
    ],
    cta: {
      text: "CTA label used as fallback",
      href: "https://target-url",
      style: "primary", // "primary" | "outline" | "ghost"
    },
    tracking: {
      campaignId: "unique-id-for-posthog",
      source: "linkedin",
      conversionEvent: "signup_click",
    },
  } satisfies CampaignConfig,
],
```

### 3. Images

- Store campaign-specific assets in `public/images/<slug>/`.
- Store shared landing page assets in `public/images/shared/`.
- Reference assets from config with site-root paths such as `/images/<slug>/hero-product.png`.

### 4. Build the sections array

All campaigns need at least a `hero`. Common order:

1. `hero`
2. `pain-points`
3. `how-it-works`
4. `features`
5. `social-proof`
6. `live-demo` or `tab-showcase`
7. `faq`
8. `final-cta`

Current section types:

- `hero`
  - Required: `headline`, `subheadline`, `ctaText`
  - Optional: `subheadlineEmphasis`, `ctaSubtext`, `backgroundImage`, `heroImage`, `heroVideo`
  - If `heroVideo` is set, also provide `heroImage` for the click-to-play poster.

- `pain-points`
  - Required: `title`, `points[]`
  - Each point: `icon`, `title`, `description`

- `how-it-works`
  - Required: `title`, `steps[]`
  - Each step: `step`, `title`, `description`
  - Optional per step: `image`

- `features`
  - Required: `title`, `features[]`
  - Each feature: `title`, `description`, `icon`

- `social-proof`
  - Required: `title`, `testimonials[]`
  - Each testimonial: `quote`, `name`, `role`, `company`
  - Optional per testimonial: `logoUrl`

- `live-demo`
  - Required: `demoUrl`
  - Optional: `title`, `subtitle`, `posterImage`, `ctaText`

- `tab-showcase`
  - Required: `tabs[]`
  - Optional: `title`, `subtitle`
  - Each tab: `icon`, `label`, `image`
  - Optional per tab: `alt`

- `faq`
  - Required: `title`, `items[]`
  - Each item: `question`, `answer`

- `final-cta`
  - Required: `headline`, `subheadline`, `ctaText`
  - Optional: `ctaSubtext`

Icons may be emoji such as `"⚡"` or a Lucide icon name such as `"Zap"` or `"zap"`.

### 5. Tracking setup

- `tracking.campaignId` must be unique per campaign.
- `tracking.source` should match the traffic source, for example `linkedin` or `google`.
- `tracking.conversionEvent` is the PostHog event name used on CTA clicks.
- UTM params from the landing page URL are captured automatically.

Events fired automatically on landing pages:

- `$pageview`
- `section_viewed`
- `section_time`
- `scroll_depth`
- `lp_click`

Some interactive sections also emit their own events.

### 6. Validate

Run:

```bash
pnpm build
```

Recommended extra check:

```bash
pnpm lint
```

`pnpm build` runs `astro build`. If the config does not satisfy `CampaignConfig` or the page cannot render, the build should fail.

### 7. Verify locally

Run `pnpm dev`, visit `/lp/<slug>`, and confirm:

- The page loads with no Astro or hydration errors
- All sections render in the expected order
- CTA buttons link to `cta.href`
- Dark/light presentation matches `theme.darkMode`
- Hero media, demo embeds, and tab showcases work if present
- PostHog requests appear in the network tab under `/ingest/`

### 8. Deploy

Commit and push to `main`. Vercel deploys automatically on push.

```bash
git add src/config/campaigns.ts public/images/<slug>
git commit -m "add <slug> landing page for <source> ad campaign"
git push origin main
```

After deploy, follow `.cursor/rules/post-deploy-browser-review.mdc` and verify the live page at `https://www.internode-ai.com/lp/<slug>`.

## Adding a new section type

If the campaign needs a section type that does not exist yet:

1. Add the new variant to `SectionConfig` in `src/config/types.ts`.
2. Create the section component in `src/components/lp/`.
3. Wire the new section into `src/pages/lp/[slug].astro`.
4. Use the new section type in the campaign config.

## Checklist

```text
- [ ] Slug is kebab-case, unique, and matches the map key
- [ ] meta.title and meta.description are set
- [ ] theme colors are valid hex values
- [ ] sections include at least a hero
- [ ] cta.href points to the correct destination
- [ ] tracking.campaignId is unique across campaigns
- [ ] pnpm build passes
- [ ] Page renders correctly at /lp/<slug>
- [ ] Committed and pushed to main
- [ ] Post-deploy browser review passes on the live site
```
