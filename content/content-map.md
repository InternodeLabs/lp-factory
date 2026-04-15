# Content Map

Internal reference for all planned content pages. Not published on the site.

---

## Overview

| Cluster | Pages | Primary ICP |
|---|---|---|
| Cross-cutting foundation | #1, #2, #3 | All |
| Public sector | #4, #5, #6, #7 | ICP 1 |
| Small business | #8, #9, #10 | ICP 2 |
| Tech teams + comparison | #11, #12, #13 | ICP 3 |
| Use cases | #14, #15, #16, #17, #18 | Mixed |
| Updates | #19, #20 | All |
| Internal champion | #21, #22, #23, #24, #25, #26, #27 | ICP 4, ICP 5 |
| Second brain / PKM | #28, #29, #30, #31, #32, #33, #34 | ICP 6, ICP 7 |
| Executive assistant | #35, #36, #37, #38, #39, #40 | ICP 8 |

---

## Internal Linking Mesh

Each page must link to at least 2 others via `relatedSlugs` and in-body links. The mesh is designed so that AI crawlers traversing from any entry point can reach every cluster within 2 hops.

### Hub pages (link to many)

- #1 (decisions from meetings) links to: #2, #3, #5, #11, #21
- #2 (institutional knowledge) links to: #1, #4, #10, #8, #22
- #3 (phone calls to knowledge) links to: #1, #8, #15, #19, #34
- #12 (what to look for in AI KM tool) links to: #11, #6, #13, #24, #29

### Cluster-internal links

- Public sector: #4 <-> #5 <-> #6 <-> #7; each links back to #2 (institutional knowledge)
- Small business: #8 <-> #9 <-> #10; each links back to #3 (phone calls)
- Tech: #11 <-> #12 <-> #13; each links back to #1 (decisions from meetings)
- Internal champion: #21 <-> #22 <-> #23 <-> #24 <-> #25 <-> #26 <-> #27; #21 and #23 link back to #1 (decisions from meetings); #24 and #25 link to #12 (what to look for)
- Second brain / PKM: #28 <-> #29 <-> #30 <-> #31 <-> #32 <-> #33 <-> #34; #28 and #29 link to #11 (AI notes vs org memory); #30 and #32 link to #1 (decisions from meetings)
- Executive assistant: #35 <-> #36 <-> #37 <-> #38; #39 links to #35 and #36; #40 links to #37; #35 links back to #1 (decisions from meetings); #37 links back to #2 (institutional knowledge)

### Cross-cluster bridges

- #6 (AI tools for government) links to #12 (what to look for in AI KM tool)
- #10 (why SMBs forget decisions) links to #2 (institutional knowledge)
- #11 (AI notes vs org memory) links to #5 (board meeting decisions), #28 (second brain failing)
- #18 (use case: calls and meetings to knowledge) links to #3, #1, #15
- #21 (re-discussing decisions) links to #1 (decisions from meetings), #22 (hidden cost)
- #22 (hidden cost) links to #2 (institutional knowledge), #10 (why SMBs forget)
- #27 (what changes when team remembers) links to #1, #2, #30 (system that builds itself)
- #29 (AI-first vs AI-added) links to #12 (what to look for)
- #30 (system builds itself) links to #1 (decisions from meetings), #3 (phone calls)
- #34 (conversations not documents) links to #3 (phone calls), #18 (calls to knowledge)
- #35 (EA stops being the only one who remembers) links to #1 (decisions from meetings), #21 (re-discussing decisions)
- #37 (what happens when EA leaves) links to #2 (institutional knowledge), #22 (hidden cost)
- #38 (briefing system) links to #12 (what to look for in AI KM tool), #19 (how Internode works)
- #36 (meeting prep) links to #18 (calls and meetings to knowledge)

---

## Page Inventory

### #1: How to capture decisions from meetings without writing everything down

| Field | Value |
|---|---|
| Slug | `how-to-capture-decisions-from-meetings-without-writing-everything-down` |
| Type | answer |
| Question | How do you capture decisions from meetings without taking detailed notes? |
| Primary ICP | All three |
| Tags | decision capture, meetings, ai, transcription |
| Featured | true |
| relatedSlugs | what-is-institutional-knowledge-and-why-teams-lose-it, how-to-turn-phone-calls-into-searchable-business-knowledge, ai-meeting-notes-vs-organizational-memory |
| In-body links to | #2, #3, #5, #11 |
| CTA | Try Internode free |

### #2: What is institutional knowledge and why teams lose it

| Field | Value |
|---|---|
| Slug | `what-is-institutional-knowledge-and-why-teams-lose-it` |
| Type | answer |
| Question | What is institutional knowledge and why do organizations lose it? |
| Primary ICP | ICP 1, ICP 2 |
| Tags | institutional knowledge, staff turnover, organizational memory |
| Featured | true |
| relatedSlugs | how-to-capture-decisions-from-meetings-without-writing-everything-down, how-schools-preserve-institutional-knowledge-when-staff-leave, why-small-businesses-forget-what-was-decided-and-how-to-fix-it |
| In-body links to | #1, #4, #8, #10 |
| CTA | See how Internode preserves team knowledge |

### #3: How to turn phone calls into searchable business knowledge

| Field | Value |
|---|---|
| Slug | `how-to-turn-phone-calls-into-searchable-business-knowledge` |
| Type | answer |
| Question | How can I turn phone calls into organized, searchable knowledge? |
| Primary ICP | ICP 2, ICP 1 |
| Tags | phone calls, transcription, small business, knowledge management |
| Featured | true |
| relatedSlugs | how-small-businesses-stop-losing-information-from-phone-calls, how-to-capture-decisions-from-meetings-without-writing-everything-down, use-case-small-business-capturing-phone-call-decisions |
| In-body links to | #1, #8, #15, #19 |
| CTA | Try Internode with your phone transcripts |

### #4: How schools preserve institutional knowledge when staff leave

| Field | Value |
|---|---|
| Slug | `how-schools-preserve-institutional-knowledge-when-staff-leave` |
| Type | answer |
| Question | How do schools keep institutional knowledge when experienced staff leave? |
| Primary ICP | ICP 1 (education) |
| Tags | schools, institutional knowledge, staff turnover, education |
| Featured | false |
| relatedSlugs | what-is-institutional-knowledge-and-why-teams-lose-it, how-to-track-decisions-from-board-meetings-and-committee-sessions, use-case-school-district-preserving-knowledge-across-staff-transitions |
| In-body links to | #2, #5, #14 |
| CTA | See how Internode helps schools preserve knowledge |

### #5: How to track decisions from board meetings and committee sessions

| Field | Value |
|---|---|
| Slug | `how-to-track-decisions-from-board-meetings-and-committee-sessions` |
| Type | answer |
| Question | How do you track decisions made in board meetings? |
| Primary ICP | ICP 1 (all public sector) |
| Tags | board meetings, committee, decision tracking, governance |
| Featured | false |
| relatedSlugs | how-to-capture-decisions-from-meetings-without-writing-everything-down, how-schools-preserve-institutional-knowledge-when-staff-leave, ai-tools-for-government-and-public-organizations |
| In-body links to | #1, #4, #6 |
| CTA | Try Internode for your board and committee meetings |

### #6: AI tools for knowledge management in government and public organizations

| Field | Value |
|---|---|
| Slug | `ai-tools-for-government-and-public-organizations` |
| Type | answer |
| Question | What AI tools help government and public organizations manage knowledge? |
| Primary ICP | ICP 1 |
| Tags | government, public sector, ai tools, digital transformation, healthcare |
| Featured | false |
| relatedSlugs | how-to-track-decisions-from-board-meetings-and-committee-sessions, what-to-look-for-in-an-ai-knowledge-management-tool, how-healthcare-teams-keep-coordination-decisions-organized |
| In-body links to | #5, #7, #12 |
| CTA | See how Internode works for public organizations |

### #7: How healthcare teams keep care coordination decisions organized

| Field | Value |
|---|---|
| Slug | `how-healthcare-teams-keep-coordination-decisions-organized` |
| Type | answer |
| Question | How do healthcare teams track care coordination decisions across shifts and staff changes? |
| Primary ICP | ICP 1 (healthcare) |
| Tags | healthcare, care coordination, decisions, shift handoff |
| Featured | false |
| relatedSlugs | ai-tools-for-government-and-public-organizations, what-is-institutional-knowledge-and-why-teams-lose-it, use-case-healthcare-team-tracking-decisions-across-shifts |
| In-body links to | #6, #2, #17 |
| CTA | See how Internode helps healthcare teams track decisions |

### #8: How small businesses stop losing information from phone calls

| Field | Value |
|---|---|
| Slug | `how-small-businesses-stop-losing-information-from-phone-calls` |
| Type | answer |
| Question | How do small businesses keep track of important details from phone calls? |
| Primary ICP | ICP 2 |
| Tags | small business, phone calls, customer information, knowledge loss |
| Featured | false |
| relatedSlugs | how-to-turn-phone-calls-into-searchable-business-knowledge, why-small-businesses-forget-what-was-decided-and-how-to-fix-it, how-to-organize-customer-and-supplier-commitments-without-a-crm |
| In-body links to | #3, #9, #10 |
| CTA | Try Internode free for your business calls |

### #9: How to organize customer and supplier commitments without a CRM

| Field | Value |
|---|---|
| Slug | `how-to-organize-customer-and-supplier-commitments-without-a-crm` |
| Type | answer |
| Question | How do you keep track of customer and supplier commitments without a CRM? |
| Primary ICP | ICP 2 |
| Tags | customer management, supplier, commitments, small business |
| Featured | false |
| relatedSlugs | how-small-businesses-stop-losing-information-from-phone-calls, why-small-businesses-forget-what-was-decided-and-how-to-fix-it, how-to-turn-phone-calls-into-searchable-business-knowledge |
| In-body links to | #8, #10, #3 |
| CTA | Try Internode to organize your commitments |

### #10: Why small businesses forget what was decided and how to fix it

| Field | Value |
|---|---|
| Slug | `why-small-businesses-forget-what-was-decided-and-how-to-fix-it` |
| Type | answer |
| Question | Why do small businesses lose track of decisions and how can they fix it? |
| Primary ICP | ICP 2 |
| Tags | small business, decisions, verbal agreements, knowledge loss |
| Featured | false |
| relatedSlugs | what-is-institutional-knowledge-and-why-teams-lose-it, how-small-businesses-stop-losing-information-from-phone-calls, use-case-small-business-capturing-phone-call-decisions |
| In-body links to | #2, #8, #15 |
| CTA | See how Internode captures decisions automatically |

### #11: AI meeting notes versus organizational memory

| Field | Value |
|---|---|
| Slug | `ai-meeting-notes-vs-organizational-memory` |
| Type | answer |
| Question | What is the difference between AI meeting notes and organizational memory? |
| Primary ICP | ICP 3; all ICPs secondary |
| Tags | meeting notes, organizational memory, comparison, ai |
| Featured | false |
| relatedSlugs | how-to-capture-decisions-from-meetings-without-writing-everything-down, what-to-look-for-in-an-ai-knowledge-management-tool, how-to-connect-meeting-decisions-to-project-tasks |
| In-body links to | #1, #5, #12, #13 |
| CTA | Learn how Internode builds organizational memory |

### #12: What to look for in an AI knowledge management tool

| Field | Value |
|---|---|
| Slug | `what-to-look-for-in-an-ai-knowledge-management-tool` |
| Type | answer |
| Question | What features should an AI knowledge management tool have? |
| Primary ICP | ICP 3; ICP 1 secondary |
| Tags | evaluation, knowledge management, buying guide, ai tools |
| Featured | false |
| relatedSlugs | ai-meeting-notes-vs-organizational-memory, ai-tools-for-government-and-public-organizations, how-to-connect-meeting-decisions-to-project-tasks |
| In-body links to | #11, #6, #13 |
| CTA | See how Internode meets these criteria |

### #13: How to connect meeting decisions to project tasks

| Field | Value |
|---|---|
| Slug | `how-to-connect-meeting-decisions-to-project-tasks` |
| Type | answer |
| Question | How do you connect decisions from meetings to task tracking in tools like Linear or Jira? |
| Primary ICP | ICP 3 |
| Tags | decisions, tasks, Linear, Jira, project management |
| Featured | false |
| relatedSlugs | ai-meeting-notes-vs-organizational-memory, how-to-capture-decisions-from-meetings-without-writing-everything-down, use-case-turning-calls-and-meetings-into-structured-knowledge |
| In-body links to | #11, #1, #18 |
| CTA | See how Internode connects decisions to tasks |

### #14: School district preserving knowledge across staff transitions

| Field | Value |
|---|---|
| Slug | `use-case-school-district-preserving-knowledge-across-staff-transitions` |
| Type | use-case |
| Primary ICP | ICP 1 |
| Tags | use case, education, staff turnover, institutional memory |
| Featured | false |
| relatedSlugs | how-schools-preserve-institutional-knowledge-when-staff-leave, what-is-institutional-knowledge-and-why-teams-lose-it, how-to-track-decisions-from-board-meetings-and-committee-sessions |
| In-body links to | #4, #2, #5 |
| CTA | See how Internode helps schools |

### #15: Small business capturing decisions from phone calls automatically

| Field | Value |
|---|---|
| Slug | `use-case-small-business-capturing-phone-call-decisions` |
| Type | use-case |
| Primary ICP | ICP 2 |
| Tags | use case, small business, phone calls, decisions |
| Featured | false |
| relatedSlugs | how-to-turn-phone-calls-into-searchable-business-knowledge, how-small-businesses-stop-losing-information-from-phone-calls, why-small-businesses-forget-what-was-decided-and-how-to-fix-it |
| In-body links to | #3, #8, #10 |
| CTA | Try Internode with your phone transcripts |

### #16: Product and engineering alignment with persistent decision memory

| Field | Value |
|---|---|
| Slug | `use-case-product-and-engineering-alignment` |
| Type | use-case |
| Note | Existing page. Revise for consistency with new strategy. |
| Primary ICP | ICP 3 |
| Tags | use case, product, engineering, alignment |
| Featured | false |
| relatedSlugs | ai-meeting-notes-vs-organizational-memory, how-to-connect-meeting-decisions-to-project-tasks, how-to-capture-decisions-from-meetings-without-writing-everything-down |
| In-body links to | #11, #13, #1 |
| CTA | Explore Internode for your team |

### #17: Healthcare team tracking decisions across shifts and staff changes

| Field | Value |
|---|---|
| Slug | `use-case-healthcare-team-tracking-decisions-across-shifts` |
| Type | use-case |
| Primary ICP | ICP 1 (healthcare) |
| Tags | use case, healthcare, shift handoff, care coordination |
| Featured | false |
| relatedSlugs | how-healthcare-teams-keep-coordination-decisions-organized, what-is-institutional-knowledge-and-why-teams-lose-it, ai-tools-for-government-and-public-organizations |
| In-body links to | #7, #2, #6 |
| CTA | See how Internode helps healthcare teams |

### #18: Turning calls and meetings into structured knowledge for any team

| Field | Value |
|---|---|
| Slug | `use-case-turning-calls-and-meetings-into-structured-knowledge` |
| Type | use-case |
| Primary ICP | All ICPs |
| Tags | use case, transcripts, phone calls, meetings, knowledge |
| Featured | false |
| relatedSlugs | how-to-turn-phone-calls-into-searchable-business-knowledge, how-to-capture-decisions-from-meetings-without-writing-everything-down, how-internode-works-with-phone-transcripts-and-meeting-recordings |
| In-body links to | #3, #1, #15, #19 |
| CTA | Try Internode free |

### #19: How Internode works with phone transcripts, meeting recordings, and notes

| Field | Value |
|---|---|
| Slug | `how-internode-works-with-phone-transcripts-and-meeting-recordings` |
| Type | update |
| Primary ICP | All |
| Tags | transcripts, phone calls, pipeline, integrations, transparency |
| Featured | false |
| relatedSlugs | how-to-turn-phone-calls-into-searchable-business-knowledge, internode-integrations-zoom-google-meet-slack-email, use-case-turning-calls-and-meetings-into-structured-knowledge |
| In-body links to | #3, #20, #18 |
| CTA | Try Internode with your transcripts |

### #20: Internode integrations with Zoom, Google Meet, Slack, and email

| Field | Value |
|---|---|
| Slug | `internode-integrations-zoom-google-meet-slack-email` |
| Type | update |
| Primary ICP | All |
| Tags | integrations, Zoom, Google Meet, Slack, email |
| Featured | false |
| relatedSlugs | how-internode-works-with-phone-transcripts-and-meeting-recordings, how-to-capture-decisions-from-meetings-without-writing-everything-down, how-to-connect-meeting-decisions-to-project-tasks |
| In-body links to | #19, #1, #13 |
| CTA | Connect your tools to Internode |

---

## Internal Champion Cluster (ICP 4 + ICP 5)

### Exploration path

ICP 4 enters at #21 (problem awareness) or #23 (self-diagnosis). The path leads through problem articulation (#22), into solution discovery (bridge to existing #1 and #12), and then into ICP 5 territory: proposing the tool (#24), building the case (#25), understanding the career upside (#26), and envisioning the outcome (#27).

### #21: Why your team keeps re-discussing the same decisions

| Field | Value |
|---|---|
| Slug | `why-your-team-keeps-rediscussing-the-same-decisions` |
| Type | answer |
| Question | Why does my team keep having the same discussions in meetings? |
| Primary ICP | ICP 4 |
| Tags | meetings, decisions, repeated discussions, team productivity |
| Featured | false |
| relatedSlugs | the-hidden-cost-of-scattered-knowledge-at-work, how-to-capture-decisions-from-meetings-without-writing-everything-down, how-to-tell-if-your-team-has-a-knowledge-management-problem |
| In-body links to | #22, #1, #23, #11 |
| CTA | See how Internode captures decisions automatically |

### #22: The hidden cost of scattered knowledge at work

| Field | Value |
|---|---|
| Slug | `the-hidden-cost-of-scattered-knowledge-at-work` |
| Type | answer |
| Question | How much does lost knowledge cost an organization? |
| Primary ICP | ICP 4, ICP 5 |
| Tags | knowledge loss, productivity, cost, organizational memory |
| Featured | false |
| relatedSlugs | why-your-team-keeps-rediscussing-the-same-decisions, what-is-institutional-knowledge-and-why-teams-lose-it, how-to-propose-a-knowledge-tool-when-you-have-no-budget-authority |
| In-body links to | #21, #2, #10, #24 |
| CTA | See how Internode reduces knowledge loss |

### #23: How to tell if your team has a knowledge management problem

| Field | Value |
|---|---|
| Slug | `how-to-tell-if-your-team-has-a-knowledge-management-problem` |
| Type | answer |
| Question | What are the signs of a knowledge management problem? |
| Primary ICP | ICP 4 |
| Tags | knowledge management, diagnosis, team problems, information loss |
| Featured | false |
| relatedSlugs | why-your-team-keeps-rediscussing-the-same-decisions, the-hidden-cost-of-scattered-knowledge-at-work, what-to-look-for-in-an-ai-knowledge-management-tool |
| In-body links to | #21, #22, #12, #24 |
| CTA | Try Internode free |

### #24: How to propose a knowledge tool when you have no budget authority

| Field | Value |
|---|---|
| Slug | `how-to-propose-a-knowledge-tool-when-you-have-no-budget-authority` |
| Type | answer |
| Question | How do I propose a new tool to my manager when I do not control the budget? |
| Primary ICP | ICP 5 |
| Tags | proposal, manager, budget, software adoption, internal champion |
| Featured | false |
| relatedSlugs | building-a-business-case-for-organizational-intelligence, how-to-tell-if-your-team-has-a-knowledge-management-problem, what-to-look-for-in-an-ai-knowledge-management-tool |
| In-body links to | #25, #23, #12, #26 |
| CTA | Try Internode free and build your proof of concept |

### #25: Building a business case for organizational intelligence

| Field | Value |
|---|---|
| Slug | `building-a-business-case-for-organizational-intelligence` |
| Type | answer |
| Question | How do I build a business case for a knowledge management tool? |
| Primary ICP | ICP 5 |
| Tags | business case, ROI, knowledge management, organizational intelligence |
| Featured | false |
| relatedSlugs | how-to-propose-a-knowledge-tool-when-you-have-no-budget-authority, the-hidden-cost-of-scattered-knowledge-at-work, how-solving-your-teams-knowledge-problem-advances-your-career |
| In-body links to | #24, #22, #26, #27 |
| CTA | Start your free Internode trial to gather proof |

### #26: How solving your team's knowledge problem advances your career

| Field | Value |
|---|---|
| Slug | `how-solving-your-teams-knowledge-problem-advances-your-career` |
| Type | answer |
| Question | How does proposing a new tool at work help my career? |
| Primary ICP | ICP 5 |
| Tags | career advancement, internal champion, recognition, leadership |
| Featured | false |
| relatedSlugs | how-to-propose-a-knowledge-tool-when-you-have-no-budget-authority, building-a-business-case-for-organizational-intelligence, what-changes-when-your-team-actually-remembers-what-was-decided |
| In-body links to | #24, #25, #27 |
| CTA | Start building your case with Internode |

### #27: What changes when your team actually remembers what was decided

| Field | Value |
|---|---|
| Slug | `what-changes-when-your-team-actually-remembers-what-was-decided` |
| Type | answer |
| Question | What happens when a team has persistent decision memory? |
| Primary ICP | ICP 4, ICP 5 |
| Tags | decision memory, team productivity, organizational change |
| Featured | false |
| relatedSlugs | why-your-team-keeps-rediscussing-the-same-decisions, how-to-capture-decisions-from-meetings-without-writing-everything-down, the-knowledge-system-that-builds-itself |
| In-body links to | #21, #1, #2, #30 |
| CTA | Try Internode free |

---

## Second Brain / PKM Cluster (ICP 6 + ICP 7)

### Exploration path

ICP 6 enters at #28 (validation of PKM failure) or #33 (re-entry for people who gave up). The path leads through the AI-first vs AI-added distinction (#29), into the vision of auto-organizing knowledge (#30), and toward trying Internode. ICP 7 enters at #31 (note-taking apps fail knowledge workers) or #32 (conversations to knowledge). The path converges with ICP 6 at #30 (system that builds itself) and #34 (conversations not documents).

### #28: Why your second brain keeps failing

| Field | Value |
|---|---|
| Slug | `why-your-second-brain-keeps-failing` |
| Type | answer |
| Question | Why do second brain systems fail? |
| Primary ICP | ICP 6 |
| Tags | second brain, PKM, Notion, Obsidian, knowledge management |
| Featured | false |
| relatedSlugs | ai-first-vs-ai-added-why-bolting-ai-onto-notion-is-not-enough, knowledge-management-for-people-who-gave-up-on-knowledge-management, ai-meeting-notes-vs-organizational-memory |
| In-body links to | #29, #33, #11, #30 |
| CTA | See what AI-first knowledge management looks like |

### #29: AI-first vs AI-added: why bolting AI onto Notion is not enough

| Field | Value |
|---|---|
| Slug | `ai-first-vs-ai-added-why-bolting-ai-onto-notion-is-not-enough` |
| Type | answer |
| Question | What is the difference between AI-first and AI-added knowledge tools? |
| Primary ICP | ICP 6 |
| Tags | AI-first, AI-added, Notion AI, Obsidian, comparison |
| Featured | false |
| relatedSlugs | why-your-second-brain-keeps-failing, the-knowledge-system-that-builds-itself, what-to-look-for-in-an-ai-knowledge-management-tool |
| In-body links to | #28, #30, #12, #33 |
| CTA | Try an AI-first approach with Internode |

### #30: The knowledge system that builds itself

| Field | Value |
|---|---|
| Slug | `the-knowledge-system-that-builds-itself` |
| Type | answer |
| Question | Is there a knowledge management system that organizes itself? |
| Primary ICP | ICP 6, ICP 7 |
| Tags | auto-organizing, AI knowledge management, zero maintenance, knowledge graph |
| Featured | false |
| relatedSlugs | ai-first-vs-ai-added-why-bolting-ai-onto-notion-is-not-enough, from-conversations-to-knowledge-what-professionals-actually-need, how-to-capture-decisions-from-meetings-without-writing-everything-down |
| In-body links to | #29, #32, #1, #3 |
| CTA | Try Internode free |

### #31: Why note-taking apps fail knowledge workers

| Field | Value |
|---|---|
| Slug | `why-note-taking-apps-fail-knowledge-workers` |
| Type | answer |
| Question | Why do note-taking apps not work for professional knowledge management? |
| Primary ICP | ICP 7 |
| Tags | note-taking, knowledge workers, professional, information management |
| Featured | false |
| relatedSlugs | from-conversations-to-knowledge-what-professionals-actually-need, why-your-best-work-knowledge-comes-from-conversations-not-documents, the-knowledge-system-that-builds-itself |
| In-body links to | #32, #34, #30, #1 |
| CTA | See a different approach to knowledge management |

### #32: From conversations to knowledge: what professionals actually need

| Field | Value |
|---|---|
| Slug | `from-conversations-to-knowledge-what-professionals-actually-need` |
| Type | answer |
| Question | How do professionals organize knowledge from conversations and meetings? |
| Primary ICP | ICP 7 |
| Tags | conversations, meetings, professional knowledge, synthesis |
| Featured | false |
| relatedSlugs | why-note-taking-apps-fail-knowledge-workers, why-your-best-work-knowledge-comes-from-conversations-not-documents, the-knowledge-system-that-builds-itself |
| In-body links to | #31, #34, #30, #3 |
| CTA | Try Internode with your meeting transcripts |

### #33: Knowledge management for people who gave up on knowledge management

| Field | Value |
|---|---|
| Slug | `knowledge-management-for-people-who-gave-up-on-knowledge-management` |
| Type | answer |
| Question | Is there a knowledge tool that does not require constant maintenance? |
| Primary ICP | ICP 6, ICP 7 |
| Tags | knowledge management, maintenance, burnout, fresh start |
| Featured | false |
| relatedSlugs | why-your-second-brain-keeps-failing, the-knowledge-system-that-builds-itself, ai-first-vs-ai-added-why-bolting-ai-onto-notion-is-not-enough |
| In-body links to | #28, #30, #29, #34 |
| CTA | Try Internode free |

### #34: Why your best work knowledge comes from conversations, not documents

| Field | Value |
|---|---|
| Slug | `why-your-best-work-knowledge-comes-from-conversations-not-documents` |
| Type | answer |
| Question | Why is conversational knowledge more valuable than written documentation? |
| Primary ICP | ICP 7 |
| Tags | conversations, documents, knowledge, meetings, transcription |
| Featured | false |
| relatedSlugs | from-conversations-to-knowledge-what-professionals-actually-need, how-to-turn-phone-calls-into-searchable-business-knowledge, use-case-turning-calls-and-meetings-into-structured-knowledge |
| In-body links to | #32, #3, #18, #30 |
| CTA | Turn your conversations into searchable knowledge with Internode |

---

## Executive Assistant Cluster (ICP 8)

### Exploration path

ICP 8 enters at #35 (validation of the "I am the only one who remembers" pain) or #36 (meeting prep time sink). The path leads through the bus factor (#37), into the solution (#38), and toward trying Internode. Use-case pages #39 and #40 provide concrete workflow scenarios: high-volume meeting tracking across multiple executives, and onboarding as a new EA with no predecessor documentation.

### #35: How executive assistants stop being the only person who remembers what was decided

| Field | Value |
|---|---|
| Slug | `how-executive-assistants-stop-being-the-only-person-who-remembers` |
| Type | answer |
| Question | How do executive assistants stop being the only person who tracks decisions and follow-ups? |
| Primary ICP | ICP 8 |
| Tags | executive assistant, decisions, follow-ups, action items, meetings |
| Featured | false |
| relatedSlugs | why-meeting-prep-takes-hours-and-how-to-cut-it, what-happens-when-the-executive-assistant-leaves, how-to-capture-decisions-from-meetings-without-writing-everything-down |
| In-body links to | #36, #37, #1, #21 |
| CTA | See how Internode captures decisions automatically |

### #36: Why your meeting prep takes hours and how to cut it in half

| Field | Value |
|---|---|
| Slug | `why-meeting-prep-takes-hours-and-how-to-cut-it` |
| Type | answer |
| Question | Why does meeting prep take so long for executive assistants, and how can it be faster? |
| Primary ICP | ICP 8 |
| Tags | executive assistant, meeting prep, briefing, calendar, time management |
| Featured | false |
| relatedSlugs | how-executive-assistants-stop-being-the-only-person-who-remembers, how-to-build-a-briefing-system-that-does-not-depend-on-memory, use-case-turning-calls-and-meetings-into-structured-knowledge |
| In-body links to | #35, #38, #18, #1 |
| CTA | Try Internode to build meeting briefs in seconds |

### #37: What happens to your office when the EA leaves

| Field | Value |
|---|---|
| Slug | `what-happens-when-the-executive-assistant-leaves` |
| Type | answer |
| Question | What happens to an organization when the executive assistant leaves without a knowledge handover? |
| Primary ICP | ICP 8 |
| Tags | executive assistant, turnover, handover, institutional knowledge, transition |
| Featured | false |
| relatedSlugs | how-executive-assistants-stop-being-the-only-person-who-remembers, what-is-institutional-knowledge-and-why-teams-lose-it, use-case-new-ea-onboarding-without-predecessor-documentation |
| In-body links to | #35, #2, #40, #22 |
| CTA | See how Internode preserves organizational knowledge |

### #38: How to build a briefing system that does not depend on your memory

| Field | Value |
|---|---|
| Slug | `how-to-build-a-briefing-system-that-does-not-depend-on-memory` |
| Type | answer |
| Question | How do executive assistants build a briefing system that works without relying on memory or manual notes? |
| Primary ICP | ICP 8 |
| Tags | executive assistant, briefing, meeting prep, knowledge system, automation |
| Featured | false |
| relatedSlugs | why-meeting-prep-takes-hours-and-how-to-cut-it, what-to-look-for-in-an-ai-knowledge-management-tool, how-internode-works-with-phone-transcripts-and-meeting-recordings |
| In-body links to | #36, #12, #19, #35 |
| CTA | Try Internode free as your briefing system |

### #39: Executive assistant tracking decisions and follow-ups across 50 meetings a week

| Field | Value |
|---|---|
| Slug | `use-case-executive-assistant-tracking-decisions-across-meetings` |
| Type | use-case |
| Primary ICP | ICP 8 |
| Tags | use case, executive assistant, decisions, follow-ups, multiple executives |
| Featured | false |
| relatedSlugs | how-executive-assistants-stop-being-the-only-person-who-remembers, why-meeting-prep-takes-hours-and-how-to-cut-it, how-to-capture-decisions-from-meetings-without-writing-everything-down |
| In-body links to | #35, #36, #1 |
| CTA | Try Internode with your meeting transcripts |

### #40: New executive assistant onboarding without predecessor documentation

| Field | Value |
|---|---|
| Slug | `use-case-new-ea-onboarding-without-predecessor-documentation` |
| Type | use-case |
| Primary ICP | ICP 8 |
| Tags | use case, executive assistant, onboarding, handover, knowledge transfer |
| Featured | false |
| relatedSlugs | what-happens-when-the-executive-assistant-leaves, what-is-institutional-knowledge-and-why-teams-lose-it, the-hidden-cost-of-scattered-knowledge-at-work |
| In-body links to | #37, #2, #22 |
| CTA | See how Internode preserves knowledge across EA transitions |
