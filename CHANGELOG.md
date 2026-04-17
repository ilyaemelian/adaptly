# Changelog

Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) (summary).

## [Unreleased]

## [0.1.1] — 2026-04-17

### Added

- Shared visual shell for demos: `web/mvp/adaptly-atmosphere.css`, `adaptly-atmosphere.svg`, `tailwind-adaptly.config.js`.  
- `docs/ARCHITECTURE.md`, `docs/INTERACTION_MODEL.md`, `docs/UI_PRINCIPLES.md` — interface-layer documentation.  
- `web/mvp/screens/README.md` — orientation for the screen bundle.  
- Root `README.md` — engineering-oriented overview (product UI facet; backend out of tree).

### Changed

- `web/mvp/` hub and 15 screens: leaner HTML (shared atmosphere / less duplicated boilerplate), `mvp.css` refresh.  
- `web/mvp/README.md` — run instructions aligned with the hub layout.

### Removed

- `docs/PUBLISH.md` — internal publish notes only; not shipped in public snapshots (see `.gitignore`).

### Notes

- Static front-end slice only; deeper product and roadmap execution stay outside this public tree where appropriate.

## [0.1.0] — 2026-04-06

### Added

- `web/mvp/`: hub page, 15 screen HTML files, `mvp.css`, `mvp.js`, `assets/`  
- `docs/SCOPE.md`  
- `LICENSE` (MIT), `SECURITY.md`, root `README.md`  

### Changed

- UI: scrollbar styling on mentor desktop layout; logo/wordmark on selected desktop screens (prior internal iteration)

### Notes

- Distribution is static front-end only; no backend in this repository.
