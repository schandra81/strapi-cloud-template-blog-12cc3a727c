import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "do-you-need-a-license-for-vending",
  assetType: "checklist",
  title: "Vending Licensing Framework",
  subtitle: "State-by-state checklist, renewal timeline, and federal touchpoints",
  intro:
    "Use this checklist before placing your first machine. Vending licensing is layered: federal IRS / FDA touchpoints, state vending or merchant license, state sales-tax permit, and local (city / county) operating license. Missing any layer can trigger a stop-work order or back-tax assessment.",
  sections: [
    {
      heading: "Federal layer",
      items: [
        { check: "EIN (Employer Identification Number) obtained from IRS — free, online, takes 5 minutes." },
        { check: "Federal income tax — sole prop reports on Schedule C; LLC/S-corp files appropriate return." },
        { check: "FDA registration of food-handling facility — required if you commissary-prep TCS food per 21 CFR Part 1.225. Not required if you only place sealed shelf-stable items." },
        { check: "USDA Smart Snacks compliance if operating on K-12 property — 7 CFR 210.11." },
        { check: "FTC Business Opportunity Rule compliance if you're SELLING vending biz-op packages to others — 16 CFR Part 437. Not required if you're operating your own machines." },
      ],
    },
    {
      heading: "State layer — universal requirements",
      paragraph:
        "Every state requires at minimum a sales-tax permit and (in most states) a business entity registration. Vending-specific licenses exist in many states; see state-by-state below.",
      items: [
        { check: "Business entity registered (LLC, S-corp, sole prop) with the Secretary of State or equivalent." },
        { check: "Sales-tax permit / seller's permit from state department of revenue." },
        { check: "State vending or merchant license where required (see state list below)." },
        { check: "State food-service license / food-handler certification where serving TCS food." },
        { check: "Workers compensation insurance per state statute (if you have employees)." },
        { check: "Unemployment insurance registration per state statute (if you have employees)." },
      ],
    },
    {
      heading: "State-by-state vending license matrix (representative — verify with your state DOR)",
      headers: ["State", "Vending-specific license", "Sales tax permit", "Notes"],
      rows: [
        ["California", "Yes — CDTFA vendor permit", "Required (CDTFA)", "Prepared food vs grocery rate distinction; San Francisco + LA have additional local permits."],
        ["Texas", "No state vending license", "Required (TX Comptroller)", "Local (city) operating license in Austin, Dallas, Houston, San Antonio."],
        ["Florida", "Yes — DBPR Public Food Service / Vending license", "Required (FL DOR)", "Food + beverage vending machines require DBPR registration."],
        ["New York", "Yes — Sales Tax Cert + city vending permit", "Required (NY DTF)", "NYC requires Department of Consumer + Worker Protection license."],
        ["Illinois", "No state vending license", "Required (IL DOR)", "Cook County + Chicago impose additional local licensing."],
        ["Pennsylvania", "Yes — PA Department of Agriculture vending license", "Required (PA DOR)", "Food-vending machines require PDA inspection."],
        ["Ohio", "Yes — Vendor's License from county", "Required (OH DOT)", "Per-county vendor license; many counties have transient + fixed-location variants."],
        ["Georgia", "No state vending license", "Required (GA DOR)", "Atlanta + several counties require local business license."],
        ["North Carolina", "Yes — NCDOR sales + use plus NCDA food license", "Required (NCDOR)", "Food-vending operators require NCDA inspection."],
        ["Michigan", "Yes — MI Treasury Sales Tax + LARA food service", "Required (MI Treasury)", "Vending of TCS food requires LARA food-service license."],
      ],
    },
    {
      heading: "Local (city / county) layer",
      items: [
        { check: "City business license — most cities require an annual operating license." },
        { check: "County health-department permit if vending TCS food." },
        { check: "Local zoning verification — most placements are commercial / industrial zoning by-right; mixed-use may require conditional use." },
        { check: "Fire-marshal sign-off for placements > 1,000 sq ft micro-market." },
        { check: "Local sales-tax registration if your state has city / county add-on rates (TX, IL, MO, AZ, AL, others)." },
      ],
    },
    {
      heading: "Insurance + bonding",
      items: [
        { check: "General liability ≥ $1M per occurrence / $2M aggregate." },
        { check: "Product liability ≥ $2M with foodborne-illness coverage." },
        { check: "Commercial auto ≥ $1M combined single limit for service vehicles." },
        { check: "Workers compensation per state statute." },
        { check: "Surety bond if state requires (some food-handling states; OH vendor's bond)." },
      ],
    },
    {
      heading: "Renewal timeline — annual cadence",
      headers: ["Date", "Renewal item"],
      rows: [
        ["January", "Sales-tax permit + business entity annual report (most states)."],
        ["March", "PCI-DSS v4.0 attestation refresh."],
        ["April-June", "State food-service license renewal (varies by state)."],
        ["July", "Insurance COI annual refresh."],
        ["October", "Local business / city operating license renewal."],
        ["December", "Federal + state tax estimated-payments true-up."],
      ],
    },
    {
      heading: "Penalties for non-compliance (typical ranges)",
      items: [
        { check: "Operating without state vending license — $250-$2,500 fine + back-license fees." },
        { check: "Operating without sales-tax permit — back-tax assessment + 25-50% penalty + interest." },
        { check: "Operating food-vending without health-department permit — stop-work + per-machine fine ($100-$1,000)." },
        { check: "FDA registration miss for commissary-prep — civil penalty + injunction risk." },
        { check: "PCI-DSS non-compliance breach — card-network fines + breach-notification costs (state-by-state)." },
      ],
    },
  ],
  footer:
    "This framework is informational and not legal advice. State + local licensing is highly variable; verify with your state DOR, state agriculture department, and city / county licensing office before placing your first machine.",
});

console.log("wrote "+"do-you-need-a-license-for-vending");
