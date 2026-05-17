// Recalculate reading_time for every blog_posts row.
// Word count is summed across:
//   - blog_posts row (title, excerpt, body, blog_heading)
//   - every contentBlock referenced by blog_posts_cmps and its nested children
// reading_time = max(1, ceil(words / 225))   (225 wpm = adult avg)
import pg from "pg";
const { Client } = pg;
const WPM = 225;

const wordCount = (s) => (typeof s !== "string" ? 0 : s.trim().split(/\s+/).filter(Boolean).length);

function extractStringsFromJson(v) {
  if (v == null) return 0;
  if (typeof v === "string") return wordCount(v);
  if (Array.isArray(v)) return v.reduce((a, x) => a + extractStringsFromJson(x), 0);
  if (typeof v === "object") return Object.values(v).reduce((a, x) => a + extractStringsFromJson(x), 0);
  return 0;
}

async function tableExists(c, name) {
  const r = await c.query("SELECT 1 FROM information_schema.tables WHERE table_name=$1", [name]);
  return r.rows.length > 0;
}

const colCache = new Map();
async function getCols(c, table) {
  if (colCache.has(table)) return colCache.get(table);
  const r = await c.query(
    "SELECT column_name, data_type FROM information_schema.columns WHERE table_name=$1",
    [table]
  );
  const cols = r.rows.filter((x) => ["character varying", "text", "json", "jsonb"].includes(x.data_type));
  colCache.set(table, cols);
  return cols;
}

async function wordsOfRow(c, table, id) {
  const cols = await getCols(c, table);
  if (!cols.length) return 0;
  const selectCols = cols.map((x) => `"${x.column_name}"`).join(",");
  const r = await c.query(`SELECT ${selectCols} FROM "${table}" WHERE id=$1`, [id]);
  if (!r.rows[0]) return 0;
  let total = 0;
  for (const col of cols) {
    const v = r.rows[0][col.column_name];
    if (col.data_type === "json" || col.data_type === "jsonb") {
      total += extractStringsFromJson(v);
    } else {
      total += wordCount(v);
    }
  }
  return total;
}

const tableNameCache = new Map();
async function compTable(c, componentType) {
  if (tableNameCache.has(componentType)) return tableNameCache.get(componentType);
  const base = "components_" + componentType.replace(/\./g, "_").replace(/-/g, "_");
  // try several pluralization patterns and pick the one that exists
  const candidates = [
    base,
    base + "s",
    base.replace(/_item$/, "_items"),
    base.replace(/_line$/, "_lines"),
    base.replace(/_step$/, "_steps"),
    base.replace(/_branch$/, "_branches"),
    base.replace(/_result$/, "_results"),
  ];
  for (const cand of candidates) {
    if (await tableExists(c, cand)) {
      tableNameCache.set(componentType, cand);
      return cand;
    }
  }
  tableNameCache.set(componentType, null);
  return null;
}

async function wordsForBlock(c, componentType, cmpId, depth = 0) {
  if (depth > 4) return 0; // safety
  const table = await compTable(c, componentType);
  if (!table) return 0;
  let words = await wordsOfRow(c, table, cmpId);
  const cmpsTable = table + "_cmps";
  if (await tableExists(c, cmpsTable)) {
    const subs = await c.query(
      `SELECT cmp_id, component_type FROM "${cmpsTable}" WHERE entity_id=$1`,
      [cmpId]
    );
    for (const s of subs.rows) {
      words += await wordsForBlock(c, s.component_type, s.cmp_id, depth + 1);
    }
  }
  return words;
}

async function wordsForPost(c, postId) {
  const post = await c.query(
    `SELECT title, excerpt, body, blog_heading FROM blog_posts WHERE id=$1`,
    [postId]
  );
  let total = 0;
  if (post.rows[0]) {
    for (const v of Object.values(post.rows[0])) total += wordCount(v);
  }
  const blocks = await c.query(
    `SELECT cmp_id, component_type FROM blog_posts_cmps WHERE entity_id=$1 AND field='contentBlocks'`,
    [postId]
  );
  for (const b of blocks.rows) {
    total += await wordsForBlock(c, b.component_type, b.cmp_id);
  }
  return total;
}

(async () => {
  const c = new Client({ host: "127.0.0.1", port: 5432, user: "postgres", password: "postgres", database: "strapi" });
  await c.connect();
  try {
    const posts = await c.query(`SELECT id, slug, locale FROM blog_posts ORDER BY id`);
    console.log(`[reading-time] recalculating for ${posts.rows.length} posts`);
    let updated = 0, skipped = 0, errors = 0;
    for (const p of posts.rows) {
      try {
        const words = await wordsForPost(c, p.id);
        const minutes = Math.max(1, Math.ceil(words / WPM));
        await c.query(`UPDATE blog_posts SET reading_time=$1, updated_at=NOW() WHERE id=$2`, [minutes, p.id]);
        updated += 1;
        if (updated % 100 === 0) console.log(`  ... ${updated}/${posts.rows.length} updated`);
      } catch (e) {
        errors += 1;
        console.error(`[reading-time] ERROR id=${p.id} slug=${p.slug}: ${e.message}`);
      }
    }
    console.log(`[reading-time] done. updated=${updated} skipped=${skipped} errors=${errors}`);
  } finally {
    await c.end();
  }
})();
