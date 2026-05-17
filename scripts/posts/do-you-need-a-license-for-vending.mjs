import { seedPost, tldr, statStrip, comparisonTable, specList, decisionTree, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("do-you-need-a-license-for-vending", [
  tldr({
    heading: "Do you need a license to start a vending machine business?",
    paragraph:
      "Yes — vending operators need a layered license framework that varies by state, city, and placement type. The baseline stack at most operators: (1) business entity formation (LLC or S-Corp registered with state Secretary of State, $50-$500 filing fee), (2) federal EIN from IRS (free, required for business banking and tax filing), (3) sales-tax registration in every state of operation (free, required for retail sales), (4) state vending operator license where required (CA, FL, IL, NY, OH, PA, MD, NJ, MA among the states with explicit vending operator licensing — $25-$500 typical), (5) local business license at city or county level ($25-$300 typical), (6) health department permit where machines vend perishable food (refrigerated, fresh food, milk products — required in most jurisdictions; $50-$500 annual fee), (7) commercial general liability + product liability + auto insurance ($1K-$3K annual). Additional layers for specialty placements: K-12 school sites may require state-vendor registration plus background check; federal facilities require GSA Schedule or alternative federal contracting registration; healthcare placements may require facility-level vendor credentialing through Symplr, Vendormate, or similar. Compliance is not optional — operating without required licenses can produce penalty fines ($500-$10K typical first offense), sales-tax assessments with interest, contract disqualification at structured accounts, and possible criminal exposure at egregious violations. Verify requirements with each state Department of Revenue, state Secretary of State, and city/county clerk before launch.",
    bullets: [
      { emphasis: "Layered framework — federal + state + local + placement-specific:", text: "Baseline: LLC + EIN + sales-tax + commercial insurance everywhere. State vending operator license in select states. Local business license in most jurisdictions. Health permit for perishable food." },
      { emphasis: "State vending operator license in select states:", text: "CA, FL, IL, NY, OH, PA, MD, NJ, MA among states with explicit vending operator licensing. Verify with state Department of Revenue. $25-$500 typical; some states tier by fleet size." },
      { emphasis: "Specialty placement layers — K-12 + federal + healthcare:", text: "K-12 may require state-vendor registration + background check. Federal sites require GSA Schedule or alternative. Healthcare placements may require facility credentialing through Symplr or Vendormate." },
    ],
  }),
  statStrip({
    heading: "Vending licensing benchmarks",
    stats: [
      { number: "All 50", label: "states require sales-tax registration", sub: "for retail sales", accent: "blue" },
      { number: "8+", label: "states with explicit vending license", sub: "CA, FL, IL, NY, OH, PA, MD, NJ, MA", accent: "blue" },
      { number: "$300-1.5K", label: "typical first-year license cost", sub: "across all layers", accent: "orange" },
      { number: "$500-10K", label: "penalty range first offense", sub: "operating without license", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "License layers and what they require",
    sub: "Each layer applies at different scope. Verify with the relevant agency before launch; requirements vary by state, county, and placement type.",
    headers: ["License layer", "Scope", "Typical cost", "Issuing agency"],
    rows: [
      ["LLC or S-Corp formation", "Federal + state — required everywhere", "$50-$500 filing fee", "State Secretary of State"],
      ["EIN (Employer ID Number)", "Federal — required for banking and taxes", "Free", "IRS"],
      ["Sales-tax registration", "Each state of operation — required everywhere", "Free", "State Department of Revenue"],
      ["State vending operator license", "Select states (CA, FL, IL, NY, OH, PA, MD, NJ, MA)", "$25-$500 annual", "State Department of Revenue or Licensing"],
      ["Local business license", "City or county — required in most jurisdictions", "$25-$300 annual", "City or county clerk"],
      ["Health department permit", "Required for perishable food vending", "$50-$500 annual", "Local or state health department"],
      ["Commercial insurance", "Required at most accounts", "$1K-$3K annual", "Commercial insurance broker"],
      ["K-12 state vendor registration", "K-12 school sites in many states", "$50-$300 + background check", "State Department of Education"],
      ["GSA Schedule (federal sites)", "Federal facilities — required for direct federal contracts", "Multi-month registration process", "GSA / SAM.gov"],
      ["Healthcare facility credentialing", "Hospital and clinic placements at many systems", "$100-$500 per facility annual", "Symplr / Vendormate / facility vendor office"],
    ],
  }),
  specList({
    heading: "License layer detail",
    items: [
      { label: "Business entity formation (LLC or S-Corp)", value: "Filed with state Secretary of State where business is domiciled. LLC most common for vending operators — pass-through taxation, limited personal liability, modest administrative overhead. S-Corp viable for operators with employees and structured payroll. Filing fee $50-$500 depending on state. Annual report requirement in most states ($25-$150). Required as foundation for all other layers and for business banking." },
      { label: "Federal EIN (Employer ID Number)", value: "Issued free by IRS through online application (5-10 minutes). Required for business bank account, tax filing, hiring employees, and most state-level registrations. Sole proprietors can sometimes use SSN but EIN is recommended for separation of personal and business identity. Required even if no employees." },
      { label: "Sales-tax registration (each state of operation)", value: "Required for retail sales of food, beverages, and other items in all 50 states (45 states levy sales tax; remaining 5 may still require registration for other taxes). File with state Department of Revenue; receive sales tax permit or seller's permit. Some states tier by sales volume; small operators may qualify for simplified filing. Sales tax remitted monthly or quarterly. Operating without registration produces assessment plus interest plus penalty." },
      { label: "State vending operator license (where required)", value: "States with explicit vending operator licensing: California (CDTFA seller's permit + local business license), Florida (Division of Hotels and Restaurants), Illinois (Department of Revenue), New York (Department of Taxation), Ohio (Department of Taxation), Pennsylvania (Department of Revenue), Maryland (Department of Health vending machine license), New Jersey (Treasury), Massachusetts (Department of Revenue). Verify current requirement with state Department of Revenue. Cost $25-$500 typical. Some states tier by fleet size or specialty." },
      { label: "Local business license (city or county)", value: "Required in most jurisdictions. Filed with city or county clerk. Cost $25-$300 typical. May require posting of license at place of business (operator office or home office). Some jurisdictions exempt very small operators; verify with city/county clerk. Renew annually. Multi-jurisdiction operators register in each jurisdiction of operation." },
      { label: "Health department permit (perishable food)", value: "Required where machines vend perishable food: refrigerated sandwiches, fresh fruit, dairy, salads, microwavable entrees. Standard snack and beverage machines typically don't require health permit. Filed with local or state health department. Cost $50-$500 annual. May require periodic inspection of commissary kitchen or warehouse. Verify requirement with health department before launching fresh food line." },
      { label: "Commercial insurance (general liability + product liability + auto)", value: "Required at most commission accounts and required for risk management. General liability $1M-$2M per occurrence covers third-party bodily injury and property damage. Product liability covers food-safety incidents. Commercial auto covers cargo van and operator vehicle. Workers comp required if hiring route tech. Total $1K-$3K first year for small operator; scales with fleet size and payroll." },
      { label: "K-12 state vendor registration", value: "K-12 school sites in many states require state vendor registration plus background check on operator and route tech. State Department of Education or state purchasing office handles registration. Cost $50-$300 plus background check $25-$100 per person. Required before placement install at K-12 sites; allow 4-12 weeks for processing." },
      { label: "GSA Schedule (federal facilities)", value: "Federal facilities (military bases, federal office buildings, VA hospitals, federal courthouses) require GSA Schedule or alternative federal contracting registration (SAM.gov, NAICS code 454210). Multi-month registration process; specialized operator positioning. Most vending startups pursue federal sites only after establishing 12-24 months commercial track record." },
      { label: "Healthcare facility vendor credentialing", value: "Hospital and clinic placements at many systems require facility-level vendor credentialing through Symplr, Vendormate, ReadyOn, or equivalent. Includes background check, immunization records for route tech (TB, flu, MMR, hepatitis B), HIPAA training where applicable, drug screening. Cost $100-$500 per facility annual. Healthcare placements specialized; build credentialing into proposal." },
    ],
  }),
  decisionTree({
    heading: "Do I need a state vending operator license?",
    question: "Does your state appear on the explicit vending operator licensing list (CA, FL, IL, NY, OH, PA, MD, NJ, MA) — or has your state Department of Revenue confirmed vending operator license requirement on its current schedule?",
    yesBranch: {
      title: "Yes — file state vending operator license plus baseline stack",
      description: "Required state vending operator license plus full baseline stack: LLC + EIN + sales-tax registration + local business license + commercial insurance + health permit where applicable. Verify current fee and filing process with state Department of Revenue. Allow 4-12 weeks for processing. Include in formation timeline at months 1-2. Don't begin operations until license is issued.",
      finalTone: "go",
      finalLabel: "File state license",
    },
    noBranch: {
      title: "No state vending license — baseline stack still required",
      description: "Sales-tax registration still required in every state of retail sale. LLC + EIN + local business license + commercial insurance + health permit where applicable. State without explicit vending operator licensing still requires sales-tax permit and may require business registration through state Department of Revenue. Verify with state Department of Revenue and city/county clerk before launch.",
      finalTone: "stop",
      finalLabel: "File baseline stack",
    },
  }),
  tipCards({
    heading: "Five licensing mistakes",
    sub: "Each documented in operator post-launch reviews and state Department of Revenue enforcement records. All preventable with structured pre-launch compliance.",
    items: [
      { title: "Skipping sales-tax registration", body: "Most common compliance mistake. Required in every state of retail sale (all 50). Operating without registration produces tax assessment plus interest plus penalty when discovered — state Department of Revenue audits can reach back 4-7 years. File before first sale; remit monthly or quarterly per state schedule." },
      { title: "Operating in multiple states without each registration", body: "Sales-tax registration is per-state, not federal. Operating in 3 states requires 3 separate registrations. Most multi-state operators register in each state of placement; some use sales-tax-collection software (Avalara, TaxJar) to manage compliance at scale. Skipping registration in border-state placements produces audit exposure." },
      { title: "No health permit on perishable food machines", body: "Refrigerated sandwich, fresh fruit, dairy, salad, microwavable entree machines require health permit in most jurisdictions. Standard snack and beverage machines typically don't. Skipping health permit on perishable food machines produces health department violations, product recalls, and contract disqualification at healthcare and school sites." },
      { title: "No commercial insurance at structured accounts", body: "Commission accounts (offices, schools, healthcare, government, corporate campus) require commercial general liability + product liability + auto insurance. Most contracts require certificate of insurance at signature. Operating without commercial insurance produces contract disqualification and uninsured exposure on any guest injury or food-safety incident." },
      { title: "Mixing personal and business finances", body: "Operating vending business through personal bank account voids LLC liability protection (piercing the corporate veil) and creates tax and audit problems. Open business bank account at LLC formation; route all vending revenue and expense through business account. Separate business credit card. Quarterly accounting review by CPA recommended." },
    ],
  }),
  inlineCta({
    text: "Want the licensing framework with state-by-state checklist and renewal timeline?",
    buttonLabel: "Get the licensing framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to advise vending operators on the licensing framework — state-by-state vending operator license requirements, sales-tax registration across multi-state placements, local business license filing, health department permit for perishable food, commercial insurance specification, and K-12 / federal / healthcare specialty layers. The framework reflects current state Department of Revenue schedules and operator-side filings; verify each layer with the relevant agency before launch.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Do I need a license to operate a vending machine?", answer: "Yes — at minimum sales-tax registration in every state of operation and LLC or sole-proprietor business registration. Many states (CA, FL, IL, NY, OH, PA, MD, NJ, MA among them) require explicit vending operator license. Most jurisdictions require local business license. Health permit required for perishable food. Verify each layer with state Department of Revenue and city/county clerk before launch.", audience: "Founders" },
      { question: "What's the cost of all the licenses?", answer: "$300-$1,500 first-year cost typical across LLC formation ($50-$500), EIN (free), sales-tax registration (free), state vending license ($25-$500 where required), local business license ($25-$300), health permit if applicable ($50-$500), and commercial insurance ($1K-$3K). Total scales with state and placement type; specialty placements (K-12, federal, healthcare) add credentialing layers.", audience: "Founders" },
      { question: "Which states require an explicit vending operator license?", answer: "Among states with explicit vending operator licensing: California, Florida, Illinois, New York, Ohio, Pennsylvania, Maryland, New Jersey, Massachusetts. Requirements change — verify current schedule with state Department of Revenue or licensing office. Some states tier license by fleet size or specialty (food vs non-food). States without explicit license still require sales-tax registration and may require business registration.", audience: "Founders" },
      { question: "Do I need a license for a single machine in a friend's office?", answer: "Yes for sales-tax registration and likely for local business license. State vending operator license depends on state. The fleet-size threshold doesn't typically exempt operators — a single machine is enough to trigger registration and tax remittance. Some jurisdictions have hobbyist or de minimis exemptions; verify with state Department of Revenue and city clerk.", audience: "Founders" },
      { question: "What about machines that vend fresh food or refrigerated products?", answer: "Health department permit required in most jurisdictions for refrigerated, fresh food, dairy, and microwavable entree vending. Standard snack and beverage machines typically don't require health permit. File with local or state health department; allow 4-8 weeks for processing including possible commissary inspection. Cost $50-$500 annual.", audience: "Founders" },
      { question: "Do I need insurance for vending?", answer: "Yes — commercial general liability + product liability + commercial auto strongly recommended and required at most commission accounts. $1M-$2M per occurrence general liability typical. Product liability covers food-safety incidents. Commercial auto covers cargo van. Workers comp if hiring route tech. Total $1K-$3K first year for small operator; required for certificate of insurance at structured account signature.", audience: "Founders" },
      { question: "What licenses do K-12 placements require?", answer: "K-12 school sites in many states require state vendor registration through state Department of Education or state purchasing office plus background check on operator and route tech. Some districts also require district-level vendor credentialing. Allow 4-12 weeks for processing. USDA Smart Snacks compliance documentation required for SKU planogram. Build into proposal timeline.", audience: "Founders" },
      { question: "What happens if I operate without a license?", answer: "Penalty fines $500-$10K typical first offense; sales-tax assessment plus interest reaching back 4-7 years; contract disqualification at structured accounts; possible criminal exposure at egregious violations. State Department of Revenue audits routine. Compliance is not optional — file all required layers before first sale; renew annually.", audience: "Founders" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "IRS — EIN online application", url: "https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online", note: "Federal EIN application for business identification" },
      { label: "SBA — business license and permit guidance", url: "https://www.sba.gov/business-guide/launch-your-business/apply-licenses-permits", note: "Federal small business administration guidance on business licensing" },
      { label: "NAMA — vending operator regulatory resources", url: "https://www.namanow.org/", note: "Industry trade association covering operator licensing + state compliance" },
      { label: "GSA — federal contracting registration", url: "https://www.gsa.gov/buy-through-us/purchasing-programs/multiple-award-schedule", note: "Federal contracting registration for federal facility vending placements" },
      { label: "Avalara — multi-state sales-tax compliance", url: "https://www.avalara.com/", note: "Sales-tax compliance software for multi-state vending operators" },
    ],
  }),
  relatedGuides({
    heading: "Related compliance guides",
    items: [
      { eyebrow: "Sister guide", title: "Vending business checklist", description: "Pre-launch checklist covering formation, licensing, equipment, insurance, sourcing, and account development.", href: "/vending-business-startup/vending-business-checklist" },
      { eyebrow: "Operations", title: "How to start a vending machine business", description: "Step-by-step launch sequence including state-by-state license filing and first-installation timeline.", href: "/vending-business-startup/how-to-start-a-vending-machine-business" },
      { eyebrow: "Hub", title: "All vending business startup guides", description: "Formation, capital, licensing, equipment, sourcing, and operations across vending startup topics.", href: "/vending-business-startup" },
    ],
  }),
]);
process.exit(0);
