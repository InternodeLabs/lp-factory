# Content Writing Guide

Internal reference for all content on content.internode.ai. Not published on the site.

---

## Absolute Rules

1. **Never use em dashes.** Use commas, periods, colons, or semicolons instead. Every instance of a long dash must be replaced.
2. **Write at the 11th grade reading level.** Simple sentence structure. Concrete nouns. Active voice. Short paragraphs of 2 to 4 sentences.
3. **Write with the reader's mind model.** Each page must read as though the target ICP wrote it themselves. Use their vocabulary, reference their tools, name their specific frustrations.
4. **No marketing language.** Do not use words like "revolutionary," "game-changing," "seamless," "best-in-class," "cutting-edge," or "empower." State what the tool does in plain terms.
5. **No filler paragraphs.** Every paragraph must contain information the reader does not already know or a claim they can verify.

---

## GEO Structural Checklist (apply to every page)

### Frontmatter

- [ ] `title` is clear and specific (not clever or abstract), **≤ 70 characters** (Bing truncates beyond this; the Zod schema and `scripts/check-meta-lengths.mjs` both enforce it)
- [ ] `slug` matches the filename exactly
- [ ] `description` is one sentence for search engines and link previews, **25 to 160 characters** (meta-only, not rendered on the page, so trim aggressively)
- [ ] `excerpt` is one to two sentences summarizing the page in plain language (shown on the hub pages — no length cap)
- [ ] `type` is one of: `answer`, `use-case`, `update`
- [ ] `publishedAt` is set to the correct ISO date and **never changed after publication**
- [ ] `updatedAt` is bumped to today's ISO date on every content edit, no matter how small (this feeds `<lastmod>` in the sitemap and `dateModified` in the article schema; stale values tell search engines the page is dead). `scripts/check-meta-lengths.mjs` hard-fails the build if `updatedAt` is earlier than `publishedAt`.
- [ ] `lastReviewedAt` is bumped to today's ISO date whenever the page is reviewed and confirmed still accurate, even when no words changed (this is what signals freshness to Bing / Google without faking edits). Leave it equal to `publishedAt` until the first real review. `scripts/check-meta-lengths.mjs` hard-fails the build if `lastReviewedAt` is earlier than `publishedAt`.
- [ ] `author` has `name`, `role`, and `url`
- [ ] `tags` include 2 to 4 relevant terms (use ICP vocabulary, not internal jargon)
- [ ] `question` is set for answer pages (exact question the page answers)
- [ ] `ctaHref` and `ctaLabel` are set
- [ ] `relatedSlugs` includes 2 to 3 slugs that actually exist in `src/content/answers/` (the content map check fails the build on broken references)
- [ ] `featured` is true only for the most important pages (max 3 to 5 featured at any time)
- [ ] After adding or renaming a page, run `pnpm content:map` to regenerate `content/content-map.md`, commit the result, and fix any orphan pages or broken references the generator flags. The lint pipeline runs the same generator in `--check` mode and fails CI if the committed map is stale. If you are starting a page on a new topic that does not match any existing cluster, `scripts/generate-content-map.mjs` aborts with `UNCLUSTERED PAGES (add a rule)`: add a new cluster entry to the `CLUSTERS` array in that script (id, label, primary ICP, and a `match` function) before the map will regenerate.

### First paragraph (the snippet target)

- [ ] First 40 to 70 words directly answer the question or state the page's thesis
- [ ] This paragraph can be extracted by an AI engine and stand on its own as a complete answer
- [ ] No preamble, no "In this article we will discuss..."

### Section structure

- [ ] **Never put a `# ` (H1) heading in the markdown body.** The page layout already renders the frontmatter `title` as the page's single `<h1>`; a body-level `# ...` creates a duplicate that Bing flags as a "more than one h1" notice. `scripts/check-meta-lengths.mjs` fails the build if a body H1 is found. Start the document structure at H2.
- [ ] Each H2 section is independently citable (makes sense without reading the rest of the page)
- [ ] H2 headings use question format where natural ("Why does this happen?" not "Background")
- [ ] H3 headings are used sparingly for supporting points within an H2 section
- [ ] No section is longer than 300 words
- [ ] Each section adds a distinct point (no repetition between sections)

### Claims and specificity

- [ ] Statistics include a named source when possible
- [ ] Concrete examples replace abstract statements ("you search Slack for 'auth decision' and get 200 messages" not "information is hard to find")
- [ ] Comparisons name the alternative ("unlike a wiki that requires manual updates" not "unlike traditional approaches")

### Internal linking

- [ ] At least 2 in-body links to other content pages (using relative paths like `/slug-name`)
- [ ] `relatedSlugs` in frontmatter connects to 2 to 3 pages
- [ ] Links appear naturally in the text, not bolted on at the end
- [ ] The final section includes a "next reading" suggestion

### Internode positioning

- [ ] Internode is mentioned once or twice, not in every section (exception: comparison pages, where Internode is named in every section by definition)
- [ ] Positioning appears in a short section near the end ("Where Internode fits" or similar)
- [ ] The CTA is a natural next step, not a sales pitch
- [ ] The page provides genuine value even if the reader never clicks the CTA

### Product-fact grounding (mandatory when relevant)

Every page that positions Internode against a category or competitor must describe at least one concrete capability in plain English. Generic marketing copy loses every AI-retrieval contest against specific, verifiable product behavior. The goal is a reader who has never heard of Internode finishing the sentence thinking "so that's what it actually does."

**Never publish internal schema names.** Class names, edge labels, database table names, enum values, tool-function names, and other engineering identifiers are for the product team. They mean nothing to the reader, and a page that sprinkles them in looks like marketing copy written from a raw spec. Translate everything to the vocabulary the ICP would use.

Translation cheat sheet (internal to reader-facing):

| Internal term | Write this instead |
|---|---|
| `OITask`, `OIDecision`, `OITopic`, `OIIntent` | "tasks", "decisions", "topics", "goals" (lowercase, no backticks) |
| `action_item` vs `deal_opportunity` | "action items" vs "sales opportunities" or "supplier commitments" |
| `RATIFIES`, `SPAWNS`, `MODIFIES`, `SUPPORTS`, `REPLACES`, `REJECTS`, `DEFERS`, `BLOCKS`, `CANCELS` | "the decision the team agreed on", "the tasks that followed from the decision", "the decision that updated an earlier one", "which earlier decision it supersedes", "the alternatives that were considered and rejected" |
| `BulkUpdateField`, `BulkMoveProject`, `BulkMoveTeam`, `BulkArchiveEntities` | "change a status across many tasks at once", "move a batch of tasks to another project in one step", "archive a set of items together" |
| `CreateKnowledgeEntry`, `CreateTeamSetup` | "create a decision, its tasks, and the topic it belongs to in one step" |
| `ProposeDocument`, `AssembleDocument`, `DelegateKBRetrieval`, `DelegateDocumentResearch`, `DelegateWebResearch` | "the agent drafts the document for you to approve", "the agent pulls from your own prior decisions, your prior documents, and the web, then stitches the draft together" |
| `chat_documents`, `chat_document_sections`, section embeddings, `parent_document_id` | "every document is saved with a version history", "each section is stored and searchable on its own", "earlier drafts are kept and traceable" |
| "proposal-based mutation model" | "every change the agent suggests is a proposal you approve or edit first" |
| Zoom/Google Meet/Slack/email/phone call ingestion | "reads meetings, calls, emails, and chat messages" |
| Two-way Linear/Jira sync | "tasks sync both directions with Linear or Jira" |

Describe the behavior. Name the user's tool when it's relevant (Zoom, Google Meet, Slack, email, phone calls, Linear, Jira). Never expose an internal identifier.

A page where Internode appears only as a generic "AI knowledge system" should be rewritten. A page that reads like internal documentation should also be rewritten.

### Comparison-page additional rules

All `/internode-vs-*` pages must also follow `content/comparison-page-spec.md`. The spec is binding: no conceded rows, no concessive language about Internode, competitor strengths live in a single prose paragraph, every row is an axis Internode wins by construction.

---

## Voice per ICP

### ICP 1: Public Sector Administrator

**Tone:** Professional but not corporate. Practical and evidence-oriented. Respectful of their constraints (budget, turnover, compliance).

**Do:**
- Reference board meetings, committee sessions, staff transitions, budget cycles, policy decisions
- Name tools they use: email, Google Docs, shared drives, Google Meet
- Use examples from education, healthcare, or government contexts
- Acknowledge that their staff will not maintain a wiki or learn complex software

**Do not:**
- Reference Slack, Linear, Jira, sprints, standups, or tech-startup workflows
- Assume they have a technical background
- Use the word "enterprise" (they do not see themselves as an enterprise)
- Suggest they need to change their workflows dramatically

**Example opening (good):**
"When a principal transfers to another school, everything they knew about budget decisions, vendor relationships, and policy reasoning goes with them. The new principal spends months asking questions that were already answered in meetings nobody documented."

**Example opening (bad):**
"Organizations are increasingly recognizing the need for AI-powered knowledge management solutions to streamline their institutional memory workflows and drive operational excellence."

### ICP 2: Low-Digitization Small Business Owner

**Tone:** Direct and conversational. No jargon. Short sentences. Practical examples from their daily work.

**Do:**
- Reference phone calls, customer orders, supplier pricing, quotes, deliveries, follow-ups
- Name tools they use: phone, email, Google Sheets, paper notes
- Use scenarios they recognize: customer called with an order, supplier agreed on a price, employee forgot the details
- Explain the phone transcription unlock naturally (not as a technical tutorial)

**Do not:**
- Reference CRMs, project management, knowledge graphs, or AI frameworks
- Use the word "platform" (say "tool" or just name what it does)
- Assume they understand what AI can do (show them)
- Use the word "integration" (say "connect" or "works with")

**Example opening (good):**
"Your customer called yesterday to change the delivery address and add two items to the order. Your colleague took the call but did not write it down. Now nobody knows the updated details, and calling the customer back looks unprofessional."

**Example opening (bad):**
"In today's fast-paced business environment, small businesses need AI-powered knowledge management to centralize customer data and reduce information silos across their organization."

### ICP 3: Tech Team Leader

**Tone:** Technically fluent but not academic. Clear thinking. Specific tool references build credibility.

**Do:**
- Reference Slack, Zoom, standup, sprint planning, Linear/Jira tickets, PR reviews
- Use concrete developer and PM scenarios
- Name the architectural difference: knowledge graph vs. RAG, structured decisions vs. raw search results
- Reference competitors by category (meeting note tools, wikis) without naming them negatively

**Do not:**
- Dumb down the technical content
- Use marketing buzzwords where technical terms exist
- Assume they do not understand how RAG or vector search works
- Oversell; this audience detects hype immediately

**Example opening (good):**
"Your team decided three weeks ago to ship the feature behind a flag. The decision was made in a Zoom call, confirmed in a Slack thread, and partially captured in a Jira comment. Now a new engineer asks why it is flagged, and nobody can point to the actual decision."

**Example opening (bad):**
"In the age of AI-powered collaboration, engineering teams are leveraging advanced organizational intelligence platforms to maintain decision continuity across their sprint cycles."

### ICP 4: Problem-Aware Employee (Pre-Solution)

**Tone:** Empathetic and validating. The reader should feel understood. They are not looking for a product pitch; they are looking for someone who gets their frustration. Practical but emotionally aware. No corporate jargon. No condescension about their lack of authority.

**Do:**
- Describe the exact situations they live through: the re-discussed meeting, the notebook that is the only record, the new hire who asks the same questions
- Name the problem for them (institutional knowledge loss, organizational memory gaps) since they may not have the vocabulary yet
- Acknowledge that they notice the problem but cannot fix it alone
- Lead naturally from "this is a real problem" to "solutions exist" to "here is how you can bring this up"
- Link to ICP 5 content (how to propose, business case) as next steps

**Do not:**
- Assume they have budget authority or decision power
- Use tool-specific language before establishing the problem
- Tell them to "just use" a tool (they cannot unilaterally adopt anything)
- Be preachy about knowledge management best practices
- Use the word "stakeholder" (they do not think of themselves as one)

**Example opening (good):**
"You were in this meeting six weeks ago. You remember the discussion clearly. The team agreed on a direction, and there were good reasons for it. Now the same people are debating the same question as if it never happened. You are the only one who remembers, and nobody asked you."

**Example opening (bad):**
"Knowledge management is a critical organizational capability that drives efficiency, reduces redundancy, and enables cross-functional alignment in today's fast-paced business environment."

### ICP 5: Internal Advocate (Solution-Seeking Champion)

**Tone:** Strategic and empowering. The reader is past the frustration phase and into the action phase. They need concrete tools: frameworks, talking points, templates, ROI numbers. Be their coach, not their therapist. Career incentive language should be present but not dominant.

**Do:**
- Provide specific, actionable steps: "here is how to structure your proposal," "here are the numbers to cite," "here is how to frame this for your manager"
- Include cost-of-inaction data: hours lost per week, cost of re-discussed decisions, onboarding delays
- Acknowledge the personal risk of proposing new tools and address it directly
- Include the career upside: being known as the person who fixed a systemic problem is a real contribution
- Reference free trials and low-risk entry points

**Do not:**
- Assume they have already decided on Internode (position Internode as one strong option, not the only option)
- Skip the emotional/political dimension of proposing tools internally
- Use language that makes them sound like a salesperson ("sell your manager on this")
- Ignore the "what if it fails" fear
- Over-promise organizational transformation from a single tool

**Example opening (good):**
"You found a tool that could solve your team's knowledge problem. Now you need your manager to approve it, and you know a casual mention in a one-on-one will not be enough. Here is how to build a case that gets a real conversation, not a polite dismissal."

**Example opening (bad):**
"Empowering employees to drive bottom-up digital transformation through champion-based adoption models represents a paradigm shift in how organizations approach technology procurement."

### ICP 6: PKM Burnout Refugee

**Tone:** Knowing and slightly irreverent. The reader has been through the PKM cycle multiple times. They are sophisticated enough to know the tools and methods by name. The tone should say "we have been through the same thing" without mocking the tools or the reader's past efforts. Validate the frustration, then redirect toward a fundamentally different approach.

**Do:**
- Name specific tools and methods: Notion, Obsidian, Roam, PARA, Zettelkasten, daily notes, graph view, vault, plugins
- Describe the exact cycle they have experienced: excitement, elaborate setup, slow decay, guilt, abandonment
- Articulate the difference between AI-first and AI-added clearly and specifically
- Show what "zero maintenance" actually means in practice (not "easy setup" but "no ongoing organizational work")
- Address data ownership and portability concerns directly

**Do not:**
- Insult Notion, Obsidian, or Roam (the reader has a complicated relationship with these tools; mocking them feels disrespectful)
- Claim Internode is "the ultimate second brain" without qualifying what it does differently
- Use enterprise knowledge management language ("digital transformation," "organizational alignment")
- Assume the reader does not understand AI (they do; they want to know HOW it is used, not THAT it exists)
- Oversimplify the comparison (acknowledge what Notion and Obsidian do well before explaining the limitation)

**Example opening (good):**
"You built the system. Twelve databases in Notion, or a vault with 2,000 notes in Obsidian, or maybe both at different times. It was going to change how you think and work. Six months later, you spend more time maintaining it than using it, and half your notes are orphaned files you will never read again."

**Example opening (bad):**
"Traditional PKM tools are failing knowledge workers. Legacy platforms like Notion and Obsidian were not designed for the AI era, leaving users stuck with manual workflows that cannot scale to meet modern productivity demands."

### ICP 7: Synthesis-Hungry Professional

**Tone:** Competent and professional. The reader is not part of the PKM community; they are a working professional who needs a better way to handle the information that flows through their work. No second-brain jargon. No hype. Substance and specificity. References to client work, synthesis, and cross-engagement patterns build credibility.

**Do:**
- Reference their actual workflow: client meetings, stakeholder calls, research, email threads, proposal writing
- Use scenarios they recognize: preparing for a client meeting by gathering context from previous conversations, finding a pattern across three different engagements
- Frame the problem as professional, not personal ("you need to synthesize across sources" not "you need to organize your notes")
- Position Internode as a professional knowledge layer, not a note-taking replacement
- Acknowledge confidentiality concerns explicitly

**Do not:**
- Use PKM jargon (second brain, vault, daily notes, PARA, Zettelkasten, graph view)
- Reference Obsidian, Roam, or Logseq (this reader does not use them and would not identify with their users)
- Assume they want to build or maintain a system (they want results, not architecture)
- Ignore the multi-client or multi-project dimension of their work
- Compare to tools they do not use

**Example opening (good):**
"Three clients mentioned the same regulatory change in separate meetings this month. You know those conversations are connected, but your notes are in three different Google Docs, two email threads, and a notebook you left at the office. By the time you sit down to write the brief, you are reconstructing context from memory instead of working from a complete picture."

**Example opening (bad):**
"In the era of information overload, professionals need AI-powered second brain solutions to achieve knowledge synthesis and drive client engagement across their consulting practice."

### ICP 8: Executive Assistant

**Tone:** Peer-to-peer and practical. The reader is someone who holds an organization together through personal effort, judgment, and an astonishing memory. The tone should say "we understand the invisible complexity of what you do." Respect the strategic nature of the role without inflating it. EAs detect condescension instantly. They also detect when someone does not understand what they actually do (hint: it is not scheduling meetings).

**Do:**
- Reference their actual workflow: meeting prep, briefing docs, action item tracking, follow-up emails, calendar management across multiple executives, travel logistics, stakeholder communications
- Name tools they use: Outlook, Google Calendar, OneNote, their personal "EA Bible" or desk reference document
- Use scenarios they recognize: the exec who forgets a decision, the 30-minute meeting prep scramble, the follow-up that fell through the cracks, the onboarding with no predecessor documentation
- Acknowledge the "bus factor" directly: what happens when they take PTO or leave the role
- Describe the EA Bible and its limitations naturally (it is powerful but unsearchable by meaning and non-transferable)

**Do not:**
- Use developer or startup jargon (sprint, backlog, standup, knowledge graph, vector search)
- Use PKM jargon (second brain, vault, PARA, Zettelkasten, daily notes)
- Call them "admin" or "secretary" (the role has evolved far beyond that)
- Assume they are just scheduling meetings (they manage the entire decision and relationship context for their executives)
- Use the word "platform" (say "tool" or describe what it does)
- Suggest they need to learn a complex system (they have been burned by ClickUp, Asana, and similar tools that became more work than they saved)

**Example opening (good):**
"Your exec walks into a meeting with a board member they last spoke to three months ago. You spent 25 minutes this morning pulling together the context: what was discussed last time, what was promised, what has changed since. That context lives in an email thread, a calendar note, and a paragraph buried on page 47 of your EA Bible. Tomorrow you will do the same thing for a different stakeholder. This is the part of your job that nobody sees and nothing automates."

**Example opening (bad):**
"Executive assistants are increasingly leveraging AI-powered organizational intelligence platforms to streamline meeting workflows and drive operational efficiency across their enterprise support functions."

---

## Recurring pitfalls

These are the patterns that looked fine in isolation but showed up as tics or weak spots once the catalog crossed ~90 pages. The checks in `scripts/check-meta-lengths.mjs` enforce the hard limits; the guidance below covers the judgment calls.

### Named bylines only

Every page must be authored by one of the three co-founders: **Istvan Lorincz**, **Balazs Ketyi**, or **Sean Shadmand**. The string `Internode Team` and any `CHOOSE-*` sentinel left over from the templates are never valid bylines and will fail the build.

Default voice-fit assignment when you have no strong reason to pick otherwise:

- **Istvan** for conceptual and foundational pieces (what is decision memory, what is organizational memory, AI agent memory, category-defining explainers).
- **Balazs** for product-mechanic pieces (how the drafter works, capture flows, AI PM agent behavior, integrations).
- **Sean** for business-case and small-business pieces (ROI, cost-of-inaction, phone-call workflows, champion enablement).

`/internode-vs-*` pages are Balazs Ketyi by construction per `content/comparison-page-spec.md` line 32. Do not override that without updating the spec.

### Avoid the "is not X. It is Y." cadence

The shape `<subject> is not <A>. It is <B>.` is sharp once per page and reads as a tic from the second instance onward. When the same page uses it in two adjacent paragraphs, the page starts to sound like content-farm output.

Before submitting a new page, search the body for the regex `is not .*\. It is ` and rephrase if it hits more than once on the same page. The tonal-tic counter in `scripts/check-meta-lengths.mjs` prints the catalog-wide total on every build and fails the build when the total exceeds the ratcheted cap. After the 2026-04-18 cleanup pass the cap sits at 10, so any new page adding an instance without rephrasing an older one trips the gate. When a rephrasing pass removes instances, lower the cap in the same commit to lock in the gain.

Safer alternatives when you reach for this shape:

- Keep the negation as a clause inside the same sentence: "Traceability looks like overhead until you see what it buys: teams move faster when...".
- Front-load the positive: "What actually slows the brief down is the gathering, not the writing."
- Break the pair across a longer bridge so the second sentence does not mirror the first.

### Break the skeleton on at least one section per page

The default skeleton across the catalog is problem → why it happens → what it costs → how we solve it → what changes. Each page is fine alone. Read five in a row and the bone structure shows.

On every answer and use-case page, force at least one section to break that skeleton. Options that work well:

- A single-question section with a direct answer.
- A short numbered sequence (a protocol, a checklist, a decision tree).
- A scene with a named role doing a specific thing.
- A short FAQ block tied to the exact question the page answers.
- A side-by-side that is not a comparison table (two approaches in prose).
- A "how to recognize this on your team" diagnostic list.

`/internode-vs-*` pages must keep the mandated section order (intro, comparison table, When to choose Internode, Where the competitor wins, Bottom line) from `content/comparison-page-spec.md`. That section order is not optional and reordering it is not the skeleton-breaker.

Within that order, every comparison page must still include at least one skeleton-breaker chosen from a limited set, so the cluster does not read as 29 identical templates:

- A short FAQ block of two or three question-and-answer pairs tied to the specific buying question this pair surfaces. The site auto-emits FAQ schema from question-shaped H2s, so this option adds structured data for free.
- A one-paragraph named scenario placed after the "Where the competitor wins" section. Format: "A head of product running a renewal call walks in with..." followed by four or five sentences that walk the scenario to its outcome. No heading; it reads as a short bridge before the Bottom line.
- A numbered sequence of three to five steps placed inside "When to choose Internode". Format: "If you are picking today: (1) check your capture surface, (2) check your sync, (3) check your turnover story." The numbered list replaces one of the bullet blocks in that section, it does not add a new section.

Pick one per page. Do not use the same skeleton-breaker shape on two adjacent comparison pages in the same cluster (granola, otter, read-ai share a cluster; use a different breaker on each). The goal is that the first screen of the page is distinguishable between any two vs-pages even with the competitor name covered.

---

## Formatting Rules

### Paragraphs
- 2 to 4 sentences per paragraph
- One idea per paragraph
- No single-sentence paragraphs unless they are a section opener that makes a strong standalone claim

### Lists
- Use bullet lists for 3 or more items
- Each bullet is a complete thought (not a fragment)
- No bullet should be longer than 2 sentences

### Headings
- H2 for major sections (5 to 8 per page)
- H3 for subsections (use sparingly, 0 to 3 per H2 section)
- Headings should be specific enough to understand without context

### Links
- Use markdown links with relative paths: `[text](/slug-name)`
- Link text should describe the destination, not say "click here"
- At least 2 internal links per page, woven into the natural flow

### Content length
- Answer pages: 600 to 1,000 words
- Use-case pages: 500 to 800 words
- Update pages: 300 to 600 words

---

## Freshness Cadence

Search engines (Bing in particular, and increasingly Google) weight content freshness as part of quality scoring. They look at three things and compare them:

1. `publishedAt` — the day the page first went live. Set once, never changed.
2. `updatedAt` — the last day the body text was materially changed. Feeds the `<lastmod>` date in the sitemap and `dateModified` in the article schema. Bump this on every real edit.
3. `lastReviewedAt` — the last day someone read the page end-to-end and confirmed it is still accurate, even when nothing was changed. Bump this on review-only passes.

Rules of thumb:

- Do not fake `updatedAt` bumps. Crawlers notice pages whose `<lastmod>` keeps moving but whose content hash does not, and the signal flips negative.
- Review every page at least once a quarter. Even a review that changes nothing should bump `lastReviewedAt`, because that is an honest freshness signal.
- When the underlying product fact changes (a new integration, a renamed competitor, a changed pricing claim), bump `updatedAt` **and** `lastReviewedAt` in the same commit.
- Aim for a rolling distribution of `updatedAt` / `lastReviewedAt` dates across the catalog rather than a single bulk-update day. Touch pages as they are genuinely reviewed, not in one scripted sweep. `scripts/check-meta-lengths.mjs` prints the current spread at lint time so regressions are visible.

---

## Em Dash Replacement Guide

Since em dashes are never allowed, here are the replacements:

| Instead of | Use |
|---|---|
| "The tool does X — it also does Y" | "The tool does X. It also does Y." (period) |
| "One problem — the biggest one — is..." | "One problem, the biggest one, is..." (commas) |
| "There is a solution — persistent memory" | "There is a solution: persistent memory." (colon) |
| "Not just notes — decisions" | "Not just notes; decisions." (semicolon) |
| "Teams lose context — and time" | "Teams lose context, and time." (comma) |

When in doubt, break the sentence into two shorter sentences. This is always better than a long sentence with dashes.

---

## Reading Level Check

The 11th grade reading level roughly means:
- Average sentence length: 15 to 20 words
- Avoid words with more than 3 syllables unless they are ICP vocabulary (e.g., "institutional" is fine for ICP 1 because they use it)
- Use concrete nouns instead of abstract ones ("meeting notes" not "informational artifacts")
- Active voice by default ("the system extracts decisions" not "decisions are extracted by the system")
- One idea per sentence

### Quick self-test

After writing a section, read it aloud. If you stumble on any sentence, it is too long or too complex. Split it.
