async function loadPartial(name) {
  const target = document.querySelector(`[data-partial="${name}"]`);
  if (!target) return;

  const response = await fetch(`/partials/${name}.html`);
  if (!response.ok) throw new Error(`Unable to load ${name} partial`);
  target.replaceWith(document.createRange().createContextualFragment(await response.text()));
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

Promise.all([loadPartial("header"), loadPartial("footer"), loadPartial("briefing-modal")])
  .then(async () => {
    const section = location.pathname.split("/").filter(Boolean)[0];
    document.querySelector(`.site-nav a[href="/${section}/"]`)?.classList.add("is-active");

    await loadScript("/js/main.js?v=briefing-modal-3");
    await loadScript("/js/content-loader.js");
    if (document.querySelector("[data-articles], [data-article]")) {
      await loadScript("/js/articles-loader.js");
    }
  })
  .catch(console.error);
