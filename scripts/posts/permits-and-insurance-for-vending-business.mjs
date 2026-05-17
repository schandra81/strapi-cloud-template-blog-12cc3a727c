import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, timeline, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("permits-and-insurance-for-vending-business", [
  tldr({
    heading: "What permits and insurance does a vending business actually need — and which jurisdictions matter?",
    paragraph:
      "A vending business operates across four overlapping regulatory layers: (1) federal — IRS EIN, FDA food handler registration where the operator handles or repacks food (vs vending pre-packaged manufacturer-sealed SKUs which generally don't trigger FDA registration), USDA Smart Snacks compliance at K-12 placements, FALCPA + FASTER Act allergen labeling at packaged SKUs; (2) state — state sales tax permit (almost all states), state vending machine operator license (varies by state — required in WA, MD, NY, MI and others), state food handler permit at fresh-food and AI cooler placements, weights and measures certification where machines dispense weight-based products; (3) local — city or county business license, health department permit at fresh-food placements, sales tax registration with local jurisdiction, zoning compliance at warehouse / commissary, ADA compliance at customer-facing equipment; (4) placement-specific — host facility insurance certificate, ID badge or background check at federal worksites and K-12 schools, FITPICK certification where required by host, building access agreements. Insurance baseline — general liability $1M per occurrence / $2M aggregate is the standard placement requirement; commercial auto liability $1M for route vehicles; product liability $1M (often within general liability); workers comp per state requirement; commercial property insurance on inventory and equipment. Total annual insurance premium runs $2,400-$8,000 for a small-to-mid vending operator (10-50 machines). Permit + insurance cost is not the primary business expense, but missing permits at placement audit (especially K-12 USDA Smart Snacks documentation, federal worksite badging, state operator license) terminates placement contracts. Verify per-jurisdiction at expansion stage.",
    bullets: [
      { emphasis: "Four regulatory layers:", text: "Federal (IRS, FDA, USDA, FALCPA), state (sales tax, operator license, food handler), local (business license, health permit, ADA), placement-specific (insurance certificate, ID badge, FITPICK)." },
      { emphasis: "Insurance baseline $1M/$2M general liability:", text: "Standard placement requirement. Plus commercial auto, workers comp per state, product liability (often within GL), property insurance on inventory and equipment. Total annual premium $2,400-$8,000 small-to-mid operator." },
      { emphasis: "Missing permits terminate placement contracts:", text: "K-12 USDA Smart Snacks, federal worksite badging, state operator license. Permit + insurance is not primary expense but missing documentation at audit ends placement. Verify per-jurisdiction at expansion." },
    ],
  }),
  statStrip({
    heading: "Vending business permit + insurance benchmarks",
    stats: [
      { number: "$1M/$2M", label: "general liability standard", sub: "per occurrence / aggregate", accent: "blue" },
      { number: "$2.4-8K", label: "annual insurance premium", sub: "small-to-mid operator", accent: "orange" },
      { number: "4 layers", label: "regulatory layers", sub: "federal + state + local + host", accent: "blue" },
      { number: "10-25%", label: "states require operator license", sub: "varies by state", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Permit and insurance requirements by regulatory layer",
    sub: "Four regulatory layers with distinct documentation and renewal cadence. Verify at expansion stage and at each new jurisdiction.",
    headers: ["Regulatory layer", "Common requirements", "Typical cost annual", "Renewal cadence"],
    rows: [
      ["Federal — IRS EIN", "EIN registration for tax filing", "$0 one-time", "Permanent"],
      ["Federal — FDA food handler", "Registration if handling/repacking food", "$0-$300", "Renewable per FDA"],
      ["Federal — USDA Smart Snacks (K-12)", "Compliance documentation per K-12 placement", "$200-$500", "Annual"],
      ["Federal — FALCPA + FASTER Act allergen", "Top 9 allergen labeling at packaged SKUs", "Built into operator program", "Continuous"],
      ["State — sales tax permit", "Required in almost all states", "$0-$50 setup", "Variable (often perpetual)"],
      ["State — vending operator license", "Required in 10-15 states", "$50-$500", "Annual or biennial"],
      ["State — food handler permit", "Required at fresh-food / AI cooler placements", "$10-$100", "1-3 years"],
      ["Local — city/county business license", "Required in most jurisdictions", "$50-$500", "Annual"],
      ["Local — health department permit", "At fresh-food placements", "$50-$300", "Annual"],
      ["Insurance — general liability $1M/$2M", "Standard placement requirement", "$1,200-$3,500", "Annual"],
      ["Insurance — commercial auto liability", "Route vehicles", "$800-$2,500 per vehicle", "Annual"],
      ["Insurance — workers comp", "Per state requirement", "$500-$1,500", "Annual"],
      ["Placement-specific — host insurance certificate", "Named additional insured on operator GL", "$0 (in GL premium)", "Annual"],
      ["Placement-specific — federal worksite badging", "Background check + ID badge", "$50-$500", "1-3 years"],
    ],
  }),
  specList({
    heading: "Permit and insurance specifications by layer",
    items: [
      { label: "Federal IRS EIN registration", value: "Employer Identification Number from IRS required for tax filing, payroll, business banking. Free; one-time application via IRS Form SS-4. Required even for sole-proprietor operators with no employees. Permanent registration; no renewal." },
      { label: "Federal FDA food handler registration", value: "Required if operator handles or repacks food. Vending pre-packaged manufacturer-sealed SKUs (chips, candy, soda, packaged snacks) generally doesn't trigger FDA food facility registration. Fresh-food handling at AI cooler placements or micro-market repacking triggers FDA Food Facility Registration. Verify scope at operator startup stage; consult food law counsel where ambiguous. $0-$300 setup; renewable per FDA." },
      { label: "Federal USDA Smart Snacks documentation at K-12", value: "USDA Smart Snacks in School nutrition standards apply at K-12 vending placements during school day (midnight before to 30 minutes after end of school day). Documentation per placement: SKU nutrient compliance, calorie + sodium + fat + sugar limits per category, allergen labeling. $200-$500 annual documentation cost per K-12 placement. Required at K-12 placement contracts." },
      { label: "Federal FALCPA + FASTER Act allergen labeling", value: "Food Allergen Labeling and Consumer Protection Act + FASTER Act require allergen labeling on packaged food. Top 9 allergens (milk, eggs, fish, shellfish, tree nuts, peanuts, wheat, soy, sesame) declared on every packaged SKU. Built into operator SKU procurement program; manufacturer responsibility for labeling. Operator responsibility for SKU verification at placement. Continuous compliance." },
      { label: "State sales tax permit", value: "Almost all states require sales tax permit for vending operator. Free or $0-$50 setup in most states. Sales tax collected on each transaction; remitted to state per state cadence (monthly, quarterly, or annual). Multi-state operators register in each state with placement. Streamlined Sales Tax (SST) agreement simplifies multi-state in 24 SST states." },
      { label: "State vending machine operator license", value: "Required in 10-15 states — Washington, Maryland, New York, Michigan, Virginia, Massachusetts, others vary. Application + annual renewal. $50-$500 annual license fee. Documentation per license: business entity, insurance certificate, operator address, machine inventory. Verify state requirement at expansion to new state; license required before placement contract execution at applicable states." },
      { label: "State and local food handler permits at fresh-food placements", value: "Fresh-food and AI cooler placements with refrigerated SKUs require state or local food handler permit. ServSafe Food Handler certification ($10-$25 per handler) typical baseline. State and local health department permit at AI cooler placement ($50-$300 annual). HACCP plan documentation at fresh-food restock operations. Standard vending of pre-packaged SKUs generally doesn't require." },
      { label: "Local city/county business license", value: "Most cities and counties require business license for vending operator with placements in jurisdiction. $50-$500 annual license fee. Application documents: business entity, EIN, insurance certificate, business address, jurisdiction-specific zoning compliance at warehouse / commissary. Renewable annually. Multi-jurisdiction operators register in each jurisdiction with placement." },
      { label: "General liability insurance $1M per occurrence / $2M aggregate", value: "Standard placement requirement at host facility contracts. $1,200-$3,500 annual premium for small-to-mid operator (10-50 machines). Covers third-party bodily injury and property damage claims arising from vending operations. Host facility commonly named additional insured. Product liability coverage often within general liability policy. Verify policy structure at insurance broker stage." },
      { label: "Commercial auto liability insurance for route vehicles", value: "Commercial auto liability $1M per occurrence for route vehicles delivering inventory and servicing machines. $800-$2,500 annual premium per vehicle. Coverage includes bodily injury, property damage, uninsured motorist. Standalone policy or fleet policy depending on vehicle count. Operators with 5+ route vehicles typically use fleet policy with risk management coordination." },
      { label: "Workers compensation insurance per state requirement", value: "Workers comp required in nearly all states for operators with employees. $500-$1,500 annual premium typical for small operator with 2-5 route employees; higher with larger fleet and route hours. Coverage required regardless of state per state-specific rules. Operators with 1099 contractors versus W-2 employees have different coverage requirements; consult employment law counsel." },
      { label: "Commercial property insurance on inventory and equipment", value: "Commercial property insurance covers inventory at warehouse + commissary and machines in placement. $400-$1,200 annual premium typical for small-to-mid operator with $50K-$200K inventory + equipment value. Coverage includes theft, fire, water damage, mechanical breakdown. Excludes machine-in-placement vandalism in some policies; verify policy structure with broker." },
      { label: "Placement-specific host insurance certificate and indemnification", value: "Host facility contracts commonly require operator insurance certificate naming host as additional insured on general liability policy. Indemnification provisions in placement contract; verify with operator counsel. Hold harmless agreements at host facility require careful review. Insurance certificate refreshed annually or per policy renewal. Standard process at modern operator placement onboarding." },
      { label: "Federal worksite badging and background check requirements", value: "Federal worksite placements (GSA, DoD, agency) require ID badge and background check for route employees servicing machines. Background check $50-$500 per employee; renewable 1-3 years. ID badge issued by host facility; renewable per facility schedule. Additional badging requirements at TSA-controlled airport zones, secure courthouse zones, healthcare facilities. Verify per-placement at proposal stage." },
    ],
  }),
  timeline({
    heading: "Permit and insurance onboarding timeline for new vending business",
    sub: "Sequenced milestones from EIN registration through first placement contract execution. Verify per-jurisdiction at expansion stage.",
    howToName: "New vending business permit + insurance onboarding",
    totalTime: "60-120 days",
    steps: [
      { label: "Week 1-2", title: "Federal EIN registration + business entity formation", description: "Apply for IRS EIN via Form SS-4 (free; immediate online). Form LLC or corporation at state secretary of state ($50-$500 state filing fee). Open business banking account. Consult business law counsel where ambiguous on entity structure." },
      { label: "Week 2-4", title: "State sales tax permit + state vending operator license (where applicable)", description: "Apply for state sales tax permit in each state with planned placements. Apply for state vending operator license in WA, MD, NY, MI, VA, MA, others as applicable ($50-$500 annual). Multi-state operators register in each state. Streamlined Sales Tax (SST) simplifies in 24 SST states." },
      { label: "Week 3-6", title: "Local city/county business license + zoning compliance", description: "Apply for local business license in each jurisdiction with planned placements ($50-$500 annual). Verify zoning compliance at warehouse / commissary location (commercial vs industrial zoning required). Health department permit application at planned fresh-food placements ($50-$300 annual)." },
      { label: "Week 4-8", title: "Insurance broker engagement + policy binding", description: "Engage commercial insurance broker (vending-experienced preferred). Quote and bind general liability $1M/$2M, commercial auto liability $1M per vehicle, workers comp per state, commercial property on inventory + equipment. Annual premium $2,400-$8,000 for small-to-mid operator. Policy effective dates aligned with placement contract execution." },
      { label: "Week 6-10", title: "Federal compliance documentation (FDA, USDA, FALCPA)", description: "FDA Food Facility Registration if handling/repacking food. USDA Smart Snacks compliance documentation per K-12 placement. FALCPA + FASTER Act allergen labeling verification at packaged SKU procurement. ServSafe Food Handler certification at fresh-food handling employees ($10-$25 per handler)." },
      { label: "Week 8-12", title: "Placement-specific onboarding — host certificates, badging, FITPICK", description: "Operator insurance certificate to each host facility naming host as additional insured. Federal worksite badging and background check for route employees ($50-$500 per employee; 1-3 year renewal). FITPICK certification where required by host. Indemnification + hold harmless agreement review with operator counsel." },
    ],
  }),
  tipCards({
    heading: "Five permit and insurance mistakes at new vending business",
    sub: "Documented at vending business startup audit and placement contract termination case studies. All preventable with structured onboarding.",
    items: [
      { title: "Skipping state vending operator license at applicable states", body: "10-15 states require state-level vending operator license (WA, MD, NY, MI, VA, MA, others). Operators with placements in license-required states without license risk placement termination at audit. $50-$500 annual license fee — modest cost relative to placement contract value. Verify state requirement at expansion to new state." },
      { title: "Underinsured general liability below $1M/$2M", body: "Host facility placement contracts commonly require $1M per occurrence / $2M aggregate general liability minimum. Operators with $500K/$1M policy can't meet placement requirement. $1M/$2M policy is the standard placement baseline; quote at higher limits ($2M/$4M) for premium placements with elevated liability profile (universities, federal worksites, healthcare)." },
      { title: "No commercial auto liability on route vehicles", body: "Personal auto insurance generally excludes commercial use. Route vehicles servicing vending machines require commercial auto liability $1M per occurrence ($800-$2,500 annual per vehicle). Personal auto coverage gap at commercial use produces operator liability exposure. Quote commercial auto at broker engagement stage." },
      { title: "Missing FDA food facility registration at fresh-food handling", body: "Vending pre-packaged manufacturer-sealed SKUs generally doesn't trigger FDA food facility registration. Fresh-food handling at AI cooler placements or micro-market repacking triggers FDA Food Facility Registration. Operators with fresh-food handling without FDA registration face regulatory action. Verify scope at operator startup stage; consult food law counsel where ambiguous." },
      { title: "No FITPICK certification at certification-required placements", body: "FITPICK certification (NAMA-administered) is the industry-recognized healthy vending certification. Many wellness-program-mature placements (offices, healthcare, universities, federal worksites) require FITPICK or equivalent at RFP stage. Operators without certification lose at proposal screening. $250-$1,000 annual — modest investment relative to placement value." },
    ],
  }),
  keyTakeaways({
    takeaways: [
      "Four regulatory layers: federal (IRS, FDA, USDA, FALCPA), state (sales tax, operator license, food handler), local (business license, health permit), placement-specific (insurance certificate, badging, FITPICK).",
      "Insurance baseline: $1M/$2M general liability ($1,200-$3,500 annual), commercial auto $1M per vehicle ($800-$2,500 each), workers comp per state ($500-$1,500), commercial property on inventory + equipment.",
      "10-15 states require state-level vending operator license — Washington, Maryland, New York, Michigan, Virginia, Massachusetts, others. Verify state requirement at expansion to new state.",
      "Fresh-food handling at AI cooler or micro-market repacking triggers FDA Food Facility Registration. Pre-packaged manufacturer-sealed SKUs generally doesn't. Consult food law counsel where ambiguous.",
      "Permit + insurance cost is not primary business expense ($2,400-$8,000 annual) but missing permits at placement audit (K-12 USDA, federal worksite badging, state operator license) terminates placement contracts.",
    ],
  }),
  inlineCta({
    text: "Want the vending business permit + insurance onboarding framework (federal + state + local + placement layers + insurance baseline + timeline)?",
    buttonLabel: "Get the onboarding framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to advise new vending business operators on permit and insurance onboarding across federal, state, local, and placement-specific regulatory layers — including IRS EIN registration, FDA Food Facility Registration scope at fresh-food handling, USDA Smart Snacks compliance documentation at K-12 placements, FALCPA + FASTER Act allergen labeling verification, state sales tax permits, state vending operator license requirements in WA / MD / NY / MI and other applicable states, local business license and health department permits, general liability + commercial auto + workers comp insurance baseline at $1M/$2M standard, FITPICK certification at wellness-program-mature placements, and placement-specific indemnification + hold harmless agreement review. The onboarding framework reflects operator startup audit feedback and placement contract review across multiple jurisdictions.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What permits does a vending business need?", answer: "Four regulatory layers: federal (IRS EIN, FDA registration if handling/repacking food, USDA Smart Snacks at K-12, FALCPA + FASTER Act allergen labeling), state (sales tax permit almost everywhere, vending operator license in 10-15 states), local (city/county business license $50-$500 annual, health department permit at fresh-food placements), placement-specific (host insurance certificate, federal worksite badging, FITPICK certification where required). Verify per-jurisdiction at expansion.", audience: "New Operators" },
      { question: "What insurance does a vending business need?", answer: "General liability $1M per occurrence / $2M aggregate is the standard placement requirement ($1,200-$3,500 annual). Plus commercial auto liability $1M per vehicle ($800-$2,500 each), workers comp per state ($500-$1,500), commercial property on inventory + equipment ($400-$1,200), product liability often within general liability. Total annual premium $2,400-$8,000 for small-to-mid operator (10-50 machines).", audience: "New Operators / Finance" },
      { question: "Which states require a vending operator license?", answer: "10-15 states require state-level vending operator license — Washington, Maryland, New York, Michigan, Virginia, Massachusetts, others vary. $50-$500 annual license fee. Verify state requirement at expansion to new state; license required before placement contract execution at applicable states. Operators with placements in license-required states without license risk placement termination at audit.", audience: "New Operators" },
      { question: "Does vending trigger FDA food facility registration?", answer: "Generally no for pre-packaged manufacturer-sealed SKUs (chips, candy, soda, packaged snacks). Yes for fresh-food handling at AI cooler placements or micro-market repacking — triggers FDA Food Facility Registration. Operators with fresh-food handling without FDA registration face regulatory action. Verify scope at operator startup stage; consult food law counsel where ambiguous.", audience: "Compliance" },
      { question: "What about K-12 placements and USDA Smart Snacks?", answer: "USDA Smart Snacks in School nutrition standards apply at K-12 vending placements during school day (midnight before to 30 minutes after end of school day). Documentation per placement: SKU nutrient compliance, calorie + sodium + fat + sugar limits per category, allergen labeling. $200-$500 annual documentation cost per K-12 placement. Required at K-12 placement contracts.", audience: "K-12 Placements" },
      { question: "What about ADA and accessibility requirements?", answer: "Americans with Disabilities Act Title III applies at customer-facing vending equipment at public accommodation. Requirements include reach range (15-48 inches), operable parts (5-pound max activation force), pathway clearance (36 inches), payment system accessibility. Modern equipment supports ADA compliance; legacy equipment may not. Verify at equipment specification stage; particularly relevant at federal, university, healthcare placements.", audience: "Compliance / Operations" },
      { question: "How much does the permit + insurance package cost annually?", answer: "Total annual permit + insurance cost runs $2,400-$8,000 for small-to-mid vending operator (10-50 machines). Breakdown: general liability $1,200-$3,500; commercial auto $800-$2,500 per vehicle; workers comp $500-$1,500; commercial property $400-$1,200; state operator licenses + local business licenses $200-$1,500. Modest cost relative to placement contract value.", audience: "Finance / New Operators" },
      { question: "What's the onboarding timeline for a new vending business?", answer: "60-120 days from EIN registration through first placement contract execution. Sequenced: Week 1-2 EIN + business entity; Week 2-4 state sales tax + operator license; Week 3-6 local business license + zoning; Week 4-8 insurance broker engagement + policy binding; Week 6-10 federal compliance (FDA / USDA / FALCPA); Week 8-12 placement-specific onboarding (host certificates, federal badging, FITPICK).", audience: "New Operators" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "IRS — Apply for an Employer Identification Number (EIN)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online", note: "Federal tax identification number for business entity formation" },
      { label: "FDA — Food Facility Registration", url: "https://www.fda.gov/food/online-registration-food-facilities/food-facility-registration-user-guide", note: "Federal registration requirement for food handling and repacking operations" },
      { label: "USDA — Smart Snacks in School nutrition standards", url: "https://www.fns.usda.gov/cn/smart-snacks-school", note: "Federal nutrition standards applicable to K-12 vending compliance documentation" },
      { label: "FDA — Food Allergen Labeling and Consumer Protection Act (FALCPA) and FASTER Act", url: "https://www.fda.gov/food/food-allergensgluten-free-guidance-documents-regulatory-information/food-allergies", note: "Federal allergen labeling requirements applied at packaged vending SKUs" },
      { label: "NAMA — National Automatic Merchandising Association — operator licensing guidance", url: "https://www.namanow.org/", note: "Industry association guidance on state operator licensing and FITPICK certification requirements" },
    ],
  }),
  relatedGuides({
    heading: "Related vending business startup guides",
    items: [
      { eyebrow: "Sister guide", title: "Should you offer healthy vending options?", description: "Healthy positioning decision framework — equipment, planogram, certifications, addressable market, operator economics.", href: "/blog/should-you-offer-healthy-vending-options" },
      { eyebrow: "Operations", title: "Cost of vending services for schools", description: "K-12 vending economics, USDA Smart Snacks compliance, district contract structure, healthy-share targets.", href: "/blog/cost-of-vending-services-for-schools" },
      { eyebrow: "Hub", title: "All vending business startup guides", description: "Operator positioning, equipment selection, permits + insurance, healthy vending decision framework, and placement strategy.", href: "/vending-business-startup" },
    ],
  }),
]);
process.exit(0);
