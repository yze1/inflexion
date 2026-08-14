import { createRequire } from "node:module";
import assert from "node:assert/strict";

const handler = createRequire(import.meta.url)("./api/seo.js");

function request(query) {
  return new Promise((resolve, reject) => {
    const response = {
      headers: {},
      setHeader(name, value) { this.headers[name] = value; },
      status(code) { this.statusCode = code; return this; },
      send(body) { this.body = body; resolve(this); }
    };
    handler({ query }, response).catch(reject);
  });
}

const article = await request({
  view: "article",
  slug: "ai-market-faces-bubble-warning-governance-security-incidents-mount"
});
assert.equal(article.statusCode, 200);
assert.match(article.body, /rel="canonical" href="https:\/\/www\.theinflexion\.com\/articles\//);
assert.match(article.body, /"@type":"NewsArticle"/);
assert.match(article.body, /\/articles\/tag\//);
assert.match(article.body, /Read next/);

const sitemap = await request({ view: "sitemap" });
assert.equal(sitemap.statusCode, 200);
assert.match(sitemap.body, /\/policy-intelligence\/ai-safety\//);
assert.match(sitemap.body, /\/companies\/openai\//);

const missing = await request({ view: "article", slug: "missing" });
assert.equal(missing.statusCode, 404);

console.log("Dynamic SEO pages and sitemap verified against Supabase.");
