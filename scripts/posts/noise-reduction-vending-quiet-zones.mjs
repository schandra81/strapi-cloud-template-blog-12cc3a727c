import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, dimensionDiagram, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("noise-reduction-vending-quiet-zones", [
  tldr({
    heading: "How noisy is a vending machine, and what does it take to deploy near a quiet zone in a warehouse?",
    paragraph:
      "Vending machines produce noise primarily from three sources: compressor cycling (refrigerated and frozen units), fan operation (continuous interior circulation + condenser fan during compressor cycle), and dispense mechanism (gear motor + product drop). Sound levels at 1 meter typically run 45-55 dBA idle (fan only) and 55-65 dBA during compressor cycle (every 15-45 minutes depending on ambient temperature and door usage). Standard ambient warehouse noise runs 70-85 dBA — so machines are typically inaudible against background. The challenge is quiet zones: warehouse break rooms, on-site clinic / first-aid room, supervisor offices, dispatch / control rooms, and shared adjacencies with offices or training rooms where OSHA-guidance noise targets run 50-65 dBA. Quiet-zone deployments require noise-conscious placement (acoustic separation, machine-back-to-corridor not back-to-quiet-zone), low-noise model selection (ENERGY STAR units typically run 3-5 dBA quieter), and operating-condition tuning (set point optimization, scheduled defrost windows). Sustained noise complaints from quiet zones drive removal requests; warehouses that select noise-conscious deployment retain machines through full contract terms.",
    bullets: [
      { emphasis: "Three noise sources:", text: "Compressor cycling (every 15-45 min), continuous fan operation, dispense mechanism. 45-55 dBA idle, 55-65 dBA during compressor cycle at 1 meter." },
      { emphasis: "Quiet zones drive deployment care:", text: "Warehouse break rooms, clinics, supervisor offices, dispatch, and office adjacencies have OSHA-guidance 50-65 dBA targets. Standard machines exceed this." },
      { emphasis: "Three mitigations:", text: "Noise-conscious placement (acoustic separation), low-noise model selection (ENERGY STAR 3-5 dBA quieter), operating-condition tuning (set points, defrost scheduling)." },
    ],
  }),
  statStrip({
    heading: "Vending noise + warehouse quiet-zone benchmarks",
    stats: [
      { number: "45-55 dBA", label: "idle noise at 1m", sub: "fan only, no compressor", accent: "blue" },
      { number: "55-65 dBA", label: "compressor cycle at 1m", sub: "every 15-45 min typically", accent: "orange" },
      { number: "50-65 dBA", label: "quiet-zone target", sub: "OSHA-guidance for break rooms", accent: "blue" },
      { number: "3-5 dBA", label: "ENERGY STAR noise reduction", sub: "vs standard equivalents", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Warehouse quiet zones and vending noise considerations",
    sub: "Different warehouse zones have different noise targets. Match placement strategy to zone profile.",
    headers: ["Warehouse zone", "Typical ambient", "Noise sensitivity", "Vending placement approach"],
    rows: [
      ["Production floor", "75-90 dBA", "Low — machines inaudible", "Place freely; cellular signal verification primary concern"],
      ["Loading dock area", "70-85 dBA", "Low — machines inaudible", "Place near time clock or break room entry"],
      ["Break room", "55-70 dBA", "Medium — machines audible", "Place against external wall, acoustic separation from seating"],
      ["On-site clinic / first-aid", "45-55 dBA", "High — every dB matters", "Avoid adjacent placement; alternate location"],
      ["Supervisor office adjacency", "50-60 dBA", "High — meetings and calls", "Acoustic barrier, low-noise model, schedule defrost outside business hours"],
      ["Dispatch / control room", "50-65 dBA", "High — communication critical", "Avoid adjacent placement; locate in break room or corridor"],
      ["Training room adjacency", "50-60 dBA", "High during sessions", "Schedule defrost outside training hours; acoustic barrier"],
      ["Locker room / restroom corridor", "55-70 dBA", "Medium", "Standard placement OK; verify cellular signal"],
      ["Outdoor smoking shelter", "60-75 dBA", "Low — outdoor ambient", "Outdoor-rated machine + canopy + secure mounting"],
    ],
  }),
  specList({
    heading: "Vending noise reduction specifications",
    items: [
      { label: "Noise-conscious placement (acoustic separation)", value: "Place machine back-to-corridor or back-to-external-wall, NOT back-to-quiet-zone. Acoustic separation distance: 8-15 feet from sensitive zones. Avoid placement against shared wall with supervisor office, clinic, or dispatch. Verify at install survey." },
      { label: "Low-noise model selection", value: "ENERGY STAR units typically run 3-5 dBA quieter than standard equivalents due to variable-speed compressors + quieter fans + improved insulation. AMS, Vendo, Crane, FastCorp produce low-noise SKUs at small premium. Spec into operator contract for quiet-zone placements." },
      { label: "Variable-speed compressor advantage", value: "Variable-speed compressors run continuously at lower RPM rather than on/off cycling. Net noise lower because no compressor-start transients. ENERGY STAR + variable-speed combination produces quietest operation. Modern fresh / frozen machines increasingly variable-speed standard." },
      { label: "Defrost scheduling", value: "Frozen units defrost on schedule (every 6-24 hours depending on humidity). Defrost cycle produces 60-70 dBA for 15-25 minutes. Schedule defrost outside business hours (overnight, weekend) for adjacent quiet zones. Operator telemetry-driven scheduling." },
      { label: "Set point optimization", value: "Refrigerated set point 38-40°F (vs default 35°F) reduces compressor cycling frequency by 15-25% in conditioned spaces. Frozen set point 0-5°F (vs default -5°F) similar effect. Coordinate with operator; maintain food safety margins." },
      { label: "Acoustic barrier infrastructure", value: "Acoustic panels behind machine (3-6 dBA reduction), gasket seals at door (1-2 dBA reduction), acoustic tile ceiling above placement (2-4 dBA reduction). Total 5-10 dBA reduction available through infrastructure. Cost $400-1,200 per placement." },
      { label: "Operating-condition tuning", value: "Door open frequency drives compressor cycling. High-traffic placements run compressor more. Insulated curtain on cooler doorways (where applicable) reduces door-open thermal load + compressor work + noise. Spec into placement specification." },
      { label: "Dispense mechanism considerations", value: "Snack vending dispense (spiral motor + product drop) produces transient 65-70 dBA for 2-3 seconds. Combo vending (lift mechanism) produces lower transient noise. Refrigerated drink vending similar to snack. AI cooler walls produce minimal dispense noise (door-open + close only)." },
      { label: "Monitoring + complaint workflow", value: "Document noise complaints at install + ongoing. Pattern complaints trigger placement review (relocate, low-noise model swap, acoustic barrier add). Operator + facility coordinate. Without complaint workflow, noise issues drift to removal request." },
    ],
  }),
  dimensionDiagram({
    heading: "Standard combo vending machine — noise-relevant dimensions and clearances",
    sub: "Dimensions and clearance requirements for quiet-zone-conscious placement. Operator survey verifies fit and acoustic separation.",
    machineName: "Standard combo vending machine (snack + drink + cooler)",
    width: "39 inches (991 mm)",
    depth: "33 inches (838 mm)",
    height: "72 inches (1830 mm)",
    footprint: "8.9 sq ft (0.83 sq m)",
    weightEmpty: "640 lbs (290 kg)",
    weightLoaded: "880 lbs (400 kg)",
    doorwayClearance: "36 inches minimum (914 mm); 42 inches recommended (1067 mm)",
    note: "Acoustic separation: place 8-15 ft from sensitive zones (supervisor office, clinic, dispatch, training room). Back-to-corridor or back-to-external-wall preferred over back-to-shared-wall. Rear ventilation requires 3-6 inches clearance from wall; do not box in.",
  }),
  tipCards({
    heading: "Five warehouse vending noise mistakes",
    sub: "All preventable with placement survey + low-noise model selection + acoustic infrastructure.",
    items: [
      { title: "Placing back-to-shared-wall with quiet zone", body: "Machine vibrations transmit through shared wall to adjacent supervisor office, clinic, or dispatch. Standard ambient masks noise; quiet zones don't. Verify at install survey; place back-to-corridor or back-to-external-wall instead." },
      { title: "Default-spec machine in quiet-zone placement", body: "Standard machines run 45-65 dBA; quiet zones target 50-65 dBA. Default-spec exceeds target during compressor cycles. Spec ENERGY STAR + variable-speed compressor; 3-5 dBA quieter at small premium. Worth the spec for quiet-zone placement." },
      { title: "Defrost cycle during business hours", body: "Frozen units defrost every 6-24 hours producing 60-70 dBA for 15-25 minutes. Default schedule overlaps business hours. Schedule defrost overnight or weekend via operator telemetry. Drives perception that machine is loud." },
      { title: "No acoustic barrier infrastructure", body: "Quiet-zone placement without acoustic panels, gasket seals, or ceiling tile loses available 5-10 dBA reduction. Cost $400-1,200 per placement returns months of removal-pressure avoidance. Spec at install for quiet-zone placements." },
      { title: "No complaint workflow", body: "Noise complaints without documented workflow accumulate, drift to removal request. Document at install — facility contact + operator contact + 7-day response standard. Pattern complaints trigger placement review (relocate, low-noise swap, acoustic add).", },
    ],
  }),
  inlineCta({
    text: "Want the warehouse quiet-zone vending playbook (placement + low-noise spec + acoustic infrastructure)?",
    buttonLabel: "Get the quiet-zone playbook",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported warehouse + industrial vending placements across distribution, manufacturing, fulfillment, and processing facilities — including quiet-zone-conscious placement, low-noise model selection, defrost scheduling, and acoustic infrastructure coordination. The benchmarks reflect operator-side placement data and facility-side complaint patterns.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How noisy is a vending machine?", audience: "Facilities", answer: "45-55 dBA idle (fan only) and 55-65 dBA during compressor cycle at 1 meter. Compressor cycles every 15-45 minutes depending on ambient temperature and door usage. Frozen unit defrost produces 60-70 dBA for 15-25 minutes per cycle." },
      { question: "What are quiet zones in a warehouse?", audience: "Facilities", answer: "Warehouse break rooms (target 55-70 dBA), on-site clinic / first-aid rooms (45-55 dBA), supervisor offices, dispatch / control rooms, and training rooms (50-65 dBA). OSHA-guidance noise targets. Standard machines can exceed these during compressor cycles." },
      { question: "How do we reduce vending noise in quiet zones?", audience: "Facilities", answer: "Three mitigations: noise-conscious placement (8-15 ft acoustic separation, back-to-corridor not back-to-quiet-zone), low-noise model selection (ENERGY STAR + variable-speed compressor, 3-5 dBA quieter), operating-condition tuning (set point optimization, defrost scheduling overnight)." },
      { question: "Are ENERGY STAR machines quieter?", audience: "Sustainability Officers", answer: "Typically 3-5 dBA quieter than standard equivalents due to variable-speed compressors + quieter fans + improved insulation. Worth the spec for quiet-zone placements. Modern fresh / frozen machines increasingly variable-speed standard." },
      { question: "Can we schedule defrost outside business hours?", audience: "Facilities", answer: "Yes. Frozen units defrost every 6-24 hours producing 60-70 dBA for 15-25 minutes. Operator telemetry-driven scheduling sets defrost overnight or weekend. Coordinate with operator at install; build into operator contract for quiet-zone placements." },
      { question: "What's acoustic barrier infrastructure?", audience: "Facilities", answer: "Acoustic panels behind machine (3-6 dBA reduction), gasket seals at door (1-2 dBA), acoustic tile ceiling above placement (2-4 dBA). Total 5-10 dBA reduction available through infrastructure. Cost $400-1,200 per placement; worth it for quiet-zone placements." },
      { question: "Can we put a machine near the dispatch / control room?", audience: "Facilities", answer: "Avoid adjacent placement; communication-critical zone. Locate machine in break room or corridor with 15+ ft acoustic separation from dispatch. If unavoidable, spec ENERGY STAR + acoustic barrier + defrost scheduling + complaint workflow." },
      { question: "What if we get noise complaints after install?", audience: "Facilities", answer: "Document via facility + operator complaint workflow. Pattern complaints trigger placement review — relocate to better acoustic separation, swap to low-noise model, add acoustic barrier infrastructure, adjust defrost schedule. Resolution within 30-60 days standard." },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "OSHA — Occupational Noise Exposure (29 CFR 1910.95)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.95", note: "Federal noise exposure standard for workplace environments" },
      { label: "ENERGY STAR — Commercial Refrigerator and Freezer Specification", url: "https://www.energystar.gov/products/commercial_refrigerators_freezers", note: "ENERGY STAR specification underlying low-noise vending and cooler equipment" },
      { label: "ASHRAE — Acoustic and Noise Standards", url: "https://www.ashrae.org/", note: "Industry standards for HVAC and refrigeration noise design" },
      { label: "NAMA — vending placement and noise practice", url: "https://www.namanow.org/", note: "Industry guidance on vending placement including noise-conscious zones" },
      { label: "AIHA — American Industrial Hygiene Association noise standards", url: "https://www.aiha.org/", note: "Industrial hygiene standards for workplace noise exposure assessment" },
    ],
  }),
  relatedGuides({
    heading: "Related warehouse vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Vending energy consumption in warehouses", description: "kWh patterns and ENERGY STAR specification for warehouse placements.", href: "/vending-for-warehouses/vending-energy-consumption-warehouses" },
      { eyebrow: "Operations", title: "Vending machine placement for warehouses", description: "Break room, shift-transition, dispatch, and quiet-zone placement strategy.", href: "/vending-for-warehouses/vending-machine-placement-for-warehouses" },
      { eyebrow: "Hub", title: "All warehouse vending resources", description: "Placement, energy, noise, telemetry, and SLA structure for industrial environments.", href: "/vending-for-warehouses" },
    ],
  }),
]);
process.exit(0);
