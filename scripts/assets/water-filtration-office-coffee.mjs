import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "water-filtration-office-coffee",
  assetType: "template",
  title: "Office Coffee Water Filtration — Specification Template",
  subtitle: "Technology selection, sizing, operator capability checks, and cartridge schedule",
  intro:
    "Use this template to specify water filtration for an office coffee program. Water is the largest input to coffee by volume and the biggest driver of taste, scale buildup, and equipment lifespan. Numbers and standards below reference the SCA Water Standard, NSF/ANSI 42 + 53 + 58 filtration certifications, and typical equipment OEM specs. Confirm operator capability in writing before contract execution.",
  sections: [
    {
      heading: "1. Water target — SCA Water Standard",
      paragraph:
        "The Specialty Coffee Association publishes a water standard for brewing. Filtration should be sized to land within the target ranges below. Operator should attest to a baseline water test before install and at every annual recertification.",
      headers: ["Parameter", "Target (SCA)", "Acceptable range", "Failure mode if out of range"],
      rows: [
        ["Total dissolved solids (TDS)", "150 mg/L", "75-250 mg/L", "Low: flat taste, over-extraction. High: scale, bitterness."],
        ["Calcium hardness", "4 grains/gal (68 mg/L as CaCO3)", "1-5 gr/gal", "High: scale buildup in boiler + group head"],
        ["Total alkalinity", "40 mg/L as CaCO3", "40-70 mg/L", "Low: sour cup. High: chalky, flat."],
        ["pH", "7.0", "6.5-7.5", "Low: corrosion + sour cup. High: scale + flat."],
        ["Chlorine + chloramine", "0 mg/L", "0 mg/L", "Any detectable: off flavors + accelerated equipment wear"],
        ["Iron, copper, sodium", "0 mg/L (Fe, Cu); < 10 mg/L Na", "Trace acceptable", "Iron: metallic taste. Sodium: salty cup, scale displaced."],
      ],
    },
    {
      heading: "2. Filtration technology selection",
      paragraph:
        "Selection depends on baseline source water test (always required), brewer count, daily volume, and local water chemistry. Operator should test source water before specifying the filtration package.",
      headers: ["Technology", "What it removes", "Best fit", "Typical cost per 1000 gal"],
      rows: [
        ["Carbon block (NSF/ANSI 42)", "Chlorine, chloramine, taste + odor", "All installations as baseline", "$8-$15"],
        ["Carbon + softener (cation exchange)", "+ calcium, magnesium (hardness)", "Hard-water markets > 7 gr/gal", "$15-$25"],
        ["Reverse osmosis + remineralization (NSF/ANSI 58)", "TDS, hardness, sodium, iron, chloride", "Very hard or high-TDS source water, espresso programs", "$30-$60"],
        ["UV (NSF/ANSI 55)", "Microbial inactivation", "Well-water sources or municipal advisories", "$5-$10"],
        ["Sediment pre-filter (5 micron)", "Sand, rust, silt", "Older buildings with iron piping", "$3-$8"],
      ],
    },
    {
      heading: "3. Sizing per equipment + volume",
      paragraph:
        "Filter capacity is measured in gallons treated. Sizing should target 3-6 month cartridge life under the actual brewer load. Undersized filters fail early and create off-flavors; oversized filters waste capital.",
      headers: ["Daily cups", "Estimated gal/day (water in)", "Annual gal", "Recommended filtration capacity"],
      rows: [
        ["30-90", "1-3", "365-1,100", "Single carbon block 9,000-15,000 gal (Everpure 4FC-S or comparable)"],
        ["90-250", "3-8", "1,100-2,900", "Carbon block + softener 18,000-25,000 gal (Everpure 7FC-S + 4SI)"],
        ["250-500", "8-15", "2,900-5,500", "Dual stage carbon + softener 30,000-40,000 gal (3M MC2 dual)"],
        ["500-1000", "15-30", "5,500-11,000", "RO + remineralization 50-150 gal/day capacity (3M ScaleGard HP or comparable)"],
        ["1000+", "30+", "11,000+", "Tank-based RO with re-mineralization, 200+ gal/day"],
      ],
    },
    {
      heading: "4. Operator capability checks",
      items: [
        { check: "Operator should attest to baseline source-water test at install (TDS, hardness, alkalinity, pH, chlorine, iron) using a certified lab or NSF/ANSI test kit." },
        { check: "Operator should attest to filtration system certified to NSF/ANSI 42 (taste + odor), 53 (health contaminants), or 58 (RO) as applicable for the technology." },
        { check: "Operator should attest to cartridge schedule (3-month minimum cadence for carbon block + softener; pressure-drop or flow-rate triggered for RO; UV bulb 12-month replacement)." },
        { check: "Operator should attest to post-install water test at first cartridge change to verify SCA water targets met." },
        { check: "Operator should attest to plumbing in compliance with local plumbing code (uniform plumbing code or equivalent), backflow prevention per ASSE 1024 if required by local jurisdiction." },
        { check: "Operator should attest to legionella prevention plan where the system includes warm-water storage or pre-heated supply (ASHRAE 188 reference)." },
      ],
    },
    {
      heading: "5. Cartridge replacement schedule",
      headers: ["Cartridge type", "Replacement cadence", "Trigger", "Disposal"],
      rows: [
        ["5-micron sediment pre-filter", "3 months or pressure drop > 15 psi", "Pressure gauge or 90-day calendar", "Landfill or recycle per municipality"],
        ["Carbon block (NSF/ANSI 42)", "6 months or 50% capacity by gallon counter", "Calendar + gallon counter", "Landfill; carbon content non-hazardous"],
        ["Softener (cation exchange)", "12 months or 80% capacity", "Hardness test or capacity tracker", "Manufacturer recycling program where available"],
        ["RO membrane (NSF/ANSI 58)", "24-36 months", "TDS rejection rate < 85% or low flow", "Manufacturer recycling program"],
        ["UV lamp (NSF/ANSI 55)", "12 months", "Calendar; UV intensity monitor", "Mercury-containing lamp — recycle per EPA"],
      ],
    },
    {
      heading: "6. Operator scope + service SLA",
      items: [
        { label: "Filtration ownership", value: "Operator owns + installs filtration system at no cost as part of equipment lease; cartridges included in service contract." },
        { label: "Cartridge logistics", value: "Operator stocks replacement cartridges; tech swap on scheduled cadence or telemetry trigger. Spent cartridges removed at swap." },
        { label: "Water test + reporting", value: "Operator provides post-install water test report and annual recertification report; results delivered to facilities POC." },
        { label: "Service SLA", value: "Tier-1 (no water flow, leak, scale advisory) ≤ 4 hour onsite; Tier-2 (off-flavor complaint, cartridge swap) ≤ 24 hour onsite; Tier-3 (preventive cadence) on scheduled date." },
        { label: "Annual recertification", value: "Annual filter audit + water re-test + cartridge schedule update; signed report retained in facilities + procurement file." },
      ],
    },
    {
      heading: "7. Cost model + budget line",
      paragraph:
        "Typical filtration costs below for a 200-cup/day office program. Operator may include in equipment lease or bill as a service line.",
      items: [
        { label: "Install (one-time)", value: "$300-$800 for plumbing tie-in + filter manifold (carbon + softener) or $1,500-$3,500 for RO + remineralization system." },
        { label: "Quarterly cartridge service", value: "$60-$180 per service visit, depending on cartridge mix and labor rate." },
        { label: "Annual recertification + water test", value: "$150-$400 lab test fees + tech labor." },
        { label: "Energy + water cost", value: "RO systems reject ~3 gal for every 1 gal produced; budget for water cost in markets where municipal water is metered." },
      ],
    },
  ],
  footer:
    "This template is informational and not engineering or plumbing advice. Confirm filtration design with a licensed plumber and the local water authority; backflow prevention and RO drain requirements vary by jurisdiction. Operator capability should be confirmed in writing.",
});

console.log("wrote " + "water-filtration-office-coffee");
