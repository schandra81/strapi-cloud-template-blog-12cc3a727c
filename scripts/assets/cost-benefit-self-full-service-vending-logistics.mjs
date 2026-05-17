import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "cost-benefit-self-full-service-vending-logistics",
  assetType: "pack",
  title: "Logistics Hub Self-Service vs Full-Service Cost-Benefit Pack",
  subtitle: "5-year economic comparison template, hybrid-model analysis, operator selection framework, and integration checklist",
  intro:
    "This pack helps logistics-hub operators (DC, 3PL, sortation, cross-dock) compare self-operated vending against full-service vendor operator models, evaluate a hybrid stack, and produce an apples-to-apples 5-year TCO. Use as a working reference for facility, finance, and procurement during program design or recompete.",
  sections: [
    {
      heading: "1. Three operating models — definitions",
      headers: ["Model", "Who owns inventory", "Who restocks", "Capital", "Best fit"],
      rows: [
        ["Self-service", "Facility / employer", "Internal team or 3rd-party route", "Higher — $5–12k/machine CapEx", "100% subsidized; very high volume site"],
        ["Full-service vendor", "Operator", "Operator route + telemetry", "Zero — operator-funded", "Most logistics hubs, 50–500 FTE"],
        ["Hybrid (smart cooler + traditional)", "Mixed", "Operator route; some employer-replenished SKUs", "Mid — $8–35k for smart unit", "Mixed shift size; subsidy + retail blend"],
      ],
    },
    {
      heading: "2. 5-year TCO template — self-service",
      paragraph:
        "Self-service is sometimes preferred when employer wants total planogram control or runs an existing food-service organization. Below: typical 5-year cost framework for a 4-machine deployment at a mid-sized DC.",
      headers: ["Cost line", "Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
      rows: [
        ["Capital — 4 machines + cashless", "$28,000", "$0", "$0", "$0", "$0"],
        ["Capital — telemetry + install", "$3,200", "$0", "$0", "$0", "$0"],
        ["Inventory float (1 turn ≈ 2 weeks)", "$2,400", "$0", "$0", "$0", "$0"],
        ["Labor (0.4 FTE @ $52k loaded)", "$20,800", "$21,420", "$22,060", "$22,720", "$23,400"],
        ["Cost of goods (assume $48k revenue × 62% COGS)", "$29,760", "$30,650", "$31,570", "$32,520", "$33,490"],
        ["Maintenance + service contract", "$4,800", "$4,950", "$5,100", "$5,250", "$5,400"],
        ["Telemetry / connectivity", "$960", "$990", "$1,020", "$1,050", "$1,080"],
        ["PCI / payment processing (~3.0%)", "$1,440", "$1,485", "$1,530", "$1,575", "$1,620"],
        ["Total cost (year)", "$91,360", "$59,495", "$61,280", "$63,115", "$64,990"],
      ],
    },
    {
      heading: "3. 5-year TCO template — full-service operator",
      paragraph:
        "Full-service shifts capital, inventory, and labor to the operator. Employer cost is typically subsidy + facility-side overhead.",
      headers: ["Cost line", "Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
      rows: [
        ["Capital — operator-funded", "$0", "$0", "$0", "$0", "$0"],
        ["Subsidy ($5/shift × 200 FTE × ~240 shifts × 50% participation)", "$120,000", "$123,600", "$127,300", "$131,100", "$135,000"],
        ["Below-threshold service fee (waived if revenue > $250/wk × machine)", "$0", "$0", "$0", "$0", "$0"],
        ["Facility electric (4 machines @ ~2,000 kWh)", "$1,180", "$1,215", "$1,250", "$1,290", "$1,330"],
        ["Program administration (0.05 FTE)", "$2,600", "$2,680", "$2,760", "$2,840", "$2,930"],
        ["Quarterly review consult (~$500/qtr)", "$2,000", "$2,060", "$2,120", "$2,180", "$2,240"],
        ["Total cost (year)", "$125,780", "$129,555", "$133,430", "$137,410", "$141,500"],
      ],
    },
    {
      heading: "4. Hybrid model analysis",
      paragraph:
        "Hybrid stacks an operator-run smart cooler / micro-market with traditional machines covering 24/7 coverage. Often optimal where shift size varies > 3x between peak and trough.",
      items: [
        { label: "Smart cooler / micro-market", value: "AWM Smart Shelf, 365 Retail Markets, Cantaloupe Yoke, or Nayax VPOS Touch. Capital $12k–$35k; operator-funded in most full-service deals." },
        { label: "Traditional fallback", value: "2–4 cabinets covering 24/7 hot drinks, beverages, sturdy snacks for shifts when the micro-market is not staff-monitored." },
        { label: "Subsidy split", value: "Subsidy applied to cooler/market line items (real meals, hydration, fresh fruit) and not to indulgent SKUs — drives wellness without paying for soda." },
        { label: "Resilience", value: "Cooler outage falls back to traditional machines without losing coverage. Telemetry on both classes feeds the same per-shift velocity dashboard." },
      ],
    },
    {
      heading: "5. Operator selection framework — scored criteria",
      headers: ["Criterion", "Weight", "What to look for"],
      rows: [
        ["Logistics-hub track record", "20%", "Operator-attested ability to serve sites with 24/7 ops, security ingress, dock-side delivery windows"],
        ["Telemetry depth", "15%", "Sub-15-minute heartbeat; per-shift velocity reporting; cold-chain alerts"],
        ["SLA structure (Tier 1/2/3)", "15%", "Written tiers with acknowledge + resolve clocks; remedies for breach"],
        ["Refrigerated / fresh capability", "10%", "FDA-registered commissary; HACCP plan; date-marking SOP"],
        ["Cashless + payment", "10%", "PCI-DSS v4.0 AoC; EMV + contactless; mobile wallet; app-based refund"],
        ["Subsidy + payroll-deduct integration", "10%", "Workday / Kronos / UKG file format; bi-weekly cadence"],
        ["Reporting + QBR cadence", "10%", "Monthly dashboards; quarterly business review with named account manager"],
        ["Insurance + indemnity", "10%", "$1M / $2M general liability minimum; product liability; cyber for cashless"],
      ],
    },
    {
      heading: "6. Integration checklist",
      items: [
        { check: "Site survey complete — power, network, dock access, security ingress, floor load" },
        { check: "Dedicated 20A circuit per refrigerated unit; UL-listed equipment" },
        { check: "Network plan — operator cellular LTE preferred over facility WiFi (PCI segmentation)" },
        { check: "Badge / payroll-deduct integration tested in staging environment" },
        { check: "Planogram approved by wellness committee / HR" },
        { check: "Signage + onboarding communication to workforce ≥ 2 weeks before go-live" },
        { check: "QBR cadence calendared with named contacts on both sides" },
        { check: "Incident + refund flow documented and posted at machine" },
      ],
    },
    {
      heading: "7. Decision tree (summary)",
      items: [
        { number: 1, title: "If subsidy budget < $40k/year", description: "Default to full-service operator with retail pricing. Subsidy applied selectively to hydration / real meals." },
        { number: 2, title: "If subsidy budget $40–150k/year + 200–500 FTE", description: "Full-service operator with hybrid smart-cooler stack. Subsidy mechanic via badge ID + payroll-deduct or wellness account." },
        { number: 3, title: "If subsidy budget > $150k/year + > 500 FTE + on-site food service org", description: "Self-service worth modeling — likely break-even or favorable on TCO if revenue > $250k/year and labor available." },
        { number: 4, title: "If multi-site (≥ 5 hubs)", description: "Full-service preferred for operational consistency and reporting roll-up across network." },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "LetUsVending is equipped to coordinate full-service or hybrid logistics-hub vending through operators that can attest to telemetry depth, SLA tiers, fresh-food capability, and payroll-deduct integration described above. We can support a TCO comparison and operator selection — capability documentation provided on request during scoping. We do not claim engagements at any specific named logistics operator; framing is operator-attestable capacity.",
    },
  ],
  footer:
    "Numbers shown are framework ranges; replace with site-specific figures from your operator(s) before a procurement decision.",
});

console.log("wrote "+"cost-benefit-self-full-service-vending-logistics");
