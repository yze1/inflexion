# Foresight Static Website

Initial static setup for the Foresight website.

## Files

- `index.html` is the landing page.
- `why-now.html` and `services.html` are placeholder routes for the next build step.
- `css/style.css` contains the visual system from `styleguide.md`.
- `js/main.js` handles navigation, scroll state, and reveal animations.
- `js/content-loader.js` loads services and partners from JSON.
- `js/news-loader.js` loads policy intelligence content from JSON.
- `data/*.json` stores reusable site, service, partner, and policy-news content.

## Run Locally

Use any static server from the project root:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.
