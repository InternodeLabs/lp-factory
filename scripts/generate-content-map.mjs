#!/usr/bin/env node
// Regenerates content/content-map.md directly from the frontmatter of every
// answer file in src/content/answers. This keeps the map in perfect sync with
// the published site. Run via `node scripts/generate-content-map.mjs`.
//
// Design notes:
// - Clusters are assigned by slug pattern + tag heuristics. Each slug is
//   placed in exactly one cluster (verified at the end).
// - Primary ICP is inferred from the cluster + slug + tags. It is a reference
//   aid for writers, not a hard classification.
// - The internal-linking mesh is derived from real relatedSlugs in the
//   frontmatter. Cross-cluster bridges are the relatedSlugs whose cluster
//   differs from the source page's cluster.
// - Orphan pages (no inbound relatedSlugs from any other page) are flagged so
//   the writer knows which pages need more internal-link love.

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";

// --check exits non-zero if the committed content-map.md is stale, without
// touching the file. Used by the lint pipeline to catch drift in CI.
const CHECK_ONLY = process.argv.includes("--check");

const repoRoot = resolve(new URL("..", import.meta.url).pathname);
const answersDir = join(repoRoot, "src/content/answers");
const outPath = join(repoRoot, "content/content-map.md");

// --- Frontmatter parsing ---------------------------------------------------

function unquote(s) {
  const t = s.trim();
  if ((t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'"))) {
    return t.slice(1, -1);
  }
  return t;
}

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const body = m[1];
  const lines = body.split("\n");
  const data = { tags: [], relatedSlugs: [] };
  let currentList = null;
  for (const line of lines) {
    if (/^\s*-\s+/.test(line) && currentList) {
      data[currentList].push(unquote(line.replace(/^\s*-\s+/, "")));
      continue;
    }
    currentList = null;
    const kv = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (!kv) continue;
    const [, key, rawVal] = kv;
    const val = rawVal.trim();
    if (val === "") {
      if (key === "tags" || key === "relatedSlugs") {
        currentList = key;
        data[key] = [];
      }
      continue;
    }
    data[key] = unquote(val);
  }
  data.featured = data.featured === "true";
  return data;
}

// --- Cluster assignment ----------------------------------------------------

// Order matters: first matching rule wins. Clusters are ordered so that the
// more specific "internode-vs-*" sub-clusters win over broad tag matches.

const CLUSTERS = [
  {
    id: "foundation",
    label: "Foundation: organizational memory + decision memory",
    icp: "All ICPs (hub pages)",
    match: (p) =>
      [
        "what-is-organizational-memory",
        "what-is-organizational-memory-for-ai-agents",
        "what-is-decision-memory",
        "what-is-institutional-knowledge-and-why-teams-lose-it",
        "ai-knowledge-base-that-builds-itself",
        "the-knowledge-system-that-builds-itself",
        "memory-aware-drafting",
        "why-ai-agents-need-decision-memory",
        "how-to-capture-decisions-from-meetings-without-writing-everything-down",
        "what-to-look-for-in-an-ai-knowledge-management-tool",
        "ai-meeting-notes-vs-organizational-memory",
        "how-to-tell-if-your-team-has-a-knowledge-management-problem",
      ].includes(p.slug),
  },
  {
    id: "public-sector",
    label: "Public sector (education, government, healthcare)",
    icp: "ICP 1",
    match: (p) =>
      [
        "how-schools-preserve-institutional-knowledge-when-staff-leave",
        "how-to-track-decisions-from-board-meetings-and-committee-sessions",
        "ai-tools-for-government-and-public-organizations",
        "ai-knowledge-management-for-government",
        "ai-meeting-notes-for-schools",
        "how-healthcare-teams-keep-coordination-decisions-organized",
        "use-case-school-district-preserving-knowledge-across-staff-transitions",
        "use-case-healthcare-team-tracking-decisions-across-shifts",
      ].includes(p.slug),
  },
  {
    id: "small-business",
    label: "Small business + phone-call capture",
    icp: "ICP 2",
    match: (p) =>
      [
        "how-to-turn-phone-calls-into-searchable-business-knowledge",
        "how-small-businesses-stop-losing-information-from-phone-calls",
        "how-to-organize-customer-and-supplier-commitments-without-a-crm",
        "why-small-businesses-forget-what-was-decided-and-how-to-fix-it",
        "ai-phone-call-transcription-for-small-business",
        "use-case-small-business-capturing-phone-call-decisions",
      ].includes(p.slug),
  },
  {
    id: "tech-product-eng",
    label: "Tech teams + product/engineering alignment",
    icp: "ICP 3",
    match: (p) =>
      [
        "how-to-connect-meeting-decisions-to-project-tasks",
        "internode-use-case-product-and-engineering-alignment",
        "use-case-turning-calls-and-meetings-into-structured-knowledge",
      ].includes(p.slug),
  },
  {
    id: "ai-pm",
    label: "AI PM / task manager (Linear, Jira, Asana, ClickUp)",
    icp: "ICP 3; ICP 4 secondary",
    match: (p) =>
      p.slug === "ai-pm-agent" ||
      p.slug === "ai-pm-that-captures-tasks-from-meetings" ||
      p.slug === "best-ai-task-manager-2026" ||
      p.slug === "how-to-stop-typing-tasks-from-meetings" ||
      /^internode-vs-(asana-ai|asana-ai-studio|clickup-ai|jira|linear)(-|$)/.test(p.slug),
  },
  {
    id: "agent-memory",
    label: "Agent memory for AI developers (Letta, Mem0, Zep)",
    icp: "ICP 3 (developer-facing)",
    match: (p) => /^internode-vs-(letta|mem0|zep)-for-agent-memory$/.test(p.slug),
  },
  {
    id: "memory-aware-docs",
    label: "Memory-aware drafting: documents (comparisons)",
    icp: "ICP 3, ICP 7, ICP 8",
    match: (p) =>
      /^internode-vs-.+-for-documents$/.test(p.slug) ||
      p.slug === "internode-vs-coda-ai-for-living-documents" ||
      p.slug === "internode-vs-sharepoint-syntex-for-policy-grounded-documents",
  },
  {
    id: "memory-aware-prep",
    label: "Memory-aware drafting: meeting-prep drafts (comparisons)",
    icp: "ICP 3, ICP 8",
    match: (p) => /^internode-vs-.+-for-meeting-prep-drafts$/.test(p.slug),
  },
  {
    id: "wiki-kb-comparisons",
    label: "Wiki / AI knowledge base comparisons + alternatives",
    icp: "ICP 3, ICP 6",
    match: (p) =>
      [
        "internode-vs-confluence-ai",
        "internode-vs-guru",
        "internode-vs-notion-ai",
        "internode-vs-notion-as-a-wiki",
        "internode-vs-slab",
        "ai-native-alternative-to-notion",
        "best-ai-knowledge-management-tools-2026",
      ].includes(p.slug),
  },
  {
    id: "meeting-intel-comparisons",
    label: "AI meeting notes / intelligence comparisons",
    icp: "ICP 3, ICP 8",
    match: (p) =>
      ["internode-vs-granola", "internode-vs-otter", "internode-vs-read-ai"].includes(p.slug),
  },
  {
    id: "champion",
    label: "Internal champion (problem-aware + solution-seeking)",
    icp: "ICP 4, ICP 5",
    match: (p) =>
      [
        "why-your-team-keeps-rediscussing-the-same-decisions",
        "the-hidden-cost-of-scattered-knowledge-at-work",
        "how-to-propose-a-knowledge-tool-when-you-have-no-budget-authority",
        "how-to-propose-new-software-to-your-manager",
        "building-a-business-case-for-organizational-intelligence",
        "business-case-template-for-knowledge-management-tool",
        "how-solving-your-teams-knowledge-problem-advances-your-career",
        "what-changes-when-your-team-actually-remembers-what-was-decided",
        "cost-of-lost-team-knowledge-per-employee",
        "roi-calculator-for-ai-knowledge-tools",
      ].includes(p.slug),
  },
  {
    id: "pkm",
    label: "Second brain / PKM refugee",
    icp: "ICP 6",
    match: (p) =>
      [
        "why-your-second-brain-keeps-failing",
        "ai-first-vs-ai-added-why-bolting-ai-onto-notion-is-not-enough",
        "knowledge-management-for-people-who-gave-up-on-knowledge-management",
        "best-second-brain-app-2026",
      ].includes(p.slug),
  },
  {
    id: "consultant",
    label: "Consultant / synthesis-hungry professional",
    icp: "ICP 7",
    match: (p) =>
      [
        "ai-knowledge-management-for-consultants",
        "alternative-to-crm-for-consulting-knowledge",
        "how-to-synthesize-knowledge-across-client-meetings",
        "why-note-taking-apps-fail-knowledge-workers",
        "from-conversations-to-knowledge-what-professionals-actually-need",
        "why-your-best-work-knowledge-comes-from-conversations-not-documents",
      ].includes(p.slug),
  },
  {
    id: "ea",
    label: "Executive assistant",
    icp: "ICP 8",
    match: (p) =>
      [
        "how-executive-assistants-stop-being-the-only-person-who-remembers",
        "why-meeting-prep-takes-hours-and-how-to-cut-it",
        "what-happens-when-the-executive-assistant-leaves",
        "how-to-build-a-briefing-system-that-does-not-depend-on-memory",
        "ai-meeting-prep-for-executive-assistants",
        "use-case-executive-assistant-tracking-decisions-across-meetings",
        "use-case-new-ea-onboarding-without-predecessor-documentation",
      ].includes(p.slug),
  },
  {
    id: "updates",
    label: "Updates + integrations + meta",
    icp: "All ICPs",
    match: (p) => p.type === "update",
  },
];

function assignCluster(page) {
  for (const c of CLUSTERS) {
    if (c.match(page)) return c.id;
  }
  return null;
}

// --- Main ------------------------------------------------------------------

async function loadPages() {
  const files = (await readdir(answersDir)).filter((f) => f.endsWith(".md")).sort();
  const pages = [];
  for (const file of files) {
    const raw = await readFile(join(answersDir, file), "utf8");
    const fm = parseFrontmatter(raw);
    if (!fm) continue;
    pages.push({ file, ...fm });
  }
  return pages;
}

function escapePipes(s) {
  return String(s ?? "").replace(/\|/g, "\\|");
}

function renderTable(pages, bySlug) {
  const lines = [
    "| # | Slug | Type | Featured | Tags | relatedSlugs |",
    "|---|---|---|---|---|---|",
  ];
  for (const p of pages) {
    const tags = (p.tags ?? []).join(", ");
    const related = (p.relatedSlugs ?? [])
      .map((s) => (bySlug.has(s) ? `\`${s}\`` : `\`${s}\` **(missing)**`))
      .join("<br>");
    lines.push(
      `| ${p.n} | \`${p.slug}\` | ${p.type} | ${p.featured ? "yes" : ""} | ${escapePipes(tags)} | ${related} |`,
    );
  }
  return lines.join("\n");
}

function renderClusterSection(cluster, pages, bySlug) {
  const intro = [`### ${cluster.label}`, "", `**Primary ICP:** ${cluster.icp}`, ""];
  const table = renderTable(pages, bySlug);
  return [...intro, table].join("\n");
}

function computeMesh(pages, bySlug, clusterOf) {
  const inbound = new Map(pages.map((p) => [p.slug, []]));
  const outboundCross = []; // {from, to, fromCluster, toCluster}
  for (const p of pages) {
    for (const rel of p.relatedSlugs ?? []) {
      if (!bySlug.has(rel)) continue;
      inbound.get(rel).push(p.slug);
      const fc = clusterOf.get(p.slug);
      const tc = clusterOf.get(rel);
      if (fc && tc && fc !== tc) {
        outboundCross.push({ from: p.slug, to: rel, fromCluster: fc, toCluster: tc });
      }
    }
  }
  const orphans = pages.filter((p) => (inbound.get(p.slug) ?? []).length === 0);
  return { inbound, outboundCross, orphans };
}

async function main() {
  const pages = await loadPages();
  const bySlug = new Map(pages.map((p) => [p.slug, p]));
  const clusterOf = new Map();
  const unclustered = [];
  for (const p of pages) {
    const c = assignCluster(p);
    if (c) clusterOf.set(p.slug, c);
    else unclustered.push(p.slug);
  }

  if (unclustered.length > 0) {
    console.error("UNCLUSTERED PAGES (add a rule):");
    for (const s of unclustered) console.error("  " + s);
    process.exitCode = 1;
    return;
  }

  // Assign stable numbering: walk clusters in CLUSTERS order, alphabetical
  // within each cluster. Numbers are for cross-reference only.
  let n = 0;
  const byCluster = new Map(CLUSTERS.map((c) => [c.id, []]));
  for (const c of CLUSTERS) {
    const list = pages
      .filter((p) => clusterOf.get(p.slug) === c.id)
      .sort((a, b) => a.slug.localeCompare(b.slug));
    for (const p of list) {
      n += 1;
      p.n = n;
      byCluster.get(c.id).push(p);
    }
  }

  const { inbound, outboundCross, orphans } = computeMesh(pages, bySlug, clusterOf);

  // --- Render ------------------------------------------------------------

  const total = pages.length;
  const featured = pages.filter((p) => p.featured);

  const out = [];
  out.push("# Content Map");
  out.push("");
  out.push(
    "Internal reference for every live content page on content.internode.ai. Auto-generated from the frontmatter in `src/content/answers/` by `scripts/generate-content-map.mjs`; do not edit by hand. Regenerate with:",
  );
  out.push("");
  out.push("```bash");
  out.push("pnpm content:map");
  out.push("```");
  out.push("");
  out.push(
    `_${total} pages across ${CLUSTERS.length} clusters. ${featured.length} featured. The lint pipeline runs this generator in \`--check\` mode and fails if the committed map drifts from the live content._`,
  );
  out.push("");
  out.push("---");
  out.push("");

  // Overview table
  out.push("## Overview");
  out.push("");
  out.push("| Cluster | Pages | Featured | Primary ICP |");
  out.push("|---|---|---|---|");
  for (const c of CLUSTERS) {
    const list = byCluster.get(c.id);
    const feats = list.filter((p) => p.featured).length;
    out.push(`| ${c.label} | ${list.length} | ${feats || ""} | ${c.icp} |`);
  }
  out.push(`| **Total** | **${total}** | **${featured.length}** | |`);
  out.push("");

  // Featured pages
  out.push("## Featured pages (hub set)");
  out.push("");
  out.push(
    "These are the `featured: true` pages in the frontmatter. They are the primary entry points for AI crawlers and the pages most other content links into. Keep the set small (target 8 to 12) and refresh composition as pillars shift.",
  );
  out.push("");
  out.push("| # | Slug | Title | Cluster |");
  out.push("|---|---|---|---|");
  for (const p of featured.sort((a, b) => a.n - b.n)) {
    const c = CLUSTERS.find((cc) => cc.id === clusterOf.get(p.slug));
    out.push(`| ${p.n} | \`${p.slug}\` | ${escapePipes(p.title)} | ${c.label} |`);
  }
  out.push("");
  out.push("---");
  out.push("");

  // Cluster inventory
  out.push("## Cluster inventory");
  out.push("");
  out.push(
    "Each page is assigned to exactly one cluster for navigation purposes. A page can (and should) link across clusters; see the mesh section below.",
  );
  out.push("");

  for (const c of CLUSTERS) {
    const list = byCluster.get(c.id);
    if (list.length === 0) continue;
    out.push(renderClusterSection(c, list, bySlug));
    out.push("");
  }

  out.push("---");
  out.push("");

  // Mesh
  out.push("## Internal linking mesh");
  out.push("");
  out.push(
    "Derived directly from `relatedSlugs` in each page's frontmatter. This is the actual mesh the published site ships, not an aspirational one.",
  );
  out.push("");

  // Hub pages: most inbound links
  const inboundCounts = [...inbound.entries()]
    .map(([slug, refs]) => ({ slug, count: refs.length, refs }))
    .sort((a, b) => b.count - a.count);
  const topHubs = inboundCounts.slice(0, 15);

  out.push("### Most-linked-to pages (top 15 inbound relatedSlugs)");
  out.push("");
  out.push("| Slug | Inbound links | Cluster |");
  out.push("|---|---|---|");
  for (const h of topHubs) {
    const c = CLUSTERS.find((cc) => cc.id === clusterOf.get(h.slug));
    out.push(`| \`${h.slug}\` | ${h.count} | ${c ? c.label : "?"} |`);
  }
  out.push("");

  // Cross-cluster bridges, grouped by pair
  const bridgeMap = new Map();
  for (const b of outboundCross) {
    const key = `${b.fromCluster} -> ${b.toCluster}`;
    if (!bridgeMap.has(key)) bridgeMap.set(key, []);
    bridgeMap.get(key).push(b);
  }
  const bridgePairs = [...bridgeMap.entries()].sort((a, b) => b[1].length - a[1].length);

  out.push("### Cross-cluster bridges");
  out.push("");
  out.push(
    "Links from a page in one cluster to a page in another. Good meshes have many distinct bridges rather than all traffic flowing through one hub. Sorted by number of bridge links.",
  );
  out.push("");
  const clusterLabel = (id) => CLUSTERS.find((c) => c.id === id)?.label ?? id;
  out.push("| From cluster | To cluster | Links |");
  out.push("|---|---|---|");
  for (const [key, list] of bridgePairs) {
    const [from, to] = key.split(" -> ");
    out.push(`| ${clusterLabel(from)} | ${clusterLabel(to)} | ${list.length} |`);
  }
  out.push("");

  // Orphans
  out.push("### Orphan pages (zero inbound links)");
  out.push("");
  if (orphans.length === 0) {
    out.push("_None. Every page has at least one inbound `relatedSlugs` reference._");
  } else {
    out.push(
      "These pages have no other page pointing at them via `relatedSlugs`. That hurts their ability to be found through internal traversal. Add at least 2 inbound references before publishing new companion pages.",
    );
    out.push("");
    for (const p of orphans) {
      const c = CLUSTERS.find((cc) => cc.id === clusterOf.get(p.slug));
      out.push(`- \`${p.slug}\` (${c ? c.label : "?"})`);
    }
  }
  out.push("");

  // Broken related-slug references
  const broken = [];
  for (const p of pages) {
    for (const rel of p.relatedSlugs ?? []) {
      if (!bySlug.has(rel)) broken.push({ from: p.slug, to: rel });
    }
  }
  out.push("### Broken relatedSlugs references");
  out.push("");
  if (broken.length === 0) {
    out.push("_None. Every `relatedSlugs` entry resolves to a real page._");
  } else {
    out.push("These `relatedSlugs` references point at slugs that do not exist on the site:");
    out.push("");
    for (const b of broken) {
      out.push(`- \`${b.from}\` → \`${b.to}\` (missing)`);
    }
  }
  out.push("");

  // --- Sanity check -------------------------------------------------------
  const seen = new Set();
  for (const c of CLUSTERS) {
    for (const p of byCluster.get(c.id)) {
      if (seen.has(p.slug)) throw new Error("duplicate slug in cluster output: " + p.slug);
      seen.add(p.slug);
    }
  }
  if (seen.size !== pages.length) {
    throw new Error(`cluster coverage mismatch: ${seen.size} of ${pages.length} covered`);
  }

  const rendered = out.join("\n") + "\n";
  if (CHECK_ONLY) {
    let committed = "";
    try {
      committed = await readFile(outPath, "utf8");
    } catch {
      // file missing; treat as stale
    }
    if (committed !== rendered) {
      console.error(
        "content-map: FAIL — content/content-map.md is out of sync with src/content/answers/. " +
          "Run `pnpm content:map` and commit the result.",
      );
      process.exitCode = 1;
      return;
    }
    console.log(
      `content-map: OK (${total} pages, ${CLUSTERS.length} clusters, ${featured.length} featured, ${orphans.length} orphans, ${broken.length} broken refs)`,
    );
    return;
  }

  await writeFile(outPath, rendered);
  console.log(
    `content-map: wrote ${outPath} (${total} pages, ${CLUSTERS.length} clusters, ${featured.length} featured, ${orphans.length} orphans, ${broken.length} broken refs)`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
