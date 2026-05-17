import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-in-private-vs-public-schools",
  assetType: "pack",
  title: "Private vs Public K-12 Vending Pack",
  subtitle: "Smart Snacks scope, governance + procurement framework, operator specialization, fundraising mechanism mapping",
  intro:
    "Private and public K-12 vending look similar on the surface but diverge on four dimensions: Smart Snacks scope, governance and procurement, operator specialization, and fundraising mechanism. This pack codifies the divergences so a school — public or private — is equipped to run the program that matches its compliance posture and revenue model.",
  sections: [
    {
      heading: "1. Smart Snacks scope divergence",
      paragraph:
        "USDA Smart Snacks in School (7 CFR 210.11) applies to schools participating in the National School Lunch Program (NSLP). Most public schools participate; private schools may or may not.",
      headers: ["School type", "NSLP participation", "Smart Snacks applies?", "Practical effect"],
      rows: [
        ["Public (typical)", "Yes", "Yes — full scope", "All student-accessible SKUs during school day pass calculator"],
        ["Public charter", "Usually yes", "Yes if NSLP", "Same as public; verify with charter authorizer"],
        ["Private K-12 (NSLP participant)", "Yes (opt-in)", "Yes", "Same as public if opted in"],
        ["Private K-12 (non-NSLP)", "No", "Not federally required", "School wellness policy or board governs"],
        ["Religious / parochial (non-NSLP)", "Often no", "Not federally required", "Diocese / board policy applies"],
      ],
    },
    {
      heading: "2. Governance + procurement framework",
      paragraph:
        "Governance and procurement diverge significantly. Public schools follow state procurement code; private schools follow board policy.",
      items: [
        { label: "Public — governance", value: "Wellness committee per HHFKA § 204; board approval per state code; state procurement threshold triggers RFP." },
        { label: "Public — procurement", value: "Cooperative purchasing (Sourcewell, OMNIA, TIPS) or RFP; bid threshold varies by state." },
        { label: "Public — transparency", value: "Procurement file is public record; board agenda posted under state open-meetings law." },
        { label: "Private — governance", value: "Board of trustees + head of school; wellness policy if NSLP-opted; otherwise discretionary." },
        { label: "Private — procurement", value: "Direct award common; comparative quotes for larger schools; no public bid required." },
        { label: "Private — transparency", value: "Board minutes typically internal; parent association may have input." },
      ],
    },
    {
      heading: "3. Operator specialization mapping",
      paragraph:
        "Operators tend to specialize. Public-school operators have invested in Smart Snacks workflows and state attestation. Private-school operators have invested in service quality, premium SKUs, and event-vending flexibility.",
      headers: ["Operator profile", "Best fit", "Typical capabilities"],
      rows: [
        ["Compliance-first regional operator", "Public + NSLP private", "Smart Snacks workflow; state attestation; wellness committee experience"],
        ["Premium-service regional operator", "Non-NSLP private", "Premium SKUs; event-vending; AI smart-cooler in staff areas"],
        ["National operator (Aramark, Compass, Canteen)", "Large district + private network", "Full-service food + vending + reimbursable meal extension"],
        ["Local independent operator", "Small private or single-campus public", "High-touch service; lower commission; less compliance machinery"],
      ],
    },
    {
      heading: "4. Fundraising mechanism mapping",
      paragraph:
        "Revenue from vending funds different things in public vs private settings. The mechanism affects contract design and approval workflow.",
      items: [
        { number: 1, title: "Public — athletic program funding", description: "Common; revenue routed through booster club or athletic department per district policy. Federal exempt-fundraiser day rules apply if the school does additional sales." },
        { number: 2, title: "Public — student activities fund", description: "Vending commission routed through district SAF account; spending governed by district policy + state code." },
        { number: 3, title: "Public — PTA / PTO partnership", description: "Less common; PTA may co-sponsor placement; revenue distribution per MOU." },
        { number: 4, title: "Private — operating revenue", description: "Vending commission flows to school general fund; supports operating budget." },
        { number: 5, title: "Private — class gift / capital campaign", description: "Some schools route to annual class gift or capital campaign; donor recognition possible per board policy." },
        { number: 6, title: "Private — student council / activities", description: "Often a co-funded model; student council proposes SKU and split." },
      ],
    },
    {
      heading: "5. Compliance attestation differences",
      paragraph:
        "Public schools require full federal + state attestation. Non-NSLP private schools have more flexibility but still benefit from voluntary attestation.",
      headers: ["Attestation area", "Public required", "Private (non-NSLP) required", "Private best practice"],
      rows: [
        ["Smart Snacks", "Yes — quarterly", "No", "Voluntary attestation builds parent confidence"],
        ["FALCPA allergen labeling", "Yes", "Yes (FDA law)", "Required for all sold food regardless of NSLP"],
        ["FDA Food Code 35-40°F", "Yes", "Yes (state health code)", "Required for refrigerated units"],
        ["ADA Section 308", "Yes", "Yes (Title III public accommodation)", "Required for any public-facing placement"],
        ["State competitive-food rules", "Yes", "Sometimes — varies by state", "Verify with state agency"],
      ],
    },
    {
      heading: "6. Contract structure differences",
      items: [
        { label: "Public — term", value: "Typically 36-60 months; renewal subject to board reapproval." },
        { label: "Public — termination", value: "For cause on 30 days; convenience on 90 days; state-specific termination for funding lapse." },
        { label: "Private — term", value: "Typically 24-48 months; renewal at head-of-school discretion." },
        { label: "Private — termination", value: "More flexible; commonly 60 days for convenience." },
        { label: "Public — insurance", value: "GL ≥ $2M/$5M; auto; workers' comp; cyber; some districts require $5M umbrella." },
        { label: "Private — insurance", value: "GL ≥ $1M/$2M; auto; workers' comp; cyber; smaller schools accept lower limits." },
      ],
    },
    {
      heading: "7. Decision matrix — what to ask before commit",
      items: [
        { check: "Is the school an NSLP participant? — Confirms Smart Snacks scope." },
        { check: "What is the state competitive-food overlay? — Confirms state-level requirements." },
        { check: "Who approves the contract — board, head of school, wellness committee? — Confirms approval workflow." },
        { check: "What is the revenue destination — athletics, SAF, operating, class gift? — Confirms commission split design." },
        { check: "Is event-vending in scope (theater, athletics, community events)? — Confirms after-school SKU set." },
        { check: "Are AI smart-coolers in scope for staff lounges? — Confirms equipment selection." },
        { check: "What is the wellness committee cadence? — Confirms compliance attestation cadence." },
      ],
    },
    {
      heading: "8. Operator capability checklist",
      items: [
        { check: "Operator has 24+ months of K-12 placements (public or private as applicable)." },
        { check: "Operator can attest to Smart Snacks workflow even where not federally required." },
        { check: "Operator's reference list includes the school's segment (public, charter, parochial, independent private)." },
        { check: "Operator carries the right insurance package for the school type." },
        { check: "Operator's restock cadence is contractually flexible across the school year + event windows." },
        { check: "Operator's quarterly KPI reporting matches the school's wellness committee cadence." },
      ],
    },
  ],
  footer:
    "This pack is a working selection reference. Confirm NSLP participation with the school nutrition director and state procurement code with district counsel before commit.",
});

console.log("wrote "+"vending-in-private-vs-public-schools");
