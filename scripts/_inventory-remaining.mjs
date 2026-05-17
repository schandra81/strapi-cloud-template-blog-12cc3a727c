import pg from "pg";
import fs from "node:fs";
import path from "node:path";

const IMG_DIR = "D:/Workdir/Ownwork/letusvending/blogs/LetUsVending/articles-json/strapi-format/images";
const c = new pg.Client({ host: "127.0.0.1", port: 5432, user: "postgres", password: "postgres", database: "strapi" });
await c.connect();

const r = await c.query(`
  SELECT bp.slug, bp.title,
         cat.slug AS category_slug,
         sec.slug AS section_slug,
         LENGTH(COALESCE(bp.body,'')) AS body_len,
         (SELECT COUNT(*) FROM blog_posts_cmps cmps
          WHERE cmps.entity_id = bp.id AND cmps.field = 'contentBlocks') AS block_count
  FROM blog_posts bp
  LEFT JOIN blog_posts_cmps cmps_cat ON cmps_cat.entity_id=bp.id AND cmps_cat.field='category'
  LEFT JOIN blog_categories cat ON cat.id = cmps_cat.cmp_id
  LEFT JOIN blog_posts_cmps cmps_sec ON cmps_sec.entity_id=bp.id AND cmps_sec.field='section'
  LEFT JOIN blog_sections sec ON sec.id = cmps_sec.cmp_id
  WHERE bp.published_at IS NOT NULL
  ORDER BY bp.id
`);

// Dedupe by slug (draft+published both come back; we only need slug once)
const seen = new Set();
const rows = [];
for (const row of r.rows) {
  if (seen.has(row.slug)) continue;
  seen.add(row.slug);
  rows.push(row);
}

const allImages = new Set(fs.readdirSync(IMG_DIR).map(f => f.toLowerCase()));

let needsBlocks = 0;
let hasImage = 0;
const toDo = [];
for (const row of rows) {
  if (row.block_count > 0) continue;
  needsBlocks++;
  const imgPng = `${row.slug}.png`.toLowerCase();
  const imageExists = allImages.has(imgPng);
  if (imageExists) hasImage++;
  toDo.push({ slug: row.slug, title: row.title, category: row.category_slug, section: row.section_slug, body_len: row.body_len, image: imageExists });
}

console.log(`Total published posts: ${rows.length}`);
console.log(`Already redesigned (have contentBlocks): ${rows.length - needsBlocks}`);
console.log(`Need redesign: ${needsBlocks}`);
console.log(`...with hero image available: ${hasImage}`);
console.log("");
console.log("To-do list (slug | category | section | body_len | image):");
for (const t of toDo) {
  const cat = t.category || "—";
  const sec = t.section || "—";
  const img = t.image ? "✓" : "✗";
  console.log(`${img} ${t.slug.padEnd(58)} | ${cat.padEnd(28)} | ${sec.padEnd(28)} | ${String(t.body_len).padStart(5)}`);
}
fs.writeFileSync("scripts/_todo.json", JSON.stringify(toDo, null, 2));
console.log(`\nWritten ${toDo.length} entries to scripts/_todo.json`);
await c.end();
