import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "case-study-vending-in-university",
  assetType: "pack",
  title: "University AI Cooler Deployment Pack",
  subtitle: "Placement fit, integration scope, operator onboarding, and AASHE STARS reporting framework",
  intro:
    "University AI cooler deployments cross auxiliary services, residence life, athletics, library administration, IT, the dietitian's office, and (where relevant) sustainability reporting. This pack bundles the four working documents a campus deployment team needs from RFP through STARS-cycle reporting.",
  sections: [
    {
      heading: "1. Placement-fit assessment",
      paragraph:
        "Score each candidate placement on the criteria below. Operator + campus stakeholders walk the site before signing a placement letter.",
      items: [
        { check: "Foot traffic ≥ 250 unique students/day measured by access-control log, gate count, or building manager attestation." },
        { check: "Operating hours: cooler runs ≥ 16 hr/day for residence + library; ≥ 24 hr where building access supports it." },
        { check: "Electrical + connectivity: dedicated 120V/20A circuit, GFCI, cellular ≥ -95 dBm or Ethernet drop on segmented VLAN." },
        { check: "ADA Section 308: 30x48 in clear floor space, operable parts 15-48 in AFF, ≤ 5 lbf operating force." },
        { check: "Security: building access-control logging, camera coverage of cooler face, after-hours lighting ≥ 10 fc." },
        { check: "Dietitian + Smart-Snacks compatibility: planogram ≥ 50% HHS-aligned where dining-services standard requires." },
        { check: "Brand-standard fit: cabinet wrap + signage submitted to campus brand standards; lead time 14-21 days." },
      ],
    },
    {
      heading: "2. Campus integration scope",
      paragraph:
        "Most university AI cooler RFPs require integration with the campus card + auxiliary-services finance + IT identity layer. Confirm each component below in the operator's response.",
      items: [
        { label: "Campus card / one-card integration", value: "Operator supports Atrium, Blackboard Transact, CBORD, TouchNet OneCard, or comparable. SDK or API integration with dining-dollar, declining-balance, or meal-exchange tender." },
        { label: "FERPA DPA", value: "Operator signs FERPA data-processing agreement; covers any student-ID data that traverses operator systems via campus-card SDK." },
        { label: "Network + identity", value: "Cooler on segmented VLAN; SSO to operator admin portal via campus IdP (Okta, Azure AD, Shibboleth); MFA enforced." },
        { label: "PCI scope", value: "Operator AOC + SAQ-B-IP on file; PAN never touches campus network; cashless tokenized at cooler." },
        { label: "Reporting + finance", value: "Operator emits transaction + commission report monthly to auxiliary-services finance; aligned to GL codes." },
        { label: "STARS + sustainability metrics", value: "Operator reports % HHS-aligned, % local/regional, % fair-trade, packaging-recyclability % to align with AASHE STARS OP-8 / OP-9 sub-credits." },
      ],
    },
    {
      heading: "3. Operator onboarding plan — 12 weeks",
      items: [
        { number: 1, title: "Weeks 1-2: contract + DPA", description: "Master services agreement, per-placement addenda, FERPA DPA, security questionnaire response (SIG, HECVAT), insurance certificate." },
        { number: 2, title: "Weeks 3-4: integration build", description: "Campus card SDK integration in dev environment; SSO + VLAN provisioned; PMS/finance posting test." },
        { number: 3, title: "Weeks 5-6: planogram + brand approval", description: "Dietitian + auxiliary services + dining-services confirm planogram; brand standards approves cabinet wrap." },
        { number: 4, title: "Weeks 7-8: pilot install", description: "First 2 placements installed + calibrated; soft-launch with student-affairs staff + dining services." },
        { number: 5, title: "Weeks 9-10: full launch", description: "Remaining placements launched; lobby signage live; resident-life + library admin briefed; refund + support workflow live." },
        { number: 6, title: "Weeks 11-12: first review", description: "Joint operator + campus review of uptime, vision-system accuracy, planogram velocity, refund flow; adjust as needed." },
      ],
    },
    {
      heading: "4. Per-placement planogram framework",
      paragraph:
        "Each university placement type has a distinct planogram. Operator should attest to per-placement SKU mix and refresh quarterly. Allergen labeling per FALCPA on each SKU; HHS healthy share where dining-services standard requires.",
      headers: ["Placement", "Anchor SKUs", "Healthy share target", "Notes"],
      rows: [
        ["Residence hall", "Grab-and-go meal, snack, beverage", "≥ 50%", "Late-night peak; meal substitute + comfort food balance"],
        ["Library / study area", "Caffeine, quiet snack, hydration", "≥ 60%", "No-crunch, no-strong-odor preferred; Smart-Snacks aligned"],
        ["Career center", "Caffeine, professional snack, breath-fresh", "≥ 50%", "Daytime peak; clean-presentation snacks"],
        ["Athletics / gym", "Hydration, recovery protein, clean-protein bar", "≥ 75%", "FITPICK / NEMS-V-aligned; pre + post-workout"],
        ["Student union", "Variety mix, indulgent allowed", "≥ 40%", "All-day traffic; broadest variety"],
      ],
    },
    {
      heading: "5. AASHE STARS reporting framework",
      paragraph:
        "Universities with AASHE STARS commitments can use vending program data toward OP-8 (Sustainable Dining) and OP-9 (Sustainable Procurement) sub-credits. Operator should commit in the SOW to provide the reports below.",
      items: [
        { label: "Local + regional sourcing", value: "Operator reports % of cooler SKUs sourced within 250 miles of campus; quarterly report." },
        { label: "Sustainable + plant-forward", value: "% of SKUs that are plant-forward, organic, or third-party-certified (Fair Trade, USDA Organic, Rainforest Alliance, B Corp)." },
        { label: "Packaging recyclability", value: "% of SKU packaging that is curbside-recyclable, compostable, or refillable; operator works toward annual improvement target." },
        { label: "HHS healthy share", value: "% of SKUs meeting HHS Food Service Guidelines or Smart-Snacks (where K-12 framing applies)." },
        { label: "Energy + equipment", value: "Cooler is ENERGY STAR Tier-1 or comparable; refrigerant GWP < 700 where supplied; operator reports kWh per cooler annually." },
        { label: "Operator workforce", value: "Operator can report living-wage + benefits attestation for route staff; sustainability office can validate." },
      ],
    },
    {
      heading: "6. Quarterly + annual review framework",
      items: [
        { check: "Quarterly: per-placement velocity, basket, uptime, refund rate" },
        { check: "Quarterly: planogram refresh proposal; bottom-15 SKUs identified" },
        { check: "Quarterly: vision-system accuracy report; recalibration log" },
        { check: "Semi-annual: dietitian audit of planogram (HHS / Smart-Snacks alignment)" },
        { check: "Annual: AASHE STARS-aligned sustainability report from operator" },
        { check: "Annual: contract review (commission tier, scope, new placement requests)" },
        { check: "Annual: security + privacy attestation refresh (PCI, FERPA DPA, SOC 2)" },
      ],
    },
    {
      heading: "7. Operator selection criteria",
      items: [
        { check: "Higher-ed reference accounts ≥ 3 active placements at peer institutions ≥ 12 months" },
        { check: "Campus card SDK integration attested and demonstrable in pilot" },
        { check: "FERPA DPA + GLBA acknowledgment + SOC 2 Type II on file" },
        { check: "Smart-Snacks / HHS / FITPICK planogram capability attested" },
        { check: "Sustainability + STARS reporting capability" },
        { check: "Commission tier: 8-15% of gross, scaled by volume" },
        { check: "Insurance: $2M GL, $1M umbrella, cyber-liability $5M, additional-insured to university" },
      ],
    },
    {
      heading: "8. Communications + change management",
      items: [
        { label: "Pre-launch", value: "Joint announcement from auxiliary services + dining services + residence life; explains placement, payment, refund, allergen labeling, contact for support." },
        { label: "Launch", value: "On-site demo at each placement during first week; free-first-purchase QR card; orientation tabling." },
        { label: "Ongoing", value: "Monthly residence-life newsletter feature highlighting planogram changes, student-feedback survey link, refund + support reminder." },
        { label: "Annual", value: "End-of-academic-year survey to students + RA staff; results inform planogram refresh + placement adjustments." },
        { label: "Accessibility + privacy notes", value: "Plain-language web pages on auxiliary-services site explaining data handling + accommodation request channel." },
      ],
    },
  ],
  footer:
    "This pack is informational. Auxiliary services, campus IT, the institutional privacy office, and the dietitian's office should jointly review operator capability claims and attestations before contract execution. Operator commitments should be verified through reference calls at peer institutions and through SOC 2 / PCI / FERPA evidence on file.",
});

console.log("wrote " + "case-study-vending-in-university");
