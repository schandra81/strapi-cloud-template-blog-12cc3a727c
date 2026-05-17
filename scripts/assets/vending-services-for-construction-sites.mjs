import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-services-for-construction-sites",
  assetType: "rfp template",
  title: "Construction-Site Vending RFP Template",
  subtitle: "Outdoor equipment specification, hydration planogram, and relocation service for active jobsites",
  intro:
    "Construction-site vending serves a workforce that OSHA (29 CFR 1926 Subpart D) regulates for heat illness prevention, hydration access, and sanitation. Equipment must tolerate outdoor exposure, jobsite dust, and frequent relocation as the project phases progress. This RFP template gives the general contractor + project superintendent + safety officer an outdoor-rated equipment spec, a hydration-tilted planogram, and a relocation-service framework matched to construction project phasing.",
  sections: [
    {
      heading: "1. Outdoor equipment specification",
      paragraph:
        "Standard indoor vending equipment fails in outdoor + jobsite environments within 6 months. Specify outdoor-rated equipment explicitly in the RFP.",
      items: [
        { check: "NEMA 4 or NEMA 4X enclosure rating (outdoor-rated, dust + water ingress protected)" },
        { check: "Stainless steel or powder-coat steel cabinet (not laminate or vinyl wrap)" },
        { check: "Refrigerated devices with sealed condensate management; ENERGY STAR certification; AIM Act-compliant refrigerant" },
        { check: "Cellular telemetry — Wi-Fi unreliable on most jobsites (Cantaloupe, Nayax, 365 Retail Markets, AWM Smart Shelf, or comparable)" },
        { check: "IP-rated payment terminal (Nayax VPOS Touch / Cantaloupe Yoke / 365 Pico — verify environmental spec sheet)" },
        { check: "Solar canopy or shaded structure for hot-climate jobsites; reduces compressor cycle + extends refrigeration life" },
        { check: "Anchoring per 29 CFR 1926.502 fall-protection guidance where placed on elevated structures" },
        { check: "GFCI on 120V circuits; weather-rated electrical disconnect; per NEC 590 (temporary installations)" },
        { check: "ADA Section 308 reach range; 305 clear floor space on level surface around the device" },
        { check: "FALCPA allergen labeling on every SKU + allergen summary signage" },
      ],
    },
    {
      heading: "2. Hydration planogram — OSHA heat illness aligned",
      paragraph:
        "OSHA heat illness prevention guidance (29 CFR 1910 General Duty Clause + 29 CFR 1926 Subpart D + state heat-illness standards in CA Title 8 §3395, WA WAC 296-307-097, MN R.5208, OR OAR 437) emphasizes potable water access + acclimatization + rest breaks. Vending hydration planogram supports the GC's heat-illness program.",
      items: [
        { label: "Bottled water 16-24 oz", value: "≥ 60% of beverage slots in hot-season months (May-September in most regions). Cold-stored at 35-45°F." },
        { label: "Electrolyte drinks", value: "20-25% of beverage slots — Gatorade, Powerade, BodyArmor, Liquid I.V., or equivalent. Per ACSM hydration guidance, electrolyte drinks supplement water during prolonged heat exposure." },
        { label: "Sports + recovery", value: "Protein recovery drinks, chocolate milk (refrigerated), coconut water." },
        { label: "Snacks — calorie-dense", value: "Jerky, trail mix, granola bars, peanut-butter crackers, nut packs — fuel for long workdays." },
        { label: "Allergen-aware + dietary", value: "Gluten-free, nut-free, dairy-free options clearly labeled per FALCPA. Heart-healthy snack subset for older workers." },
        { label: "Cold-climate adjustment", value: "Winter months (November-March in cold regions): hot-beverage option (coffee + tea + hot chocolate) added; hydration still required per OSHA." },
        { label: "Cultural + language", value: "Signage in primary languages of the jobsite workforce where the GC's heat-illness program addresses Limited English Proficiency." },
      ],
    },
    {
      heading: "3. Relocation service — construction phasing",
      paragraph:
        "Construction projects phase through site mobilization, sitework, foundation, vertical, exterior, MEP, finishes, and closeout. Equipment placement moves accordingly. Relocation service is non-negotiable in modern construction-site vending contracts.",
      items: [
        { number: 1, title: "Initial mobilization placement", description: "Operator places equipment at trailer compound near GC + sub-trailers, ADA-accessible, on a level concrete pad. Power + GFCI confirmed at install." },
        { number: 2, title: "Phase relocations", description: "As the project progresses, equipment relocates to support the active work area (e.g., from trailer compound to a permanent generator-served pad near vertical work). Operator commits to 2-4 phase relocations per typical project; additional relocations at agreed cost." },
        { number: 3, title: "Vertical-construction relocation", description: "On vertical projects above 4 stories, equipment may relocate to a perimeter laydown or interior break-room location once enclosed. Operator coordinates with GC superintendent." },
        { number: 4, title: "Closeout demobilization", description: "Operator removes equipment within 14 days of project substantial completion; restores pad + electrical connection to original condition." },
        { number: 5, title: "Notice period", description: "GC superintendent provides 7 business days' notice for a relocation; operator responds within 3 business days with a relocation date." },
        { number: 6, title: "Cold-chain protection during relocation", description: "Refrigerated devices relocate with telemetry temperature monitoring; if relocation exceeds 4 hours of power loss, operator pulls refrigerated product and restocks." },
      ],
    },
    {
      heading: "4. SLA matrix",
      headers: ["SLA dimension", "Target", "Measurement", "Remedy"],
      rows: [
        ["Per-machine uptime", "95% monthly (lower than office due to jobsite conditions)", "Telemetry — minutes online / minutes in month", "Commission credit < 93%; SIP < 90%"],
        ["Tier-1 ticket resolve (offline / payment / cold-chain)", "< 24 hrs (hot-season < 12 hrs cold-chain)", "Operator CRM + telemetry", "Per-ticket commission credit"],
        ["Tier-2 ticket resolve (stockout / planogram refresh)", "< 5 business days", "Operator CRM", "Documented at QBR"],
        ["Refund response", "Cashless < 24 hrs; cash < 7 days", "Refund log", "Refund rate > 3% triggers planogram review"],
        ["Cold-chain", "Continuous 35-45°F (wider band for outdoor); excursion < 4 hrs", "Telemetry temperature feed", "Spoiled product replaced"],
        ["Restock cadence", "Telemetry-driven; minimum 2x weekly in hot-season; weekly in cold-season", "Operator restock log", "Stockout rate > 5% triggers cadence review"],
        ["Relocation response", "Within 3 business days of 7-day notice", "GC superintendent log", "Relocation SLA breach triggers cure period"],
      ],
    },
    {
      heading: "5. Compliance + safety",
      items: [
        { check: "OSHA 10 + 30 certification on all operator personnel entering active jobsite (29 CFR 1926)" },
        { check: "Site-specific orientation completed with GC safety officer; PPE compliant on every visit" },
        { check: "Heat-illness program awareness — operator personnel trained on signs of heat illness; emergency contact protocol" },
        { check: "ADA Section 308 reach range; verify on level surface at each relocation" },
        { check: "FALCPA allergen labeling + allergen summary signage" },
        { check: "PCI-DSS v4.0 attestation through payment vendor" },
        { check: "Insurance — CGL $2M minimum aggregate + workers' comp + additional-insured naming GC + owner; per construction-industry standard" },
        { check: "Background-check program for personnel where the owner or GC project requires it (typically federal + state + municipal projects)" },
        { check: "AIM Act refrigerant compliance + ENERGY STAR refrigerated equipment" },
        { check: "Documentation of equipment-anchoring per 29 CFR 1926 where placed on elevated structures" },
      ],
    },
    {
      heading: "6. RFP response sections",
      items: [
        { number: 1, title: "Section A — Bidder profile + construction experience", description: "Years operating jobsite vending, OSHA training program, fleet count, technician geography, three construction references with named GC superintendent contact." },
        { number: 2, title: "Section B — Outdoor equipment spec", description: "NEMA rating, cabinet construction, telemetry + payment terminal environmental rating, solar canopy capability." },
        { number: 3, title: "Section C — Hydration + heat-illness planogram", description: "Hot-season + cold-season planogram, electrolyte SKU list, allergen + language accommodation." },
        { number: 4, title: "Section D — Relocation service", description: "Phase-relocation methodology, notice + response time, cold-chain protection during move, demobilization plan." },
        { number: 5, title: "Section E — SLA + telemetry", description: "Match the SLA matrix; propose deviations with rationale." },
        { number: 6, title: "Section F — Safety + compliance", description: "OSHA 10/30 program, site-orientation protocol, PPE compliance, heat-illness training." },
        { number: 7, title: "Section G — Commercial terms + scaling", description: "Commission rate, calculation method, payment cadence, scalability across project size + phasing." },
        { number: 8, title: "Section H — References + insurance", description: "Three references + insurance certificate sample + additional-insured endorsement template." },
      ],
    },
  ],
  footer:
    "This RFP template is a working procurement reference. Final RFP + contract should be reviewed by GC counsel, the project superintendent, the safety officer, and owner if scope warrants. NEMA-rated equipment + hydration planogram + OSHA heat-illness alignment + relocation service together define a defensible construction-site vending program; gaps in any of them surface within the first hot season.",
});

console.log("wrote "+"vending-services-for-construction-sites");
