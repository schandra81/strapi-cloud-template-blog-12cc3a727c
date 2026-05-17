import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-at-boutique-fitness-studios",
  assetType: "template",
  title: "Boutique Fitness Vending Framework",
  subtitle: "Premium SKU template, brand-aesthetic spec, studio-app integration, monthly reporting",
  intro:
    "Use this framework to specify a vending program inside a boutique fitness studio (cycling, barre, pilates, yoga, HIIT, recovery + cold-plunge studios). Each section is capability-framed and references NSF/ANSI 7 + 25, AHRI 1410, ENERGY STAR vending, FDA Food Code 2022, FALCPA + FASTER Act, ADA Section 308, PCI-DSS 4.0, and FTC Endorsement Guides where any wellness claim is made. Operator capabilities should be confirmed in writing before contract execution.",
  sections: [
    {
      heading: "1. Premium SKU template — 24-40 column starting frame",
      paragraph:
        "Boutique fitness members expect a curated, brand-aligned SKU set, not a generic snack vendor. Pricing skews 15-40% above generic-gym retail to reflect the premium positioning.",
      items: [
        { label: "Hydration (30% of facings)", value: "Premium bottled water (Mountain Valley, Voss, Liquid Death glass-or-aluminum 16 oz), sparkling (LaCroix, Bubly, Spindrift), electrolyte (LMNT, Liquid IV Energy, Nuun, Cure)." },
        { label: "Recovery — protein + functional (25%)", value: "Fairlife Core Power 26g, Iconic 20g, Owyn plant 20g, Aloha plant 18g, RXBAR, KIND Protein, GoMacro, Picky Bar; collagen drinks (Vital Proteins, Ancient Nutrition)." },
        { label: "Functional + adaptogen (15%)", value: "Mushroom coffee + adaptogen RTD (Four Sigmatic, MUD\\WTR), Kombucha (Health-Ade, GT's), prebiotic soda (OLIPOP, Poppi, Culture Pop)." },
        { label: "Cold brew + RTD coffee (10%)", value: "La Colombe, Chameleon, Stumptown, Lavva RTD, Califia Farms; oat-milk lattes." },
        { label: "Snack — clean-label bar + nut (10%)", value: "RXBAR, Larabar, Picky Bar, GoMacro, raw-nut packs, hemp-seed bites, sea-salt almonds." },
        { label: "Indulgent — clean treat (5%)", value: "Hu chocolate, Eating Evolved, single-serve almond-butter cup, dark-chocolate covered fruit." },
        { label: "Recovery + functional supplement (5%)", value: "Single-serve magnesium drink (Calm, Moon Juice), tart-cherry recovery, collagen single-serve, single-serve creatine packet." },
      ],
    },
    {
      heading: "2. Brand-aesthetic specification",
      paragraph:
        "Boutique fitness studio vending should look like studio merchandise, not a vending machine. Aesthetic spec below.",
      items: [
        { label: "Cabinet finish", value: "Matte black, brushed stainless, or studio-branded color wrap. Avoid high-gloss white or red plastic." },
        { label: "Graphics + signage", value: "Studio-branded wrap (3M IJ180 or comparable, 7-year warranty); allergen + nutrition signage in studio brand typography + color palette." },
        { label: "Lighting", value: "Soft LED 2700-3000K (warm white); dimmable; avoid 5000K+ (cool white feels clinical)." },
        { label: "Sound + ambiance", value: "Quiet condenser (≤ 50 dBA at 3 ft); place not adjacent to acoustic-sensitive studios (sound-bath, meditation, yoga)." },
        { label: "Placement", value: "Lobby + retail area integration, not back-of-house. Within sight-line of front desk + retail merchandise." },
        { label: "ADA compliance", value: "30x48 in clear floor space, operable parts 15-48 in above finished floor, ≤ 5 lbf operating force per ADA Section 308 + 309.4." },
      ],
    },
    {
      heading: "3. Studio-app integration matrix",
      headers: ["Studio platform", "Integration approach", "Notes"],
      rows: [
        ["Mindbody", "API + Class Pass SSO", "Most common boutique platform; documented vending integrations available"],
        ["Mariana Tek", "REST API + SSO", "Heritage in cycling + barre studios"],
        ["Crunch / Equinox proprietary", "Custom integration via operator SDK", "Closed platforms; engage IT early"],
        ["ClassPass", "ClassPass member ID passthrough", "Studio handles loyalty; vending takes member ID for spend tracking"],
        ["Glofox / Wellness Living", "REST API", "Mid-size + multi-location studios"],
      ],
    },
    {
      heading: "4. Operator capability checks",
      items: [
        { check: "Operator should attest to premium SKU sourcing (curated clean-label, third-party-certified options) with quarterly assortment audit and substitution log." },
        { check: "Operator should attest to studio-app integration (Mindbody, Mariana Tek, Glofox, or similar) via API + SSO and member-ID passthrough for spend tracking." },
        { check: "Operator should attest to NSF/ANSI 7 + 25 + AHRI 1410 + ENERGY STAR documentation on file." },
        { check: "Operator should attest to FDA Food Code 3-501.16 cold-chain compliance with ≤ 30-minute telemetry alert and quiet-condenser equipment selection (≤ 50 dBA at 3 ft)." },
        { check: "Operator should attest to FALCPA + FASTER Act allergen labeling and FTC Endorsement Guides compliance for any wellness claim made on the machine face or app." },
        { check: "Operator should attest to PCI-DSS 4.0 cashless payment + Apple Pay + Google Pay + contactless EMV with AOC + SAQ-B-IP on file." },
        { check: "Operator should provide $2M general liability, $1M umbrella, product liability ≥ $1M, additional-insured endorsement to studio + management." },
      ],
    },
    {
      heading: "5. Pricing + commission model",
      paragraph:
        "Boutique fitness vending pricing is premium and commission structures should reflect higher gross. Adjust to local market.",
      headers: ["SKU category", "Typical retail (single)", "Range vs generic gym vending"],
      rows: [
        ["Premium water (16 oz)", "$3.50-$5.00", "+50-80%"],
        ["RTD protein (14-16 oz)", "$6.00-$8.50", "+25-40%"],
        ["Premium cold brew (12 oz)", "$5.50-$7.00", "+30-50%"],
        ["Adaptogen / functional", "$4.50-$7.00", "+40-60%"],
        ["Clean-label bar", "$3.50-$5.00", "+25-40%"],
        ["Kombucha (16 oz)", "$5.00-$6.50", "+15-25%"],
      ],
    },
    {
      heading: "6. Commission model template",
      headers: ["Monthly gross", "Commission tier", "Notes"],
      rows: [
        ["$0 - $1,500", "8%", "Entry tier; premium pricing supports higher %"],
        ["$1,500 - $3,500", "12%", "Standard"],
        ["$3,500 - $7,000", "16%", "High-traffic + multi-class studios"],
        ["$7,000 - $15,000", "20%", "Multi-studio chains; flagship locations"],
        ["$15,000+", "22-25%", "Anchor studio in large chain"],
      ],
    },
    {
      heading: "7. Monthly reporting cadence",
      items: [
        { check: "Uptime per machine (target ≥ 99% — boutique tolerance is lower than office)." },
        { check: "Transactions per day; revenue + basket; basket size benchmark vs comparable studios in operator portfolio." },
        { check: "Stockout incidents + resolution time (target zero stockout > 24 hours)." },
        { check: "Per-SKU velocity (top-10 + bottom-10); planogram refresh proposal." },
        { check: "Refund volume + reason codes (target < 1.5% of transactions for premium positioning)." },
        { check: "Member-feedback summary (in-app rating, on-machine QR survey, front-desk notes)." },
        { check: "Temperature excursion log; quiet-condenser noise check." },
      ],
    },
    {
      heading: "8. Quarterly review + planogram refresh",
      items: [
        { check: "Quarterly planogram refresh based on velocity + member survey; drop bottom-5 SKUs, introduce 3-5 new SKUs aligned with studio brand + member preferences." },
        { check: "Quarterly brand-aesthetic audit (graphic-wrap condition, signage, lighting, ambiance check)." },
        { check: "Quarterly NPS review + tasting event planning for new-SKU launches." },
        { check: "Annual contract review: commission tier, SLA performance, NPS, RFP renewal vs renew." },
        { check: "Annual recertification: NSF + AHRI + PCI + insurance + food safety attestations on file." },
      ],
    },
  ],
  footer:
    "This framework is informational and not legal, nutrition, or medical advice. Confirm operator capabilities in writing through reference checks and attestations. Any wellness, recovery, or functional-product claim must comply with FTC Endorsement Guides and applicable FDA labeling rules (DSHEA for supplements; standard food labeling for conventional foods).",
});

console.log("wrote " + "vending-at-boutique-fitness-studios");
