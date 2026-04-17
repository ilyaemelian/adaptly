# Interaction model (UI layer)

This document describes **intent** and **surface-level states** reflected in the static prototypes. It does **not** define server APIs or scoring formulas.

## Proficiency framing (product intent)

The product assumes learners can be reasoned about along at least **three coarse bands** (design and copy targets):

- **Beginner** — onboarding-heavy, guided paths, reduced density.  
- **Intermediate** — mixed practice, richer dashboards, optional mentor prompts.  
- **Advanced** — emphasis on depth, optimisation tasks, comparative analytics.  

**In this repository**, those bands are **not** computed; they appear only as **layout and content choices** across screens (e.g. onboarding vs dense analytics).

## User state (conceptual, not persisted here)

Screens imply observables such as:

- **Progress** — completion %, streaks, time-on-task (shown as static numbers).  
- **Skill / topic mastery** — topology or list metaphors (graphs, bars, labels).  
- **Session context** — “daily challenge”, “mentor context” strings in copy.  

No vector, database row, or API payload backs these in-repo.

## Primary flows (navigation-level)

1. **Onboarding** — choose path / modality (mobile vs desktop layouts).  
2. **Learn** — catalogue and lesson views; coding-lesson variant with embedded “editor” chrome.  
3. **Analyse** — dashboards summarising progress and recommendations (static).  
4. **Mentor** — chat-like pattern for explanations and next-step hints (static).  
5. **Community** — social / cohort pattern (static).  

## Adaptation

**Production** adaptation (what to show next, difficulty, hints) is **out of scope** for this tree. The UI **anticipates** such behaviour through copy and component patterns; **simulation** is limited to what HTML/JS can do without a backend (e.g. hub filters in `mvp.js`).
