import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "seasonal-airport-vending-trends",
  assetType: "playbook",
  title: "Airport Vending Seasonal Playbook",
  subtitle: "Calendar pivots, planogram shifts, and surge crew planning",
  intro:
    "Airport vending demand swings 30-60% across the calendar — Thanksgiving Wednesday is not Memorial Day Monday and neither is a Tuesday in February. This playbook codifies the calendar pivots, planogram shifts, and surge crew planning LetUsVending operator partners are equipped to apply. Referenced against BTS (Bureau of Transportation Statistics) air carrier seasonal traffic data, TSA daily checkpoint throughput, ACI-NA passenger forecasts, FDA Food Code 2022 cold-chain, and TSA 49 CFR 1542 / 1544 airside operations.",
  sections: [
    {
      heading: "1. Annual demand calendar (typical hub)",
      headers: ["Period", "TSA throughput vs. baseline", "Vending velocity", "Operations posture"],
      rows: [
        ["Jan post-NYE", "-20% to -10%", "-25%", "Reduced restock cadence; planogram refresh window"],
        ["Feb (Presidents' Day + Valentine's week)", "Baseline", "Baseline", "Standard operations"],
        ["Mar (spring break peak weeks 2-4)", "+10% to +25%", "+20%", "Surge crew partial; family-friendly SKU lift"],
        ["Apr-May", "+5% to +10%", "+10%", "Standard + warm-weather beverage planogram"],
        ["Memorial Day weekend", "+25% to +40%", "+35%", "Full surge; pre-stage cold-food + water"],
        ["Jun-Jul (summer family travel peak)", "+15% to +30%", "+25%", "Sustained surge cadence; daily airside top-off"],
        ["Jul 4 weekend", "+30% to +45%", "+40%", "Full surge; planogram peak"],
        ["Aug back-to-school", "0% to +5%", "0%", "Family-travel taper; college-student rotation"],
        ["Sep-Oct", "Baseline", "-5%", "Planogram refresh + cold-weather pivot prep"],
        ["Thanksgiving (Tue-Sun)", "+40% to +60%", "+50%", "Largest single-period surge; full surge crew"],
        ["Dec (Christmas / New Year travel)", "+30% to +50%", "+40%", "Full surge; weather IROPS readiness peak"],
      ],
    },
    {
      heading: "2. Planogram seasonal pivots",
      items: [
        { number: 1, title: "Q1 (Jan-Mar)", description: "Lower indulgent share, higher protein bar + functional beverage share (resolutions cycle). Healthy-share endcap +5 pp facings vs. baseline." },
        { number: 2, title: "Q2 (Apr-Jun)", description: "Hydration weighting — bottled water + sports drinks + sparkling water +10-15% facings. Family-travel snack pivot in June (graham snacks, fruit pouches, kid-friendly SKUs)." },
        { number: 3, title: "Q3 (Jul-Sep)", description: "Peak summer — water + electrolyte beverages prominent. August back-to-school adds protein bar + caffeinated coffee SKUs as business travel resumes." },
        { number: 4, title: "Q4 (Oct-Dec)", description: "Comfort + indulgence pivot — chocolate, premium candy, hot beverages, comfort snacks. Holiday-themed SKUs feature in Nov-Dec. Hydration remains high due to dry cabin air + alcohol consumption." },
      ],
    },
    {
      heading: "3. Surge crew planning",
      paragraph:
        "Surge crew = SIDA-badged route personnel staged for the specific peak windows below. Badge-issuance lead time means surge hiring begins 60-90 days before the event.",
      headers: ["Event window", "Surge crew uplift", "Pre-stage start", "Coordination"],
      rows: [
        ["Spring break (Mar wk 2-4)", "+25%", "T-30 days", "ACI-NA forecast + airline schedule"],
        ["Memorial Day weekend", "+50%", "T-45 days", "Airport ops + master concessionaire"],
        ["July 4 weekend", "+60%", "T-45 days", "Airport ops"],
        ["Thanksgiving (Tue-Sun)", "+80% to +100%", "T-60 days", "Airport ops + airlines (IROPS readiness)"],
        ["Christmas / New Year", "+60% to +80%", "T-75 days", "Airport ops + airlines"],
      ],
    },
    {
      heading: "4. IROPS overlay",
      items: [
        { check: "Winter weather diversion plans coordinated with airline + airport ops Oct-Mar" },
        { check: "Hurricane / tropical-system diversion plans coordinated Jun-Nov" },
        { check: "Telemetry dashboard escalation: every machine status visible to operations center" },
        { check: "Surge crew on-call rotation during IROPS season (Thanksgiving, December, hurricane season)" },
        { check: "Pre-positioned bottled water + non-perishable SKU caches landside for rapid airside re-supply" },
        { check: "Free-vend toggle ready for airline-issued passenger vouchers" },
        { check: "Post-event report within 5 business days per airline / airport concessions office" },
      ],
    },
    {
      heading: "5. Healthy-share + dietary coverage by season",
      items: [
        { label: "Year-round floor", value: "Healthy-share ≥35% facings; ≥1 gluten-free / dairy-free / vegan per category. FALCPA + FASTER Act labeling on every SKU." },
        { label: "Q1 emphasis", value: "Protein bar + functional beverage + low-sugar — resolution cycle lifts healthy-share velocity 10-20% in Jan-Feb." },
        { label: "Q2-Q3 emphasis", value: "Hydration + low-sodium snack + grab-and-go fruit — summer travel heat-management." },
        { label: "Q4 emphasis", value: "Indulgent allowed but healthy-share endcap stays prominent; tea + coffee dietary coverage (oat / almond / soy non-dairy) emphasized for holiday travel comfort." },
        { label: "Quarterly RDN attestation", value: "Registered dietitian review every quarter aligned with the planogram pivot." },
      ],
    },
    {
      heading: "6. Cold-chain seasonal risk",
      items: [
        { number: 1, title: "Summer concourse heat load", description: "Ambient airside temperatures can rise during peak weekends; cold-chain margin shrinks. Telemetry alert threshold tightened (alert at 40°F vs. 41°F) during Jun-Aug." },
        { number: 2, title: "Winter holding-area cold draft", description: "Door open + walk-on jetbridges can push cold-food machines below 32°F — datalogger captures cold-side excursion too." },
        { number: 3, title: "Loss prevention during surge", description: "Higher throughput + faster restock cycle = higher cold-chain transfer risk. Insulated totes + ice packs + datalogger required during surge restocks per FDA Food Code 2022 §3-501.16." },
        { number: 4, title: "QA log retention", description: "Cold-chain log retained 2-3 years aligned to FDA + airport health department audit cadence." },
      ],
    },
    {
      heading: "7. LetUsVending capability statement",
      paragraph:
        "Through the LetUsVending operator network we can match an airport opportunity with operator partners equipped to run BTS-aligned demand planning, seasonal planogram pivots, SIDA-badged surge crew, and IROPS readiness summarized above. Engagement scope is set per opportunity after a discovery call with the airport concessions office and master concessionaire.",
    },
  ],
  footer:
    "Informational reference. Confirm SIDA badging + ACDBE + sustainability + health-department requirements with the airport authority. Citations current at publication.",
});

console.log("wrote "+"seasonal-airport-vending-trends");
