const header = document.querySelector("[data-header]");
const year = document.querySelector("[data-year]");
const lighthouseFadeSections = document.querySelectorAll("[data-lighthouse-fade]");

if (year) {
  year.textContent = new Date().getFullYear();
}

function prepareHeroLines() {
  document.querySelectorAll(".hero-copy h1").forEach((heading) => {
    if (heading.querySelector(".hero-line")) return;

    const originalText = heading.textContent.trim();
    const words = originalText.split(/\s+/);
    if (!words.length) return;

    heading.setAttribute("aria-label", originalText);
    heading.textContent = "";
    const measuringWords = words.map((word, index) => {
      const span = document.createElement("span");
      span.textContent = `${word}${index === words.length - 1 ? "" : " "}`;
      heading.appendChild(span);
      return span;
    });

    const lines = [];
    measuringWords.forEach((word) => {
      const top = Math.round(word.getBoundingClientRect().top);
      const currentLine = lines[lines.length - 1];

      if (!currentLine || currentLine.top !== top) {
        lines.push({ top, text: word.textContent });
        return;
      }

      currentLine.text += word.textContent;
    });

    heading.textContent = "";
    lines.forEach((line, index) => {
      const span = document.createElement("span");
      span.className = "hero-line";
      span.setAttribute("aria-hidden", "true");
      span.textContent = `${line.text.trim()}${index === lines.length - 1 ? "" : " "}`;
      span.style.transitionDelay = `${240 + index * 110}ms`;
      heading.appendChild(span);
    });
  });
}

function startPageMotion() {
  prepareHeroLines();

  let hasStarted = false;

  function revealOpeningSequence() {
    if (hasStarted) return;
    hasStarted = true;
    document.body.classList.add("is-loaded");
    document.querySelectorAll(".hero-line").forEach((line) => {
      line.classList.add("is-visible");
    });
  }

  requestAnimationFrame(revealOpeningSequence);
  window.setTimeout(revealOpeningSequence, 80);
}

function setHeaderState() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

function updateLighthouseFade() {
  lighthouseFadeSections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const scrollThroughHero = Math.min(rect.height, Math.max(0, -rect.top));
    const imageShift = scrollThroughHero * 0.35;
    const fadeDistance = rect.height * 0.25;
    const progress = Math.min(1, Math.max(0, -rect.top / fadeDistance));

    section.style.setProperty("--lighthouse-shift", `${imageShift.toFixed(1)}px`);

    if (progress >= 1 || section.dataset.lighthouseLit === "true") {
      section.dataset.lighthouseLit = "true";
      section.style.setProperty("--dark-lighthouse-opacity", "0");
      return;
    }

    section.style.setProperty("--dark-lighthouse-opacity", (1 - progress).toFixed(3));
  });
}

setHeaderState();
updateLighthouseFade();
window.addEventListener("scroll", setHeaderState, { passive: true });
window.addEventListener("scroll", updateLighthouseFade, { passive: true });
window.addEventListener("resize", updateLighthouseFade);

const revealItems = document.querySelectorAll(".reveal");
let revealObserver = null;
let revealFallbackQueued = false;

function revealVisibleItems(root = document) {
  root.querySelectorAll?.(".reveal:not(.is-visible)").forEach((item) => {
    const rect = item.getBoundingClientRect();
    const entersViewport = rect.top <= window.innerHeight * 0.92 && rect.bottom >= 0;

    if (!entersViewport) return;

    item.classList.add("is-visible");
    revealObserver?.unobserve(item);
  });
}

function queueRevealFallback() {
  if (revealFallbackQueued) return;
  revealFallbackQueued = true;

  window.setTimeout(() => {
    revealFallbackQueued = false;
    revealVisibleItems();
  }, 80);
}

function revealElement(item) {
  if (!item || item.classList.contains("is-visible")) return;

  if (revealObserver) {
    revealObserver.observe(item);
    return;
  }

  item.classList.add("is-visible");
}

if ("IntersectionObserver" in window) {
  revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    },
    {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.08
    }
  );
}

revealItems.forEach(revealElement);

const briefingModal = document.querySelector("#briefing-modal");
const briefingClose = briefingModal?.querySelector("[data-briefing-close]");
let briefingTrigger = null;

function openBriefingModal(trigger = null) {
  if (!briefingModal) return;

  briefingTrigger = trigger;
  document.body.classList.add("modal-open");

  if (typeof briefingModal.showModal === "function") {
    if (!briefingModal.open) briefingModal.showModal();
  } else {
    briefingModal.setAttribute("open", "");
  }

  window.setTimeout(() => {
    const firstField = briefingModal.querySelector("input, select, textarea, button");
    firstField?.focus();
  }, 0);
}

function closeBriefingModal() {
  if (!briefingModal || !briefingModal.open) return;

  if (typeof briefingModal.close === "function") {
    briefingModal.close();
  } else {
    briefingModal.removeAttribute("open");
  }

  document.body.classList.remove("modal-open");
}

document.addEventListener("click", (event) => {
  const button = event.target.closest?.('a[href$="#briefing"]');

  if (!button) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  if (!briefingModal) return;

  event.preventDefault();
  openBriefingModal(button);
});

briefingClose?.addEventListener("click", closeBriefingModal);

briefingModal?.addEventListener("click", (event) => {
  if (event.target === briefingModal) closeBriefingModal();
});

briefingModal?.addEventListener("cancel", () => {
  document.body.classList.remove("modal-open");
});

briefingModal?.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
  briefingTrigger?.focus?.();
  briefingTrigger = null;
});

if (window.location.hash === "#briefing" && briefingModal) {
  window.setTimeout(() => openBriefingModal(), 120);
}

startPageMotion();
queueRevealFallback();
window.addEventListener("scroll", queueRevealFallback, { passive: true });
window.addEventListener("resize", queueRevealFallback);

window.InflexionReveal = {
  observe(root = document) {
    root.querySelectorAll?.(".reveal:not(.is-visible)").forEach(revealElement);
    revealVisibleItems(root);
  }
};
