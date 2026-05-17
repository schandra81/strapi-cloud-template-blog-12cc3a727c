import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "fair-trade-coffee-workplace",
  assetType: "template",
  title: "Fair Trade Workplace Coffee Template",
  subtitle: "Certification framework + operator verification + ESG reporting integration",
  intro:
    "Workplace coffee programs increasingly require third-party-certified sourcing — Fair Trade USA, Fairtrade International (FLOCERT), Rainforest Alliance (post-2020 UTZ merger), Smithsonian Bird Friendly, or USDA Organic — to support ESG / GRI / SASB reporting. This fillable template gives procurement + sustainability leads a certification framework, operator verification checklist, and a quarterly attribute-claim review that integrates with GRI 308 (Supplier Environmental Assessment), GRI 414 (Supplier Social Assessment), and SASB Food & Beverage standard FB-AG-430a (sustainable sourcing).",
  sections: [
    {
      heading: "1. Certification scheme comparison",
      headers: ["Scheme", "Standard reference", "Premium / pricing", "Best fit"],
      rows: [
        ["Fair Trade USA — Coffee", "Producer Standard v3.0 (2024)", "Floor price + community premium ($0.20/lb min); $0.30/lb organic differential", "US-domiciled programs; broader producer scope incl. unorganized smallholders"],
        ["Fairtrade International (FLOCERT)", "Standard for Small-scale Producer Organizations (SPO) for Coffee", "Minimum price $1.80/lb washed Arabica + $0.20/lb Fairtrade Premium; organic differential", "International programs; cooperative-only scope"],
        ["Rainforest Alliance (2020 standard)", "RA 2020 Sustainable Agriculture Standard", "Sustainability investment + market premium; no fixed floor", "Biodiversity + climate-resilient farming emphasis"],
        ["Smithsonian Bird Friendly", "Bird Friendly® standard (2022 update)", "Premium varies; organic + shade required", "Biodiversity + migratory bird habitat"],
        ["USDA Organic", "7 CFR Part 205 (NOP)", "Market premium; no fixed floor", "Pesticide / herbicide / synthetic fertilizer free"],
        ["Stacked certifications", "Multiple", "Cumulative premium", "ESG-prominent programs"],
      ],
    },
    {
      heading: "2. Program scope + objectives — fill in",
      items: [
        { label: "Program name", value: "[NAME]" },
        { label: "Sustainability owner", value: "[NAME, TITLE] — ESG lead or procurement" },
        { label: "Effective date / review cadence", value: "[DATE] / Annual" },
        { label: "Target coverage", value: "[%] of total coffee volume certified under at least one scheme in §1 by [TARGET DATE]." },
        { label: "Primary scheme(s) accepted", value: "[FAIR TRADE USA / FAIRTRADE INTL / RAINFOREST ALLIANCE / SMITHSONIAN BIRD FRIENDLY / USDA ORGANIC]" },
        { label: "Reporting alignment", value: "GRI 308 + GRI 414 + SASB FB-AG-430a + (where applicable) CSRD ESRS S2 + EU CSDDD" },
      ],
    },
    {
      heading: "3. Operator verification checklist",
      paragraph:
        "Operator (and roaster, where separate) must provide documentation traceable to the certifying body. Verify at contract execution and annually.",
      items: [
        { check: "Certificate copy: Fair Trade USA / FLOCERT (Fairtrade International) / Rainforest Alliance / Smithsonian / USDA Organic — current, dated within 12 months, scope covering supplied coffee." },
        { check: "Chain-of-custody traceability: roaster + green-coffee importer named; certificate IDs link to certifying body's public registry." },
        { check: "Volume attestation: roaster confirms % of supplied volume certified — physical (segregation) vs mass balance basis stated." },
        { check: "Premium use disclosure (Fair Trade / Fairtrade): producer organization use of premium published or available." },
        { check: "Organic certification (where claimed): USDA-accredited certifying agent named; certificate scope covers green coffee + roasting facility." },
        { check: "Marketing claims compliance: claims align with FTC Green Guides (16 CFR Part 260) and (where applicable) EU CSRD anti-greenwashing rules." },
      ],
    },
    {
      heading: "4. SKU + facing inventory",
      paragraph:
        "List every SKU served by the program with its certifications. Refresh quarterly.",
      headers: ["SKU / blend", "Roaster", "Certifications", "% of program volume"],
      rows: [
        ["[BLEND NAME]", "[ROASTER]", "[FT / RA / SBF / USDA-O]", "[%]"],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
      ],
    },
    {
      heading: "5. Operator MSA additions",
      items: [
        { label: "Certification attestation", value: "Operator signs annual attestation that ≥ [%] of supplied volume meets the scheme(s) named in §2 — physical or mass balance basis stated." },
        { label: "Substitution protocol", value: "If a certified SKU is unavailable, operator substitutes a same-or-higher-tier certified SKU. No downgrade without 30-day written notice." },
        { label: "Marketing claims", value: "Operator does not use certification logos beyond scope of supplied coffee; FTC Green Guides + scheme logo-use guidelines followed." },
        { label: "Audit cooperation", value: "Operator provides annual third-party certification documentation packet to ESG / sustainability owner; supports facility audit on 10-business-day notice." },
        { label: "ESG data feed", value: "Operator provides per-quarter volume + certification report formatted for GRI 308 / 414 + SASB FB-AG-430a inputs." },
        { label: "Reformulation notice", value: "Any change to blend / origin / certification status notified 60 days in advance." },
      ],
    },
    {
      heading: "6. ESG / GRI / SASB integration",
      paragraph:
        "Outputs from this template feed into common ESG reporting frameworks. The data points listed are commonly requested at SASB FB-AG-430a, GRI 308-1, GRI 414-1, and ESRS S2.",
      items: [
        { check: "% of coffee volume certified (by scheme); year-over-year trend." },
        { check: "Number + names of certified suppliers; geographic origin breakdown." },
        { check: "Premium paid (Fair Trade / Fairtrade) — total $ and per-lb basis." },
        { check: "Audit findings + corrective actions on supplier social / environmental assessment." },
        { check: "Anti-greenwashing review: marketing claims aligned with FTC Green Guides (16 CFR 260) and EU CSRD-aligned rules where applicable." },
        { check: "Internal use only vs public disclosure: classification documented." },
      ],
    },
    {
      heading: "7. Quarterly review + annual audit",
      items: [
        { number: 1, title: "Quarterly attribute review", description: "Verify % of volume per scheme; refresh SKU inventory in §4; confirm operator certificates still valid; log any substitutions." },
        { number: 2, title: "Annual audit packet", description: "Operator delivers full year-in-review: certificate copies, volume attestation, premium use (where applicable), substitution log, marketing-claims log." },
        { number: 3, title: "Annual ESG / GRI / SASB submission", description: "Sustainability owner pulls metrics from §6 into ESG report; documents methodology + boundary." },
        { number: 4, title: "Triennial certifying-body verification", description: "Where program is material to ESG report, request direct verification from certifying body (FLOCERT, Fair Trade USA, RA, SMBC, USDA accredited certifier) on a 3-year cadence." },
      ],
    },
  ],
  footer:
    "Template only — not legal or audit advice. Verify scheme requirements with the certifying body and align marketing claims with FTC Green Guides (16 CFR Part 260) and applicable EU CSRD rules. LetUsVending is equipped to coordinate operators with certified-coffee roasters and ESG-ready attestation packets.",
});

console.log("wrote "+"fair-trade-coffee-workplace");
