import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "can-vending-machines-sell-fresh-food",
  assetType: "pack",
  title: "Fresh-Food Vending Evaluation Pack",
  subtitle: "Site qualification, operator rubric, supply-chain interview script",
  intro:
    "Fresh-food vending (TCS/PHF — Time/Temperature Control for Safety / Potentially Hazardous Food) is regulated under FDA Food Code Chapter 3 and state retail food code. This pack qualifies sites and evaluates operators against the supply-chain and HACCP capabilities required.",
  sections: [
    {
      heading: "1. What 'fresh food' means in vending",
      paragraph:
        "Fresh-food vending covers TCS items — refrigerated salads, sandwiches, fruit cups, parfaits, hot entrees (in heated micro-markets), sushi, and dairy. Hold temperatures are 41°F or below (cold) per FDA Food Code 3-501.16, or 135°F or above (hot).",
      items: [
        { label: "Cold fresh", value: "Salads, wraps, sandwiches, sushi, yogurt, fresh fruit cups, hummus packs — hold 35-41°F." },
        { label: "Hot fresh", value: "Heated micro-market entrees, paninis — hold ≥ 135°F or via fast-reheat tech with consumer microwave." },
        { label: "Out of scope", value: "Shelf-stable snacks, packaged baked goods, candy — not regulated as TCS." },
      ],
    },
    {
      heading: "2. Site qualification checklist",
      items: [
        { check: "Daily foot-traffic ≥ 100 unique visitors for break-even on fresh program." },
        { check: "Dedicated 208V/20A or 115V/15A circuit for refrigerated cabinet; surge protection." },
        { check: "Ambient temperature controlled (no outdoor / non-conditioned placement)." },
        { check: "Floor load > 800 lb concentrated; service clearance 36 in front, 6 in sides + rear." },
        { check: "Cellular signal > -95 dBm or guest Wi-Fi for telemetry + temperature monitoring." },
        { check: "Trash + recycling within 25 ft for packaging disposal." },
        { check: "Site permit allowance — confirm with facility for TCS food sales (state retail food permit + sales tax registration)." },
      ],
    },
    {
      heading: "3. Operator evaluation rubric",
      paragraph:
        "Score each criterion 0-3 (0 = does not meet, 3 = exceeds with evidence). Minimum qualifying score: 22 of 30.",
      headers: ["Criterion", "Evidence required", "Max score"],
      rows: [
        ["State retail food permit", "Current permit + inspection score", "3"],
        ["HACCP plan", "Written plan, last update date", "3"],
        ["Commissary or co-pack agreement", "Commissary license + supply contract", "3"],
        ["Refrigerated transport", "Refer truck cert + temp-log capability", "3"],
        ["Telemetry on cold cabinets", "Vendor + alert SLA", "3"],
        ["Pull-and-rotate cadence", "Daily or 2x daily evidence", "3"],
        ["Recall procedure", "Written 4-hour recall SOP", "3"],
        ["Allergen labeling", "FALCPA-compliant labels per SKU", "3"],
        ["Date-marking SOP", "Per FDA 3-501.17 evidence", "3"],
        ["Insurance + liability", "$2M GL + product-liability cert", "3"],
      ],
    },
    {
      heading: "4. Equipment platforms commonly used",
      items: [
        { label: "AVI / Coca-Cola Freestyle Fresh", value: "Refrigerated grab-and-go with RFID checkout; 25-45 SKU capacity; common in healthcare + corporate." },
        { label: "365 Retail Markets PicoCooler / SmartCooler", value: "Self-checkout cooler, app or kiosk pay, badge-integrated for closed-loop." },
        { label: "AWM Smart Shelf", value: "AI-vision cooler — open door, take items, auto-charge. 40-60 SKU capacity." },
        { label: "Avanti Markets MicroMarket", value: "Open-shelf micro-market with self-checkout kiosk; fresh + frozen + ambient combined." },
        { label: "Refrigerated spiral vendor", value: "Crane Merchant 6 / Fastcorp 632 retrofit for refrigerated SKUs; lower capacity but lower capex." },
      ],
    },
    {
      heading: "5. Supply-chain interview script",
      paragraph:
        "Use this script during operator selection. Each question should yield a documentable answer.",
      items: [
        { number: 1, title: "Commissary", description: "Where is the commissary? Who owns it? When was the last health-department inspection and what was the score?" },
        { number: 2, title: "Co-pack relationships", description: "Which co-packers supply prepped salads / wraps / sandwiches? Are co-packers FSMA-PCQI certified?" },
        { number: 3, title: "Transport", description: "Refrigerated transport — own fleet or 3PL? Average dock-to-machine time? Temperature data logger on every trip?" },
        { number: 4, title: "Restock cadence", description: "Daily or 2x daily for high-turn sites? Pull-and-rotate schedule documented?" },
        { number: 5, title: "Date marking", description: "How is the consume-by date determined? Is it per FDA 3-501.17 (≤ 7 days at 41°F)? Operator-side discard SOP at expiry?" },
        { number: 6, title: "Recall capability", description: "If a supplier issues a recall, how fast can the operator pull SKUs from every machine in the portfolio? Documented < 4 hours?" },
        { number: 7, title: "Waste metric", description: "What is the current waste % on fresh? Industry baseline 8-12%; capable operators run 4-6%." },
        { number: 8, title: "Cold-chain audit rights", description: "Can host pull cold-chain logs and audit randomly?" },
      ],
    },
    {
      heading: "6. Cold-chain SLA template",
      items: [
        { label: "Monitoring", value: "Cellular telemetry probe, 5-minute sampling, dashboard visible to operator + host." },
        { label: "Tier 1 alert", value: "Internal temp > 41°F for ≥ 30 min → immediate operator dispatch, 4-hour on-site SLA, SKU pull + full credit." },
        { label: "Tier 2 alert", value: "Compressor short-cycle, door ajar > 5 min → 24-hour response." },
        { label: "Door-open audit", value: "Every dispense event timestamped; sustained door-open beyond authorized restock flagged." },
        { label: "Product loss", value: "Operator-borne discard at excursion or expiry; never passed to host or sold post-excursion." },
      ],
    },
    {
      heading: "7. Reporting + governance",
      items: [
        { check: "Monthly cold-chain log export." },
        { check: "Per-SKU waste % and discard log." },
        { check: "Pull-and-rotate event log." },
        { check: "Recall drill record (annual)." },
        { check: "Quarterly business review with planogram refresh." },
        { check: "Annual operator audit (random — host or third party)." },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "We are equipped to match qualifying hosts with operators that hold state retail food permits, run HACCP plans, and operate refrigerated transport. We do not represent that any specific operator currently has capacity in your service area — that is confirmed at intake.",
    },
  ],
  footer:
    "This pack is informational. Confirm food-code requirements with the state or local health authority of jurisdiction.",
});

console.log("wrote " + "can-vending-machines-sell-fresh-food");
