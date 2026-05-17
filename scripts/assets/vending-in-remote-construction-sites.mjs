import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-in-remote-construction-sites",
  assetType: "pack",
  title: "Remote Construction Site Vending Framework",
  subtitle: "Equipment spec, telemetry stack, payment stack, weather enclosure, safety-officer coordination",
  intro:
    "Remote sites — pipeline, wind, transmission, mining, oil & gas — sit outside the normal vending-route footprint. This pack covers the equipment specification, connectivity, weatherization, and safety-officer coordination required to make a remote placement viable.",
  sections: [
    {
      heading: "1. Site qualification — is the site even servable?",
      paragraph:
        "Most operator routes top out at 60-90 miles from the warehouse. Anything beyond that needs a deliberate framework: increased visit interval, third-party route partner, or a host-owned model. Qualify before specifying equipment.",
      items: [
        { label: "Distance from operator warehouse", value: "Under 60 miles: standard routes. 60-150 miles: weekly cadence with surcharge. Over 150 miles: bi-weekly or hub-and-spoke partner required." },
        { label: "Workforce size", value: "Under 25 workers: micro-market or single combo unit. 25-150: dedicated snack + beverage pair. 150+: multi-bank with hot-food / micro-market hybrid." },
        { label: "Site duration", value: "Under 6 months: rental model with monthly fee. 6-24 months: standard placement with depreciation amortization. Over 24 months: capital purchase option viable." },
        { label: "Road access", value: "Class 6 box truck access required for full-size vending. Lift-gate required where the dock is unavailable. Document seasonal access limits (frost laws, mud season)." },
      ],
    },
    {
      heading: "2. Equipment specification — ruggedized for remote",
      paragraph:
        "Standard office machines fail in remote conditions: dust, vibration, temperature swing, intermittent power. Specify NEMA 3R / IP54 minimum and confirm the manufacturer publishes a remote-site or industrial revision.",
      items: [
        { label: "Cabinet rating", value: "NEMA 3R (outdoor, falling rain) minimum for any partially-exposed placement. NEMA 4 (windblown rain + ice) for fully exposed. IEC IP54 international equivalent." },
        { label: "Ambient envelope", value: "Standard merchandiser rated 75°F / 55% RH per AHRI 810-2016. Industrial-grade rated 95°F / 70% RH (Royal Vendors RVCC-DEX or equivalent). Verify per unit." },
        { label: "Vibration", value: "Specify equipment shipped from manufacturer with shipping brackets retained and stiffened mounting; coil-clean clearance ≥ 6 inches from any wall." },
        { label: "Cashless-only option", value: "Remote sites have higher bill-validator failure rate from dust. Specify cashless-only configuration (Nayax VPOS Touch, Cantaloupe Engage, Apple Pay, Google Pay) to eliminate validator service calls." },
      ],
    },
    {
      heading: "3. Connectivity — cellular + fallback",
      paragraph:
        "Telemetry on a remote site without connectivity is a paperweight. Build a connectivity stack with primary and fallback paths and verify before equipment ships.",
      items: [
        { label: "Primary path", value: "4G LTE Cat-1 or Cat-M1 cellular modem. Verify carrier coverage with FCC Broadband Map or onsite RSRP measurement ≤ -110 dBm." },
        { label: "Fallback path", value: "On marginal cellular sites, add Iridium Edge SBD modem for low-bandwidth telemetry (transaction count + temperature only, no real-time payment)." },
        { label: "Payment fallback", value: "If cellular drops, Nayax VPOS Touch caches up to 1,000 transactions and clears when connectivity returns. Verify operator activates this mode." },
        { label: "Coverage test", value: "30-day pre-install signal log from a same-make modem placed at the proposed siting point. Document RSRP, RSRQ, SINR." },
      ],
    },
    {
      heading: "4. Weather enclosure + power",
      paragraph:
        "Most remote placements need either a vendor-provided weather enclosure or installation inside a host trailer / conex / break shelter. Coordinate before equipment ships — retrofitting power and ventilation on a placed unit costs 3-5× the original install.",
      items: [
        { label: "Power circuit", value: "Dedicated 120V/20A circuit per refrigerated unit per NEC Article 422 and most manufacturer specs. Dedicated 120V/15A acceptable for ambient snack units. GFCI protection per NEC 210.8 in damp / outdoor locations." },
        { label: "Generator placement", value: "If grid power unavailable, size generator ≥ 1.5× nameplate VA per unit per IEEE 1100 (Emerald Book). Run inverter-grade generator (≤ 5% THD) to protect electronics." },
        { label: "Weather shelter", value: "Three-sided shelter with roof overhang ≥ 24 inches; concrete pad 6 inches deep with ≤ 0.25 inch/ft slope away from cabinet. Cabinet ventilation clearance ≥ 6 inches sides and back per manufacturer." },
        { label: "Lighting + safety", value: "Photocell-controlled LED area light over the cabinet; min 5 fc maintained at the operating face per IES RP-7 (industrial lighting)." },
      ],
    },
    {
      heading: "5. Restock cadence + route partner",
      paragraph:
        "Remote cadence is the single biggest cost driver. Use telemetry-driven cadence to avoid both stockouts and wasted miles, and consider hub-and-spoke partnerships.",
      headers: ["Workers on site", "Visit cadence", "Stock days carried", "Telemetry threshold"],
      rows: [
        ["Under 25", "Bi-weekly", "14-day capacity", "Stockout alert at 25% on key SKUs"],
        ["25-75", "Weekly", "9-day capacity", "Stockout alert at 30% on key SKUs"],
        ["75-150", "2× weekly", "5-day capacity", "Stockout alert at 35% on key SKUs"],
        ["150+", "3× weekly", "3-day capacity", "Stockout alert at 40% on key SKUs"],
      ],
    },
    {
      heading: "6. Safety officer coordination",
      paragraph:
        "Remote construction sites operate under OSHA 1926 (construction) and where applicable MSHA 30 CFR Part 56/57 (surface mine). Every vendor visit is a site entry that must be coordinated with the site safety officer.",
      items: [
        { check: "Operator drivers complete site-specific orientation (typically 1-4 hours) before first visit; recertification annually." },
        { check: "PPE meeting site spec — Class 2 hi-vis (ANSI/ISEA 107), ANSI Z89.1 hard hat, ANSI Z87.1 safety glasses, ASTM F2413 toe protection." },
        { check: "Drug-free workplace attestation per FAR 52.223-6 where the project is federally funded, or per host policy otherwise." },
        { check: "MSHA Part 46/48 training where the site is a surface or underground mine." },
        { check: "Visit windows defined to avoid blasting, heavy lifts, or critical path activity; operator schedules through the site safety officer at least 48 hours in advance." },
        { check: "Operator carries general liability ≥ $2M / $4M aggregate; auto liability ≥ $1M; workers compensation per state statutory limits; coverage certificate names host as additional insured." },
      ],
    },
    {
      heading: "7. Pricing + cash handling for remote sites",
      paragraph:
        "Remote sites typically run on subsidy or hybrid pricing. Pure-commission is rarely viable because volume per unit is low.",
      items: [
        { label: "Subsidy model", value: "Host pays operator a monthly service fee ($150-$450 per machine depending on distance and cadence) plus product at wholesale + markup. Pricing to workers can match retail or be subsidized." },
        { label: "Hybrid", value: "Host pays a smaller monthly service fee ($75-$200) and the operator retains transaction revenue. Common where worker volume is moderate." },
        { label: "Pure commission", value: "Only viable above 100 workers on a daily basis. Commission typically 0-15% for remote sites (vs. 15-30% urban office)." },
      ],
    },
    {
      heading: "8. SLA — adjusted for remote distance",
      headers: ["Tier", "Issue type", "Acknowledgement", "Resolution"],
      rows: [
        ["1", "Machine offline, refrigeration failure, payment outage", "≤ 24 hours", "≤ 72 hours (vs. 24 hours urban)"],
        ["2", "Stockout / planogram refresh", "48-72 hours", "Next scheduled visit (max 10 days)"],
        ["3", "Cosmetic / signage", "5 days", "21 days"],
      ],
    },
  ],
  footer:
    "This framework is informational. LetUsVending can introduce operators equipped to serve remote construction sites across the lower 48 plus Alaska oilfield and Canadian operations via partner networks.",
});

console.log("wrote "+"vending-in-remote-construction-sites");
