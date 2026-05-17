import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-services-for-elementary-schools",
  assetType: "pack",
  title: "Elementary School Vending Pack",
  subtitle: "Placement options, planogram by audience, Smart Snacks compliance checklist, allergen protocol, PTA partnership template",
  intro:
    "Elementary school vending operates under the strictest USDA Smart Snacks beverage rules: at K-5 schools, plain water, ≤ 8oz low-fat milk, and ≤ 8oz 100% juice are the only beverages permitted during the school day per 7 CFR 210.11. This pack codifies five artifacts — placement options, planogram by audience, Smart Snacks checklist, allergen protocol, and PTA partnership template — so an elementary school is equipped to run a wellness-aligned program rather than over-fit a HS template.",
  sections: [
    {
      heading: "1. Placement options",
      paragraph:
        "Most elementary schools do NOT place student-accessible snack vending during the school day. Beverage coolers (water + milk), staff-lounge AI smart-coolers, and after-school PTA event vending are the three viable placements.",
      headers: ["Placement", "Audience", "Equipment", "When"],
      rows: [
        ["Cafeteria water cooler", "Students K-5", "Bottle-filler + filtered water station", "School day"],
        ["Cafeteria milk cooler", "Students K-5", "8oz milk + 8oz juice cooler", "School day (Smart Snacks)"],
        ["Faculty / staff lounge", "Staff only (locked from students)", "AI smart-cooler or combo", "School day + after-hours"],
        ["After-school PTA / event", "Parents + students with parent", "Combo or beverage cooler", "After-school events"],
        ["Family room / parent center", "Parents + caregivers", "Combo or beverage cooler", "School day visiting hours"],
      ],
    },
    {
      heading: "2. Planogram by audience",
      paragraph:
        "Audience drives planogram. Student-accessible during the school day is the tightest planogram; after-school event mode is the most flexible.",
      items: [
        { label: "Student daytime", value: "Plain water (any size); ≤ 8oz low-fat or fat-free milk (including flavored); ≤ 8oz 100% juice. No snack vending. No calorie-free or low-calorie beverages." },
        { label: "Staff lounge", value: "Coffee, tea, water, snack and beverage mix per staff council; not required to meet Smart Snacks if locked to staff." },
        { label: "After-school event", value: "Concession-style mix — water, juice, milk, fruit, granola bars, baked snacks; aligns with district wellness policy and PTA partnership." },
        { label: "Family / parent center", value: "Adult-targeted mix — coffee, water, healthy snacks; not required to meet Smart Snacks if outside student access window." },
      ],
    },
    {
      heading: "3. Smart Snacks compliance checklist",
      items: [
        { check: "Per-SKU attestation: every student-accessible SKU passes the USDA Smart Snacks Product Calculator." },
        { check: "Beverage rules: water (any size); ≤ 8oz milk; ≤ 8oz juice — NO calorie-free or low-calorie beverages at ES." },
        { check: "School-day window: midnight to 30 minutes after last bell, per 7 CFR 210.11(b)." },
        { check: "After-school SKU swap timestamped in operator log." },
        { check: "Wellness committee approves SKU list quarterly." },
        { check: "Operator delivers per-quarter attestation in writing." },
        { check: "State competitive-food overlay confirmed with school nutrition director." },
      ],
    },
    {
      heading: "4. Allergen protocol",
      paragraph:
        "Elementary populations have the highest concentration of severe food allergies. Allergen protocol is the most important operational element of an ES vending program.",
      items: [
        { number: 1, title: "FALCPA labeling on every SKU", description: "Big-9 allergens (milk, eggs, fish, shellfish, tree nuts, peanuts, wheat, soy, sesame) declared in plain language per FALCPA." },
        { number: 2, title: "Allergen summary on machine face", description: "Summary card lists each SKU and its allergen profile. Card is visible from the clear floor space (Section 305)." },
        { number: 3, title: "Peanut/tree-nut policy", description: "If the school has a nut-free policy, operator excludes any SKU containing peanut or tree-nut allergen including 'may contain' SKUs." },
        { number: 4, title: "Cross-contact disclosure", description: "Operator attests in writing to manufacturing-site cross-contact disclosures for any SKU sold." },
        { number: 5, title: "Refund + epinephrine protocol", description: "Refund flow includes an allergen incident report; school nurse on the operator's incident escalation list." },
        { number: 6, title: "Annual allergen review", description: "Annual review with school nurse + nutrition director; updates planogram for any new policy changes." },
      ],
    },
    {
      heading: "5. PTA partnership template",
      paragraph:
        "Most ES vending revenue routes through the PTA / PTO. The partnership template covers approval, revenue split, and event coordination.",
      items: [
        { label: "Approval workflow", value: "PTA board approves the placement + commission split; wellness committee approves the SKU list; school board approves the contract." },
        { label: "Commission split", value: "Common splits: 50/50 PTA/school, or 100% to PTA with school covering electrical. Document in MOU." },
        { label: "Revenue use", value: "Typically funds family events, classroom supplies, field trips, or playground equipment per PTA policy." },
        { label: "Event coordination", value: "PTA coordinates after-school event scheduling with operator — Open House, Curriculum Night, Spring Fling — 2-week lead time." },
        { label: "Annual review", value: "PTA + administration review revenue, KPIs, and SKU updates annually." },
      ],
    },
    {
      heading: "6. Equipment specification",
      items: [
        { label: "Water + bottle-filler", value: "Combination unit per ASHRAE / plumbing code; filter cartridge replacement cadence documented." },
        { label: "Beverage cooler (milk + juice)", value: "Royal Vendors / Dixie-Narco / AMS Sensit; 35-40°F; per-row velocity telemetry + temperature alarm." },
        { label: "Staff AI smart-cooler", value: "AWM Smart Shelf, 365 PicoCooler, Selecta; staff-card-locked; loss rate target < 2%." },
        { label: "Event combo machine (PTA storage)", value: "Mobile combo for after-school events; ADA Section 308 compliant; cashless EMV + NFC." },
        { label: "Telemetry", value: "Cellular telemetry on every machine; sub-15-minute heartbeat; temperature alarm 4-hour SLA." },
      ],
    },
    {
      heading: "7. Parent communication template",
      items: [
        { check: "Pre-launch letter from principal + PTA president + wellness coordinator." },
        { check: "Smart Snacks compliance explanation (what students can/cannot get during school day)." },
        { check: "Allergen protocol explanation (FALCPA labels + nut-free policy if applicable)." },
        { check: "After-school event-mode SKU set posted on PTA page." },
        { check: "Refund channel published on PTA + operator app." },
        { check: "Annual update with revenue + KPIs + planned use of funds." },
      ],
    },
    {
      heading: "8. Operator selection checklist",
      items: [
        { check: "Operator has 24+ months of K-5 placements (NOT just HS) with references." },
        { check: "Operator's allergen protocol is documented and operator can attest to cross-contact disclosures." },
        { check: "Operator can attest to ES-specific Smart Snacks beverage rules (water + ≤ 8oz milk + ≤ 8oz juice)." },
        { check: "Operator's telemetry and cashless capabilities meet contract spec." },
        { check: "Operator carries insurance (GL ≥ $2M / $5M aggregate, auto, workers' comp, cyber)." },
        { check: "Operator has executed a wellness-policy review with the district." },
        { check: "Operator's restock cadence + after-school event flexibility are contractual." },
      ],
    },
  ],
  footer:
    "This pack is a working ES program reference. Localize to PTA charter and district wellness policy; confirm allergen protocol with the school nurse and state competitive-food rules with the school nutrition director.",
});

console.log("wrote "+"vending-services-for-elementary-schools");
