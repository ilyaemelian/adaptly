# Scope

## In scope

- Static HTML pages and embedded / linked CSS and JS  
- Raster assets under `web/mvp/assets/` referenced by those pages  
- Repository metadata: `README.md`, `CHANGELOG.md`, `LICENSE`, `SECURITY.md`  
- Technical design notes: `ARCHITECTURE.md`, `INTERACTION_MODEL.md`, `UI_PRINCIPLES.md`  
- Investor-MVP demo application code under `apps/` with non-secret mock data and local persistence.

## Out of scope (do not commit here)

- Secrets: API keys, tokens, `.env` with credentials  
- Proprietary algorithms, training data, or closed product specifications not needed to render the static pages  
- Production database dumps or private learner records.

Material that belongs in a private repository must not be added to this tree.

## Rationale

The published tree is limited to artefacts that can be served as **static files** and reviewed without exposing backend or confidential product internals.
