import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "bean-to-cup-coffee-machines-office",
  assetType: "playbook",
  title: "Bean-to-Cup Office Coffee Playbook",
  subtitle: "Tier selection, supply quality, milk-system discipline, and operator SLA",
  intro:
    "Bean-to-cup machines (B2C) replace the office's pod-coffee or batch-brew with on-demand grind-and-brew espresso, drip, and milk-based drinks. They lift coffee NPS more than any other breakroom change at offices over 50 employees — when the four operational levers in this playbook are managed. This playbook codifies tier selection (commercial-grade vs. semi-commercial vs. office-prosumer), supply quality (bean grade + freshness), milk-system discipline (the #1 source of B2C complaints), and operator SLA. It maps to NSF 4 / NSF 169 sanitation standards, FDA food-contact equipment standards (21 CFR 175-178), and standard ADA Section 309.4 operating force.",
  sections: [
    {
      heading: "1. Machine-tier selection",
      paragraph:
        "Three tiers cover virtually all office placements. Sizing is set by peak-hour drink count, not headcount. Plan for 1.2-1.6 drinks per employee per workday at full in-office occupancy.",
      headers: ["Tier", "Best fit (employees / drinks per peak hour)", "Typical models", "Per-drink cost"],
      rows: [
        ["Office-prosumer", "Under 30 / under 25 drinks/hr peak", "Jura WE / GIGA, De'Longhi PrimaDonna, Saeco Royal", "0.50 – 0.85 USD"],
        ["Semi-commercial", "30-100 / 25-60 drinks/hr peak", "Jura X-line, Franke A300, WMF 1100S, Schaerer Coffee Club", "0.40 – 0.70 USD"],
        ["Commercial-grade", "100+ / 60+ drinks/hr peak", "Franke A600 / A800, WMF 1500 / 5000S, Schaerer Coffee Soul / Coffee Prime", "0.30 – 0.55 USD"],
      ],
    },
    {
      heading: "2. Bean supply + freshness",
      items: [
        { check: "Specialty-grade bean (SCA score ≥ 80 on the published Coffee Review scale) where possible; commercial-grade premium otherwise. Avoid blends with > 30% robusta unless explicitly chosen for body." },
        { check: "Roast date stamped on each bag; bag opened within 30 days of roast and consumed within 14 days of opening." },
        { check: "Bean hopper kept at 50-70% capacity (not full — older beans cycle to top). Topped up daily, not weekly." },
        { check: "Decaf hopper (where dual-hopper machine in use) supplied with comparable-quality decaf; rotation matches caffeinated consumption rate." },
        { check: "Operator publishes the named-origin or named-blend on the bean bag; not 'office blend' opaque label." },
        { check: "Annual bean review at QBR — taste, freshness, and supplier roast-date consistency." },
      ],
    },
    {
      heading: "3. Milk-system discipline — the #1 source of complaints",
      paragraph:
        "Milk-based drinks (latte, cappuccino, flat white) account for 35-50% of B2C volume at most offices. Milk-system failures (foam quality drop, off-taste, dispense errors) drive 60-70% of all B2C service tickets.",
      items: [
        { number: 1, title: "Fresh-milk vs. powder", description: "Fresh-milk machines deliver materially better drink quality but require daily cleaning + refrigerated bulk supply. Powder-based machines are easier to maintain and acceptable at < 50-employee placements. Hybrid (fresh + powder) available in commercial-grade." },
        { number: 2, title: "Daily cleaning cycle", description: "Fresh-milk machines require automated rinse cycle multiple times per day and a full clean cycle daily. Operator field rep or designated host staff confirms cycle completion. Skipped cleaning surfaces as off-taste within 24 hours." },
        { number: 3, title: "Weekly deep clean", description: "Full disassembly + sanitize of milk frother / steam wand / lines. Operator field visit. NSF 4 / NSF 169 sanitation alignment." },
        { number: 4, title: "Refrigeration discipline", description: "Bulk milk container kept at 35-40°F continuously; temperature logged. Excursion outside range triggers same-day milk swap." },
        { number: 5, title: "Alt-milk support", description: "Oat, almond, soy support varies by machine. Confirm at tier selection; expect to add a secondary milk hopper or counter-side carafe for alt-milks at commercial-grade." },
        { number: 6, title: "Plant-based / allergen labeling", description: "Allergen signage on each drink type (dairy in lattes, soy in alt-milks, tree nuts in almond milk). FALCPA-aligned." },
      ],
    },
    {
      heading: "4. Water + descaling discipline",
      items: [
        { check: "Filtered water supply — operator-supplied filter (3M, Everpure, BWT) sized to machine + water hardness; replacement cadence per spec (typically 6-12 months)." },
        { check: "Water hardness tested at install + annually. Hard-water sites require additional descaling cadence or softener." },
        { check: "Automated descale alert on machine respected by operator field rep; descale completed within SLA." },
        { check: "Daily auto-rinse cycle confirmed; operator field rep flags any disabled or skipped cycle." },
        { check: "Drainage line clean + free-flowing; daily drip-tray empty + sanitize." },
      ],
    },
    {
      heading: "5. Operator SLA",
      headers: ["Tier", "Definition", "Acknowledge", "Resolve"],
      rows: [
        ["Tier 1 — machine down / milk-line failure", "Machine offline, milk dispense failure, refrigeration excursion", "≤ 4 hr", "≤ 24 hr"],
        ["Tier 2 — drink quality / single component", "Foam quality drop, single SKU stockout (e.g., bean blend out)", "≤ 24 hr", "5 days"],
        ["Tier 3 — cosmetic / supply top-off", "Cup stockout, sugar/sweetener restock, signage", "≤ 5 days", "≤ 14 days"],
      ],
    },
    {
      heading: "6. Pricing + subsidy posture",
      items: [
        { label: "Office subsidy (most common)", value: "Host absorbs full cost; drinks free to employees. Most common at 50-500 employee offices. Per-employee cost: 8-25 USD/month all-in at semi-commercial tier." },
        { label: "Subsidized pricing", value: "Host pays operator + per-drink small charge to employees (0.25-0.75 USD). Maintains demand discipline; reduces waste." },
        { label: "Cost-recovery pricing", value: "Drink priced at full cost (1.00-2.00 USD). Used where the breakroom serves contract / visitor traffic alongside employees." },
        { label: "Tier pricing", value: "Free for employees; charged to visitors / contractors via badge / app rail. Requires identity integration." },
      ],
    },
    {
      heading: "7. Quarterly business review",
      items: [
        { check: "Drink-count per machine per month over the quarter; peak-hour throughput vs. spec." },
        { check: "Drink-mix — espresso vs. drip vs. milk-based vs. specialty. Inform bean + milk supply forecasting." },
        { check: "Service-ticket volume by tier; SLA adherence %." },
        { check: "Milk-system cleaning compliance — daily auto-rinse + weekly deep-clean log." },
        { check: "Bean freshness audit — sampled bags' roast date vs. consumption date." },
        { check: "Water filter + descale log review." },
        { check: "Member NPS + feedback themes." },
        { check: "Recommendations — supply changes, planogram adjustments, equipment changes." },
      ],
    },
    {
      heading: "8. Pre-signing red flags",
      items: [
        { check: "Operator declines to publish named bean origin / roast date." },
        { check: "No documented milk-system cleaning cadence or compliance log." },
        { check: "SLA proposed without per-tier acknowledgment + resolution targets." },
        { check: "Water filter program absent or 'as needed' rather than scheduled." },
        { check: "Single-tier machine offered regardless of office headcount." },
        { check: "No QBR cadence — program drifts on supply quality within 2 quarters." },
      ],
    },
  ],
  footer:
    "This playbook is informational. Equipment selection benefits from a 90-day pilot at the proposed machine tier with a sample of the actual office drink mix.",
});

console.log("wrote "+"bean-to-cup-coffee-machines-office");
