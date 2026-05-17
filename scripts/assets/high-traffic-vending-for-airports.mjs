import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "high-traffic-vending-for-airports",
  assetType: "pack",
  title: "High-Traffic Airport Vending Pack",
  subtitle: "99.5% uptime, multi-lingual / multi-currency, hardened security, concession compliance",
  intro:
    "Airport vending operates under concession compliance (ACI-NA, ACDBE), TSA secured-area constraints, and 99.5%+ uptime expectations. This pack codifies the equipment, payment, telemetry, and compliance spec a capable operator can attest to.",
  sections: [
    {
      heading: "1. Uptime + service architecture",
      paragraph:
        "Airport hosts measure machine uptime against published 99.5% concession-standard SLAs. The architecture below makes that achievable.",
      items: [
        { label: "Telemetry", value: "Sub-5-minute heartbeat (Cantaloupe Seed Pro, Nayax VPOS Touch, 365 Retail ePort 6). Dual-carrier cellular (LTE Cat-M1 primary, fallback) at airport placements." },
        { label: "On-call coverage", value: "24/7 operator on-call with badged-staff dispatch authority for secure-area access; 90-minute on-site SLA airside, 60-minute SLA landside." },
        { label: "Mean time to repair", value: "Tier 1 events resolved < 4 hours airside (badge + escort cycle); < 2 hours landside." },
        { label: "Restock cadence", value: "Daily restock at high-traffic placements (>200 transactions/day); 2x daily at concourse anchors." },
      ],
    },
    {
      heading: "2. Multi-lingual + multi-currency UI",
      paragraph:
        "International gateway terminals require multilingual interfaces. Payment platforms (Nayax, Cantaloupe ePort Connect) support each capability natively.",
      items: [
        { label: "Languages", value: "Minimum English + Spanish at all US placements. International gateway add: Mandarin, Japanese, Korean, Arabic, French, German, Portuguese based on terminal demographics." },
        { label: "Display fallback", value: "Icon-based UI with universal symbols (cup, plug, allergen) as backup to text." },
        { label: "Currencies accepted", value: "USD plus contactless EMV (Visa, Mastercard, Amex, JCB, UnionPay, Discover, Diners). Apple Pay, Google Pay, Samsung Pay, WeChat Pay, Alipay." },
        { label: "Foreign-card surcharge", value: "Operator absorbs international interchange (~2.4-3.0%) into pricing, not surcharge-on-machine (concession contract typically prohibits surcharging)." },
        { label: "Receipt", value: "Email or SMS receipt option for travelers needing expense reimbursement; printed-receipt option where concession requires." },
      ],
    },
    {
      heading: "3. Hardened security spec",
      paragraph:
        "Airport placements face higher-than-average tamper, vandalism, and theft attempts. Equipment hardening reduces operator service cost and concession-breach risk.",
      items: [
        { label: "Cabinet", value: "Steel cabinet 14-gauge minimum; high-security T-handle lock (Medeco, Abloy) or electronic lock (Sargent Greenleaf). Anti-fishing device on coin/bill validator." },
        { label: "Glass", value: "Tempered laminated glass (ANSI Z97.1) on glass-front coolers; impact-rated polycarbonate for high-risk concourse zones." },
        { label: "Bill validator", value: "MEI VN-2000 / Cashcode SM with anti-stringing + anti-bleach detection; cassette auto-lock on tamper." },
        { label: "Anchoring", value: "Floor-anchor bolts (3/8 in) into concrete; or J-bolt installer for unitized counter installs." },
        { label: "CCTV integration", value: "Camera coverage from airport CCTV system documented in operator placement file; incident-response process tied to airport ops center." },
      ],
    },
    {
      heading: "4. Concession compliance — what operators must hold",
      items: [
        { number: 1, title: "Concession agreement", description: "Operator party to airport concession agreement (or sub-concessionaire) with MAG / percentage rent structure documented." },
        { number: 2, title: "ACDBE participation", description: "Where airport receives federal funding (FAA AIP), Airport Concession Disadvantaged Business Enterprise plan applies per 49 CFR Part 23. Operator's ACDBE participation rate documented." },
        { number: 3, title: "TSA badging", description: "All field-service staff hold airport SIDA / AOA badge per TSA regulation 49 CFR 1542; fingerprint + STA clearance current." },
        { number: 4, title: "Insurance", description: "GL $5M, auto $2M, products $2M, workers comp per jurisdiction. Airport additional insured." },
        { number: 5, title: "Concession fees", description: "MAG (minimum annual guarantee) + percentage rent structure; settlement monthly with audited gross sales." },
        { number: 6, title: "Buy-local + healthy-vending mandates", description: "Some airports (e.g., LAX, SFO, JFK) mandate local product or healthy-vending percentages. Operator's planogram compliant + reportable." },
      ],
    },
    {
      heading: "5. Planogram framework — landside vs airside",
      headers: ["Zone", "Top categories", "Price tier"],
      rows: [
        ["Landside arrivals / baggage claim", "Bottled water, snacks, electronics adapters, travel pillows, OTC meds", "Mid (1.0-1.3x retail)"],
        ["Landside ticketing / pre-security", "Bottled beverages, snacks, gum / mints, single-serve coffee", "Mid (1.0-1.3x retail)"],
        ["Airside concourse anchor", "Premium beverages, hot snacks, fresh micro-market, sushi cooler", "Premium (1.3-1.7x retail)"],
        ["Airside satellite gates", "Cold drinks, energy drinks, packaged snacks, water, OTC meds", "Premium (1.3-1.7x retail)"],
        ["Crew-only / employee corridor", "Healthy snacks, hot food micro-market, badge-paid", "Subsidized / wholesale + admin fee"],
      ],
    },
    {
      heading: "6. International traveler additions",
      items: [
        { label: "OTC + travel essentials", value: "Pain reliever, antacid, allergy, melatonin, electrolyte; phone-charger, adapter, eye-mask, neck pillow." },
        { label: "Allergen + religious diet labeling", value: "Halal-certified, Kosher-certified, gluten-free, dairy-free shelf labels in multiple languages." },
        { label: "Local-product representation", value: "Per concession buy-local mandate — 15-30% planogram share for in-state or in-region SKUs at most major US airports." },
        { label: "Duty-free vs general", value: "General-merchandise vending does not displace duty-free; coordinate with terminal concession map to avoid overlap." },
      ],
    },
    {
      heading: "7. Reporting + governance",
      paragraph:
        "Airport concession contracts require granular reporting. Capable operators automate via payment platform.",
      items: [
        { check: "Daily transaction file (TSV / CSV / API) — transaction ID, machine ID, SKU, qty, gross sales, payment method, currency." },
        { check: "Monthly gross sales statement + percentage-rent calculation + remittance." },
        { check: "Monthly uptime report per machine; airport-defined SLA adherence %." },
        { check: "Quarterly concession review — sales trend, top SKUs, capex requests, concession-fee reconciliation." },
        { check: "Annual ACDBE participation report (where applicable)." },
        { check: "Annual operator audit / inspection by airport concession office." },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "We are equipped to surface vending operators that hold airport concession experience (or can sub-concession with an existing concessionaire) and meet TSA badging, ACDBE, and uptime spec. Specific terminal placement requires the airport's concession-bid or sub-concession-assignment process; capability framing only.",
    },
  ],
  footer:
    "Concession terms, MAG / percentage rent, and ACDBE rules vary by airport. Coordinate with the airport concession office and operator counsel.",
});

console.log("wrote " + "high-traffic-vending-for-airports");
