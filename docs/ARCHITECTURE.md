# Architecture (public UI slice)

## System context

Adaptly, as a **product**, is intended to combine:

1. **Client experience** — flows for learning, assessment feedback, and mentor-style assistance.  
2. **Server-side services** — persistence, auth, orchestration, and (in production) model-backed adaptation.  

**This repository implements layer (1) only** as static files. Layer (2) is **out of tree**; a separate MVP/backend may exist privately and **may be opened partially** in the future.

## Logical decomposition (UI bundle)

| Concern | Location in repo | Notes |
|---------|------------------|--------|
| Entry and cross-screen navigation | `web/mvp/index.html`, `mvp.js`, `mvp.css` | Hub groups screens by theme (core / onboarding / variants). |
| Flow-specific views | `web/mvp/screens/*.html` | Each file is self-contained (Tailwind CDN + markup). No shared SPA router. |
| Static media | `web/mvp/assets/` | Logos and bitmaps referenced with relative URLs from `screens/`. |

There is **no** application server, **no** shared component package, and **no** build pipeline in this tree.

## Screen families (functional)

Rough grouping of `screens/` (names mirror filenames):

- **Onboarding** — path / track selection (mobile and desktop variants).  
- **Core** — dashboard, lessons, coding lesson, community.  
- **Mentor** — conversational UI pattern (mobile / desktop density).  
- **Analytics** — learning-intelligence style dashboards (desktop / mobile layouts).  

Relationships are **navigational** (links from hub or manual open), not data-coupled.

## Boundaries

Anything that requires a **secret**, **user-specific record**, or **runtime model output** is **not** implemented here. Numbers and labels on screens are **illustrative** unless wired later to a backend outside this repo.
