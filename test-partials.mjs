import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const pages = ["index.html", "article/index.html", "services/index.html", "team/index.html", "why-now/index.html"];

for (const page of pages) {
  const html = await readFile(page, "utf8");
  for (const partial of ["header", "footer", "briefing-modal"]) {
    assert.match(html, new RegExp(`data-partial="${partial}"`), `${page} loads ${partial}`);
  }
  assert.match(html, /src="\/js\/partials\.js"/, `${page} loads partials.js`);
}

const modal = await readFile("partials/briefing-modal.html", "utf8");
assert.match(modal, /action="https:\/\/api\.web3forms\.com\/submit"/);
assert.match(modal, /value="YOUR_WEB3FORMS_ACCESS_KEY"/);
assert.match(modal, /name="ccemail" value="mmosholder@theinflexion\.com"/);

console.log("Partials and briefing form are wired on every page.");
