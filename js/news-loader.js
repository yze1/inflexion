function formatDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(date);
}

function tagMarkup(tags = []) {
  return tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
}

function articleBodyMarkup(item) {
  const paragraphs = item.body?.length ? item.body : [item.summary, item.whyItMatters];
  return paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
}

function renderFeaturedNews(item) {
  const target = document.querySelector("[data-featured-news]");
  if (!target || !item) return;

  target.innerHTML = `
    <div class="news-meta">
      <span>${formatDate(item.date)}</span>
      <span>${item.jurisdiction}</span>
      <span>${item.source}</span>
    </div>
    <h3>${item.title}</h3>
    <p>${item.summary}</p>
    <p><strong>Why it matters:</strong> ${item.whyItMatters}</p>
    <div class="tag-row">${tagMarkup(item.tags)}</div>
    <button class="button button-primary button-small" type="button" data-read-more="featured">Read More</button>
  `;

  window.InflexionReveal?.observe(target);
}

function renderArchiveNews(items = []) {
  const target = document.querySelector("[data-archive-news]");
  if (!target) return;

  const sorted = [...items]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  target.innerHTML = sorted
    .map(
      (item, index) => `
        <article class="news-card reveal">
          <div class="news-meta">
            <span>${formatDate(item.date)}</span>
            <span>${item.jurisdiction}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.whyItMatters}</p>
          <button class="button button-primary button-small" type="button" data-read-more="${index}">Read More</button>
        </article>
      `
    )
    .join("");

  window.InflexionReveal?.observe(target);
}

function ensureArticleModal() {
  let modal = document.querySelector("[data-article-modal]");
  if (modal) return modal;

  modal = document.createElement("div");
  modal.className = "article-modal";
  modal.setAttribute("data-article-modal", "");
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="article-modal-backdrop" data-modal-close></div>
    <article class="article-modal-panel" role="dialog" aria-modal="true" aria-labelledby="article-modal-title">
      <button class="modal-close" type="button" data-modal-close aria-label="Close article">Close</button>
      <div class="article-modal-scroll">
        <div class="news-meta" data-modal-meta></div>
        <h2 id="article-modal-title" data-modal-title></h2>
        <div class="tag-row" data-modal-tags></div>
        <div class="article-body" data-modal-body></div>
      </div>
      <div class="article-modal-footer">
        <a class="button button-primary" href="services.html#briefing">Request a Briefing</a>
      </div>
    </article>
  `;

  document.body.appendChild(modal);
  modal.addEventListener("click", (event) => {
    if (event.target.closest("[data-modal-close]")) {
      closeArticleModal();
    }
  });
  return modal;
}

function openArticleModal(item) {
  const modal = ensureArticleModal();
  modal.querySelector("[data-modal-meta]").innerHTML = `
    <span>${formatDate(item.date)}</span>
    <span>${item.jurisdiction}</span>
    <span>${item.source}</span>
  `;
  modal.querySelector("[data-modal-title]").textContent = item.title;
  modal.querySelector("[data-modal-tags]").innerHTML = tagMarkup(item.tags);
  modal.querySelector("[data-modal-body]").innerHTML = articleBodyMarkup(item);
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modal.querySelector("[data-modal-close]").focus();
}

function closeArticleModal() {
  const modal = document.querySelector("[data-article-modal]");
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function bindReadMore(data) {
  const archive = [...(data.archive || [])].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
  document.querySelectorAll("[data-read-more]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.getAttribute("data-read-more");
      const item = key === "featured" ? data.featured : archive[Number(key)];
      if (item) openArticleModal(item);
    });
  });
}

fetch("data/policy-news.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Unable to load policy news");
    }
    return response.json();
  })
  .then((data) => {
    renderFeaturedNews(data.featured);
    renderArchiveNews(data.archive);
    bindReadMore(data);
  })
  .catch(() => {
    const target = document.querySelector("[data-featured-news]");
    if (target) {
      target.innerHTML = `
        <p class="ui-label">Policy Intelligence</p>
        <h3>Policy updates are being prepared.</h3>
        <p>Inflexion will use this section to translate AI policy movement into client relevance.</p>
        <button class="button button-primary button-small" type="button">Read More</button>
      `;
    }
  });

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeArticleModal();
  }
});
