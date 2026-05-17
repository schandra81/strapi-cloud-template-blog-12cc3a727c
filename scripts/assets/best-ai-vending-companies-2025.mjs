import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "best-ai-vending-companies-2025",
  assetType: "matrix",
  title: "AI Vending Company Selection Framework",
  subtitle: "Category matrix, capability rubric, and reference-check protocol",
  intro:
    "This framework gives procurement and facilities a structured way to evaluate AI vending companies and operators. References to PCI-DSS 4.0, ADA Section 308, FDA Food Code 3-501.16, GDPR / CCPA where account or app data is captured, and standard insurance + COI expectations. Capability-framed: every claim in a vendor proposal should be attestable in writing and verifiable through reference call.",
  sections: [
    {
      heading: "1. Category matrix — AI vending players",
      paragraph:
        "AI vending splits into three categories: technology / vision-system platforms (sold to operators), turnkey cooler operators (who pick a platform + run the placement), and full-stack venture-funded entrants. Below is a representative landscape.",
      headers: ["Category", "Representative companies", "Sells to", "Differentiator", "Verify by"],
      rows: [
        ["Vision-system platforms", "AiFi, Trigo, Standard AI, Grabango, Zippin", "Operators + retailers", "Computer-vision accuracy, multi-SKU recognition, weight + camera fusion", "Per-SKU mis-charge rate report"],
        ["Cooler + kiosk OEMs with AI option", "365 Retail Markets, Crane (PicAdvanced), Avanti Markets, AWM Smart Shelf", "Operators", "Integrated hardware + payment + back-office", "Hardware spec + operator network"],
        ["Turnkey cooler operators", "Aramark, Compass, Canteen, regional operators using AiFi/Trigo/365", "Hosts (facilities, multifamily, healthcare)", "Service, restock, refund SLA, telemetry transparency", "Reference call + on-site visit"],
        ["Full-stack entrants (venture-funded)", "Various 2020-2025 entrants in unattended retail", "Hosts directly OR via real-estate partnerships", "Brand experience, app-first model, premium SKU", "Track record + reference call"],
        ["Payment + telemetry only", "Nayax, Cantaloupe (Seed)", "Operators", "Cashless payment + telemetry stack (not vision system)", "Operator integration"],
      ],
    },
    {
      heading: "2. Capability rubric — score each shortlisted operator 1-5",
      paragraph:
        "Score the operators you shortlist (not the platforms — operators deliver the service). Operator should attest in writing.",
      items: [
        { label: "Reference accounts (≥ 3 comparable placements ≥ 12 months in service)", value: "5 = ≥ 5 references in matching vertical; 3 = ≥ 3; 1 = none in vertical. Reference call required for top scorers." },
        { label: "Vision-system platform + accuracy", value: "5 = ≥ 99% per-SKU accuracy with quarterly audit; 3 = ≥ 97% with annual audit; 1 = no published accuracy. Operator attests to platform choice (AiFi / Trigo / Standard AI / Grabango / 365 / AWM)." },
        { label: "Telemetry + uptime SLA", value: "5 = 98%+ uptime contractual, ≤ 30 min offline alert, ≤ 24 hr Tier-1 resolution; 3 = 97%+ uptime, ≤ 1 hr alert; 1 = no contractual SLA." },
        { label: "Payment + PCI-DSS 4.0", value: "5 = current AOC + SAQ-B-IP, Apple Pay/Google Pay + contactless EMV, no PAN storage at cooler; 3 = current AOC; 1 = no AOC on file." },
        { label: "Refund SLA", value: "5 = cashless auto-credit ≤ 24 hr + cash ≤ 7 days + self-serve QR/app channel; 3 = ≤ 48 hr cashless + ≤ 10 days cash; 1 = manual-only refund." },
        { label: "Restock cadence + planogram capability", value: "5 = telemetry-driven cadence + quarterly planogram refresh + open velocity report; 3 = scheduled cadence + annual refresh; 1 = fixed cadence + no refresh framework." },
        { label: "Cold-chain compliance", value: "5 = internal-temp telemetry + ≤ 4 hr excursion alert + FDA Food Code 3-501.16 attestation; 3 = manual log + monthly attestation; 1 = no telemetry." },
        { label: "ADA Section 308 compliance", value: "5 = written attestation + annual on-site verification + VPAT for digital interface; 3 = written attestation only; 1 = no attestation." },
        { label: "Privacy / data handling (GDPR / CCPA)", value: "5 = published privacy policy + DPA available + data export + deletion on request; 3 = published privacy policy; 1 = no policy where account data captured." },
        { label: "Insurance + liability", value: "5 = $2M GL + $1M umbrella + additional-insured endorsement + product liability ≥ $1M; 3 = $1M GL only; 1 = below standard." },
      ],
    },
    {
      heading: "3. Reference check protocol",
      paragraph:
        "Always run reference calls on shortlisted operators. Use the question bank below; document each call in the procurement file.",
      items: [
        { number: 1, title: "Tenure + placement profile", description: "How long has the operator served you? How many machines? What format (AI cooler / micro-market / vending)? Was the placement vertical similar to yours?" },
        { number: 2, title: "Uptime + service experience", description: "Has the operator met the contractual uptime SLA every month? How long does a Tier-1 ticket take to resolve in practice? Any month with > 1 day of machine offline?" },
        { number: 3, title: "Vision-system accuracy (AI cooler)", description: "What is the per-SKU mis-charge rate in practice? How often does the operator recalibrate? Has the host received any customer complaints about over-charging?" },
        { number: 4, title: "Refund experience", description: "How does the refund flow work in practice? What is the typical time-to-credit? Have refunds ever been delayed beyond the SLA?" },
        { number: 5, title: "Planogram responsiveness", description: "How often does the operator refresh the planogram? Did the operator drop slow-moving SKUs proactively, or only after host pressure?" },
        { number: 6, title: "Account management quality", description: "Is the account manager responsive (24-48 hr email response)? How are QBRs run? Are open action items closed on time?" },
        { number: 7, title: "Surprise issues", description: "What surprised you about working with this operator? What would you change in the contract if you started over?" },
        { number: 8, title: "Recommendation", description: "Would you renew with this operator if the contract were up next quarter? Would you recommend them to a peer in your industry?" },
      ],
    },
  ],
  footer:
    "This framework is informational and not legal advice. Procurement should validate all operator claims through written attestation and reference calls before contract execution. LetUsVending can connect host teams with operators equipped to deliver AI cooler programs at scale.",
});

console.log("wrote "+"best-ai-vending-companies-2025");
