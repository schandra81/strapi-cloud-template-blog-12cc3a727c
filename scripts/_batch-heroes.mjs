import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const TODO = JSON.parse(fs.readFileSync("scripts/_todo.json", "utf8"));
const SRC_DIR = "D:/Workdir/Ownwork/letusvending/blogs/LetUsVending/articles-json/strapi-format/images";
const DST_DIR = "../astro/public/images/generated";

const allSource = new Set(fs.readdirSync(SRC_DIR).map((f) => f.toLowerCase()));
const existingDst = new Set(fs.readdirSync(DST_DIR).map((f) => f.toLowerCase()));

let copied = 0, converted = 0, skipped = 0, missing = 0;
const queue = TODO.filter((t) => t.image);
console.log(`Processing ${queue.length} hero images...`);

const BATCH_SIZE = 8;
for (let i = 0; i < queue.length; i += BATCH_SIZE) {
  const batch = queue.slice(i, i + BATCH_SIZE);
  await Promise.all(batch.map(async (t) => {
    const pngName = `${t.slug}.png`;
    const webpName = `${t.slug}.webp`;
    const srcLower = pngName.toLowerCase();
    // Find the actual file (case-insensitive)
    const actualSrc = fs.readdirSync(SRC_DIR).find((f) => f.toLowerCase() === srcLower);
    if (!actualSrc) {
      missing++;
      return;
    }
    const srcPath = path.join(SRC_DIR, actualSrc);
    const dstPng = path.join(DST_DIR, pngName);
    const dstWebp = path.join(DST_DIR, webpName);

    // Skip if both already exist
    if (existingDst.has(pngName.toLowerCase()) && existingDst.has(webpName.toLowerCase())) {
      skipped++;
      return;
    }

    try {
      if (!existingDst.has(pngName.toLowerCase())) {
        fs.copyFileSync(srcPath, dstPng);
        copied++;
      }
      if (!existingDst.has(webpName.toLowerCase())) {
        await sharp(srcPath).webp({ quality: 82 }).toFile(dstWebp);
        converted++;
      }
    } catch (e) {
      console.error(`  ERR ${t.slug}: ${e.message}`);
    }
  }));
  if ((i + BATCH_SIZE) % 80 === 0 || i + BATCH_SIZE >= queue.length) {
    console.log(`  ...${Math.min(i + BATCH_SIZE, queue.length)}/${queue.length}`);
  }
}
console.log(`Done. PNG copied: ${copied}, WebP converted: ${converted}, skipped (already present): ${skipped}, source missing: ${missing}`);
