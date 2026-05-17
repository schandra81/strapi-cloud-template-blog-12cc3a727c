import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "gym-vending-profit",
  assetType: "worksheet",
  title: "Gym Vending Economics Worksheet",
  subtitle: "Revenue scenarios, commission tier modeling, and self-operate vs operator comparison",
  intro:
    "Use this worksheet to model the economics of a gym vending program before signing a commission agreement or buying a machine outright. Inputs reference typical IHRSA-cited per-member spend benchmarks and standard industry margin structures. Commission tiers reflect typical operator capability — verify in writing with the specific operator under consideration.",
  sections: [
    {
      heading: "1. Revenue input worksheet",
      paragraph:
        "Estimate weekly revenue from member visits × visit conversion × average basket. Tune by category (functional / boutique / 24-hr / big-box).",
      headers: ["Input", "Definition", "Typical range", "Your value"],
      rows: [
        ["Active members", "Members who visit ≥ 1×/month", "Boutique 200-800; mid-box 800-2,500; big-box 2,500-8,000", "____"],
        ["Average visits per member per week", "—", "Boutique 2.5-3.5; mid 2.0-2.8; big-box 1.5-2.2", "____"],
        ["Weekly visits", "Members × visits/wk", "—", "____"],
        ["Visit-to-purchase conversion %", "Share of visits that include a vending purchase", "Beverage-focused 12-22%; mixed 5-12%", "____"],
        ["Average basket size", "Dollar value per purchase", "Beverage-focused $3.50-$5.50; mixed $4.50-$8.00", "____"],
        ["Weekly gross revenue", "Visits × conversion × basket", "—", "____"],
        ["Monthly gross revenue", "Weekly × 4.33", "—", "____"],
        ["Annual gross revenue", "Monthly × 12", "—", "____"],
      ],
    },
    {
      heading: "2. Revenue scenarios by gym size",
      headers: ["Gym profile", "Members", "Weekly visits", "Conversion %", "Avg basket", "Monthly gross", "Annual gross"],
      rows: [
        ["Boutique HIIT / cycling (single studio)", "350", "1,050", "18%", "$4.25", "$3.5K", "$42K"],
        ["Boutique pilates / yoga", "300", "850", "10%", "$5.00", "$1.8K", "$22K"],
        ["Mid-box functional (CrossFit-style)", "450", "1,150", "15%", "$5.25", "$3.9K", "$47K"],
        ["Mid-box 24-hr (Anytime/Snap style)", "1,500", "3,300", "8%", "$4.75", "$5.4K", "$65K"],
        ["Big-box premium (LifeTime / Equinox style)", "4,500", "9,000", "10%", "$6.50", "$25.3K", "$304K"],
        ["Big-box value (Planet Fitness style)", "6,000", "9,000", "6%", "$4.25", "$9.9K", "$119K"],
      ],
    },
    {
      heading: "3. Commission tier modeling — operator model",
      paragraph:
        "Commission-based vending operators typically tier commission rates by gross revenue volume. Below are typical industry tiers. Confirm specific tiers in writing with each operator.",
      headers: ["Monthly gross", "Typical commission tier", "Monthly commission to gym", "Operator pays for", "Gym pays for"],
      rows: [
        ["Under $1.5K", "0%", "$0", "Equipment, restock, service, refunds", "Electricity, floor space"],
        ["$1.5K-$3.5K", "5-8%", "$75-$280", "Equipment, restock, service, refunds", "Electricity, floor space"],
        ["$3.5K-$7.5K", "8-15%", "$280-$1,125", "Equipment, restock, service, refunds", "Electricity, floor space"],
        ["$7.5K-$15K", "12-20%", "$900-$3,000", "Equipment, restock, service, refunds", "Electricity, floor space"],
        ["$15K+", "18-25%", "$2,700+", "Equipment, restock, service, refunds", "Electricity, floor space"],
      ],
    },
    {
      heading: "4. Self-operate vs operator comparison",
      paragraph:
        "Self-operating a vending machine captures more gross margin but consumes staff time and ties up capital. Use the comparison below.",
      headers: ["Cost element", "Self-operate", "Operator (commission model)"],
      rows: [
        ["Equipment", "$3,500-$8,500 (new) or $1,500-$4,500 (refurb)", "Operator-supplied at no capex"],
        ["Equipment financing", "Cash, SBA, equipment loan, lease", "N/A"],
        ["Stock cost (% of retail)", "55-65% (cost of goods)", "N/A — operator absorbs"],
        ["Restock labor", "Staff time (1-3 hr/wk per machine)", "Operator absorbs"],
        ["Service / repair", "Self-service or service contract ($150-$400/visit)", "Operator absorbs"],
        ["Telemetry / payment processing", "$10-$25/mo per machine + 3-5% on cashless", "Operator absorbs"],
        ["Refunds / shrinkage", "Gym absorbs", "Operator absorbs (refund SLA)"],
        ["Gross margin retained", "30-45% of revenue", "5-25% commission only"],
        ["Annual net (boutique example, $42K gross)", "$13K-$19K net of COGS, labor, service", "$2.5K-$8K commission"],
        ["Best fit", "Single-machine gyms with operations staff bandwidth", "Multi-machine, complex SKU mix, or no operations bandwidth"],
      ],
    },
    {
      heading: "5. Break-even worksheet (self-operate)",
      headers: ["Item", "Typical value", "Your value"],
      rows: [
        ["Equipment cost (one-time)", "$3,500-$8,500", "____"],
        ["Initial stock fill", "$300-$800", "____"],
        ["Monthly restock cost (COGS)", "55-65% of revenue", "____"],
        ["Monthly utility / consumables", "$15-$40", "____"],
        ["Monthly payment processing", "3-5% of cashless gross", "____"],
        ["Monthly labor time (hr)", "4-12 hr × hourly cost", "____"],
        ["Monthly net margin", "Revenue − COGS − utility − processing − labor", "____"],
        ["Months to recover equipment cost", "Equipment / monthly net", "____"],
      ],
    },
    {
      heading: "6. Ancillary value beyond commission",
      items: [
        { label: "Member retention signal", value: "Beverage + recovery snack availability correlates with longer post-workout stays; operators with sports-nutrition SKUs (protein, electrolyte, recovery) reinforce the gym brand." },
        { label: "Reduced complaint volume", value: "Members who can't find hydration mid-workout often complain or leave; vending closes a service gap with minimal staff overhead." },
        { label: "Off-hours coverage", value: "24-hr gyms with no staffed counter rely on vending for any off-hours purchase; cashless + telemetry essential." },
        { label: "Sponsorship + brand activation", value: "Operators with private-label / sponsored SKU programs (Gatorade, BodyArmor, Liquid IV) may share co-marketing dollars beyond commission." },
        { label: "Data on member preferences", value: "Telemetry reports identify peak hours, top categories — useful input to programming, retail mix, and personal-trainer recommendation guides." },
      ],
    },
  ],
  footer:
    "This worksheet is informational and not financial advice. Gym owners should verify operator commission tiers, restock cadence, and refund SLA in writing before contract execution. LetUsVending can connect gym owners with operators equipped to serve fitness placements.",
});

console.log("wrote "+"gym-vending-profit");
