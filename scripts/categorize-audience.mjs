// Categorize each blog post by primary audience: Property Manager (Host) vs Vending Operator vs Mixed.
// Signals: (1) audience tags in tabbedFaq.faqs (primary), (2) URL category (tiebreaker).
import pg from "pg";
const { Client } = pg;

// Audience tag classification — case-insensitive substring match.
const OPERATOR_KEYS = [
  "operator", "operators", "vending operator", "new operator", "solo operator",
  "prospective operator", "investors", "sales", "operator sales",
  "operator hr", "operator field service", "field service",
  "operator account manager", "operator operations", "operator team",
  "vendor", "vendors", "vendor selection", "small business operator",
  "operator margin", "operator cfo", "operator-side", "operator company",
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
  "esg", "esg / sustainability",
  "dealership management", "dealership manager",
  "hotel management", "hotel manager", "hotel operations",
  "school administrator", "school administrators", "principals",
  "school nutrition", "school nutrition coordinators", "school district", "school admin",
  "superintendent", "district administrator", "district procurement", "district operations",
  "federal procurement", "state procurement", "municipal procurement",
  "airport operations", "airport procurement", "airline lounge operations",
  "accessibility coordinator", "accessibility coordinators", "accessibility",
  "site safety officer", "site safety", "site manager", "site managers",
  "security officer", "security officers",
  "it security", "federal it", "federal security",
  "tenant", "tenants", "resident", "residents", "community manager", "community managers",
  "finance", "cfo", "executive", "c-suite", "executives", "executive sponsor", "executive leadership",
  "marketing", "marketing officers", "event manager", "event managers", "venue operations",
  "24/7 operations", "operations", "host", "hosts", "host operations", "host-side",
  "gc", "general contractor",
  "leasing", "leasing manager",
  "patient experience", "patient family", "patient", "guest", "guests",
];

function classifyAudience(tag) {
  if (!tag) return "unknown";
  const t = tag.toLowerCase();
  // strict operator-only check first (so "operator" beats anything host-leaning in a mixed tag)
  for (const k of OPERATOR_KEYS) {
    if (t === k || t.startsWith(k + " ") || t.endsWith(" " + k) || t.includes(" " + k + " ") || t === k) {
      // ensure not also a host key (e.g. "operator sales" stays operator)
      return "operator";
    }
  }
  // word-boundary-ish substring match for operator
  if (/\boperator/.test(t)) return "operator";
  for (const k of HOST_KEYS) {
    if (t.includes(k)) return "host";
  }
  return "mixed";
}

// Category-based fallback when audience signal is ambiguous.
const OPERATOR_CATEGORIES = new Set([
  "vending-business-startup",
  "vending-management-companies",
  "vending-machine-locators",
  "vending-franchises",
  "vending-contracts",
]);

const HOST_CATEGORIES = new Set([
  "vending-for-apartments",
  "vending-for-offices",
  "office-vending-services",
  "vending-for-schools",
  "vending-for-hotels",
  "vending-for-healthcare",
  "vending-for-dealerships",
  "vending-for-warehouses",
  "vending-for-airports",
  "vending-for-construction-sites",
  "vending-for-retail-locations",
  "vending-for-public-buildings",
  "vending-for-entertainment-venues",
  "vending-for-gyms",
  "vending-for-logistics-hubs",
  "vending-for-manufacturing-companies",
  "micro-market-services",
  "ai-vending-coolers",
  "healthy-vending-service",
]);

function categoryFromUrl(url) {
  if (!url) return null;
  const m = url.match(/^\/?([^/]+)\//);
  return m ? m[1] : null;
}

(async () => {
  const c = new Client({ host: "127.0.0.1", port: 5432, user: "postgres", password: "postgres", database: "strapi" });
  await c.connect();
  try {
    // get distinct slugs (one row per slug; locale dedup)
    const posts = await c.query(`
      SELECT DISTINCT ON (slug) id, slug, title
      FROM blog_posts
      WHERE slug IS NOT NULL AND slug != ''
      ORDER BY slug, id
    `);
    console.error(`scanning ${posts.rows.length} unique slugs`);

    const rows = [];
    for (const p of posts.rows) {
      // 1) get tabbedFaq blocks for this post
      const tabbedFaqBlocks = await c.query(`
        SELECT cmp_id FROM blog_posts_cmps
        WHERE entity_id=$1 AND component_type='library.block-tabbed-faq' AND field='contentBlocks'
      `, [p.id]);

      const audiences = [];
      for (const b of tabbedFaqBlocks.rows) {
        // tabbedFaq children: components_library_block_tabbed_faq_cmps -> components_library_faq_items
        const subs = await c.query(`
          SELECT cmp_id, component_type FROM components_library_block_tabbed_faq_cmps WHERE entity_id=$1
        `, [b.cmp_id]);
        for (const s of subs.rows) {
          if (s.component_type === "library.faq-item") {
            const r = await c.query(`SELECT audience FROM components_library_faq_items WHERE id=$1`, [s.cmp_id]);
            if (r.rows[0] && r.rows[0].audience) audiences.push(r.rows[0].audience);
          }
        }
      }

      // 2) classify audiences
      let opCount = 0, hostCount = 0, mixCount = 0;
      const audienceBuckets = [];
      for (const a of audiences) {
        const klass = classifyAudience(a);
        audienceBuckets.push(klass);
        if (klass === "operator") opCount++;
        else if (klass === "host") hostCount++;
        else mixCount++;
      }

      // 3) infer category from URL slug fragments — first try blog_posts.body / url? We don't have url in blog_posts.
      // Use the slug + check existence in posts/<slug>.mjs which has category in its import path... we don't have that either.
      // Use _todo.json mapping.
      // For simplicity here, infer "host" or "operator" by audience dominance, fall back to "mixed".
      let bucket;
      const totalSignal = opCount + hostCount;
      if (totalSignal === 0) bucket = "MIXED";
      else if (opCount >= hostCount * 2) bucket = "OPERATOR";
      else if (hostCount >= opCount * 2) bucket = "HOST";
      else if (opCount > hostCount) bucket = "OPERATOR-LEAN";
      else if (hostCount > opCount) bucket = "HOST-LEAN";
      else bucket = "MIXED";

      rows.push({ slug: p.slug, title: p.title, bucket, opCount, hostCount, mixCount, total: audiences.length });
    }

    // join with _todo.json categories
    const fs = await import("fs");
    let todoMap = new Map();
    try {
      const todo = JSON.parse(fs.readFileSync("scripts/_todo.json", "utf8"));
      for (const e of todo) todoMap.set(e.slug, e.category);
    } catch {}

    // group + print
    const grouped = { HOST: [], "HOST-LEAN": [], MIXED: [], "OPERATOR-LEAN": [], OPERATOR: [] };
    for (const r of rows) {
      r.category = todoMap.get(r.slug) || "";
      // Use category override only when audience signal is weak
      if ((r.bucket === "MIXED" || r.bucket === "HOST-LEAN" || r.bucket === "OPERATOR-LEAN") && r.category) {
        if (OPERATOR_CATEGORIES.has(r.category)) r.bucket = "OPERATOR";
        else if (HOST_CATEGORIES.has(r.category)) r.bucket = "HOST";
      }
      grouped[r.bucket].push(r);
    }

    console.log("# Blog post audience categorization");
    console.log("");
    console.log(`Total unique slugs scanned: ${rows.length}`);
    for (const k of ["HOST", "HOST-LEAN", "MIXED", "OPERATOR-LEAN", "OPERATOR"]) {
      console.log(`- ${k}: ${grouped[k].length}`);
    }
    console.log("");

    for (const k of ["HOST", "HOST-LEAN", "MIXED", "OPERATOR-LEAN", "OPERATOR"]) {
      console.log(`\n## ${k} (${grouped[k].length})\n`);
      // sort by category then slug
      grouped[k].sort((a, b) => (a.category || "").localeCompare(b.category || "") || a.slug.localeCompare(b.slug));
      let lastCat = "";
      for (const r of grouped[k]) {
        if (r.category !== lastCat) {
          console.log(`\n### ${r.category || "(uncategorized)"}`);
          lastCat = r.category;
        }
        console.log(`- ${r.slug}  [op:${r.opCount} host:${r.hostCount} mix:${r.mixCount}]`);
      }
    }
  } finally {
    await c.end();
  }
})();
