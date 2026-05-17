// Asset generation helper — emits DOCX, HTML, or XLSX files into public/downloads/
// based on a structured content object. Each per-asset script imports this and
// supplies content; this helper handles file format details.
//
// Content shape:
//   {
//     slug: "abc-checklist",          // becomes filename
//     title: "Pretty title",
//     subtitle: "(optional one-line subtitle)",
//     intro: "Optional intro paragraph (1-3 sentences).",
//     sections: [
//       { heading: "Section title", paragraph: "Optional section intro",
//         items: [
//           { label: "Item label", value: "Item detail / specs" },
//           { check: "Checklist item text" },   // checklist
//           { number: 1, title: "Step title", description: "Step text" }, // playbook step
//           // for tables: row arrays directly in `rows` instead of items
//         ],
//         rows: [["col1","col2","col3"], ...],
//         headers: ["col1","col2","col3"],
//       },
//     ],
//     footer: "Optional CTA / contact / disclaimer line.",
//   }
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  Document, Packer, Paragraph, HeadingLevel, AlignmentType, TextRun,
  Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType,
} from "docx";

const __filename = fileURLToPath(import.meta.url);
const DOWNLOADS_DIR = path.resolve(path.dirname(__filename), "..", "public", "downloads");

function ensureDir() {
  fs.mkdirSync(DOWNLOADS_DIR, { recursive: true });
}

function fileFor(slug, ext) {
  return path.join(DOWNLOADS_DIR, slug + "." + ext);
}

const BRAND = {
  primary: "2563EB",
  accent: "16A34A",
  ink: "111827",
  muted: "6B7280",
  bg: "F9FAFB",
};

// ----------------------------------------------------------------------------
// DOCX builder
// ----------------------------------------------------------------------------
function makeDocxParagraphs(content) {
  const children = [];

  // Title
  children.push(new Paragraph({
    text: content.title,
    heading: HeadingLevel.TITLE,
    spacing: { after: 200 },
  }));

  if (content.subtitle) {
    children.push(new Paragraph({
      children: [new TextRun({ text: content.subtitle, italics: true, color: BRAND.muted })],
      spacing: { after: 200 },
    }));
  }

  if (content.intro) {
    children.push(new Paragraph({ text: content.intro, spacing: { after: 300 } }));
  }

  for (const sec of content.sections || []) {
    if (sec.heading) {
      children.push(new Paragraph({
        text: sec.heading,
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 300, after: 150 },
      }));
    }
    if (sec.paragraph) {
      children.push(new Paragraph({ text: sec.paragraph, spacing: { after: 200 } }));
    }
    // Table from rows
    if (Array.isArray(sec.rows) && sec.rows.length) {
      const headers = sec.headers || sec.rows[0];
      const bodyRows = sec.headers ? sec.rows : sec.rows.slice(1);
      const table = new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
          new TableRow({
            tableHeader: true,
            children: headers.map((h) => new TableCell({
              shading: { type: ShadingType.CLEAR, fill: BRAND.primary, color: "FFFFFF" },
              children: [new Paragraph({ children: [new TextRun({ text: String(h), bold: true, color: "FFFFFF" })] })],
            })),
          }),
          ...bodyRows.map((r) => new TableRow({
            children: r.map((cell) => new TableCell({
              children: [new Paragraph({ text: String(cell ?? "") })],
            })),
          })),
        ],
      });
      children.push(table);
      children.push(new Paragraph({ text: "", spacing: { after: 200 } }));
    }
    // Items
    for (const it of sec.items || []) {
      if (it.check !== undefined) {
        children.push(new Paragraph({
          children: [
            new TextRun({ text: "☐  ", bold: true, color: BRAND.primary }),
            new TextRun({ text: String(it.check) }),
          ],
          spacing: { after: 120 },
        }));
      } else if (it.number !== undefined || it.title) {
        children.push(new Paragraph({
          children: [
            new TextRun({ text: (it.number != null ? `${it.number}. ` : "") + (it.title || ""), bold: true }),
          ],
          spacing: { before: 120, after: 60 },
        }));
        if (it.description) {
          children.push(new Paragraph({ text: it.description, spacing: { after: 120 } }));
        }
      } else if (it.label !== undefined) {
        children.push(new Paragraph({
          children: [
            new TextRun({ text: String(it.label) + ": ", bold: true, color: BRAND.ink }),
            new TextRun({ text: String(it.value || "") }),
          ],
          spacing: { after: 120 },
        }));
      } else if (it.bullet !== undefined || it.text !== undefined) {
        children.push(new Paragraph({
          text: String(it.bullet || it.text),
          bullet: { level: 0 },
          spacing: { after: 80 },
        }));
      }
    }
  }

  if (content.footer) {
    children.push(new Paragraph({
      children: [new TextRun({ text: content.footer, italics: true, color: BRAND.muted })],
      spacing: { before: 400 },
    }));
  }

  return children;
}

export async function writeDocx(content) {
  ensureDir();
  const doc = new Document({
    creator: "LetUsVending",
    title: content.title || content.slug,
    description: content.subtitle || "",
    styles: {
      default: {
        document: { run: { font: "Calibri", size: 22 } },
      },
    },
    sections: [{ properties: { page: { margin: { top: 720, bottom: 720, left: 900, right: 900 } } }, children: makeDocxParagraphs(content) }],
  });
  const buf = await Packer.toBuffer(doc);
  const fp = fileFor(content.slug, "docx");
  fs.writeFileSync(fp, buf);
  return fp;
}

// ----------------------------------------------------------------------------
// HTML builder — print-friendly with @media print
// ----------------------------------------------------------------------------
function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function htmlForSection(sec) {
  let out = "";
  if (sec.heading) out += `<h2>${esc(sec.heading)}</h2>`;
  if (sec.paragraph) out += `<p>${esc(sec.paragraph)}</p>`;
  if (Array.isArray(sec.rows) && sec.rows.length) {
    const headers = sec.headers || sec.rows[0];
    const bodyRows = sec.headers ? sec.rows : sec.rows.slice(1);
    out += `<table><thead><tr>${headers.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>`;
    for (const r of bodyRows) {
      out += `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`;
    }
    out += `</tbody></table>`;
  }
  if (Array.isArray(sec.items) && sec.items.length) {
    if (sec.items[0].check !== undefined) {
      out += `<ul class="checklist">`;
      for (const it of sec.items) out += `<li><span class="box"></span>${esc(it.check)}</li>`;
      out += `</ul>`;
    } else if (sec.items[0].number !== undefined || sec.items[0].title) {
      out += `<ol class="steps">`;
      for (const it of sec.items) {
        out += `<li><strong>${esc(it.title || "")}</strong>${it.description ? `<p>${esc(it.description)}</p>` : ""}</li>`;
      }
      out += `</ol>`;
    } else if (sec.items[0].label !== undefined) {
      out += `<dl>`;
      for (const it of sec.items) out += `<dt>${esc(it.label)}</dt><dd>${esc(it.value || "")}</dd>`;
      out += `</dl>`;
    } else {
      out += `<ul>`;
      for (const it of sec.items) out += `<li>${esc(it.bullet || it.text || "")}</li>`;
      out += `</ul>`;
    }
  }
  return out;
}

export function writeHtml(content) {
  ensureDir();
  const sectionsHtml = (content.sections || []).map(htmlForSection).join("\n");
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${esc(content.title || content.slug)}</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; max-width: 820px; margin: 0 auto; padding: 2rem 1.25rem 4rem; color: #111827; line-height: 1.5; }
  header { border-bottom: 3px solid #2563EB; padding-bottom: 1rem; margin-bottom: 1.5rem; }
  h1 { font-size: 1.875rem; margin: 0 0 0.5rem; color: #111827; }
  .subtitle { color: #6B7280; margin: 0; font-style: italic; }
  h2 { color: #2563EB; margin-top: 2rem; border-bottom: 1px solid #E5E7EB; padding-bottom: 0.375rem; }
  p { margin: 0.5rem 0; }
  table { width: 100%; border-collapse: collapse; margin: 1rem 0; }
  th, td { padding: 0.5rem 0.75rem; text-align: left; vertical-align: top; border: 1px solid #D1D5DB; }
  th { background: #2563EB; color: white; font-weight: 600; }
  tr:nth-child(even) td { background: #F9FAFB; }
  ul.checklist { list-style: none; padding: 0; }
  ul.checklist li { padding: 0.375rem 0; display: flex; align-items: flex-start; gap: 0.625rem; }
  ul.checklist .box { display: inline-block; width: 1rem; height: 1rem; border: 2px solid #2563EB; border-radius: 3px; margin-top: 0.125rem; flex-shrink: 0; }
  ol.steps { list-style: none; counter-reset: step; padding: 0; }
  ol.steps li { counter-increment: step; padding: 0.75rem 0 0.75rem 2.5rem; position: relative; border-bottom: 1px solid #E5E7EB; }
  ol.steps li::before { content: counter(step); position: absolute; left: 0; top: 0.75rem; width: 1.75rem; height: 1.75rem; background: #2563EB; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.875rem; }
  ol.steps li strong { display: block; margin-bottom: 0.25rem; }
  ol.steps li p { margin: 0; color: #4B5563; }
  dl { margin: 1rem 0; }
  dt { font-weight: 600; color: #111827; margin-top: 0.875rem; }
  dd { margin: 0.25rem 0 0 0; color: #4B5563; }
  footer { margin-top: 3rem; padding-top: 1rem; border-top: 1px solid #E5E7EB; color: #6B7280; font-size: 0.875rem; font-style: italic; }
  .brand { color: #2563EB; font-weight: 600; }
  @media print { body { padding: 0; max-width: none; } header { page-break-after: avoid; } h2 { page-break-after: avoid; } ol.steps li, ul.checklist li, dt { page-break-inside: avoid; } table { page-break-inside: auto; } }
</style>
</head>
<body>
<header>
  <h1>${esc(content.title || content.slug)}</h1>
  ${content.subtitle ? `<p class="subtitle">${esc(content.subtitle)}</p>` : ""}
</header>
${content.intro ? `<p>${esc(content.intro)}</p>` : ""}
${sectionsHtml}
${content.footer ? `<footer>${esc(content.footer)}<br/><span class="brand">LetUsVending</span> — vending operator network &amp; advisory.</footer>` : `<footer><span class="brand">LetUsVending</span> — vending operator network &amp; advisory.</footer>`}
</body>
</html>`;
  const fp = fileFor(content.slug, "html");
  fs.writeFileSync(fp, html);
  return fp;
}

// ----------------------------------------------------------------------------
// Default dispatcher: pick format by asset type
// ----------------------------------------------------------------------------
const DOCX_TYPES = new Set(["checklist", "template", "rfp template", "rfp-template", "worksheet"]);
export async function writeAsset(content) {
  const type = String(content.assetType || "").toLowerCase();
  if (DOCX_TYPES.has(type)) return writeDocx(content);
  return writeHtml(content);
}
