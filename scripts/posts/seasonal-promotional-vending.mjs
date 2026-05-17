import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, timeline, decisionTree, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("seasonal-promotional-vending", [
  tldr({
    heading: "How do seasonal + promotional vending programs work at offices — and what's the calendar cadence + campaign integration framework?",
    paragraph:
      "Seasonal + promotional vending at offices runs an annual calendar of campaign moments aligned with corporate event cycle, holiday calendar, wellness program initiatives, ERG observances, and brand campaign cycle: (1) Q1 — new-year wellness reset (healthy-share SKU refresh, dry-January-friendly hydration, recovery RTD push, fitness-challenge integration), Black History Month + Lunar New Year + Valentine's Day touchscreen content; (2) Q2 — spring refresh (lighter SKU mix shift to fresh + hydration), Earth Day ESG campaign (compostable packaging push, Fair Trade + B-Corp partner highlight), AAPI Heritage + Mental Health Awareness Month; (3) Q3 — summer hydration push (sparkling water tap, cold brew kegerator, increased electrolyte SKU), Pride Month touchscreen content + branded product partnerships, Disability Pride Month + Hispanic Heritage Month observances; (4) Q4 — holiday gift + premium SKU push (seasonal limited-edition products, premium chocolate + protein RTDs, gift-card vending integration), Thanksgiving + Diwali + Hanukkah + Christmas + New Year touchscreen content. Modern operators (Canteen, Five Star, Aramark Refreshment, AVI Foodsystems) coordinate seasonal program with employer marketing + ERG + wellness + DEI teams via quarterly calendar planning + monthly content refresh + real-time pricing rule adjustment. Mechanics include: touchscreen content refresh (employer marketing-team write access), limited-edition SKU sourcing (4-12 week lead time at major brands), seasonal pricing campaigns (Earth Day Fair Trade discount, Mental Health Awareness Month wellness SKU promotion, holiday gift-bundle pricing), branded product partnerships (employer co-branded seasonal SKUs at major employer brands), member-app reward integration (seasonal challenge with vending purchase tracking + reward credit). Cost: $500-3K per quarter at standard office for seasonal SKU + content refresh; $5-25K at premium office with limited-edition SKU sourcing + branded product partnership + comprehensive touchscreen content management. ROI: employee experience perception lift 8-15% at seasonal-program-aware offices + brand campaign reach + ERG + DEI program support + wellness program engagement lift.",
    bullets: [
      { emphasis: "Annual calendar cadence aligned with corporate event + holiday + wellness + ERG + brand campaign cycle:",
        text: "Q1 wellness reset + diversity observances, Q2 spring refresh + Earth Day, Q3 summer hydration + Pride + AAPI + Hispanic Heritage, Q4 holiday + Diwali + Hanukkah + Christmas. Quarterly planning + monthly content refresh." },
      { emphasis: "Mechanics: touchscreen content + limited-edition SKU + seasonal pricing + branded partnership + member-app reward:",
        text: "Modern operators support all five; legacy operators run flat program with no seasonal integration. Marketing-team write access to content management platform required." },
      { emphasis: "Cost: $500-3K per quarter standard, $5-25K premium with limited-edition + branded partnership:",
        text: "ROI in employee experience perception + brand campaign reach + ERG + DEI program support + wellness engagement. Build calendar + budget into program at concept.", },
    ],
  }),
  statStrip({
    heading: "Seasonal + promotional vending benchmarks",
    stats: [
      { number: "$500-3K", label: "per quarter seasonal cost", sub: "standard office program", accent: "blue" },
      { number: "$5-25K", label: "per quarter premium tier", sub: "with limited-edition + branded partnership", accent: "blue" },
      { number: "4-12 weeks", label: "lead time for limited-edition SKU sourcing", sub: "major brand partnership", accent: "orange" },
      { number: "8-15%", label: "employee experience perception lift", sub: "seasonal-program-aware offices", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Seasonal + promotional vending mechanics",
    sub: "Five mechanics define modern seasonal + promotional vending programs. Modern operators support all five; legacy operators run flat program with no seasonal integration.",
    headers: ["Mechanic", "Modern operator support", "Legacy operator support", "Lead time", "Cost"],
    rows: [
      ["Touchscreen content refresh", "Content management platform with marketing-team write access", "Static images only", "1-7 days", "Operator-included"],
      ["Limited-edition SKU sourcing", "Major brand partnership + co-branded sourcing", "Standard SKU only", "4-12 weeks", "$500-5K per quarter"],
      ["Seasonal pricing campaigns", "Pricing rule engine at operator side + member-app integration", "Flat pricing", "1-3 days", "Operator-included"],
      ["Branded product partnership", "Co-branded employer SKU + brand-licensing partnership", "Not supported", "8-20 weeks", "$5-25K per campaign"],
      ["Member-app reward integration", "API integration with employer wellness / benefits platform", "Not supported", "2-6 weeks", "Operator-included"],
      ["Operator capability bar", "Tier-1 with marketing-team interface", "Legacy commodity vending", "Variable", "Variable"],
    ],
  }),
  specList({
    heading: "Seasonal + promotional vending specifications",
    items: [
      { label: "Q1 calendar — new-year wellness + diversity observances", value: "January: new-year wellness reset (healthy-share SKU refresh, dry-January-friendly hydration with kombucha + sparkling water + electrolyte non-alcoholic, recovery RTD push, fitness-challenge integration with employer wellness platform). February: Black History Month touchscreen content + branded product highlight (Black-owned brand sourcing — Partake Foods, McBride Sisters wine alternative N/A drinks, Pipcorn, GoldenBoy, A Dozen Cousins) + Lunar New Year content + Valentine's Day premium chocolate SKU push. Modern operators coordinate calendar with employer marketing + ERG + wellness teams 8-12 weeks ahead." },
      { label: "Q2 calendar — spring refresh + Earth Day + AAPI + Mental Health", value: "March: spring refresh (lighter SKU mix shift to fresh fruit + parfaits + lower-calorie healthy-share), International Women's Day touchscreen content + women-owned brand partnership (Health-Ade Kombucha, OLIPOP, Saie, Lola, Goldthread). April: Earth Day ESG campaign (compostable packaging push + Fair Trade + B-Corp partner highlight — Patagonia Provisions, Numi Tea, Equal Exchange, Alter Eco). May: AAPI Heritage Month touchscreen + Mental Health Awareness Month wellness SKU + EAP + behavioral-health resource promotion. Quarterly planning at end of Q1 with employer marketing + wellness + ESG + ERG teams." },
      { label: "Q3 calendar — summer hydration + Pride + Disability + Hispanic Heritage", value: "June: summer hydration push (sparkling water tap usage spike, cold brew kegerator, increased electrolyte SKU — Liquid IV, LMNT, NUUN, Skratch, Pedialyte). Pride Month touchscreen content + branded product partnerships (Sweetgreen Pride pricing, Ben & Jerry's Pride pricing) + employer-brand Pride campaign integration. July: Disability Pride Month + accessibility-focused touchscreen content + accessibility-tagged SKU promotion. August: back-to-school + summer continues. September-mid: Hispanic Heritage Month touchscreen + Latino-owned brand partnership (Loisa, Goya alternatives, Tía Lupita, Yofresca). Quarterly planning at end of Q2." },
      { label: "Q4 calendar — holiday gift + Diwali + Hanukkah + Christmas + New Year", value: "October: Hispanic Heritage Month continues + breast cancer awareness pink-product push + Halloween touchscreen content. November: Native American Heritage Month touchscreen content + Diwali content + Thanksgiving messaging + holiday gift SKU launch (premium chocolate, limited-edition seasonal SKUs, gift-card vending integration). December: Hanukkah + Christmas + winter solstice touchscreen content + holiday gift push + year-end employee appreciation messaging + premium SKU sourcing. Quarterly planning at end of Q3." },
      { label: "Touchscreen content refresh workflow", value: "Modern operators provide content management platform with employer marketing-team write access (Cantaloupe Engage Content, Nayax Management Suite Content Module, AVI VMS Content Manager). Marketing team uploads assets (images, video, multi-language text); operator reviews + publishes to vending fleet within 1-7 days. Asset specifications: PNG / JPEG / MP4 at touchscreen resolution (typically 1920×1080 or 1080×1920), multi-language text + tag overlays, brand guideline compliance review. Content rotation: hero campaign + secondary campaigns + persistent ESG + dietary inclusivity tags." },
      { label: "Limited-edition SKU sourcing + brand partnership coordination", value: "Limited-edition SKU sourcing requires major brand partnership: Hershey seasonal Reese's, Kit Kat, Snickers limited editions (Halloween, Christmas, Easter, Valentine's), Frito-Lay seasonal SunChips + Doritos limited editions, premium chocolate seasonal (Lindt, Ghirardelli, Godiva at premium tier), holiday-themed protein RTDs (Premier Protein, Muscle Milk seasonal flavors), regional + cultural specialty SKUs (Lunar New Year + Diwali + Eid + Hanukkah + Christmas). Lead time 4-12 weeks at major brands; 12-20 weeks for branded employer co-pack. Coordinate with operator brand + sourcing team." },
      { label: "Seasonal pricing campaigns + member-app integration", value: "Seasonal pricing campaigns via operator pricing rule engine: Earth Day Fair Trade SKU discount, Mental Health Awareness Month wellness SKU promotion, holiday gift-bundle pricing, member-tier seasonal benefit (premium tier free hydration during summer hydration push), challenge-completion bonus (complete healthy-share challenge → free recovery RTD), social-feed achievement reward. Member-app integration shows seasonal campaign + member-tier benefit + remaining allowance. Modern operators support; legacy operators run flat pricing." },
      { label: "Branded product partnership at premium tier", value: "Premium tier offices (major employer brands — Google, Salesforce, Meta, Microsoft, Apple, JP Morgan Chase, Goldman Sachs, McKinsey, BCG, Bain, Bloomberg) run branded product partnerships: co-branded employer SKU (employer logo on Hershey bar, KIND bar, custom-branded chip at major employers), seasonal employer-branded chocolate boxes for holiday gift, employer-branded reusable water bottle for Earth Day, employer-branded swag drops (T-shirts, stickers, branded items at offsite events + employee appreciation). 8-20 week lead time. $5-25K per campaign. Coordinate with employer marketing + brand team + operator sourcing." },
      { label: "Wellness + ERG + DEI program integration", value: "Seasonal + promotional vending integrates with broader employer programs: wellness program (healthy-share challenge during new-year reset, hydration challenge during summer, recovery challenge year-round) + ERG observances (Black History Month + AAPI Heritage + Pride + Disability Pride + Hispanic Heritage Month + Native American Heritage + Lunar New Year + Diwali + Eid + Hanukkah + Christmas touchscreen content + brand partnership) + DEI program (multi-cultural brand sourcing + multi-language touchscreen + dietary inclusivity tags). Coordinate calendar + content + brand partnership with respective program leads." },
      { label: "QBR cadence with seasonal program review", value: "Quarterly business review with operator account manager + employer marketing + wellness + ERG + DEI + facilities + finance leads. Review: per-quarter seasonal SKU velocity + sell-through rate + member-survey amenity + ERG + DEI program survey correlation + brand campaign reach + wellness program engagement lift + cost-effectiveness analysis. Plan next-quarter calendar at QBR. Modern operators bring written quarterly report + next-quarter plan; legacy operators offer commission statement only." },
    ],
  }),
  timeline({
    heading: "Annual seasonal + promotional vending calendar cadence",
    sub: "Quarterly planning + monthly content refresh + real-time pricing rule adjustment. Coordinate with employer marketing + ERG + wellness + DEI teams.",
    howToName: "Annual seasonal + promotional vending program",
    totalTime: "12 months / 4 quarterly cycles",
    steps: [
      { label: "Q1", title: "New-year wellness + Black History + Lunar New Year + Valentine's Day", description: "January wellness reset + dry-January hydration + fitness-challenge integration. February Black History Month brand partnership (Partake, McBride Sisters N/A, Pipcorn, A Dozen Cousins) + Lunar New Year content + Valentine's premium chocolate push. Plan Q2 calendar at end of Q1." },
      { label: "Q2", title: "Spring refresh + Earth Day + International Women's + AAPI + Mental Health", description: "March spring refresh + International Women's Day + women-owned brand partnership. April Earth Day ESG campaign (compostable + Fair Trade + B-Corp). May AAPI Heritage + Mental Health Awareness Month + EAP resource promotion. Plan Q3 calendar at end of Q2." },
      { label: "Q3", title: "Summer hydration + Pride + Disability Pride + Hispanic Heritage", description: "June summer hydration push + Pride Month touchscreen + branded partnerships. July Disability Pride Month + accessibility focus. August back-to-school. September-mid Hispanic Heritage Month + Latino-owned brand partnership. Plan Q4 calendar at end of Q3." },
      { label: "Q4", title: "Holiday gift + Native American Heritage + Diwali + Hanukkah + Christmas", description: "October Hispanic Heritage continues + Halloween + breast cancer awareness. November Native American Heritage + Diwali + Thanksgiving + holiday gift SKU launch. December Hanukkah + Christmas + premium SKU + year-end employee appreciation. Plan next year Q1 at end of Q4." },
      { label: "Year-round", title: "Touchscreen content refresh + pricing rule engine + member-app integration", description: "Monthly content refresh with marketing team. Real-time pricing rule adjustment per campaign. Member-app integration shows seasonal campaign + member-tier benefit. QBR at end of each quarter. Modern operators support all year-round." },
    ],
  }),
  decisionTree({
    heading: "Full seasonal program — or simplified seasonal touchpoints?",
    question: "Do we have employer marketing + ERG + wellness + DEI programs with quarterly calendar + budget for seasonal touchscreen content + limited-edition SKU sourcing + branded product partnership + member-app reward integration?",
    yesBranch: {
      title: "Full seasonal + promotional program",
      description: "Annual calendar cadence + quarterly planning with marketing + ERG + wellness + DEI teams + monthly content refresh + limited-edition SKU sourcing (4-12 week lead time) + seasonal pricing campaigns + branded product partnership (premium tier) + member-app reward integration + QBR with seasonal program review. Modern operator with content management platform + brand sourcing capability + tier-1 marketing-team interface.",
      finalTone: "go",
      finalLabel: "Full seasonal program",
    },
    noBranch: {
      title: "Simplified seasonal touchpoints — major holiday touchscreen content + holiday SKU push",
      description: "Smaller office or budget-constrained program may run simplified seasonal touchpoints: major-holiday touchscreen content refresh (4-8 times per year), seasonal SKU push at major holidays (Halloween, Thanksgiving, Christmas, Valentine's, Earth Day), standard pricing. Re-evaluate full seasonal program if employer marketing + ERG + wellness + DEI programs grow.",
      finalTone: "stop",
      finalLabel: "Simplified seasonal touchpoints",
    },
  }),
  tipCards({
    heading: "Six seasonal + promotional vending mistakes",
    sub: "Documented at employer marketing + ERG + wellness + DEI program reviews + operator QBR reviews. All preventable with structured calendar + modern operator capability + cross-team coordination.",
    items: [
      { title: "Generic operator without content management platform + marketing-team write access", body: "Modern seasonal + promotional vending requires content management platform with marketing-team write access for touchscreen content refresh. Legacy operators offer static images only + manual content refresh + slow turnaround. Verify at RFP — request marketing-team content workflow demo + content publish SLA (1-7 days target)." },
      { title: "Quarterly calendar planning skipped or delayed", body: "Limited-edition SKU sourcing requires 4-12 week lead time at major brands + 12-20 weeks for branded employer co-pack. Quarterly calendar planning 8-12 weeks ahead of campaign start required. Skipping or delaying planning produces missed seasonal moments + stranded SKU + brand-partnership scramble. Build calendar planning into QBR cadence." },
      { title: "ERG + DEI observances treated as afterthought or commodity", body: "Black History Month + AAPI Heritage + Pride + Disability Pride + Hispanic Heritage + Native American Heritage + Lunar New Year + Diwali + Eid + Hanukkah + Christmas observances require authentic brand partnership + multi-cultural sourcing + multi-language touchscreen content. Commodity SKU mix at ERG observance produces ERG team escalation + DEI program perception loss. Coordinate with ERG + DEI program leads at calendar planning." },
      { title: "Earth Day + ESG campaign without sustainable SKU sourcing capability", body: "Earth Day Fair Trade + B-Corp + compostable packaging campaign requires operator-side sourcing capability (Patagonia Provisions, Numi Tea, Equal Exchange, Alter Eco, Fair Trade certified brands). Legacy operators don't credibly source. Verify at RFP — request Fair Trade + B-Corp partner portfolio + ESG campaign track record." },
      { title: "Branded product partnership without major brand licensing", body: "Co-branded employer SKU (employer logo on Hershey bar, KIND bar, custom-branded chip) requires brand-licensing partnership with major brand. Operator + employer brand team + brand-partner coordination. Lead time 12-20 weeks. Trying to print employer logo on commodity SKU without licensing produces brand-equity damage + legal risk." },
      { title: "No QBR review of seasonal program effectiveness", body: "Quarterly business review with seasonal program performance: per-quarter SKU velocity + sell-through rate + member-survey amenity correlation + ERG + DEI program survey correlation + brand campaign reach + wellness engagement lift + cost-effectiveness. Without QBR review, seasonal program drifts + budget overspend at low-ROI campaigns. Build QBR into operator service contract at signing.", },
    ],
  }),
  keyTakeaways({
    takeaways: [
      "Seasonal + promotional vending runs annual calendar aligned with corporate event + holiday + wellness + ERG + brand campaign cycle: Q1 wellness reset + Black History + Lunar New Year + Valentine's, Q2 spring + Earth Day + AAPI + Mental Health, Q3 summer hydration + Pride + Disability + Hispanic Heritage, Q4 holiday + Native American + Diwali + Hanukkah + Christmas.",
      "Five mechanics: touchscreen content refresh (marketing-team write access), limited-edition SKU sourcing (4-12 week lead time), seasonal pricing campaigns (pricing rule engine), branded product partnership (8-20 week lead time at premium tier), member-app reward integration. Modern operators support all five; legacy operators run flat program.",
      "Cost: $500-3K per quarter at standard office for seasonal SKU + content refresh; $5-25K at premium office with limited-edition SKU + branded partnership. ROI in employee experience perception (8-15% lift) + brand campaign reach + ERG + DEI program support + wellness engagement.",
      "Quarterly calendar planning 8-12 weeks ahead of campaign start required (limited-edition SKU lead time + branded partnership lead time). Coordinate with employer marketing + ERG + wellness + DEI + brand teams at planning + monthly content refresh + real-time pricing rule adjustment.",
      "Modern tier-1 operators bring content management platform with marketing-team write access + major brand partnership + multi-cultural sourcing + Fair Trade + B-Corp + branded employer SKU + member-app reward integration + QBR with seasonal program review. Legacy operators don't credibly support.",
    ],
  }),
  inlineCta({
    text: "Want the seasonal + promotional vending pack (annual calendar + five mechanics + ERG + DEI + wellness integration + brand partnership + member-app reward)?",
    buttonLabel: "Get the seasonal vending pack",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to coordinate seasonal + promotional vending program design at offices — including annual calendar planning aligned with corporate event + holiday + wellness + ERG + DEI + brand campaign cycle, modern operator vetting (content management platform with marketing-team write access + major brand partnership + multi-cultural sourcing + Fair Trade + B-Corp + branded employer SKU capability), quarterly cross-team coordination with employer marketing + ERG + wellness + DEI + brand teams, limited-edition SKU sourcing coordination (4-12 week lead time at major brands; 12-20 weeks for branded employer co-pack), seasonal pricing rule engine + member-app integration setup, branded product partnership coordination (premium tier), and QBR cadence with seasonal program effectiveness review. Recommendations reflect operator-side data + employer marketing + ERG + wellness + DEI + brand team + facilities lead post-rollout feedback across standard + premium office + multi-site enterprise deployments.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What's the annual calendar for seasonal vending?", answer: "Q1: new-year wellness reset + Black History + Lunar New Year + Valentine's. Q2: spring refresh + Earth Day + International Women's + AAPI + Mental Health. Q3: summer hydration + Pride + Disability Pride + Hispanic Heritage. Q4: holiday gift + Native American Heritage + Diwali + Hanukkah + Christmas. Quarterly planning 8-12 weeks ahead with employer marketing + ERG + wellness + DEI teams.", audience: "Marketing / ERG / DEI" },
      { question: "How does touchscreen content refresh work?", answer: "Modern operators provide content management platform with employer marketing-team write access (Cantaloupe Engage Content, Nayax Management Suite Content Module, AVI VMS Content Manager). Marketing team uploads assets (PNG / JPEG / MP4 at touchscreen resolution + multi-language text); operator reviews + publishes to vending fleet within 1-7 days. Legacy operators offer static images only.", audience: "Marketing / IT" },
      { question: "What's the lead time for limited-edition SKU sourcing?", answer: "4-12 weeks at major brands (Hershey seasonal Reese's / Kit Kat / Snickers limited editions, Frito-Lay seasonal SunChips / Doritos limited editions, premium chocolate seasonal Lindt / Ghirardelli / Godiva, regional + cultural specialty SKUs). 12-20 weeks for branded employer co-pack. Coordinate with operator brand + sourcing team at quarterly planning.", audience: "Marketing / Procurement" },
      { question: "How do we integrate ERG and DEI observances?", answer: "Multi-cultural brand partnership (Black-owned, women-owned, AAPI-owned, Latino-owned, LGBTQ+ allied), multi-language touchscreen content, dietary inclusivity (vegan, gluten-free, kosher, halal, dairy-free, low-FODMAP visible), authentic campaign messaging coordinated with ERG + DEI program leads at calendar planning. Modern tier-1 operators bring multi-cultural sourcing capability; legacy operators run commodity SKU mix.", audience: "ERG / DEI / Marketing" },
      { question: "What's the cost of a seasonal program?", answer: "$500-3K per quarter at standard office for seasonal SKU + content refresh. $5-25K per quarter at premium office with limited-edition SKU sourcing + branded product partnership + comprehensive touchscreen content management. Modern tier-1 operators bring content management + brand sourcing capability native; legacy operators don't credibly support.", audience: "Finance / Marketing" },
      { question: "Can we do co-branded employer SKUs?", answer: "Yes at premium tier with brand-licensing partnership. Co-branded employer SKU (employer logo on Hershey bar, KIND bar, custom-branded chip at major employer brands), seasonal employer-branded chocolate boxes for holiday gift, employer-branded reusable water bottle for Earth Day, employer-branded swag drops. 8-20 week lead time. $5-25K per campaign. Coordinate with employer brand team + operator sourcing + brand partner.", audience: "Marketing / Brand" },
      { question: "How does seasonal pricing work?", answer: "Operator pricing rule engine supports seasonal pricing: Earth Day Fair Trade SKU discount, Mental Health Awareness Month wellness SKU promotion, holiday gift-bundle pricing, member-tier seasonal benefit (premium tier free hydration during summer hydration push), challenge-completion bonus (complete healthy-share challenge → free recovery RTD). Modern operators support; legacy operators run flat pricing.", audience: "Marketing / Operations" },
      { question: "What about wellness program integration?", answer: "Seasonal vending integrates with employer wellness platform (Virgin Pulse, Wellable, Limeade, Personify Health) for new-year wellness reset healthy-share challenge, summer hydration challenge, recovery challenge year-round. Vending purchases feed wellness engagement tracking + reward credit. Modern operators with API integration bring native; legacy operators don't credibly support.", audience: "Wellness / Benefits" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — vending industry seasonal + promotional program capability", url: "https://www.namanow.org/", note: "Industry trade association covering operator capability + seasonal + promotional program frameworks" },
      { label: "B Corporation — B-Corp partner directory + Earth Day campaign sourcing", url: "https://www.bcorporation.net/", note: "B-Corp directory supporting Earth Day + ESG campaign brand partnership sourcing" },
      { label: "Fair Trade USA — Fair Trade certified brand directory", url: "https://www.fairtradecertified.org/", note: "Fair Trade certified brand directory supporting Earth Day + ESG campaign sourcing" },
      { label: "Cantaloupe Engage Content — vending content management platform with marketing-team write access", url: "https://www.cantaloupe.com/", note: "Vending content management platform supporting touchscreen content refresh + multi-language" },
      { label: "Vending Times — seasonal + promotional vending program coverage", url: "https://www.vendingtimes.com/", note: "Trade publication covering seasonal + promotional vending program design" },
    ],
  }),
  relatedGuides({
    heading: "Related office vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Office vending branding", description: "Five branding layers + tier-1 operator + brand guidelines compliance + multi-location coordination.", href: "/office-vending-services/branding-office-vending" },
      { eyebrow: "Sister guide", title: "AI vending solutions for offices", description: "AI cooler walls + micro-markets + grab-and-go fresh with seasonal SKU integration.", href: "/office-vending-services/ai-vending-solutions-for-offices" },
      { eyebrow: "Hub", title: "All office vending guides", description: "Vending, coffee, micro-markets, branding, seasonal programs across modern office placements.", href: "/office-vending-services" },
    ],
  }),
]);
process.exit(0);
