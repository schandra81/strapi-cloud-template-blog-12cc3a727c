import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "pod-free-office-coffee-solutions",
  assetType: "template",
  title: "Pod-Free Office Coffee Specification Template",
  subtitle: "Volume thresholds, equipment selection, operator capability checks, and ESG disclosure",
  intro:
    "Use this template when an office is transitioning away from single-serve pod brewers (K-Cup, Nespresso OriginalLine, Lavazza Modo Mio) for ESG, cost, or service-quality reasons. Each section is capability-framed — operator capabilities should be confirmed in writing before contract execution. Numbers below reflect SCA brewing standards, NSF/ANSI 4 commercial brewer certification, and typical office equipment ratings.",
  sections: [
    {
      heading: "1. Volume threshold + mechanism selection",
      paragraph:
        "Pod brewers are economical only at very low volume per machine. Beyond ~10 cups/day/machine, batch brew, bean-to-cup, or interactive brewing wins on cost, quality, and waste. Use this matrix to select the right pod-free mechanism.",
      headers: ["Daily cups", "Headcount served", "Recommended mechanism", "Estimated cost/cup"],
      rows: [
        ["Under 30", "10-30", "French press + electric kettle, or 4-cup auto-drip", "$0.35-$0.60"],
        ["30-90", "25-75", "8-12 cup batch brewer with thermal carafe (Bunn, Wilbur Curtis)", "$0.40-$0.65"],
        ["90-250", "75-200", "Bean-to-cup superautomatic (Franke A600/A800, Schaerer Coffee Soul, WMF 5000S+)", "$0.45-$0.75"],
        ["250-500", "200-400", "Dual bean-to-cup, or batch brewer + manual espresso", "$0.50-$0.85"],
        ["500+", "400+", "Bean-to-cup line + batch brewing + interactive bar", "$0.55-$1.10"],
      ],
    },
    {
      heading: "2. Equipment specification",
      items: [
        { label: "Bean-to-cup superautomatic", value: "Franke A600 / A800 / SB1200, Schaerer Coffee Soul, WMF 5000S+, JURA GIGA X8, or comparable. NSF/ANSI 4 certified. 220V/30A dedicated circuit. Plumbed water with 3-stage filtration. Integrated milk system (foam + texture)." },
        { label: "Batch brewer", value: "Bunn ITCB-DV, Wilbur Curtis Gemini IntelliFresh, Fetco CBS-2131XTS, or comparable. Thermal server preferred over hot-plate to preserve coffee quality. NSF/ANSI 4 certified." },
        { label: "Manual brewing", value: "Hario V60 02, Chemex 6-cup, French press, AeroPress. Gooseneck kettle with variable temp control 135-212°F." },
        { label: "Grinder", value: "On-demand burr grinder (Mahlkönig E65S GBW, Mazzer Super Jolly, Baratza Sette 270) for any non-pre-ground program." },
        { label: "Water + filtration", value: "Plumbed filtration (Everpure 4FC-S, 3M MC2) targeting 75-150 ppm TDS per SCA water standard. Softener for hard-water markets (> 7 grains/gallon)." },
        { label: "Refrigeration", value: "Undercounter or countertop dairy refrigerator, 40°F or below per FDA Food Code 3-501.16. NSF/ANSI 7 certified." },
      ],
    },
    {
      heading: "3. Operator capability checks",
      items: [
        { check: "Operator should attest to NSF/ANSI 4-certified equipment in inventory + access to certified service technicians within 24 hours." },
        { check: "Operator should attest to preventive maintenance cadence (bean-to-cup PM monthly; descale every 60-90 days; group head + brew unit cleaning daily; certified tech visit every 6 months)." },
        { check: "Operator should attest to specialty-grade bean sourcing (SCA cupping score ≥ 82) with roast date ≤ 14 days from delivery, with origin transparency and rotation plan." },
        { check: "Operator should attest to recycling/composting program for spent grounds (target 100% diversion from landfill) and for packaging." },
        { check: "Operator should provide proof of $2M general liability, $1M umbrella, additional-insured endorsement, and food product liability ≥ $1M." },
        { check: "Operator should attest to ESG reporting capability: kg coffee, kg waste diverted, kWh/cup, gallons water/cup, on a quarterly cadence." },
      ],
    },
    {
      heading: "4. ESG impact vs pod baseline",
      paragraph:
        "Pod-to-pod-free conversions are a common ESG quick win. Typical impact metrics below reference an average mid-size office (200 cups/day) transitioning from K-Cup or Nespresso to bean-to-cup. Operator should attest to actual figures in writing.",
      headers: ["Metric", "Pod baseline (annual)", "Pod-free (annual)", "Reduction"],
      rows: [
        ["Plastic + aluminum pod waste", "~600 lbs", "~0 lbs (compostable filters only)", "100%"],
        ["Cost per cup, all-in", "$0.65-$0.85", "$0.45-$0.65", "20-30%"],
        ["Energy use per cup (kWh)", "~0.04", "~0.025", "~38%"],
        ["Grounds diverted (composted)", "Variable, often <20%", "Target 100%", "+80 pts"],
        ["Scope 3 emissions per cup (kg CO2e)", "0.10-0.14", "0.04-0.08", "~50%"],
      ],
    },
    {
      heading: "5. Bean + supply specification",
      items: [
        { label: "Bean grade", value: "SCA cupping score ≥ 82 (specialty grade). Whole bean in 5 lb or 12 oz vacuum bags with one-way valve. Roast date printed; rotate FIFO within 21 days of roast." },
        { label: "Decaf", value: "Swiss Water Process or CO2-process. Specialty grade ≥ 82. Separate hopper labeled DECAF." },
        { label: "Milk + alternatives", value: "Whole, 2%, oat (Oatly Barista), almond, soy. Refrigerated ≤ 40°F. Daily change-out per FDA Food Code; line cleaning per bean-to-cup OEM spec." },
        { label: "Sweeteners + flavoring", value: "Sugar, sugar-free, raw, brown. Vanilla, hazelnut, caramel syrups (Torani, Monin) in pump bottles or integrated bean-to-cup syrup module." },
        { label: "Disposables", value: "Compostable PLA cups + lids (BPI certified) for transition phase; reusable host-branded ceramic mugs as the steady-state goal." },
      ],
    },
    {
      heading: "6. Subsidy + pricing model",
      headers: ["Model", "Host pays", "Employee pays", "Best fit"],
      rows: [
        ["Fully subsidized", "All bean + equipment + service", "$0 / free", "HQ, Class-A amenity, recruiting-led programs"],
        ["Partially subsidized", "Equipment + service + first 1-2 cups/day", "$0.50-$1.50 per additional cup", "Mid-size HQ, ESG-led conversions"],
        ["Concession", "Space + utilities only", "$2.00-$4.00 per cup", "Multi-tenant buildings, retail-adjacent"],
        ["Hybrid", "Drip + brewed coffee free; specialty paid", "$1-$3 for specialty (espresso, oat-milk drinks)", "Cost-controlled HQ environments"],
      ],
    },
    {
      heading: "7. Service KPIs + quarterly review",
      items: [
        { check: "Cups served per day vs forecast." },
        { check: "Bean usage (lbs/week) and waste rate (target < 5%)." },
        { check: "Grounds diverted to compost (lbs/quarter)." },
        { check: "Equipment uptime (target ≥ 98%); descale + PM log." },
        { check: "Employee satisfaction pulse (target NPS ≥ 50)." },
        { check: "Cost per cup trending vs budget; bean origin rotation." },
        { check: "ESG dashboard: kWh/cup, L water/cup, kg CO2e/cup, % waste diverted." },
      ],
    },
  ],
  footer:
    "This template is informational and not legal advice. Confirm operator capabilities through reference calls and written attestation. Local plastic-waste and composting ordinances (e.g., NYC, Seattle, San Francisco, Boulder) may impose additional disposal requirements above the federal floor.",
});

console.log("wrote " + "pod-free-office-coffee-solutions");
