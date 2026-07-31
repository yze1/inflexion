import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";

const pages = ["index.html", "article/index.html", "briefing/index.html", "services/index.html", "team/index.html", "why-now/index.html"];

for (const page of pages) {
  const html = await readFile(page, "utf8");
  for (const partial of ["header", "footer"]) {
    assert.match(html, new RegExp(`data-partial="${partial}"`), `${page} loads ${partial}`);
  }
  assert.match(html, /src="\/js\/partials\.js"/, `${page} loads partials.js`);
}

const briefing = await readFile("briefing/index.html", "utf8");
assert.match(briefing, /action="https:\/\/api\.web3forms\.com\/submit"/);
assert.match(briefing, /name="access_key" value="[0-9a-f-]{36}"/);
assert.doesNotMatch(briefing, /name="ccemail"/);

const articles = await readFile("js/articles-loader.js", "utf8");
const articleHelpers = articles.slice(0, articles.indexOf("async function loadArticleCards"));
const context = {};
vm.runInNewContext(articleHelpers, context);
assert.equal(
  vm.runInNewContext('articleBody("EXCLUSIVE\\nTitle\\n## Quick Summary\\nBody")', context),
  "## Quick Summary\nBody"
);

console.log("Partials, briefing page, and article metadata filtering are wired.");
