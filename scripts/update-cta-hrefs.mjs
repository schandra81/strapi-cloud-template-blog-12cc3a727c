// Update every inlineCta block in blog_posts so:
//   - button_href = /get-resource/<post-slug>   (gates the download behind the form)
//   - button_label is normalized to "Download the ..." if it currently starts with "Get the"
//
// Only updates posts whose slug has a matching asset file in public/downloads/.
// Posts with framework-only CTAs (no concrete asset) are left untouched.
import pg from "pg";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const { Client } = pg;
const __dir = path.dirname(fileURLToPath(import.meta.url));
const DOWNLOADS_DIR = path.resolve(__dir, "..", "public", "downloads");

const haveAsset = new Set(
  fs.readdirSync(DOWNLOADS_DIR)
    .filter((f) => /\.(docx|html|pdf|xlsx)$/.test(f))
    .map((f) => f.replace(/\.(docx|html|pdf|xlsx)$/, ""))
);

const c = new Client({ host: "127.0.0.1", port: 5432, user: "postgres", password: "postgres", database: "strapi" });
await c.connect();
try {
  // For each blog post that has a matching asset, find its inlineCta block(s) and update
  const posts = await c.query(`SELECT id, slug FROM blog_posts WHERE slug IS NOT NULL`);
  let updated = 0, scanned = 0;
  for (const p of posts.rows) {
    if (!haveAsset.has(p.slug)) continue;
    scanned += 1;
    const blocks = await c.query(
      `SELECT cmp_id FROM blog_posts_cmps WHERE entity_id=$1 AND component_type='library.block-inline-cta' AND field='contentBlocks'`,
      [p.id]
    );
    for (const b of blocks.rows) {
      const r = await c.query(`SELECT button_label, button_href FROM components_library_block_inline_cta WHERE id=$1`, [b.cmp_id]);
      if (!r.rows[0]) continue;
      const oldLabel = r.rows[0].button_label || "";
      const newLabel = oldLabel
        .replace(/^Get the /, "Download the ")
        .replace(/^Grab the /, "Download the ");
      const newHref = `/get-resource/${p.slug}`;
      await c.query(
        `UPDATE components_library_block_inline_cta SET button_label=$1, button_href=$2 WHERE id=$3`,
        [newLabel, newHref, b.cmp_id]
      );
      updated += 1;
    }
  }
  console.log(`scanned posts with assets: ${scanned}`);
  console.log(`inlineCta rows updated: ${updated}`);
} finally {
  await c.end();
}
