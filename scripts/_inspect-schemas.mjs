import pg from "pg";
const c = new pg.Client({ host: "127.0.0.1", port: 5432, user: "postgres", password: "postgres", database: "strapi" });
await c.connect();
const tables = ["components_library_timeline_steps", "components_library_cost_lines", "components_library_case_results"];
for (const t of tables) {
  const r = await c.query(
    `SELECT column_name, data_type FROM information_schema.columns WHERE table_name = $1 ORDER BY ordinal_position`,
    [t]
  );
  console.log(`\n== ${t} ==`);
  for (const row of r.rows) console.log(`  ${row.column_name} (${row.data_type})`);
}
await c.end();
