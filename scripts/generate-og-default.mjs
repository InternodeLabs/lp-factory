import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, "..");

// Produce a 1200x630 letterboxed OG composed from knowledge-os.png (portrait).
// Letterboxed with zinc-950 sides so no content is lost, fits standard 1.91:1.
const source = join(repoRoot, "public/marketing/knowledge-os.png");
const output = join(repoRoot, "public/og-default.png");

const ogWidth = 1200;
const ogHeight = 630;
const bg = { r: 24, g: 24, b: 27, alpha: 1 };

const contentHeight = ogHeight - 40;
const contentBuf = await sharp(source)
  .resize({ height: contentHeight, fit: "inside", withoutEnlargement: false })
  .toBuffer();

await sharp({
  create: {
    width: ogWidth,
    height: ogHeight,
    channels: 4,
    background: bg,
  },
})
  .composite([{ input: contentBuf, gravity: "center" }])
  .png({ compressionLevel: 9, quality: 90 })
  .toFile(output);

console.log("wrote public/og-default.png (1200x630)");
