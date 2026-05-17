import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-apartment-crisis-preparedness",
  assetType: "pack",
  title: "Apartment Vending Crisis-Preparedness Pack",
  subtitle: "Staples planogram, backup power spec, continuity SOP template",
  intro:
    "Vending is the only resident-accessible food source when a property loses access to delivery, retail, or staff coverage. This pack defines the crisis-mode planogram, backup-power spec, and SOP template to keep vending operational through power events, weather, and supply disruption.",
  sections: [
    {
      heading: "1. Crisis-mode taxonomy",
      paragraph:
        "Different crisis types require different responses. Build the SOP against the four classes below.",
      headers: ["Crisis type", "Primary impact", "Vending response"],
      rows: [
        ["Grid power outage", "Loss of refrigeration + payment platform", "Backup-power on critical cabinets; cashless-only freeze-tolerant SKU"],
        ["Severe weather (hurricane / blizzard)", "Resident shelter-in-place; supply chain interrupted", "Staples planogram + pre-event restock + post-event resilience"],
        ["Pandemic / health emergency", "Reduced staff coverage; resident isolation; PPE demand", "Touchless-pay emphasis; PPE SKUs; non-perishable staples"],
        ["Supply-chain disruption", "Restock cadence breaks; SKU stockouts", "Reserve-SKU pool; substitute-SKU automation; resident transparency"],
      ],
    },
    {
      heading: "2. Staples planogram (crisis-mode override)",
      paragraph:
        "When property crisis-mode is activated, operator switches affected cabinets to staples planogram. SKU breadth narrows to longest-shelf-life essentials.",
      items: [
        { label: "Hydration (35-40% of capacity)", value: "Bottled water 16oz + 24oz, electrolyte drinks (Liquid IV, Gatorade), shelf-stable juice." },
        { label: "Calorie-dense shelf-stable (25-30%)", value: "Nut bars, jerky, trail mix, peanut butter packs, pretzels, crackers, granola bars." },
        { label: "Comfort + morale (15-20%)", value: "Chocolate, packaged baked goods, coffee RTD, hot-drink mix packets." },
        { label: "Kid + family (10-15%)", value: "Kid juice pouch, kid snack pack, fruit pouch (room-temp), animal crackers." },
        { label: "PPE / essentials (5-10%)", value: "Disposable mask, hand sanitizer pack, OTC pain reliever, AA/AAA batteries, phone-charge cable." },
        { label: "Allergen-aware staples", value: "Clearly-labeled allergen-free options in each category; FALCPA-compliant labels." },
      ],
    },
    {
      heading: "3. Backup power specification",
      paragraph:
        "Not every cabinet needs UPS. Prioritize cold-chain + payment + telemetry on UPS; ambient-snack cabinets can ride out short outages.",
      items: [
        { label: "Cold-chain cabinets", value: "Online UPS 1500-3000VA per cabinet (APC Smart-UPS, Eaton 9PX); 30-60 min compressor runtime; auto-transfer to property backup-generator circuit if equipped." },
        { label: "Payment + telemetry only", value: "Battery-backed cellular telemetry (built-in on Cantaloupe Seed Pro, Nayax VPOS Touch) survives 4-12 hr outage." },
        { label: "Ambient snack cabinets", value: "No UPS needed; equipment auto-restarts at power return." },
        { label: "Generator-circuit priority", value: "Property generator (if installed) should include lobby + amenity-zone vending circuits for cold-chain + lobby essentials." },
        { label: "Surge protection", value: "Whole-circuit surge-protective device (Type 2 SPD per NEC Article 285) on every vending circuit, regardless of UPS." },
      ],
    },
    {
      heading: "4. Pre-event restock SOP",
      paragraph:
        "When a forecast event (hurricane, named storm, blizzard, public-health declaration) lands within 72 hours, operator triggers pre-event restock.",
      items: [
        { number: 1, title: "T-72 hr — staples activation", description: "Operator switches affected cabinets to crisis planogram; route truck dispatched to property; SKU swap initiated." },
        { number: 2, title: "T-48 hr — full restock", description: "All affected cabinets restocked to 100% capacity with staples planogram; surge SKU pool (water, batteries, kid snack) loaded." },
        { number: 3, title: "T-24 hr — confirmation", description: "Telemetry confirms full stock + cold-chain stable; property POC notified; resident-portal pre-event announcement." },
        { number: 4, title: "T-0 (event)", description: "Cabinets operate on UPS / generator if outage; cashless via cellular telemetry remains operational." },
        { number: 5, title: "T+24 hr (post-event)", description: "Telemetry health check; first post-event restock dispatched within 24-72 hr depending on road access." },
        { number: 6, title: "T+72 hr (recovery)", description: "Restore standard planogram; resident-portal recovery announcement; commission floor waived for crisis week." },
      ],
    },
    {
      heading: "5. Continuity SOP template",
      paragraph:
        "Codify in the operator contract addendum. Each clause should be answered Yes/No + responsible-party.",
      items: [
        { check: "Crisis-mode trigger — National Weather Service watch/warning, property-issued emergency declaration, or local public-health order." },
        { check: "Operator's crisis dispatch contact (name, mobile, 24/7 line)." },
        { check: "Pre-event restock SLA — T-72 staples activation; T-48 full restock; T-24 confirmation." },
        { check: "Post-event restock SLA — within 72 hr of road access restoration." },
        { check: "UPS / generator circuit list — which cabinets are protected." },
        { check: "Telemetry continuity — cellular fallback path; battery-backed heartbeat duration." },
        { check: "Resident communication channel — property POC pushes notices to resident portal + lobby signage." },
        { check: "Refund-flow continuity — member-app refund processing not dependent on property network." },
        { check: "Commission floor waiver clause for crisis weeks (uptime < 90% pro-rata)." },
      ],
    },
    {
      heading: "6. Cold-chain crisis protocol",
      items: [
        { label: "Excursion at outage", value: "If cold-chain cabinet not on UPS / generator and internal temp > 41°F (refrigerated) or > 10°F (frozen) for >2 hours: SKU pull on power return; full credit; no resale." },
        { label: "Excursion-event log", value: "Telemetry timestamp + duration + temp profile; operator + property POC both alerted." },
        { label: "Recovery restock", value: "Operator dispatches refrigerated truck; fresh SKUs restocked within 72 hr of road access; commission credit issued." },
        { label: "Member transparency", value: "Resident-portal notice that fresh SKUs were pulled and replaced; member-app shows updated stock; refunds processed for in-flight cashless transactions on pulled SKUs." },
      ],
    },
    {
      heading: "7. Crisis-preparedness annual drill",
      items: [
        { check: "Annual tabletop drill with property POC + operator on-call lead." },
        { check: "Verify backup-power circuits at annual fire-protection / life-safety inspection." },
        { check: "Refresh UPS batteries every 3-5 years per manufacturer spec." },
        { check: "Refresh staples planogram SKU list annually (shelf-life rotation)." },
        { check: "Resident-portal emergency vending FAQ refreshed annually." },
        { check: "Post-drill action items + owner + due-date logged." },
        { check: "Post-real-event after-action review within 30 days; SOP updated as needed." },
      ],
    },
    {
      heading: "8. Resident communication during crisis",
      items: [
        { label: "Pre-event (T-72 to T-0)", value: "Resident-portal notice with cabinet locations, staples-mode notice, payment-method options, and refund process. Lobby signage + member-app banner." },
        { label: "During event", value: "If cabinets remain operational, member-app shows live stock; if cabinets offline, portal notice gives ETA for restoration." },
        { label: "Post-event recovery", value: "Resident-portal recovery notice; commission floor waiver acknowledgment; resident-feedback survey within 14 days." },
        { label: "Special-population accommodations", value: "Property staff coordinates delivery from cabinet to mobility-restricted residents during crisis-mode; this is property-side, not operator-side." },
      ],
    },
    {
      heading: "9. Capability framing",
      paragraph:
        "We are equipped to match qualifying multifamily properties with operators that hold documented crisis-preparedness SOPs and UPS / generator-circuit integration capability. Specific cabinet count, UPS coverage, and pre-event restock capacity depend on operator dispatch density in the property's submarket — described honestly at intake. Capability framing only.",
    },
  ],
  footer:
    "SOP timelines and SKU mix are reference values. Confirm against your operator contract and property emergency management plan.",
});

console.log("wrote " + "vending-apartment-crisis-preparedness");
