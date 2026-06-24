async function loadJson(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Unable to load ${path}`);
  }
  return response.json();
}

function renderServices(data) {
  const list = document.querySelector("[data-services-list]");
  if (!list || !data?.services?.length) return;

  list.innerHTML = data.services
    .map(
      (service) => `
        <article class="service-item reveal">
          ${
            service.icon
              ? `<span class="icon-mark service-icon" aria-hidden="true"><img src="assets/icons/${service.icon}.svg" alt="" loading="lazy" /></span>`
              : ""
          }
          <div>
            <h3>${service.title}</h3>
            ${service.text ? `<p>${service.text}</p>` : ""}
          </div>
        </article>
      `
    )
    .join("");

  window.InflexionReveal?.observe(list);
}

function renderPartners(data) {
  const target = document.querySelector("[data-partners]");
  if (!target || !data?.partners?.length) return;

  target.innerHTML = data.partners
    .map((partner) => `${partner.name}, ${partner.credentials}`)
    .join("<br>");
}

Promise.allSettled([loadJson("data/services.json"), loadJson("data/partners.json")]).then((results) => {
  const [services, partners] = results;

  if (services.status === "fulfilled") {
    renderServices(services.value);
  }

  if (partners.status === "fulfilled") {
    renderPartners(partners.value);
  }
});
