---
name: designer-update-lp-framework
description: Update the LP factory's reusable landing page framework from a designer-first perspective. Use when a professional designer wants to change shared landing page patterns, section behavior, layout conventions, theming, assets, or framework-level content structure without assuming deep coding knowledge.
---

# Designer-First LP Framework Updates

This skill is for framework work, not one-off campaign production.

If the request is mainly "add a new landing page", "update one campaign config", or "swap copy/assets for a single slug", use the `add-landing-page` skill instead.

## Default stance

- Assume the user is a professional designer, not a programmer.
- Explain the system in design language first: pattern, layout, section, visual hierarchy, reusable rule, asset, theme.
- Only introduce code terms when they are necessary to make the change safely.
- Prefer the smallest reusable framework change that solves the design problem across campaigns.
- Protect existing live campaigns unless the user explicitly wants a global redesign.

## Framework map

Use these files as the mental model:

- `src/config/campaigns.ts`: source of truth for campaign entries and section order
- `src/config/types.ts`: section schema and allowed content fields
- `src/pages/lp/[slug].astro`: renders section arrays into landing pages
- `src/layouts/LpLayout.astro`: shared landing page shell, theme variables, footer, background
- `src/components/lp/`: reusable section components and shared landing page UI

## Start with classification

Before editing, classify the request into one of these buckets:

1. Campaign-only change
   - Example: new copy, different screenshots, reorder sections for one slug
   - Action: use the existing campaign flow, not this skill

2. Shared visual refinement
   - Example: hero spacing, type scale, CTA styling, card treatment, section rhythm
   - Action: update existing shared component(s) or layout styles

3. Shared content pattern change
   - Example: all FAQs need a new intro, all feature rows need stronger visual grouping
   - Action: update the relevant section component and keep the schema stable if possible

4. New reusable section type
   - Example: trust bar, logo strip, comparison table, quote wall
   - Action: add a new schema variant, create a component, wire it into the page renderer

5. Framework architecture shift
   - Example: new theming model, new layout shell, new cross-page interaction pattern
   - Action: slow down, explain impact, and confirm the direction before broad edits

## Designer-first workflow

Copy this checklist and keep it current during the task:

```text
- [ ] Restate the design goal in plain language
- [ ] Decide whether this is campaign-level or framework-level
- [ ] Identify the smallest reusable layer to change
- [ ] Name the files and sections likely affected
- [ ] Make the change without breaking existing campaign configs
- [ ] Validate with build/lint
- [ ] Verify representative landing pages locally
- [ ] If shipped to main, follow the post-deploy live-site review
```

## Safe defaults

- Prefer config-driven and component-level changes over page-specific hacks.
- Reuse existing section types before inventing a new one.
- Keep `tracking`, CTA plumbing, JSON-LD behavior, and section rendering order intact unless the user explicitly asks to change them.
- Keep `theme.primaryColor`, `theme.accentColor`, and `theme.darkMode` as the shared theming contract unless there is a clear reason to expand it.
- Preserve accessibility basics: readable contrast, meaningful headings, image alt text where applicable, keyboard-safe interactions.
- Preserve responsiveness; do not optimize only for desktop mockups.

## When a designer asks for a broad framework change

Translate the request into this format before editing:

```text
Design goal:
[What should feel different to a visitor?]

Reusable rule:
[What shared rule should the framework enforce from now on?]

Affected layer:
[config schema | page renderer | layout shell | section component]

Risk:
[low | medium | high]

Representative pages to check:
[list 2-4 campaign slugs]
```

## Decision rules

### Use an existing section type when:

- The change is mostly copy, media, spacing, typography, ordering, or styling.
- The content still fits an existing schema in `src/config/types.ts`.

### Add a new section type when:

- The content structure is meaningfully different from the current variants.
- Multiple campaigns will likely reuse it.
- Forcing it into an existing section would create awkward content fields or fragile styling.

When adding a section type, update all three layers:

1. `src/config/types.ts`
2. a component in `src/components/lp/`
3. `src/pages/lp/[slug].astro`

### Avoid framework edits when:

- Only one live campaign needs the change.
- The request can be solved by updating one campaign's config or assets.
- The reusable abstraction is still unclear.

## Communication style

When working through the request:

- Start with a short "design readback" in plain English.
- Explain why the change belongs in the framework, not just one campaign.
- Mention the minimum file set likely to change.
- If the change is risky, ask for confirmation before touching multiple shared components.
- After editing, summarize the outcome in product/design terms first and file terms second.

## Validation

After substantive framework edits:

1. Run `pnpm build`
2. Run `pnpm lint` when you touched `ts`, `tsx`, or `astro` files and the extra check is practical
3. Check representative pages locally in `pnpm dev`
4. Confirm:
   - pages load
   - hero and CTA still render correctly
   - dark/light presentation still matches `theme.darkMode`
   - new or changed sections render cleanly across breakpoints
   - no obvious hydration or console issues

If changes are committed and pushed to `main`, follow `.cursor/rules/post-deploy-browser-review.mdc` before treating the work as complete.

## Response template

Use this structure when it helps:

```markdown
## Design Readback
[1 short paragraph]

## Framework Plan
- Shared rule to change
- Files likely affected
- Why this belongs in the framework

## Validation
- Build/lint/local page checks
```

## Examples

### Example 1: Global visual polish

Request: "Make all landing page heroes feel more premium and editorial."

Good approach:

- Treat this as a shared visual refinement.
- Start with `src/components/lp/Hero.astro`.
- Only touch `src/layouts/LpLayout.astro` if the change requires a shell-level background or spacing rule.
- Verify multiple existing slugs, not just one.

### Example 2: New reusable pattern

Request: "We need a reusable trust bar with logos under the hero."

Good approach:

- Treat this as a new reusable section type.
- Add a new schema variant in `src/config/types.ts`.
- Create a new component in `src/components/lp/`.
- Wire the renderer in `src/pages/lp/[slug].astro`.
- Add it only to campaigns that need it after the framework piece exists.

### Example 3: Not actually a framework task

Request: "Swap the screenshots and CTA copy on `decision-facepalm`."

Good approach:

- Do not treat this as a framework update.
- Route to the campaign-level skill and edit only the relevant config/assets.
