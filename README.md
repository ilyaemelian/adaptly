# Adaptly · interface prototyping layer

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Overview

Public **interface prototyping layer** for **Adaptly** — a product-oriented, AI-native learning system. This tree holds static HTML/CSS/JS artefacts: interaction layout, primary user flows, and UI-level behaviour **without** backend services or model inference.

The goal is to separate **interface structure** (navigation, states, feedback patterns) from **implementation** (APIs, data stores, training/personalisation pipelines), so the UI can be reviewed as its own subsystem.

Further reading:

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — how this repo sits relative to the wider product  
- [`docs/INTERACTION_MODEL.md`](docs/INTERACTION_MODEL.md) — user-facing states and flow logic at the UI layer  
- [`docs/UI_PRINCIPLES.md`](docs/UI_PRINCIPLES.md) — visual and interaction constraints  
- [`docs/SCOPE.md`](docs/SCOPE.md) — explicit in/out of scope  

---

## Scope (this repository)

**Included**

- Static interface prototypes (`web/mvp/`)  
- Simulated learning flows (navigation only; no live adaptation engine)  
- Onboarding and session-oriented screens (UI level)  
- Mentor-style and analytics-oriented interface patterns  

**Use**

- Reference for product-facing design and interface architecture  
- UX validation and communication of flow structure  
- Teaching / review of interaction layout (no executable product backend here)  

---

## Repository structure

```
adaptly/
├── web/
│   └── mvp/
│       ├── index.html        # entry: navigation hub
│       ├── mvp.css           # hub layout
│       ├── mvp.js            # hub client script (e.g. filters)
│       ├── assets/           # raster assets for screens
│       └── screens/          # individual screens / flows (*.html)
├── docs/
│   ├── ARCHITECTURE.md
│   ├── INTERACTION_MODEL.md
│   ├── MVP_ROADMAP.md
│   ├── UI_PRINCIPLES.md
│   └── SCOPE.md
├── CHANGELOG.md
├── SECURITY.md
└── LICENSE                   # MIT
```

---

## Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 |
| Styling | CSS3 · [Tailwind CSS](https://tailwindcss.com) via CDN (per-page config where used) |
| Fonts / icons | Google Fonts, Material Symbols (CDN) where referenced |
| Scripts | Vanilla JS (hub: `mvp.js`) |
| Build | None — serve `web/mvp` over HTTP |

---

## Design principles (summary)

- Clear primary actions and navigation depth  
- Low cognitive load on first paint; complexity exposed progressively  
- Tight feedback loops in the UI copy and control patterns (full list: [`docs/UI_PRINCIPLES.md`](docs/UI_PRINCIPLES.md))  

Adaptive behaviour **in production** is assumed to be driven by models and services **outside** this repository; **here**, adaptation is **represented** through static content and layout only.

---

## Excluded by design

This repository does **not** contain:

- Backend services or HTTP APIs  
- Databases and data pipelines  
- Authentication, billing, or identity  
- ML models, trainers, or inference code  
- Canonical curriculum payloads  

A working MVP stack exists **outside** this public tree. Public files may describe the investor-facing product direction, but private backend, AI-agent, voice, data, and architecture details must stay outside this open repository.

Details: [`docs/SCOPE.md`](docs/SCOPE.md).

---

## Run locally

```bash
cd web/mvp
python -m http.server 8080
```

Open `http://localhost:8080`. Use a static server (not `file://`) so relative paths to `assets/` resolve.

---

## Status

Public, limited interface layer for review. Private MVP implementation details live outside this open repository.

---

## Maintainer

[Ilya Emelianov](https://github.com/ilyaemelian)

---

## Trademark

*Adaptly* identifies this product interface work. Other rights may apply.
