// Grant public role permission to call:
//   POST /api/lead-captures/get-resource
//   GET  /api/lead-captures/resource-info/:slug
// Strapi 5 stores permissions in up_permissions joined to up_roles via up_permissions_role_lnk.
import pg from "pg";
const { Client } = pg;

const ACTIONS = [
  "api::lead-capture.lead-capture.getResource",
  "api::lead-capture.lead-capture.resourceInfo",
];

const c = new Client({ host: "127.0.0.1", port: 5432, user: "postgres", password: "postgres", database: "strapi" });
await c.connect();
try {
  const pub = await c.query("SELECT id FROM up_roles WHERE type='public'");
  if (!pub.rows[0]) throw new Error("Public role not found");
  const publicRoleId = pub.rows[0].id;

  for (const action of ACTIONS) {
    const existing = await c.query(
      `SELECT p.id FROM up_permissions p
       JOIN up_permissions_role_lnk pr ON pr.permission_id = p.id
       WHERE p.action = $1 AND pr.role_id = $2`,
      [action, publicRoleId]
    );
    if (existing.rows.length) {
      console.log(`already granted: ${action}`);
      continue;
    }

    const ins = await c.query(
      `INSERT INTO up_permissions (action, document_id, created_at, updated_at, published_at)
       VALUES ($1, gen_random_uuid()::text, NOW(), NOW(), NOW())
       RETURNING id`,
      [action]
    );
    const permId = ins.rows[0].id;
    await c.query(
      `INSERT INTO up_permissions_role_lnk (permission_id, role_id) VALUES ($1, $2)`,
      [permId, publicRoleId]
    );
    console.log(`granted: ${action}`);
  }
} finally {
  await c.end();
}
