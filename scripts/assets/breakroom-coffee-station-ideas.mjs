import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "breakroom-coffee-station-ideas",
  assetType: "playbook",
  title: "Breakroom Coffee Station Playbook",
  subtitle: "Equipment tier, accompaniments, water source, layout, cleaning discipline, and subsidy structure",
  intro:
    "A breakroom coffee station is a 6-decision system: equipment, accompaniments, water source, layout, cleaning, and subsidy. This playbook codifies each decision against office size and use pattern. It maps to NSF 4 / NSF 169 sanitation standards, FDA food-contact equipment standards (21 CFR 175-178), ADA Section 309.4 for operating force, and standard breakroom electrical + plumbing requirements.",
  sections: [
    {
      heading: "1. Equipment tier by office size",
      headers: ["Office size", "Equipment", "Peak-hour drinks", "Notes"],
      rows: [
        ["< 15", "Pod machine (Keurig K-Slim / K-Mini) + 8-12 pod varieties", "≤ 10", "Simplest; lowest per-drink quality"],
        ["15-30", "Pod machine (Keurig K-3500) + drip carafe (Bunn VPR)", "10-20", "Dual rail covers both fast-cup + meeting-pot"],
        ["30-60", "Pod + bean-to-cup office-prosumer (Jura WE / De'Longhi)", "20-30", "Adds milk-based drinks"],
        ["60-150", "Bean-to-cup semi-commercial (Franke A300 / Jura X-line / WMF 1100S)", "30-60", "Dedicated milk-line; daily auto-clean"],
        ["150+", "Bean-to-cup commercial (Franke A600+ / WMF 1500+ / Schaerer Coffee Prime)", "60+", "Dual-grinder; fresh-milk; multi-spout"],
      ],
    },
    {
      heading: "2. Accompaniments — what to stock",
      items: [
        { label: "Milk + alternatives", value: "Whole + 2% (refrigerated quart or half-gallon) at every station. Oat + almond at offices over 30. Soy where requested. Cream + half-and-half at offices serving older / traditional preferences." },
        { label: "Sweeteners", value: "Sugar (white + raw), Splenda, Stevia, Equal. Avoid offering only artificial sweeteners — generation-mix preferences vary." },
        { label: "Flavorings", value: "Vanilla + hazelnut syrup pump bottles at offices over 60 (where bean-to-cup machine doesn't auto-flavor). Cocoa for hot chocolate option in winter." },
        { label: "Cups + lids", value: "Hot cup + lid + sleeve in two sizes (10 + 16 oz) at offices over 30. Compostable / recyclable where placement supports the waste stream." },
        { label: "Stir sticks", value: "Wood preferred for sustainability; plastic alternative for environments where wood splinters matter." },
        { label: "Cleaning + supplies", value: "Counter spray, microfiber cloth, paper towel. Operator-supplied at managed-station tiers." },
      ],
    },
    {
      heading: "3. Water source",
      items: [
        { number: 1, title: "Plumbed-in (filtered)", description: "Best for bean-to-cup + drip + pod machines used daily by 20+ employees. Operator installs 3M / Everpure / BWT filter sized to machine + water hardness. Filter replaced per spec (6-12 months). Eliminates jug-handling labor + plastic waste." },
        { number: 2, title: "Bottled water cooler (5-gallon)", description: "Where plumbing isn't feasible. Operator-managed swap cadence (typically 4-8 jugs per week per cooler at 60-employee office). Document jug source water quality + delivery cadence." },
        { number: 3, title: "Bottleless water cooler (filtered)", description: "Plumbed cooler with multi-stage filtration. Replaces jug handling. Hot + cold + sparkling options on premium models. Annual sanitation service." },
        { number: 4, title: "Water-quality testing", description: "Hardness + chlorine + pH tested at install + annually. Hard-water sites require additional descaling cadence or softener install." },
      ],
    },
    {
      heading: "4. Layout + ergonomics",
      items: [
        { check: "Counter depth ≥ 24 inches for bean-to-cup; ≥ 18 inches for pod-only. Machine + cup-staging + spillover zone." },
        { check: "Electrical — dedicated 20A circuit for commercial bean-to-cup; standard 15A for pod + office-prosumer. Plumbed machines require water + drain access." },
        { check: "ADA reach range — Section 308.2.1: cup-dispense, machine controls, sweetener / milk station within 15-48 inches above finished floor." },
        { check: "Operating force — Section 309.4: machine buttons, pump bottles, milk dispensers operable with one hand and ≤ 5 lbf." },
        { check: "Trash + recycling within 6 feet of cup-disposal point; cup-rinse sink within 12 feet at managed-cup stations." },
        { check: "Drip-tray + drain — bean-to-cup drip tray accessible for daily emptying; plumbed-in drain at commercial tier." },
        { check: "Signage — drink-mode quick-reference card at machine; allergen / dietary placard visible." },
      ],
    },
    {
      heading: "5. Cleaning discipline",
      items: [
        { label: "Daily", value: "Empty + rinse drip tray. Wipe counter, machine exterior, sweetener / cream caddy. Refill cups + sweeteners. Empty trash. Quick visual quality check." },
        { label: "Weekly", value: "Deep clean machine exterior. Clean milk frother / steam wand. Descale check (machine-prompted or scheduled). Restock paper goods. Wipe inside cabinet doors." },
        { label: "Monthly", value: "Descale per machine schedule (or per machine prompt). Replace milk supply tubing where machine spec calls. Audit pump-bottle freshness; replace expired syrup." },
        { label: "Quarterly", value: "Operator field-rep deep clean — disassemble + sanitize milk system, descale, inspect seals, calibrate dispense volumes. NSF 4 / NSF 169 alignment." },
        { label: "Annual", value: "Water filter replacement (or per spec); preventive maintenance per OEM schedule." },
      ],
    },
    {
      heading: "6. Subsidy + cost structure",
      items: [
        { check: "Most common: host-subsidized, free to employees. Per-employee monthly cost 8-25 USD at semi-commercial tier; 15-40 USD at commercial tier." },
        { check: "Cost-recovery (drinks priced 1.00-2.00 USD) where visitor / contractor traffic shares the station." },
        { check: "Tier-pricing (free for employees; charged to non-employees via badge / app rail) at offices with substantial visitor traffic." },
        { check: "Bundle option — combine coffee with snack + cold-beverage program for single-invoice management at 50+ employee offices." },
        { check: "Annual escalator capped at CPI or 5%, whichever lower." },
      ],
    },
    {
      heading: "7. Operator SLA",
      headers: ["Tier", "Definition", "Acknowledge", "Resolve"],
      rows: [
        ["Tier 1 — machine down / cold-chain", "Coffee machine offline, milk dispense failure, refrigeration excursion (where machine has milk-fridge)", "≤ 4 hr", "≤ 24 hr"],
        ["Tier 2 — drink quality / supply", "Foam quality drop, bean stockout, milk stockout, sweetener stockout", "≤ 24 hr", "5 days"],
        ["Tier 3 — cosmetic / signage", "Cup stockout, signage refresh, paper-good top-off", "≤ 5 days", "≤ 14 days"],
      ],
    },
    {
      heading: "8. Pre-signing red flags",
      items: [
        { check: "Equipment tier mismatched to peak-hour drink count — under-spec drives morning queues + complaints." },
        { check: "Bottled water cooler proposed where plumbing is feasible — higher recurring labor + plastic waste." },
        { check: "No documented cleaning compliance log — milk-system off-taste within weeks." },
        { check: "Water-filtration program absent or 'as needed'." },
        { check: "SLA proposed without per-tier acknowledgment + resolution targets." },
        { check: "Subsidy structure unspecified — per-employee cost surprises at first invoice." },
      ],
    },
  ],
  footer:
    "This playbook is informational. Equipment selection benefits from a 90-day pilot at the proposed tier matched to actual office drink-mix.",
});

console.log("wrote "+"breakroom-coffee-station-ideas");
