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

const repoRoot = new URL("..", import.meta.url);
const rel = (p) => new URL(p, repoRoot);

const violations = [];

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

async function main() {
  await Promise.all([checkContentCollection(), checkSiteConstants(), checkTopicsIndex()]);

  if (violations.length === 0) {
    console.log("meta-lengths: OK");
    return;
  }

  console.error("meta-lengths: FAIL");
  for (const v of violations) {
    console.error(`  ${v.file} [${v.field}] len=${v.length} ${v.reason}`);
    if (v.value) console.error(`    "${v.value}"`);
  }
  process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
