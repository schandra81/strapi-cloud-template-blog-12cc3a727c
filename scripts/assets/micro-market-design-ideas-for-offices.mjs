import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "micro-market-design-ideas-for-offices",
  assetType: "playbook",
  title: "Office Micro-Market Design Playbook",
  subtitle: "Layout, fixtures, lighting, signage, theft mitigation, and healthy-share integration",
  intro:
    "Design decisions made in the first 30 days of a micro-market project shape five years of operating cost, shrink rate, and employee NPS. This playbook codifies the layout, fixtures, lighting, signage, theft mitigation, and healthy-share design choices the LetUsVending operator network typically delivers — grounded in NFPA 70 (NEC), ADA Title III 2010 Standards, ASHRAE 90.1 (lighting power), and the FDA Food Code 2022 (cold-chain).",
  sections: [
    {
      heading: "1. Footprint and zoning",
      headers: ["Headcount served", "Footprint (sq ft)", "Coolers", "Ambient shelving", "Kiosk count"],
      rows: [
        ["50-150 employees", "120-180", "1 × 30 cu ft glass-door", "8-12 linear ft", "1"],
        ["150-400 employees", "200-300", "2 × 30 cu ft", "16-24 linear ft", "1-2"],
        ["400-800 employees", "350-500", "3 × 30 cu ft + 1 freezer", "28-40 linear ft", "2-3"],
        ["800+ employees", "500-900", "4-6 cooler doors + freezer", "40-60 linear ft", "3-4"],
      ],
    },
    {
      heading: "2. Fixture and equipment palette",
      items: [
        { label: "Glass-door coolers", value: "AHRI-certified, ENERGY STAR-listed multi-deck merchandisers (True, Hussmann, Hill Phoenix or equivalent). LED interior, anti-condensate doors. Target ≤41°F per FDA Food Code 2022 §3-501.16." },
        { label: "Ambient gondola shelving", value: "Modular steel, 4-5 shelves, 48-72 in run lengths. Adjustable to support 16-24 in deep planogram." },
        { label: "Self-checkout kiosk", value: "365 Retail Markets MicroMarket, Avanti Markets, Three Square Market, or comparable. EMV + NFC + biometric/app options. PCI-DSS 4.0 compliant." },
        { label: "Trash + recycling station", value: "Three-stream minimum (landfill / recycle / compost) where the building supports compost. ADA-compliant openings ≥15 in from finished floor." },
        { label: "Microwave + coffee station", value: "Two 1000-1200 W microwaves per 200 employees; bean-to-cup coffee or pour-over depending on tier. GFCI-protected 20A circuits per NEC 210.8." },
      ],
    },
    {
      heading: "3. Lighting design",
      items: [
        { number: 1, title: "Ambient lighting", description: "30-50 footcandles at task surface (IES RP-3 for retail back-of-house). LED 3500-4000K for accurate food appearance. Maintain Color Rendering Index (CRI) ≥ 80." },
        { number: 2, title: "Cooler internal lighting", description: "LED strip integral to the cooler — replace any halogen with LED for energy + heat-load reasons." },
        { number: 3, title: "Accent lighting on healthy-share", description: "Spot LED on the healthy-share endcap. Thorndike et al. (Harvard 2014; 2020) found that visual prominence + light cueing lifts healthy-share velocity 10-30%." },
        { number: 4, title: "Energy compliance", description: "ASHRAE 90.1-2022 lighting power density (LPD) for refreshment areas: ≤ 1.0 W/sq ft. Verify against local energy code (Title 24, IECC 2021)." },
      ],
    },
    {
      heading: "4. Theft and shrink mitigation",
      paragraph:
        "Industry-reported shrink in self-checkout micro-markets typically lands at 2-5% of revenue depending on workforce mix, visibility, and software controls. Design decisions reduce shrink before operations does.",
      items: [
        { check: "Camera coverage of every shelving run + kiosk (1080p minimum, 30-day retention) — coordinate with workplace privacy policy + state two-party-consent rules where applicable" },
        { check: "Kiosk facing the room entry so the cashier-less checkout is the visible reference point" },
        { check: "Workplace badge or fob integration to the kiosk account (reduces card-skimming and supports employer subsidy)" },
        { check: "Random audit cycle by the operator (every 60-90 days) reconciles physical inventory to POS telemetry" },
        { check: "AI-vision shrink alerts on the kiosk software where available (365 Pico, Avanti Markets Insights)" },
        { check: "Signage on the wall: 'this is an honor market; thank you for scanning every item'" },
      ],
    },
    {
      heading: "5. Healthy-share integration in the layout",
      items: [
        { number: 1, title: "Fresh-food cooler near entry", description: "Make the grab-and-go cooler the first surface members see. Eye-level fresh produce + protein-forward meals lifts healthy purchases without restricting choice." },
        { number: 2, title: "Healthy-share endcap", description: "Reserve one gondola endcap for ≤200 cal, ≤6g added sugar, ≤480mg sodium SKUs. Green-leaf shelf strip. Refresh quarterly with the RDN-reviewed planogram." },
        { number: 3, title: "Water + unsweetened beverages adjacent to coffee", description: "Adjacent placement lifts beverage healthy-share. Choice architecture, not restriction." },
        { number: 4, title: "Calorie + allergen visibility", description: "FDA 21 CFR 101.11 menu-labeling if chain coverage applies; FALCPA + FASTER Act allergen labels on every package; allergen filter in the kiosk." },
      ],
    },
    {
      heading: "6. Power, plumbing, network",
      headers: ["Utility", "Requirement", "Notes"],
      rows: [
        ["Electrical", "Two 20A 120V GFCI circuits per cooler door + one per kiosk; coffee station on its own 20A", "NEC 210.8 GFCI; 210.52 receptacle spacing; coordinate with EE"],
        ["Network", "Wired Cat6 to kiosk and to each cooler with telemetry; 100 Mbps minimum, PoE preferred", "Avoid Wi-Fi-only for payment kiosks — PCI scope risk"],
        ["Plumbing (optional)", "Cold-water line + drain for bean-to-cup coffee + filtered water dispenser", "NSF/ANSI 42 + 53 carbon filter on incoming line"],
        ["HVAC", "Cooler heat-load: 6,000-9,000 BTU/hr per 30 cu ft cooler — add to room load", "Coordinate with MEP; rooms < 200 sq ft may need supplemental cooling"],
      ],
    },
    {
      heading: "7. Project timeline",
      items: [
        { number: 1, title: "Week 1-2 — discovery", description: "Headcount + shift mix + dietary-coverage + brand-system + footprint walk-down." },
        { number: 2, title: "Week 3-4 — schematic design", description: "Floor plan, planogram concept, kiosk skin, equipment schedule, MEP requirements." },
        { number: 3, title: "Week 5-8 — design development + sign-off", description: "Construction documents (if a build-out), procurement of fixtures and equipment, kiosk software config." },
        { number: 4, title: "Week 9-12 — installation + launch", description: "Equipment install, first-stock, member account creation, communication rollout, opening event." },
      ],
    },
    {
      heading: "8. LetUsVending capability statement",
      paragraph:
        "Through the LetUsVending operator network we can match an employer or property with operator partners equipped to deliver a full design + install + operate program — including space planning, equipment selection, NEC/ASHRAE-compliant utility coordination, kiosk software setup, RDN-reviewed planograms, and brand-system integration. Scope is set per site after a discovery call.",
    },
  ],
  footer:
    "Informational reference. Confirm electrical, plumbing, fire, and energy-code requirements with a licensed AHJ engineer for your jurisdiction. Standards citations current at publication; verify the latest version before contracting.",
});

console.log("wrote "+"micro-market-design-ideas-for-offices");
