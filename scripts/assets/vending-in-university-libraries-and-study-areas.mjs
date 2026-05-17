import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-in-university-libraries-and-study-areas",
  assetType: "pack",
  title: "University Library AI Vending Pack",
  subtitle: "Placement criteria, equipment spec, finals-week SOP, campus card integration checklist, library administration approval framework",
  intro:
    "Library + study-area AI coolers face a unique set of constraints: silent operation, food-policy alignment, finals-week surge, and the library administration's approval process. This pack bundles placement criteria, equipment spec, finals-week operating SOP, campus-card integration checklist, and library administration approval framework.",
  sections: [
    {
      heading: "1. Placement criteria",
      items: [
        { check: "Foot traffic ≥ 500 unique students/day during academic term (gate count or building-access log)" },
        { check: "Operating hours: cooler runs ≥ 18 hr/day during term; 24/7 during finals week if library extends hours" },
        { check: "Location: lobby, atrium, or designated food-allowed zone — NOT inside silent study area or stacks" },
        { check: "Acoustics: cooler ≤ 45 dBA at 3 ft (compressor + door + vision system combined); confirmed in equipment spec" },
        { check: "ADA Section 308: 30x48 in clear floor space, operable parts 15-48 in AFF, ≤ 5 lbf operating force, accessible refund flow" },
        { check: "Library food-policy alignment: confirm cooler placement does not contradict 'no food in library' policy (typical placements: lobby + designated cafe-adjacent zone)" },
        { check: "Disposal: trash + recycling station within 25 ft of cooler; library facilities coordinates emptying cadence" },
        { check: "Connectivity: cellular ≥ -95 dBm OR Ethernet drop on segmented VLAN; library Wi-Fi as backup" },
      ],
    },
    {
      heading: "2. Equipment spec — library-optimized",
      paragraph:
        "Library AI coolers should be specified for low-noise operation, low-light visibility, and clean cabinet aesthetic.",
      items: [
        { label: "Noise floor", value: "≤ 45 dBA at 3 ft (compressor + door close + vision-system fan). Operator should attest to spec." },
        { label: "Compressor + refrigerant", value: "Variable-speed compressor preferred; refrigerant GWP < 700 (R-290 or R-744 preferred); ENERGY STAR Tier-1 or comparable." },
        { label: "Lighting", value: "Dimmable interior LED 4000K product-presentation; auto-dim 20% during overnight hours; no glare into adjacent study area." },
        { label: "Cabinet finish", value: "Brushed stainless, matte black, or wood-grain laminate; anti-fingerprint coating; ADA-compliant operable parts." },
        { label: "Vision system", value: "Edge inference; latency < 2 sec end-to-end; per-SKU accuracy ≥ 99%; mis-charge dispute window 24-48 hr." },
        { label: "Payment + identity", value: "Apple Pay, Google Pay, contactless EMV, campus card SDK tap target; PCI-DSS 4.0 SAQ-B-IP." },
        { label: "Cabinet footprint", value: "36-60 in wide; depth 30 in; fits typical library lobby footprint without disrupting traffic flow." },
      ],
    },
    {
      heading: "3. Finals-week operating SOP",
      paragraph:
        "Finals week drives 2-3x normal cooler volume and longer operating hours. Plan extra cadence + dedicated coverage.",
      items: [
        { number: 1, title: "T-14 days: planogram refresh for finals", description: "Operator pulls 30-day velocity, weights toward caffeine + protein + study-fuel SKUs; healthy-share floor maintained; cabinet wrap signage refreshed." },
        { number: 2, title: "T-7 days: restock cadence doubled", description: "2x/week becomes daily during finals; telemetry-triggered top-offs same-day; on-call operator route during overnight hours." },
        { number: 3, title: "T-7 days: comms + signage", description: "'24/7 fuel for finals' signage at cooler + library lobby; refund + escalation QR card on every lobby table." },
        { number: 4, title: "Finals week: dedicated coverage", description: "Operator account manager on-call for the week; library admin notified of dispatch number for after-hours issues." },
        { number: 5, title: "Finals week: free-water program", description: "If campus funds, free water during peak study hours (typically 8 PM - 2 AM); QR redemption tracked." },
        { number: 6, title: "T+3 days post-finals: review", description: "Velocity + uptime + refund rate reviewed; planogram refreshed for break period; capital + equipment audit." },
      ],
    },
    {
      heading: "4. Library-optimized planogram (65 SKUs)",
      paragraph:
        "Library planogram weights quiet snack + caffeine + hydration + protein. Avoid strong-odor or noisy-packaging SKUs.",
      items: [
        { label: "Caffeine + cold brew — 24%", value: "RTD cold brew, iced espresso, kombucha-caffeine blend, premium tea, low-cal energy drink. $2.50-$5.00." },
        { label: "Hydration — 20%", value: "Bottled water, sparkling water, electrolyte, coconut water. $1.50-$3.50." },
        { label: "Quiet snack — 18%", value: "Soft snacks (no crunch peak): pretzel pillows, jerky, soft-bake cookie, banana bread, fruit + nut bar. $2.00-$4.00." },
        { label: "Grab-and-go meal — 15%", value: "Sandwich, hummus + veg cup, salad bowl, sushi tray. $5.50-$10.00." },
        { label: "Protein + bar — 12%", value: "RXBAR, Quest, KIND, Built, Aloha. $2.50-$4.00." },
        { label: "Dairy + fresh — 6%", value: "Greek yogurt, cottage cheese, cheese stick, whole fruit. $1.50-$3.50." },
        { label: "Indulgent + reward — 5%", value: "Premium chocolate, single-serve cookie, candy bar. $2.50-$4.50." },
      ],
    },
    {
      heading: "5. Campus-card integration checklist",
      items: [
        { check: "Campus card vendor (Atrium / Blackboard / CBORD / TouchNet) SDK certified" },
        { check: "Tender support: dining dollars, declining balance, flex; meal exchange if applicable" },
        { check: "Library-specific funding line (if applicable): library dean or student-affairs sub-account for free-water / finals-week programs" },
        { check: "FERPA DPA signed by operator; covers student-ID data via campus card SDK" },
        { check: "Settlement: daily file to campus card vendor; library admin receives monthly summary if separate funding line" },
        { check: "Apple Pay + Google Pay alongside campus card target" },
        { check: "Refund flow: QR + SMS refund flow to original tender; ≤ 24 hr credit-back; library admin sees refund dashboard for cooler placements in library" },
        { check: "Loyalty (optional): healthy-share double-points during finals; library partnership messaging" },
      ],
    },
    {
      heading: "6. Library administration approval framework",
      paragraph:
        "Library administration approves cooler placement on alignment with food policy, acoustics, aesthetics, and student-life calendar. Use the framework below to navigate approval.",
      items: [
        { label: "Initial pitch", value: "Auxiliary services + operator present placement plan to library dean + dean of student services; covers volume forecast, food-policy alignment, noise spec, capital + commission structure." },
        { label: "Food-policy alignment", value: "Cooler placement in 'food-allowed' zones (lobby, atrium, cafe-adjacent); operator confirms allergen labeling + cabinet cleanliness cadence." },
        { label: "Acoustics + aesthetics", value: "Equipment spec sheet attached; ≤ 45 dBA at 3 ft attested; cabinet wrap submitted to library admin + campus brand standards for approval." },
        { label: "Trash + recycling", value: "Library facilities confirms trash + recycling station placement; operator agrees to twice-weekly trash audit during high-traffic periods." },
        { label: "Pilot proposal", value: "Single-cooler pilot for 90 days before scaling; KPI scorecard (uptime, refund, food-policy incidents, complaints); pilot review with library admin at day 30 + day 90." },
        { label: "Communications + signage", value: "Cooler-face signage clearly states food-allowed zones; library admin reviews + approves before launch." },
        { label: "Joint review cadence", value: "Monthly first 90 days; quarterly thereafter. Library admin + auxiliary services + operator account manager." },
      ],
    },
    {
      heading: "7. Communications + signage kit",
      items: [
        { check: "Cooler-face panel: payment options, refund QR, allergen summary, library food-allowed zone reminder" },
        { check: "Library lobby signage: 'fuel for studying — open until [hours]'" },
        { check: "Finals-week refresh signage: 'open 24/7 during finals'" },
        { check: "Food-allowed zone signage: arrows + map showing where food may be consumed in library" },
        { check: "Refund QR card at lobby table + circulation desk" },
        { check: "RA / library-staff training packet (30 min) on refund + escalation tree" },
        { check: "Newsletter feature in library + residence-life newsletter at term start + finals" },
      ],
    },
    {
      heading: "8. Quarterly review + KPI scorecard",
      items: [
        { check: "Uptime per cooler per month" },
        { check: "Transactions per day + basket size trend" },
        { check: "Top-15 / bottom-15 SKU velocity" },
        { check: "Refund rate (target < 2%)" },
        { check: "Food-policy incidents (target zero)" },
        { check: "Library complaint volume (target zero)" },
        { check: "Finals-week surge performance (transactions vs prior term)" },
        { check: "Cabinet cleanliness audit (operator + library facilities walk every quarter)" },
        { check: "Brand-standard compliance (cabinet wrap condition)" },
      ],
    },
  ],
  footer:
    "This pack is informational. Library administration + auxiliary services + IT + facilities should jointly review operator equipment spec and operating SOP before contract execution. Cooler placements in academic libraries should respect food-policy zones and noise-floor requirements.",
});

console.log("wrote " + "vending-in-university-libraries-and-study-areas");
