import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "specialty-vending-public-facilities",
  assetType: "rfp template",
  title: "Specialty Public-Facility Vending RFP Template",
  subtitle: "Eight specialty categories, compliance overlays, and multi-category RFP framework",
  intro:
    "Use this RFP template to solicit specialty vending bids for public facilities — bookstores, harm-reduction, hygiene, transit, OTC medicine, library, museum-merchandise, and emergency-supply. Each specialty has its own compliance overlay and SLA posture. The template lets procurement issue a single multi-category RFP rather than 8 separate solicitations.",
  sections: [
    {
      heading: "1. Project overview",
      items: [
        { label: "Facility type + zones", value: "(library / transit station / courthouse lobby / community health center / museum / civic complex — specify capacity, traffic, hours)" },
        { label: "Categories in scope", value: "Specify which of the 8 categories below are in scope; operator scopes per category." },
        { label: "Contract term", value: "3-5 year initial with annual category-specific review." },
        { label: "Compliance authority", value: "(specify per category — health department, FDA, OSHA, ADA, local AHJ)" },
      ],
    },
    {
      heading: "2. Eight specialty categories + compliance overlays",
      paragraph:
        "Operator scopes each in-scope category. Capability framing — describe what operator is equipped to deliver, not anchor facility names.",
      headers: ["#", "Category", "Compliance overlay"],
      rows: [
        ["1", "Public bookstore / printed material", "Local library / municipal merchandising policy; sales-tax registration; Section 308 reach range for browsing"],
        ["2", "Harm reduction (Narcan, fentanyl test strips, hygiene)", "Local public-health authority approval; FDA Narcan OTC compliance per 2023 reclassification; staff training for re-stock; signage in 2+ languages per facility language access plan"],
        ["3", "Hygiene + personal care", "ADA Section 308 reach range; tamper-evident packaging per FDA 21 CFR 211.132"],
        ["4", "Transit (fare media, MetroCard / smart-card sales)", "Transit-authority POS integration (Cubic, Conduent, or facility vendor); PCI DSS Level 1"],
        ["5", "OTC medicine", "FDA OTC Monograph compliance per 21 CFR 330; expiration-date tracking; tamper-evident packaging per 21 CFR 211.132"],
        ["6", "Library specialty (study supplies, USB drives, calculators)", "Sales-tax registration; ADA Section 308; cabinet finish per library design standard"],
        ["7", "Museum-merchandise (limited-edition, branded)", "Museum revenue-share or consignment terms; cabinet finish per museum design standard; sales-tax registration"],
        ["8", "Emergency supplies (PPE, first aid, hydration)", "Facility emergency-management plan integration; expiration-date tracking; signage during emergency mode"],
      ],
    },
    {
      heading: "3. Multi-category RFP framework",
      paragraph:
        "Procurement can issue this as a single solicitation with category lots. Operators may bid on a subset of categories. Scoring is per-category, with bonus for operators demonstrating capability across multiple categories.",
      items: [
        { number: 1, title: "Lot structure", description: "Each of the 8 categories is a separate lot. Operator marks per-lot bid (yes / no). Procurement may award per lot or to a single operator." },
        { number: 2, title: "Per-category planogram", description: "Operator submits planogram per bid lot. Generic planograms score lower than category-specific responses." },
        { number: 3, title: "Cross-category synergies", description: "Operator describes synergies (single restock crew, single telemetry platform, consolidated reporting) that justify multi-category award." },
        { number: 4, title: "Award model", description: "Procurement scores each lot independently; awards may go to multiple operators or one consolidated operator depending on weighted score and synergies." },
      ],
    },
    {
      heading: "4. Equipment + telemetry baseline",
      items: [
        { label: "Equipment listing", value: "UL 751 (vending) or UL 60950 (digital kiosk) listed; ADA Section 308 reach range; Section 305 clear floor space." },
        { label: "Telemetry", value: "Sub-15-minute heartbeat (Cantaloupe, Nayax, 365 Retail Markets, AWM Smart Shelf, or comparable)." },
        { label: "Cashless", value: "Apple Pay / Google Pay / NFC + chip; PCI DSS Level 1; SNAP / WIC where category warrants per USDA FNS guidance." },
        { label: "Refrigeration", value: "Where category warrants (harm reduction, OTC liquid medicine, hydration), 35-40°F maintained per FDA 21 CFR 211.150." },
      ],
    },
    {
      heading: "5. SLA framework (category-specific)",
      headers: ["Category", "Uptime", "Stockout SLA", "Category-specific SLA"],
      rows: [
        ["Bookstore / library", "95%", "72 hours", "—"],
        ["Harm reduction", "98%", "12 hours", "Narcan expiration check at every restock"],
        ["Hygiene", "97%", "48 hours", "Tamper-evident verification at every restock"],
        ["Transit (fare media)", "99%", "4 hours", "Transit-authority POS sync within 5 seconds"],
        ["OTC medicine", "97%", "24 hours", "FDA Monograph + expiration check at every restock"],
        ["Library specialty", "95%", "72 hours", "—"],
        ["Museum-merchandise", "97%", "48 hours", "Limited-edition restock per museum schedule"],
        ["Emergency supplies", "99%", "24 hours", "Expiration + PPE-integrity check monthly"],
      ],
    },
    {
      heading: "6. Required attachments",
      items: [
        { check: "Per-lot planogram (Section 2 / 3) for each lot bid." },
        { check: "Category-specific compliance documentation (FDA Monograph, transit POS integration, harm-reduction protocol, museum consignment terms — as applicable)." },
        { check: "Sample monthly + quarterly report per category bid." },
        { check: "Insurance certificate ($2M GL minimum; $5M product liability where OTC / harm-reduction / consumables warrant)." },
        { check: "References: 3 public-facility contacts (last 24 months) — capability framing." },
        { check: "ADA / accessibility attestation." },
      ],
    },
    {
      heading: "7. Submission instructions",
      items: [
        { label: "Format", value: "PDF response via procurement portal; per-lot pricing schedule." },
        { label: "Due date", value: "(specify — typically 30-45 days)" },
        { label: "Q&A window", value: "15 business days." },
        { label: "Award", value: "(specify — typically 45-75 days)" },
      ],
    },
  ],
  footer:
    "Informational template — engage facility procurement, public-health (where harm-reduction or OTC), and risk counsel before issue. Category-specific compliance overlays vary by jurisdiction.",
});

console.log("wrote "+"specialty-vending-public-facilities");
