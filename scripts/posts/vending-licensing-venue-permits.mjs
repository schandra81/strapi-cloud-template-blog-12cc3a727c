import { seedPost, tldr, statStrip, comparisonTable, specList, timeline, tipCards, decisionTree, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("vending-licensing-venue-permits", [
  tldr({
    heading: "What licensing and venue permits actually govern entertainment venue vending — and where do the layers stack?",
    paragraph:
      "Entertainment venue vending sits under a six-layer licensing + permit stack that varies by venue type (arena, stadium, concert hall, amphitheater, festival ground, theme park) and ownership structure (municipally-owned, privately-owned, university-owned, special-district-owned). Layer 1 — state vending machine operator license: most states require operator licensure with annual renewal and bond requirements; rates and bond amounts vary by state. Layer 2 — state and local food handler / food service permit: vending operators selling food + beverage need permits issued by the state department of health or local health department, with inspection cadence (typically annual). Layer 3 — venue-specific concessionaire agreement: large entertainment venues (arenas, stadiums, amphitheaters) typically run a master concessionaire model where one operator (Levy Restaurants, Aramark Sports + Entertainment, Delaware North, Spectra by Comcast, Centerplate) holds exclusive food + beverage rights; vending operators sub-lease through the master concessionaire with sub-lease commission (15-30% of net sales) plus base rent at premium placements. Layer 4 — alcohol licensing where applicable: venues serving beer / wine / spirits in vending (rare but emerging at adult-only festival placements and craft beer halls) require state alcohol control board licensing with TIPS / age-verification training and ID-scan technology. Layer 5 — local business license and sales tax registration: standard business operations layer (city / county business license, state sales tax permit, local occupancy tax where applicable). Layer 6 — venue-specific operational requirements: insurance limits (often $2M-5M general liability), background-check requirements for venue staff badging, accessibility compliance (ADA + state DOJ standards), and brand-alignment requirements (signage, finish, lighting). Permit + licensing timeline runs 8-24 weeks from initial expression of interest to live placement at most venues; major league sports venues at the upper end. Operator-side experience matters substantially — operators without entertainment venue deployment history struggle with master concessionaire navigation, alcohol licensing complexity, and venue-staff badging.",
    bullets: [
      { emphasis: "Six-layer permit + license stack:",
        text: "State operator license, food handler / food service permit, venue concessionaire agreement, alcohol licensing where applicable, local business license + sales tax, venue-specific operational requirements." },
      { emphasis: "Master concessionaire model dominates at large venues:",
        text: "Levy, Aramark, Delaware North, Spectra, Centerplate hold exclusive F+B rights. Vending operators sub-lease with 15-30% commission + base rent at premium placements." },
      { emphasis: "8-24 week timeline; operator experience required:",
        text: "From expression of interest to live placement. Major league sports venues at the upper end. Operators without venue deployment history struggle." },
    ],
  }),
  statStrip({
    heading: "Entertainment venue vending licensing benchmarks",
    stats: [
      { number: "6", label: "permit + license layers", sub: "stacked compliance overlay", accent: "blue" },
      { number: "15-30%", label: "sub-lease commission to concessionaire", sub: "master concessionaire model", accent: "orange" },
      { number: "$2M-5M", label: "general liability insurance", sub: "standard venue requirement", accent: "blue" },
      { number: "8-24 wk", label: "permit + RFP timeline", sub: "expression of interest to live", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Venue type — concessionaire structure + licensing complexity",
    sub: "Six common entertainment venue types. Major league sports + major-promoter amphitheaters have the highest licensing complexity.",
    headers: ["Venue type", "Concessionaire structure", "Alcohol licensing", "Licensing complexity"],
    rows: [
      ["Major league sports stadium / arena", "Master concessionaire exclusive (Levy, Aramark, Delaware North, Spectra)", "Beer + wine + spirits — full TIPS + ID scan", "High — 12-24 week timeline"],
      ["Major-promoter amphitheater", "Master concessionaire exclusive (Live Nation operators, AEG operators)", "Beer + wine — TIPS + ID scan", "High — 10-20 week timeline"],
      ["Concert hall / theater", "Master concessionaire or in-house F+B", "Beer + wine where applicable", "Moderate — 8-14 week timeline"],
      ["Festival ground (recurring promoter)", "Promoter-by-promoter concession contracts", "Variable — TIPS + ID scan where alcohol sold", "Moderate — 6-12 week per event"],
      ["Theme park / amusement park", "Park-owned F+B with vending overlay", "Generally non-alcohol vending", "Moderate — 8-12 week timeline"],
      ["Minor league sports / college venue", "Master concessionaire or in-house F+B", "Beer + wine where applicable", "Lower — 6-10 week timeline"],
    ],
  }),
  specList({
    heading: "Six-layer licensing + permit specifications",
    items: [
      { label: "Layer 1 — state vending operator license", value: "Most states require vending operators to hold a state-issued operator license with annual renewal. License covers operator legal entity (corporation, LLC) and identifies authorized facilities. Bond requirement at some states ($5K-50K depending on operator scale). Inspection authority at state department of agriculture or revenue. Verify operator license in good standing before contracting at any venue." },
      { label: "Layer 2 — state + local food handler / food service permit", value: "Vending operators selling food + beverage need permits issued by state department of health or local health department. Inspection cadence typically annual; some jurisdictions semi-annual. Food handler certification for service staff (ServSafe or state-equivalent). Cold-chain log requirements at fresh-food placements. Operator absorbs permit + inspection fees at standard contracts." },
      { label: "Layer 3 — venue concessionaire agreement (master concessionaire model)", value: "Major venues (arenas, stadiums, amphitheaters, large theaters) run master concessionaire model. Concessionaires: Levy Restaurants (Compass Group), Aramark Sports + Entertainment, Delaware North, Spectra (Comcast / NBCUniversal), Centerplate (Sodexo), Sodexo Live!. Vending operators sub-lease through master concessionaire with commission (15-30% of net sales) plus base rent at premium placements ($100-500/sqft annual). Sub-lease term 3-7 years with renewal at concessionaire discretion." },
      { label: "Layer 4 — alcohol licensing (where applicable)", value: "Venues serving beer / wine / spirits in vending (emerging at adult-only festival + craft beer hall placements) require state alcohol control board licensing. TIPS / ServSafe Alcohol training for service staff. Age-verification technology (ID scan + biometric where permitted). Some jurisdictions require operator licensure separate from venue licensure. Compliance review required before any alcohol vending consideration." },
      { label: "Layer 5 — local business license + sales tax registration", value: "Standard business operations layer. City / county business license at each venue jurisdiction. State sales tax permit with monthly / quarterly filing. Local occupancy tax where applicable (some venues in tourism districts). Operator manages at full-service contracts; gym / venue verifies operator filings current at proposal." },
      { label: "Layer 6 — venue-specific operational requirements", value: "Insurance limits typically $2M-5M general liability + workers comp + auto. Background-check requirements for venue staff badging (especially at major league sports venues + high-security amphitheaters). ADA + state DOJ accessibility compliance. Brand-alignment requirements (signage, finish, lighting per venue standards). Operator + venue facilities coordinate at install." },
      { label: "Venue staff badging where required", value: "Major league sports venues + high-security amphitheaters require background-check + venue ID badge for operator service staff. Background-check turnaround typically 2-4 weeks. Badge replacement 2-4 weeks. Annual renewal at most venues. Operators with venue deployment history have process down; new operators struggle." },
      { label: "Reporting + audit requirements", value: "Monthly per-machine itemized statements to master concessionaire + venue authority. Annual operational compliance audit at major venues. Annual badge renewal. Sub-lease renewal documentation at term boundary. Operator maintains documentation for 7 years (audit retention). Operator absorbs reporting cost at standard contracts." },
    ],
  }),
  timeline({
    heading: "Entertainment venue vending permit + RFP timeline",
    sub: "8-24 week process from initial expression of interest to live placement. Major league venues at the upper end.",
    howToName: "How to permit and place vending at an entertainment venue",
    totalTime: "P84D",
    steps: [
      { label: "Weeks 1-3", title: "Expression of interest + concessionaire response", description: "Vending operator submits expression of interest to master concessionaire or venue F+B authority. Concessionaire response with capacity assessment + RFP availability typically 2-4 weeks." },
      { label: "Weeks 3-7", title: "RFP issued + proposal preparation", description: "Concessionaire issues RFP with venue-specific requirements (equipment spec, planogram, alcohol licensing where applicable, accessibility compliance, brand alignment). Operator prepares proposal — 3-4 week response window typical." },
      { label: "Weeks 7-10", title: "Proposal review + selection", description: "Concessionaire reviews proposals (operator capability, equipment spec, commission rate, references). Reference checks at 2-3 comparable venue accounts. Selection within 2-4 weeks." },
      { label: "Weeks 10-14", title: "Sub-lease negotiation + execution", description: "Sub-lease agreement covers term, commission, base rent at premium placements, service-level commitments, reporting, audit rights, insurance, indemnification, exit terms. Both parties sign." },
      { label: "Weeks 10-18 (parallel)", title: "Permits + badging + licensing", description: "State operator license verification, food handler permits, alcohol licensing where applicable, venue staff background-check + badging (2-4 weeks), insurance certificates filed, accessibility compliance documentation." },
      { label: "Weeks 18-22", title: "Installation + commissioning", description: "Equipment delivered + installed per venue facilities coordination. Network connectivity tested. Signage applied per venue brand standards. Alcohol vending compliance verification where applicable." },
      { label: "Weeks 22-24+", title: "Soft launch + first-event review", description: "Soft launch with venue operations staff. First-event review with master concessionaire on per-SKU velocity, member service issues, compliance issues. Quarterly business review thereafter." },
    ],
  }),
  decisionTree({
    heading: "Should we pursue vending at this entertainment venue?",
    question: "Do we have documented entertainment venue deployment history AND insurance coverage at $2M+ general liability AND state operator licensure + food handler permits in good standing AND capacity for 8-24 week permit + RFP timeline?",
    yesBranch: {
      title: "Pursue venue vending — modern multi-layer licensed program",
      description: "Submit expression of interest to master concessionaire or venue F+B authority. Prepare proposal covering equipment spec, planogram, accessibility, brand alignment, alcohol compliance where applicable. Expect 8-24 week timeline. Sub-lease commission 15-30% plus base rent at premium placements.",
      finalTone: "go",
      finalLabel: "Pursue venue vending",
    },
    noBranch: {
      title: "Build venue capability first — start at lower-complexity placements",
      description: "Operators without entertainment venue deployment history should build capability at lower-complexity placements (minor league sports, college venues, smaller theaters) before pursuing major league sports stadiums or major-promoter amphitheaters. Insurance + licensure + badging + experience prerequisites take time to build.",
      finalTone: "stop",
      finalLabel: "Build capability first",
    },
  }),
  tipCards({
    heading: "Five entertainment venue vending licensing mistakes",
    sub: "Each documented in venue procurement reviews and concessionaire post-implementation audits.",
    items: [
      { title: "Underestimating master concessionaire role", body: "Operators sometimes approach the venue authority directly without realizing the master concessionaire holds exclusive F+B rights. The venue authority will redirect; the master concessionaire is the actual counterparty. Identify the master concessionaire first and structure the expression of interest accordingly." },
      { title: "Insufficient insurance coverage at proposal", body: "Venue insurance requirements typically run $2M-5M general liability + workers comp + auto. Operators submitting proposals with $1M coverage are disqualified at intake. Verify venue insurance requirements before proposal preparation and confirm coverage in writing." },
      { title: "Missing venue staff background-check timeline", body: "Major league sports venues + high-security amphitheaters require background-check + venue ID badge for operator service staff. Background-check turnaround typically 2-4 weeks. Operators who don't initiate badging in parallel with permit + RFP process delay live placement by months." },
      { title: "Pursuing alcohol vending without compliance review", body: "Alcohol vending requires state alcohol control board licensing, TIPS / ServSafe Alcohol training, age-verification technology, and compliance review at every jurisdiction. Operators who pursue alcohol vending without dedicated compliance review face regulatory action + venue sub-lease termination." },
      { title: "Skipping reference checks at comparable venues", body: "Operator capability at entertainment venues is venue-specific. Operators with strong office vending references may struggle at major league sports stadium. Reference checks at 2-3 comparable venue accounts (same venue type, same complexity tier) reveal operational reality. Standard at modern concessionaire selection." },
    ],
  }),
  keyTakeaways({
    heading: "Entertainment venue vending licensing key takeaways",
    takeaways: [
      "Six-layer permit + license stack: state operator license, food handler permit, venue concessionaire agreement, alcohol licensing where applicable, local business license + sales tax, venue operational requirements.",
      "Master concessionaire model dominates at major venues — Levy, Aramark, Delaware North, Spectra, Centerplate, Sodexo Live! hold exclusive F+B rights. Vending operators sub-lease.",
      "Sub-lease commission 15-30% of net sales plus base rent at premium placements ($100-500/sqft annual). Term 3-7 years with renewal at concessionaire discretion.",
      "8-24 week permit + RFP timeline. Major league sports venues at the upper end. Operator experience required; verify documented venue deployment history.",
      "Insurance ($2M-5M general liability), background-check badging, ADA + state DOJ accessibility compliance, and brand-alignment requirements stack on top of permit + licensing.",
    ],
  }),
  inlineCta({
    text: "Want the entertainment venue vending licensing pack (six-layer permit checklist, master concessionaire navigation, alcohol compliance review, badging timeline)?",
    buttonLabel: "Get the venue licensing pack",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to support entertainment venue vending licensing + permit navigation across major league sports stadiums, major-promoter amphitheaters, concert halls, festival grounds, theme parks, and minor league venues — including state operator licensure verification, food handler permits, master concessionaire sub-lease navigation, alcohol licensing review where applicable, venue staff background-check + badging coordination, ADA + state DOJ accessibility compliance documentation, and brand-alignment specification. Recommendations reflect operator-side data + venue concessionaire selection patterns.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What licenses and permits govern vending at entertainment venues?", answer: "Six layers: (1) state vending operator license, (2) state + local food handler / food service permit, (3) venue concessionaire agreement (master concessionaire sub-lease at most major venues), (4) alcohol licensing where applicable, (5) local business license + sales tax registration, (6) venue-specific operational requirements (insurance, badging, accessibility, brand alignment).", audience: "Procurement" },
      { question: "Who holds the F+B rights at major venues?", answer: "Master concessionaires hold exclusive F+B rights at most major venues. Major operators: Levy Restaurants (Compass Group), Aramark Sports + Entertainment, Delaware North, Spectra (Comcast / NBCUniversal), Centerplate (Sodexo), Sodexo Live!. Vending operators sub-lease through the master concessionaire — not direct with venue authority.", audience: "Operators" },
      { question: "What does the sub-lease cost?", answer: "Sub-lease commission 15-30% of net sales to master concessionaire plus base rent at premium placements ($100-500/sqft annual). Term 3-7 years with renewal at concessionaire discretion. Concessionaire approves operator + planogram. Modern sub-leases include performance triggers and termination-for-cause clauses.", audience: "Finance" },
      { question: "How long does the permit + RFP process take?", answer: "8-24 weeks from initial expression of interest to live placement. Major league sports venues at the upper end (16-24 weeks); minor league + college venues at the lower end (6-10 weeks). Phases: expression of interest, RFP issued, proposal review, sub-lease negotiation, permits + badging in parallel, installation + commissioning.", audience: "Procurement" },
      { question: "What insurance do we need?", answer: "Standard venue requirement: $2M-5M general liability + workers comp + auto. Some major league sports venues require $5M-10M general liability + umbrella coverage. Operators with $1M coverage are typically disqualified at intake. Verify venue insurance requirements before proposal preparation; confirm coverage in writing.", audience: "Operators" },
      { question: "What about alcohol vending?", answer: "Emerging at adult-only festival + craft beer hall placements. Requires state alcohol control board licensing, TIPS / ServSafe Alcohol training, age-verification technology (ID scan + biometric where permitted), and dedicated compliance review at every jurisdiction. Operators without alcohol compliance capability should skip this category.", audience: "Operators" },
      { question: "Do operator staff need badges?", answer: "Major league sports venues + high-security amphitheaters require background-check + venue ID badge for operator service staff. Background-check turnaround 2-4 weeks; badge replacement 2-4 weeks; annual renewal. Operators with venue deployment history have process down; new operators delay live placement.", audience: "Operators" },
      { question: "How do we hold the operator accountable?", answer: "Monthly per-machine itemized statements to master concessionaire + venue authority. Annual operational compliance audit at major venues. Performance triggers + termination-for-cause clauses in sub-lease. Reference checks at 2-3 comparable venue accounts before selection. Modern concessionaire selection includes this standard.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — National Automatic Merchandising Association vending operator licensure", url: "https://www.namanow.org/", note: "Industry trade association covering vending operator licensure framework and state-by-state guidance" },
      { label: "FDA Food Code — retail food establishment standards", url: "https://www.fda.gov/food/fda-food-code/food-code-2022", note: "Federal food safety code applicable to vending food service operations" },
      { label: "ATF — Alcohol and Tobacco Tax and Trade Bureau", url: "https://www.ttb.gov/", note: "Federal alcohol regulatory framework applicable to alcohol vending consideration" },
      { label: "ADA.gov — vending machine accessibility standards", url: "https://www.ada.gov/", note: "Federal accessibility standards applicable to entertainment venue vending placement" },
      { label: "Vending Times — entertainment venue category + concessionaire models", url: "https://www.vendingtimes.com/", note: "Industry publication covering entertainment venue vending economics and licensing patterns" },
    ],
  }),
  relatedGuides({
    heading: "Related entertainment venue vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Luxury vending in entertainment venues", description: "Premium-format equipment specification, SKU catalog, and operator capability vetting for entertainment venue luxury vending.", href: "/vending-for-entertainment-venues/luxury-vending-in-entertainment-venues" },
      { eyebrow: "Sister guide", title: "Best-selling entertainment venue vending products", description: "SKU catalog, planogram patterns, and category management for entertainment venue vending across zones and event types.", href: "/vending-for-entertainment-venues/best-selling-entertainment-venue-vending-products" },
      { eyebrow: "Hub", title: "All entertainment venue vending guides", description: "Format selection, premium-zone placement, operator vetting, and brand integration across arenas, stadiums, and concert venues.", href: "/vending-for-entertainment-venues" },
    ],
  }),
]);
process.exit(0);
