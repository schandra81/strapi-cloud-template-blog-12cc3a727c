// Seed contentBlocks for blog post "what-are-the-dimensions-of-a-vending-machine".
// Lean lineup — only what spec content demands. No decision tree, no testimonial,
// no case study, no commission statement, no cost breakdown, no timeline.
//   cd strapi && node scripts/seed-dimensions-sql.mjs

import pg from "pg";
const { Client } = pg;

const POST_SLUG = "what-are-the-dimensions-of-a-vending-machine";
const FIELD = "contentBlocks";

const blocks = [
  {
    __c: "library.block-tldr-quick-answer",
    table: "components_library_block_tldr_quick_answer",
    cmpsTable: "components_library_block_tldr_quick_answer_cmps",
    data: {
      heading: "What are the standard dimensions of a vending machine?",
      paragraph:
        "A full-size snack or combo machine measures roughly 40 inches wide × 35 inches deep × 72 inches tall. A glass-front beverage cooler is wider at 42-48 inches but the same depth and height. Coffee vending machines are narrower (24-30 inches). All standard formats fit through a 36-inch doorway, in a standard freight elevator, and under an 8-foot ceiling — the industry intentionally standardizes around those building constraints. Loaded weight runs 700-900 lb for snack/combo, up to 1,000 lb for beverage. Allow 6 inches of rear clearance for ventilation and 36 inches of front clearance for service-door swing.",
    },
    children: {
      bullets: {
        component: "library.bullet-item",
        table: "components_library_bullet_items",
        items: [
          { emphasis: "Snack / Combo:", text: "40\" W × 35\" D × 72\" H — same external footprint, combo splits the cabinet for cold + ambient." },
          { emphasis: "Glass-front beverage:", text: "42-48\" W × 35\" D × 72\" H — extra width for bottle/can columns; same height as snack." },
          { emphasis: "Coffee / specialty:", text: "24-30\" W × 24\" D × 60-72\" H — narrower because no product columns; counter-top models exist at half this size." },
        ],
      },
    },
  },
  {
    __c: "library.block-dimension-diagram",
    table: "components_library_block_dimension_diagram",
    cmpsTable: null,
    data: {
      heading: "Standard snack / combo machine — reference dimensions",
      sub: "The geometry that 80% of full-size deployments use. Combos share this exact footprint with snacks — the cold/ambient split is internal.",
      machine_name: "Full-size snack / combo (e.g., AMS 39, Crane National 168, Royal 660)",
      width: "40 in",
      depth: "35 in",
      height: "72 in",
      footprint: "9.7 sq ft",
      weight_empty: "550-650 lb",
      weight_loaded: "750-900 lb",
      doorway_clearance: "36 in",
      note: "Add 6\" rear clearance for ventilation and 36\" front clearance for the service door to swing fully open. Floor must hold ≥150 lb/sq ft point load — concrete and slab-on-grade are fine; suspended wood floors above 1st story need verification.",
    },
  },
  {
    __c: "library.block-stat-strip",
    table: "components_library_block_stat_strip",
    cmpsTable: "components_library_block_stat_strip_cmps",
    data: { heading: "Numbers that decide whether a machine fits your space" },
    children: {
      stats: {
        component: "library.stat-item",
        table: "components_library_stat_items",
        items: [
          { number: "40 × 35 × 72\"", label: "standard snack/combo", sub: "W × D × H", accent: "blue" },
          { number: "36 in", label: "minimum doorway", sub: "ADA single-leaf standard", accent: "orange" },
          { number: "84 in", label: "minimum ceiling", sub: "machine + delivery clearance", accent: "orange" },
          { number: "150 lb/sf", label: "floor load capacity", sub: "loaded point load", accent: "blue" },
        ],
      },
    },
  },
  {
    __c: "library.block-comparison-table",
    table: "components_library_block_comparison_table",
    cmpsTable: null,
    data: {
      heading: "Dimensions by machine type — side-by-side",
      sub: "Every common format on one table. Footprint determines whether the machine fits; weight and clearance determine whether it can be delivered.",
      headers: JSON.stringify(["Machine type", "Width", "Depth", "Height", "Loaded weight"]),
      rows: JSON.stringify([
        ["Snack (full-size)", "40\"", "35\"", "72\"", "750-850 lb"],
        ["Combo (snack + beverage)", "40\"", "35\"", "72\"", "800-900 lb"],
        ["Glass-front beverage cooler", "42-48\"", "35\"", "72\"", "900-1,050 lb"],
        ["Fresh food / refrigerated meal", "40\"", "37-40\"", "72\"", "900-1,000 lb"],
        ["Frozen vending", "40\"", "37\"", "72\"", "950-1,100 lb"],
        ["Coffee vending (floor)", "24-30\"", "24-28\"", "60-72\"", "350-500 lb"],
        ["Micro-market (small kiosk)", "100-300 sq ft total floor area", "", "", "n/a (modular)"],
      ]),
      winner_column: null,
    },
  },
  {
    __c: "library.block-spec-list",
    table: "components_library_block_spec_list",
    cmpsTable: "components_library_block_spec_list_cmps",
    data: { heading: "Pre-install site checks the operator will run (do them first)" },
    children: {
      items: {
        component: "library.spec-item",
        table: "components_library_spec_items",
        items: [
          { label: "Delivery path width", value: "Measure the narrowest point from loading dock / entry to final spot. ≥36\" is the standard pass-through; 32\" works for snack/combo with door removed (operator handles)." },
          { label: "Doorway height", value: "≥80\" to clear the 72\" machine on a hand truck. Low-clearance basement doors are the most common surprise." },
          { label: "Elevator dimensions", value: "Standard passenger elevators handle 40×35×72 with a tilt; freight elevators always work. Check inside-cab depth — some older buildings are <40\"." },
          { label: "Floor surface + load", value: "Concrete, vinyl, or sealed wood. Carpet under glides causes slow tilting over months. Suspended floors above 1st story need ≥150 lb/sq ft rating; an SE or building manager confirms in writing." },
          { label: "Outlet location + rating", value: "Dedicated 120V / 15A or 20A outlet within 6 ft. Beverage and fresh-food units may pull 12 A; avoid sharing the circuit with microwaves or copiers. NEMA 5-15R standard." },
          { label: "Rear clearance", value: "Minimum 6\" behind the unit for compressor airflow. Less than 6\" causes condenser overheating and ~30% earlier compressor failure." },
          { label: "Front clearance", value: "Minimum 36\" in front so the service door (typical 33-36\" swing) fully opens for restocking. 48\" is comfortable; <30\" forces partial-door service which slows route times." },
          { label: "Threshold and ramp", value: "Loading-dock-to-floor lip >0.5\" needs a portable ramp (operator brings). Step-up entries (one or more risers) require a four-wheel dolly and 2-3 movers — call this out before delivery day." },
        ],
      },
    },
  },
  {
    __c: "library.block-tip-cards",
    table: "components_library_block_tip_cards",
    cmpsTable: "components_library_block_tip_cards_cmps",
    data: {
      heading: "Three install-day surprises that postpone delivery",
      sub: "Almost every \"machine doesn't fit\" callback traces to one of these. All are catchable with a 10-minute pre-install walk-through.",
      start_number: 1,
    },
    children: {
      items: {
        component: "library.tip-item",
        table: "components_library_tip_items",
        items: [
          { title: "Drop-ceiling tiles in the service hall", body: "Tiles set to 7'10\" or 7'8\" still pass overall code but kill the 8'+ clearance needed to tilt a 72\" machine through a doorway. Measure floor-to-tile, not floor-to-deck." },
          { title: "Narrow corridor turn at the last 90°", body: "Hallways measure fine but the final right-angle turn into the break room needs ~52\" of swing diagonal for a 40\"-wide machine on a hand truck. Mark it out with painter's tape before delivery." },
          { title: "Floor outlets that look right but aren't dedicated", body: "Outlet exists, looks fine, but it's on the same 15A circuit as the microwave and a copier. Compressor cycling trips the breaker within a week. Always verify dedicated circuit with the facilities team — not just the visible outlet." },
        ],
      },
    },
  },
  {
    __c: "library.block-inline-cta",
    table: "components_library_block_inline_cta",
    cmpsTable: null,
    data: {
      text: "Want a free site-survey checklist (PDF) you can hand to your facilities team before the install?",
      button_label: "Get the site-survey PDF",
      button_href: "/#get-machine",
    },
  },
  {
    __c: "library.block-author-card",
    table: "components_library_block_author_card",
    cmpsTable: "components_library_block_author_card_cmps",
    data: {
      name: "Bobby Mac",
      role: "Vending Service Advisor · 12 years experience",
      bio: "Bobby Mac has spent twelve years installing and servicing vending equipment across the Phoenix, Atlanta, Charlotte, and Detroit metros. Dimensions in this guide were cross-referenced against current spec sheets from AMS, Crane National, Royal Vendors, and Vendo, and validated by his standing pre-install checklist used with facilities teams on 200+ deployments.",
    },
    children: {
      links: {
        component: "library.author-link",
        table: "components_library_author_links",
        items: [
          { label: "About the desk", href: "/about" },
          { label: "Editorial standards", href: "/about#standards" },
          { label: "Contact Bobby", href: "/#get-machine" },
        ],
      },
    },
  },
  {
    __c: "library.block-tabbed-faq",
    table: "components_library_block_tabbed_faq",
    cmpsTable: "components_library_block_tabbed_faq_cmps",
    data: { heading: "Frequently asked questions" },
    children: {
      faqs: {
        component: "library.faq-item",
        table: "components_library_faq_items",
        items: [
          { question: "Will a standard vending machine fit through a 32-inch door?", answer: "Tightly — a 40\" wide machine on a hand truck needs the operator to remove the service door (subtracts about 4\") and turn the unit slightly. Most route techs do this routinely. Anything narrower than 32\" requires either disassembly (rare) or a counter-top / coffee unit (24-30\" wide). Always send the operator a door measurement before delivery day.", audience: "Hosts" },
          { question: "Can vending machines fit under an 8-foot ceiling?", answer: "Yes — 96\" of ceiling minus the 72\" machine height leaves 24\" of clearance, which is more than enough to tilt the unit upright on a hand truck. Watch for drop-ceiling tiles set below 96\" and recessed lighting fixtures that intrude another 4-6\".", audience: "Hosts" },
          { question: "What does a fully loaded vending machine weigh?", answer: "Snack and combo machines: 750-900 lb loaded (550-650 lb empty + ~200-250 lb of product). Glass-front beverage coolers: 900-1,050 lb loaded — drinks are heavier than chips. Fresh-food and frozen units run 900-1,100 lb. The floor must be rated for ≥150 lb/sq ft point load; concrete slabs are always fine, suspended floors above the first story need verification.", audience: "Hosts" },
          { question: "How much clearance does the machine need around it?", answer: "6 inches behind for compressor airflow (less than this causes early condenser failure), 36 inches in front for the service door to open fully during restocking, and 1 inch on each side if you're placing two machines next to each other (otherwise vibration causes paint wear on adjacent panels).", audience: "Hosts" },
          { question: "What size electrical outlet does it need?", answer: "A dedicated 120V / 15A or 20A NEMA 5-15R outlet within 6 feet of the machine. Snack machines pull 6-8 A; beverage and fresh-food units pull 10-12 A. Do not share the circuit with high-draw appliances (microwaves, copiers, coffee makers) — compressor cycling will trip the breaker within days.", audience: "Hosts" },
          { question: "Are there compact vending machines for tight spaces?", answer: "Yes. Counter-top vending units (sometimes called \"executive\" or \"tabletop\") run 24\" wide × 22\" deep × 36-48\" tall and serve 8-15 SKUs. They're suited to small offices (<25 people) or coffee-bar adjacencies. Selection is narrower and prices per-vend are similar to full-size, so they make sense for space-constrained sites, not as a cost-saving move.", audience: "Hosts" },
          { question: "What size door swing should I plan for during service visits?", answer: "Service-door swing is typically 33-36\" — match this with at least 36\" of front clearance. If the machine is in a tight corner, the door may need to swing toward an adjacent wall; plan the orientation before bolting. For double-door beverage coolers, plan 48\" front clearance.", audience: "Operators" },
          { question: "Does the machine need to be bolted or anchored?", answer: "Depends on jurisdiction. ADA-leaning installs (lobbies, hospitals, schools) typically require seismic anchoring with two 3/8\" expansion bolts into concrete or unistrut into the wall. Most break-room installs don't require anchoring but operators add anti-tip brackets as standard safety practice — a $25 part that prevents the rare tip-over injury and the liability that follows.", audience: "Operators" },
        ],
      },
    },
  },
  {
    __c: "library.block-source-citations",
    table: "components_library_block_source_citations",
    cmpsTable: "components_library_block_source_citations_cmps",
    data: { heading: "Manufacturer spec sheets and standards" },
    children: {
      sources: {
        component: "library.source",
        table: "components_library_sources",
        items: [
          { label: "AMS — full-line spec sheet (Sensit, Outsider, Visi Combo)", url: "https://www.amsvendors.com/", note: "Dimensions for snack, combo, and beverage units cross-referenced here" },
          { label: "Crane National Vendors — model dimensions", url: "https://www.cranepi.com/en/brands/national-vendors", note: "Combo and beverage cooler footprints" },
          { label: "Royal Vendors — beverage cooler spec sheets", url: "https://www.royalvendors.com/", note: "Glass-front cooler width and weight benchmarks" },
          { label: "Vendo — coffee and specialty machine dimensions", url: "https://www.vendo.com/", note: "Coffee vending and narrower-format references" },
          { label: "ADA Standards for Accessible Design — 2010 edition", url: "https://www.ada.gov/law-and-regs/design-standards/2010-stds/", note: "36-inch doorway and accessible reach-range citations" },
        ],
      },
    },
  },
  {
    __c: "library.block-related-guides",
    table: "components_library_block_related_guides",
    cmpsTable: "components_library_block_related_guides_cmps",
    data: { heading: "Related installation and equipment guides" },
    children: {
      items: {
        component: "library.related-item",
        table: "components_library_related_items",
        items: [
          { eyebrow: "Sister guide", title: "How are vending machines installed?", description: "The 4-hour install playbook: pre-survey, delivery, anchoring, electrical, telemetry handshake. Includes the checklist operators bring to every site.", href: "/operating-vending-machines/how-are-vending-machines-installed" },
          { eyebrow: "Equipment selection", title: "What are combo vending machines?", description: "Why the combo footprint (40×35×72) is the most-deployed format and when separate snack + beverage units outperform.", href: "/vending-machine-types/what-are-combo-vending-machines" },
          { eyebrow: "Operator guide", title: "How to buy your first vending machine", description: "Bobby Mac's 30-day buyer guide for prospective operators — sourcing, inspection, delivery scheduling.", href: "/vending-business-startup/how-to-buy-your-first-vending-machine" },
        ],
      },
    },
  },
];

const c = new Client({
  host: "127.0.0.1",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "strapi",
});

async function insertRow(table, data) {
  const cols = Object.keys(data);
  const vals = Object.values(data);
  const placeholders = cols.map((_, i) => `$${i + 1}`).join(", ");
  const sql = `INSERT INTO "${table}" (${cols.map((k) => `"${k}"`).join(", ")}) VALUES (${placeholders}) RETURNING id`;
  const r = await c.query(sql, vals);
  return r.rows[0].id;
}

async function insertCmpsRow(table, entityId, cmpId, componentType, field, order) {
  await c.query(
    `INSERT INTO "${table}" (entity_id, cmp_id, component_type, field, "order") VALUES ($1, $2, $3, $4, $5)`,
    [entityId, cmpId, componentType, field, order]
  );
}

async function tableExists(name) {
  const r = await c.query(`SELECT to_regclass($1) IS NOT NULL AS exists`, [`public."${name}"`]);
  return r.rows[0].exists;
}

async function deleteExistingBlocks(postId) {
  const existing = await c.query(
    `SELECT cmp_id, component_type FROM blog_posts_cmps WHERE entity_id=$1 AND field=$2`,
    [postId, FIELD]
  );
  for (const row of existing.rows) {
    const compTable = "components_" + row.component_type.replace(/\./g, "_").replace(/-/g, "_");
    const cmpsTable = compTable + "_cmps";
    if (await tableExists(cmpsTable)) {
      const subRows = await c.query(
        `SELECT cmp_id, component_type FROM "${cmpsTable}" WHERE entity_id=$1`,
        [row.cmp_id]
      );
      for (const sub of subRows.rows) {
        const subTable = "components_" + sub.component_type.replace(/\./g, "_").replace(/-/g, "_");
        if (await tableExists(subTable)) {
          await c.query(`DELETE FROM "${subTable}" WHERE id=$1`, [sub.cmp_id]);
        }
      }
      await c.query(`DELETE FROM "${cmpsTable}" WHERE entity_id=$1`, [row.cmp_id]);
    }
    if (await tableExists(compTable)) {
      await c.query(`DELETE FROM "${compTable}" WHERE id=$1`, [row.cmp_id]);
    }
  }
  await c.query(`DELETE FROM blog_posts_cmps WHERE entity_id=$1 AND field=$2`, [postId, FIELD]);
}

async function seedForPost(postId) {
  console.log(`[seed] post id=${postId} — clearing existing contentBlocks`);
  await deleteExistingBlocks(postId);

  let order = 1;
  for (const block of blocks) {
    const cmpId = await insertRow(block.table, block.data);
    await insertCmpsRow("blog_posts_cmps", postId, cmpId, block.__c, FIELD, order);

    if (block.children) {
      for (const [field, def] of Object.entries(block.children)) {
        let subOrder = 1;
        for (const subData of def.items) {
          const subId = await insertRow(def.table, subData);
          await insertCmpsRow(block.cmpsTable, cmpId, subId, def.component, field, subOrder);
          subOrder += 1;
        }
      }
    }
    console.log(`  ${block.__c} (order ${order}, id ${cmpId})`);
    order += 1;
  }
}

await c.connect();
try {
  const posts = await c.query(
    `SELECT id, locale, published_at FROM blog_posts WHERE slug=$1 ORDER BY id`,
    [POST_SLUG]
  );
  console.log(`[seed] found ${posts.rows.length} variants for slug=${POST_SLUG}`);
  await c.query("BEGIN");
  for (const post of posts.rows) {
    await seedForPost(post.id);
  }
  await c.query("COMMIT");
  console.log("[seed] committed.");
} catch (err) {
  await c.query("ROLLBACK").catch(() => {});
  console.error("[seed] ERROR:", err.message);
  console.error(err.stack);
  process.exit(1);
} finally {
  await c.end();
}
process.exit(0);
