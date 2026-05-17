import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "do-vending-machines-require-special-outlets",
  assetType: "checklist",
  title: "Vending Machine Electrical Install Checklist",
  subtitle: "Voltage, dedicated circuit, GFCI/AFCI, NEMA configurations, and plumbing verification",
  intro:
    "Use this checklist before installing or relocating a vending machine. Most snack and beverage units run on a standard 120V dedicated circuit, but coffee, hot-food, and outdoor units may require 240V or higher amperage. Always confirm against the manufacturer nameplate and applicable NEC sections. Mark each item Verified, Acceptable with mitigation, or Reject before scheduling install.",
  sections: [
    {
      heading: "1. Voltage and circuit sizing — per machine nameplate",
      items: [
        { check: "Manufacturer nameplate FLA (full-load amps), voltage, and frequency recorded for each machine to be installed." },
        { check: "Standard snack/beverage unit: 120V, 15-20A dedicated circuit; running load typically 3-8 amps, compressor start surge can reach 15A momentarily." },
        { check: "Combo, fresh-food, and refrigerated micro-market units: 120V 20A dedicated circuit standard; some heavy-refrigerant units rated to 240V." },
        { check: "Coffee, hot-food, and barista-style units: typically 240V 20-30A dedicated circuit; verify against nameplate." },
        { check: "Dedicated circuit confirmed per NEC 210.23 — vending machine should not share a branch circuit with unrelated equipment." },
      ],
    },
    {
      heading: "2. GFCI, AFCI, and receptacle configuration",
      items: [
        { check: "GFCI protection per NEC 422.51 for vending machines installed before 2005 (those without an internal CCD circuit). NEC 422.52 may apply for certain newer units." },
        { check: "NEC 210.8(B): GFCI receptacles required in commercial kitchens, within 6 ft of sinks, in break rooms with sinks, and in all outdoor commercial locations." },
        { check: "AFCI protection per NEC 210.12 in dwelling-unit common areas where applicable (some apartment-building break rooms qualify)." },
        { check: "Receptacle configuration matches machine cordcap: NEMA 5-15R (120V 15A), 5-20R (120V 20A), 6-20R (240V 20A), or 6-30R (240V 30A)." },
        { check: "Weather-resistant in-use cover (NEMA WD-6 / UL 514D 'extra duty') for any outdoor or wet-location receptacle." },
      ],
    },
    {
      heading: "3. Conductor, conduit, and voltage drop",
      items: [
        { check: "Conductor size per NEC 310.16 ampacity table for the circuit rating and run length; #12 AWG copper minimum for 20A circuits, #10 AWG for 30A." },
        { check: "Voltage drop ≤ 3% at maximum running load per NEC 210.19(A) Informational Note 4; long runs may require upsizing." },
        { check: "Conduit and box rating matches location (NEMA 1 indoor general / NEMA 3R outdoor / NEMA 4 wet)." },
        { check: "Equipment grounding conductor (EGC) sized per NEC 250.122; bonding verified to building grounding electrode system." },
      ],
    },
    {
      heading: "4. Plumbing — for water-fed units",
      items: [
        { check: "Coffee, water, and ice machines: dedicated cold-water line ¼-inch OD copper or PEX with shutoff valve within 3 ft of the unit." },
        { check: "Water pressure 30-80 psi per most manufacturer specs; pressure regulator installed if building static pressure exceeds 80 psi." },
        { check: "Backflow prevention (RPZ or atmospheric vacuum breaker) per local plumbing code; many jurisdictions require RPZ for commercial coffee equipment." },
        { check: "Drain or condensate line provided where the unit specifies; floor drain or condensate pump per manufacturer." },
        { check: "Water-quality test (TDS, hardness, chlorine) where the manufacturer specifies an inlet water quality range." },
      ],
    },
    {
      heading: "5. Final verification and documentation",
      items: [
        { check: "Voltage measured at receptacle under compressor start (snapshot) and steady-state running — both within ±10% of nameplate voltage." },
        { check: "GFCI test pass at install; trip-and-reset verified." },
        { check: "Circuit identified on the panel directory; receptacle labeled with circuit number." },
        { check: "Permit closed and inspection passed per local jurisdiction (where applicable)." },
        { check: "Install record retained: photos of receptacle, panel directory, and voltage readings filed with the host facility manager." },
      ],
    },
  ],
  footer:
    "This checklist is informational and not engineering advice. Electrical and plumbing work must be performed by licensed professionals per the National Electrical Code (NEC, NFPA 70), Uniform Plumbing Code, and local jurisdiction requirements. LetUsVending can connect you with operators equipped to coordinate the install — request a site survey to start.",
});

console.log("wrote " + "do-vending-machines-require-special-outlets");
