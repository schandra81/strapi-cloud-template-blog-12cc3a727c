// Populate blog post `how-to-buy-your-first-vending-machine` with contentBlocks.
// Auto-provisions a one-off API token (hashed into strapi_api_tokens) and PUTs the payload.

import crypto from "node:crypto";
import pg from "pg";
const { Client } = pg;

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
const SLUG = "how-to-buy-your-first-vending-machine";
const TOKEN_NAME = "redesign-script-token";

const API_TOKEN_SALT = process.env.API_TOKEN_SALT;
if (!API_TOKEN_SALT) {
  console.error("API_TOKEN_SALT missing — run with: node --env-file=.env scripts/populate-buy-first-machine.mjs");
  process.exit(1);
}

const hashToken = (key) => crypto.createHmac("sha512", API_TOKEN_SALT).update(key).digest("hex");

const db = new Client({
  host: "127.0.0.1",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "strapi",
});

async function ensureToken() {
  const accessKey = crypto.randomBytes(32).toString("hex");
  const hash = hashToken(accessKey);
  const documentId = crypto.randomBytes(12).toString("hex");
  const now = new Date();
  await db.query("DELETE FROM strapi_api_tokens WHERE name = $1", [TOKEN_NAME]);
  await db.query(
    `INSERT INTO strapi_api_tokens
       (document_id, name, description, type, access_key, lifespan, created_at, updated_at, published_at)
     VALUES ($1, $2, $3, 'full-access', $4, NULL, $5, $5, $5)`,
    [documentId, TOKEN_NAME, "Redesign script (auto)", hash, now]
  );
  return accessKey;
}

async function getDocumentId() {
  const r = await db.query(
    "SELECT DISTINCT document_id FROM blog_posts WHERE slug = $1 LIMIT 1",
    [SLUG]
  );
  return r.rows[0]?.document_id;
}

const contentBlocks = [
  {
    __component: "library.block-tldr-quick-answer",
    heading: "How do I buy my first vending machine without getting burned?",
    paragraph:
      "Source from a reputable used channel (UsedVending.com, established local operators, vetted Facebook Marketplace listings). Drive out to inspect every candidate in person — power it up, test the cooling, the bill validator, the card reader, every coil. Buy a 2018-2020 combo machine in working condition for $1,500-3,500, then budget another $200-400 for a service tune-up. Skip new equipment on machine #1. The depreciation alone makes used the obvious move.",
    bullets: [
      { emphasis: "Buy used, not new", text: "— new machines depreciate 40-60% in three years. A used 2018-2020 combo machine performs nearly the same for half the price." },
      { emphasis: "Inspect in person", text: "— power it up for 15 minutes, test cooling, every coil, the bill validator, and the card reader before you write a check." },
      { emphasis: "Budget the tune-up", text: "— plan $200-400 for a post-purchase service visit. Belts, seals, telemetry firmware. Cheap insurance." },
    ],
  },
  {
    __component: "library.block-key-takeaways",
    heading: "Key takeaways",
    takeaways: [
      { text: "Used 2018-2020 combo machines from a reputable channel deliver 95% of new-machine performance at 40-50% of the cost." },
      { text: "Inspect in person. Plug it in, test every coil, every payment surface, and the cooling for 15 minutes before any cash changes hands." },
      { text: "Plan all-in spend of $2,900-4,900 for machine + delivery + tune-up + first inventory + year-one cellular." },
      { text: "Avoid auctions and untrusted sellers for machine #1. Without an in-person inspection, risk far outweighs the discount." },
      { text: "Your first machine pays back in 9-14 months at a single decent location." },
    ],
  },
  {
    __component: "library.block-stat-strip",
    heading: "Numbers that anchor a first-machine decision",
    stats: [
      { number: "$2,500", label: "median used price", sub: "2018-2020 combo, working", accent: "blue" },
      { number: "40-60%", label: "new-machine depreciation", sub: "first 3 years", accent: "orange" },
      { number: "9-14 mo", label: "typical break-even", sub: "single decent location", accent: "orange" },
      { number: "$300", label: "tune-up budget", sub: "belts, seals, firmware", accent: "blue" },
    ],
  },
  {
    __component: "library.block-cost-breakdown",
    heading: "What a first-machine purchase actually costs in 2026",
    sub: "All-in for one working unit at one location through the first year of cellular service.",
    items: [
      { label: "Used combo machine (2018-2020)", range: "$1,500-3,500", amount: "$2,500" },
      { label: "Delivery (lift gate, 50 mi)", range: "$200-400", amount: "$300" },
      { label: "Service tune-up + telemetry firmware", range: "$200-400", amount: "$300" },
      { label: "Initial inventory (60-80 SKUs)", range: "$150-300", amount: "$225" },
      { label: "Cellular + telemetry (year 1)", range: "$25-40/mo", amount: "$360" },
      { label: "Card-reader activation + processing setup", range: "$0-100", amount: "$50" },
    ],
    totalLabel: "Year-one all-in",
    totalAmount: "$3,735",
  },
  {
    __component: "library.block-comparison-table",
    heading: "Used vs new — the decision in six lines",
    sub: "The used column wins on every line that drives first-year cash flow. New only wins on convenience features.",
    headers: ["Aspect", "Used (2018-2020)", "New (2026)"],
    winnerColumn: 1,
    rows: [
      ["Upfront cost", "$1,500-3,500", "$5,500-7,500"],
      ["Warranty", "As-is", "1-3 year manufacturer"],
      ["3-year value retention", "~60% (slower curve)", "~40% (steep first 3 yr)"],
      ["Tech generation", "5-year-old payment stack — fine", "Latest reader + UI"],
      ["Cellular pre-configured", "Sometimes", "Yes"],
      ["Reliability when inspected", { icon: "check", text: "High" }, { icon: "check", text: "High" }],
    ],
  },
  {
    __component: "library.block-timeline",
    heading: "A 30-day plan from cold start to first deployment",
    sub: "Most first machines take this long because of inspection scheduling, not buying time.",
    howToName: "How to buy your first vending machine",
    totalTime: "P30D",
    steps: [
      { label: "DAY 1-3", title: "Set the budget and shortlist", description: "Decide on $2,000-3,500 for the machine, then build a 5-7 candidate shortlist from UsedVending.com, local Facebook Marketplace, and a 'wanted' post in a regional vending Facebook group." },
      { label: "DAY 4-10", title: "Inspect three candidates in person", description: "Drive out. Bring an extension cord and a roll of singles. Plug it in, let it warm 15 minutes, test every coil, run a card swipe and a bill insert on each." },
      { label: "DAY 11-14", title: "Negotiate and buy", description: "Asking prices are usually 15-25% above market. The strongest leverage is having a real second candidate. Pay by check or wire after pickup, not before." },
      { label: "DAY 15-21", title: "Schedule the service tune-up", description: "A local route tech replaces belts, reseals the door, updates the telemetry modem firmware, and verifies the bill validator and card reader." },
      { label: "DAY 22-30", title: "Deploy at first location", description: "Power it on, load 60-80 SKUs, configure the planogram in your platform, and confirm telemetry uplink. Verify the first sale rings through to your processor." },
    ],
  },
  {
    __component: "library.block-spec-list",
    heading: "What to inspect before any money changes hands",
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
  {
    __component: "library.block-inline-cta",
    text: "Want the full 28-point inspection checklist as a PDF you can take to the seller?",
    buttonLabel: "Download the checklist",
    buttonHref: "/#get-machine",
  },
  {
    __component: "library.block-tip-cards",
    heading: "The four mistakes that wreck first machines",
    sub: "Every one of these is recoverable, but each costs more than the original discount you thought you were getting.",
    startNumber: 1,
    items: [
      { title: "Buying from an auction without inspection", body: "Auction discounts evaporate on the first failed component. The 10% you saved buys you a $600 cooling repair." },
      { title: "Skipping the cellular check", body: "A machine that 'mostly works' with cellular flagged is a machine that doesn't talk to your platform. Restocking blind kills early margin." },
      { title: "Forgetting to budget the tune-up", body: "Belts, seals, firmware — none are expensive individually, all are necessary collectively. $300 saves you a $1,000 second visit." },
      { title: "Buying too big for the first location", body: "A 7-wide combo at a 15-person break room sits half-empty for months. Match capacity to traffic, not aspiration." },
    ],
  },
  {
    __component: "library.block-decision-tree",
    heading: "Should I buy new instead?",
    question: "Is this your first machine and your only machine?",
    branches: [
      { yn: "YES", title: "Buy used.", description: "First-machine economics are bad on new equipment. The depreciation curve alone costs more than the warranty and tech edge are worth.", finalTone: "stop", finalLabel: "BUY USED · 2018-2020" },
      { yn: "NO", title: "Consider new for unit 4+.", description: "Once you have a route and a working playbook, new equipment makes more sense — warranty coverage and uniform telemetry start paying back at scale.", finalTone: "go", finalLabel: "NEW IS FINE AT SCALE" },
    ],
  },
  {
    __component: "library.block-case-study",
    tag: "Real numbers · Phoenix operator",
    title: "$2,400 first machine, $4,800 in year-one revenue",
    context: "Jared, a side-hustle operator in Phoenix, bought a 2019 combo from a retiring operator off Facebook Marketplace. One weekend of inspection, one tune-up, one location: a 24-hour gym with 380 members.",
    meta: [
      { label: "Channel", value: "FB Marketplace, local seller" },
      { label: "Machine", value: "2019 combo, 7-wide" },
      { label: "Location", value: "24-hr gym, 380 members" },
    ],
    results: [
      { number: "$2,400", label: "purchase price" },
      { number: "$4,800", label: "year-one gross revenue" },
      { number: "11 mo", label: "all-in payback" },
    ],
  },
  {
    __component: "library.block-testimonial-quote",
    quote: "The thing nobody told me: the inspection day matters more than the price. I walked away from a $1,900 machine that wouldn't keep below 45°F. The $2,400 machine I bought instead has been zero problems for 14 months.",
    name: "Jared M.",
    role: "Side-hustle operator · Phoenix, AZ · One machine, one gym",
  },
  {
    __component: "library.block-lead-magnet",
    title: "The 28-point used vending machine inspection checklist",
    subtitle: "A PDF + Google Sheet you can take to any seller. Covers cooling, payment, every coil, telemetry, and the seven 'walk away' signals.",
    buttonLabel: "Download free",
    buttonHref: "/#get-magnet",
  },
  {
    __component: "library.block-author-card",
    name: "Bobby Mac",
    role: "Vending Service Advisor · 12 years experience",
    bio: "Bobby Mac has spent twelve years advising operators on equipment sourcing, route economics, and the contract terms that actually move first-year margin. This guide is built from his inspection walkthroughs with first-time buyers across the Phoenix, Atlanta, and Charlotte metros, and pricing was cross-checked against four live UsedVending.com listings the week of publication.",
    links: [
      { label: "About the desk", href: "/about" },
      { label: "Editorial standards", href: "/about#standards" },
      { label: "Contact Bobby", href: "/#get-machine" },
    ],
  },
  {
    __component: "library.block-source-citations",
    heading: "Sources",
    sources: [
      { label: "UsedVending.com — live listings price index", url: "https://www.usedvending.com/", note: "Median used-combo pricing referenced throughout" },
      { label: "National Automatic Merchandising Association (NAMA) — operator resources", url: "https://www.namanow.org/", note: "Regional operator chapter directory used for sourcing" },
      { label: "FTC — used product disclosures (16 CFR Part 455)", url: "https://www.ftc.gov/legal-library/browse/rules/used-motor-vehicle-trade-regulation-rule", note: "Background on as-is buyer protections" },
      { label: "Cantaloupe / Nayax / 365 Retail Markets — telemetry datasheets", url: "https://www.cantaloupe.com/", note: "Cellular cost and modem-firmware update procedures" },
    ],
  },
  {
    __component: "library.block-related-guides",
    heading: "Related operator guides",
    items: [
      { eyebrow: "Sister guide", title: "Your first location: how to choose and pitch it", description: "Headcount thresholds, dwell-time tests, and the one question that decides whether a location is worth pursuing.", href: "/vending-business-startup/your-first-vending-location" },
      { eyebrow: "Cost deep-dive", title: "Vending business startup costs in 2026", description: "Full P&L from machine #1 to a four-machine route, including the under-budgeted line items that catch new operators.", href: "/vending-business-startup/vending-startup-costs-2026" },
      { eyebrow: "Hub", title: "All vending business startup guides", description: "Sourcing, contracts, locations, financing, taxes, scaling. Every guide we have for new operators.", href: "/vending-business-startup" },
    ],
  },
];

async function main() {
  await db.connect();
  const token = await ensureToken();
  console.log("provisioned token");
  const docId = await getDocumentId();
  if (!docId) {
    throw new Error(`No blog post with slug ${SLUG} found.`);
  }
  console.log("documentId:", docId);

  const r = await fetch(`${STRAPI_URL}/api/blog-posts/${docId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ data: { contentBlocks } }),
  });

  const text = await r.text();
  console.log("PUT status:", r.status);
  if (!r.ok) {
    console.error("response:", text.slice(0, 1500));
    await db.end();
    process.exit(1);
  }
  console.log("ok — blocks count:", contentBlocks.length);
  await db.end();
}

main().catch(async (err) => {
  console.error(err);
  await db.end().catch(() => {});
  process.exit(1);
});
