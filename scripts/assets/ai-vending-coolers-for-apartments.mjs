import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "ai-vending-coolers-for-apartments",
  assetType: "pack",
  title: "Apartment AI Cooler Evaluation Pack",
  subtitle: "Property-fit checklist, operator shortlist criteria, planogram template, and resident-amenity revenue model",
  intro:
    "This pack bundles four working documents a multifamily property manager needs to evaluate, place, and operate an AI cooler in a residential building. Use it during RFP, install, and quarterly business reviews. Each section is capability-framed — confirm with operator in writing before contract execution.",
  sections: [
    {
      heading: "1. Property-fit checklist",
      paragraph:
        "Use this checklist on a walk-through before signing a placement letter. Property should clear all items or note the remediation plan.",
      items: [
        { check: "Unit count: building or community has ≥ 150 doors served by a single amenity area, OR multiple buildings clustered within a single management zone totaling ≥ 250 doors." },
        { check: "Resident density: foot traffic through amenity area ≥ 40 unique residents/day measured by access-control log or amenity calendar." },
        { check: "Placement: dry, climate-controlled (60-80°F ambient), within 10 ft of dedicated 120V/20A circuit, within 25 ft of building cellular signal ≥ -100 dBm or hardwired Ethernet drop." },
        { check: "ADA Section 308: 30x48 in clear floor space, operable parts 15-48 in above finished floor, ≤ 5 lbf operating force." },
        { check: "Security: 24/7 lobby/amenity camera coverage, fob/keycard access control, after-hours lighting ≥ 10 fc at the cooler face." },
        { check: "Egress + fire code: cooler does not narrow corridor below 44 in clear width; not in a means-of-egress path." },
        { check: "WiFi or cellular: cooler operator can attest to ≥ -95 dBm cellular signal or dedicated VLAN/SSID with ≥ 5 Mbps up/down." },
      ],
    },
    {
      heading: "2. Operator shortlist criteria",
      paragraph:
        "Score each candidate operator on the criteria below. Require operator to attest in writing and provide references at three comparable multifamily placements.",
      items: [
        { label: "Multifamily reference accounts", value: "Operator should provide 3+ active multifamily placements ≥ 12 months in service; reference call with on-site property manager required." },
        { label: "Telemetry + uptime SLA", value: "Operator should attest to 98% uptime, cellular or VLAN telemetry, ≤ 30 min offline alert threshold, ≤ 24 hr Tier-1 service response." },
        { label: "Payment + identity stack", value: "Apple Pay, Google Pay, contactless EMV, optional app/account. PCI-DSS 4.0 attestation, no PAN storage at cooler, AOC and SAQ-B-IP on file." },
        { label: "Computer-vision platform", value: "AiFi, Trigo, Standard AI, Grabango, or comparable; vendor-neutral. Operator should attest to vision-system accuracy ≥ 99% by SKU." },
        { label: "Restock cadence + margin share", value: "Standard 2x/week restock with telemetry-triggered top-offs; resident-amenity commission tier (typically 5-12% of gross revenue depending on volume + planogram constraints)." },
        { label: "Insurance + liability", value: "$2M general liability, $1M umbrella, additional-insured endorsement to property owner + management company; food product liability ≥ $1M." },
      ],
    },
    {
      heading: "3. Resident-amenity revenue model",
      headers: ["Building size", "Doors served", "Expected weekly transactions", "Avg basket", "Monthly gross", "Commission tier (5-10%)"],
      rows: [
        ["Small", "150-249", "85-150", "$6.50", "$2.4K-$4.2K", "$120-$420"],
        ["Mid", "250-499", "175-325", "$6.80", "$5.2K-$9.6K", "$260-$960"],
        ["Large", "500-999", "350-650", "$7.10", "$10.8K-$20K", "$540-$2,000"],
        ["Community / cluster", "1,000+", "750+", "$7.25", "$23K+", "$1,150+"],
      ],
    },
    {
      heading: "4. Planogram template — 60 SKU starting frame",
      paragraph:
        "Multifamily AI cooler planograms weight beverage + grab-and-go meal + late-night snack. Adjust per building demographics and quarterly velocity report. Pricing is a starting range — operator confirms by market.",
      items: [
        { label: "Beverage — 35% of facings (21 SKUs)", value: "Sparkling water (LaCroix, Bubly), bottled water, kombucha, RTD coffee/cold brew, electrolyte, premium soda. Price range $2.50-$5.50." },
        { label: "Grab-and-go meal — 25% of facings (15 SKUs)", value: "Pre-made sandwich, salad bowl, wrap, sushi tray, charcuterie cup, hummus + veg cup. Price range $6.50-$11.00." },
        { label: "Snack + chips — 15% (9 SKUs)", value: "Better-for-you crackers, popcorn, jerky, protein bar, pita chips. Price range $2.00-$4.50." },
        { label: "Dairy + frozen — 10% (6 SKUs)", value: "Greek yogurt, single-serve ice cream, cottage cheese, cheese stick. Price range $2.50-$6.00." },
        { label: "Sweets + indulgent — 8% (5 SKUs)", value: "Single-serve cookies, single-serve cake, premium chocolate. Price range $3.00-$5.50." },
        { label: "Household + emergency — 7% (4 SKUs)", value: "OTC pain relief 2-pack, single-serve detergent, pet treat, toothbrush. Price range $3.50-$8.00." },
      ],
    },
    {
      heading: "5. Install + go-live SOP",
      items: [
        { number: 1, title: "T-30: site survey + LOI", description: "Property manager + operator walk site, confirm placement, take measurements, sign letter of intent specifying placement location, electrical work owner, signage rules." },
        { number: 2, title: "T-21: electrical + connectivity prep", description: "Property facilities team confirms dedicated 120V/20A circuit, GFCI, cellular signal test or runs network drop. Operator confirms cooler dimensions vs corridor + door clearances." },
        { number: 3, title: "T-14: planogram + signage approval", description: "Operator submits planogram + cooler-face signage for property branding review. Property confirms FALCPA allergen labeling visibility and pricing display." },
        { number: 4, title: "T-7: install + commissioning", description: "Operator delivers, installs, levels, connects, performs vision-system calibration (typical 90-min calibration walk-through with 200+ training transactions per SKU)." },
        { number: 5, title: "T-0: soft launch", description: "Free-first-purchase code for residents, on-site demo, lobby signage, resident newsletter announcement." },
        { number: 6, title: "T+14: planogram review", description: "Operator pulls 2-week velocity report, drops bottom-5 SKUs, adds 5 substitutes based on actual demand." },
      ],
    },
    {
      heading: "6. Quarterly business review template",
      items: [
        { check: "Uptime by month over the quarter (per machine)" },
        { check: "Transactions per week trend + basket size trend" },
        { check: "Top-20 and bottom-20 SKUs by velocity" },
        { check: "Stockout incidents + resolution time vs SLA" },
        { check: "Refund rate (target < 2% of transactions)" },
        { check: "Vision-system accuracy report (mis-charge rate)" },
        { check: "Planogram refresh proposal for next quarter" },
      ],
    },
    {
      heading: "7. Resident communications kit",
      items: [
        { label: "Lobby launch poster", value: "11x17 print, free-first-purchase QR, 'how it works' 3-step graphic, allergen note." },
        { label: "Resident newsletter copy", value: "150-word announcement covering placement, payment methods, free-first-purchase code, contact for refunds." },
        { label: "Door-hanger card", value: "4x9 in card on each door at launch; same QR + 24/7 support number." },
        { label: "Email template", value: "Subject + 200-word body for property-management email blast." },
        { label: "Refund + support copy", value: "Standardized response for resident refund or product-quality complaints; routes to operator support and property manager." },
      ],
    },
  ],
  footer:
    "This pack is informational and not legal advice. Property manager should confirm placement complies with local building codes, fire-egress requirements, and lease-amendment language. Operator capability claims should be verified through reference calls and written attestation before contract execution.",
});

console.log("wrote " + "ai-vending-coolers-for-apartments");
