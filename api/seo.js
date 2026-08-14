const SUPABASE_URL = "https://cicwbrkoutyannqxguso.supabase.co";
const SUPABASE_KEY = "sb_publishable_LbyLU09q6rcmyIQXh8msqg_zfSuwl6j";
const SITE = "https://www.theinflexion.com";
const IMAGE = `${SITE}/assets/images/WebPreview.png`;

const policyTopics = {
  "federal-policy": ["federal", "congress", "white house", "national policy"],
  "state-policy": ["state policy", "state legislative", "states", "governor"],
  regulation: ["regulation", "regulatory", "compliance"],
  legislation: ["legislation", "legislative", "lawmakers", "bill"],
  "ai-safety": ["ai safety", "security", "cybersecurity", "biosecurity", "risk"],
  international: ["international", "global", "geopolit", "china", "european union", " eu "]
};
const companies = {
  openai: ["openai", "chatgpt"],
  google: ["google", "gemini", "deepmind"],
  anthropic: ["anthropic", "claude"]
};
const knownTags = [
  "Artificial Intelligence", "Organizational Trust", "Workforce Transformation", "Workforce Development",
  "Youth Perception", "National Competitiveness", "Industry Transformation", "Financial Regulation",
  "Public Perception", "Risk Management", "Scientific Discovery", "Enterprise Transformation",
  "Environmental AI", "Financial Services AI", "Enterprise AI", "AI Infrastructure", "AI Architectures",
  "AI Regulation", "AI Governance", "AI Adoption", "AI Deployment", "AI Security", "AI Safety",
  "AI Privacy", "AI Ethics", "AI Policy", "AI Agents", "Agentic AI", "AI Investment", "AI Economics",
  "AI Costs", "AI Market", "AI Models", "AI Misuse", "Economic Impact", "National Security",
  "Workforce", "Cybersecurity", "Infrastructure", "Semiconductors", "Supply Chain", "Labor Market",
  "Geopolitics", "Biosecurity", "Bio-security", "Copyright Law", "Healthcare AI", "Robotics",
  "Management", "Hiring", "LLMs", "OpenAI", "Anthropic", "Google"
];

function escapeHTML(value = "") {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}
function json(value) { return JSON.stringify(value).replaceAll("<", "\\u003c"); }
function date(article) { return article.published_at || article.created_at; }
function displayDate(value) {
  return value ? new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(value)) : "";
}
function tags(article) {
  const raw = (article.tags || []).join(" ");
  const found = knownTags.filter((tag) => raw.toLowerCase().includes(tag.toLowerCase()));
  return [...new Set(found.filter((tag) => !found.some((other) => other !== tag && other.toLowerCase().includes(tag.toLowerCase()))))];
}
function tagSlug(tag) { return tag.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }
function haystack(article) {
  return ` ${article.title} ${article.summary || ""} ${article.body_markdown || ""} ${(article.tags || []).join(" ")} `.toLowerCase();
}
function matches(article, terms) { const text = haystack(article); return terms.some((term) => text.includes(term)); }
function markdown(markdown = "") {
  const start = markdown.search(/^## Quick Summary$/m);
  const lines = (start < 0 ? markdown : markdown.slice(start)).split(/\r?\n/);
  let html = "", list = false;
  const inline = (text) => escapeHTML(text).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  const close = () => { if (list) { html += "</ul>"; list = false; } };
  for (const line of lines) {
    const text = line.trim();
    if (!text) { close(); continue; }
    if (text.startsWith("## ") || text.startsWith("# ")) { close(); html += `<h2>${inline(text.replace(/^##? /, ""))}</h2>`; }
    else if (/^[-*] /.test(text)) { if (!list) { html += "<ul>"; list = true; } html += `<li>${inline(text.slice(2))}</li>`; }
    else { close(); html += `<p>${inline(text)}</p>`; }
  }
  close(); return html;
}
async function articles(columns = "title,slug,summary,body_markdown,status,tags,created_at,updated_at,published_at") {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/articles?select=${columns}&status=eq.published&order=created_at.desc`, {
    headers: { apikey: SUPABASE_KEY }
  });
  if (!response.ok) throw new Error(`Supabase returned ${response.status}`);
  return response.json();
}
function card(article) {
  return `<article class="article-card reveal"><a href="/articles/${escapeHTML(article.slug)}/"><p class="eyebrow">Policy Intelligence</p><h3>${escapeHTML(article.title)}</h3><p>${escapeHTML(article.summary || "")}</p><time datetime="${escapeHTML(date(article) || "")}">${displayDate(date(article))}</time></a></article>`;
}
function page({ title, description, canonical, type = "website", body, schema }) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHTML(title)}</title><meta name="description" content="${escapeHTML(description)}"><link rel="canonical" href="${canonical}">
<meta property="og:type" content="${type}"><meta property="og:site_name" content="Inflexion"><meta property="og:title" content="${escapeHTML(title)}"><meta property="og:description" content="${escapeHTML(description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${IMAGE}"><meta property="og:image:alt" content="Inflexion AI Policy Advisory preview image">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escapeHTML(title)}"><meta name="twitter:description" content="${escapeHTML(description)}"><meta name="twitter:image" content="${IMAGE}">
<script type="application/ld+json">${json(schema)}</script><link rel="icon" href="/assets/icons/LogoFavicon.svg" type="image/svg+xml"><link rel="stylesheet" href="/css/style.css"></head>
<body><div class="noise-layer" aria-hidden="true"></div><div class="page-loader" aria-hidden="true"><img src="/assets/icons/Logo.svg" alt=""></div><div data-partial="header"></div><main>${body}</main><div data-partial="footer"></div><script src="/js/partials.js"></script></body></html>`;
}
function archive(title, description, canonical, list) {
  return page({ title: `${title} | Inflexion`, description, canonical, body: `<section class="section-pad article-page"><div class="section-heading"><p class="eyebrow">Inflexion's Policy Intelligence</p><h1>${escapeHTML(title)}</h1></div><div class="article-grid">${list.map(card).join("") || "<p>No articles found.</p>"}</div></section>`, schema: { "@context": "https://schema.org", "@type": "CollectionPage", name: title, description, url: canonical } });
}
function articlePage(article, all) {
  const canonical = `${SITE}/articles/${article.slug}/`, articleTags = tags(article);
  const related = all.filter((item) => item.slug !== article.slug).map((item) => ({ item, score: tags(item).filter((tag) => articleTags.includes(tag)).length })).sort((a, b) => b.score - a.score).slice(0, 3).map(({ item }) => item);
  const published = date(article), modified = article.updated_at || published;
  const schema = { "@context": "https://schema.org", "@type": "NewsArticle", headline: article.title, description: article.summary, datePublished: published, dateModified: modified, author: { "@type": "Organization", name: "Inflexion", url: SITE }, publisher: { "@type": "Organization", name: "Inflexion", url: SITE, logo: { "@type": "ImageObject", url: `${SITE}/assets/icons/LogoFavicon.png` } }, mainEntityOfPage: canonical, image: IMAGE, keywords: articleTags };
  const tagLinks = articleTags.map((tag) => `<a class="article-tag" href="/articles/tag/${tagSlug(tag)}/">${escapeHTML(tag)}</a>`).join("");
  return page({ title: `${article.title} | Inflexion`, description: article.summary || "Inflexion AI policy intelligence.", canonical, type: "article", schema, body: `<section class="section-pad article-page"><article class="article-detail"><p class="eyebrow">Policy Intelligence</p><h1>${escapeHTML(article.title)}</h1><p class="article-summary">${escapeHTML(article.summary || "")}</p><time datetime="${escapeHTML(published || "")}">${displayDate(published)}</time>${tagLinks ? `<div class="article-tags" aria-label="Article tags">${tagLinks}</div>` : ""}<div class="article-body">${markdown(article.body_markdown)}</div><p class="article-byline">by The Inflexion Staff</p></article>${related.length ? `<aside class="related-articles" aria-labelledby="related-title"><h2 id="related-title">Read next</h2><div class="article-grid">${related.map(card).join("")}</div></aside>` : ""}</section>` });
}
function xml(items) {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items.map(({ url, modified }) => `  <url><loc>${url}</loc>${modified ? `<lastmod>${modified.slice(0, 10)}</lastmod>` : ""}</url>`).join("\n")}\n</urlset>`;
}
module.exports = async (req, res) => {
  try {
    const all = await articles();
    if (req.query.view === "sitemap") {
      const base = ["", "services/", "team/", "why-now/", "briefing/", "articles/", "policy-intelligence/", "companies/"];
      const urls = base.map((path) => ({ url: `${SITE}/${path}` }));
      for (const item of all) urls.push({ url: `${SITE}/articles/${item.slug}/`, modified: item.updated_at || date(item) });
      for (const tag of new Set(all.flatMap(tags))) urls.push({ url: `${SITE}/articles/tag/${tagSlug(tag)}/` });
      for (const slug of Object.keys(policyTopics)) if (all.some((item) => matches(item, policyTopics[slug]))) urls.push({ url: `${SITE}/policy-intelligence/${slug}/` });
      for (const slug of Object.keys(companies)) if (all.some((item) => matches(item, companies[slug]))) urls.push({ url: `${SITE}/companies/${slug}/` });
      res.setHeader("Content-Type", "application/xml; charset=utf-8"); res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate"); return res.status(200).send(xml(urls));
    }
    res.setHeader("Content-Type", "text/html; charset=utf-8"); res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=86400");
    if (req.query.view === "article") {
      const article = all.find((item) => item.slug === req.query.slug);
      if (!article) return res.status(404).send(archive("Article not found", "The requested Inflexion article could not be found.", `${SITE}/articles/`, []));
      return res.status(200).send(articlePage(article, all));
    }
    if (req.query.view === "tag") {
      const tag = knownTags.find((item) => tagSlug(item) === req.query.slug);
      if (!tag) return res.status(404).send(archive("Tag not found", "The requested Inflexion article tag could not be found.", `${SITE}/articles/`, []));
      return res.status(200).send(archive(tag, `Inflexion articles about ${tag} and artificial intelligence policy.`, `${SITE}/articles/tag/${req.query.slug}/`, all.filter((item) => tags(item).includes(tag))));
    }
    if (req.query.view === "policy") {
      const topic = req.query.slug && policyTopics[req.query.slug];
      if (!topic) return res.status(404).send(archive("Policy Intelligence", "Inflexion analysis of AI policy, regulation, legislation, and safety.", `${SITE}/policy-intelligence/`, all));
      const title = req.query.slug.split("-").map((word) => word === "ai" ? "AI" : word[0].toUpperCase() + word.slice(1)).join(" ");
      return res.status(200).send(archive(title, `Inflexion policy intelligence covering ${title.toLowerCase()} and artificial intelligence.`, `${SITE}/policy-intelligence/${req.query.slug}/`, all.filter((item) => matches(item, topic))));
    }
    if (req.query.view === "company") {
      const terms = req.query.slug && companies[req.query.slug];
      if (!terms) return res.status(404).send(archive("Companies", "Inflexion AI policy intelligence by company.", `${SITE}/companies/`, []));
      const title = req.query.slug[0].toUpperCase() + req.query.slug.slice(1);
      return res.status(200).send(archive(`${title} Policy Intelligence`, `Inflexion analysis of AI policy developments involving ${title}.`, `${SITE}/companies/${req.query.slug}/`, all.filter((item) => matches(item, terms))));
    }
    if (req.query.view === "companies") return res.status(200).send(archive("Companies", "Inflexion AI policy intelligence by company.", `${SITE}/companies/`, all.filter((item) => Object.values(companies).some((terms) => matches(item, terms)))));
    if (req.query.view === "policy-index") return res.status(200).send(archive("Policy Intelligence", "Inflexion analysis of AI policy, regulation, legislation, and safety.", `${SITE}/policy-intelligence/`, all));
    return res.status(200).send(archive("Articles", "The latest Inflexion analysis of artificial intelligence policy, regulation, safety, and industry developments.", `${SITE}/articles/`, all));
  } catch (error) {
    console.error(error); return res.status(502).send("Unable to load articles.");
  }
};
