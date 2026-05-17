import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "custom-branding-venue-vending",
  assetType: "rfp template",
  title: "Custom-Branded Venue Vending RFP Template",
  subtitle: "Six-category execution methods, design approval cadence, refresh cycle planning, and operator scoring matrix",
  intro:
    "Use this RFP template to solicit branded-vending bids from operators that can deliver venue-grade visual treatment across full wraps, partial graphics, illuminated faces, digital displays, sponsor co-branding, and seasonal refreshes. Each section maps to a measurable specification your operator can attest to and that procurement can score.",
  sections: [
    {
      heading: "1. Project overview",
      items: [
        { label: "Venue type", value: "(stadium / arena / theater / convention center / amphitheater — specify capacity and event mix)" },
        { label: "Machine count + locations", value: "(specify count by zone: main concourse, club level, VIP, BOH, exterior). Capability framing only — describe footprint requirements rather than naming anchor sites." },
        { label: "Contract term", value: "Initial term (typically 3-5 years) with annual brand-refresh milestone reviews." },
        { label: "Branding scope", value: "Full wrap, partial graphics, illuminated face, digital sidekick display, sponsor co-brand, seasonal refresh — operator to scope each category in their response." },
      ],
    },
    {
      heading: "2. Six-category execution methods (operator scope)",
      paragraph:
        "Operators must demonstrate capability across all six categories or clearly state which they subcontract. Reference NEMA 250 enclosure ratings and UL 751 (vending machines) compliance for any modified equipment.",
      headers: ["Category", "Specification", "Approval lead time", "Refresh cadence"],
      rows: [
        ["1. Full-wrap vinyl", "3M IJ180mC / Avery MPI 1105 cast vinyl, 7-year outdoor durability, laminated overlay", "10-14 business days from final art", "Annual refresh or per sponsor cycle"],
        ["2. Partial graphics + decals", "Mid-grade 5-year vinyl on machine face and side panels; back panels left OEM", "5-7 business days", "Semi-annual"],
        ["3. Illuminated front face", "LED-backlit translucent vinyl with diffuser; ENERGY STAR compliant lighting", "3-4 weeks (custom fabrication)", "Per sponsor cycle (typically 12-24 months)"],
        ["4. Digital sidekick display", "21\"-32\" commercial-grade display, CMS-driven; UL 60950 listed", "4-6 weeks (hardware lead)", "Content refresh continuous; hardware 5-year"],
        ["5. Sponsor co-brand", "Tiered logo placement matrix (primary / secondary / tertiary) with art-board guidelines", "2-3 weeks after sponsor contract", "Per sponsor activation"],
        ["6. Seasonal/event refresh", "Removable static-cling or quick-cure adhesive overlays for 30-90 day campaigns", "5-10 business days", "3-6 cycles per year"],
      ],
    },
    {
      heading: "3. Design approval cadence",
      items: [
        { number: 1, title: "Concept boards (T-30 days)", description: "Operator submits 2-3 concept directions; venue marketing reviews against brand standards manual and any sponsor obligations. Reference internal style guide version number on every submission." },
        { number: 2, title: "Production proof (T-14 days)", description: "Full-scale color-accurate proof on actual substrate (vinyl, backlit material). Venue signs off on color (Pantone match within Delta-E ≤ 3), placement, and legibility." },
        { number: 3, title: "Pre-install QA (T-3 days)", description: "Operator confirms install crew, removal of prior wrap, surface prep per 3M Recommended Application Procedures, and site logistics with venue ops." },
        { number: 4, title: "Install + sign-off (T-0)", description: "Install supervised by venue marketing rep or designee. Photo documentation of all four sides; sign-off sheet retained for the duration of contract plus 3 years." },
      ],
    },
    {
      heading: "4. Refresh cycle planning",
      paragraph:
        "Build the refresh calendar against the venue's event mix, sponsor obligations, and seasonal moments. Operator commits to the refresh count in their bid; under-delivery triggers SLA credit per Section 7.",
      items: [
        { label: "Tier-A wraps (full)", value: "1-2 refreshes per year; typically aligned to season opener and post-season." },
        { label: "Tier-B partial graphics", value: "2-3 refreshes per year; aligned to sponsor activation windows." },
        { label: "Tier-C seasonal overlays", value: "3-6 refreshes per year; holiday, playoff, residency, and special-event tie-ins." },
        { label: "Digital content", value: "Continuous (CMS push); operator provides scheduling tool access to venue marketing." },
      ],
    },
    {
      heading: "5. Operator capability matrix (scoring)",
      paragraph:
        "Procurement scores each operator on the following criteria; total weighted score determines award. Adjust weights to your venue's priorities.",
      headers: ["Criterion", "Weight", "Evidence required"],
      rows: [
        ["In-house design capability", "15%", "Portfolio of 5+ comparable venue installs; capability framing acceptable — operator demonstrates skill set without naming specific anchor sites"],
        ["Vinyl / wrap install crew", "15%", "3M Preferred Installer credential or equivalent; W-2 vs subcontract disclosed"],
        ["Digital signage management", "10%", "CMS platform demo (Stratacache, BrightSign, Enplug, or equivalent)"],
        ["Refresh turnaround SLA", "15%", "Operator commits to lead time per category in writing; 10% SLA credit clause"],
        ["Sponsor integration experience", "10%", "Sample tiered-logo matrix and 2 redacted sponsor agreements"],
        ["Pricing transparency", "20%", "Line-item breakdown: design / production / install / removal / refresh"],
        ["Reporting + analytics", "10%", "Sample monthly report: install photo log, refresh log, dwell-time analytics for digital sidekicks"],
        ["Insurance + bonding", "5%", "$2M GL minimum, $1M auto, $1M workers comp; bondable on contracts ≥ $250K"],
      ],
    },
    {
      heading: "6. Required attachments (operator response)",
      items: [
        { check: "Portfolio: 5+ comparable venue installs (capability framing acceptable; do not require operator to claim work at named anchor venues)." },
        { check: "Sample art-board guidelines and brand-compliance checklist." },
        { check: "Sample monthly install + refresh report." },
        { check: "Pricing schedule per Section 5, Criterion 6." },
        { check: "Insurance certificate naming venue as additional insured." },
        { check: "References: 3 venue marketing or procurement contacts (last 24 months)." },
      ],
    },
    {
      heading: "7. SLA + credits",
      items: [
        { label: "On-time install SLA", value: "100% of installs delivered on agreed install date. Each day late = 2% credit against that install line item." },
        { label: "Color-match SLA", value: "Delta-E ≤ 3 against Pantone reference. Re-print at operator cost if exceeded." },
        { label: "Refresh-cadence SLA", value: "Operator delivers committed refresh count per Section 4. Missed refresh = full credit for that cycle." },
        { label: "Damage repair SLA", value: "Vandalism / damage repair within 7 business days of report (10 days for full-wrap). Photo-documented." },
      ],
    },
    {
      heading: "8. Submission instructions",
      items: [
        { label: "Format", value: "PDF response, electronic submission via procurement portal." },
        { label: "Due date", value: "(specify — typically 30 days from RFP issue)" },
        { label: "Q&A window", value: "10 business days after RFP issue; all questions answered in writing and distributed to all bidders." },
        { label: "Award notification", value: "(specify — typically 45-60 days after submission close)" },
      ],
    },
  ],
  footer:
    "This template is informational; it is not legal advice. Have your venue's procurement counsel review before issue. Capability framing throughout — operators describe what they are equipped to deliver rather than claiming work performed at named anchor sites.",
});

console.log("wrote "+"custom-branding-venue-vending");
