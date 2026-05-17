import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "branding-customization-industrial-vending",
  assetType: "playbook",
  title: "Industrial Vending Branding Playbook",
  subtitle: "Channel selection, wrap specification, approval workflow, multi-warehouse asset library",
  intro:
    "Industrial vending — warehouse, distribution center, manufacturing — increasingly carries branded wraps that reinforce safety culture, recognize workers, or promote wellness programs. This playbook codifies the channel selection (which surfaces to brand), wrap specification (materials + finish), approval workflow, and the multi-warehouse asset library that keeps branding consistent across a network.",
  sections: [
    {
      heading: "1. Five branding channels",
      headers: ["Channel", "Surface", "Best use", "Production lead"],
      rows: [
        ["C1 — Full cabinet wrap", "Entire cabinet 360°", "Flagship breakroom; high-visibility brand statement", "3-4 weeks"],
        ["C2 — Front-face wrap", "Cabinet front + glass perimeter", "Standard branding; most cost-effective", "2-3 weeks"],
        ["C3 — Header / topper sign", "Above cabinet, illuminated optional", "Safety message, wellness program, recognition", "2-3 weeks"],
        ["C4 — Glass-face decal", "Inside-glass or outside-glass static cling", "Seasonal campaigns, allergen + calorie disclosures, sponsor", "1-2 weeks"],
        ["C5 — On-screen UI customization", "Class P/A equipment touchscreen", "Branded payment flow, loyalty integration, wellness messages", "4-8 weeks"],
      ],
    },
    {
      heading: "2. Wrap specification",
      paragraph:
        "Industrial-spec wraps survive the environment: dust, vibration, occasional impact, glove contact, and intermittent steam-cleaning. Specifying the right material extends life from 18 months to 4-5 years.",
      items: [
        { label: "Material", value: "3M IJ180Cv3 or Avery MPI 1105 EZ-RS — cast vinyl with air-release adhesive. Cast (not calendered) for compound-curve cabinets. Outdoor-rated for class-C/D placements." },
        { label: "Laminate", value: "3M 8519 or Avery DOL 1460Z — gloss or matte UV-protective overlaminate. Matte preferred to reduce glare under shop fluorescent + LED lighting." },
        { label: "Inks", value: "Eco-solvent or latex inks rated for 5+ years outdoor; 7+ years indoor. UL recognized for 21 CFR §101.8 calorie-disclosure compatibility (food-contact-safe inks not required for cabinet exterior)." },
        { label: "Color match", value: "Pantone target with ΔE ≤ 2.5 against approved physical proof. Two-round physical proofing standard." },
        { label: "Resolution", value: "Min 720 dpi at print; 1200 dpi for fine text + barcoding. Print supplier delivers a printed proof, not just a digital proof." },
        { label: "Cabinet preparation", value: "Cabinet wiped with isopropyl alcohol + lint-free cloth; ambient ≥ 60°F during install; squeegee + heat-gun finish at edges." },
        { label: "Service life", value: "C1-C2 indoor: 4-5 years. C3-C4: 2-3 years. C5 (outdoor): 18-36 months with annual touch-up." },
      ],
    },
    {
      heading: "3. Approval workflow",
      items: [
        { number: 1, title: "Stage 1 — Concept + brief", description: "Host brand + facilities + EHS define brief: surface(s), message, audience, brand standards, sponsor (if any). Lead 1-2 weeks." },
        { number: 2, title: "Stage 2 — Design v1", description: "Designer or operator-provided creative produces v1 against brand standards + size templates. Round 1 review by brand + EHS + facilities. Lead 1-2 weeks." },
        { number: 3, title: "Stage 3 — Design v2 + compliance check", description: "Round 2 design incorporates feedback. Compliance check: allergen disclosure visibility, calorie labeling not obscured, ADA clear-floor-space approach not blocked. Lead 1 week." },
        { number: 4, title: "Stage 4 — Physical proof + sign-off", description: "Printed proof at 1:1 scale (or sample panel for full wrap). In-person sign-off by brand + EHS. Lead 1 week." },
        { number: 5, title: "Stage 5 — Production + install", description: "Production + install. Lead 2-4 weeks. Operator coordinates install during planned PM visit or scheduled equipment swap." },
        { number: 6, title: "Stage 6 — Post-install audit", description: "Photo audit within 48 hr of install; brand + EHS sign-off on placement. Issues fixed within 5 business days." },
      ],
    },
    {
      heading: "4. Multi-warehouse asset library",
      paragraph:
        "Networks operating 5+ warehouses run a shared asset library so every site can pull the approved wraps + signs without redoing the approval workflow. Library is owned by host brand team, indexed by surface + equipment type + theme.",
      items: [
        { check: "Index — by equipment type (snack / beverage / food / micro-market / coffee), surface channel (C1-C5), theme (safety / wellness / recognition / sponsor)" },
        { check: "Templates — vector source files (Adobe Illustrator AI + SVG), print-ready PDFs at production resolution" },
        { check: "Color profile — ICC profile for the print supplier; Pantone target with approved physical proof on file" },
        { check: "Compliance overlay — allergen disclosure layer, calorie label layer, ADA approach-zone layer toggled per placement" },
        { check: "Version control — Asset version + retirement date + approver names + date stamp on every file" },
        { check: "Access control — brand team owns; facilities + EHS can request; operator pulls latest at install" },
        { check: "Audit log — pulls + installs tracked by warehouse + equipment ID + install date" },
      ],
    },
    {
      heading: "5. Operational support structure",
      items: [
        { label: "Restock + install coordination", value: "Wrap install coordinated with operator restock or PM visit to minimize machine downtime. Typical install: 2-4 hr per machine." },
        { label: "Service SLA — wrap damage", value: "Wrap damage flagged on operator restock visit; replacement panel ordered within 5 business days; install at next scheduled visit. Tier 3 cosmetic SLA applies." },
        { label: "Refresh cadence", value: "Quarterly cosmetic audit per machine; full wrap refresh every 2-5 years based on placement class + brand campaign cycle." },
        { label: "Multi-warehouse rollout", value: "Phased rollout 4-8 warehouses per month with asset-library pull; operator coordinates production + install lead times to align with PM schedule." },
      ],
    },
    {
      heading: "6. Compliance overlay",
      items: [
        { check: "FDA 21 CFR §101.8 calorie disclosure not obscured by wrap; on-screen disclosure for Class P/A equipment" },
        { check: "FALCPA allergen disclosure visible at planogram or via QR; not obscured by wrap" },
        { check: "ADA 2010 Standards §305 + §308 — wrap does not extend into clear-floor-space or block reach range" },
        { check: "ANSI/NAMA 2-2011 — wrap does not block service clearance (36 in.) or hot-surface warning labels" },
        { check: "OSHA 1910.145 — safety-color + safety-sign messaging on wraps follows OSHA color code (red prohibition, yellow caution, green safety, blue notice)" },
        { check: "Sponsor + brand-conflict review — sponsor wrap does not conflict with host values policy or supplier contracts" },
      ],
    },
    {
      heading: "7. KPI scorecard",
      headers: ["Metric", "Target", "Reporting"],
      rows: [
        ["Wrap service life", "≥ 4 yr (indoor) / ≥ 2 yr (outdoor)", "Per-machine on inspection"],
        ["Brand-audit pass rate", "100% within 30 days of install", "Quarterly"],
        ["Approval workflow lead time", "≤ 6 weeks brief-to-install", "Per project"],
        ["Multi-warehouse rollout cadence", "On plan", "Monthly"],
        ["Compliance overlay audit", "100%", "Quarterly"],
        ["Cosmetic SLA — Tier 3 resolution", "< 14 days", "Per ticket"],
      ],
    },
  ],
  footer:
    "LetUsVending is equipped to coordinate operator selection, wrap specification + production, approval workflow, and multi-warehouse asset library implementation for industrial vending programs.",
});

console.log("wrote "+"branding-customization-industrial-vending");
