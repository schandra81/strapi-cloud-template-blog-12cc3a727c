import pg from "pg";
import fs from "node:fs";

const IMG_DIR = "D:/Workdir/Ownwork/letusvending/blogs/LetUsVending/articles-json/strapi-format/images";
const c = new pg.Client({ host: "127.0.0.1", port: 5432, user: "postgres", password: "postgres", database: "strapi" });
await c.connect();

const r = await c.query(`
  SELECT bp.id, bp.slug, bp.title,
         cat.slug AS category_slug,
         sec.slug AS section_slug,
         LENGTH(COALESCE(bp.body,'')) AS body_len,
         (SELECT COUNT(*) FROM blog_posts_cmps cmps
          WHERE cmps.entity_id = bp.id AND cmps.field = 'contentBlocks') AS block_count
  FROM blog_posts bp
  LEFT JOIN blog_posts_category_lnk lnk_cat ON lnk_cat.blog_post_id = bp.id
  LEFT JOIN blog_categories cat ON cat.id = lnk_cat.blog_category_id
  LEFT JOIN blog_posts_section_lnk lnk_sec ON lnk_sec.blog_post_id = bp.id
  LEFT JOIN blog_sections sec ON sec.id = lnk_sec.blog_section_id
  WHERE bp.published_at IS NOT NULL
  ORDER BY bp.id
`);

const seen = new Set();
const rows = [];
for (const row of r.rows) {
  if (seen.has(row.slug)) continue;
  seen.add(row.slug);
  rows.push(row);
}

const allImages = new Set(fs.readdirSync(IMG_DIR).map(f => f.toLowerCase()));

const toDo = [];
for (const row of rows) {
  if (row.block_count > 0) continue;
  if (row.body_len < 500) continue; // skip stub category landing pages
  const imageExists = allImages.has(`${row.slug}.png`.toLowerCase());
  toDo.push({
    id: row.id,
    slug: row.slug,
    title: row.title,
    category: row.category_slug || "",
    section: row.section_slug || "",
    url: row.category_slug ? `/${row.category_slug}/${row.slug}` : `/${row.slug}`,
    body_len: row.body_len,
    image: imageExists,
  });
}

// Categorize by category-slug for batching
const byCategory = {};
for (const t of toDo) {
  const key = t.category || "(uncategorized)";
  if (!byCategory[key]) byCategory[key] = [];
  byCategory[key].push(t);
}

console.log(`Total qualifying posts: ${toDo.length} (≥500 char body, no blocks yet)`);
console.log(`With hero image: ${toDo.filter(t => t.image).length}`);
console.log(`Without hero image: ${toDo.filter(t => !t.image).length}`);
console.log("");
console.log("By category:");
for (const [cat, list] of Object.entries(byCategory).sort((a,b) => b[1].length - a[1].length)) {
  console.log(`  ${cat.padEnd(40)} ${String(list.length).padStart(4)} posts`);
}
fs.writeFileSync("scripts/_todo.json", JSON.stringify(toDo, null, 2));
console.log(`\nWritten ${toDo.length} entries to scripts/_todo.json`);
await c.end();
