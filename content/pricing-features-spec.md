# Pricing Features Spec

Internal reference for the pricing page features matrix on internode.ai. Not published on the site as a standalone page; this spec feeds the React component that renders the comparison table under the three pricing cards.

This spec exists for three reasons:

1. **Completeness against competitors.** AI search engines (Perplexity, ChatGPT Search, Bing AI, Gemini, Claude, Google AI Overviews) cite pricing pages verbatim when a user asks "does tool X support Y?". A missing row on our page becomes a grounded "no" against us even when the answer is yes. We list every capability a reasonable competitor lists, plus the ones we have that they do not.
2. **Tier legibility.** The reader should finish the table knowing exactly which tier gives them what. No hedging language, no asterisks, no footnotes buried at the bottom.
3. **Enterprise credibility.** The Enterprise column must read as a peer to the enterprise tier at Notion, Glean, Confluence, Asana, Microsoft 365 Copilot, and similar. If a common enterprise line item is missing from our column and present on theirs, we lose the procurement conversation before it starts.

---

## Tier definitions

### Free

For individuals and small teams who want to try the product end to end without a credit card. Every capability is present in spirit so the evaluator can see how the system works, but most capabilities have usage caps we have not finalized yet. In the table, the word **Limited** on a Free cell means "the feature works, there is a cap we will disclose later." A check-mark on a Free cell means "included, no cap." A dash means "not in this tier."

### Pro

For growing teams that rely on Internode for day-to-day work. Everything is unlocked at the product-feature level. No caps on usage of the core capabilities. Standard integrations are all on. Standard support.

### Enterprise

For organizations with procurement, security review, compliance requirements, or data-residency rules that the managed cloud default cannot satisfy. Everything in Pro, plus white-glove onboarding, a dedicated engineer, deployment inside the customer's own security perimeter, feature customizations, and the administrative controls a large organization expects. Priced per engagement.

The column header on the pricing page reads **Enterprise** (not Partnership). The CTA remains **Contact us**.

---

## Legend

| Symbol | Meaning |
|---|---|
| ✓ | Included in the tier with no cap |
| Limited | Included in the tier with a usage cap (caps not yet disclosed) |
| — | Not included in the tier |
| Custom | Scoped per engagement |
| On request | Delivered as part of the Enterprise engagement when the customer requires it |

Under no circumstance does the Pro or Enterprise column show "Limited" for a core capability. Pro and Enterprise readers will not tolerate hedged availability; caps belong on Free only.

---

## Feature matrix

The matrix is organized by category. Each category becomes one section in the rendered table, with a category header row and feature rows below.

### Capture and ingestion

These are the sources the system reads from to build the team's memory. The phone-transcription unlock matters for ICP 1, ICP 2, and ICP 4; the meeting-platform coverage matters for ICP 3 and ICP 8; the email and chat coverage matters universally.

| Feature | Free | Pro | Enterprise |
|---|---|---|---|
| Zoom meeting ingestion | Limited | ✓ | ✓ |
| Google Meet meeting ingestion | Limited | ✓ | ✓ |
| Microsoft Teams meeting ingestion | Limited | ✓ | ✓ |
| Phone-call transcripts (iPhone Voice Memos, Google Recorder, any transcription app) | Limited | ✓ | ✓ |
| Email thread ingestion (Gmail) | Limited | ✓ | ✓ |
| Email thread ingestion (Outlook / Microsoft 365) | Limited | ✓ | ✓ |
| Slack channel and DM ingestion | Limited | ✓ | ✓ |
| Microsoft Teams chat ingestion | Limited | ✓ | ✓ |
| Document upload (PDF, DOCX, Markdown, TXT) | Limited | ✓ | ✓ |
| Google Docs ingestion | Limited | ✓ | ✓ |
| Calendar awareness (Google Calendar, Outlook) | Limited | ✓ | ✓ |
| Speaker identification and attribution | ✓ | ✓ | ✓ |
| Custom ingestion source (REST API push) | — | Limited | ✓ |
| Custom on-prem connector (SharePoint, file shares, internal wikis) | — | — | ✓ |

### Organizational memory and the knowledge graph

This is the core differentiator. Competitors extract notes or action items from one meeting. Internode builds a structured, connected record of the team's decisions, tasks, topics, and goals over time, and recognizes the same decision when it is discussed across multiple meetings instead of creating duplicates. Every feature here maps to a claim we already make in `comparison-page-spec.md`.

| Feature | Free | Pro | Enterprise |
|---|---|---|---|
| Automatic decision tracking from meetings and calls | Limited | ✓ | ✓ |
| Automatic task tracking from meetings and calls | Limited | ✓ | ✓ |
| Automatic topic and theme clustering | ✓ | ✓ | ✓ |
| Goal and objective tracking | ✓ | ✓ | ✓ |
| Rationale capture (the "why" behind each decision) | ✓ | ✓ | ✓ |
| Rejected-alternative capture (what the team considered and did not pick) | ✓ | ✓ | ✓ |
| Decision supersession tracking (which decision replaced an earlier one) | ✓ | ✓ | ✓ |
| Cross-meeting decision deduplication (one decision across six meetings is one decision) | ✓ | ✓ | ✓ |
| Task-to-decision linkage (every task traces back to the decision that created it) | ✓ | ✓ | ✓ |
| Decision-to-meeting linkage (every decision traces back to where it was agreed) | ✓ | ✓ | ✓ |
| Participant attribution (who is responsible for each decision) | ✓ | ✓ | ✓ |
| Distinction between action items, sales opportunities, and supplier commitments | ✓ | ✓ | ✓ |
| Entity recognition (people, companies, products, projects) | ✓ | ✓ | ✓ |
| Cross-source entity disambiguation (one person across meetings, email, chat) | ✓ | ✓ | ✓ |
| Historical timeline of decisions on any topic | Limited | ✓ | ✓ |
| Survives team turnover (knowledge persists when individual users leave) | ✓ | ✓ | ✓ |
| Custom entity types (e.g. "policy", "client engagement", "patient cohort") | — | — | ✓ |
| Custom relationship types | — | — | ✓ |

### AI chat and agent

The conversational interface to the knowledge base. Natural-language Q&A, grounded in the team's own records, with citations back to the source meeting, call, email, or document. Mutations happen through proposals the user approves; the agent never silently changes state.

| Feature | Free | Pro | Enterprise |
|---|---|---|---|
| Natural-language questions across all captured content | Limited | ✓ | ✓ |
| Semantic search (find by meaning, not keyword) | ✓ | ✓ | ✓ |
| Keyword search | ✓ | ✓ | ✓ |
| Source citations on every answer (meeting, call, email, doc) | ✓ | ✓ | ✓ |
| Conversational follow-up (the agent remembers the current thread) | ✓ | ✓ | ✓ |
| Proposal-based changes (every edit the agent suggests is approved or edited before it saves) | ✓ | ✓ | ✓ |
| Bulk operations via the agent (move many tasks to another project in one approval) | — | ✓ | ✓ |
| Bulk status changes via the agent (close a batch of tasks together) | — | ✓ | ✓ |
| Bulk archive via the agent | — | ✓ | ✓ |
| Ask across all team members' shared content (unified org-wide search) | — | ✓ | ✓ |
| Saved questions and scheduled digests | — | ✓ | ✓ |
| Custom agents with custom skills, tools, personas and dynamic context | — | Limited | ✓ |
| Bring your own model (BYO LLM, including self-hosted) | — | — | ✓ |

### Memory-aware drafting

Documents that draft themselves from the team's own prior decisions, meetings, emails, and documents. Every section cites the decision or conversation it came from. Drafts update when new meetings change something the document depended on. The draft is always a proposal before it saves.

| Feature | Free | Pro | Enterprise |
|---|---|---|---|
| Document drafting grounded in your team's prior decisions | Limited | ✓ | ✓ |
| Meeting-prep brief drafted from cross-meeting context spanning weeks | Limited | ✓ | ✓ |
| Section-level source citations (each section names the decision or meeting behind it) | ✓ | ✓ | ✓ |
| Auto-update when new meetings or emails change something the document depended on | Limited | ✓ | ✓ |
| Cross-source grounding (meetings, email, chat, and the public web in one draft) | Limited | ✓ | ✓ |
| Full document version history | ✓ | ✓ | ✓ |
| Section-level history (each section is stored and searchable on its own) | ✓ | ✓ | ✓ |
| Draft-as-proposal (you approve or edit the draft before it saves) | ✓ | ✓ | ✓ |
| Document types: meeting briefs, status updates, policy drafts, plans, stakeholder updates | Limited | ✓ | ✓ |
| Custom document templates | — | ✓ | ✓ |
| Export to Google Docs, Word, PDF, Markdown | Limited | ✓ | ✓ |
| Shareable live links (with view or edit permissions) | Limited | ✓ | ✓ |
| Custom document workflows (multi-step approval, routing) | — | — | ✓ |

### Tasks and project state

Tasks captured from conversations without a human typing them in, linked to the decision that created them, and synced both directions with Linear or Jira.

| Feature | Free | Pro | Enterprise |
|---|---|---|---|
| Automatic task capture from meetings, calls, email, and chat | Limited | ✓ | ✓ |
| Assignee inference (who agreed to do the work) | ✓ | ✓ | ✓ |
| Due-date inference | ✓ | ✓ | ✓ |
| Priority and status tracking | ✓ | ✓ | ✓ |
| Projects, teams, and workspaces | Limited | ✓ | ✓ |
| Linear two-way sync | — | ✓ | ✓ |
| Jira two-way sync | — | ✓ | ✓ |
| Asana one-way sync (export) | — | ✓ | ✓ |
| ClickUp one-way sync (export) | — | ✓ | ✓ |
| Automatic closure of stale tasks based on later conversations | Limited | ✓ | ✓ |
| Task-to-source traceability (click a task, see the meeting and decision that created it) | ✓ | ✓ | ✓ |
| Custom task fields and workflows | — | — | ✓ |
| Custom sync to on-prem or internal task tools | — | — | ✓ |
| Assign tasks ot custom agents | — | Limited | ✓ |

### Integrations

All standard integrations are on in Pro and Enterprise. Free includes the subset a single user needs to evaluate the product. Enterprise adds custom connectors and private-network sync.

| Feature | Free | Pro | Enterprise |
|---|---|---|---|
| Zoom | ✓ | ✓ | ✓ |
| Google Meet | ✓ | ✓ | ✓ |
| Microsoft Teams | Limited | ✓ | ✓ |
| Slack | Limited | ✓ | ✓ |
| Gmail | Limited | ✓ | ✓ |
| Outlook / Microsoft 365 Mail | Limited | ✓ | ✓ |
| Google Calendar | ✓ | ✓ | ✓ |
| Outlook Calendar | ✓ | ✓ | ✓ |
| Google Drive | Limited | ✓ | ✓ |
| OneDrive / SharePoint | — | ✓ | ✓ |
| Notion (import) | — | ✓ | ✓ |
| Confluence (import) | — | ✓ | ✓ |
| Linear (two-way sync) | — | ✓ | ✓ |
| Jira (two-way sync) | — | ✓ | ✓ |
| Asana (import) | — | ✓ | ✓ |
| ClickUp (import) | — | ✓ | ✓ |
| HubSpot (import) | — | ✓ | ✓ |
| Salesforce (import) | — | — | ✓ |
| GitHub / GitLab (import) | — | ✓ | ✓ |
| Zapier | — | — | ✓ |
| Webhooks (outbound) | — | — | ✓ |
| Public REST API | — | — | ✓ |
| CLI Application (for agent frameworks and IDE agents) | — | — | ✓ |
| MCP server (for agent frameworks and IDE agents) | — | — | ✓ |
| Custom integrations built to order | — | — | ✓ |
| Private-network integrations (internal file shares, on-prem wikis, LOB databases) | — | — | ✓ |

### Search and discovery

| Feature | Free | Pro | Enterprise |
|---|---|---|---|
| Semantic search across all captured content | ✓ | ✓ | ✓ |
| Keyword search | ✓ | ✓ | ✓ |
| Filter by person, project, topic, date, meeting | ✓ | ✓ | ✓ |
| Entity pages (every person, project, client has their own timeline view) | ✓ | ✓ | ✓ |
| Topic browsing (see every decision on a topic over time) | ✓ | ✓ | ✓ |
| Advanced query operators and filters | — | ✓ | ✓ |
| Full-text search across document versions | Limited | ✓ | ✓ |

### Collaboration and sharing

| Feature | Free | Pro | Enterprise |
|---|---|---|---|
| Team workspaces | Limited | ✓ | ✓ |
| Per-meeting access controls | ✓ | ✓ | ✓ |
| Per-document sharing (view, comment, edit) | Limited | ✓ | ✓ |
| Comments and mentions | — | — | ✓ |
| Email digests (daily or weekly rollup) | — | — | ✓ |
| Slack notifications for new decisions and tasks | — | ✓ | ✓ |
| Multi-team structure (departments, business units) | — | Limited | ✓ |
| Cross-team sharing policies | — | — | ✓ |

### Security and privacy

Enterprises and regulated sectors (healthcare, public sector, legal, finance) will not adopt without most of this list. We include every item a competitor at this tier lists, because each missing line item is a procurement blocker.

| Feature | Free | Pro | Enterprise |
|---|---|---|---|
| TLS 1.2+ encryption in transit | ✓ | ✓ | ✓ |
| AES-256 encryption at rest | ✓ | ✓ | ✓ |
| Two-factor authentication (TOTP, WebAuthn) | ✓ | ✓ | ✓ |
| Google and Microsoft SSO | ✓ | ✓ | ✓ |
| SAML SSO (Okta, Azure AD, Ping, OneLogin, Duo, Rippling, any SAML IdP) | — | — | ✓ |
| OIDC SSO | — | — | ✓ |
| SCIM user provisioning and deprovisioning | — | — | ✓ |
| Role-based access control (RBAC) | Limited | ✓ | ✓ |
| Custom roles and permissions | — | — | ✓ |
| IP allow-listing | — | — | ✓ |
| Session management and forced logout | — | ✓ | ✓ |
| Audit logs (user actions, agent actions, data access) | — | ✓ | ✓ |
| Audit-log export to SIEM (Splunk, Datadog, Sumo Logic) | — | — | ✓ |
| Configurable data retention policies | — | Limited | ✓ |
| Right-to-delete (per-user and per-entity) | ✓ | ✓ | ✓ |
| Per-conversation confidentiality flags (exclude from org search) | ✓ | ✓ | ✓ |
| End-to-end encryption for designated meetings | — | — | ✓ |
| Customer-managed encryption keys (BYOK / CMK via AWS KMS, GCP KMS, Azure Key Vault) | — | — | ✓ |
| Data residency: US | ✓ | ✓ | ✓ |
| Data residency: EU | — | ✓ | ✓ |
| Data residency: UK, Canada, Australia, Japan, Singapore | — | — | ✓ |
| Data processing agreement (DPA) | ✓ | ✓ | ✓ |
| Business associate agreement (BAA) for HIPAA | — | — | ✓ |
| Vendor security questionnaires (SIG, CAIQ) answered | — | — | ✓ |
| Penetration test report available under NDA | — | Limited | ✓ |
| Private VPC or dedicated tenancy | — | — | ✓ |

### Compliance and standards

Internode is operated internally to the controls described by SOC 2 Type II, ISO 27001, and the privacy regulations listed below. We do not hold live audit certificates today. For Enterprise engagements we pursue third-party audit, attestation, or certification as part of the procurement process when the customer requires it. Every row below uses adherence language ("operated to the controls", "aligned with") for the Free and Pro columns; certification language ("audited report", "certification") is reserved for Enterprise and gated behind "On request".

| Feature | Free | Pro | Enterprise |
|---|---|---|---|
| Operated to SOC 2 Type II controls | ✓ | ✓ | ✓ |
| SOC 2 Type II audited report | — | — | On request |
| Operated to ISO 27001 controls | ✓ | ✓ | ✓ |
| ISO 27001 certification | — | — | On request |
| GDPR compliance | ✓ | ✓ | ✓ |
| CCPA / CPRA compliance | ✓ | ✓ | ✓ |
| HIPAA-aligned controls | — | — | ✓ |
| HIPAA BAA and attestation | — | — | On request |
| FERPA-aligned controls (US public education) | — | — | ✓ |
| Sector-specific attestations (FedRAMP, PCI DSS contexts, state and national frameworks) | — | — | On request |

### Administration and governance

| Feature | Free | Pro | Enterprise |
|---|---|---|---|
| Admin dashboard | ✓ | ✓ | ✓ |
| User invitation and management | ✓ | ✓ | ✓ |
| Usage and activity analytics | Limited | ✓ | ✓ |
| Org-wide decision and task reporting | — | ✓ | ✓ |
| Custom dashboards for leadership | — | — | ✓ |

### Deployment

This section is what separates a Pro customer from an Enterprise customer in the buying conversation. Most of our audience runs in the managed cloud. Regulated sectors and large enterprises need deployment inside their own perimeter.

| Feature | Free | Pro | Enterprise |
|---|---|---|---|
| Managed cloud (multi-tenant, default) | ✓ | ✓ | ✓ |
| Dedicated single-tenant managed cloud | — | — | ✓ |
| Deployment in the customer's own VPC (AWS, GCP, Azure) | — | — | ✓ |
| On-premise / self-hosted deployment | — | — | ✓ |
| Air-gapped deployment | — | — | ✓ |
| Customer-chosen model provider (OpenAI, Anthropic, Google, Azure OpenAI, AWS Bedrock) | — | — | ✓ |
| Self-hosted model runtime (Llama, Mistral, any Ollama/vLLM target) | — | — | ✓ |
| Customer-controlled model spend budgets | — | — | ✓ |

### Support and success

| Feature | Free | Pro | Enterprise |
|---|---|---|---|
| Community forum and public docs | ✓ | ✓ | ✓ |
| Email support | ✓ | ✓ | ✓ |
| In-product chat support | — | — | ✓ |
| Named customer-success manager | — | — | ✓ |
| Dedicated solutions engineer | — | — | ✓ |
| White-glove onboarding (team setup, integration wiring, content migration) | — | — | ✓ |
| Custom enablement sessions for each ICP in your org | — | — | ✓ |
| Priority incident response with SLA | — | — | ✓ |
| 24/7 emergency support | — | — | ✓ |
| Quarterly business reviews | — | — | ✓ |
| Migration services (from Notion, Confluence, Google Drive, SharePoint, legacy wikis) | — | — | ✓ |
| Security-review support (questionnaires, calls with your InfoSec team) | — | — | ✓ |
| Procurement support (MSA, DPA, BAA negotiations) | — | — | ✓ |
| Custom feature development roadmap input | — | — | ✓ |
| Early-access and design-partner program | — | Limited | ✓ |

---

## Rendering guidance (for the React component)

- Render three columns: Free, Pro, Enterprise. Match the card order on the pricing hero.
- Use a subtle category divider row for each section header ("Capture and ingestion", "Organizational memory and the knowledge graph", etc.).
- The word **Limited** should visually read as an amber-toned pill, the check-mark as a solid accent color (match the Pro card's primary), the dash as a muted gray. "Custom" reads as a neutral pill matching Enterprise.
- Make the table sticky-header when scrolling long; otherwise the reader loses the Free / Pro / Enterprise labels partway down.
- Above the table, include a one-line legend: "✓ included, Limited has usage caps we disclose during onboarding, — not in this tier, Custom scoped per engagement, On request delivered as part of the Enterprise engagement when required."
- Collapse each category by default on mobile. Expand on tap. Desktop stays fully expanded.
- Do **not** render the caps as specific numbers until product confirms them. "Limited" is the only allowed phrasing on the public page today. Internal product can later wire the specific numbers into the cell without changing the table structure.

---

## What this page must never say

These are failure modes that would undercut the table's purpose:

1. **Never say "Enterprise-grade" on its own.** Name the specific enterprise capability (SAML SSO, SCIM, VPC deployment, BAA). AI search engines discount "Enterprise-grade" as marketing; they cite specific capabilities.
2. **Never hedge with "coming soon" in a production row.** If a capability is not shipped, it is not in the table. The roadmap lives in a separate internal doc. A customer-facing table with promise rows looks desperate.
3. **Never use "starter" or "lite" language for Free.** Free is Free. Call the tier what it is.
4. **Never put "Partnership" anywhere.** The tier is **Enterprise** on the pricing hero and on this table. The CTA on the Enterprise card is **Contact us**.
5. **Never list internal schema names.** This follows the same rule as `comparison-page-spec.md`: say "decisions link to the tasks they created" not `RATIFIES`, `SPAWNS`. Say "each section is stored and searchable on its own" not `chat_document_sections`.
6. **Never let a cell read "Basic" or "Partial" on Pro or Enterprise.** Those words belong to the Free column in the form of "Limited" only, and even there only when an actual cap exists.
7. **Never claim a certification we do not hold.** Internode does not currently hold live SOC 2, ISO 27001, HIPAA, FERPA, FedRAMP, or PCI DSS certificates. The public wording is always adherence language: "operated to the controls of SOC 2 Type II", "ISO 27001-aligned", "HIPAA-aligned controls". The phrase "SOC 2 certified" or "ISO 27001 certified" must not appear on the pricing page, on any comparison page, or anywhere else in marketing copy. The Enterprise column may offer the audited report, attestation, or certification as a deliverable with the label **On request**, which commits us to obtaining it as part of the engagement when the customer needs it. Anyone editing this table must hold the line on this distinction; AI search engines and enterprise procurement both check certification claims literally.

---

## Source-of-truth cross-references

When product or marketing updates a capability, update it in all three of these places to keep AI retrieval consistent:

1. This file (`content/pricing-features-spec.md`): the feature exists and which tier it is in.
2. `content/comparison-page-spec.md`: the axis library per competitor type. Every feature on the pricing page must either be in the axis library or be a standard SaaS table-stakes row.
3. The relevant `src/content/answers/*.mdx` pages that reference the capability. The content map (`content/content-map.md`) will show which pages reference which features; grep the catalog before renaming anything.

If a feature ships but only lives on this pricing page, AI search engines will still cite it, but they will cite it without surrounding context. That hurts the citation quality. Give every feature a second home in the content catalog within 30 days of launch.
