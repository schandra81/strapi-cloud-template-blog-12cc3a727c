import pg from "pg";
const c = new pg.Client({host:'127.0.0.1',port:5432,user:'postgres',password:'postgres',database:'strapi'});
await c.connect();
const slug = process.argv[2];
const r = await c.query("SELECT id,document_id,title,excerpt,blog_heading,body,published_at FROM blog_posts WHERE slug=$1 ORDER BY id",[slug]);
for (const row of r.rows) {
  console.log("---");
  console.log("id:",row.id,"docId:",row.document_id,"published:",!!row.published_at);
  console.log("title:",row.title);
  console.log("excerpt:",row.excerpt);
  console.log("blog_heading:",row.blog_heading);
  console.log("body:\n",row.body);
}
await c.end();
