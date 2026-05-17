// Find every blog post that references a downloadable resource (checklist, pack,
// template, guide, framework, worksheet, calculator, playbook, PDF, kit).
// Sources of signal:
//   1) inlineCta blocks — `text` and `button_label` columns
//   2) blog_posts.body free text
//   3) tldr paragraph + tipCards body (sometimes pitch a resource)
//
// Output: scripts/download-resources.txt + .tsv
import pg from "pg";
import fs from "fs";
const { Client } = pg;

const PATTERN = /\b(download|get the|grab the)\b[^.?!]{0,80}\b(checklist|pack|template|framework|worksheet|calculator|playbook|guide|kit|toolkit|cheat ?sheet|whitepaper|white paper|pdf|rfp template|spec sheet|matrix|workbook|brief|primer|scorecard|rubric|map)/i;
// Looser pattern catches "Get the X" without explicit doc-noun if the noun comes
// later — also pick up if CTA button-label clearly references a resource.
const CTA_NOUN_PATTERN = /\b(checklist|pack|template|framework|worksheet|calculator|playbook|guide|kit|toolkit|cheat ?sheet|whitepaper|pdf|rfp template|spec sheet|matrix|workbook|scorecard|rubric|primer)\b/i;

function findResourceMentions(text) {
  if (!text) return null;
  const matches = [];
  const lower = String(text).toLowerCase();
  // First the strict combined pattern
  const m = String(text).match(PATTERN);
  if (m) matches.push(m[0]);
  return matches.length ? matches[0] : null;
}

(async () => {
  const c = new Client({ host: "127.0.0.1", port: 5432, user: "postgres", password: "postgres", database: "strapi" });
  await c.connect();

  // Pull all distinct slugs
  const posts = await c.query(`SELECT DISTINCT ON (slug) id, slug, title FROM blog_posts WHERE slug IS NOT NULL ORDER BY slug, id`);

  const hits = [];
  for (const p of posts.rows) {
    const evidence = [];

    // 1) inlineCta blocks
    const ctaBlocks = await c.query(
      `SELECT cmp_id FROM blog_posts_cmps WHERE entity_id=$1 AND component_type='library.block-inline-cta' AND field='contentBlocks'`,
      [p.id]
    );
    for (const b of ctaBlocks.rows) {
      const r = await c.query(`SELECT text, button_label FROM components_library_block_inline_cta WHERE id=$1`, [b.cmp_id]);
      if (r.rows[0]) {
        const text = r.rows[0].text || "";
        const btn = r.rows[0].button_label || "";
        const m = findResourceMentions(text + " — " + btn);
        if (m) evidence.push({ where: "inlineCta", excerpt: `${btn} — ${text}` });
        else if (CTA_NOUN_PATTERN.test(btn) && /\b(get|download|grab)\b/i.test(btn)) {
          evidence.push({ where: "inlineCta (button)", excerpt: btn });
        }
      }
    }

    // 2) blog_posts.body (legacy body text)
    if (evidence.length === 0) {
      const body = await c.query(`SELECT body, excerpt FROM blog_posts WHERE id=$1`, [p.id]);
      const text = (body.rows[0]?.body || "") + " " + (body.rows[0]?.excerpt || "");
      const m = findResourceMentions(text);
      if (m) evidence.push({ where: "body", excerpt: m });
    }

    // 3) tldr paragraph (last resort — sometimes references a pack)
    if (evidence.length === 0) {
      const tldr = await c.query(
        `SELECT cmp_id FROM blog_posts_cmps WHERE entity_id=$1 AND component_type='library.block-tldr-quick-answer' AND field='contentBlocks'`,
        [p.id]
      );
      for (const b of tldr.rows) {
        const r = await c.query(`SELECT paragraph FROM components_library_block_tldr_quick_answer WHERE id=$1`, [b.cmp_id]);
        const m = findResourceMentions(r.rows[0]?.paragraph || "");
        if (m) {
          evidence.push({ where: "tldr", excerpt: m });
          break;
        }
      }
    }

    if (evidence.length) {
      hits.push({ slug: p.slug, title: p.title, evidence });
    }
  }
  await c.end();

  hits.sort((a, b) => a.slug.localeCompare(b.slug));

  // TSV
  const tsv = ["slug\twhere\texcerpt"];
  for (const h of hits) for (const e of h.evidence) tsv.push(`${h.slug}\t${e.where}\t${e.excerpt.replace(/\s+/g, " ").slice(0, 200)}`);
  fs.writeFileSync("scripts/download-resources.tsv", tsv.join("\n") + "\n");

  // Human-readable txt
  const out = [`Blog posts referencing downloadable resources (${hits.length} slugs)`, `Generated ${new Date().toISOString()}`, ""];
  for (const h of hits) {
    out.push(`- ${h.slug}`);
    for (const e of h.evidence) {
      out.push(`    [${e.where}] ${e.excerpt.replace(/\s+/g, " ").slice(0, 180)}`);
    }
  }
  fs.writeFileSync("scripts/download-resources.txt", out.join("\n") + "\n");

  console.log(`hits: ${hits.length}`);
  console.log(`wrote scripts/download-resources.txt`);
  console.log(`wrote scripts/download-resources.tsv`);
})();
