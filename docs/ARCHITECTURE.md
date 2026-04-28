# Architecture

## System context

Adaptly, as a **product**, is intended to combine:

1. **Client experience** — flows for learning, assessment feedback, and mentor-style assistance.  
2. **Server-side services** — persistence, auth, orchestration, and (in production) model-backed adaptation.  

The repository now contains both the original static prototype and a first runnable MVP slice:

- `web/mvp/` — static interface prototype and screen archive.
- `apps/backend/` — minimal demo API using Python standard library.
- `apps/frontend/` — minimal investor-demo frontend backed by the local API.

## Logical decomposition (UI bundle)

| Concern | Location in repo | Notes |
|---------|------------------|--------|
| Entry and cross-screen navigation | `web/mvp/index.html`, `mvp.js`, `mvp.css` | Hub groups screens by theme (core / onboarding / variants). |
| Flow-specific views | `web/mvp/screens/*.html` | Each file is self-contained (Tailwind CDN + markup). No shared SPA router. |
| Static media | `web/mvp/assets/` | Logos and bitmaps referenced with relative URLs from `screens/`. |

There is no build pipeline yet. The first MVP slice is intentionally dependency-light and runs with `python3`.

## Screen families (functional)

Rough grouping of `screens/` (names mirror filenames):

- **Onboarding** — path / track selection (mobile and desktop variants).  
- **Core** — dashboard, lessons, coding lesson, community.  
- **Mentor** — conversational UI pattern (mobile / desktop density).  
- **Analytics** — learning-intelligence style dashboards (desktop / mobile layouts).  

Relationships in `web/mvp/` are navigational. `apps/frontend/` introduces the first data-coupled demo path by reading user progress, curriculum, and recommendations from `apps/backend/`.

## Boundaries

Secrets, proprietary model code, and production training data remain out of scope. The current backend uses in-memory demo data only; it is for investor walkthroughs and product validation, not production persistence.
