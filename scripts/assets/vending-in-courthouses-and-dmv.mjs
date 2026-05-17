import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-in-courthouses-and-dmv",
  assetType: "pack",
  title: "Combined Courthouse + DMV Vending Pack",
  subtitle: "State-procurement scope, captive-audience planogram, multi-language signage template",
  intro:
    "Courthouses and state DMV offices share a common operating profile — long captive dwells, state-procurement procurement paths, and a multilingual public. They also share the same constraint: people waiting hours with no easy exit. This pack covers the combined state-procurement framework, a captive-audience planogram, and multi-language signage that meets state language-access requirements.",
  sections: [
    {
      heading: "1. The captive-audience profile",
      paragraph:
        "DMV wait times in major states average 30-90 minutes; renewal / appointment-on-day-of waits can run 2-4 hours. Courthouse juror waits run 4-8 hours per session; public docket-wait runs 1-3 hours. Both audiences cannot easily leave and return — meal-replacement-weighted planograms and reliable hydration outperform pure snack-mix configurations.",
    },
    {
      heading: "2. State-procurement scope — paths to vending placement",
      paragraph:
        "Both courthouses (state + county) and DMV offices typically procure under one of three paths.",
      items: [
        { label: "State master vending contract", value: "Most states maintain a master vending contract on the central procurement schedule. State agency facilities (DMV, state-funded courthouses) can ride the master. Streamlines path; pricing is pre-negotiated." },
        { label: "Cooperative procurement (state COG / OMNIA / Sourcewell)", value: "Many states + counties access cooperative purchasing schedules. Sourcewell, OMNIA Partners, NASPO ValuePoint commonly include vending services schedules." },
        { label: "Local RFP / concession agreement", value: "County courthouses + smaller DMV / motor-vehicle offices often issue their own concession RFP. Operator pays commission (8-25% typical) to the agency / facility." },
        { label: "Commission revenue handling", value: "State commission revenue typically flows to a general fund or a building-maintenance account. Document the destination at contract sign — avoids audit issues at year-end." },
      ],
    },
    {
      heading: "3. Captive-audience planogram template",
      paragraph:
        "Meal-replacement weighted. Hydration share elevated. Family-friendly + lower-sugar share for DMV (where children + seniors are present in waiting area).",
      headers: ["Category", "Slots (40-slot combo)", "Examples"],
      rows: [
        ["Water (16 oz / 1 L)", "5-6", "Plastic bottle"],
        ["Juice + sports drink", "4-5", "Plastic bottle / paperboard"],
        ["Coffee + cold-brew", "3-4", "Aluminum pull-tab can / paperboard"],
        ["Meal-format (sandwich, wrap, microwaveable bowl)", "5-6", "Refrigerated; microwave nearby for shelf-stable"],
        ["Fresh fruit + yogurt cups", "3-4", "Plastic with foil seal"],
        ["Protein bars + granola", "4-5", "Film flexible packaging"],
        ["Salty snacks", "4-5", "Film bag"],
        ["Lower-sugar / family-friendly snacks", "3-4", "≤ 10 g added sugar; allergen-aware"],
        ["Sweet snacks", "2-3", "Film bag / paperboard"],
      ],
    },
    {
      heading: "4. Multi-language signage — state language-access requirements",
      paragraph:
        "Many states require public-facing services (including DMV) to provide language access for top non-English languages spoken in the jurisdiction. Vending signage should match this requirement.",
      items: [
        { label: "California (DMV reference)", value: "Top languages: English, Spanish, Chinese (Traditional + Simplified), Korean, Vietnamese, Tagalog. Signage in English + Spanish minimum; additional languages where local demographics support." },
        { label: "Texas", value: "English + Spanish minimum at DMV / courthouse public-facing placements." },
        { label: "New York", value: "Executive Order 26 + Local Law 30 (NYC) — top 10 languages for city; state agencies follow comparable practice. English + Spanish + Chinese + others per locality." },
        { label: "Florida", value: "English + Spanish minimum at DMV / courthouse public-facing placements; Haitian Creole in South Florida." },
        { label: "Federal courthouse / federal building", value: "LEP Executive Order 13166 — meaningful access for limited-English-proficient persons. English + most-common local non-English language at minimum." },
      ],
    },
    {
      heading: "5. Multi-language signage template — content elements",
      items: [
        { check: "How to operate (insert card / tap / select / dispense)." },
        { check: "How to request refund (QR code + phone number + clerk-of-court / customer-service link)." },
        { check: "Allergen summary (FALCPA — 9 major allergens listed on machine face)." },
        { check: "Nutrition info access (QR code to per-SKU nutrition page)." },
        { check: "ADA accessibility statement + operator contact for accommodation requests." },
        { check: "Cashless payment options accepted (card brands, mobile wallet)." },
        { check: "Pricing display in machine face (high-contrast, ≥ 5/8 in characters per ADA Section 703)." },
      ],
    },
    {
      heading: "6. Security + access protocols (shared)",
      paragraph:
        "Both venues have contractor-access protocols and packaging restrictions for security perimeters.",
      items: [
        { check: "Operator route drivers background-checked + badged through facility contractor program." },
        { check: "Restock cart / dolly screened at entry (X-ray + visual)." },
        { check: "Restock schedule coordinated with peak windows (avoid morning DMV opening rush, court-call mornings)." },
        { check: "Cashless-primary or cashless-only reduces cash-handling security overhead." },
        { check: "E-lock with audit log; tamper-resistant fasteners." },
        { check: "Glass-free packaging at courthouse placements (see courthouse pack); DMV typically allows glass but plastic preferred." },
        { check: "Cellular telemetry — not facility Wi-Fi." },
      ],
    },
    {
      heading: "7. ADA + accessibility (Title II + state regulations)",
      items: [
        { check: "Reach range 15-48 in AFF (ADA Section 308)." },
        { check: "30 in × 48 in clear floor space (Section 305); doesn't block accessible queue or path-of-travel." },
        { check: "Operating force ≤ 5 lbf (Section 309.4)." },
        { check: "Cashless option for users without coin/bill handling capability." },
        { check: "High-contrast pricing, ≥ 5/8 in characters." },
        { check: "Tactile or braille pricing where state code requires." },
        { check: "Operator's ADA attestation + annual recertification on file." },
      ],
    },
    {
      heading: "8. Reporting + governance",
      items: [
        { check: "Monthly revenue + commission report to facility / agency." },
        { check: "Quarterly uptime + SLA report." },
        { check: "Refund rate + reason codes." },
        { check: "Stockout incidents on high-velocity days." },
        { check: "Language-access compliance attestation (signage in current state-required languages)." },
        { check: "ADA + cleaning attestation current." },
        { check: "Operator's contractor-badge roster current." },
      ],
    },
    {
      heading: "9. Capability framing",
      paragraph:
        "LetUsVending is an operator network and advisory. We are equipped to coordinate state-master-contract or cooperative-procurement RFP language, captive-audience planogram design, and multi-language signage requirements for combined courthouse + DMV placements. The operator selected via this framework executes the program; the state / agency owns the procurement instrument and security access policy.",
    },
  ],
  footer:
    "Informational reference. State language-access lists, packaging restrictions, and procurement paths vary by jurisdiction; coordinate with state procurement officer, court administrator, and DMV facility manager.",
});

console.log("wrote "+"vending-in-courthouses-and-dmv");
