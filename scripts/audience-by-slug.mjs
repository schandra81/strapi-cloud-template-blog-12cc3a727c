// Produce a flat slug-by-slug audience-focus report.
// Output format (tab-separated):
//   slug<TAB>focus<TAB>category<TAB>op<TAB>host<TAB>mix
// focus values: OPERATOR | HOST | OPERATOR-LEAN | HOST-LEAN | MIXED
import pg from "pg";
import fs from "fs";
const { Client } = pg;

const OPERATOR_KEYS = [
  "operator", "operators", "vending operator", "new operator", "solo operator",
  "prospective operator", "investors", "operator sales", "operator hr",
  "operator field service", "field service", "operator account manager",
  "operator operations", "operator team", "vendor selection",
  "small business operator", "operator margin", "operator cfo", "operator-side",
];
const HOST_KEYS = [
  "property manager", "property owners", "property management",
  "facility manager", "facility managers", "facilities",
  "office manager", "office managers", "office admin",
  "hr", "wellness", "wellness officers", "wellness team", "wellness coordinators",
  "procurement", "procurement officers",
  "service manager", "service managers",
  "compliance officer", "compliance officers", "compliance", "risk management",
  "sustainability officer", "sustainability officers", "sustainability office",
  "esg",
  "dealership management", "dealership manager",
  "hotel management", "hotel manager", "hotel operations",
  "school administrator", "school administrators", "principals",
  "school nutrition", "school district", "school admin",
  "superintendent", "district administrator", "district procurement", "district operations",
  "federal procurement", "state procurement", "municipal procurement",
  "airport operations", "airport procurement", "airline lounge operations",
  "accessibility coordinator", "accessibility",
  "site safety", "site manager", "site managers",
  "security officer", "security officers",
  "it security", "federal it", "federal security",
  "tenant", "tenants", "resident", "residents", "community manager", "community managers",
  "finance", "cfo", "executive", "c-suite", "executives", "executive sponsor",
  "marketing", "marketing officers", "event manager", "event managers", "venue operations",
  "24/7 operations", "operations", "host", "hosts", "host operations", "host-side",
  "gc", "general contractor",
  "leasing", "leasing manager",
  "patient experience", "patient family", "patient", "guest", "guests",
];
function classify(tag) {
  if (!tag) return "unknown";
  const t = tag.toLowerCase();
  if (/\boperator/.test(t)) return "operator";
  for (const k of HOST_KEYS) if (t.includes(k)) return "host";
  return "mixed";
}

const OPERATOR_CATEGORIES = new Set([
  "vending-business-startup", "vending-management-companies", "vending-machine-locators",
  "vending-franchises", "vending-contracts",
]);
const HOST_CATEGORIES = new Set([
  "vending-for-apartments", "vending-for-offices", "office-vending-services",
  "vending-for-schools", "vending-for-hotels", "vending-for-healthcare",
  "vending-for-dealerships", "vending-for-warehouses", "vending-for-airports",
  "vending-for-construction-sites", "vending-for-retail-locations",
  "vending-for-public-buildings", "vending-for-entertainment-venues",
  "vending-for-gyms", "vending-for-logistics-hubs", "vending-for-manufacturing-companies",
  "micro-market-services", "ai-vending-coolers", "healthy-vending-service",
]);

(async () => {
  const c = new Client({ host: "127.0.0.1", port: 5432, user: "postgres", password: "postgres", database: "strapi" });
  await c.connect();
  let todoMap = new Map();
  try {
    const todo = JSON.parse(fs.readFileSync("scripts/_todo.json", "utf8"));
    for (const e of todo) todoMap.set(e.slug, e.category);
  } catch {}

  const posts = await c.query(`SELECT DISTINCT ON (slug) id, slug FROM blog_posts WHERE slug IS NOT NULL AND slug != '' ORDER BY slug, id`);
  const out = [];
  for (const p of posts.rows) {
    const tabbedFaq = await c.query(
      `SELECT cmp_id FROM blog_posts_cmps WHERE entity_id=$1 AND component_type='library.block-tabbed-faq' AND field='contentBlocks'`,
      [p.id]
    );
    let opC = 0, hostC = 0, mixC = 0;
    for (const b of tabbedFaq.rows) {
      const subs = await c.query(`SELECT cmp_id FROM components_library_block_tabbed_faq_cmps WHERE entity_id=$1`, [b.cmp_id]);
      for (const s of subs.rows) {
        const r = await c.query(`SELECT audience FROM components_library_faq_items WHERE id=$1`, [s.cmp_id]);
        if (r.rows[0] && r.rows[0].audience) {
          const k = classify(r.rows[0].audience);
          if (k === "operator") opC++;
          else if (k === "host") hostC++;
          else mixC++;
        }
      }
    }
    const total = opC + hostC;
    let focus;
    if (total === 0) focus = "MIXED";
    else if (opC >= hostC * 2) focus = "OPERATOR";
    else if (hostC >= opC * 2) focus = "HOST";
    else if (opC > hostC) focus = "OPERATOR-LEAN";
    else if (hostC > opC) focus = "HOST-LEAN";
    else focus = "MIXED";
    const category = todoMap.get(p.slug) || "";
    // category override when audience signal is weak/lean
    if (["MIXED", "HOST-LEAN", "OPERATOR-LEAN"].includes(focus) && category) {
      if (OPERATOR_CATEGORIES.has(category)) focus = "OPERATOR";
      else if (HOST_CATEGORIES.has(category)) focus = "HOST";
    }
    out.push({ slug: p.slug, focus, category, op: opC, host: hostC, mix: mixC });
  }
  await c.end();

  // Write TSV — sorted alphabetically by slug
  out.sort((a, b) => a.slug.localeCompare(b.slug));
  const lines = [`slug\tfocus\tcategory\top\thost\tmix`];
  for (const r of out) {
    lines.push(`${r.slug}\t${r.focus}\t${r.category}\t${r.op}\t${r.host}\t${r.mix}`);
  }
  fs.writeFileSync("scripts/audience-by-slug.tsv", lines.join("\n") + "\n");

  // Also write a plain-text grouped version (sorted by focus, then category, then slug)
  out.sort((a, b) => {
    const order = { OPERATOR: 0, "OPERATOR-LEAN": 1, MIXED: 2, "HOST-LEAN": 3, HOST: 4 };
    return (order[a.focus] - order[b.focus]) || a.category.localeCompare(b.category) || a.slug.localeCompare(b.slug);
  });
  const grouped = [];
  grouped.push(`Audience focus per slug — ${out.length} total`);
  grouped.push(`Generated ${new Date().toISOString()}`);
  grouped.push(``);
  let lastFocus = null, lastCat = null;
  for (const r of out) {
    if (r.focus !== lastFocus) {
      grouped.push(``);
      grouped.push(`==============================================`);
      grouped.push(`  ${r.focus}`);
      grouped.push(`==============================================`);
      lastFocus = r.focus;
      lastCat = null;
    }
    if (r.category !== lastCat) {
      grouped.push(``);
      grouped.push(`  [${r.category || "(uncategorized)"}]`);
      lastCat = r.category;
    }
    grouped.push(`    ${r.slug.padEnd(60)}  op:${r.op} host:${r.host} mix:${r.mix}`);
  }
  fs.writeFileSync("scripts/audience-by-slug.txt", grouped.join("\n") + "\n");

  console.log(`wrote scripts/audience-by-slug.tsv (${out.length} rows)`);
  console.log(`wrote scripts/audience-by-slug.txt (grouped)`);
})();
