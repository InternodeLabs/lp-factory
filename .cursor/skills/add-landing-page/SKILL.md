---
name: add-landing-page
description: Add a new landing page campaign to the LP factory. Use when the user wants to create a new landing page, add a campaign, or set up a new LP for an ad campaign.
---

# Add a Landing Page

## Architecture overview

- One file to edit: `src/config/campaigns.ts` — add an entry to the `campaigns` Map.
- Types live in `src/config/types.ts` (read-only reference; don't edit unless adding a new section type).
- Routing is automatic: `src/app/lp/[slug]/page.tsx` uses `generateStaticParams` from the map. New slug → new page at `/lp/<slug>`.
- Sections render in array order via `LpSectionBody.tsx`.

## Step-by-step

### 1. Choose a slug

- Lowercase, kebab-case, descriptive of the campaign angle (e.g. `founders-decision-memory`).
- The slug becomes both the Map key **and** the `slug` field in the config.
- It appears in the URL: `/lp/<slug>`.

### 2. Add the config entry

Open `src/config/campaigns.ts` and add a new entry to the `campaigns` Map:

```typescript
[
  "<slug>",
  {
    slug: "<slug>",
    meta: {
      title: "Page <title> tag",
      description: "Meta description for SEO / social sharing",
      // ogImage: "https://..." — optional Open Graph image URL
    },
    theme: {
      primaryColor: "#hex",   // brand / CTA colour
      accentColor: "#hex",    // gradient accent
      darkMode: true,         // true = dark background, false = light
    },
    sections: [
      // see section reference below — order here = order on page
    ],
    cta: {
      text: "CTA label (used as fallback)",
      href: "https://target-url",
      style: "primary",       // "primary" | "outline" | "ghost"
    },
    tracking: {
      campaignId: "unique-id-for-posthog",  // appears in PostHog group
      source: "linkedin",                    // traffic source tag
      conversionEvent: "signup_click",       // event name on CTA click
    },
  } satisfies CampaignConfig,
],
```

### 3. Build the sections array

Include sections in this recommended order. All are optional except `hero`.

| type | required fields | notes |
|------|----------------|-------|
| `hero` | `headline`, `subheadline`, `ctaText` | Optional `backgroundImage` (URL). CTA links to `cta.href`. |
| `pain-points` | `title`, `points[]` (`icon`, `title`, `description`) | `icon`: emoji or Lucide icon name. |
| `features` | `title`, `features[]` (`title`, `description`, `icon`) | Same icon rules. |
| `social-proof` | `title`, `testimonials[]` (`quote`, `name`, `role`, `company`) | Optional `logoUrl` per testimonial. |
| `faq` | `title`, `items[]` (`question`, `answer`) | First item opens by default. |
| `final-cta` | `headline`, `subheadline`, `ctaText` | Button links to `cta.href`. |

**Icons** — Use emoji (e.g. `"⚡"`) or a Lucide icon name in PascalCase or kebab-case (e.g. `"Zap"` or `"zap"`). Unknown names render as text fallback.

### 4. Tracking setup

- `tracking.campaignId` — unique per campaign; used as PostHog group key.
- `tracking.source` — matches the ad platform (`linkedin`, `google`, `twitter`, etc.).
- `tracking.conversionEvent` — the PostHog event name fired on CTA clicks.
- UTM params from the ad URL are captured automatically on pageview.

Events fired automatically per LP:
- `$pageview` with campaign group + UTMs
- `section_viewed` per section (IntersectionObserver)
- `section_time` with `visible_ms` on page leave
- `scroll_depth` at 25/50/75/90/100%
- `lp_click` on CTA clicks

### 5. Validate

```bash
pnpm build
```

Build fails if the config doesn't satisfy `CampaignConfig`. `dynamicParams = false` means only slugs in the Map are valid routes.

### 6. Verify locally in browser

Run `pnpm dev`, visit `/lp/<slug>` and confirm:
- All sections render in order
- CTA buttons link to `cta.href`
- Dark/light mode matches `theme.darkMode`
- No console errors
- PostHog events appear (network tab → `/ingest/`)

### 7. Deploy

Commit and push to `main`. Vercel deploys automatically on push.

```bash
git add src/config/campaigns.ts
git commit -m "add <slug> landing page for <source> ad campaign"
git push origin main
```

Wait ~60 s for Vercel to finish, then run the post-deploy browser review (see `.cursor/rules/post-deploy-browser-review.mdc`) to verify the live page at `https://www.internode-ai.com/lp/<slug>`.

## Adding a new section type

If a campaign needs a section type that doesn't exist yet:

1. Add the new variant to the `SectionConfig` union in `src/config/types.ts`.
2. Create the component in `src/components/lp/`.
3. Add a `case` to the switch in `src/components/lp/LpSectionBody.tsx`.
4. Use the section in the campaign config.

## Checklist

```
- [ ] Slug is kebab-case, unique, and matches Map key
- [ ] meta.title and meta.description are set
- [ ] theme colours are valid hex
- [ ] sections array has at least a hero
- [ ] cta.href points to the correct destination
- [ ] tracking.campaignId is unique across all campaigns
- [ ] pnpm build passes
- [ ] Page renders correctly at /lp/<slug>
- [ ] Committed and pushed to main
- [ ] Post-deploy browser review passes on live site
```
