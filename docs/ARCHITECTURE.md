# Architecture (public UI slice)

## System context

Adaptly, as a **product**, is intended to combine:

1. **Client experience** — flows for learning, assessment feedback, and mentor-style assistance.  
2. **Server-side services** — persistence, auth, orchestration, and (in production) model-backed adaptation.  

This public repository contains the interface layer only:

- `web/mvp/` — static interface prototype and screen archive.
- `docs/` — public-safe notes about boundaries, interaction intent, and UI principles.

Runnable backend, AI-agent orchestration, data stores, and proprietary architecture details belong in private development repositories or controlled investor materials.

## Logical decomposition (UI bundle)

| Concern | Location in repo | Notes |
|---------|------------------|--------|
| Entry and cross-screen navigation | `web/mvp/index.html`, `mvp.js`, `mvp.css` | Hub groups screens by theme (core / onboarding / variants). |
| Flow-specific views | `web/mvp/screens/*.html` | Each file is self-contained (Tailwind CDN + markup). No shared SPA router. |
| Static media | `web/mvp/assets/` | Logos and bitmaps referenced with relative URLs from `screens/`. |

There is no application server, shared component package, or build pipeline in this public tree.

## Screen families (functional)

Rough grouping of `screens/` (names mirror filenames):

- **Onboarding** — path / track selection (mobile and desktop variants).  
- **Core** — dashboard, lessons, coding lesson, community.  
- **Mentor** — conversational UI pattern (mobile / desktop density).  
- **Analytics** — learning-intelligence style dashboards (desktop / mobile layouts).  

Relationships in `web/mvp/` are navigational, not data-coupled.

## MVP implementation direction (private)

The investor MVP should be implemented as a mobile-first product slice outside the open repository:

- learner onboarding and path selection;
- dashboard and next-step recommendation;
- mentor/AI-agent assistance for learning flow;
- optional voice input for short code edits, confirmations, and reflection prompts.

Public files may describe the product intent at this level, but should not expose private service boundaries, model prompts, orchestration logic, secrets, raw experiments, or unfinished implementation details.

## Boundaries

Secrets, proprietary model code, production training data, detailed service diagrams, and runnable backend/frontend development remain out of scope for this public tree.
