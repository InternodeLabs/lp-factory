import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, "..");

const svgBuffer = readFileSync(join(repoRoot, "public/favicon.svg"));
const darkBg = { r: 0, g: 0, b: 0, alpha: 1 };
const padding = 128;
const size = 512;
const logoSize = size - padding * 2;

// 512x512 logo — dark background, zinc-950 logo forms the negative space on dark.
// We'll composite the svg scaled to (size - padding*2) on a dark zinc-950 square,
// then tint the svg white so it reads at thumbnail sizes.
const whiteSvg = svgBuffer
  .toString("utf8")
  .replace(/fill="#18181b"/g, 'fill="#fafafa"');

const logoBuffer = await sharp(Buffer.from(whiteSvg))
  .resize(logoSize, logoSize)
  .png()
  .toBuffer();

await sharp({
  create: {
    width: size,
    height: size,
    channels: 4,
    background: darkBg,
  },
})
  .composite([{ input: logoBuffer, gravity: "center" }])
  .png({ compressionLevel: 9 })
  .toFile(join(repoRoot, "public/logo-512.png"));

console.log("wrote public/logo-512.png (512x512, dark)");
