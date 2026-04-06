# `web/mvp`

Static demo bundle.

- `index.html` — navigation hub  
- `screens/*.html` — individual screens (Tailwind CDN, inline theme config per file)  
- `mvp.css`, `mvp.js` — hub-only styles and filter script  
- `assets/` — images; from `screens/`, use relative paths `../assets/...`  

Serve this directory with any static file server or open `index.html` directly (some browsers restrict `file://` fetches; a local HTTP server is preferable).

See repository root `README.md` and `docs/SCOPE.md` for repository boundaries.
