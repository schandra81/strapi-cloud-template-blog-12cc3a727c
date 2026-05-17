// Extract the 286 slugs that promise a CONCRETE downloadable asset (pack, playbook,
// checklist, template, toolkit, worksheet, calculator, PDF, matrix, RFP template, guide)
// — excluding the 678 generic "framework" placeholder CTAs.
// Group by asset type, then by category, with full CTA text so each row can be mapped
// to an actual asset production task.
import fs from "fs";

const ORDER = [
  "pack", "playbook", "checklist", "template", "rfp template", "guide",
  "toolkit", "worksheet", "calculator", "workbook", "scorecard",
  "cheat sheet", "whitepaper", "white paper", "pdf", "matrix", "rubric", "primer", "brief", "spec sheet",
];
function pickAssetType(excerpt) {
  const e = excerpt.toLowerCase();
  let chosen = null, bestPos = Infinity;
  for (const t of ORDER) {
    const p = e.indexOf(t);
    if (p >= 0 && p < bestPos) { bestPos = p; chosen = t; }
  }
  return chosen; // null = "framework" only
}

const todo = JSON.parse(fs.readFileSync("scripts/_todo.json", "utf8"));
const catMap = new Map();
for (const e of todo) catMap.set(e.slug, e.category || "");

const lines = fs.readFileSync("scripts/download-resources.tsv", "utf8").split("\n").slice(1).filter(Boolean);
const buckets = {};
for (const ln of lines) {
  const [slug, where, excerpt] = ln.split("\t");
  if (!excerpt) continue;
  const type = pickAssetType(excerpt);
  if (!type) continue; // framework-only — skip
  if (!buckets[type]) buckets[type] = [];
  buckets[type].push({ slug, category: catMap.get(slug) || "", excerpt });
}

const out = [];
out.push(`Concrete downloadable assets referenced by blog CTAs`);
out.push(`Generated ${new Date().toISOString()}`);
out.push(`Total: ${Object.values(buckets).reduce((a, b) => a + b.length, 0)} slugs across ${Object.keys(buckets).length} asset types`);
out.push(``);
out.push(`(Slugs with only "framework" CTAs — 678 — are excluded; those are generic placeholders.)`);
out.push(``);

// Display in priority order matching the breakdown
const display = ["pack", "playbook", "checklist", "template", "rfp template", "guide", "toolkit", "worksheet", "pdf", "matrix"];

let csvLines = [`asset_type\tslug\tcategory\tcta_excerpt`];
for (const type of display) {
  if (!buckets[type]) continue;
  buckets[type].sort((a, b) => (a.category || "").localeCompare(b.category || "") || a.slug.localeCompare(b.slug));
  out.push(``);
  out.push(`============================================================`);
  out.push(`  ${type.toUpperCase()}  (${buckets[type].length})`);
  out.push(`============================================================`);
  let lastCat = null;
  for (const r of buckets[type]) {
    if (r.category !== lastCat) {
      out.push(``);
      out.push(`  [${r.category || "(uncategorized)"}]`);
      lastCat = r.category;
    }
    out.push(`    ${r.slug}`);
    out.push(`        ${r.excerpt.replace(/\s+/g, " ").slice(0, 180)}`);
    csvLines.push(`${type}\t${r.slug}\t${r.category}\t${r.excerpt.replace(/\s+/g, " ").slice(0, 220)}`);
  }
}

fs.writeFileSync("scripts/concrete-assets.txt", out.join("\n") + "\n");
fs.writeFileSync("scripts/concrete-assets.tsv", csvLines.join("\n") + "\n");

console.log("Asset-type counts (excluding framework-only):");
for (const t of display) if (buckets[t]) console.log(`  ${String(buckets[t].length).padStart(4)}  ${t}`);
console.log(`  ${String(Object.values(buckets).reduce((a, b) => a + b.length, 0)).padStart(4)}  TOTAL`);
console.log(``);
console.log(`wrote scripts/concrete-assets.txt`);
console.log(`wrote scripts/concrete-assets.tsv`);
