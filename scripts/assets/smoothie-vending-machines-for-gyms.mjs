import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "smoothie-vending-machines-for-gyms",
  assetType: "playbook",
  title: "Smoothie Vending Decision Playbook",
  subtitle: "Equipment vs. staffed bar vs. RTD — comparison, decision framework, and operational design",
  intro:
    "Smoothie programs in fitness facilities fall into one of three operational models: automated smoothie vending equipment, staffed smoothie bar, or RTD (ready-to-drink) refrigerated cooler. Each has materially different capex, labor, member-experience, and revenue characteristics. This playbook codifies the decision framework, the equipment specifications, the food-safety considerations, and the operating models so a club can pick the right path for its size, demographic, and growth strategy.",
  sections: [
    {
      heading: "1. Three smoothie program models",
      paragraph:
        "The model decision drives everything downstream: equipment, staffing, food-safety scope, ingredient supply chain, and pricing.",
      headers: ["Model", "Capex", "Labor", "Per-cup cost basis", "Best fit"],
      rows: [
        ["Automated smoothie vending", "$25K-$60K equipment + install", "Operator route only (no on-site labor)", "$2.50-$4.50 cost; $5.50-$8.50 retail", "Mid-size to large clubs without retail-bar space"],
        ["Staffed smoothie bar", "$8K-$25K equipment + buildout", "1.5-3.0 FTE coverage during peak hours", "$2.00-$4.00 cost; $6.50-$10.50 retail", "Boutique and premium clubs with retail floor space"],
        ["RTD refrigerated cooler", "$3K-$8K cooler + initial inventory", "Operator route only", "$2.50-$4.00 cost; $4.50-$7.50 retail", "Smaller clubs, off-peak hours, or supplement to other models"],
      ],
    },
    {
      heading: "2. Automated smoothie vending — equipment specification",
      items: [
        { label: "Equipment OEM", value: "f'real Foods (Rich Products), JuiceBot, Aitech Smoothie Robot, Botrista, Briggo-class machines. Verify NSF Standard 169 (mobile food and beverage equipment) and UL listing." },
        { label: "Ingredient cold-chain", value: "Frozen fruit and protein blocks stored at 0°F to -10°F per FDA Food Code 3-501.11. Internal storage 24-48 hour run capacity; replenishment requires route crew with freezer-transit vehicle." },
        { label: "NSF / ANSI standards", value: "NSF/ANSI 4 (commercial cooking equipment), NSF/ANSI 14 (plastic piping for ingredient lines), NSF/ANSI 51 (food-equipment materials), NSF/ANSI 169 (special-purpose food equipment). Compliance verified at install." },
        { label: "Cleaning cycle", value: "Automated CIP (clean-in-place) cycle daily; manual deep-clean weekly per FDA Food Code 4-602.11 (food-contact surface frequency). Cleaning log retained for health-inspection." },
        { label: "Allergen-cross-contact management", value: "Multi-flavor machines share ingredient lines and dispensers; cross-contact unavoidable. FALCPA allergen disclosure on every recipe and on machine face. Members with severe allergies should not use multi-flavor automated equipment." },
        { label: "Payment + telemetry", value: "Cashless EMV + venue wallet integration. Cantaloupe Seed Pro, Nayax VPOS, or comparable. Telemetry includes inventory levels per ingredient, dispenser cycle counts, refrigeration temp." },
      ],
    },
    {
      heading: "3. Staffed smoothie bar — equipment and operations",
      items: [
        { label: "Blender equipment", value: "Vitamix Quiet One, Blendtec Stealth 885, Hamilton Beach HBH950 commercial blenders. ANSI/UL 763 listed. Sound rating < 70 dBA for member-floor placement." },
        { label: "Refrigeration", value: "Under-counter refrigerator (True TUC-27) for fresh fruit and protein; under-counter freezer (True TUC-27F) for frozen ingredients. POS-integrated inventory management." },
        { label: "Workstation", value: "ANSI/NSF 2 food-prep counter, 3-compartment sink for utensil washing (per FDA Food Code 4-501.18), hand-wash station within 25 feet, dedicated waste and recycling." },
        { label: "POS and inventory", value: "Square for Restaurants, Toast, or Lightspeed Restaurant POS integrated with club POS for member-account billing." },
        { label: "Staffing", value: "1.5-3.0 FTE coverage of peak hours (6-9 AM, 11 AM-2 PM, 5-8 PM weekdays; 8-11 AM Saturday). Staff trained in FDA Food Code 2-103.11 person-in-charge responsibilities. ServSafe Manager certification for shift lead." },
        { label: "Food-safety scope", value: "Full FDA Food Code retail-food establishment scope: handwashing, sanitizer concentration verification, temp logs, allergen-control plan, written cleaning schedule." },
      ],
    },
    {
      heading: "4. RTD refrigerated cooler — equipment and program",
      items: [
        { label: "Cooler equipment", value: "True GDM-23 or True T-49 glass-door cooler. Internal temp 35-40°F per FDA Food Code 3-501.16. Cashless payment terminal mounted adjacent (or wireless reader)." },
        { label: "RTD smoothie brands", value: "Premier Protein, Iconic Protein, Owyn, Naked Pressed, Suja Cold-Pressed, Bolthouse Farms Protein Plus. All shelf-stable refrigerated; allergen labeling per FALCPA on each bottle." },
        { label: "Cold-chain compliance", value: "Internal-temp alarm at > 41°F per FDA Food Code 3-501.16; product disposal if > 4 hour excursion. Temp log retained for inspection." },
        { label: "Stocking", value: "Operator route service 2-3× per week typical; high-volume clubs may require daily. Telemetry alerts trigger top-off when any SKU drops below 30%." },
        { label: "Pricing", value: "$4.50-$7.50 per bottle; comparable to retail convenience-store pricing. Members typically tolerate this price point for grab-and-go." },
        { label: "Pros and cons vs. automated/staffed", value: "Lower capex, no labor, no food-safety complexity. Trade-off: limited customization, brand-portfolio rather than member-created smoothies." },
      ],
    },
    {
      heading: "5. Decision framework",
      headers: ["Club attribute", "Automated vending", "Staffed bar", "RTD cooler"],
      rows: [
        ["Member count < 500", "Marginal — capex hard to justify", "Marginal — labor hard to justify", "Strong fit"],
        ["Member count 500-2,000", "Strong fit", "Strong fit if retail floor space exists", "Strong fit as supplement"],
        ["Member count 2,000+", "Strong fit", "Strong fit with multiple-station footprint", "Strong fit as 24/7 supplement"],
        ["Boutique/premium brand", "Marginal — staffed expected", "Strong fit", "Marginal — RTD perceived as convenience-store quality"],
        ["24/7 access", "Strong fit", "Misfit — staffing hours limited", "Strong fit"],
        ["Retail floor space available", "Strong fit if floor space available", "Required", "Compact footprint"],
        ["Member smoothie-customization expectation", "Some customization (4-8 recipes)", "Full customization", "Brand-portfolio only"],
        ["Allergen-control needs (severe-allergy members)", "Risk — shared lines", "Best — controlled prep", "Best — sealed packaging"],
      ],
    },
    {
      heading: "6. Food safety and regulatory considerations",
      items: [
        { check: "Local public-health permit required for staffed bar and most automated smoothie equipment per state food code (e.g., California Retail Food Code, NYC Health Code Art. 81, Texas Food Establishment Rules)." },
        { check: "Annual or semi-annual health inspection scheduled by local health department." },
        { check: "FALCPA allergen disclosure on every recipe and product. Severe-allergy members directed to RTD-only or to staffed bar with documented prep controls." },
        { check: "FDA Food Code 3-501.11 frozen-ingredient temp ≤ 0°F; FDA Food Code 3-501.16 refrigerated-ingredient temp ≤ 41°F." },
        { check: "Operator (vending or staffed) carries general liability + product-liability insurance with the club named additional-insured." },
        { check: "Recall and product-withdrawal procedure documented; ingredient and RTD product lots tracked for traceability." },
      ],
    },
    {
      heading: "7. Operating model and economics",
      headers: ["Metric", "Automated vending", "Staffed bar", "RTD cooler"],
      rows: [
        ["Typical monthly revenue per program", "$3K-$15K", "$8K-$40K", "$1K-$5K"],
        ["Cost of goods", "30-40%", "30-40%", "50-60%"],
        ["Labor (loaded)", "5% (route only)", "30-40%", "5% (route only)"],
        ["Equipment depreciation (60 months)", "10-15%", "5-10%", "5-8%"],
        ["Operator commission (or club share)", "15-25% to club", "Variable — often club operates", "10-15% to club"],
        ["Member NPS contribution", "+5-8 points", "+10-15 points", "+3-5 points"],
        ["Time to payback", "18-30 months", "12-24 months (if staffed well)", "6-12 months"],
      ],
    },
  ],
  footer:
    "This playbook is a working decision reference. Calibrate the model choice to your club size, brand position, retail floor space, member demographic, and local food-safety regulation.",
});

console.log("wrote "+"smoothie-vending-machines-for-gyms");
