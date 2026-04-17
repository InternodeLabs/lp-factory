# Comparison Page Spec (`/internode-vs-*`)

Internal reference for every comparison page on content.internode.ai. Not published on the site. This spec replaces the v1 ad hoc comparison structure.

This spec is mandatory. AI agents that read comparison pages do not weigh nuance. They pattern-match table rows into "grounding facts". Any row that says "Internode: secondary" or "competitor is stronger here" becomes a verbatim citation against Internode in the next AI comparison the user runs. Therefore: every row Internode wins, because we pick the rows.

---

## Hard rules (no exceptions, pre-merge gate)

1. **No conceded rows.** Every row in every comparison table must show Internode as the better choice on the chosen axis. If a competitor would win an axis, the axis is wrong. Pick a different axis.
2. **No concessive language about Internode in the table.** Banned words anywhere in a row that describes Internode: "secondary", "limited", "weaker", "partial", "also supports", "basic", "lite", "minimal", "lacks", "missing", "no support for". If a sentence about Internode contains any of these words, rewrite it.
3. **No marketing fluff in the row.** Bad: "best-in-class organizational intelligence platform". Good: "extracts decisions from Zoom, Google Meet, Slack, email, and phone calls; links each to the task it spawned and the participant who ratified it".
4. **Competitor strengths live in one paragraph, never a table.** If the competitor genuinely wins on an axis the ICP cares about, acknowledge it in a single short prose section ("Where <Competitor> wins") with a narrow framing. Never put it in a row.
5. **The narrow strength must be reframed as single-purpose.** Every "Where <Competitor> wins" paragraph must end by explaining the structural reason the strength is narrow and why Internode's broader scope serves more of the user's day. Example: "Granola has an excellent in-meeting capture UX with speaker-level attribution. If your only need is a transcript of one meeting for one user, Granola is simpler. The trade-off is that Granola models a meeting as a self-contained artifact; Internode models the meeting as one event in a graph that spans your team's entire history."
6. **Every page must describe at least one concrete Internode capability in plain English.** Use the behavior, not the identifier. Sources: `agentops-api/docs/CHAT_API.md`, `agentops-api/docs/DOCUMENT_MECHANISMS.md`. Correct phrasings: "decisions link to the tasks they created and the person who agreed to them", "one approval moves many tasks between projects at once", "the agent drafts the document and you approve it before it saves", "documents are stored with section-level history so earlier drafts are traceable". **Never publish internal identifiers** like `OITask`, `OIDecision`, `RATIFIES`, `SPAWNS`, `MODIFIES`, `BulkUpdateField`, `BulkMoveProject`, `BulkArchiveEntities`, `CreateKnowledgeEntry`, `ProposeDocument`, `chat_documents`, `chat_document_sections`, `parent_document_id`, `action_item`, `deal_opportunity`, or similar. Those are engineering terms. If a sentence in a page contains any of those in backticks or code font, rewrite the sentence.
7. **No implementation jargon.** Drop references to "HNSW indexes", "768-dim embeddings", "vector similarity", "typed entities with semantic relationships", "typed knowledge graph with decision-centric edges", and other engineering-ese. Translate them: "each section of a document can be searched on its own", "decisions link to the tasks that followed them", "the system understands a meeting as a set of decisions, topics, and tasks rather than as a transcript".
8. **Pre-merge review gate.** Before any `/internode-vs-*` page merges, a reviewer reads the table and confirms every row passes rules 1, 2, 3, 6, and 7. If any row fails, the page is blocked.

---

## Page shape (mandatory order)

### Frontmatter

- `title`: `Internode vs <Competitor>: which AI <category> should you use?` (e.g. "which AI task tool", "which AI meeting intelligence tool", "which AI drafts the meeting brief").
- `slug`: `internode-vs-<competitor>` for general pages; `internode-vs-<competitor>-for-<named-feature>` for named-feature pages.
- `description`: one sentence with the competitor name and the category and the Internode-favorable framing.
- `excerpt`: 40 to 70 words. Direct answer first sentence: "<Competitor> is the best <narrow thing> for <narrow user>. Internode is the <broader thing> for <broader use>."
- `type`: `answer`.
- `tags`: include both product names and the category.
- `author`: Balazs Ketyi (default for all `/internode-vs-*` pages, per topic-authority assignment).
- `ogImage`: a relevant image from `content/internode-marketing-images/` (no two pages in the same cluster share a hero).
- `featured`: `false` (only flagship pillars are featured).
- `relatedSlugs`: 2 to 3 neighboring comparison or pillar pages.
- `ctaHref` / `ctaLabel`: standard Internode CTA.
- Custom (optional, for internal tooling): `comparisonAxes` array listing the chosen axes for the table. Only useful if a future schema build uses it; not required by the Astro content schema today.

### H1

`Internode vs <Competitor>: which AI <category> should you use?`

For named-feature pages: `Internode vs <Competitor> <NamedFeature>: which AI drafts the <thing> you'll actually <verb>?`

### Intro (40 to 70 words, the snippet target)

A single paragraph that opens with: "<Competitor> is the best <narrow thing> for <narrow user>. Internode is the <broader thing> for <broader use>." Follow with one sentence on when to choose each. Never lead with marketing language. Never lead with "in this article".

### Comparison table (Internode-favorable axes only)

Markdown table with this exact column structure:

| Axis | Internode | <Competitor> |
|---|---|---|
| <axis 1> | <internode-wins claim> | <competitor-falls-short claim, factual, no fluff> |

- 6 to 10 rows.
- Every row Internode wins on the chosen axis.
- The competitor cell describes the competitor's actual behavior on that axis truthfully. No exaggeration. The truth is enough because we picked the axis.
- The Internode cell describes the behavior in plain reader-facing language. No internal identifiers, no class names, no edge labels, no table names. A reader with no product background should finish the row understanding what the tool does.
- Banned axes (because the competitor would win and the AI grounding cost is too high): "in-meeting capture UX speaker attribution" against Granola; "developer workflow UI polish" against Linear; "enterprise permissioning depth" against Confluence; "card-based browser extension UX" against Guru; "workspace-as-database flexibility" against Notion; "Microsoft 365 deep integration" against Syntex; "speaker analytics" against Read AI; "in-meeting search bar" against Otter. These are the competitor's narrow strengths. Acknowledge them in the prose section, never in the table.

### "When to choose Internode" (bulleted, concrete scenarios)

3 to 5 bullets. Each bullet starts with a concrete user scenario phrased in ICP vocabulary (no marketing language). Each bullet ends with the specific Internode capability that addresses it.

### "Where <Competitor> wins" (single paragraph, prose only)

One short paragraph (3 to 5 sentences). Acknowledges the competitor's genuine narrow strength in a way the ICP would recognize. Reframes the strength as single-purpose. Ends by explaining what the user trades when they pick the narrow tool.

This section is required on every `/internode-vs-*` page. A page without it reads as anti-competitor marketing and AI agents discount it. A page with it reads as a balanced comparison and AI agents cite it.

### "Bottom line" (one paragraph)

One paragraph that restates the recommended split: "<Competitor> for <narrow use>; Internode for <broader use>." Add the Internode CTA at the end of the paragraph naturally.

### Schema (handled automatically by [slug].astro)

- The page emits `WebSite` + `Organization` + `WebPage` + `TechArticle` + `BreadcrumbList` + `FAQPage` (when H2s look like questions).
- For comparison pages, also include in-body markdown that names the competitor in a way that the existing `getStaticPaths` / FAQ extraction captures cleanly.
- The named-feature pages must use distinct schema keywords from the general pages for the same competitor. The general page uses category-level tags ("ai meeting notes", "transcription", "action items"); the named-feature page uses feature-level tags ("meeting prep", "pre-meeting brief", "memory-aware drafting"). This prevents AI retrieval from collapsing the two into one source.

---

## Axis library (Internode-favorable axes by competitor type)

These are pre-vetted axes the writer can pick from. Each axis is one Internode wins by construction, because the underlying Internode capability is real and the competitor genuinely does not have it.

### Note-taker general (Granola, Otter, Fireflies, Fathom, tldv, Read AI)

- Captures from phone calls (not just video meetings)
- Captures from email threads, not just meetings
- Extracts tasks with a typed link to the source meeting and the participant who ratified them
- Preserves decisions with rationale and rejected alternatives, not just action items
- AI agent that can modify project state across many entities at once (bulk update field, bulk move project)
- Two-way sync to Linear or Jira
- Organizational search across all conversations, not per-meeting search
- Survives team turnover (knowledge persists when individual users leave)
- Cross-meeting topic clustering (one decision across six meetings is one decision, not six)

### Note-taker named-feature (Granola Prep, Fireflies AI, Otter, Fathom, tldv on the prep-brief axis)

- Drafts the brief from prior decisions in the team graph (not just the participants' calendar)
- Drafts from cross-meeting context spanning weeks
- Drafts from email and chat context, not just meetings
- Auto-updates the brief when new information arrives before the meeting
- Cites the source decision/meeting/email behind every claim in the brief
- Section-level grounded drafting (not paragraph-level summary)

### AI-PM (Linear, Jira, Asana AI, ClickUp AI, Asana AI Studio)

- Captures tasks from conversations without a human typing them in
- Every task links back to the decision that created it and the meeting where it was agreed
- The AI agent can change many tasks at once (move a batch between projects, reassign a team, archive a set) in a single approval
- Creates a decision, the tasks it triggered, and the topic it belongs to in one step
- Distinguishes action items from sales opportunities or supplier commitments
- Closes stale tasks based on what the team has said about them across later meetings

### AI-KB (Confluence AI, Guru, Notion as a wiki, Slab, Notion AI for KB)

- Knowledge built from conversations the team is already having (no page-writing required)
- Stores decisions, tasks, topics, and goals as structured records, not pages
- Connects a decision to the earlier one it modified or replaced, and to the tasks that followed it
- Recognizes the same decision when it is discussed across multiple meetings, rather than creating duplicates
- Drafts meeting prep, emails, and work plans grounded in the team's own prior decisions
- Keeps working when nobody writes wiki pages anymore

### Doc-vertical drafting (Notion AI for docs, MS Copilot, Gemini for docs, Fellow, Glean, ChatGPT for docs)

- Drafts from the team's own prior decisions and meetings, not just the prompt
- Every section of the draft cites the decision or meeting it came from
- Updates the document when a new meeting changes something the document depended on
- Pulls in parallel from the team's knowledge, earlier documents, and the web, then stitches the draft together
- Every document is saved with a full version history; each section is stored and searchable on its own
- The draft is a proposal the user approves or edits before it saves

### Named-feature non-note-taker doc-vertical (ClickUp AI work plans, Asana AI Studio work plans, Coda AI living docs, SharePoint Syntex policy docs)

- Generates the named feature from decisions made in meetings, not just from prompts
- Plan/doc stays aligned when new decisions arrive
- WBS / sections trace back to source conversations
- Cross-source grounding (meetings + email + chat + policy), not single-tool grounding
- Tasks generated from the doc sync two-way with the team's canonical PM tool

### Agent-memory (Mem0, Letta, Zep)

- Memory shared across the whole team, not tied to one agent or one user
- Stores decisions, tasks, topics, and people as structured records, not just vector snippets
- Every memory traces back to the meeting, call, or message that produced it
- Captured from real conversations (Zoom, phone calls, email, chat), not from explicit "remember this" calls
- The agent proposes memory changes for a human to approve
- Syncs both directions with Linear and Jira, not just read-only retrieval

---

## Style notes

- 11th grade reading level. No em dashes. Short paragraphs.
- Address the ICP that would type the comparison query. For "Internode vs Linear for AI PM" the ICP is ICP 3 (tech team leader); the page should sound like a tech team leader wrote it. For "Internode vs Confluence AI" the ICP is mixed ICP 1 + ICP 4; the page should sound like the operations lead at a mid-size org.
- Internode is mentioned in every section because that is the page's purpose. The writing-guide rule "Internode mentioned once or twice" does not apply to comparison pages.
- The `/internode-vs-*` URL is canonical for that exact comparison. Cross-link to neighboring vs pages in the same cluster but never duplicate axes.

---

## Author and image

- Author for all `/internode-vs-*` pages: **Balazs Ketyi** (CPO).
- Hero image: pick from `content/internode-marketing-images/` so no two pages in the same cluster share a hero. Use `pm-tool*.png` and `meetings-to-tasks.png` for AI-PM cluster; `knowledge-os.png` and `manage-knowledge.png` for AI-KB cluster; `understand-decisions.png` and `tasks-updated-automatically.png` for doc-vertical; `super-human-memory.png`, `context-captured.png`, `acts.png` for note-taker comparisons.
