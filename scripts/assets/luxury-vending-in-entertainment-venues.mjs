import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "luxury-vending-in-entertainment-venues",
  assetType: "rfp template",
  title: "Luxury Entertainment-Venue Vending RFP Template",
  subtitle: "Premium SKU catalog, operator capability matrix, insurance requirements, and SLA framework",
  intro:
    "Use this RFP template to solicit luxury-grade vending bids for entertainment venues serving high-spend audiences (premium box, club lounge, ultra-VIP). It defines the premium SKU mix, the operator capabilities required to merchandise it, and the insurance posture appropriate to high-value inventory and venue brand exposure.",
  sections: [
    {
      heading: "1. Project overview",
      items: [
        { label: "Venue tier", value: "(luxury suite / premium club / ultra-VIP — specify per-cap spend benchmark)" },
        { label: "Machine placements", value: "Specify zones: suite hallway, lounge, member-only floor, BOH staging. Capability framing only — describe placement environment without naming anchor venues." },
        { label: "Estimated avg ticket", value: "$15-$45 (luxury) vs. $4-$8 (general admission). Operator must demonstrate SKU mix can support this range." },
        { label: "Contract term", value: "3-5 year initial term with annual luxury-SKU refresh." },
      ],
    },
    {
      heading: "2. Premium SKU catalog requirements",
      paragraph:
        "Operator must source and merchandise across the following premium categories. SKU count guidance assumes a 30-45 selection machine; adjust for your equipment.",
      headers: ["Category", "SKU count target", "Sample anchor items", "Per-unit price band"],
      rows: [
        ["Premium beverages — still + sparkling", "6-8", "Saratoga, Acqua Panna, San Pellegrino, Topo Chico", "$5-$9"],
        ["Craft + functional beverages", "4-6", "Cold-brew nitro, kombucha, functional adaptogens", "$6-$12"],
        ["Premium snack — savory", "5-7", "Truffle popcorn, single-origin charcuterie packs", "$8-$18"],
        ["Premium snack — sweet", "4-6", "Single-origin chocolate (Valrhona / Amedei), artisan cookies", "$6-$14"],
        ["Health + dietary specialty", "3-5", "Allergen-free protein, keto / paleo bars, plant-based jerky", "$5-$10"],
        ["Gift + impulse premium", "3-5", "Branded merchandise, premium gum/mints, travel kits", "$8-$25"],
        ["Cold-chain prepared", "4-6", "Sushi (refrigerated), bento, premium salads — operator must demonstrate cold-chain protocol", "$12-$28"],
      ],
    },
    {
      heading: "3. Operator capability matrix (scoring)",
      headers: ["Criterion", "Weight", "Evidence required"],
      rows: [
        ["Premium SKU sourcing relationships", "20%", "Vendor list with broker / distributor relationships for premium categories above"],
        ["Cold-chain handling", "15%", "HACCP plan, temperature-monitoring telemetry (sub-15-min heartbeat), TCS food protocol per FDA Food Code 2022 §3-501"],
        ["Cashless + premium payment", "10%", "Apple Pay / Google Pay / NFC, support for venue member-charge integration, optional concierge invoice"],
        ["Discretion + staff conduct", "10%", "Staffing standards: background check, NDA, dress code, VIP-floor access protocol"],
        ["Loss prevention + insurance", "10%", "Stated shrink rate, replacement timeline for damage / theft, $5M umbrella minimum"],
        ["Aesthetic + finish quality", "10%", "Wood / metal / leather-trim cabinet options; specify ADA-compliant Section 308 reach range maintained"],
        ["Refresh + curation cadence", "10%", "Quarterly SKU rotation; seasonal curation; sample 4-quarter rotation plan"],
        ["Reporting + analytics", "10%", "Monthly velocity by SKU, member-spend analytics (anonymized), QBR cadence per Section 7"],
        ["Local + regional sourcing", "5%", "% of SKUs sourced within 250 miles for freshness and brand authenticity"],
      ],
    },
    {
      heading: "4. Insurance + bonding requirements",
      items: [
        { label: "Commercial general liability", value: "$5M per occurrence / $10M aggregate (luxury threshold; general venue contracts typically require $2M/$4M)." },
        { label: "Product liability", value: "$5M per occurrence — required given premium prepared / cold-chain SKUs." },
        { label: "Liquor liability", value: "If non-alcoholic premium SKUs include functional botanicals near regulatory line, $1M minimum and operator confirms FDA / state ABC review." },
        { label: "Crime + fidelity bond", value: "$500K minimum for cash handling and inventory shrink." },
        { label: "Cyber liability", value: "$2M minimum for cashless payment / member-data integration." },
        { label: "Workers compensation", value: "Statutory minimums + $1M employers liability." },
        { label: "Auto liability", value: "$1M combined single limit on all delivery vehicles." },
        { label: "Additional insured", value: "Venue, venue management company, and any premium-tier sponsor named as additional insured on GL and product liability policies." },
      ],
    },
    {
      heading: "5. SLA framework",
      items: [
        { number: 1, title: "Uptime SLA", description: "99.5% machine uptime measured by telemetry (industry typical for general vending is 95-97%; luxury tier requires 99.5%)." },
        { number: 2, title: "Stockout SLA", description: "Per-SKU stockout > 6 hours during event hours = 5% credit on that SKU line for the month. Operator restocks pre-event with telemetry-driven mid-event top-off." },
        { number: 3, title: "Cold-chain SLA", description: "Temperature excursion outside 35-40°F triggers immediate alert with 2-hour on-site response (4-hour SLA for general vending). All TCS product within excursion window discarded and replaced at operator cost." },
        { number: 4, title: "Refund SLA", description: "Member-initiated refund auto-credited within 4 hours (vs. 24 hours general). Operator provides concierge phone line for in-event refund." },
        { number: 5, title: "Cleaning + presentation SLA", description: "Cabinet cleaned per visit; glass / wood / leather wiped to luxury-finish standard; photo log uploaded to operator portal." },
      ],
    },
    {
      heading: "6. Required attachments (operator response)",
      items: [
        { check: "Portfolio: 3+ comparable luxury / premium placements (capability framing acceptable — describe environment scale, not anchor names)." },
        { check: "Sample premium SKU catalog with vendor list and per-unit cost." },
        { check: "HACCP plan and FDA Food Code 2022 §3-501 attestation for TCS handling." },
        { check: "Insurance certificates per Section 4 listing venue as additional insured." },
        { check: "Sample monthly velocity + member-spend report." },
        { check: "Quarterly business review template." },
        { check: "References: 3 luxury venue or hospitality contacts (last 24 months)." },
      ],
    },
    {
      heading: "7. Reporting + governance",
      items: [
        { label: "Monthly", value: "Velocity by SKU + category, uptime, stockout incidents, refund volume + reason codes, member-spend pattern (anonymized)." },
        { label: "Quarterly", value: "Quarterly business review with venue F&B director, premium-tier marketing lead, and procurement. SKU rotation recommendation, sponsor activation review, capital-plan review (machine refresh, finish refresh)." },
        { label: "Annually", value: "Annual SLA scorecard; renewal / re-bid decision based on weighted scorecard plus QBR action-item completion." },
      ],
    },
    {
      heading: "8. Submission instructions",
      items: [
        { label: "Format", value: "PDF response via procurement portal; supporting materials in single ZIP." },
        { label: "Due date", value: "(specify — typically 30-45 days from RFP issue for luxury complexity)" },
        { label: "Pre-bid site walk", value: "Mandatory site walk with venue ops and F&B director; capability framing — operators view environment, do not represent anchor placements." },
        { label: "Q&A window", value: "15 business days; all Q&A distributed in writing." },
      ],
    },
  ],
  footer:
    "Informational template only — engage procurement and risk counsel before issue. Insurance limits should be confirmed against the venue's overall risk-transfer matrix.",
});

console.log("wrote "+"luxury-vending-in-entertainment-venues");
