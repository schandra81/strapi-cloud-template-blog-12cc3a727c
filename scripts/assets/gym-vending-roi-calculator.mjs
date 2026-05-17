import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "gym-vending-roi-calculator",
  assetType: "worksheet",
  title: "Gym Vending ROI Worksheet",
  subtitle: "Format benchmarks, commission tier negotiation, and ancillary value calculation",
  intro:
    "Use this worksheet to quantify the return on a gym vending placement. Inputs reference typical industry benchmarks for boutique, mid-box, and big-box fitness operations. Commission tiers and SLA benchmarks reflect typical operator capability — verify in writing before contract execution. Capability-framed throughout.",
  sections: [
    {
      heading: "1. Format benchmarks",
      paragraph:
        "Use the benchmark table below to set expectations for revenue and commission outcome before contract negotiation.",
      headers: ["Gym format", "Members", "Avg monthly gross / machine", "Common commission %", "Cashless mix", "Best SKU mix"],
      rows: [
        ["Boutique HIIT / cycling", "200-500", "$2,500-$4,500", "8-15%", "85-95%", "Beverage-heavy, recovery snacks"],
        ["Boutique yoga / pilates", "150-400", "$1,200-$2,400", "5-10%", "90-98%", "Sparkling water, electrolyte, plant-based bars"],
        ["Mid-box functional (CrossFit-style)", "300-600", "$3,000-$5,500", "10-15%", "75-90%", "Protein RTD, jerky, electrolyte, recovery"],
        ["Mid-box 24-hr (Anytime / Snap)", "1,000-2,500", "$3,500-$7,500", "10-18%", "80-92%", "Broad mix; off-hours snack + beverage"],
        ["Big-box premium", "3,500-6,000", "$15K-$30K", "15-22%", "85-95%", "Premium beverage + grab-and-go meal"],
        ["Big-box value", "5,000-8,000", "$7K-$14K", "12-18%", "70-85%", "Beverage-heavy, value-priced snack"],
      ],
    },
    {
      heading: "2. Commission tier negotiation framework",
      paragraph:
        "Commission tiers are negotiable based on placement quality (member count, dwell time, exclusivity). Use the framework below to make the case for a higher tier.",
      items: [
        { label: "Lever 1 — Exclusivity", value: "Granting operator exclusive vending placement (no competing machines) typically warrants +3-5 percentage points on commission tier." },
        { label: "Lever 2 — Term length", value: "3-year commitment vs 1-year typically warrants +2-3 percentage points; operator amortizes equipment over more months." },
        { label: "Lever 3 — Multiple machine placement", value: "Hosting 2-3 machines (snack + beverage + cooler) at the same site typically warrants +2-4 percentage points; route economics improve." },
        { label: "Lever 4 — Premium placement", value: "Lobby placement with high visibility (not back-corner) typically warrants +1-3 percentage points." },
        { label: "Lever 5 — Member access guarantee", value: "Documented daily traffic ≥ 200 unique members typically warrants +1-2 percentage points." },
        { label: "Lever 6 — Co-marketing", value: "Gym agrees to feature vending in member communications, app, lobby signage — operators often share co-marketing dollars or bump commission +1-2 points." },
        { label: "Lever 7 — Cashless-only", value: "Cashless-only placement reduces operator cash-handling cost; typically warrants +1-2 points and faster refunds." },
      ],
    },
    {
      heading: "3. Ancillary value calculation",
      paragraph:
        "Vending generates value beyond commission. Quantify by attributing portions of member retention, complaint reduction, and brand value.",
      headers: ["Ancillary metric", "Calculation", "Typical annual value (mid-box example)"],
      rows: [
        ["Retention lift", "(Members retained × avg dues × % attributable to vending)", "$2K-$6K"],
        ["Off-hours coverage", "(24-hr members × % using vending × value of self-service)", "$1.5K-$4K"],
        ["Complaint deflection", "(Hours saved by front desk × hourly cost)", "$500-$1,500"],
        ["Sponsorship / co-marketing", "(Operator co-mkt dollars where applicable)", "$0-$5K"],
        ["Member experience NPS lift", "Qualitative; reflected in retention", "Embedded in retention lift"],
      ],
    },
    {
      heading: "4. Operator capability rubric",
      items: [
        { label: "Fitness reference accounts", value: "Operator provides 3+ active fitness placements ≥ 12 months in service; reference call required." },
        { label: "Sports-nutrition SKU depth", value: "Operator carries ≥ 12 sports-nutrition SKUs in active rotation (Gatorade, BodyArmor, Liquid IV, Quest, RX Bar, jerky, protein RTD)." },
        { label: "Cashless capability", value: "Apple Pay, Google Pay, contactless EMV, optional account/app. PCI-DSS 4.0 attestation; no PAN storage at cooler." },
        { label: "Telemetry + uptime SLA", value: "≥ 98% uptime, ≤ 30 min offline alert threshold, ≤ 24 hr Tier-1 service response." },
        { label: "Refund SLA", value: "Cashless auto-credit ≤ 24 hr; cash refund mailed ≤ 7 business days." },
        { label: "Commission tier transparency", value: "Operator publishes tier schedule and explains how monthly gross drives the tier; reconciliation monthly via portal." },
        { label: "Insurance + liability", value: "$2M GL, $1M umbrella, additional-insured endorsement to gym owner; product liability ≥ $1M." },
      ],
    },
    {
      heading: "5. ROI summary worksheet",
      headers: ["Line", "Source", "Your value"],
      rows: [
        ["Annual gross revenue", "From revenue input worksheet", "____"],
        ["Commission tier %", "Negotiated per Section 2", "____"],
        ["Annual commission to gym", "Gross × commission %", "____"],
        ["Ancillary value (Section 3)", "Retention + off-hours + complaint + co-mkt", "____"],
        ["Total annual value to gym", "Commission + ancillary", "____"],
        ["Annual costs (gym side)", "Electricity ~$200-$400/machine; floor space", "____"],
        ["Net annual ROI to gym", "Total value − costs", "____"],
      ],
    },
    {
      heading: "6. Negotiation memo template",
      items: [
        { number: 1, title: "Placement profile", description: "Gym name, members, daily traffic, hours, requested machine count + format mix, exclusivity offer, term length." },
        { number: 2, title: "Baseline commission tier requested", description: "Reference operator's published tier schedule." },
        { number: 3, title: "Tier-bump levers offered", description: "Reference Section 2 levers; quantify the commitment offered (exclusivity for 3 years, 3 machines, lobby placement, co-marketing in app + email)." },
        { number: 4, title: "SLA requirements", description: "98% uptime, ≤ 24 hr Tier-1, refund SLA ≤ 24 hr cashless, telemetry portal access." },
        { number: 5, title: "Compliance requirements", description: "PCI-DSS 4.0, ADA Section 308, insurance COI per Section 4 rubric." },
        { number: 6, title: "Decision deadline", description: "Specify response deadline + decision date." },
      ],
    },
  ],
  footer:
    "This worksheet is informational and not financial advice. Gym owners should verify operator capability claims through reference calls and written attestation before contract execution. LetUsVending can connect gym owners with operators equipped to serve fitness placements.",
});

console.log("wrote "+"gym-vending-roi-calculator");
