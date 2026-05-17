import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "custom-gym-vending-branding",
  assetType: "pack",
  title: "Custom Gym Vending Branding Pack",
  subtitle: "Five-layer brand stack + tier-1 operator + brand guidelines + class schedule integration + co-branded sourcing + ROI",
  intro:
    "Branded vending in a gym is not just a vinyl wrap. It is a five-layer stack — cabinet wrap, kiosk UI, planogram, signage, app — coordinated so members see the gym brand on every touchpoint. This pack defines each layer, the operator capabilities required, and a realistic ROI framework.",
  sections: [
    {
      heading: "1. Five-layer brand stack",
      paragraph:
        "Brand consistency drives recall and trust per the Marketing Accountability Standards Board (MASB) 2023 framework. Treat the vending placement as a brand-touchpoint with five layers, each with its own spec.",
      items: [
        { number: 1, title: "Cabinet wrap (exterior vinyl)", description: "3M IJ180Cv3 or Avery MPI 1105 cast vinyl with 3M 8519 laminate. Print to ISO 12647-2 color spec; verify gym Pantone match within ΔE ≤ 3.0." },
        { number: 2, title: "Kiosk UI / touchscreen skin", description: "If the machine has a touchscreen (Cantaloupe Engage, Nayax VPOS Touch, 365 Pico), upload the gym's color palette + logo + member-app icon. Verify operator supports custom UI." },
        { number: 3, title: "Planogram", description: "Product mix mirrors the gym's brand promise — premium boutique gyms run different SKUs from 24-hour value gyms." },
        { number: 4, title: "Signage + tier-1 talkers", description: "Shelf talkers naming the trainer or class that recommends each recovery SKU (e.g., 'Featured by [Trainer Name]'). Tier-1 talkers built around the gym's class schedule." },
        { number: 5, title: "Member-app surface", description: "If app integration exists, in-app tile shows the machine, current stock, and member-priced SKUs." },
      ],
    },
    {
      heading: "2. Tier-1 operator capabilities required",
      paragraph:
        "Custom branding requires operator capabilities most route operators do not carry. Confirm each capability in writing before the wrap order is placed.",
      items: [
        { check: "In-house or contracted wrap design + production: cabinet wrap ≥ 6-year outdoor durability rating (3M MCS warranty equivalent)." },
        { check: "Touchscreen UI customization: gym logo, color palette, custom welcome animation, member-tier price display." },
        { check: "Custom planogram design: per-machine planogram, refreshed quarterly with telemetry-driven SKU changes." },
        { check: "Co-branded SKU sourcing: ability to source SKUs at gym-branded private-label tier where the gym wants it (e.g., gym-branded protein bar, gym-branded electrolyte)." },
        { check: "Class schedule integration: ability to update featured SKUs synchronized with weekly class schedule." },
        { check: "Telemetry + ROI reporting: per-SKU velocity by week, branded-SKU lift vs. unbranded baseline." },
      ],
    },
    {
      heading: "3. Brand guidelines — what the gym must hand the operator",
      paragraph:
        "Operators with no brand input default to their own corporate visuals. The gym hands over a tight brand pack to lock down execution.",
      items: [
        { label: "Logo files", value: "SVG + EPS vector files, plus 600 DPI PNG for proofs. Include reversed (white-on-dark) and monochrome versions." },
        { label: "Color system", value: "Pantone solid coated values, plus CMYK + RGB + HEX. Per-color tolerance (typical ΔE ≤ 3.0 for primary brand color)." },
        { label: "Typography", value: "Primary + secondary typefaces with foundry license verified for commercial use. Web-safe fallback for kiosk UI." },
        { label: "Photography", value: "Brand-approved photography library; vending wrap photo selections approved before printing." },
        { label: "Voice + tone", value: "Headline + body copy guidelines; vending shelf talkers and kiosk strings reviewed by the gym's marketing team." },
        { label: "Approval workflow", value: "PDF proof + physical sample (Pantone match) approved before press run." },
      ],
    },
    {
      heading: "4. Class schedule integration — making the planogram speak",
      paragraph:
        "A gym's class schedule is a leading indicator of which SKUs will sell each day. Coordinating planogram features to the schedule lifts category velocity 15-30% in pilot programs (Mindbody 2024 retail benchmark).",
      headers: ["Class category", "Featured SKU layer", "Talker copy example"],
      rows: [
        ["Strength / Lifting", "Protein bar + recovery shake + electrolyte", "Rebuild after lifts"],
        ["HIIT / CrossFit-style", "Recovery shake + BCAA + electrolyte", "Replenish electrolytes lost in 60-minute HIIT"],
        ["Yoga / Pilates / Stretching", "Hydration + light snack + collagen", "Hydrate without crash"],
        ["Cycling / Indoor cycling", "Electrolyte + carbohydrate gel", "Refuel a 45-minute ride"],
        ["Boxing / Combat conditioning", "Protein bar + electrolyte + recovery", "Replenish after high-intensity"],
      ],
    },
    {
      heading: "5. Co-branded product sourcing",
      paragraph:
        "Private-label and co-branded SKUs lift gross margin 8-15 points but require minimum order quantities and lead times. Assess feasibility before committing.",
      items: [
        { label: "Co-branded bar", value: "MOQ typically 5,000-25,000 bars per flavor; lead time 90-150 days. Co-packers: NellSon, Hearthside Food Solutions, FFC Foods, Better Bar Co." },
        { label: "Co-branded electrolyte / hydration", value: "MOQ typically 5,000-20,000 sticks or bottles. Co-packers: Ardagh, Niagara, Steaz, Hangsen." },
        { label: "Co-branded protein shake (refrigerated)", value: "MOQ typically 10,000-40,000 bottles per SKU; lead time 60-120 days. Cold-chain capacity required. Co-packers: Cott / Refresco, Pacific Foods, Real Foods." },
        { label: "When co-branding is not worth it", value: "Below 800 active members or transaction volume < 200/week per machine: branded shelf talker on a 3rd-party SKU achieves 70% of the perceived effect without MOQ commitment." },
      ],
    },
    {
      heading: "6. ROI framework — measuring the lift",
      paragraph:
        "Custom branding adds upfront cost: wrap design + production ($800-$2,500 per machine), UI customization ($500-$2,000 setup), co-branded SKU NRE ($2,500-$15,000 per SKU). The lift comes from velocity, retention, and ancillary revenue.",
      headers: ["Metric", "Baseline (no branding)", "Branded program target", "Measurement source"],
      rows: [
        ["Avg. weekly transactions/machine", "200-400", "+20% to +40%", "Operator telemetry"],
        ["Avg. unit revenue (AUR)", "$2.40-$3.10", "+5% to +15%", "Operator telemetry"],
        ["Member NPS — F&B mention rate", "Baseline survey", "+10 to +20 points", "Quarterly member survey"],
        ["Brand-app engagement", "Baseline", "+15% to +30%", "Member-app analytics"],
        ["Net margin contribution (annual)", "Baseline commission", "+$3K-$12K per machine annually", "Commission report"],
      ],
    },
    {
      heading: "7. Implementation timeline",
      headers: ["Phase", "Duration", "Owner"],
      rows: [
        ["Brand pack handoff to operator", "1-2 weeks", "Gym marketing"],
        ["Design proofs (3 rounds)", "3-4 weeks", "Operator + gym"],
        ["Wrap production + UI build", "3-5 weeks", "Operator"],
        ["Wrap install + UI go-live", "1-2 weeks", "Operator"],
        ["Co-branded SKU production (if applicable)", "12-20 weeks", "Operator + co-packer"],
        ["Class-schedule planogram integration", "2-4 weeks", "Operator + gym programming"],
        ["Soft launch + measurement baseline", "30 days", "Operator + gym"],
      ],
    },
  ],
  footer:
    "This pack is informational. LetUsVending can introduce operators equipped to deliver custom branded gym vending programs across the U.S.",
});

console.log("wrote "+"custom-gym-vending-branding");
