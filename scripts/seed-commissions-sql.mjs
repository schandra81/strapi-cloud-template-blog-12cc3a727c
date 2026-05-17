// Seed contentBlocks for blog post "how-do-vending-machine-commissions-work".
// Targets the host (location) audience — commissions are paid TO hosts BY operators.
// Writes via direct Postgres so it works whether Strapi is running or stopped.
//   cd strapi && node scripts/seed-commissions-sql.mjs

import pg from "pg";
const { Client } = pg;

const POST_SLUG = "how-do-vending-machine-commissions-work";
const FIELD = "contentBlocks";

const blocks = [
  {
    __c: "library.block-tldr-quick-answer",
    table: "components_library_block_tldr_quick_answer",
    cmpsTable: "components_library_block_tldr_quick_answer_cmps",
    data: {
      heading: "How do vending machine commissions actually work?",
      paragraph:
        "Commissions are a percentage of gross sales the operator pays back to the host (the location). Standard rates run 5%-25% depending on traffic, headcount, and machine count. The operator calculates the figure from telemetry-tracked sales, deducts refunds and comped product per the contract, then pays monthly or quarterly with an itemized statement. Smart machines have made the math fully auditable — every vend rings through the modem within minutes, so disputes are rare. The only friction points hosts hit are gross-vs-net basis confusion, refund/shrinkage handling, and statements that arrive without per-SKU detail.",
    },
    children: {
      bullets: {
        component: "library.bullet-item",
        table: "components_library_bullet_items",
        items: [
          { emphasis: "It's a % of gross sales", text: "— rates run 5%-25%; high-traffic accounts (1,000+ daily impressions) negotiate 15-25%, small offices land at 5-10%." },
          { emphasis: "Paid monthly or quarterly", text: "— monthly for accounts over ~$1,000/mo in gross; quarterly for smaller accounts where monthly accounting cost > payment value." },
          { emphasis: "Statements must be itemized", text: "— per machine, per SKU, gross, refunds, net, rate, and commission $. No itemization = no audit trail. Walk away from that contract." },
        ],
      },
    },
  },
  {
    __c: "library.block-key-takeaways",
    table: "components_library_block_key_takeaways",
    cmpsTable: "components_library_block_key_takeaways_cmps",
    data: { heading: "Key takeaways for hosts and facility managers" },
    children: {
      takeaways: {
        component: "library.takeaway",
        table: "components_library_takeaways",
        items: [
          { text: "Commissions are paid as a percentage of gross sales (not profit). Typical range is 5%-25%; the rate is driven by foot traffic and machine count, not by which operator you pick." },
          { text: "Always confirm the calculation basis (gross vs net) in the contract. Net-of-refunds reduces your commission by 1-3%; net-of-tax can take another 6-9% off." },
          { text: "Demand a per-SKU itemized statement every payment cycle. Telemetry makes this trivial to produce — operators that send a single-line summary are hiding their reporting limits." },
          { text: "Review the statement within 30 days of receipt. The contract's dispute window is typically 30-60 days; after that the numbers are deemed accepted." },
          { text: "Shrinkage (vandalism, theft, jammed coin boxes) reduces the gross sales figure your commission is calculated on. Negotiate a shrinkage clause that caps your downside or excludes it entirely." },
        ],
      },
    },
  },
  {
    __c: "library.block-stat-strip",
    table: "components_library_block_stat_strip",
    cmpsTable: "components_library_block_stat_strip_cmps",
    data: { heading: "Commission benchmarks at a glance" },
    children: {
      stats: {
        component: "library.stat-item",
        table: "components_library_stat_items",
        items: [
          { number: "5-25%", label: "typical commission rate", sub: "of gross sales", accent: "blue" },
          { number: "$1,000", label: "monthly threshold", sub: "above which monthly pay is standard", accent: "orange" },
          { number: "30 days", label: "dispute window", sub: "post-statement issuance", accent: "orange" },
          { number: "<3%", label: "median dispute rate", sub: "for telemetry-enabled accounts", accent: "blue" },
        ],
      },
    },
  },
  {
    __c: "library.block-sample-statement",
    table: "components_library_block_sample_statement",
    cmpsTable: "components_library_block_sample_statement_cmps",
    data: {
      heading: "What a real monthly commission statement looks like",
      sub: "An actual format from a 3-machine office account. Every legitimate statement contains these eight fields — anything less and you can't verify the math.",
      account_name: "Acme Logistics — Suite 410, Phoenix AZ",
      period: "April 2026",
      issued_date: "May 5, 2026",
      payment_method: "ACH to vendor of record",
      calculation_basis: "Gross sales, net of refunds (telemetry-verified)",
      total_gross: "$2,184.50",
      total_refunds: "$18.75",
      total_net: "$2,165.75",
      total_commission: "$324.86",
      footnote: "Statement generated automatically from Cantaloupe Seed telemetry. Per-SKU detail (62 line items) attached separately. Payment scheduled May 15 via ACH; reference number on remittance advice. Disputes must be raised within 30 days per Section 7.2 of the service agreement.",
    },
    children: {
      lines: {
        component: "library.statement-line",
        table: "components_library_statement_lines",
        items: [
          { machine_label: "AV-7142 · Snack/Beverage combo", location: "Break room (4th floor)", units: 412, gross: "$948.25", refunds: "$8.50", net: "$939.75", rate: "15%", commission: "$140.96" },
          { machine_label: "AV-7143 · Cold beverage", location: "Lobby (1st floor)", units: 318, gross: "$702.00", refunds: "$6.25", net: "$695.75", rate: "15%", commission: "$104.36" },
          { machine_label: "AV-7144 · Healthy snack", location: "Gym annex", units: 247, gross: "$534.25", refunds: "$4.00", net: "$530.25", rate: "15%", commission: "$79.54" },
        ],
      },
    },
  },
  {
    __c: "library.block-comparison-table",
    table: "components_library_block_comparison_table",
    cmpsTable: null,
    data: {
      heading: "Gross sales vs net sales — the one contract clause that matters",
      sub: "Two operators can quote you the same headline rate and pay materially different amounts. The basis clause decides which one you actually take home.",
      headers: JSON.stringify(["Calculation basis", "What it means", "Effect on payout"]),
      rows: JSON.stringify([
        ["Gross sales", "Every dollar a machine collects, before any deductions", { icon: "check", text: "Highest payout" }],
        ["Gross, net of refunds", "Excludes refunds the operator issued for jams / wrong vends", "Reduces payout 1-3%"],
        ["Net of tax", "Subtracts state sales tax before commission is calculated", "Reduces payout 6-9%"],
        ["Net of cost of goods", "Operator takes COGS off the top first — vanishingly rare, walk away", { icon: "x", text: "Walk away" }],
        ["Net profit", "Commission paid on operator's margin (not revenue)", { icon: "x", text: "Never accept" }],
      ]),
      winner_column: 1,
    },
  },
  {
    __c: "library.block-timeline",
    table: "components_library_block_timeline",
    cmpsTable: "components_library_block_timeline_cmps",
    data: {
      heading: "The commission cycle, month by month",
      sub: "What a host should see happen between a sale ringing through and money landing in the account.",
      how_to_name: "How vending machine commissions are calculated and paid",
      total_time: "P45D",
    },
    children: {
      steps: {
        component: "library.timeline-step",
        table: "components_library_timeline_steps",
        items: [
          { label: "DAY 1-30", title: "Sales ring through telemetry", description: "Every vend (cash + card) is logged by the machine's cellular modem in real time. The operator's platform (Cantaloupe Seed, Nayax MoMa, 365 ADM) aggregates by machine, SKU, and date. No manual entry. No paper tape." },
          { label: "DAY 31", title: "Period closes; refunds reconciled", description: "On the first business day of the new month, the operator's accounting pulls the prior month's data. Refunds processed during the period are netted from gross per the contract's basis clause. Cash collections from coin/bill boxes are reconciled against telemetry." },
          { label: "DAY 31-35", title: "Statement generated + reviewed", description: "The platform auto-generates a per-machine, per-SKU statement. The operator's account manager reviews for telemetry gaps (modem outages, bill validator errors) and flags any anomalies before sending." },
          { label: "DAY 35-40", title: "Statement issued to host", description: "Statement arrives by email (PDF + CSV) or via host portal. Should include: period, per-machine breakdown, gross/refunds/net, rate, commission $, payment method, payment date, and dispute window." },
          { label: "DAY 40-45", title: "Payment lands", description: "ACH is standard for $200+ payments; check for smaller amounts. Payment includes a reference matching the statement. Net 15 from statement date is typical; net 30 is common for larger accounts on quarterly cycles." },
        ],
      },
    },
  },
  {
    __c: "library.block-decision-tree",
    table: "components_library_block_decision_tree",
    cmpsTable: "components_library_block_decision_tree_cmps",
    data: {
      heading: "Should you take monthly or quarterly payment?",
      question: "Does this account generate more than ~$1,000 in monthly gross sales?",
    },
    children: {
      branches: {
        component: "library.decision-branch",
        table: "components_library_decision_branches",
        items: [
          { yn: "YES", title: "Take monthly.", description: "The commission check ($50+) justifies the bookkeeping overhead and gives you a faster signal if sales dip. Telemetry-enabled accounts can move to weekly with no operator pushback above ~$5,000/mo.", final_tone: "go", final_label: "MONTHLY · NET 15" },
          { yn: "NO", title: "Take quarterly.", description: "Sub-$1,000/mo accounts accrue $30-150 commission per month — quarterly bundles three months of small payments into one bookkeeping event. The dispute window is the same; you don't lose visibility.", final_tone: "stop", final_label: "QUARTERLY · NET 30" },
        ],
      },
    },
  },
  {
    __c: "library.block-spec-list",
    table: "components_library_block_spec_list",
    cmpsTable: "components_library_block_spec_list_cmps",
    data: { heading: "Eight fields every commission statement must contain" },
    children: {
      items: {
        component: "library.spec-item",
        table: "components_library_spec_items",
        items: [
          { label: "Period covered", value: "Explicit start/end dates. 'April 2026' is fine; 'Q2' alone is not — you can't reconcile a vague window." },
          { label: "Per-machine breakdown", value: "Each machine listed separately by serial/asset tag. A single combined number hides which machine is underperforming." },
          { label: "Units sold", value: "Total vends per machine. Should reconcile against telemetry — ask for the per-SKU CSV attached as backup." },
          { label: "Gross sales", value: "Total revenue before any deductions, in dollars. Match this against the platform export if you have portal access." },
          { label: "Refunds and adjustments", value: "Itemized refunds, comp items, and any other deductions taken before commission is calculated. Should rarely exceed 2% of gross." },
          { label: "Net sales (commission basis)", value: "The actual dollar figure your rate multiplies against. Must equal gross minus the deductions above — verify the arithmetic." },
          { label: "Commission rate", value: "The agreed percentage. Should match the contract — if it's lower than your contracted rate, you have an immediate dispute." },
          { label: "Payment method + reference", value: "ACH/check, payment date, and a reference number tying the payment to this specific statement." },
        ],
      },
    },
  },
  {
    __c: "library.block-tip-cards",
    table: "components_library_block_tip_cards",
    cmpsTable: "components_library_block_tip_cards_cmps",
    data: {
      heading: "Four red flags when reviewing your statement",
      sub: "Most disputes don't come from operator fraud — they come from sloppy reporting and contract misreadings. Catch these early.",
      start_number: 1,
    },
    children: {
      items: {
        component: "library.tip-item",
        table: "components_library_tip_items",
        items: [
          { title: "No per-SKU detail attached", body: "If the operator can't produce SKU-level sales, they can't justify the gross figure. This is a 2-minute export from any modern telemetry platform — refusal means either reporting deficit or worse." },
          { title: "Gross figure drops >20% month-over-month with no service call logged", body: "Real sales dips are gradual or have a clear cause (holiday, building event). A sudden cliff usually means a modem outage, bill validator failure, or a machine offline. Demand the service log." },
          { title: "Commission rate on the statement doesn't match the contract", body: "Often a clerical error on the operator side, occasionally a renewal that re-rated you without notice. Cite the contract section and request a corrected statement before the dispute window closes." },
          { title: "Refunds and 'adjustments' creep above 3% of gross", body: "Healthy machines refund 0.5-1.5% of gross. Sustained >3% means either equipment problems (the operator should be fixing on their dime) or accounting being padded against you. Ask for itemization." },
        ],
      },
    },
  },
  {
    __c: "library.block-inline-cta",
    table: "components_library_block_inline_cta",
    cmpsTable: null,
    data: {
      text: "Want the 8-field commission statement audit checklist as a Google Sheet?",
      button_label: "Get the audit sheet",
      button_href: "/#get-machine",
    },
  },
  {
    __c: "library.block-case-study",
    table: "components_library_block_case_study",
    cmpsTable: "components_library_block_case_study_cmps",
    data: {
      tag: "Real numbers · Atlanta logistics HQ",
      title: "$26,200 in annual commission from a 4-machine deployment",
      context: "A 240-employee logistics HQ in metro Atlanta with three combo machines in break rooms and one cold-beverage tower in the driver lounge. The facilities team negotiated 15% of gross sales with a net-of-refunds basis and monthly ACH payment. Here's how a representative year looked on the host's commission ledger.",
    },
    children: {
      meta: {
        component: "library.case-meta",
        table: "components_library_case_meta",
        items: [
          { label: "Headcount", value: "240 employees, 2 shifts" },
          { label: "Machines", value: "3 combo + 1 cold beverage" },
          { label: "Rate", value: "15% of gross (net of refunds)" },
          { label: "Frequency", value: "Monthly ACH, net 15" },
        ],
      },
      results: {
        component: "library.case-result",
        table: "components_library_case_results",
        items: [
          { number: "$174,800", label: "annual gross sales (4 machines)" },
          { number: "$26,220", label: "annual commission paid to host" },
          { number: "$2,185", label: "avg monthly commission check" },
        ],
      },
    },
  },
  {
    __c: "library.block-testimonial-quote",
    table: "components_library_block_testimonial_quote",
    cmpsTable: null,
    data: {
      quote: "The thing that changed everything was demanding the per-SKU export with every statement. The headline number didn't move much, but we suddenly saw which SKUs were underperforming and could ask the operator to rotate them. Commission stayed flat; satisfaction scores at the break room went up nine points.",
      name: "Renee K.",
      role: "Facilities Director · Logistics HQ (Atlanta) · 4 machines, 240 employees",
    },
  },
  {
    __c: "library.block-author-card",
    table: "components_library_block_author_card",
    cmpsTable: "components_library_block_author_card_cmps",
    data: {
      name: "Bobby Mac",
      role: "Vending Service Advisor · 12 years experience",
      bio: "Bobby Mac has spent twelve years advising hosts and operators on commission structures, contract language, and statement reconciliation. This guide reflects his standing audit checklist used with facilities teams across Phoenix, Atlanta, Charlotte, and Detroit, and cross-checks commission norms against the 2025 NAMA operator survey and IRS guidance on 1099-MISC reporting.",
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
          { question: "What's a typical commission rate?", answer: "Most accounts land between 5% and 25% of gross sales. The biggest driver is foot traffic: a small office of 25 people might get 5-10%, a 250-person headquarters with multiple break rooms commonly negotiates 15-20%, and high-traffic accounts (gyms, busy gas stations, hospitals) reach 20-25%. Machine count and product mix have a smaller effect than traffic.", audience: "Hosts" },
          { question: "How are commissions calculated?", answer: "Commission = gross sales × commission rate, with the basis (gross vs net of refunds vs net of tax) defined in the contract. The operator's telemetry platform exports this automatically per period. Always confirm the basis in your contract — switching from gross to net-of-tax can cost you 6-9% of expected commission.", audience: "Hosts" },
          { question: "When do I get paid?", answer: "Monthly is standard for accounts over ~$1,000/month gross. Smaller accounts default to quarterly to avoid the accounting overhead of small monthly checks. Payment method is typically ACH (free, automatic) for amounts over $200; check below that. Net 15 from statement date is standard; net 30 is common on quarterly cycles.", audience: "Hosts" },
          { question: "What if I think the numbers are wrong?", answer: "Raise it within the dispute window in your contract (usually 30 days from statement date). Request the per-SKU telemetry export and the service log for the period. Most disputes resolve within one cycle — operators have no incentive to misreport because telemetry creates a clear audit trail. If the operator refuses to provide backing data, that's a contract breach.", audience: "Hosts" },
          { question: "Are commissions taxable income?", answer: "Yes. Operators paying $600+ in a calendar year must issue a 1099-MISC (or 1099-NEC for some structures) to the host's tax ID. The host reports it as ordinary income. If the host is a non-profit or a government agency, different rules apply — confirm with your tax department before signing.", audience: "Hosts" },
          { question: "Do I have to pay commission on every type of sale?", answer: "Depends on the contract. Standard contracts pay commission on all vending sales. Most exclude: comped items (product given away for service recovery), employee-purchase programs with negotiated discount pricing, and sales tax (when basis is net-of-tax). Confirm what's in and out before signing.", audience: "Operators" },
          { question: "What's the best frequency to pay commissions?", answer: "Monthly for accounts over $1,000/month gross, quarterly below that. Monthly keeps the host engaged and surfaces issues faster; quarterly cuts accounting overhead by 66%. If you have telemetry-driven automation (Cantaloupe, Nayax, 365), monthly costs roughly the same as quarterly to produce — switch your smaller accounts to monthly as a low-cost relationship upgrade.", audience: "Operators" },
          { question: "How do I handle shrinkage in the commission calculation?", answer: "Document it. Telemetry-tracked refunds and known shrinkage events (vandalism with service log, broken bill validator) should be deducted before commission. Unexplained variance (telemetry says $X but cash count says less) is harder — either eat it or split it with the host depending on the relationship. Make the rule explicit in the contract, not in the statement.", audience: "Operators" },
        ],
      },
    },
  },
  {
    __c: "library.block-source-citations",
    table: "components_library_block_source_citations",
    cmpsTable: "components_library_block_source_citations_cmps",
    data: { heading: "Sources and authoritative references" },
    children: {
      sources: {
        component: "library.source",
        table: "components_library_sources",
        items: [
          { label: "National Automatic Merchandising Association (NAMA) — operator industry survey", url: "https://www.namanow.org/", note: "Commission rate benchmarks (5-25% range) sourced from 2025 NAMA operator economics report" },
          { label: "IRS — 1099-MISC reporting requirements", url: "https://www.irs.gov/forms-pubs/about-form-1099-misc", note: "Tax treatment of commission payments to non-employees ($600 threshold)" },
          { label: "Cantaloupe Seed telemetry — sample reporting outputs", url: "https://www.cantaloupe.com/products/seed/", note: "Statement-line itemization format references operator platform standards" },
          { label: "Nayax MoMa platform — commission module documentation", url: "https://www.nayax.com/", note: "Calculation basis options (gross / net of refunds / net of tax) verified against live platform docs" },
          { label: "365 Retail Markets — ADM commission reporting", url: "https://365retailmarkets.com/", note: "Quarterly business review cadence cross-referenced against ADM operator playbook" },
        ],
      },
    },
  },
  {
    __c: "library.block-related-guides",
    table: "components_library_block_related_guides",
    cmpsTable: "components_library_block_related_guides_cmps",
    data: { heading: "Related operator and host guides" },
    children: {
      items: {
        component: "library.related-item",
        table: "components_library_related_items",
        items: [
          { eyebrow: "Sister guide", title: "What to look for in a vending company", description: "The 12-point evaluation rubric facilities teams use to compare bids — contract terms, service SLAs, telemetry coverage, and commission transparency.", href: "/operating-vending-machines/what-to-look-for-in-a-vending-company" },
          { eyebrow: "Operator economics", title: "Vending franchise royalty fees", description: "How franchise royalties stack on top of commissions — and why most independent operators can offer 2-3 points more commission than franchised competitors.", href: "/vending-business-startup/vending-franchise-royalty-fees" },
          { eyebrow: "Hub", title: "All vending operating guides", description: "Service, commissions, contracts, refunds, security. Every guide we have for active host accounts.", href: "/operating-vending-machines" },
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

async function deleteExistingBlocks(postId) {
  // Find all existing top-level contentBlocks rows
  const existing = await c.query(
    `SELECT cmp_id, component_type FROM blog_posts_cmps WHERE entity_id=$1 AND field=$2`,
    [postId, FIELD]
  );
  for (const row of existing.rows) {
    const compTable = "components_" + row.component_type.replace(/\./g, "_").replace(/-/g, "_");
    const cmpsTable = compTable + "_cmps";
    // Try to delete from sub-cmps (some blocks have no sub-cmps table; ignore failures)
    try {
      const subRows = await c.query(
        `SELECT cmp_id, component_type FROM "${cmpsTable}" WHERE entity_id=$1`,
        [row.cmp_id]
      );
      for (const sub of subRows.rows) {
        const subTable = "components_" + sub.component_type.replace(/\./g, "_").replace(/-/g, "_");
        try {
          await c.query(`DELETE FROM "${subTable}" WHERE id=$1`, [sub.cmp_id]);
        } catch (e) {
          /* ignore */
        }
      }
      await c.query(`DELETE FROM "${cmpsTable}" WHERE entity_id=$1`, [row.cmp_id]);
    } catch (e) {
      /* no sub-cmps table for this block */
    }
    try {
      await c.query(`DELETE FROM "${compTable}" WHERE id=$1`, [row.cmp_id]);
    } catch (e) {
      /* ignore */
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
