// Shared seeding logic for the contentBlocks redesign batch.
// Usage in per-post seed files:
//   import { seedPost } from "./_seed-helper.mjs";
//   await seedPost("my-post-slug", [ ...blocks ]);
import pg from "pg";
const { Client } = pg;

const FIELD = "contentBlocks";

export async function seedPost(slug, blocks) {
  const c = new Client({ host: "127.0.0.1", port: 5432, user: "postgres", password: "postgres", database: "strapi" });
  await c.connect();
  try {
    const posts = await c.query(
      `SELECT id, locale, published_at FROM blog_posts WHERE slug=$1 ORDER BY id`,
      [slug]
    );
    if (posts.rows.length === 0) {
      console.error(`[seed] no post found for slug=${slug}`);
      process.exit(1);
    }
    console.log(`[seed] ${slug} — ${posts.rows.length} variants, ${blocks.length} blocks`);
    await c.query("BEGIN");
    for (const post of posts.rows) {
      await seedForPost(c, post.id, blocks);
    }
    await c.query("COMMIT");
    console.log(`[seed] ${slug} — committed.`);
  } catch (err) {
    await c.query("ROLLBACK").catch(() => {});
    console.error(`[seed] ERROR on ${slug}:`, err.message);
    console.error(err.stack);
    process.exit(1);
  } finally {
    await c.end();
  }
}

async function insertRow(c, table, data) {
  const cols = Object.keys(data);
  const vals = Object.values(data);
  const placeholders = cols.map((_, i) => `$${i + 1}`).join(", ");
  const sql = `INSERT INTO "${table}" (${cols.map((k) => `"${k}"`).join(", ")}) VALUES (${placeholders}) RETURNING id`;
  const r = await c.query(sql, vals);
  return r.rows[0].id;
}

async function insertCmpsRow(c, table, entityId, cmpId, componentType, field, order) {
  await c.query(
    `INSERT INTO "${table}" (entity_id, cmp_id, component_type, field, "order") VALUES ($1, $2, $3, $4, $5)`,
    [entityId, cmpId, componentType, field, order]
  );
}

// Run a query inside a SAVEPOINT so a Postgres error rolls back only this
// statement instead of aborting the enclosing transaction. Returns the result
// on success, or null on failure (e.g. table doesn't exist).
async function trySql(c, sql, params) {
  await c.query("SAVEPOINT sp");
  try {
    const r = await c.query(sql, params);
    await c.query("RELEASE SAVEPOINT sp");
    return r;
  } catch (e) {
    await c.query("ROLLBACK TO SAVEPOINT sp");
    return null;
  }
}

async function deleteExistingBlocks(c, postId) {
  const existing = await c.query(
    `SELECT cmp_id, component_type FROM blog_posts_cmps WHERE entity_id=$1 AND field=$2`,
    [postId, FIELD]
  );
  for (const row of existing.rows) {
    const compTable = "components_" + row.component_type.replace(/\./g, "_").replace(/-/g, "_");
    const cmpsTable = compTable + "_cmps";
    const subRows = await trySql(
      c,
      `SELECT cmp_id, component_type FROM "${cmpsTable}" WHERE entity_id=$1`,
      [row.cmp_id]
    );
    if (subRows) {
      for (const sub of subRows.rows) {
        const subTable = "components_" + sub.component_type.replace(/\./g, "_").replace(/-/g, "_");
        await trySql(c, `DELETE FROM "${subTable}" WHERE id=$1`, [sub.cmp_id]);
      }
      await trySql(c, `DELETE FROM "${cmpsTable}" WHERE entity_id=$1`, [row.cmp_id]);
    }
    await trySql(c, `DELETE FROM "${compTable}" WHERE id=$1`, [row.cmp_id]);
  }
  await c.query(`DELETE FROM blog_posts_cmps WHERE entity_id=$1 AND field=$2`, [postId, FIELD]);
}

async function seedForPost(c, postId, blocks) {
  await deleteExistingBlocks(c, postId);
  let order = 1;
  for (const block of blocks) {
    const cmpId = await insertRow(c, block.table, block.data);
    await insertCmpsRow(c, "blog_posts_cmps", postId, cmpId, block.__c, FIELD, order);
    if (block.children) {
      for (const [field, def] of Object.entries(block.children)) {
        let subOrder = 1;
        for (const subData of def.items) {
          const subId = await insertRow(c, def.table, subData);
          await insertCmpsRow(c, block.cmpsTable, cmpId, subId, def.component, field, subOrder);
          subOrder += 1;
        }
      }
    }
    order += 1;
  }
}

// Convenience exports — pre-bound block constructors for the most common library blocks.
// Each returns a {__c, table, cmpsTable, data, children} shape compatible with seedPost().

export const tldr = ({ heading, paragraph, bullets = [] }) => ({
  __c: "library.block-tldr-quick-answer",
  table: "components_library_block_tldr_quick_answer",
  cmpsTable: "components_library_block_tldr_quick_answer_cmps",
  data: { heading, paragraph },
  children: bullets.length ? {
    bullets: {
      component: "library.bullet-item",
      table: "components_library_bullet_items",
      items: bullets,
    },
  } : undefined,
});

export const keyTakeaways = ({ heading = "Key takeaways", takeaways }) => ({
  __c: "library.block-key-takeaways",
  table: "components_library_block_key_takeaways",
  cmpsTable: "components_library_block_key_takeaways_cmps",
  data: { heading },
  children: { takeaways: { component: "library.takeaway", table: "components_library_takeaways", items: takeaways.map(t => typeof t === "string" ? { text: t } : t) } },
});

export const statStrip = ({ heading, stats }) => ({
  __c: "library.block-stat-strip",
  table: "components_library_block_stat_strip",
  cmpsTable: "components_library_block_stat_strip_cmps",
  data: { heading },
  children: { stats: { component: "library.stat-item", table: "components_library_stat_items", items: stats } },
});

export const comparisonTable = ({ heading, sub, headers, rows, winnerColumn = null }) => ({
  __c: "library.block-comparison-table",
  table: "components_library_block_comparison_table",
  cmpsTable: null,
  data: { heading: trunc(heading, 255), sub: trunc(sub, 255), headers: JSON.stringify(headers), rows: JSON.stringify(rows), winner_column: winnerColumn },
});

export const costBreakdown = ({ heading, sub, items, totalLabel, totalAmount }) => ({
  __c: "library.block-cost-breakdown",
  table: "components_library_block_cost_breakdown",
  cmpsTable: "components_library_block_cost_breakdown_cmps",
  data: { heading: trunc(heading, 255), sub: trunc(sub, 255), total_label: totalLabel, total_amount: totalAmount },
  children: { items: { component: "library.cost-line", table: "components_library_cost_lines", items: items.map(it => ({
    label: trunc(it.label, 255),
    amount: trunc(it.amount, 255),
    range: trunc(it.range ?? it.note ?? null, 255),
  })) } },
});

export const timeline = ({ heading, sub, howToName, totalTime, steps }) => ({
  __c: "library.block-timeline",
  table: "components_library_block_timeline",
  cmpsTable: "components_library_block_timeline_cmps",
  data: { heading: trunc(heading, 255), sub: trunc(sub, 255), how_to_name: howToName, total_time: totalTime },
  children: { steps: { component: "library.timeline-step", table: "components_library_timeline_steps", items: steps.map(s => ({
    label: s.label ?? s.duration ?? null,
    title: s.title,
    description: s.description,
  })) } },
});

export const specList = ({ heading, items }) => ({
  __c: "library.block-spec-list",
  table: "components_library_block_spec_list",
  cmpsTable: "components_library_block_spec_list_cmps",
  data: { heading },
  children: { items: { component: "library.spec-item", table: "components_library_spec_items", items } },
});

export const tipCards = ({ heading, sub, items, startNumber = 1 }) => ({
  __c: "library.block-tip-cards",
  table: "components_library_block_tip_cards",
  cmpsTable: "components_library_block_tip_cards_cmps",
  data: { heading: trunc(heading, 255), sub: trunc(sub, 255), start_number: startNumber },
  children: { items: { component: "library.tip-item", table: "components_library_tip_items", items: items.map(it => ({
    title: it.title,
    body: it.body ?? it.value ?? it.description ?? "",
  })) } },
});

const trunc = (s, n) => (typeof s === "string" && s.length > n ? s.slice(0, n - 1) + "…" : s);

export const decisionTree = ({ heading, question, yesBranch, noBranch }) => ({
  __c: "library.block-decision-tree",
  table: "components_library_block_decision_tree",
  cmpsTable: "components_library_block_decision_tree_cmps",
  data: { heading: trunc(heading, 255), question: trunc(question, 255) },
  children: { branches: { component: "library.decision-branch", table: "components_library_decision_branches", items: [
    { yn: "YES", title: yesBranch.title, description: yesBranch.description, final_tone: yesBranch.finalTone || "go", final_label: yesBranch.finalLabel || "" },
    { yn: "NO", title: noBranch.title, description: noBranch.description, final_tone: noBranch.finalTone || "stop", final_label: noBranch.finalLabel || "" },
  ] } },
});

export const caseStudy = ({ tag, title, context, meta, results }) => ({
  __c: "library.block-case-study",
  table: "components_library_block_case_study",
  cmpsTable: "components_library_block_case_study_cmps",
  data: { tag: trunc(tag, 255), title: trunc(title, 255), context },
  children: {
    meta: { component: "library.case-meta", table: "components_library_case_meta", items: meta.map(m => ({
      label: trunc(m.label, 255),
      value: trunc(m.value, 255),
    })) },
    results: { component: "library.case-result", table: "components_library_case_results", items: results.map(r => ({
      number: trunc(r.number ?? r.metric ?? null, 255),
      label: trunc(r.label ?? r.description ?? null, 255),
    })) },
  },
});

export const testimonial = ({ quote, name, role }) => ({
  __c: "library.block-testimonial-quote",
  table: "components_library_block_testimonial_quote",
  cmpsTable: null,
  data: { quote, name, role },
});

export const inlineCta = ({ text, buttonLabel, buttonHref }) => ({
  __c: "library.block-inline-cta",
  table: "components_library_block_inline_cta",
  cmpsTable: null,
  data: { text, button_label: buttonLabel, button_href: buttonHref },
});

export const authorCard = ({ name = "Bobby Mac", role = "Vending Service Advisor · 12 years experience", bio, links = [
  { label: "About the desk", href: "/about" },
  { label: "Editorial standards", href: "/about#standards" },
  { label: "Contact Bobby", href: "/#get-machine" },
] }) => ({
  __c: "library.block-author-card",
  table: "components_library_block_author_card",
  cmpsTable: "components_library_block_author_card_cmps",
  data: { name, role, bio },
  children: { links: { component: "library.author-link", table: "components_library_author_links", items: links } },
});

export const tabbedFaq = ({ heading = "Frequently asked questions", faqs }) => ({
  __c: "library.block-tabbed-faq",
  table: "components_library_block_tabbed_faq",
  cmpsTable: "components_library_block_tabbed_faq_cmps",
  data: { heading },
  children: { faqs: { component: "library.faq-item", table: "components_library_faq_items", items: faqs } },
});

export const sourceCitations = ({ heading = "Sources", sources }) => ({
  __c: "library.block-source-citations",
  table: "components_library_block_source_citations",
  cmpsTable: "components_library_block_source_citations_cmps",
  data: { heading },
  children: { sources: { component: "library.source", table: "components_library_sources", items: sources } },
});

export const relatedGuides = ({ heading = "Related guides", items }) => ({
  __c: "library.block-related-guides",
  table: "components_library_block_related_guides",
  cmpsTable: "components_library_block_related_guides_cmps",
  data: { heading },
  children: { items: { component: "library.related-item", table: "components_library_related_items", items } },
});

export const dimensionDiagram = ({ heading, sub, machineName, width, depth, height, footprint, weightEmpty, weightLoaded, doorwayClearance, note }) => ({
  __c: "library.block-dimension-diagram",
  table: "components_library_block_dimension_diagram",
  cmpsTable: null,
  data: { heading: trunc(heading, 255), sub: trunc(sub, 255), machine_name: machineName, width, depth, height, footprint, weight_empty: weightEmpty, weight_loaded: weightLoaded, doorway_clearance: doorwayClearance, note },
});

export const sampleStatement = ({ heading, sub, accountName, period, issuedDate, paymentMethod, calculationBasis, lines, totalGross, totalRefunds, totalNet, totalCommission, footnote }) => ({
  __c: "library.block-sample-statement",
  table: "components_library_block_sample_statement",
  cmpsTable: "components_library_block_sample_statement_cmps",
  data: { heading: trunc(heading, 255), sub: trunc(sub, 255), account_name: accountName, period, issued_date: issuedDate, payment_method: paymentMethod, calculation_basis: calculationBasis, total_gross: totalGross, total_refunds: totalRefunds, total_net: totalNet, total_commission: totalCommission, footnote },
  children: { lines: { component: "library.statement-line", table: "components_library_statement_lines", items: lines.map(l => {
    const u = l.units;
    let unitsInt = null;
    if (typeof u === "number") unitsInt = Math.trunc(u);
    else if (typeof u === "string") { const m = u.match(/-?\d+/); if (m) unitsInt = parseInt(m[0], 10); }
    return {
      machine_label: l.machineLabel ?? l.machine_label ?? l.description ?? l.label ?? "—",
      location: l.location ?? null,
      units: unitsInt,
      gross: l.gross ?? l.quantity ?? l.amount ?? "—",
      refunds: l.refunds ?? null,
      net: l.net ?? l.unit_price ?? l.line_total ?? "—",
      rate: l.rate ?? null,
      commission: l.commission ?? l.line_total ?? l.amount ?? "—",
    };
  }) } },
});
