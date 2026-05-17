import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "on-demand-vending-medical-device-reps",
  assetType: "pack",
  title: "Medical Device Rep Vending Pack",
  subtitle: "AI cooler equipment selection, premium planogram, vendor services coordination, measurement framework",
  intro:
    "Medical device rep automated retail — typically AI-vision smart coolers placed in OR / cath-lab / IR corridors — supports the device-rep workflow (snacks + meals during long cases) and improves rep retention at the hospital. This pack covers equipment selection, premium planogram design, vendor services / credentialing coordination, and the measurement framework.",
  sections: [
    {
      heading: "1. AI cooler equipment selection",
      paragraph:
        "AI-vision smart coolers (computer-vision SKU recognition + automatic charge on exit) dominate this use case because they support fresh + premium SKUs at higher AUR. Four platforms lead the U.S. market.",
      headers: ["Platform", "Typical SKU capacity", "Auth + payment", "Notable features"],
      rows: [
        ["AWM Smart Shelf / Smart Fridge", "150-300 SKUs", "Card-on-file + biometric + RFID", "Computer vision; integrates with major MMIS"],
        ["365 Retail Markets PicoCooler", "200-400 SKUs", "Fob + biometric + app", "Mature healthcare deployment base"],
        ["Cantaloupe Go", "150-300 SKUs", "Card-tap entry + auto-charge", "Largest installed footprint"],
        ["Avanti Markets / Three Square Market", "150-400 SKUs", "Multiple auth options", "Strong micro-market software"],
      ],
    },
    {
      heading: "2. Placement strategy — where AI coolers belong",
      paragraph:
        "Device rep workflows concentrate in three corridors: cardiovascular (cath lab + EP), orthopedic (OR), and interventional radiology / GI lab. Place coolers along these corridors near the rep-staging room.",
      items: [
        { label: "Cath lab + EP corridor", value: "High device-rep density (CRM, structural heart, ablation); long procedure times (1-4 hours typical)." },
        { label: "Ortho OR corridor", value: "Joint reconstruction, sports med, trauma reps; case-day clusters." },
        { label: "IR / GI corridor", value: "Stent, embolization, endoscopy reps; case-day clusters." },
        { label: "Rep-staging / vendor room", value: "Many hospitals have a designated vendor / rep room; place a cooler inside or immediately adjacent." },
        { label: "OR family waiting (alternate use)", value: "Same equipment can serve patient family in OR family waiting between cases; planogram differs." },
      ],
    },
    {
      heading: "3. Premium planogram — what device reps actually buy",
      paragraph:
        "Device reps spend 6-12 hours in the hospital on case days. Their planogram weights heavily toward fresh meals, premium snacks, and recovery beverages — not the typical break-room mix.",
      headers: ["Category", "Share of facings", "Examples"],
      rows: [
        ["Fresh sandwiches + salads + grain bowls", "20-30%", "Local commissary brands; FDA Food Code §3-501.17 date-marked"],
        ["RTD protein + recovery", "15-20%", "Premier Protein, Fairlife Core Power Elite, Owyn, Oat-ly Pro"],
        ["Premium snacks + nuts + jerky", "15-20%", "Chomps, Pacific Foods, Sahale, Country Archer"],
        ["Premium hydration + functional bev", "15-20%", "LMNT, Athletic Greens, Liquid IV, Body Armor Lyte"],
        ["Coffee (RTD + cold brew)", "10-15%", "La Colombe, Chameleon, High Brew, Stumptown"],
        ["Light snacks (bars + chips)", "10-15%", "RXBAR, Quest, KIND, Hippeas, Boomchickapop"],
      ],
    },
    {
      heading: "4. Vendor services + credentialing coordination",
      paragraph:
        "Hospitals manage device reps through Vendor Credentialing Services — VCS (now part of Symplr), RepTrax (now Symplr), Vendormate (Symplr), and Symplr Access. Coordinating with the credentialing platform makes onboarding seamless.",
      items: [
        { number: 1, title: "Credential check at access", description: "Cooler authentication can integrate with the credentialing platform; reps who lapse credentials lose access automatically." },
        { number: 2, title: "Cost center allocation", description: "Vendor reps charge against the rep's company P-card or a vendor billing arrangement; not the hospital." },
        { number: 3, title: "After-hours access", description: "Most device reps work non-standard hours (early starts, late cases); 24/7 cooler access required." },
        { number: 4, title: "Compliance attestation", description: "PhRMA Code + AdvaMed Code (2022 update) compliance — operator confirms vending is not a 'gift' from the device company to the hospital." },
        { number: 5, title: "Reporting to MMIS", description: "Optional: per-rep usage feed to materials management for vendor management visibility." },
      ],
    },
    {
      heading: "5. Pricing strategy",
      paragraph:
        "Premium planogram = premium pricing. Device reps tolerate $7-$15 lunch combos when the alternative is leaving the hospital between back-to-back cases. Set pricing to retail benchmark, not break-room baseline.",
      headers: ["Item type", "Vending price range", "Reference"],
      rows: [
        ["Fresh sandwich / salad", "$8.00-$12.00", "Local commissary + cafe benchmark"],
        ["Grain bowl / entree", "$9.00-$14.00", "Premium fresh"],
        ["RTD protein shake (premium)", "$4.50-$6.50", "Retail benchmark"],
        ["Premium jerky / nuts", "$3.50-$5.50", "Retail benchmark"],
        ["RTD cold brew (premium)", "$4.50-$6.50", "Retail benchmark"],
        ["Bottled water + electrolyte", "$2.50-$4.50", "Standard"],
      ],
    },
    {
      heading: "6. Cold-chain + fresh food operations",
      paragraph:
        "Fresh SKUs require tight cold-chain + date-marking discipline per FDA Food Code §§3-501.16, 3-501.17, 3-501.18.",
      items: [
        { check: "Cabinet temperature ≤ 41°F (5°C) monitored continuously per FDA Food Code §3-501.16; telemetry alerts to operator." },
        { check: "Date marking: 7-day max from prep per FDA Food Code §3-501.17; operator monitors expiry by SKU." },
        { check: "Auto-discard before expiry: SKUs marked for removal at day 6 of 7; computer vision can flag automatically." },
        { check: "Restock cadence: fresh SKUs replenished 3-5× weekly minimum; ambient SKUs 2× weekly typical." },
        { check: "Spoilage budget: 8-15% at launch, 4-8% steady-state; operator absorbs in commission structure." },
        { check: "Cold-chain documentation: operator logs transport temperature + delivery temperature per Joint Commission EOC documentation." },
      ],
    },
    {
      heading: "7. Measurement framework",
      paragraph:
        "Device rep vending differs from standard break-room because the audience is small + high-value. Measure rep satisfaction + usage, not just transaction count.",
      headers: ["Metric", "Source", "Target"],
      rows: [
        ["Active reps using cooler (monthly)", "Auth-event count", "≥ 60% of credentialed reps on premises"],
        ["Transactions per active rep per month", "Telemetry", "8-15"],
        ["Avg unit revenue (AUR)", "Telemetry", "$6.50-$9.50"],
        ["Spoilage %", "Operator report", "≤ 8% steady-state"],
        ["Stockout %", "Telemetry", "≤ 2% on top-50 SKUs"],
        ["Rep satisfaction (qualitative)", "Annual rep survey", "≥ 4.0/5.0"],
        ["Vendor services compliance attestation", "Vendor mgmt sign-off", "Annual"],
      ],
    },
    {
      heading: "8. Operator capabilities required",
      items: [
        { check: "AI-vision smart cooler platform with computer-vision SKU recognition + auto-charge." },
        { check: "Integration with Symplr / RepTrax / Vendormate / Symplr Access credentialing platforms." },
        { check: "Cold-chain logistics: refrigerated truck + warehouse capacity per FDA Food Code §3-202." },
        { check: "Fresh food sourcing relationships with local commissary or national fresh-prep partner (Bonn Group, FreshRealm, Crisp & Green, Pret A Manger Vending, regional)." },
        { check: "PhRMA Code + AdvaMed Code 2022 awareness; can document vending is not a vendor gift." },
        { check: "PCI-DSS attestation; reps' card-on-file handled outside hospital scope." },
        { check: "Insurance: GL $2M/$4M, product liability $2M (including foodborne illness coverage), auto $1M." },
        { check: "References from at least 2 prior medical device rep cooler deployments." },
      ],
    },
  ],
  footer:
    "This pack is informational. LetUsVending can introduce operators equipped to deliver medical device rep automated retail programs with AI cooler platforms and credentialing integration.",
});

console.log("wrote "+"on-demand-vending-medical-device-reps");
