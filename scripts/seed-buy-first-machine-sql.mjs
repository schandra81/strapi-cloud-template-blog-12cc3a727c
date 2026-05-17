// Seed contentBlocks for blog post "how-to-buy-your-first-vending-machine"
// via direct Postgres writes. Run with Strapi running OR stopped — it only touches the DB.
//   cd strapi && node scripts/seed-buy-first-machine-sql.mjs

import pg from "pg";
const { Client } = pg;

const POST_SLUG = "how-to-buy-your-first-vending-machine";
const FIELD = "contentBlocks";

const blocks = [
  {
    __c: "library.block-tldr-quick-answer",
    table: "components_library_block_tldr_quick_answer",
    cmpsTable: "components_library_block_tldr_quick_answer_cmps",
    data: {
      heading: "How do I buy my first vending machine without getting burned?",
      paragraph: "Source from a reputable used channel (UsedVending.com, established local operators, vetted Facebook Marketplace listings). Drive out to inspect every candidate in person — power it up, test the cooling, the bill validator, the card reader, every coil. Buy a 2018-2020 combo machine in working condition for $1,500-3,500, then budget another $200-400 for a service tune-up. Skip new equipment on machine #1. The depreciation alone makes used the obvious move.",
    },
    children: {
      bullets: {
        component: "library.bullet-item",
        table: "components_library_bullet_items",
        items: [
          { emphasis: "Buy used, not new", text: "— new machines depreciate 40-60% in three years. A used 2018-2020 combo machine performs nearly the same for half the price." },
          { emphasis: "Inspect in person", text: "— power it up for 15 minutes, test cooling, every coil, the bill validator, and the card reader before you write a check." },
          { emphasis: "Budget the tune-up", text: "— plan $200-400 for a post-purchase service visit. Belts, seals, telemetry firmware. Cheap insurance." },
        ],
      },
    },
  },
  {
    __c: "library.block-key-takeaways",
    table: "components_library_block_key_takeaways",
    cmpsTable: "components_library_block_key_takeaways_cmps",
    data: { heading: "Key takeaways" },
    children: {
      takeaways: {
        component: "library.takeaway",
        table: "components_library_takeaways",
        items: [
          { text: "Used 2018-2020 combo machines from a reputable channel deliver 95% of new-machine performance at 40-50% of the cost." },
          { text: "Inspect in person. Plug it in, test every coil, every payment surface, and the cooling for 15 minutes before any cash changes hands." },
          { text: "Plan all-in spend of $2,900-4,900 for machine + delivery + tune-up + first inventory + year-one cellular." },
          { text: "Avoid auctions and untrusted sellers for machine #1. Without an in-person inspection, risk far outweighs the discount." },
          { text: "Your first machine pays back in 9-14 months at a single decent location. Anything faster is unusual; anything slower is the wrong location." },
        ],
      },
    },
  },
  {
    __c: "library.block-stat-strip",
    table: "components_library_block_stat_strip",
    cmpsTable: "components_library_block_stat_strip_cmps",
    data: { heading: "Numbers that anchor a first-machine decision" },
    children: {
      stats: {
        component: "library.stat-item",
        table: "components_library_stat_items",
        items: [
          { number: "$2,500", label: "median used price", sub: "2018-2020 combo, working", accent: "blue" },
          { number: "40-60%", label: "new-machine depreciation", sub: "first 3 years", accent: "orange" },
          { number: "9-14 mo", label: "typical break-even", sub: "single decent location", accent: "orange" },
          { number: "$300", label: "tune-up budget", sub: "belts, seals, firmware", accent: "blue" },
        ],
      },
    },
  },
  {
    __c: "library.block-cost-breakdown",
    table: "components_library_block_cost_breakdown",
    cmpsTable: "components_library_block_cost_breakdown_cmps",
    data: {
      heading: "What a first-machine purchase actually costs in 2026",
      sub: "All-in for one working unit at one location through the first year of cellular service.",
      total_label: "Year-one all-in",
      total_amount: "$3,735",
    },
    children: {
      items: {
        component: "library.cost-line",
        table: "components_library_cost_lines",
        items: [
          { label: "Used combo machine (2018-2020)", range: "$1,500-3,500", amount: "$2,500" },
          { label: "Delivery (lift gate, 50 mi)", range: "$200-400", amount: "$300" },
          { label: "Service tune-up + telemetry firmware", range: "$200-400", amount: "$300" },
          { label: "Initial inventory (60-80 SKUs)", range: "$150-300", amount: "$225" },
          { label: "Cellular + telemetry (year 1)", range: "$25-40/mo", amount: "$360" },
          { label: "Card-reader activation + processing setup", range: "$0-100", amount: "$50" },
        ],
      },
    },
  },
  {
    __c: "library.block-comparison-table",
    table: "components_library_block_comparison_table",
    cmpsTable: null,
    data: {
      heading: "Used vs new — the decision in six lines",
      sub: "The used column wins on every line that drives first-year cash flow. New only wins on convenience features.",
      headers: JSON.stringify(["Aspect", "Used (2018-2020)", "New (2026)"]),
      rows: JSON.stringify([
        ["Upfront cost", "$1,500-3,500", "$5,500-7,500"],
        ["Warranty", "As-is", "1-3 year manufacturer"],
        ["3-year value retention", "~60% (slower curve)", "~40% (steep first 3 yr)"],
        ["Tech generation", "5-year-old payment stack — fine", "Latest reader + UI"],
        ["Cellular pre-configured", "Sometimes", "Yes"],
        ["Reliability when inspected", { icon: "check", text: "High" }, { icon: "check", text: "High" }],
      ]),
      winner_column: 1,
    },
  },
  {
    __c: "library.block-timeline",
    table: "components_library_block_timeline",
    cmpsTable: "components_library_block_timeline_cmps",
    data: {
      heading: "A 30-day plan from cold start to first deployment",
      sub: "Most first machines take this long because of inspection scheduling, not buying time. The buying itself is one weekend.",
      how_to_name: "How to buy your first vending machine",
      total_time: "P30D",
    },
    children: {
      steps: {
        component: "library.timeline-step",
        table: "components_library_timeline_steps",
        items: [
          { label: "DAY 1-3", title: "Set the budget and shortlist", description: "Decide on $2,000-3,500 for the machine, then build a 5-7 candidate shortlist from UsedVending.com, local Facebook Marketplace, and a 'wanted' post in a regional vending Facebook group. Avoid eBay auctions for the first machine." },
          { label: "DAY 4-10", title: "Inspect three candidates in person", description: "Drive out. Bring an extension cord and a roll of singles. Plug it in, let it warm 15 minutes, test every coil, run a card swipe and a bill insert on each. Open the door and look for corrosion or smell of mildew." },
          { label: "DAY 11-14", title: "Negotiate and buy", description: "Asking prices are usually 15-25% above market. The strongest leverage is having a real second candidate. Pay by check or wire after pickup, not before — even with established sellers." },
          { label: "DAY 15-21", title: "Schedule the service tune-up", description: "A local route tech replaces belts, reseals the door, updates the telemetry modem firmware, and verifies the bill validator and card reader. Budget $200-400, half a day on-site." },
          { label: "DAY 22-30", title: "Deploy at first location", description: "Power it on, load 60-80 SKUs, configure the planogram in your platform of choice (Cantaloupe, Nayax, 365), and confirm telemetry uplink. Verify the first sale rings through to your processor." },
        ],
      },
    },
  },
  {
    __c: "library.block-spec-list",
    table: "components_library_block_spec_list",
    cmpsTable: "components_library_block_spec_list_cmps",
    data: { heading: "What to inspect before any money changes hands" },
    children: {
      items: {
        component: "library.spec-item",
        table: "components_library_spec_items",
        items: [
          { label: "Cooling section", value: "Beverage zone should hit 38°F within 30 minutes. Anything warmer is a $400-800 fix waiting to happen." },
          { label: "Bill validator", value: "Insert a worn $1 and a crisp $5. Both should pull cleanly. Jams = $80-150 part." },
          { label: "Coin mechanism", value: "Drop 4 quarters individually. All four should register. Optional if you go card-only." },
          { label: "Card reader", value: "Tap a phone, tap a chip card, swipe a magstripe. All three paths should ring an authorization." },
          { label: "Every coil / shelf", value: "Run a vend on every selection. Stuck motors are common in machines that sat unused." },
          { label: "Cellular modem", value: "Confirm the SIM is active and signal is healthy at the seller's location. Look for the green status LED." },
          { label: "Door seal and corrosion", value: "Open the door, run your hand around the gasket. Soft gaskets and rust at the bottom edge are signs of water ingress." },
          { label: "DEX / MDB pinouts", value: "Visually inspect the harness. Cut or taped pins are a red flag — telemetry won't work cleanly." },
        ],
      },
    },
  },
  {
    __c: "library.block-inline-cta",
    table: "components_library_block_inline_cta",
    cmpsTable: null,
    data: {
      text: "Want the full 28-point inspection checklist as a PDF you can take to the seller?",
      button_label: "Download the checklist",
      button_href: "#leadmag",
    },
  },
  {
    __c: "library.block-tip-cards",
    table: "components_library_block_tip_cards",
    cmpsTable: "components_library_block_tip_cards_cmps",
    data: {
      heading: "The four mistakes that wreck first machines",
      sub: "Every one of these is recoverable, but each costs more than the original discount you thought you were getting.",
      start_number: 1,
    },
    children: {
      items: {
        component: "library.tip-item",
        table: "components_library_tip_items",
        items: [
          { title: "Buying from an auction without inspection", body: "Auction discounts evaporate on the first failed component. The 10% you saved buys you a $600 cooling repair." },
          { title: "Skipping the cellular check", body: "A machine that 'mostly works' with cellular flagged is a machine that doesn't talk to your platform. Restocking blind kills early margin." },
          { title: "Forgetting to budget the tune-up", body: "Belts, seals, firmware — none are expensive individually, all are necessary collectively. $300 saves you a $1,000 second visit." },
          { title: "Buying too big for the first location", body: "A 7-wide combo at a 15-person break room sits half-empty for months. Match capacity to traffic, not aspiration." },
        ],
      },
    },
  },
  {
    __c: "library.block-decision-tree",
    table: "components_library_block_decision_tree",
    cmpsTable: "components_library_block_decision_tree_cmps",
    data: {
      heading: "Should I buy new instead?",
      question: "Is this your first machine and your only machine?",
    },
    children: {
      branches: {
        component: "library.decision-branch",
        table: "components_library_decision_branches",
        items: [
          { yn: "YES", title: "Buy used.", description: "First-machine economics are bad on new equipment. The depreciation curve alone costs more than the warranty and tech edge are worth.", final_tone: "stop", final_label: "BUY USED · 2018-2020" },
          { yn: "NO", title: "Consider new for unit 4+.", description: "Once you have a route and a working playbook, new equipment makes more sense — warranty coverage and uniform telemetry start paying back at scale.", final_tone: "go", final_label: "NEW IS FINE AT SCALE" },
        ],
      },
    },
  },
  {
    __c: "library.block-case-study",
    table: "components_library_block_case_study",
    cmpsTable: "components_library_block_case_study_cmps",
    data: {
      tag: "Real numbers · Phoenix operator",
      title: "$2,400 first machine, $4,800 in year-one revenue",
      context: "Jared, a side-hustle operator in Phoenix, bought a 2019 combo from a retiring operator off Facebook Marketplace. One weekend of inspection, one tune-up, one location: a 24-hour gym with 380 members. Here's how the year-one numbers landed.",
    },
    children: {
      meta: {
        component: "library.case-meta",
        table: "components_library_case_meta",
        items: [
          { label: "Channel", value: "FB Marketplace, local seller" },
          { label: "Machine", value: "2019 combo, 7-wide" },
          { label: "Location", value: "24-hr gym, 380 members" },
        ],
      },
      results: {
        component: "library.case-result",
        table: "components_library_case_results",
        items: [
          { number: "$2,400", label: "purchase price" },
          { number: "$4,800", label: "year-one gross revenue" },
          { number: "11 mo", label: "all-in payback" },
        ],
      },
    },
  },
  {
    __c: "library.block-testimonial-quote",
    table: "components_library_block_testimonial_quote",
    cmpsTable: null,
    data: {
      quote: "The thing nobody told me: the inspection day matters more than the price. I walked away from a $1,900 machine that wouldn't keep below 45°F. The $2,400 machine I bought instead has been zero problems for 14 months.",
      name: "Jared M.",
      role: "Side-hustle operator · Phoenix, AZ · One machine, one gym",
    },
  },
  {
    __c: "library.block-lead-magnet",
    table: "components_library_block_lead_magnet",
    cmpsTable: null,
    data: {
      title: "The 28-point used vending machine inspection checklist",
      subtitle: "A PDF + Google Sheet you can take to any seller. Covers cooling, payment, every coil, telemetry, and the seven 'walk away' signals.",
      button_label: "Download free",
      button_href: "/#get-machine",
      icon_text: "★",
    },
  },
  {
    __c: "library.block-source-citations",
    table: "components_library_block_source_citations",
    cmpsTable: "components_library_block_source_citations_cmps",
    data: { heading: "Sources" },
    children: {
      sources: {
        component: "library.source",
        table: "components_library_sources",
        items: [
          { label: "UsedVending.com — live listings price index", url: "https://www.usedvending.com/", note: "Median used-combo pricing referenced throughout" },
          { label: "National Automatic Merchandising Association (NAMA) — operator resources", url: "https://www.namanow.org/", note: "Regional operator chapter directory used for sourcing" },
          { label: "FTC — used product disclosures (16 CFR Part 455)", url: "https://www.ftc.gov/legal-library/browse/rules/used-motor-vehicle-trade-regulation-rule", note: "Background on as-is buyer protections" },
          { label: "Cantaloupe / Nayax / 365 Retail Markets — telemetry datasheets", url: "https://www.cantaloupe.com/", note: "Cellular cost and modem-firmware update procedures" },
        ],
      },
    },
  },
  {
    __c: "library.block-related-guides",
    table: "components_library_block_related_guides",
    cmpsTable: "components_library_block_related_guides_cmps",
    data: { heading: "Related operator guides" },
    children: {
      items: {
        component: "library.related-item",
        table: "components_library_related_items",
        items: [
          { eyebrow: "Sister guide", title: "Your first location: how to choose and pitch it", description: "Headcount thresholds, dwell-time tests, and the one question that decides whether a location is worth pursuing.", href: "/vending-business-startup/your-first-vending-location" },
          { eyebrow: "Cost deep-dive", title: "Vending business startup costs in 2026", description: "Full P&L from machine #1 to a four-machine route, including the under-budgeted line items that catch new operators.", href: "/vending-business-startup/vending-startup-costs-2026" },
          { eyebrow: "Hub", title: "All vending business startup guides", description: "Sourcing, contracts, locations, financing, taxes, scaling. Every guide we have for new operators.", href: "/vending-business-startup" },
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

function snake(o) {
  // Pass-through; data already uses snake_case column names.
  return o;
}

async function insertRow(table, data) {
  const cols = Object.keys(data);
  const vals = Object.values(data);
  const placeholders = cols.map((_, i) => `$${i + 1}`).join(", ");
  const sql = `INSERT INTO "${table}" (${cols.map((k) => `"${k}"`).join(", ")}) VALUES (${placeholders}) RETURNING id`;
  const r = await c.query(sql, vals);
  return r.rows[0].id;
}

async function insertSubCmpsRow(table, entityId, cmpId, componentType, field, order) {
  await c.query(
    `INSERT INTO "${table}" (entity_id, cmp_id, component_type, field, "order") VALUES ($1, $2, $3, $4, $5)`,
    [entityId, cmpId, componentType, field, order],
  );
}

async function seedForPost(postId) {
  console.log(`[seed] post id=${postId} — clearing existing contentBlocks cmps`);
  await c.query(`DELETE FROM blog_posts_cmps WHERE entity_id=$1 AND field=$2`, [postId, FIELD]);

  let order = 1;
  for (const block of blocks) {
    const cmpId = await insertRow(block.table, snake(block.data));
    // Top-level join
    await insertSubCmpsRow("blog_posts_cmps", postId, cmpId, block.__c, FIELD, order);

    // Nested sub-components
    if (block.children) {
      for (const [field, def] of Object.entries(block.children)) {
        let subOrder = 1;
        for (const subData of def.items) {
          const subId = await insertRow(def.table, subData);
          await insertSubCmpsRow(block.cmpsTable, cmpId, subId, def.component, field, subOrder);
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
    [POST_SLUG],
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
  process.exit(1);
} finally {
  await c.end();
}
process.exit(0);
