import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "how-to-place-vending-machine-in-airport",
  assetType: "checklist",
  title: "Airport Vending Placement Framework",
  subtitle: "Concession model determination, TSA security checklist, operator capability matrix, and master sub-agreement",
  intro:
    "Use this checklist when scoping an airport vending placement. Airports are governed by a layered set of authorities — FAA airport sponsor obligations, TSA Part 1542 security, and the local airport authority's concession program — and vending falls under one of several concession structures. Mark each item Verified, Acceptable with mitigation, or Not addressed before contract execution.",
  sections: [
    {
      heading: "1. Concession model determination",
      paragraph:
        "Airport vending typically operates under one of four models. Confirm the applicable model with the airport concession office before proceeding — the model drives RFP rules, MAG (Minimum Annual Guarantee), ACDBE (Airport Concessions Disadvantaged Business Enterprise) participation, and capital responsibility.",
      items: [
        { check: "Master prime concessionaire model: a single prime holds the food and beverage concession; vending is a sub-concession requiring a sub-agreement." },
        { check: "Direct concession model: airport authority issues a stand-alone vending RFP; bidder contracts directly with the authority." },
        { check: "Reduced-scope vending model: vending operates in non-revenue, employee-only, or back-of-house areas not covered by the main concession lease." },
        { check: "Pop-up / transient model: 90-day to 1-year activation under a license, not a lease — common for new terminal openings or construction zones." },
      ],
    },
    {
      heading: "2. TSA + airport security — 49 CFR Part 1542",
      items: [
        { check: "Sterile area vs. non-sterile area placement confirmed. SIDA / sterile-area placements trigger TSA Part 1542 Security Identification Display Area badge requirements." },
        { check: "Operator route drivers and restock crew: SIDA badge applications submitted (CHRC fingerprint, STA threat assessment, training); typical lead time 3-6 weeks." },
        { check: "Restock vehicle access protocol: vehicle inspection, escort requirement, and time-window restrictions documented." },
        { check: "Restock cart screening at the post-security checkpoint where the sterile area is accessed; coordinate with TSA Federal Security Director schedule." },
        { check: "Goods handling: only sealed, manufacturer-packaged product loaded into sterile-area machines unless airport authority approves alternate sourcing." },
      ],
    },
    {
      heading: "3. ACDBE and Part 23 compliance — 49 CFR Part 23",
      items: [
        { check: "ACDBE goal for the concession program identified (each large hub airport publishes goals annually under 49 CFR Part 23.45)." },
        { check: "ACDBE participation plan for the vending placement: certified ACDBE sub-concessionaire, joint venture, or supply purchase from certified vendors." },
        { check: "ACDBE participation tracked and reported quarterly to the airport authority." },
        { check: "Good-faith effort documentation retained if the participation target is not met." },
      ],
    },
    {
      heading: "4. Site, electrical, and ADA",
      items: [
        { check: "Dedicated 20A 120V circuit per NEC 210.23; refrigerated combo or hot-food units may require 240V." },
        { check: "GFCI per NEC 210.8(B) for outdoor or wet-location placements; weather-resistant in-use cover for outdoor." },
        { check: "ADA Section 308 reach range, Section 305 clear floor space, and Section 309.4 ≤ 5 lbf operating force verified." },
        { check: "Sprinkler deflector clearance ≥ 18 inches per NFPA 13 Section 8.6.5; egress path width per IBC / NFPA 101 preserved." },
        { check: "Telemetry: cellular signal strength verified at the placement; airport authority Wi-Fi or DAS used as fallback where permitted." },
      ],
    },
    {
      heading: "5. Product mix and traveler-specific SKUs",
      items: [
        { check: "Specialty SKUs supported: travel-size toiletries, OTC pharmacy items (where state permits), phone chargers, earplugs, neck pillows, eye masks." },
        { check: "TSA 3-1-1 compliance: liquid SKUs in sterile-area machines ≤ 3.4 oz (100 mL) per item if travelers may carry through additional screening." },
        { check: "Multi-currency and multi-language interface: cashless platform supports tap and mobile-wallet across major international card networks." },
        { check: "Allergen labeling per FALCPA; multilingual allergen icons on the machine face." },
        { check: "Refund flow accessible via app, SMS, or in-terminal customer service desk — not solely the on-machine touchpad." },
      ],
    },
    {
      heading: "6. Operator capability matrix",
      items: [
        { check: "Operator holds active SIDA badge accounts at the airport (or a credible plan to obtain) and has operated in a sterile area in the last 24 months." },
        { check: "Operator carries CGL $1M/$2M, products/completed ops $2M, umbrella ≥ $10M (typical airport authority floor), workers' comp, cyber, crime/employee dishonesty." },
        { check: "Operator named additional insured on a primary, non-contributory basis with waiver of subrogation; airport authority named per the concession agreement template." },
        { check: "Operator attests to 24/7 service SLA: Tier 1 (machine down) ≤ 4 hour on-site response, Tier 2 ≤ 24-48 hour, Tier 3 ≤ 14 day." },
        { check: "Operator delivers monthly MAG/percentage rent reports and quarterly sales audits compatible with airport revenue reporting." },
      ],
    },
    {
      heading: "7. Master sub-agreement template clauses",
      items: [
        { check: "Sub-agreement aligned with prime concession contract — operator inherits prime's obligations on MAG, percentage rent, capital improvements, ACDBE, insurance." },
        { check: "Reporting obligations match prime: monthly sales, capital plan, ACDBE participation, ADA attestation." },
        { check: "Termination follows prime: if prime concession lease terminates, sub-agreement terminates concurrently subject to airport authority assumption." },
        { check: "Operator pays a defined share of prime's capital, signage, and concourse improvement allocations." },
      ],
    },
  ],
  footer:
    "This framework is informational and not legal advice. Airport concession contracts are governed by federal regulations (FAA grant assurances, 49 CFR Part 23, 49 CFR Part 1542) and the local airport authority's policies. Coordinate the final review with concession counsel. LetUsVending can connect you with operators equipped to operate in airport environments — request the airport capability matrix to compare candidates.",
});

console.log("wrote " + "how-to-place-vending-machine-in-airport");
