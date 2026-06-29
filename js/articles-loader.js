const SUPABASE_URL = "https://cicwbrkoutyannqxguso.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpY3dicmtvdXR5YW5ucXhndXNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5MDgwMTMsImV4cCI6MjA5NjQ4NDAxM30.UVa58rx4W5s5x9-PfAoc6ZE3IWOjP8YJUGvkGCdwvus";

function escapeHTML(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function articleDate(article) {
  const date = article.published_at || article.created_at;
  if (!date) return "";

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(date));
}

async function fetchArticles(params) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/articles?${params}`, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`
    }
  });

  if (!response.ok) throw new Error("Unable to load articles");
  return response.json();
}

function markdownToHTML(markdown = "") {
  const lines = String(markdown).split(/\r?\n/);
  let inList = false;
  let html = "";

  function closeList() {
    if (!inList) return;
    html += "</ul>";
    inList = false;
  }

  function inline(text) {
    return escapeHTML(text)
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\*([^*]+)\*/g, "<em>$1</em>")
      .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  }

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      closeList();
      continue;
    }

    if (trimmed.startsWith("## ")) {
      closeList();
      html += `<h2>${inline(trimmed.slice(3))}</h2>`;
      continue;
    }

    if (trimmed.startsWith("# ")) {
      closeList();
      html += `<h2>${inline(trimmed.slice(2))}</h2>`;
      continue;
    }

    if (/^[-*] /.test(trimmed)) {
      if (!inList) {
        html += "<ul>";
        inList = true;
      }
      html += `<li>${inline(trimmed.slice(2))}</li>`;
      continue;
    }

    closeList();
    html += `<p>${inline(trimmed)}</p>`;
  }

  closeList();
  return html;
}

async function loadArticleCards() {
  const container = document.querySelector("[data-articles]");
  if (!container) return;

  try {
    const articles = await fetchArticles(
      "select=title,slug,summary,status,tags,created_at,published_at&status=in.(draft,published)&order=created_at.desc&limit=3"
    );

    if (!articles.length) {
      container.innerHTML = "<p>No articles found.</p>";
      return;
    }

    container.innerHTML = articles
      .map(
        (article) => `
          <article class="article-card reveal">
            <a href="article.html?slug=${encodeURIComponent(article.slug)}">
              <p class="eyebrow">Policy Intelligence</p>
              <h3>${escapeHTML(article.title)}</h3>
              <p>${escapeHTML(article.summary || "")}</p>
              <time datetime="${escapeHTML(article.published_at || article.created_at || "")}">${articleDate(article)}</time>
            </a>
          </article>
        `
      )
      .join("");

    window.InflexionReveal?.observe(container);
  } catch (error) {
    console.error(error);
    container.innerHTML = "<p>Unable to load articles.</p>";
  }
}

async function loadArticlePage() {
  const container = document.querySelector("[data-article]");
  if (!container) return;

  const slug = new URLSearchParams(window.location.search).get("slug");
  if (!slug) {
    container.innerHTML = "<p>Missing article slug.</p>";
    return;
  }

  try {
    const [article] = await fetchArticles(
      `select=title,slug,summary,body_markdown,status,tags,created_at,published_at&slug=eq.${encodeURIComponent(slug)}&status=in.(draft,published)&limit=1`
    );

    if (!article) {
      container.innerHTML = "<p>Article not found.</p>";
      return;
    }

    document.title = `${article.title} | Inflexion`;
    container.innerHTML = `
      <article class="article-detail reveal">
        <p class="eyebrow">Policy Intelligence</p>
        <h1>${escapeHTML(article.title)}</h1>
        <p class="article-summary">${escapeHTML(article.summary || "")}</p>
        <time datetime="${escapeHTML(article.published_at || article.created_at || "")}">${articleDate(article)}</time>
        <div class="article-body">${markdownToHTML(article.body_markdown || "")}</div>
      </article>
    `;

    window.InflexionReveal?.observe(container);
  } catch (error) {
    console.error(error);
    container.innerHTML = "<p>Unable to load article.</p>";
  }
}

loadArticleCards();
loadArticlePage();
