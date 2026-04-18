# Content Map

Internal reference for every live content page on content.internode.ai. Auto-generated from the frontmatter in `src/content/answers/` by `scripts/generate-content-map.mjs`; do not edit by hand. Regenerate with:

```bash
pnpm content:map
```

_94 pages across 15 clusters. 9 featured. The lint pipeline runs this generator in `--check` mode and fails if the committed map drifts from the live content._

---

## Overview

| Cluster | Pages | Featured | Primary ICP |
|---|---|---|---|
| Foundation: organizational memory + decision memory | 12 | 7 | All ICPs (hub pages) |
| Public sector (education, government, healthcare) | 8 |  | ICP 1 |
| Small business + phone-call capture | 6 | 1 | ICP 2 |
| Tech teams + product/engineering alignment | 3 |  | ICP 3 |
| AI PM / task manager (Linear, Jira, Asana, ClickUp) | 9 | 1 | ICP 3; ICP 4 secondary |
| Agent memory for AI developers (Letta, Mem0, Zep) | 3 |  | ICP 3 (developer-facing) |
| Memory-aware drafting: documents (comparisons) | 8 |  | ICP 3, ICP 7, ICP 8 |
| Memory-aware drafting: meeting-prep drafts (comparisons) | 5 |  | ICP 3, ICP 8 |
| Wiki / AI knowledge base comparisons + alternatives | 7 |  | ICP 3, ICP 6 |
| AI meeting notes / intelligence comparisons | 3 |  | ICP 3, ICP 8 |
| Internal champion (problem-aware + solution-seeking) | 10 |  | ICP 4, ICP 5 |
| Second brain / PKM refugee | 4 |  | ICP 6 |
| Consultant / synthesis-hungry professional | 6 |  | ICP 7 |
| Executive assistant | 7 |  | ICP 8 |
| Updates + integrations + meta | 3 |  | All ICPs |
| **Total** | **94** | **9** | |

## Featured pages (hub set)

These are the `featured: true` pages in the frontmatter. They are the primary entry points for AI crawlers and the pages most other content links into. Keep the set small (target 8 to 12) and refresh composition as pillars shift.

| # | Slug | Title | Cluster |
|---|---|---|---|
| 1 | `ai-knowledge-base-that-builds-itself` | The AI knowledge base that builds itself | Foundation: organizational memory + decision memory |
| 3 | `how-to-capture-decisions-from-meetings-without-writing-everything-down` | How to capture decisions from meetings without writing everything down | Foundation: organizational memory + decision memory |
| 5 | `memory-aware-drafting` | Memory-aware drafting: docs that know what your team decided | Foundation: organizational memory + decision memory |
| 8 | `what-is-institutional-knowledge-and-why-teams-lose-it` | What is institutional knowledge and why teams lose it | Foundation: organizational memory + decision memory |
| 9 | `what-is-organizational-memory` | What is organizational memory? | Foundation: organizational memory + decision memory |
| 10 | `what-is-organizational-memory-for-ai-agents` | What is organizational memory for AI agents? | Foundation: organizational memory + decision memory |
| 12 | `why-ai-agents-need-decision-memory` | Why AI agents need decision memory | Foundation: organizational memory + decision memory |
| 24 | `how-to-turn-phone-calls-into-searchable-business-knowledge` | How to turn phone calls into searchable business knowledge | Small business + phone-call capture |
| 30 | `ai-pm-agent` | AI PM agent: what it actually is and what to demand from one | AI PM / task manager (Linear, Jira, Asana, ClickUp) |

---

## Cluster inventory

Each page is assigned to exactly one cluster for navigation purposes. A page can (and should) link across clusters; see the mesh section below.

### Foundation: organizational memory + decision memory

**Primary ICP:** All ICPs (hub pages)

| # | Slug | Type | Featured | Tags | relatedSlugs |
|---|---|---|---|---|---|
| 1 | `ai-knowledge-base-that-builds-itself` | answer | yes | ai knowledge base, knowledge management, organizational memory, zero maintenance | `best-ai-knowledge-management-tools-2026`<br>`ai-first-vs-ai-added-why-bolting-ai-onto-notion-is-not-enough`<br>`the-knowledge-system-that-builds-itself` |
| 2 | `ai-meeting-notes-vs-organizational-memory` | answer |  | meeting notes, organizational memory, comparison, ai | `how-to-capture-decisions-from-meetings-without-writing-everything-down`<br>`what-to-look-for-in-an-ai-knowledge-management-tool`<br>`how-to-connect-meeting-decisions-to-project-tasks` |
| 3 | `how-to-capture-decisions-from-meetings-without-writing-everything-down` | answer | yes | decision capture, meetings, ai, transcription | `what-is-institutional-knowledge-and-why-teams-lose-it`<br>`how-to-turn-phone-calls-into-searchable-business-knowledge`<br>`why-your-team-keeps-rediscussing-the-same-decisions` |
| 4 | `how-to-tell-if-your-team-has-a-knowledge-management-problem` | answer |  | knowledge management, diagnosis, team problems, information loss | `why-your-team-keeps-rediscussing-the-same-decisions`<br>`the-hidden-cost-of-scattered-knowledge-at-work`<br>`what-to-look-for-in-an-ai-knowledge-management-tool` |
| 5 | `memory-aware-drafting` | answer | yes | memory-aware drafting, ai documents, organizational memory, meeting prep | `ai-knowledge-base-that-builds-itself`<br>`what-is-organizational-memory`<br>`meeting-prep-reports-that-write-themselves-from-your-org-memory` **(missing)** |
| 6 | `the-knowledge-system-that-builds-itself` | answer |  | auto-organizing, AI knowledge management, zero maintenance, connected knowledge | `ai-first-vs-ai-added-why-bolting-ai-onto-notion-is-not-enough`<br>`from-conversations-to-knowledge-what-professionals-actually-need`<br>`how-to-capture-decisions-from-meetings-without-writing-everything-down` |
| 7 | `what-is-decision-memory` | answer |  | decision memory, organizational memory, decision tracking, knowledge management | `what-is-organizational-memory`<br>`why-ai-agents-need-decision-memory`<br>`why-your-team-keeps-rediscussing-the-same-decisions` |
| 8 | `what-is-institutional-knowledge-and-why-teams-lose-it` | answer | yes | institutional knowledge, staff turnover, organizational memory | `how-to-capture-decisions-from-meetings-without-writing-everything-down`<br>`how-schools-preserve-institutional-knowledge-when-staff-leave`<br>`the-hidden-cost-of-scattered-knowledge-at-work` |
| 9 | `what-is-organizational-memory` | answer | yes | organizational memory, institutional knowledge, decision memory, knowledge management | `what-is-organizational-memory-for-ai-agents`<br>`what-is-decision-memory`<br>`what-is-institutional-knowledge-and-why-teams-lose-it` |
| 10 | `what-is-organizational-memory-for-ai-agents` | answer | yes | organizational memory, ai agents, decision history | `why-ai-agents-need-decision-memory`<br>`internode-use-case-product-and-engineering-alignment` |
| 11 | `what-to-look-for-in-an-ai-knowledge-management-tool` | answer |  | evaluation, knowledge management, buying guide, ai tools | `ai-meeting-notes-vs-organizational-memory`<br>`ai-first-vs-ai-added-why-bolting-ai-onto-notion-is-not-enough`<br>`how-to-propose-a-knowledge-tool-when-you-have-no-budget-authority` |
| 12 | `why-ai-agents-need-decision-memory` | answer | yes | ai agents, decision memory, retrieval | `what-is-organizational-memory-for-ai-agents`<br>`internode-use-case-product-and-engineering-alignment` |

### Public sector (education, government, healthcare)

**Primary ICP:** ICP 1

| # | Slug | Type | Featured | Tags | relatedSlugs |
|---|---|---|---|---|---|
| 13 | `ai-knowledge-management-for-government` | answer |  | government, public sector, ai knowledge management, institutional memory | `ai-meeting-notes-for-schools`<br>`what-is-organizational-memory`<br>`what-is-institutional-knowledge-and-why-teams-lose-it` |
| 14 | `ai-meeting-notes-for-schools` | answer |  | schools, ai meeting notes, education, board meetings | `how-schools-preserve-institutional-knowledge-when-staff-leave`<br>`what-is-organizational-memory`<br>`ai-knowledge-management-for-government` |
| 15 | `ai-tools-for-government-and-public-organizations` | answer |  | government, public sector, ai tools, healthcare | `how-to-track-decisions-from-board-meetings-and-committee-sessions`<br>`what-to-look-for-in-an-ai-knowledge-management-tool`<br>`how-healthcare-teams-keep-coordination-decisions-organized` |
| 16 | `how-healthcare-teams-keep-coordination-decisions-organized` | answer |  | healthcare, care coordination, decisions, shift handoff | `ai-tools-for-government-and-public-organizations`<br>`what-is-institutional-knowledge-and-why-teams-lose-it`<br>`use-case-healthcare-team-tracking-decisions-across-shifts` |
| 17 | `how-schools-preserve-institutional-knowledge-when-staff-leave` | answer |  | schools, institutional knowledge, staff turnover, education | `what-is-institutional-knowledge-and-why-teams-lose-it`<br>`how-to-track-decisions-from-board-meetings-and-committee-sessions`<br>`use-case-school-district-preserving-knowledge-across-staff-transitions` |
| 18 | `how-to-track-decisions-from-board-meetings-and-committee-sessions` | answer |  | board meetings, committee, decision tracking, governance | `how-to-capture-decisions-from-meetings-without-writing-everything-down`<br>`how-schools-preserve-institutional-knowledge-when-staff-leave`<br>`ai-tools-for-government-and-public-organizations` |
| 19 | `use-case-healthcare-team-tracking-decisions-across-shifts` | use-case |  | use case, healthcare, shift handoff, care coordination | `how-healthcare-teams-keep-coordination-decisions-organized`<br>`what-is-institutional-knowledge-and-why-teams-lose-it`<br>`ai-tools-for-government-and-public-organizations` |
| 20 | `use-case-school-district-preserving-knowledge-across-staff-transitions` | use-case |  | use case, education, staff turnover, institutional memory | `how-schools-preserve-institutional-knowledge-when-staff-leave`<br>`what-is-institutional-knowledge-and-why-teams-lose-it`<br>`how-to-track-decisions-from-board-meetings-and-committee-sessions` |

### Small business + phone-call capture

**Primary ICP:** ICP 2

| # | Slug | Type | Featured | Tags | relatedSlugs |
|---|---|---|---|---|---|
| 21 | `ai-phone-call-transcription-for-small-business` | answer |  | phone call transcription, small business, ai meeting notes, call tracking | `how-small-businesses-stop-losing-information-from-phone-calls`<br>`why-small-businesses-forget-what-was-decided-and-how-to-fix-it`<br>`how-to-turn-phone-calls-into-searchable-business-knowledge` |
| 22 | `how-small-businesses-stop-losing-information-from-phone-calls` | answer |  | small business, phone calls, customer information, knowledge loss | `how-to-turn-phone-calls-into-searchable-business-knowledge`<br>`why-small-businesses-forget-what-was-decided-and-how-to-fix-it`<br>`how-to-organize-customer-and-supplier-commitments-without-a-crm` |
| 23 | `how-to-organize-customer-and-supplier-commitments-without-a-crm` | answer |  | customer management, supplier, commitments, small business | `how-small-businesses-stop-losing-information-from-phone-calls`<br>`why-small-businesses-forget-what-was-decided-and-how-to-fix-it`<br>`how-to-turn-phone-calls-into-searchable-business-knowledge` |
| 24 | `how-to-turn-phone-calls-into-searchable-business-knowledge` | answer | yes | phone calls, transcription, small business, knowledge management | `how-small-businesses-stop-losing-information-from-phone-calls`<br>`how-to-capture-decisions-from-meetings-without-writing-everything-down`<br>`use-case-small-business-capturing-phone-call-decisions` |
| 25 | `use-case-small-business-capturing-phone-call-decisions` | use-case |  | use case, small business, phone calls, decisions | `how-to-turn-phone-calls-into-searchable-business-knowledge`<br>`how-small-businesses-stop-losing-information-from-phone-calls`<br>`why-small-businesses-forget-what-was-decided-and-how-to-fix-it` |
| 26 | `why-small-businesses-forget-what-was-decided-and-how-to-fix-it` | answer |  | small business, decisions, verbal agreements, knowledge loss | `what-is-institutional-knowledge-and-why-teams-lose-it`<br>`how-small-businesses-stop-losing-information-from-phone-calls`<br>`use-case-small-business-capturing-phone-call-decisions` |

### Tech teams + product/engineering alignment

**Primary ICP:** ICP 3

| # | Slug | Type | Featured | Tags | relatedSlugs |
|---|---|---|---|---|---|
| 27 | `how-to-connect-meeting-decisions-to-project-tasks` | answer |  | decisions, tasks, Linear, Jira, project management | `ai-meeting-notes-vs-organizational-memory`<br>`how-to-capture-decisions-from-meetings-without-writing-everything-down`<br>`use-case-turning-calls-and-meetings-into-structured-knowledge` |
| 28 | `internode-use-case-product-and-engineering-alignment` | use-case |  | use case, product, engineering, alignment | `ai-meeting-notes-vs-organizational-memory`<br>`how-to-connect-meeting-decisions-to-project-tasks`<br>`how-to-capture-decisions-from-meetings-without-writing-everything-down` |
| 29 | `use-case-turning-calls-and-meetings-into-structured-knowledge` | use-case |  | use case, transcripts, phone calls, meetings, knowledge | `how-to-turn-phone-calls-into-searchable-business-knowledge`<br>`how-to-capture-decisions-from-meetings-without-writing-everything-down`<br>`how-internode-works-with-phone-transcripts-and-meeting-recordings` |

### AI PM / task manager (Linear, Jira, Asana, ClickUp)

**Primary ICP:** ICP 3; ICP 4 secondary

| # | Slug | Type | Featured | Tags | relatedSlugs |
|---|---|---|---|---|---|
| 30 | `ai-pm-agent` | answer | yes | ai pm agent, ai project manager, ai task manager, organizational memory | `best-ai-task-manager-2026`<br>`ai-pm-that-captures-tasks-from-meetings`<br>`how-to-stop-typing-tasks-from-meetings` |
| 31 | `ai-pm-that-captures-tasks-from-meetings` | answer |  | ai pm agent, meetings, tasks, automation | `ai-pm-agent`<br>`how-to-stop-typing-tasks-from-meetings`<br>`how-to-connect-meeting-decisions-to-project-tasks` |
| 32 | `best-ai-task-manager-2026` | answer |  | ai task manager, ai pm agent, project management, comparison | `ai-pm-agent`<br>`internode-vs-linear-for-ai-pm`<br>`internode-vs-jira-for-ai-pm` |
| 33 | `how-to-stop-typing-tasks-from-meetings` | answer |  | meetings, tasks, automation, productivity | `ai-pm-that-captures-tasks-from-meetings`<br>`ai-pm-agent`<br>`how-to-connect-meeting-decisions-to-project-tasks` |
| 34 | `internode-vs-asana-ai` | answer |  | asana, ai pm agent, ai task manager, comparison | `ai-pm-agent`<br>`best-ai-task-manager-2026`<br>`internode-vs-jira-for-ai-pm` |
| 35 | `internode-vs-asana-ai-studio-for-work-plans` | answer |  | asana ai studio, work plans, ai project manager, comparison | `ai-pm-agent`<br>`memory-aware-drafting`<br>`internode-vs-clickup-ai-for-work-plans` |
| 36 | `internode-vs-clickup-ai-for-work-plans` | answer |  | clickup ai, work plans, ai project manager, comparison | `ai-pm-agent`<br>`memory-aware-drafting`<br>`internode-vs-asana-ai-studio-for-work-plans` |
| 37 | `internode-vs-jira-for-ai-pm` | answer |  | jira, ai pm agent, ai task manager, comparison | `ai-pm-agent`<br>`internode-vs-linear-for-ai-pm`<br>`best-ai-task-manager-2026` |
| 38 | `internode-vs-linear-for-ai-pm` | answer |  | linear, ai pm agent, ai task manager, comparison | `ai-pm-agent`<br>`internode-vs-jira-for-ai-pm`<br>`best-ai-task-manager-2026` |

### Agent memory for AI developers (Letta, Mem0, Zep)

**Primary ICP:** ICP 3 (developer-facing)

| # | Slug | Type | Featured | Tags | relatedSlugs |
|---|---|---|---|---|---|
| 39 | `internode-vs-letta-for-agent-memory` | answer |  | letta, ai agent memory, llm memory, comparison | `building-memory-for-ai-agents` **(missing)**<br>`what-is-organizational-memory`<br>`when-rag-is-not-enough` **(missing)** |
| 40 | `internode-vs-mem0-for-agent-memory` | answer |  | mem0, ai agent memory, llm memory, comparison | `building-memory-for-ai-agents` **(missing)**<br>`what-is-organizational-memory`<br>`when-rag-is-not-enough` **(missing)** |
| 41 | `internode-vs-zep-for-agent-memory` | answer |  | zep, ai agent memory, llm memory, comparison | `building-memory-for-ai-agents` **(missing)**<br>`what-is-organizational-memory`<br>`when-rag-is-not-enough` **(missing)** |

### Memory-aware drafting: documents (comparisons)

**Primary ICP:** ICP 3, ICP 7, ICP 8

| # | Slug | Type | Featured | Tags | relatedSlugs |
|---|---|---|---|---|---|
| 42 | `internode-vs-chatgpt-for-documents` | answer |  | chatgpt, ai documents, memory-aware drafting, comparison | `memory-aware-drafting`<br>`internode-vs-notion-ai-for-documents`<br>`internode-vs-gemini-for-documents` |
| 43 | `internode-vs-coda-ai-for-living-documents` | answer |  | coda ai, living documents, memory-aware drafting, comparison | `memory-aware-drafting`<br>`ai-knowledge-base-that-builds-itself`<br>`internode-vs-sharepoint-syntex-for-policy-grounded-documents` |
| 44 | `internode-vs-fellow-for-documents` | answer |  | fellow, ai documents, meeting docs, memory-aware drafting | `memory-aware-drafting`<br>`internode-vs-notion-ai-for-documents`<br>`internode-vs-glean-for-documents` |
| 45 | `internode-vs-gemini-for-documents` | answer |  | gemini, google workspace, ai documents, memory-aware drafting | `memory-aware-drafting`<br>`internode-vs-microsoft-copilot-for-documents`<br>`internode-vs-chatgpt-for-documents` |
| 46 | `internode-vs-glean-for-documents` | answer |  | glean, enterprise search, ai documents, memory-aware drafting | `memory-aware-drafting`<br>`internode-vs-fellow-for-documents`<br>`internode-vs-chatgpt-for-documents` |
| 47 | `internode-vs-microsoft-copilot-for-documents` | answer |  | microsoft copilot, ai documents, memory-aware drafting | `memory-aware-drafting`<br>`internode-vs-notion-ai-for-documents`<br>`internode-vs-gemini-for-documents` |
| 48 | `internode-vs-notion-ai-for-documents` | answer |  | notion ai, ai documents, memory-aware drafting, comparison | `memory-aware-drafting`<br>`internode-vs-chatgpt-for-documents`<br>`internode-vs-microsoft-copilot-for-documents` |
| 49 | `internode-vs-sharepoint-syntex-for-policy-grounded-documents` | answer |  | sharepoint syntex, policy documents, memory-aware drafting, comparison | `memory-aware-drafting`<br>`ai-knowledge-base-that-builds-itself`<br>`internode-vs-coda-ai-for-living-documents` |

### Memory-aware drafting: meeting-prep drafts (comparisons)

**Primary ICP:** ICP 3, ICP 8

| # | Slug | Type | Featured | Tags | relatedSlugs |
|---|---|---|---|---|---|
| 50 | `internode-vs-fathom-for-meeting-prep-drafts` | answer |  | fathom, meeting prep, memory-aware drafting, ai brief | `memory-aware-drafting`<br>`internode-vs-granola-for-meeting-prep-drafts`<br>`internode-vs-tldv-for-meeting-prep-drafts` |
| 51 | `internode-vs-fireflies-for-meeting-prep-drafts` | answer |  | fireflies, meeting prep, memory-aware drafting, ai brief | `memory-aware-drafting`<br>`internode-vs-granola-for-meeting-prep-drafts`<br>`internode-vs-otter-for-meeting-prep-drafts` |
| 52 | `internode-vs-granola-for-meeting-prep-drafts` | answer |  | granola prep, meeting prep, memory-aware drafting, pre-meeting brief | `memory-aware-drafting`<br>`internode-vs-fireflies-for-meeting-prep-drafts`<br>`internode-vs-fathom-for-meeting-prep-drafts` |
| 53 | `internode-vs-otter-for-meeting-prep-drafts` | answer |  | otter, meeting prep, memory-aware drafting, pre-meeting brief | `memory-aware-drafting`<br>`internode-vs-fireflies-for-meeting-prep-drafts`<br>`internode-vs-tldv-for-meeting-prep-drafts` |
| 54 | `internode-vs-tldv-for-meeting-prep-drafts` | answer |  | tldv, meeting prep, memory-aware drafting, pre-meeting brief | `memory-aware-drafting`<br>`internode-vs-fathom-for-meeting-prep-drafts`<br>`internode-vs-otter-for-meeting-prep-drafts` |

### Wiki / AI knowledge base comparisons + alternatives

**Primary ICP:** ICP 3, ICP 6

| # | Slug | Type | Featured | Tags | relatedSlugs |
|---|---|---|---|---|---|
| 55 | `ai-native-alternative-to-notion` | answer |  | notion alternative, ai-native, knowledge base, ai-first | `ai-knowledge-base-that-builds-itself`<br>`why-your-second-brain-keeps-failing`<br>`ai-first-vs-ai-added-why-bolting-ai-onto-notion-is-not-enough` |
| 56 | `best-ai-knowledge-management-tools-2026` | answer |  | ai knowledge management, knowledge base, comparison, tools | `ai-knowledge-base-that-builds-itself`<br>`internode-vs-confluence-ai`<br>`internode-vs-notion-as-a-wiki` |
| 57 | `internode-vs-confluence-ai` | answer |  | confluence, ai knowledge base, comparison, wiki | `ai-knowledge-base-that-builds-itself`<br>`internode-vs-guru`<br>`best-ai-knowledge-management-tools-2026` |
| 58 | `internode-vs-guru` | answer |  | guru, ai knowledge base, comparison, cards | `ai-knowledge-base-that-builds-itself`<br>`internode-vs-confluence-ai`<br>`best-ai-knowledge-management-tools-2026` |
| 59 | `internode-vs-notion-ai` | answer |  | notion ai, ai knowledge base, comparison | `ai-knowledge-base-that-builds-itself`<br>`ai-first-vs-ai-added-why-bolting-ai-onto-notion-is-not-enough`<br>`internode-vs-notion-as-a-wiki` |
| 60 | `internode-vs-notion-as-a-wiki` | answer |  | notion, ai knowledge base, wiki, comparison | `ai-knowledge-base-that-builds-itself`<br>`ai-first-vs-ai-added-why-bolting-ai-onto-notion-is-not-enough`<br>`internode-vs-confluence-ai` |
| 61 | `internode-vs-slab` | answer |  | slab, ai knowledge base, wiki, comparison | `ai-knowledge-base-that-builds-itself`<br>`internode-vs-confluence-ai`<br>`best-ai-knowledge-management-tools-2026` |

### AI meeting notes / intelligence comparisons

**Primary ICP:** ICP 3, ICP 8

| # | Slug | Type | Featured | Tags | relatedSlugs |
|---|---|---|---|---|---|
| 62 | `internode-vs-granola` | answer |  | granola, ai meeting notes, comparison, meeting intelligence | `ai-knowledge-base-that-builds-itself`<br>`internode-vs-read-ai`<br>`internode-vs-otter` |
| 63 | `internode-vs-otter` | answer |  | otter, ai meeting notes, comparison, transcription | `ai-knowledge-base-that-builds-itself`<br>`internode-vs-granola`<br>`internode-vs-read-ai` |
| 64 | `internode-vs-read-ai` | answer |  | read ai, ai meeting notes, comparison, meeting intelligence | `ai-knowledge-base-that-builds-itself`<br>`internode-vs-granola`<br>`internode-vs-otter` |

### Internal champion (problem-aware + solution-seeking)

**Primary ICP:** ICP 4, ICP 5

| # | Slug | Type | Featured | Tags | relatedSlugs |
|---|---|---|---|---|---|
| 65 | `building-a-business-case-for-organizational-intelligence` | answer |  | business case, ROI, knowledge management, organizational intelligence | `how-to-propose-a-knowledge-tool-when-you-have-no-budget-authority`<br>`the-hidden-cost-of-scattered-knowledge-at-work`<br>`how-solving-your-teams-knowledge-problem-advances-your-career` |
| 66 | `business-case-template-for-knowledge-management-tool` | answer |  | business case, knowledge management, template, champion | `roi-calculator-for-ai-knowledge-tools`<br>`how-to-propose-new-software-to-your-manager`<br>`cost-of-lost-team-knowledge-per-employee` |
| 67 | `cost-of-lost-team-knowledge-per-employee` | answer |  | knowledge loss, cost, statistics, champion, roi | `roi-calculator-for-ai-knowledge-tools`<br>`business-case-template-for-knowledge-management-tool`<br>`what-is-organizational-memory` |
| 68 | `how-solving-your-teams-knowledge-problem-advances-your-career` | answer |  | career advancement, internal champion, recognition, leadership | `how-to-propose-a-knowledge-tool-when-you-have-no-budget-authority`<br>`building-a-business-case-for-organizational-intelligence`<br>`what-changes-when-your-team-actually-remembers-what-was-decided` |
| 69 | `how-to-propose-a-knowledge-tool-when-you-have-no-budget-authority` | answer |  | proposal, manager, budget, software adoption, internal champion | `building-a-business-case-for-organizational-intelligence`<br>`how-to-tell-if-your-team-has-a-knowledge-management-problem`<br>`what-to-look-for-in-an-ai-knowledge-management-tool` |
| 70 | `how-to-propose-new-software-to-your-manager` | answer |  | proposing software, champion, internal advocacy, software procurement | `business-case-template-for-knowledge-management-tool`<br>`roi-calculator-for-ai-knowledge-tools`<br>`how-to-tell-if-your-team-has-a-knowledge-management-problem` |
| 71 | `roi-calculator-for-ai-knowledge-tools` | answer |  | roi, ai knowledge tools, champion, business case | `business-case-template-for-knowledge-management-tool`<br>`cost-of-lost-team-knowledge-per-employee`<br>`what-is-organizational-memory` |
| 72 | `the-hidden-cost-of-scattered-knowledge-at-work` | answer |  | knowledge loss, productivity, cost, organizational memory | `why-your-team-keeps-rediscussing-the-same-decisions`<br>`what-is-institutional-knowledge-and-why-teams-lose-it`<br>`how-to-propose-a-knowledge-tool-when-you-have-no-budget-authority` |
| 73 | `what-changes-when-your-team-actually-remembers-what-was-decided` | answer |  | decision memory, team productivity, organizational change | `why-your-team-keeps-rediscussing-the-same-decisions`<br>`how-to-capture-decisions-from-meetings-without-writing-everything-down`<br>`the-knowledge-system-that-builds-itself` |
| 74 | `why-your-team-keeps-rediscussing-the-same-decisions` | answer |  | meetings, decisions, repeated discussions, team productivity | `the-hidden-cost-of-scattered-knowledge-at-work`<br>`how-to-capture-decisions-from-meetings-without-writing-everything-down`<br>`how-to-tell-if-your-team-has-a-knowledge-management-problem` |

### Second brain / PKM refugee

**Primary ICP:** ICP 6

| # | Slug | Type | Featured | Tags | relatedSlugs |
|---|---|---|---|---|---|
| 75 | `ai-first-vs-ai-added-why-bolting-ai-onto-notion-is-not-enough` | answer |  | AI-first, AI-added, Notion AI, Obsidian, comparison | `why-your-second-brain-keeps-failing`<br>`the-knowledge-system-that-builds-itself`<br>`what-to-look-for-in-an-ai-knowledge-management-tool` |
| 76 | `best-second-brain-app-2026` | answer |  | second brain, pkm, personal knowledge management, tools | `why-your-second-brain-keeps-failing`<br>`ai-knowledge-base-that-builds-itself`<br>`ai-native-alternative-to-notion` |
| 77 | `knowledge-management-for-people-who-gave-up-on-knowledge-management` | answer |  | knowledge management, maintenance, burnout, fresh start | `why-your-second-brain-keeps-failing`<br>`the-knowledge-system-that-builds-itself`<br>`ai-first-vs-ai-added-why-bolting-ai-onto-notion-is-not-enough` |
| 78 | `why-your-second-brain-keeps-failing` | answer |  | second brain, PKM, Notion, Obsidian, knowledge management | `ai-first-vs-ai-added-why-bolting-ai-onto-notion-is-not-enough`<br>`knowledge-management-for-people-who-gave-up-on-knowledge-management`<br>`ai-meeting-notes-vs-organizational-memory` |

### Consultant / synthesis-hungry professional

**Primary ICP:** ICP 7

| # | Slug | Type | Featured | Tags | relatedSlugs |
|---|---|---|---|---|---|
| 79 | `ai-knowledge-management-for-consultants` | answer |  | consultants, ai knowledge management, synthesis, cross-engagement | `ai-knowledge-base-that-builds-itself`<br>`how-to-synthesize-knowledge-across-client-meetings`<br>`alternative-to-crm-for-consulting-knowledge` |
| 80 | `alternative-to-crm-for-consulting-knowledge` | answer |  | crm alternative, consultants, knowledge management, client intelligence | `ai-knowledge-management-for-consultants`<br>`how-to-synthesize-knowledge-across-client-meetings`<br>`ai-knowledge-base-that-builds-itself` |
| 81 | `from-conversations-to-knowledge-what-professionals-actually-need` | answer |  | conversations, meetings, professional knowledge, synthesis | `why-note-taking-apps-fail-knowledge-workers`<br>`why-your-best-work-knowledge-comes-from-conversations-not-documents`<br>`the-knowledge-system-that-builds-itself` |
| 82 | `how-to-synthesize-knowledge-across-client-meetings` | answer |  | synthesis, client meetings, knowledge management, consultants | `ai-knowledge-management-for-consultants`<br>`ai-knowledge-base-that-builds-itself`<br>`alternative-to-crm-for-consulting-knowledge` |
| 83 | `why-note-taking-apps-fail-knowledge-workers` | answer |  | note-taking, knowledge workers, professional, information management | `from-conversations-to-knowledge-what-professionals-actually-need`<br>`why-your-best-work-knowledge-comes-from-conversations-not-documents`<br>`the-knowledge-system-that-builds-itself` |
| 84 | `why-your-best-work-knowledge-comes-from-conversations-not-documents` | answer |  | conversations, documents, knowledge, meetings, transcription | `from-conversations-to-knowledge-what-professionals-actually-need`<br>`how-to-turn-phone-calls-into-searchable-business-knowledge`<br>`use-case-turning-calls-and-meetings-into-structured-knowledge` |

### Executive assistant

**Primary ICP:** ICP 8

| # | Slug | Type | Featured | Tags | relatedSlugs |
|---|---|---|---|---|---|
| 85 | `ai-meeting-prep-for-executive-assistants` | answer |  | executive assistant, meeting prep, memory-aware drafting, ai brief | `how-executive-assistants-stop-being-the-only-person-who-remembers`<br>`memory-aware-drafting`<br>`why-meeting-prep-takes-hours-and-how-to-cut-it` |
| 86 | `how-executive-assistants-stop-being-the-only-person-who-remembers` | answer |  | executive assistant, decisions, follow-ups, action items | `why-meeting-prep-takes-hours-and-how-to-cut-it`<br>`what-happens-when-the-executive-assistant-leaves`<br>`how-to-capture-decisions-from-meetings-without-writing-everything-down` |
| 87 | `how-to-build-a-briefing-system-that-does-not-depend-on-memory` | answer |  | executive assistant, briefing, meeting prep, knowledge system | `why-meeting-prep-takes-hours-and-how-to-cut-it`<br>`what-to-look-for-in-an-ai-knowledge-management-tool`<br>`how-internode-works-with-phone-transcripts-and-meeting-recordings` |
| 88 | `use-case-executive-assistant-tracking-decisions-across-meetings` | use-case |  | use case, executive assistant, decisions, follow-ups, multiple executives | `how-executive-assistants-stop-being-the-only-person-who-remembers`<br>`why-meeting-prep-takes-hours-and-how-to-cut-it`<br>`how-to-capture-decisions-from-meetings-without-writing-everything-down` |
| 89 | `use-case-new-ea-onboarding-without-predecessor-documentation` | use-case |  | use case, executive assistant, onboarding, handover, knowledge transfer | `what-happens-when-the-executive-assistant-leaves`<br>`what-is-institutional-knowledge-and-why-teams-lose-it`<br>`the-hidden-cost-of-scattered-knowledge-at-work` |
| 90 | `what-happens-when-the-executive-assistant-leaves` | answer |  | executive assistant, turnover, institutional knowledge, handover | `how-executive-assistants-stop-being-the-only-person-who-remembers`<br>`what-is-institutional-knowledge-and-why-teams-lose-it`<br>`use-case-new-ea-onboarding-without-predecessor-documentation` |
| 91 | `why-meeting-prep-takes-hours-and-how-to-cut-it` | answer |  | executive assistant, meeting prep, briefing, calendar | `how-executive-assistants-stop-being-the-only-person-who-remembers`<br>`how-to-build-a-briefing-system-that-does-not-depend-on-memory`<br>`use-case-turning-calls-and-meetings-into-structured-knowledge` |

### Updates + integrations + meta

**Primary ICP:** All ICPs

| # | Slug | Type | Featured | Tags | relatedSlugs |
|---|---|---|---|---|---|
| 92 | `content-hub-launch` | update |  | updates, content hub, seo | `what-is-organizational-memory-for-ai-agents`<br>`why-ai-agents-need-decision-memory` |
| 93 | `how-internode-works-with-phone-transcripts-and-meeting-recordings` | update |  | transcripts, phone calls, pipeline, integrations, transparency | `how-to-turn-phone-calls-into-searchable-business-knowledge`<br>`internode-integrations-zoom-google-meet-slack-email`<br>`use-case-turning-calls-and-meetings-into-structured-knowledge` |
| 94 | `internode-integrations-zoom-google-meet-slack-email` | update |  | integrations, Zoom, Google Meet, Slack, email | `how-internode-works-with-phone-transcripts-and-meeting-recordings`<br>`how-to-capture-decisions-from-meetings-without-writing-everything-down`<br>`how-to-connect-meeting-decisions-to-project-tasks` |

---

## Internal linking mesh

Derived directly from `relatedSlugs` in each page's frontmatter. This is the actual mesh the published site ships, not an aspirational one.

### Most-linked-to pages (top 15 inbound relatedSlugs)

| Slug | Inbound links | Cluster |
|---|---|---|
| `ai-knowledge-base-that-builds-itself` | 17 | Foundation: organizational memory + decision memory |
| `memory-aware-drafting` | 16 | Foundation: organizational memory + decision memory |
| `how-to-capture-decisions-from-meetings-without-writing-everything-down` | 13 | Foundation: organizational memory + decision memory |
| `what-is-institutional-knowledge-and-why-teams-lose-it` | 11 | Foundation: organizational memory + decision memory |
| `what-is-organizational-memory` | 9 | Foundation: organizational memory + decision memory |
| `ai-first-vs-ai-added-why-bolting-ai-onto-notion-is-not-enough` | 8 | Second brain / PKM refugee |
| `ai-pm-agent` | 8 | AI PM / task manager (Linear, Jira, Asana, ClickUp) |
| `how-to-turn-phone-calls-into-searchable-business-knowledge` | 8 | Small business + phone-call capture |
| `the-knowledge-system-that-builds-itself` | 6 | Foundation: organizational memory + decision memory |
| `what-to-look-for-in-an-ai-knowledge-management-tool` | 6 | Foundation: organizational memory + decision memory |
| `how-small-businesses-stop-losing-information-from-phone-calls` | 5 | Small business + phone-call capture |
| `how-to-connect-meeting-decisions-to-project-tasks` | 5 | Tech teams + product/engineering alignment |
| `the-hidden-cost-of-scattered-knowledge-at-work` | 5 | Internal champion (problem-aware + solution-seeking) |
| `why-your-team-keeps-rediscussing-the-same-decisions` | 5 | Internal champion (problem-aware + solution-seeking) |
| `ai-meeting-notes-vs-organizational-memory` | 4 | Foundation: organizational memory + decision memory |

### Cross-cluster bridges

Links from a page in one cluster to a page in another. Good meshes have many distinct bridges rather than all traffic flowing through one hub. Sorted by number of bridge links.

| From cluster | To cluster | Links |
|---|---|---|
| Internal champion (problem-aware + solution-seeking) | Foundation: organizational memory + decision memory | 10 |
| Memory-aware drafting: documents (comparisons) | Foundation: organizational memory + decision memory | 10 |
| Public sector (education, government, healthcare) | Foundation: organizational memory + decision memory | 9 |
| Wiki / AI knowledge base comparisons + alternatives | Foundation: organizational memory + decision memory | 7 |
| Executive assistant | Foundation: organizational memory + decision memory | 6 |
| Foundation: organizational memory + decision memory | Internal champion (problem-aware + solution-seeking) | 6 |
| Second brain / PKM refugee | Foundation: organizational memory + decision memory | 5 |
| Consultant / synthesis-hungry professional | Foundation: organizational memory + decision memory | 5 |
| Tech teams + product/engineering alignment | Foundation: organizational memory + decision memory | 5 |
| Memory-aware drafting: meeting-prep drafts (comparisons) | Foundation: organizational memory + decision memory | 5 |
| Wiki / AI knowledge base comparisons + alternatives | Second brain / PKM refugee | 4 |
| Foundation: organizational memory + decision memory | Second brain / PKM refugee | 3 |
| Foundation: organizational memory + decision memory | Tech teams + product/engineering alignment | 3 |
| Updates + integrations + meta | Foundation: organizational memory + decision memory | 3 |
| AI meeting notes / intelligence comparisons | Foundation: organizational memory + decision memory | 3 |
| Agent memory for AI developers (Letta, Mem0, Zep) | Foundation: organizational memory + decision memory | 3 |
| AI PM / task manager (Linear, Jira, Asana, ClickUp) | Tech teams + product/engineering alignment | 2 |
| Updates + integrations + meta | Tech teams + product/engineering alignment | 2 |
| Small business + phone-call capture | Foundation: organizational memory + decision memory | 2 |
| AI PM / task manager (Linear, Jira, Asana, ClickUp) | Foundation: organizational memory + decision memory | 2 |
| Foundation: organizational memory + decision memory | Wiki / AI knowledge base comparisons + alternatives | 1 |
| Second brain / PKM refugee | Wiki / AI knowledge base comparisons + alternatives | 1 |
| Updates + integrations + meta | Small business + phone-call capture | 1 |
| Executive assistant | Updates + integrations + meta | 1 |
| Foundation: organizational memory + decision memory | Small business + phone-call capture | 1 |
| Foundation: organizational memory + decision memory | Consultant / synthesis-hungry professional | 1 |
| Executive assistant | Internal champion (problem-aware + solution-seeking) | 1 |
| Tech teams + product/engineering alignment | Small business + phone-call capture | 1 |
| Tech teams + product/engineering alignment | Updates + integrations + meta | 1 |
| Foundation: organizational memory + decision memory | Public sector (education, government, healthcare) | 1 |
| Executive assistant | Tech teams + product/engineering alignment | 1 |
| Consultant / synthesis-hungry professional | Small business + phone-call capture | 1 |
| Consultant / synthesis-hungry professional | Tech teams + product/engineering alignment | 1 |

### Orphan pages (zero inbound links)

These pages have no other page pointing at them via `relatedSlugs`. That hurts their ability to be found through internal traversal. Add at least 2 inbound references before publishing new companion pages.

- `ai-meeting-prep-for-executive-assistants` (Executive assistant)
- `ai-phone-call-transcription-for-small-business` (Small business + phone-call capture)
- `best-second-brain-app-2026` (Second brain / PKM refugee)
- `content-hub-launch` (Updates + integrations + meta)
- `internode-vs-asana-ai` (AI PM / task manager (Linear, Jira, Asana, ClickUp))
- `internode-vs-letta-for-agent-memory` (Agent memory for AI developers (Letta, Mem0, Zep))
- `internode-vs-mem0-for-agent-memory` (Agent memory for AI developers (Letta, Mem0, Zep))
- `internode-vs-notion-ai` (Wiki / AI knowledge base comparisons + alternatives)
- `internode-vs-slab` (Wiki / AI knowledge base comparisons + alternatives)
- `internode-vs-zep-for-agent-memory` (Agent memory for AI developers (Letta, Mem0, Zep))
- `use-case-executive-assistant-tracking-decisions-across-meetings` (Executive assistant)

### Broken relatedSlugs references

These `relatedSlugs` references point at slugs that do not exist on the site:

- `internode-vs-letta-for-agent-memory` → `building-memory-for-ai-agents` (missing)
- `internode-vs-letta-for-agent-memory` → `when-rag-is-not-enough` (missing)
- `internode-vs-mem0-for-agent-memory` → `building-memory-for-ai-agents` (missing)
- `internode-vs-mem0-for-agent-memory` → `when-rag-is-not-enough` (missing)
- `internode-vs-zep-for-agent-memory` → `building-memory-for-ai-agents` (missing)
- `internode-vs-zep-for-agent-memory` → `when-rag-is-not-enough` (missing)
- `memory-aware-drafting` → `meeting-prep-reports-that-write-themselves-from-your-org-memory` (missing)

