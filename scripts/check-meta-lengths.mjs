#!/usr/bin/env node
// Guards Bing's meta-length windows at build time.
//
// Rules:
//   - title       must be >= 1 and <= 70 chars
//   - description must be >= 25 and <= 160 chars
//
// Scope:
//   - every markdown file under src/content/answers
//   - the hand-written title/description constants in a small allowlist of
//     page files, so we catch regressions the Zod content schema can't see
//     (e.g. the home and topics hub pages).

import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const TITLE_MAX = 70;
const DESC_MIN = 25;
const DESC_MAX = 160;

// Hard-fail threshold for the "is not X. It is Y." cadence across the whole
// answers catalog. This is a ratchet: set to the current catalog count after
// the 2026-04-18 cleanup pass, so today's catalog sits right at the cap and
// any regression (a new page adding one more instance) immediately fails.
// When a rephrasing pass removes instances, lower this constant in the same
// commit to lock in the gain. See content/writing-guide.md "Recurring pitfalls".
const TONAL_TIC_HARD_CAP = 10;
const TONAL_TIC_PATTERN = /\bis not\b[^.\n]{0,80}\. It is\b/gi;
const BYLINE_BANNED_EXACT = /^internode team$/i;
const BYLINE_BANNED_SENTINEL = /^CHOOSE[-:]/;

const repoRoot = new URL("..", import.meta.url);
const rel = (p) => new URL(p, repoRoot);

const violations = [];
// Aggregated date stats for the content catalog. Printed at the end of a
// successful run so the rolling freshness distribution is visible on every
// build; an uneven distribution (e.g. one giant bulk-update day) is a soft
// signal to search engines that we are not genuinely maintaining the pages.
const publishedAtCounts = new Map();
const updatedAtCounts = new Map();
const lastReviewedAtCounts = new Map();
let answersTotal = 0;
let answersMissingReview = 0;
let tonalTicPages = 0;
let tonalTicTotal = 0;
const tonalTicPerFile = [];

function bump(map, key) {
  map.set(key, (map.get(key) ?? 0) + 1);
}

function record(file, field, value, reason) {
  violations.push({ file, field, length: value.length, reason, value });
}

function checkTitle(file, value) {
  if (value.length === 0) record(file, "title", value, "empty");
  if (value.length > TITLE_MAX) record(file, "title", value, `> ${TITLE_MAX} chars`);
}

function checkDescription(file, value) {
  if (value.length < DESC_MIN) record(file, "description", value, `< ${DESC_MIN} chars`);
  if (value.length > DESC_MAX) record(file, "description", value, `> ${DESC_MAX} chars`);
}

function unquote(raw) {
  const trimmed = raw.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

async function checkContentCollection() {
  const dir = rel("src/content/answers/");
  const entries = await readdir(dir);
  for (const name of entries) {
    if (!name.endsWith(".md")) continue;
    const path = join(dir.pathname, name);
    const raw = await readFile(path, "utf8");
    const fm = raw.match(/^---\n([\s\S]*?)\n---/);
    if (!fm) {
      violations.push({ file: `src/content/answers/${name}`, field: "frontmatter", length: 0, reason: "missing" });
      continue;
    }
    const body = fm[1];
    const title = body.match(/^title:\s*(.+)$/m);
    const description = body.match(/^description:\s*(.+)$/m);
    if (title) checkTitle(`src/content/answers/${name}`, unquote(title[1]));
    if (description) checkDescription(`src/content/answers/${name}`, unquote(description[1]));

    // Byline guard. Bylines are mandatory in content/writing-guide.md:
    // every page must be authored by a named co-founder. "Internode Team"
    // and any CHOOSE-* sentinel left in from the templates are hard fails.
    // `author:` is a YAML block, so `name:` lives on the next indented line.
    const authorBlock = body.match(/^author:\s*\n((?:[ \t]+[^\n]*\n?)+)/m);
    if (authorBlock) {
      const authorName = authorBlock[1].match(/^[ \t]+name:\s*(.+)$/m);
      if (authorName) {
        const value = unquote(authorName[1]);
        if (BYLINE_BANNED_EXACT.test(value)) {
          violations.push({
            file: `src/content/answers/${name}`,
            field: "author.name",
            length: value.length,
            reason: 'byline is "Internode Team"; every page must be authored by Istvan Lorincz, Balazs Ketyi, or Sean Shadmand (see content/writing-guide.md)',
            value,
          });
        } else if (BYLINE_BANNED_SENTINEL.test(value)) {
          violations.push({
            file: `src/content/answers/${name}`,
            field: "author.name",
            length: value.length,
            reason: "byline is a CHOOSE-* template placeholder; pick a named co-founder before publishing",
            value,
          });
        }
      }
    }

    // Tonal-tic counter. The "<subject> is not <A>. It is <B>." construction
    // is sharp once per page and reads as a mannerism from the second instance
    // onward. We count matches per file and globally; the global total has
    // a hard cap (see TONAL_TIC_HARD_CAP). This is a mannerism counter, not
    // a style nitpick: staying under the cap means the pattern still carries
    // punch when a writer reaches for it.
    const markdownForTic = raw.slice(fm[0].length);
    const ticMatches = markdownForTic.match(TONAL_TIC_PATTERN);
    const ticCount = ticMatches ? ticMatches.length : 0;
    if (ticCount > 0) {
      tonalTicPages += 1;
      tonalTicTotal += ticCount;
      tonalTicPerFile.push({ file: `src/content/answers/${name}`, count: ticCount });
    }

    // The page layout (src/pages/[slug].astro) already renders the frontmatter
    // `title` as <h1>, so any top-level `# ` heading in the markdown body
    // creates a duplicate <h1> that Bing flags as a "more than one h1" notice.
    // Document structure must start at H2.
    const markdown = raw.slice(fm[0].length);
    const bodyH1 = markdown.match(/^[ \t]*#\s+.*/m);
    if (bodyH1) {
      violations.push({
        file: `src/content/answers/${name}`,
        field: "body-h1",
        length: bodyH1[0].length,
        reason: "markdown body contains a top-level `# ` heading; use `##` or deeper (the template already renders an <h1> from frontmatter.title)",
        value: bodyH1[0].trim(),
      });
    }

    answersTotal += 1;
    const publishedAt = body.match(/^publishedAt:\s*(.+)$/m);
    const updatedAt = body.match(/^updatedAt:\s*(.+)$/m);
    const lastReviewedAt = body.match(/^lastReviewedAt:\s*(.+)$/m);
    const pub = publishedAt ? unquote(publishedAt[1]) : null;
    const upd = updatedAt ? unquote(updatedAt[1]) : null;
    const rev = lastReviewedAt ? unquote(lastReviewedAt[1]) : null;
    if (pub) bump(publishedAtCounts, pub);
    if (upd) bump(updatedAtCounts, upd);
    if (rev) bump(lastReviewedAtCounts, rev);

    // Invariants. These are not Bing meta-length issues but they corrupt the
    // freshness signals that motivated the audit script in the first place.
    if (pub && upd && upd < pub) {
      violations.push({
        file: `src/content/answers/${name}`,
        field: "updatedAt",
        length: upd.length,
        reason: `earlier than publishedAt (${pub})`,
        value: upd,
      });
    }
    if (pub && rev && rev < pub) {
      violations.push({
        file: `src/content/answers/${name}`,
        field: "lastReviewedAt",
        length: rev.length,
        reason: `earlier than publishedAt (${pub})`,
        value: rev,
      });
    }
    if (!rev) answersMissingReview += 1;
  }
}

async function checkSiteConstants() {
  const raw = await readFile(rel("src/lib/site.ts"), "utf8");
  const title = raw.match(/export const SITE_TITLE\s*=\s*\n?\s*["'`]([\s\S]*?)["'`];/);
  const desc = raw.match(/export const SITE_DESCRIPTION\s*=\s*\n?\s*["'`]([\s\S]*?)["'`];/);
  if (title) checkTitle("src/lib/site.ts#SITE_TITLE", title[1]);
  else violations.push({ file: "src/lib/site.ts", field: "SITE_TITLE", length: 0, reason: "not found" });
  if (desc) checkDescription("src/lib/site.ts#SITE_DESCRIPTION", desc[1]);
  else violations.push({ file: "src/lib/site.ts", field: "SITE_DESCRIPTION", length: 0, reason: "not found" });
}

async function checkTopicsIndex() {
  const raw = await readFile(rel("src/pages/topics/index.astro"), "utf8");
  const title = raw.match(/const title\s*=\s*["'`]([\s\S]*?)["'`];/);
  const desc = raw.match(/const description\s*=\s*\n?\s*["'`]([\s\S]*?)["'`];/);
  if (title) checkTitle("src/pages/topics/index.astro#title", title[1]);
  if (desc) checkDescription("src/pages/topics/index.astro#description", desc[1]);
}

function formatDistribution(label, counts) {
  if (counts.size === 0) {
    console.log(`  ${label}: (empty)`);
    return;
  }
  const rows = [...counts.entries()].sort(([a], [b]) => a.localeCompare(b));
  const total = rows.reduce((sum, [, n]) => sum + n, 0);
  const unique = rows.length;
  console.log(`  ${label} (${total} pages across ${unique} date${unique === 1 ? "" : "s"}):`);
  for (const [date, n] of rows) {
    const pct = ((n / total) * 100).toFixed(0).padStart(3);
    const bar = "#".repeat(Math.max(1, Math.round((n / total) * 40)));
    console.log(`    ${date}  ${String(n).padStart(3)}  ${pct}%  ${bar}`);
  }
}

function reportDateStats() {
  console.log("content-date distribution:");
  formatDistribution("publishedAt", publishedAtCounts);
  formatDistribution("updatedAt", updatedAtCounts);
  formatDistribution("lastReviewedAt", lastReviewedAtCounts);
  if (answersMissingReview > 0) {
    console.log(
      `  note: ${answersMissingReview}/${answersTotal} pages have no lastReviewedAt ` +
        "(optional, but bumping it on review-only passes is a free freshness signal)",
    );
  }
}

function reportTonalTic() {
  const label = 'tonal-tic ("is not X. It is Y." cadence)';
  if (tonalTicTotal === 0) {
    console.log(`${label}: 0 occurrences (hard cap ${TONAL_TIC_HARD_CAP})`);
    return;
  }
  const status = tonalTicTotal > TONAL_TIC_HARD_CAP ? "OVER CAP" : "within cap";
  console.log(
    `${label}: ${tonalTicTotal} occurrence${tonalTicTotal === 1 ? "" : "s"} ` +
      `across ${tonalTicPages} page${tonalTicPages === 1 ? "" : "s"} ` +
      `(hard cap ${TONAL_TIC_HARD_CAP}, ${status})`,
  );
  const rows = [...tonalTicPerFile].sort((a, b) => b.count - a.count || a.file.localeCompare(b.file));
  for (const { file, count } of rows) {
    console.log(`  ${file}  ${count}`);
  }
}

async function main() {
  await Promise.all([checkContentCollection(), checkSiteConstants(), checkTopicsIndex()]);

  const tonalTicOverCap = tonalTicTotal > TONAL_TIC_HARD_CAP;

  if (violations.length === 0 && !tonalTicOverCap) {
    console.log("meta-lengths: OK");
    reportDateStats();
    reportTonalTic();
    return;
  }

  console.error("meta-lengths: FAIL");
  for (const v of violations) {
    console.error(`  ${v.file} [${v.field}] len=${v.length} ${v.reason}`);
    if (v.value) console.error(`    "${v.value}"`);
  }
  if (tonalTicOverCap) {
    console.error(
      `  tonal-tic: ${tonalTicTotal} occurrences of "is not X. It is Y." across ` +
        `${tonalTicPages} pages, over hard cap of ${TONAL_TIC_HARD_CAP}. ` +
        "See content/writing-guide.md 'Recurring pitfalls' for alternatives.",
    );
  }
  reportDateStats();
  reportTonalTic();
  process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
