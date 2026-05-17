import pg from "pg";
const c = new pg.Client({host:'127.0.0.1',port:5432,user:'postgres',password:'postgres',database:'strapi'});
await c.connect();
for (const t of [
  "components_library_block_security_layer_stack",
  "components_library_block_security_layer_stack_cmps",
  "components_library_security_layers",
  "components_library_block_red_flag_checklist",
  "components_library_block_red_flag_checklist_cmps",
  "components_library_red_flags",
]) {
  const r = await c.query(`SELECT column_name FROM information_schema.columns WHERE table_name=$1 ORDER BY ordinal_position`,[t]);
  if (r.rows.length === 0) console.log(t,": MISSING");
  else console.log(t,":",r.rows.map(x=>x.column_name).join(", "));
}
await c.end();
