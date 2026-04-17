# `web/mvp`

Static demo bundle.

- `index.html` — navigation hub  
- `tailwind-adaptly.config.js` — shared Tailwind theme (loaded by every screen)  
- `screens/*.html` — individual screens (Tailwind CDN + shared config)  
- `screens/README.md` — map of screen files (RU)  
- `mvp.css`, `mvp.js` — hub-only styles and filter script  
- `adaptly-atmosphere.css`, `adaptly-atmosphere.svg` — optional full-page canvas (energy lines + grain); used by `mentor_adaptly_desktop.html`  
- `assets/` — images; from `screens/`, use `../assets/...` (brand mark: `logo_trans.png`)  

Serve this directory with any static file server. Opening `file://` may block some fetches; prefer HTTP.

See repository root `README.md` and `docs/SCOPE.md` for repository boundaries.
