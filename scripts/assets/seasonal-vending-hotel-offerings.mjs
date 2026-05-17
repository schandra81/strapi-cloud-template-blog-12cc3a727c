import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "seasonal-vending-hotel-offerings",
  assetType: "playbook",
  title: "Hotel Seasonal Vending Rotation Playbook",
  subtitle: "Seasonal calendar, property-type patterns, LTO framework, communication kit, quarterly review",
  intro:
    "Hotel demand isn't constant — convention occupancy peaks Q2/Q3, leisure peaks summer and winter holidays, business travel peaks midweek shoulder seasons. A planogram tuned to annual average leaves 8-12% revenue on the table at seasonal peaks. This playbook codifies how to rotate planograms with the seasonal demand curve.",
  sections: [
    {
      heading: "1. Seasonal calendar — four windows",
      headers: ["Window", "Months", "Demand pattern", "Planogram weight shift"],
      rows: [
        ["Q1 wellness window", "Jan-Mar", "New-year resolution + winter recovery; lower base traffic at urban properties", "+8% healthy / functional beverage; -5% candy"],
        ["Q2 convention + spring break", "Apr-Jun", "Convention occupancy peaks; resort spring-break peaks", "+10% sports/recovery beverage; +5% grab-and-go meal"],
        ["Q3 summer peak", "Jul-Sep", "Family leisure peaks; resort + drive-to properties at full occupancy", "+12% water; +8% kid SKUs; +5% sunscreen/sundry"],
        ["Q4 holiday window", "Oct-Dec", "Holiday-themed LTO opportunity; corporate travel slows mid-December", "+8% indulgence / holiday LTO; +5% comfort food"],
      ],
    },
    {
      heading: "2. Property-type patterns",
      paragraph:
        "Hotel categories follow different seasonal curves. The planogram rotation framework must reflect the property type.",
      items: [
        { label: "Urban full-service / convention", value: "Q2 + Q3 convention peaks; Friday-Saturday leisure overlay. Beverage weight high year-round; meal-replacement spikes during convention." },
        { label: "Resort / leisure", value: "Q3 + holiday peaks; kid SKUs critical Q3; pool deck water demand 2-3x lobby." },
        { label: "Select-service / midscale", value: "Midweek business travel pattern; flat seasonal curve; rotation focused on holiday LTO not full reweighting." },
        { label: "Airport / commuter", value: "Flat curve; grab-and-go meal weighted year-round; weather-event spikes (winter storm shelter-in-place)." },
        { label: "Extended-stay", value: "Pantry-style program; rotation emphasizes seasonal cooking ingredients (Q4 baking, Q3 grilling)." },
      ],
    },
    {
      heading: "3. Limited-Time-Offer (LTO) framework",
      paragraph:
        "LTOs drive 5-12% incremental velocity at peak windows when executed against the right calendar. Operator should be equipped to propose, source, and rotate LTOs without long lead time.",
      items: [
        { number: 1, title: "LTO proposal cadence", description: "Operator proposes LTO slate 60 days before window. Property F&B / GM approves 45 days out. Operator sources + delivers 30 days out." },
        { number: 2, title: "LTO slot allocation", description: "Reserve 2-4 facings per machine for LTO; 10-15% of pantry shelving. Rotate every 8-12 weeks." },
        { number: 3, title: "Theme alignment", description: "Q1 wellness LTO (functional beverage, protein); Q2 sports/recovery; Q3 family + summer; Q4 holiday + indulgence + nostalgia." },
        { number: 4, title: "Pricing flexibility", description: "LTOs priced at premium (+10-20% vs base planogram) capture demand willingness without diluting core-SKU margins." },
        { number: 5, title: "Performance gate", description: "LTO retained if velocity ≥ 0.7x machine average; promoted to permanent if ≥ 1.2x." },
      ],
    },
    {
      heading: "4. Communication kit",
      items: [
        { number: 1, title: "Signage refresh", description: "Seasonal machine-face overlay (Q1/Q2/Q3/Q4 themes). Brand-template lobby and elevator-lobby pantry signage updated each rotation." },
        { number: 2, title: "In-room compendium update", description: "Digital compendium refreshed at each rotation; print compendium where the property still uses one updated quarterly." },
        { number: 3, title: "In-room TV welcome slide", description: "Brand-template TV channel slide highlighting current LTO." },
        { number: 4, title: "Front-desk briefing", description: "Front-desk + concierge briefed on current LTO themes so they can recommend during guest interactions." },
        { number: 5, title: "Guest survey integration", description: "Brand-survey verbatims tagged for amenity mentions; rotation feedback fed back into next-window proposal." },
      ],
    },
    {
      heading: "5. Quarterly review checklist",
      items: [
        { check: "Per-SKU velocity for completed window vs planogram target" },
        { check: "LTO performance (retain / promote / drop decisions)" },
        { check: "Refund volume + reason codes for the window" },
        { check: "Brand-survey verbatim review (amenity-tagged comments)" },
        { check: "Next-window LTO slate proposal review" },
        { check: "Signage + communication kit refresh sign-off" },
        { check: "Action items + owner + due date" },
      ],
    },
    {
      heading: "6. Regulatory + brand-standard references",
      items: [
        { label: "FDA Food Code (state-adopted)", value: "TCS foods at 41°F or below refrigerated, 135°F or above hot. Rotation must not displace temperature-controlled SKUs into non-compliant equipment." },
        { label: "FALCPA + FASTER Act allergen labels", value: "Each rotated SKU labeled for the FDA Top 9 allergens. Allergen-summary signage updated at each rotation." },
        { label: "Brand standard (BSA / OS&E / Hallmarks)", value: "Seasonal LTOs reviewed against franchise brand-standards before in-room placement. Property GM holds approval authority." },
        { label: "ADA Title III", value: "Seasonal signage maintains ADA Section 703 contrast + character height; pantry-shelf reach-range preserved." },
      ],
    },
  ],
  footer:
    "This playbook is informational and not brand-standard advice. Coordinate with your franchise representative and brand-standards liaison before contracting LTO programs. LetUsVending is equipped to arrange operators with documented seasonal-rotation capability.",
});

console.log("wrote "+"seasonal-vending-hotel-offerings");
