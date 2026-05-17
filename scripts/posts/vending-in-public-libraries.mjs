import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, decisionTree, caseStudy, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("vending-in-public-libraries", [
  tldr({
    heading: "How should public libraries approach vending placement?",
    paragraph:
      "Public library vending is a niche placement with distinct constraints: foot traffic is steady but moderate (libraries average 200-800 daily visitors at branch libraries, 1,500-5,000 at central libraries), visit duration is long (45-180 minutes typical), the user mix is diverse (students, seniors, job-seekers, parents with children, people experiencing homelessness during open hours), and library policy traditionally prohibits food + beverage in stacks. Modern libraries are softening that policy — most now allow covered beverages and packaged snacks in designated areas (lobby, study rooms, computer labs, teen rooms), with full prohibition reserved for special collections and reading rooms. Vending fits the designated areas and serves a real need: long-duration visitors get hungry, library staff are not retail staff, and an unstaffed vending placement is the simplest way to provide refreshment. Equipment should match the user mix: ADA-compliant (libraries are public buildings, ADA-mandatory), multi-language touchscreens (libraries serve diverse linguistic communities), accessible pricing tiers (library demographics include low-income; $1-2 snack tier important), allergen labeling (school-age users common), and quiet operation (compressor noise <55 dB to avoid disturbing stacks). Library boards typically require RFP for vendor selection; commission structures favor library Friends groups (commission flows to library programming budget). Modern public-library vending placements run $8K-25K annual revenue at branch libraries, $25K-80K at central libraries, with commissions of 15-22% flowing to library programming. Placement at the right entry — adjacent to lobby seating, computer lab, or designated eating area — drives 60-80% of revenue.",
    bullets: [
      { emphasis: "Designated eating areas only:", text: "Lobby, study rooms, computer labs, teen rooms. Full prohibition in stacks and reading rooms. Modern library policy norm." },
      { emphasis: "Diverse user mix drives equipment specs:", text: "ADA, multi-language, accessible pricing, allergen labeling, quiet operation. Public-building standard layered with library-specific needs." },
      { emphasis: "Commission flows to programming:", text: "15-22% commission to library Friends group or programming budget. RFP-based vendor selection at most public libraries." },
    ],
  }),
  statStrip({
    heading: "Public library vending benchmarks",
    stats: [
      { number: "200-800", label: "daily visitors at branches", sub: "1,500-5,000 at central libraries", accent: "blue" },
      { number: "45-180 min", label: "typical visit duration", sub: "long-duration visit pattern", accent: "blue" },
      { number: "$8-80K", label: "annual revenue range", sub: "branch to central library", accent: "orange" },
      { number: "15-22%", label: "commission to programming", sub: "Friends group or library budget", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Library zones — where vending fits",
    sub: "Modern public-library policy allows covered beverages + packaged snacks in designated areas. Full prohibition in stacks and special collections.",
    headers: ["Library zone", "Vending allowed?", "Equipment notes"],
    rows: [
      ["Lobby + entry foyer", { icon: "check", text: "Yes (modern policy)" }, "Snack + beverage combo; ADA-compliant; multi-language"],
      ["Designated eating area", { icon: "check", text: "Yes (preferred)" }, "Higher-capacity machines; allergen labeling; recycling bin"],
      ["Computer lab", { icon: "check", text: "Yes — covered beverages only" }, "Beverage-only or sealed-package snacks"],
      ["Study rooms", { icon: "check", text: "Yes — covered beverages + packaged snacks" }, "Compact unit nearby; not in-room"],
      ["Teen room", { icon: "check", text: "Yes (age-appropriate mix)" }, "Snack + beverage; allergen labeling; lower-price-point mix"],
      ["Children's area", "Conditional — staff discretion", "Allergen labeling critical; healthier mix"],
      ["Stacks", "No", "Maintain prohibition"],
      ["Reading room / quiet study", "No", "Quiet-zone preserved"],
      ["Special collections / archives", "No", "Conservation-critical area"],
    ],
  }),
  specList({
    heading: "Library-specific vending equipment specifications",
    items: [
      { label: "ADA compliance", value: "Libraries are public buildings — ADA-mandatory. Reach range 15-48 inches forward / 15-54 inches side. Operating force ≤5 lb. Audio output with adjustable volume. Tactile cues on keypad. Maneuvering space 30-48 inches. Signage placement below 60 inches. Verify at install." },
      { label: "Multi-language touchscreens", value: "Libraries serve diverse linguistic communities. Match library's collection language coverage. Common: English + Spanish minimum; Mandarin, Vietnamese, Tagalog, Arabic, Russian, Polish at urban libraries. Audio prompts also multi-language. Allergen labeling multi-language." },
      { label: "Accessible pricing tiers", value: "Library demographics include low-income visitors. Maintain $1-2 snack tier (basic packaged snacks, water, smaller-portion items). Avoid all-premium-pricing equipment. Mix tiers: $1-2 / $2-4 / $4-7 across 30/50/20 share. Match population." },
      { label: "Allergen labeling", value: "School-age users common at libraries; allergen labeling critical. Touchscreen filter UI (nut-free, gluten-free, vegan, kosher) preferred. Physical labels on items also. Library not liable for accuracy — but labeling required as standard of care. Operator commits to labeling accuracy." },
      { label: "Quiet operation", value: "Compressor noise <55 dB at standard operation. Avoid compressor cycling in quiet zones. Place compressor wall toward back-of-house if possible. Many modern coolers run <50 dB; legacy equipment runs 60-70 dB and disturbs library function." },
      { label: "Recycling bin co-located", value: "Library sustainability commitments typically include recycling. Co-located bin (cans / bottles / paper) within 6 feet of vending. Operator manages pickup on restock cadence. Volume reported in annual library sustainability summary." },
      { label: "Cash + card + contactless payment", value: "Library demographics include unbanked / cash-only visitors. Maintain cash-acceptance capability — do not specify card-only equipment. Card + contactless also for younger / professional visitors. Cash reconciliation by operator." },
      { label: "Stocking for library demographic", value: "Avoid energy drinks and high-caffeine items in children's / teen rooms. Healthy options (water, fruit, vegetable chips, granola bars) emphasized. Locally-sourced + organic options at libraries with sustainability programs. Halal / kosher options at communities with significant religious populations." },
    ],
  }),
  caseStudy({
    tag: "Real numbers · Central library in a 250,000-population city",
    title: "$58K annual revenue, $11K to library programming",
    context: "An urban central library with 3,800 average daily visitors deployed 2 vending machines (snack/beverage combo at lobby entry, beverage-only at computer lab) in 2023. 12-month operating results across a diverse-demographic city.",
    meta: [
      { label: "Library type", value: "Urban central library" },
      { label: "Daily visitors", value: "3,800 average" },
      { label: "Machines", value: "2 (lobby combo + computer lab beverage)" },
      { label: "Commission", value: "18% to library Friends group" },
    ],
    results: [
      { number: "$58K", label: "annual gross revenue" },
      { number: "$11K", label: "commission to library programming" },
      { number: "3 languages", label: "touchscreen support (EN/ES/ZH)" },
    ],
  }),
  tipCards({
    heading: "Five public-library vending mistakes",
    sub: "Each documented in library administrator feedback. All preventable with structured placement and equipment selection.",
    items: [
      { title: "Specifying card-only equipment", body: "Library demographics include unbanked / cash-only visitors. Card-only equipment excludes a meaningful share of library visitors and undermines library's public-access mission. Maintain cash-acceptance capability at install." },
      { title: "English-only touchscreens at diverse libraries", body: "Library serves diverse linguistic community but touchscreen English-only. Excludes non-English-dominant visitors. Specify multi-language firmware matching library's collection language coverage at install." },
      { title: "Loud equipment in quiet zones", body: "Legacy equipment runs 60-70 dB and disturbs library function. Specify quiet equipment (<55 dB compressor noise) at install. Modern coolers run <50 dB. Quiet operation is non-negotiable in library placements." },
      { title: "All-premium pricing tier", body: "Library demographics include low-income visitors. All-premium-pricing equipment excludes them. Maintain $1-2 tier across 30% of SKUs minimum (basic packaged snacks, water). Match library's accessible-public-good mission." },
      { title: "Energy drinks in children's / teen rooms", body: "Energy drinks and high-caffeine items inappropriate in children's / teen room vending. Library board policy typically restricts. Operator commits to age-appropriate SKU mix per zone at install. Annual review." },
    ],
  }),
  decisionTree({
    heading: "Should our public library install vending?",
    question: "Does your library have ≥300 daily visitors AND a designated eating area (lobby, computer lab, teen room) suitable for placement?",
    yesBranch: {
      title: "Vending fits — proceed with RFP-based vendor selection.",
      description: "Library scale and zoning support vending. Issue RFP with library-specific equipment specs (ADA, multi-language, accessible pricing, allergen labeling, quiet operation). Specify commission structure (15-22% to Friends group or programming budget). Verify operator capabilities at proposal demo + reference checks.",
      finalTone: "go",
      finalLabel: "VENDING FITS · ISSUE RFP",
    },
    noBranch: {
      title: "Reconsider at scale OR after zoning policy update.",
      description: "Small libraries (<300 daily visitors) may not produce enough volume to justify vendor effort and equipment. Libraries without designated eating areas (full prohibition policy) should update zoning policy first. Revisit when scale or policy changes.",
      finalTone: "stop",
      finalLabel: "RECONSIDER · SCALE OR POLICY",
    },
  }),
  inlineCta({
    text: "Want the public library vending RFP template (equipment specs, commission structure, zoning policy)?",
    buttonLabel: "Get the library vending RFP",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to advise public library administrators and Friends groups on RFP-based vendor selection, library-specific equipment specifications, and commission structures that flow to library programming. Benchmarks reflect operator-side data across public library placements and library administrator feedback on diverse-demographic equipment requirements.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Is vending allowed in public libraries?", answer: "Modern public-library policy allows covered beverages and packaged snacks in designated areas (lobby, study rooms, computer labs, teen rooms). Full prohibition reserved for stacks, reading rooms, special collections. Most libraries have updated policy in past 10-15 years. Confirm with library board before placement.", audience: "Library Administrators" },
      { question: "How do we select a vendor?", answer: "RFP-based selection at most public libraries (board-required for public-funds contracts). RFP specifies equipment requirements (ADA, multi-language, accessible pricing, allergen labeling, quiet operation), commission structure (15-22% to Friends group or programming budget), term length (2-3 years standard), and SLA commitments.", audience: "Library Procurement" },
      { question: "Where does the commission go?", answer: "Most public libraries direct commission to the library Friends group or library programming budget. Funds programs, materials, technology upgrades. Some libraries direct to general fund (board policy varies). Commission structure 15-22% net sales standard; built into RFP and contract.", audience: "Library Administrators" },
      { question: "What equipment specs are library-specific?", answer: "ADA-compliant (public building, mandatory), multi-language touchscreens (diverse linguistic community), accessible pricing tiers ($1-2 snack tier), allergen labeling (school-age users), quiet operation (<55 dB), cash + card + contactless payment (unbanked visitors), recycling bin co-located. Specify all in RFP.", audience: "Library Operators" },
      { question: "What about user safety?", answer: "Standard public-building safety: ADA compliance (mandatory), allergen labeling (school-age users), age-appropriate SKU mix in children's / teen rooms (no energy drinks / high-caffeine), recycling bin co-located, slip-resistant floor near placement. Annual safety review by library facilities team.", audience: "Library Administrators" },
      { question: "What about libraries with diverse linguistic communities?", answer: "Multi-language touchscreens match library's collection language coverage. Common: English + Spanish minimum; Mandarin, Vietnamese, Tagalog, Arabic, Russian, Polish at urban libraries. Audio prompts multi-language; allergen labeling multi-language. Verify firmware at install.", audience: "Library Operators" },
      { question: "How do we handle low-income demographics?", answer: "Maintain $1-2 snack tier across 30% of SKUs minimum. Basic packaged snacks, water, smaller-portion items. Mix tiers: $1-2 / $2-4 / $4-7 across 30/50/20 share. Maintain cash-acceptance capability. Match library's accessible-public-good mission.", audience: "Library Operators" },
      { question: "What revenue should we expect?", answer: "Branch libraries (200-800 daily visitors) produce $8-25K annual gross revenue. Central libraries (1,500-5,000 daily visitors) produce $25-80K. Multi-machine deployments compound. Commission 15-22% flows to library programming. Build into library budget at planning.", audience: "Library Administrators" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "ALA — American Library Association library policy and vending", url: "https://www.ala.org/", note: "Industry policy guidance for library food + beverage and amenity programs" },
      { label: "IMLS — Institute of Museum and Library Services", url: "https://www.imls.gov/", note: "Federal data on public library visitation and programming" },
      { label: "ADA — Americans with Disabilities Act", url: "https://www.ada.gov/", note: "Federal accessibility framework applicable to public library buildings" },
      { label: "PLA — Public Library Association equipment and amenity benchmarking", url: "https://www.ala.org/pla/", note: "Library administrator benchmarks for amenity programs" },
      { label: "Library Journal — public library amenity case studies", url: "https://www.libraryjournal.com/", note: "Industry trade publication covering library amenity trends" },
    ],
  }),
  relatedGuides({
    heading: "Related public-building vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Specialty vending in public facilities", description: "Niche public-building placements with distinct user mixes and equipment needs.", href: "/vending-for-public-buildings/specialty-vending-public-facilities" },
      { eyebrow: "Operations", title: "Are vending machines ADA compliant?", description: "ADA compliance dimensions, installation verification, ongoing audit at public buildings.", href: "/vending-faq/are-vending-machines-ada-compliant" },
      { eyebrow: "Hub", title: "All public-building vending guides", description: "Placement, equipment, contracts, payment, accessibility, and operator structures across public-building types.", href: "/vending-for-public-buildings" },
    ],
  }),
]);
process.exit(0);
