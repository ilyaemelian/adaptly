# Scope

## In scope

- Static HTML pages and embedded / linked CSS and JS  
- Raster assets under `web/mvp/assets/` referenced by those pages  
- Repository metadata: `README.md`, `CHANGELOG.md`, `LICENSE`, `SECURITY.md`  
- Technical design notes: `ARCHITECTURE.md`, `INTERACTION_MODEL.md`, `UI_PRINCIPLES.md` (descriptive; no executable backend)  
- Public-safe investor notes that describe product direction without exposing private implementation details.

## Out of scope (do not commit here)

- Application or API server source  
- Database schemas, migrations, or dumps  
- Agent orchestration, prompts, model-routing logic, or scoring formulas
- Secrets: API keys, tokens, `.env` with credentials  
- Proprietary algorithms, training data, or closed product specifications not needed to render the static pages  

Material that belongs in a private repository must not be added to this tree.

## Rationale

The published tree is limited to artefacts that can be served as **static files** and reviewed without exposing backend, agent, voice, or confidential product internals.
