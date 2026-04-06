# Adaptly — UI prototypes

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Static front-end prototypes for a learning-analytics style product with mentor-oriented screens (dashboard, lessons, onboarding, and related views).

> **Scope:** this repository contains only client-side HTML/CSS/JS mockups.  
> Backend, data pipelines, ML models, and core business logic are not included.

---

## Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 |
| Styling | CSS3 · [Tailwind CSS](https://tailwindcss.com) via CDN (per-page config where present) |
| Fonts | Google Fonts (CDN), e.g. Inter / Manrope on selected screens |
| Icons | Material Symbols (CDN), where referenced |
| Scripts | Vanilla JS (`mvp.js` on the hub page) |
| Build | None — serve `web/mvp` or open `index.html` via a local HTTP server |

---

## Repository layout

```
adaptly/
├── web/
│   └── mvp/
│       ├── index.html        # Entry / screen hub
│       ├── mvp.css           # Hub styles
│       ├── mvp.js            # Hub UI (e.g. filter chips)
│       ├── assets/           # Images referenced from screens
│       └── screens/          # Individual UI screens (*.html)
├── docs/
│   └── SCOPE.md              # Explicit in/out of scope
├── CHANGELOG.md
├── SECURITY.md
└── LICENSE                   # MIT
```

---

## Run locally

```bash
cd web/mvp
python -m http.server 8080
# http://localhost:8080
```

No dependencies to install. No build step. Prefer a static server over `file://` so relative asset paths behave consistently.

---

## What is excluded

See [`docs/SCOPE.md`](docs/SCOPE.md) for the full list. In short:

- Server-side code, APIs, databases  
- Authentication and billing  
- ML / personalisation logic  
- Curriculum content  
- Internal roadmaps and production systems  
- Secrets (API keys, credentials)  

---

## License

[MIT](LICENSE) — applies to the files in this repository only.

---

## Maintainer

[Ilya Emelianov](https://github.com/ilyaemelian)

---

## Trademark

*Adaptly* is used here to label this UI bundle. Other rights may apply.
