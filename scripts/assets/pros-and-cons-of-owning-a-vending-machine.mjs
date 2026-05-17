import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "pros-and-cons-of-owning-a-vending-machine",
  assetType: "checklist",
  title: "Vending Machine Ownership Decision Framework",
  subtitle: "Capability + capital + account discipline checklist before you buy your first machine",
  intro:
    "Use this framework before you commit capital to your first vending machine. Ownership is profitable only when capability, capital, and account discipline align. Most first-time operators who lose money skip one of the three.",
  sections: [
    {
      heading: "Capability checklist — can you actually operate?",
      paragraph:
        "Vending is a service business with hardware. You need basic mechanical, payment-system, and food-safety capability — or a paid relationship with someone who has it.",
      items: [
        { check: "Can you change a spiral, troubleshoot an MDB harness, and clear a coin-mech jam? If no, budget $75-$150 per service call." },
        { check: "Can you read a Cantaloupe / Nayax dashboard and adjust a planogram based on per-SKU velocity?" },
        { check: "Are you available for emergency service within 24 hours, including weekends? If no, budget for a service contract." },
        { check: "Are you comfortable handling cash (counting, depositing, ATM fees) — or are you committed to 100% cashless from day 1?" },
        { check: "Do you have a vehicle capable of transporting a hand-truck + 200 lbs of product + a 600-lb machine on a tow trailer?" },
      ],
    },
    {
      heading: "Capital checklist — can you fund the cycle?",
      paragraph:
        "First-machine economics are tight. Owner-operators who undercapitalize typically run out of cash 4-6 months in when product inventory + service costs hit before stable revenue.",
      items: [
        { check: "Equipment — $2,800-$8,500 per machine (refurb to new) per Automatic Merchandiser 2024 SOI averages." },
        { check: "Initial inventory — $300-$600 per machine to fully stock." },
        { check: "Cashless reader — $150-$400 upfront + $5-$15/month per machine." },
        { check: "Telemetry — bundled with cashless or $5-$15/month standalone." },
        { check: "Delivery + install — $200-$800 depending on stairs, freight elevator, and distance." },
        { check: "Insurance — $600-$1,800/year for $1M / $2M general liability + product liability." },
        { check: "Sales-tax + license fees — $50-$500/year depending on state + city." },
        { check: "Working capital reserve — 4-6 months of replacement inventory + service costs. Underfunded operators run out of cash before stable revenue arrives." },
      ],
    },
    {
      heading: "Account discipline checklist — are you ready to evaluate stops?",
      items: [
        { check: "Are you prepared to walk away from a stop scoring below 65 on the location criteria scorecard (audience, infrastructure, drive-time, demographics)?" },
        { check: "Can you say no to a stop where the decision-maker is not signing the MSA (e.g., a friendly receptionist whose boss doesn't know about the placement)?" },
        { check: "Have you verified the stop's prior operator and contract status? Placing on top of an active multi-year contract is a TI tort risk." },
        { check: "Are you committed to a 60-90 day pilot with telemetry data before signing a multi-year MSA?" },
        { check: "Will you maintain a documented refund procedure (operator app + SMS + on-machine) from day 1, not after the first complaint?" },
      ],
    },
    {
      heading: "Pros — when ownership is the right model",
      items: [
        { number: 1, title: "Margin retention", description: "Owner-operator captures the full 18-30% net margin instead of a 8-15% commission on host-funded models." },
        { number: 2, title: "Operational control", description: "You set the planogram, service cadence, and pricing — no host or franchisor approvals." },
        { number: 3, title: "Capital efficiency at scale", description: "Once you exceed 15-25 machines, route economics improve materially — fixed costs (vehicle, telemetry contracts, insurance) amortize across more units." },
        { number: 4, title: "Exit value", description: "Established routes sell at 1.5-3x trailing 12-month net based on Industry Insights data and broker comps. Equipment + telemetry + accounts are the salable assets." },
      ],
    },
    {
      heading: "Cons — when ownership is the wrong model",
      items: [
        { number: 1, title: "Service obligation", description: "Machines break, payments fail, and product expires. Owner-operators on call 24/7 until they hire help." },
        { number: 2, title: "Cash-flow timing", description: "Inventory + service costs front-load; revenue trickles in 30-90 days. Undercapitalized operators stall." },
        { number: 3, title: "Compliance complexity", description: "PCI-DSS v4.0, ADA Section 308, FDA Food Code 2022, state sales-tax + vending license, COI maintenance — non-negotiable above 5-10 machines." },
        { number: 4, title: "Location acquisition risk", description: "Paid locator scams (16 CFR Part 437) target new operators. Many first-time operators lose $5K-$15K on biz-op fraud before their first revenue dollar." },
      ],
    },
    {
      heading: "Decision matrix",
      headers: ["Profile", "Recommendation"],
      rows: [
        ["Capability ✓ + Capital ✓ + Discipline ✓", "Buy + grow. Start with 3-5 machines; aim for 15-25 in year 1."],
        ["Capability ✓ + Capital ✗", "Delay until you have 4-6 months working capital reserve, then start small."],
        ["Capability ✗ + Capital ✓", "Partner with an experienced operator OR start with a managed-service operator model."],
        ["Capability ✗ + Capital ✗", "Don't buy machines. Place a host-funded program through an established operator network."],
        ["Discipline ✗", "Acquire discipline first. Read MSAs, study the FTC biz-op rule, walk away from bad stops."],
      ],
    },
  ],
  footer:
    "This framework is informational and not financial or legal advice. Equipment costs, route economics, and licensing vary by region; consult a licensed advisor before committing capital.",
});

console.log("wrote "+"pros-and-cons-of-owning-a-vending-machine");
