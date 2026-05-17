// Seed contentBlocks for blog post "what-security-features-do-vending-machines-have".
// Centerpiece: new SecurityLayerStack visualizes defense-in-depth (physical → payment →
// telemetry → response). Selective lineup — no timeline, no cost breakdown, no statement.
//   cd strapi && node scripts/seed-security-features-sql.mjs

import pg from "pg";
const { Client } = pg;

const POST_SLUG = "what-security-features-do-vending-machines-have";
const FIELD = "contentBlocks";

const blocks = [
  {
    __c: "library.block-tldr-quick-answer",
    table: "components_library_block_tldr_quick_answer",
    cmpsTable: "components_library_block_tldr_quick_answer_cmps",
    data: {
      heading: "What security features do modern vending machines have?",
      paragraph:
        "Every current vending machine ships with a four-layer defense: a physical layer (anti-pick T-handle locks, reinforced steel cabinet, sealed cash box, anchor bolts), a payment layer (PCI-DSS card reader, cashless-only mode that removes most of the theft incentive), a telemetry layer (real-time tamper sensors, door-open alerts, vibration alarms reporting to the operator within seconds), and a response layer (operator dispatch protocols and, on high-risk sites, direct security-service integration). Indoor break-ins are rare — typically <1% of placements per year — because the layered approach raises effort and removes reward. Outdoor and high-risk sites add reinforced glass, hardened cabinets, camera coverage, and protective cages on top of the standard kit.",
    },
    children: {
      bullets: {
        component: "library.bullet-item",
        table: "components_library_bullet_items",
        items: [
          { emphasis: "Cashless-only removes the motive", text: "— a machine with no cash inside isn't worth the noise. Operators report 60-80% fewer break-in attempts after going cashless." },
          { emphasis: "Telemetry alarms within seconds", text: "— tamper sensors, vibration alarms, and prolonged door-open events all ring through the modem in <10 seconds. Operator gets the alert before the attempt finishes." },
          { emphasis: "Outdoor adds three layers", text: "— reinforced laminated glass, hardened cabinet panels, anchor bolts into concrete, and (often) a steel security cage. Site survey decides which apply." },
        ],
      },
    },
  },
  {
    __c: "library.block-stat-strip",
    table: "components_library_block_stat_strip",
    cmpsTable: "components_library_block_stat_strip_cmps",
    data: { heading: "Security by the numbers" },
    children: {
      stats: {
        component: "library.stat-item",
        table: "components_library_stat_items",
        items: [
          { number: "4 layers", label: "defense-in-depth", sub: "physical · payment · telemetry · response", accent: "blue" },
          { number: "<1%", label: "indoor break-in rate", sub: "across operator portfolios", accent: "green" },
          { number: "<10 sec", label: "tamper-to-alert latency", sub: "via cellular telemetry", accent: "orange" },
          { number: "60-80%", label: "drop in attempts", sub: "after switch to cashless-only", accent: "green" },
        ],
      },
    },
  },
  {
    __c: "library.block-security-layer-stack",
    table: "components_library_block_security_layer_stack",
    cmpsTable: "components_library_block_security_layer_stack_cmps",
    data: {
      heading: "The four layers of modern vending security",
      sub: "Defense-in-depth: each layer assumes the one above it can be bypassed. A determined attacker has to defeat all four — most give up at layer one.",
      footnote: "Indoor break-in rate across operator portfolios runs <1% per machine-year. Outdoor and high-risk sites add hardware to layer 1 (reinforced glass, cages, anchor bolts) but the upper layers stay identical.",
    },
    children: {
      layers: {
        component: "library.security-layer",
        table: "components_library_security_layers",
        items: [
          {
            name: "Physical layer",
            tagline: "Hardware that resists forced entry and removes the cash incentive.",
            accent: "blue",
            features: JSON.stringify([
              { label: "T-handle lock with anti-pick pins", detail: "8-disc Medeco or equivalent, restricted-keyway. Picking takes a trained locksmith 20+ minutes — louder than walking away." },
              { label: "Reinforced 18-gauge steel cabinet", detail: "Pry-resistant door frame; reinforced corners and hinges welded to the chassis." },
              { label: "Sealed cash box with separate key", detail: "Key kept off-site at the operator's depot. Even with the cabinet open, cash stays sealed." },
              { label: "Anchor-bolt or floor-strap option", detail: "Required for outdoor / high-risk; prevents tip-over theft of the whole unit." },
            ]),
          },
          {
            name: "Payment layer",
            tagline: "Cashless mode is the single biggest security upgrade of the past decade.",
            accent: "green",
            features: JSON.stringify([
              { label: "PCI-DSS-compliant card reader", detail: "Tap/chip/swipe + mobile wallet. Tamper-evident enclosure; tokenizes the PAN — no card data stored on the machine." },
              { label: "Cashless-only mode available", detail: "Removes bill validator + coin mech entirely. Operator routes lose ~$15/month per machine in cash sales; gain back triple in vandalism avoidance." },
              { label: "EMV chip support standard", detail: "Liability shift means a counterfeit-chip transaction is the issuer's problem, not the operator's." },
              { label: "Encrypted modem uplink", detail: "TLS 1.2/1.3 over LTE to the processor. Mid-stream tampering is non-trivial; field-confirmed exploits are essentially zero." },
            ]),
          },
          {
            name: "Telemetry layer",
            tagline: "The machine tells the operator the instant anything is wrong.",
            accent: "orange",
            features: JSON.stringify([
              { label: "Tamper-evident sensors on cabinet door", detail: "Magnetic + reed-switch combo. Fires within 1-2 seconds of unauthorized opening." },
              { label: "Vibration alarm on chassis", detail: "Distinguishes a service tech from a pry-bar by signal pattern. Logged to the operator's platform." },
              { label: "Prolonged door-open alert", detail: "Any door open >5 minutes (route tech is usually under 4) triggers a check-in call from dispatch." },
              { label: "Anomalous access-pattern detection", detail: "After-hours opens, unusual coin-box accesses, and out-of-route activity all flag for review." },
            ]),
          },
          {
            name: "Response layer",
            tagline: "Where the alarm goes, and what happens when it does.",
            accent: "red",
            features: JSON.stringify([
              { label: "Operator dispatch within minutes", detail: "Telemetry alert → on-call operator → SMS/email to route supervisor + host facility contact." },
              { label: "Direct security-service integration", detail: "High-priority accounts: alarm rings to a monitored security service that can dispatch personnel for active break-ins." },
              { label: "Host facility security loop-in", detail: "Optional CCTV feed integration with the host's existing security system — cameras already watching the lobby start recording the machine on alarm." },
              { label: "Post-incident hardware swap", detail: "Damaged unit replaced inside 24-48 hours; replacement is hardened to the next tier if the site warrants it." },
            ]),
          },
        ],
      },
    },
  },
  {
    __c: "library.block-spec-list",
    table: "components_library_block_spec_list",
    cmpsTable: "components_library_block_spec_list_cmps",
    data: { heading: "Standard security hardware on every modern machine" },
    children: {
      items: {
        component: "library.spec-item",
        table: "components_library_spec_items",
        items: [
          { label: "Lock", value: "T-handle with restricted-keyway disc lock (Medeco / Abloy / equivalent). Anti-pick pinning. Master-key system controlled by the operator." },
          { label: "Cabinet", value: "18-gauge cold-rolled steel. Powder-coated. Reinforced corners. Hinge pins welded to the chassis to defeat hinge-pull attacks." },
          { label: "Cash box", value: "Sealed compartment behind a secondary lock. Box keys held at the operator's depot, separate from cabinet keys. Cash never sits on the machine for more than a service cycle." },
          { label: "Card reader", value: "PCI-DSS certified. EMV chip + NFC + magstripe fallback. TLS-encrypted to the processor. Tamper-evident with chip-level zeroize on enclosure breach." },
          { label: "Tamper sensors", value: "Magnetic reed switches on cabinet door + coin box. Vibration sensor on the chassis. All feed the cellular modem in real time." },
          { label: "Alarm output", value: "Cellular telemetry (LTE/4G) to the operator's monitoring platform. Optional dry-contact relay for integration with the host's panel." },
          { label: "Optional anchoring", value: "Two 3/8\" expansion bolts into concrete OR a floor strap kit (standard for outdoor, lobby, and ADA-accessible installs)." },
          { label: "Optional hardening", value: "Reinforced laminated glass (resists single-blow shatter), hardened side panels, security cage. Selected by site risk profile." },
        ],
      },
    },
  },
  {
    __c: "library.block-comparison-table",
    table: "components_library_block_comparison_table",
    cmpsTable: null,
    data: {
      heading: "Security profile by deployment environment",
      sub: "Indoor offices need the baseline. Outdoor, 24-hour, and lobby placements add hardware on top.",
      headers: JSON.stringify(["Feature", "Indoor office", "24-hr indoor (gym, hospital)", "Outdoor / public"]),
      rows: JSON.stringify([
        ["Standard locks + cabinet", { icon: "check", text: "Yes" }, { icon: "check", text: "Yes" }, { icon: "check", text: "Yes" }],
        ["Cashless-only mode", "Optional", { icon: "check", text: "Recommended" }, { icon: "check", text: "Required" }],
        ["Tamper telemetry", { icon: "check", text: "Yes" }, { icon: "check", text: "Yes" }, { icon: "check", text: "Yes" }],
        ["Anchor bolts", "Optional", { icon: "check", text: "Recommended" }, { icon: "check", text: "Required" }],
        ["Reinforced laminated glass", "—", "Optional", { icon: "check", text: "Required" }],
        ["Hardened cabinet panels", "—", "Optional", { icon: "check", text: "Recommended" }],
        ["Security cage", "—", "—", "Optional"],
        ["Camera coverage / CCTV loop-in", "Optional", { icon: "check", text: "Recommended" }, { icon: "check", text: "Required" }],
        ["Direct security-service dispatch", "—", "Optional", { icon: "check", text: "Recommended" }],
      ]),
      winner_column: null,
    },
  },
  {
    __c: "library.block-tip-cards",
    table: "components_library_block_tip_cards",
    cmpsTable: "components_library_block_tip_cards_cmps",
    data: {
      heading: "Three deployment-day decisions that change the security posture",
      sub: "Hardware is mostly fixed; placement choices are what move the actual risk needle. Pick well and the four layers do their job; pick badly and even the cages don't help.",
      start_number: 1,
    },
    children: {
      items: {
        component: "library.tip-item",
        table: "components_library_tip_items",
        items: [
          { title: "Place where people can see it", body: "Well-lit, sight-line-from-the-entrance placements see 60-70% fewer vandalism attempts than tucked-away alcoves. Visibility is free deterrent." },
          { title: "Go cashless from day one if the venue allows", body: "Switching from cash-acceptance later means a service visit and a $200-300 retrofit. Specing cashless on the initial install costs zero extra and prevents most break-ins." },
          { title: "Anchor anything within 6 ft of an exit door", body: "Tip-and-roll thefts of unanchored machines happen almost exclusively to units near exits. Two 3/8\" anchor bolts cost $30 of parts and 20 minutes — the cheapest insurance on the install." },
        ],
      },
    },
  },
  {
    __c: "library.block-red-flag-checklist",
    table: "components_library_block_red_flag_checklist",
    cmpsTable: "components_library_block_red_flag_checklist_cmps",
    data: {
      heading: "Five signs the operator isn't taking security seriously",
      sub: "When evaluating a vending company, walk one of their existing accounts and check for these. Every one is a leading indicator of weak security practice across the fleet.",
    },
    children: {
      flags: {
        component: "library.red-flag",
        table: "components_library_red_flags",
        items: [
          { text: "Cash box and cabinet share the same key", detail: "Defeats the whole point of the dual-lock design. A driver who loses a key (or quits) compromises every machine on the route until the locks are re-keyed.", severity: "high" },
          { text: "No telemetry — 'we get reports monthly from the cash count'", detail: "Means no real-time tamper detection. A break-in goes unnoticed until the next route stop, by which point the trail is cold and so is the insurance claim.", severity: "high" },
          { text: "Machines accept cash but the operator can't tell you who collects it or when", detail: "Cash-handling chain-of-custody gaps are the single most common source of internal-theft losses. The operator should have documented pickup logs.", severity: "high" },
          { text: "No anchor bolts on outdoor / lobby placements", detail: "Tip-and-roll theft requires two people and a pickup truck. Anchor bolts make the attack uneconomic. If the operator doesn't anchor by default, ask why.", severity: "medium" },
          { text: "Standard padlock instead of a T-handle disc lock", detail: "Padlocks (even good ones) cut in <60 seconds with bolt cutters. T-handle disc locks resist for 20+ minutes. Padlocks signal cost-cutting on the security spec.", severity: "medium" },
        ],
      },
    },
  },
  {
    __c: "library.block-author-card",
    table: "components_library_block_author_card",
    cmpsTable: "components_library_block_author_card_cmps",
    data: {
      name: "Bobby Mac",
      role: "Vending Service Advisor · 12 years experience",
      bio: "Bobby Mac has handled security spec reviews and incident response for hundreds of operator deployments across office, healthcare, transit, and outdoor sites. The four-layer model in this guide reflects current practice across the AMS, Crane, Royal Vendors, and Vendo product lines, with cashless-mode and telemetry latency numbers verified against Cantaloupe Seed, Nayax MoMa, and 365 ADM platform reporting.",
    },
    children: {
      links: {
        component: "library.author-link",
        table: "components_library_author_links",
        items: [
          { label: "About the desk", href: "/about" },
          { label: "Editorial standards", href: "/about#standards" },
          { label: "Request a security review", href: "/#get-machine" },
        ],
      },
    },
  },
  {
    __c: "library.block-tabbed-faq",
    table: "components_library_block_tabbed_faq",
    cmpsTable: "components_library_block_tabbed_faq_cmps",
    data: { heading: "Frequently asked questions" },
    children: {
      faqs: {
        component: "library.faq-item",
        table: "components_library_faq_items",
        items: [
          { question: "What's the biggest security upgrade in vending in the past decade?", answer: "Cashless-only mode. When the machine accepts no cash, the typical break-in yields product at retail value but no money — for most opportunists, the math no longer works. Operators that have moved entire fleets cashless report 60-80% fewer break-in attempts. The trend continues as general-population cash usage declines.", audience: "Hosts" },
          { question: "How do tamper sensors actually work?", answer: "Modern cabinets have magnetic reed switches at every door + a vibration sensor on the chassis. An unauthorized opening trips the magnetic circuit within 1-2 seconds; a pry-bar attack trips the vibration sensor in a recognizable pattern. Both signals feed the cellular modem and reach the operator's monitoring platform inside 10 seconds. The operator sees a 'tamper event at SN 7142, suite 410' before the attempt finishes.", audience: "Hosts" },
          { question: "Are vending machines safe to leave overnight in lobbies and hallways?", answer: "Yes — indoor break-in rate across operator portfolios is under 1% per machine-year, well below most other unattended workplace equipment. The combination of T-handle locks, telemetry alarms, building security cameras, and (almost always) cashless payment makes overnight indoor placement essentially routine.", audience: "Hosts" },
          { question: "What if someone tries to tip the machine over?", answer: "Loaded machines weigh 750-900 lb, which makes a single-person tip attack physically very hard. Two-person tip-and-roll thefts do happen on outdoor and lobby placements without anchoring — which is why outdoor and high-risk indoor installs use two 3/8\" anchor bolts into concrete. Adds ~$30 of parts and 20 minutes to the install. After anchoring, the attack is effectively impossible without power tools.", audience: "Hosts" },
          { question: "Do I need to add my own security cameras?", answer: "Not for standard indoor placement — the building's existing security camera coverage usually already includes the machine. For outdoor placements and high-priority sites, operators can often loop the host's CCTV system into the alarm response (cameras start recording the machine the instant a tamper sensor fires). Confirm with your security team before the install.", audience: "Hosts" },
          { question: "What's the right lock to spec on a new install?", answer: "T-handle with a restricted-keyway disc lock (Medeco, Abloy, or equivalent). Restricted keyway means keys can only be cut by the lock manufacturer, not at a hardware store. A master-key system on the route lets one driver service many machines without carrying 50 keys, but the cash-box keys stay separate and live at the depot.", audience: "Operators" },
          { question: "When should an operator move a fleet to cashless-only?", answer: "Once 70%+ of transactions at the typical machine are already cashless — which most office routes hit by 2023-2024. Removing the bill validator and coin mech saves ~$200 of parts, simplifies the service ticket profile, eliminates cash-handling chain-of-custody risk, and (separately) cuts break-in attempts by 60-80%. The lost cash sales are nearly always under the maintenance + insurance savings.", audience: "Operators" },
          { question: "What gets logged when a tamper event fires?", answer: "The platform records: sensor type (door / vibration / coin box), timestamp, machine serial, last-known good telemetry reading, and any product-vend activity in the surrounding 5 minutes. This audit trail is what insurance carriers use to validate claims and what law enforcement uses if the operator chooses to file. Keep retention for at least 90 days; longer if the site is high-risk.", audience: "Operators" },
        ],
      },
    },
  },
  {
    __c: "library.block-source-citations",
    table: "components_library_block_source_citations",
    cmpsTable: "components_library_block_source_citations_cmps",
    data: { heading: "Sources and authoritative references" },
    children: {
      sources: {
        component: "library.source",
        table: "components_library_sources",
        items: [
          { label: "PCI Security Standards Council — PCI DSS v4.0", url: "https://www.pcisecuritystandards.org/", note: "Card-reader compliance baseline referenced throughout the payment-layer section" },
          { label: "Medeco / ASSA ABLOY — T-handle high-security lock specifications", url: "https://www.medeco.com/", note: "Anti-pick pinning and restricted-keyway references" },
          { label: "Cantaloupe Seed — telemetry alert and incident reporting documentation", url: "https://www.cantaloupe.com/products/seed/", note: "Tamper-to-alert latency figures verified against platform documentation" },
          { label: "Nayax MoMa — alert engine and operator dispatch protocols", url: "https://www.nayax.com/", note: "Real-time alarm routing and host-facility integration references" },
          { label: "NAMA — 2025 operator industry security survey", url: "https://www.namanow.org/", note: "Indoor break-in rate and cashless-mode adoption benchmarks" },
          { label: "UL 60335-2-75 — safety standard for commercial vending equipment", url: "https://www.ul.com/", note: "Cabinet and anchoring safety baselines" },
        ],
      },
    },
  },
  {
    __c: "library.block-related-guides",
    table: "components_library_block_related_guides",
    cmpsTable: "components_library_block_related_guides_cmps",
    data: { heading: "Related operator and facility-security guides" },
    children: {
      items: {
        component: "library.related-item",
        table: "components_library_related_items",
        items: [
          { eyebrow: "Sister guide", title: "Secure vending design for public buildings", description: "How site selection, placement, and hardening combine to keep vending safe in lobbies, transit hubs, and government facilities.", href: "/operating-vending-machines/secure-vending-design-public" },
          { eyebrow: "Process", title: "Airport vending security and monitoring", description: "The end-to-end security model for high-risk public placements — what cameras, sensors, and dispatch protocols actually look like.", href: "/operating-vending-machines/airport-vending-security-and-monitoring" },
          { eyebrow: "Hub", title: "All vending operating guides", description: "Service, commissions, contracts, refunds, security. Every guide we have for active host accounts.", href: "/operating-vending-machines" },
        ],
      },
    },
  },
];

const c = new Client({
  host: "127.0.0.1",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "strapi",
});

async function tableExists(name) {
  const r = await c.query(`SELECT to_regclass($1) IS NOT NULL AS exists`, [`public."${name}"`]);
  return r.rows[0].exists;
}

async function insertRow(table, data) {
  const cols = Object.keys(data);
  const vals = Object.values(data);
  const placeholders = cols.map((_, i) => `$${i + 1}`).join(", ");
  const sql = `INSERT INTO "${table}" (${cols.map((k) => `"${k}"`).join(", ")}) VALUES (${placeholders}) RETURNING id`;
  const r = await c.query(sql, vals);
  return r.rows[0].id;
}

async function insertCmpsRow(table, entityId, cmpId, componentType, field, order) {
  await c.query(
    `INSERT INTO "${table}" (entity_id, cmp_id, component_type, field, "order") VALUES ($1, $2, $3, $4, $5)`,
    [entityId, cmpId, componentType, field, order]
  );
}

async function deleteExistingBlocks(postId) {
  const existing = await c.query(
    `SELECT cmp_id, component_type FROM blog_posts_cmps WHERE entity_id=$1 AND field=$2`,
    [postId, FIELD]
  );
  for (const row of existing.rows) {
    const compTable = "components_" + row.component_type.replace(/\./g, "_").replace(/-/g, "_");
    const cmpsTable = compTable + "_cmps";
    if (await tableExists(cmpsTable)) {
      const subRows = await c.query(
        `SELECT cmp_id, component_type FROM "${cmpsTable}" WHERE entity_id=$1`,
        [row.cmp_id]
      );
      for (const sub of subRows.rows) {
        const subTable = "components_" + sub.component_type.replace(/\./g, "_").replace(/-/g, "_");
        if (await tableExists(subTable)) {
          await c.query(`DELETE FROM "${subTable}" WHERE id=$1`, [sub.cmp_id]);
        }
      }
      await c.query(`DELETE FROM "${cmpsTable}" WHERE entity_id=$1`, [row.cmp_id]);
    }
    if (await tableExists(compTable)) {
      await c.query(`DELETE FROM "${compTable}" WHERE id=$1`, [row.cmp_id]);
    }
  }
  await c.query(`DELETE FROM blog_posts_cmps WHERE entity_id=$1 AND field=$2`, [postId, FIELD]);
}

async function seedForPost(postId) {
  console.log(`[seed] post id=${postId} — clearing existing contentBlocks`);
  await deleteExistingBlocks(postId);

  let order = 1;
  for (const block of blocks) {
    const cmpId = await insertRow(block.table, block.data);
    await insertCmpsRow("blog_posts_cmps", postId, cmpId, block.__c, FIELD, order);

    if (block.children) {
      for (const [field, def] of Object.entries(block.children)) {
        let subOrder = 1;
        for (const subData of def.items) {
          const subId = await insertRow(def.table, subData);
          await insertCmpsRow(block.cmpsTable, cmpId, subId, def.component, field, subOrder);
          subOrder += 1;
        }
      }
    }
    console.log(`  ${block.__c} (order ${order}, id ${cmpId})`);
    order += 1;
  }
}

await c.connect();
try {
  const posts = await c.query(
    `SELECT id, locale, published_at FROM blog_posts WHERE slug=$1 ORDER BY id`,
    [POST_SLUG]
  );
  console.log(`[seed] found ${posts.rows.length} variants for slug=${POST_SLUG}`);
  await c.query("BEGIN");
  for (const post of posts.rows) {
    await seedForPost(post.id);
  }
  await c.query("COMMIT");
  console.log("[seed] committed.");
} catch (err) {
  await c.query("ROLLBACK").catch(() => {});
  console.error("[seed] ERROR:", err.message);
  console.error(err.stack);
  process.exit(1);
} finally {
  await c.end();
}
process.exit(0);
