/**
 * Converts PNGs under content/internode-marketing-images/ to web-friendly formats:
 * - Writes parallel .webp (quality 85) and .avif (quality 72) next to each .png
 * - Recompresses each .png in place (lossless, max DEFLATE) for smaller downloads when PNG is required
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const ASSET_ROOT = path.join(ROOT, "content", "internode-marketing-images");

async function walkPngs(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const out = [];
  for (const e of entries) {
    if (e.name.startsWith(".")) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walkPngs(full)));
    else if (e.isFile() && e.name.toLowerCase().endsWith(".png")) out.push(full);
  }
  return out;
}

async function optimizeOne(pngPath) {
  const base = pngPath.replace(/\.png$/i, "");
  const buf = await fs.readFile(pngPath);

  await sharp(buf).webp({ quality: 85, effort: 6 }).toFile(`${base}.webp`);

  await sharp(buf).avif({ quality: 72, effort: 7 }).toFile(`${base}.avif`);

  const tmp = `${pngPath}.opt.tmp`;
  await sharp(buf)
    .png({
      compressionLevel: 9,
      adaptiveFiltering: true,
    })
    .toFile(tmp);
  await fs.rename(tmp, pngPath);
}

async function main() {
  let stat;
  try {
    stat = await fs.stat(ASSET_ROOT);
  } catch {
    console.error(`Missing folder: ${ASSET_ROOT}`);
    process.exit(1);
  }
  if (!stat.isDirectory()) {
    console.error(`Not a directory: ${ASSET_ROOT}`);
    process.exit(1);
  }

  const files = await walkPngs(ASSET_ROOT);
  if (files.length === 0) {
    console.log("No PNG files found.");
    return;
  }

  console.log(`Optimizing ${files.length} PNG(s)…`);
  for (const f of files) {
    const rel = path.relative(ROOT, f);
    process.stdout.write(`  ${rel}\n`);
    await optimizeOne(f);
  }
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
