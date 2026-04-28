# Architecture (public UI slice)

## System context

Adaptly, as a **product**, is intended to combine:

1. **Client experience** — flows for learning, assessment feedback, and mentor-style assistance.  
2. **Server-side services** — persistence, auth, orchestration, and (in production) model-backed adaptation.  

**This repository implements layer (1) only** as static files. Layer (2) is **out of tree**; MVP/backend, AI-agent orchestration, voice processing, and detailed architecture belong in private development repositories or controlled investor materials.

## Logical decomposition (UI bundle)

| Concern | Location in repo | Notes |
|---------|------------------|--------|
| Entry and cross-screen navigation | `web/mvp/index.html`, `mvp.js`, `mvp.css` | Hub groups screens by theme (core / onboarding / variants). |
| Flow-specific views | `web/mvp/screens/*.html` | Each file is self-contained (Tailwind CDN + markup). No shared SPA router. |
| Static media | `web/mvp/assets/` | Logos and bitmaps referenced with relative URLs from `screens/`. |

There is **no** application server, **no** shared component package, and **no** build pipeline in this public tree.

## Screen families (functional)

Rough grouping of `screens/` (names mirror filenames):

- **Onboarding** — path / track selection (mobile and desktop variants).  
- **Core** — dashboard, lessons, coding lesson, community.  
- **Mentor** — conversational UI pattern (mobile / desktop density).  
- **Analytics** — learning-intelligence style dashboards (desktop / mobile layouts).  

Relationships are **navigational** (links from hub or manual open), not data-coupled.

## MVP implementation direction (private)

The investor MVP should be developed as a mobile-first product slice outside the open repository:

- learner onboarding and path selection;
- short learning sessions suitable for transport / low-focus contexts;
- dashboard and next-step recommendation;
- AI mentor assistance for explanation, reflection, and confirmation states;
- optional voice-assisted input for small code edits or answers.

Public files may describe this product intent, but should not expose private service boundaries, prompts, orchestration logic, secrets, raw experiments, or unfinished implementation details.

## Boundaries

Anything that requires a **secret**, **user-specific record**, **runtime model output**, or private architecture detail is **not** implemented here. Numbers and labels on screens are **illustrative** unless wired in private implementation outside this repo.
