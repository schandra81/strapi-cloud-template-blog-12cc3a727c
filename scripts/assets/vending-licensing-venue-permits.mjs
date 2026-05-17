import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-licensing-venue-permits",
  assetType: "pack",
  title: "Entertainment Venue Vending Licensing Pack",
  subtitle: "Six-layer permit checklist, master concessionaire navigation, alcohol compliance, badging timeline",
  intro:
    "Entertainment venues — stadiums, arenas, theaters, concert halls, convention centers — sit under a stack of permits. A vending placement that misses one layer becomes an enforcement headline. This pack walks through the six permit layers, master concessionaire navigation, and a realistic badging timeline.",
  sections: [
    {
      heading: "1. Permit layer 1 — Facility / venue lease",
      paragraph:
        "Most public arenas (NBA / NHL / NFL / MLB / MLS) sit under a long-term management agreement (e.g., ASM Global, Oak View Group, Legends, Spectra/Comcast Spectacor). The venue manager controls F&B rights and routes all vending through a master concessionaire or RFP process.",
      items: [
        { label: "Identify the venue manager", value: "Stadium ownership ≠ venue management. Confirm via the venue's public website 'About' page or via the city/county arena authority filings." },
        { label: "Identify the master concessionaire", value: "Aramark, Sodexo Live!, Levy Restaurants, Delaware North, Compass Group / Restaurant Associates, Centerplate (Sodexo). Master concessionaire typically holds first right of refusal on automated retail." },
        { label: "RFP cadence", value: "Master concessionaire contracts run 5-10 years. Vending sub-contracts run 1-5 years and tend to renew on the master cycle." },
      ],
    },
    {
      heading: "2. Permit layer 2 — State + local business license",
      paragraph:
        "Every operator must hold the state and local licenses required to do business in the jurisdiction, regardless of master concessionaire status.",
      items: [
        { label: "State sales tax / seller's permit", value: "Required in every state with sales tax. CA CDTFA seller's permit, NY DTF Certificate of Authority, TX Comptroller sales-tax permit, FL DOR DR-1, etc." },
        { label: "State vending machine license", value: "Required in CA (CDTFA reg with location list), FL (DBPR Division of Hotels and Restaurants license per machine for food service), VA (state vending machine dealer license), and 15+ other states. Verify per state DBPR / DOR." },
        { label: "Local business license", value: "City or county business license plus, in some jurisdictions, a separate vending operator license (e.g., New York City DCWP Sidewalk Vendor License where the machine is not on private property; varies)." },
      ],
    },
    {
      heading: "3. Permit layer 3 — Health department / food permit",
      paragraph:
        "Most counties require a food establishment permit for any machine selling potentially hazardous food (PHF / TCS food). 2022 FDA Food Code §1-201.10 defines TCS food; cold-hold ≤ 41°F (5°C) and hot-hold ≥ 135°F (57°C) apply.",
      items: [
        { label: "Food establishment permit", value: "Per FDA Food Code §8-302.11, machines vending prepackaged TCS food typically need a food establishment permit. Each county sets fee ($50-$400/year/machine typical)." },
        { label: "Temperature monitoring", value: "FDA Food Code §3-501.16 requires automatic shutoff for refrigerated TCS vending if the cabinet exceeds 41°F for more than 30 minutes. Verify equipment carries NAMA Certified status." },
        { label: "Allergen labeling", value: "FALCPA (21 USC §343) requires 'Contains: …' statement for the 9 major allergens. FDA Food Code §3-602.11 extends to vending product spinners and labels." },
      ],
    },
    {
      heading: "4. Permit layer 4 — Fire / building / ADA",
      paragraph:
        "Venue placements pass through fire marshal review for egress and the local building department for electrical, plus federal ADA reach + clearance.",
      items: [
        { check: "Egress: NFPA 101 §7.1.10 and IBC §1003.6 prohibit obstructions in the means of egress. Vending banks must not reduce exit access corridor width below code minimum (typically 44 inches per IBC §1018.2)." },
        { check: "Electrical: NEC Article 422 dedicated circuit; GFCI per NEC 210.8 in damp / outdoor areas. Equipment listed to UL 541 (refrigerated vending) or UL 751 (vending machines)." },
        { check: "ADA Section 308 reach: highest operable part ≤ 48 in AFF (unobstructed forward reach); lowest ≤ 15 in AFF. Card reader and dispense bin both compliant." },
        { check: "ADA Section 305 clear floor space: 30 in × 48 in clear at each operable position." },
        { check: "Section 703 character contrast ≥ 70% for pricing display; allergen signage readable from clear floor space." },
      ],
    },
    {
      heading: "5. Permit layer 5 — Alcohol (where applicable)",
      paragraph:
        "Alcohol vending is allowed in a small number of jurisdictions with strict ID-verification (Diageo / Ecto / NextLevel pilots and FAA-monitored airport tests). Most state ABCs prohibit it. If the venue requests beer/wine in the vending mix, treat this as a high-risk specialty integration.",
      items: [
        { label: "Federal", value: "TTB does not directly prohibit vending alcohol but requires the seller hold a basic permit. Local ABC sets the binding rule." },
        { label: "State ABC examples", value: "PA PLCB allows licensed retail dispensing only via staffed venue. NV Gaming Control permits limited self-service in casino restricted areas. Most states (NY, CA, TX, FL) prohibit fully unattended alcohol vending in public venues." },
        { label: "ID verification", value: "If permitted, equipment must enforce ID scan (REAL ID-compliant) per state-specific rule. Many states additionally require staff attendance within 15 feet during operation." },
        { label: "Conclusion", value: "For most entertainment venues, alcohol stays staffed-only and vending serves non-alcohol categories. Confirm state ABC interpretation before pricing the placement." },
      ],
    },
    {
      heading: "6. Permit layer 6 — Special-event / temporary permits",
      paragraph:
        "Convention center and concert hall vending often involves transient placements tied to a single event. Temporary food permits and load-in/load-out badging apply per event.",
      items: [
        { label: "Temporary food permit", value: "Most counties require a Temporary Food Establishment permit (FDA Food Code Annex 1) for events > 14 days or > 1,000 attendees. Fee $25-$200 per event typical." },
        { label: "Load-in window", value: "Venue badging team typically issues load-in badges 24-72 hours before doors. Operator must submit driver names + license info ≥ 5 business days ahead." },
        { label: "Event-day restock window", value: "Most venues restrict service vehicle access to a defined window (e.g., 30 minutes pre-gates). Build cadence around the venue's published load schedule." },
      ],
    },
    {
      heading: "7. Master concessionaire navigation",
      paragraph:
        "Working with (not around) the master concessionaire is the only viable path in 95% of major venues. The master either subcontracts to a vending operator or self-operates the machines.",
      items: [
        { number: 1, title: "Identify decision maker", description: "Reach the F&B operations director or director of automated retail at the master concessionaire's regional office, not the on-site GM." },
        { number: 2, title: "Bring a packaged proposal", description: "Spec sheet, planogram, telemetry stack, commission split, ADA + health attestations. Masters do not negotiate from a blank slate." },
        { number: 3, title: "Offer revenue share, not displacement", description: "Position automated retail as incremental coverage (back-of-house, employee-only zones, off-hours) rather than replacing manned points of sale." },
        { number: 4, title: "Reference deployments", description: "Master concessionaires require references at similar venue scale. Without 2-3 venue references the proposal stalls." },
      ],
    },
    {
      heading: "8. Realistic badging + activation timeline",
      headers: ["Phase", "Duration", "Owner", "Deliverable"],
      rows: [
        ["Discovery / RFP review", "30-60 days", "Venue + master", "RFP issued or scoping call"],
        ["Operator selection", "30-45 days", "Master + host F&B", "Contract draft"],
        ["State + local licensing", "30-60 days", "Operator", "Seller's permit, state vending license, county food permit"],
        ["Health department + fire review", "30-45 days", "Operator + venue", "Health permit, fire-marshal sign-off"],
        ["Background checks + badging", "14-30 days", "Venue security", "Operator-staff venue badges"],
        ["Equipment install + commissioning", "5-10 days", "Operator + venue facilities", "Power-up, telemetry handshake, planogram load"],
        ["Soft launch + true-up", "30 days", "Operator", "Planogram tune, SLA validation, first commission report"],
      ],
    },
  ],
  footer:
    "This pack is informational and not legal advice. State ABC, county health, and venue-specific contracts govern. LetUsVending can introduce operators equipped to navigate this stack with master concessionaire partners.",
});

console.log("wrote "+"vending-licensing-venue-permits");
