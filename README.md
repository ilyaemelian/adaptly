# Adaptly · public UI lab

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Public slice of our **front-end exploration**: static HTML/CSS/JS prototypes for learning-analytics and mentor-style interfaces. This repository exists so partners, investors, and endorsers can see **ongoing product design work** without access to proprietary backend, data pipelines, or core IP.

## What is here

| Path | Description |
|------|-------------|
| `web/mvp/` | Runnable demo: hub (`index.html`) + screen library (`screens/`). Uses Tailwind CDN and Google Fonts; no build step. |
| `docs/SCOPE.md` | What this repo deliberately **excludes** (confidential scope). |

## What is *not* here (by design)

- Server code, databases, authentication, billing  
- ML models, personalisation logic, or curriculum content  
- Internal roadmaps, financials, or legal agreements  

Production systems and core algorithms stay private; this repo is a **design and UX communication channel** only.

## Run locally

```bash
cd web/mvp
# open index.html in a browser, or:
python -m http.server 8080
# → http://localhost:8080
```

A live deployment may be linked from our site when available; this repo remains the **source of record** for the public demo assets.

## Cadence

We aim to land **small, reviewable updates** several times per week (UI polish, accessibility, new screens). Watch **Releases** or commit history for activity.

## Contact

**Ilya Emelianov** — see profile on [GitHub](https://github.com/ilyaemelian) and project site when published.

---

*«Adaptly» and related marks are used here for identification of the public prototype. Rights reserved where applicable.*
