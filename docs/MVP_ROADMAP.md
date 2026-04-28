# Public MVP roadmap

This document is intentionally limited for the public repository. Private
architecture, agent implementation, training logic, prompts, data contracts, and
raw product experiments stay outside this tree.

## Investor-facing goal

Show a mobile-first learning journey that is easy to understand in a short demo:
onboarding intent, a guided lesson, AI mentor support, progress feedback, and a
clear next step.

## Public demo flow

1. **Choose direction** — the learner selects a path and experience level.
2. **Learn on mobile** — the learner opens a short lesson designed for transport
   or other low-focus contexts.
3. **Ask mentor** — an AI-agent surface explains, checks understanding, and
   suggests the next action.
4. **Voice-assisted input** — the learner can dictate a small code idea or
   correction, review it, and explicitly confirm it before it affects the task.
5. **See progress** — the interface shows progress and recommendation states
   without exposing scoring internals.

## MVP priorities

- Mobile-first screens and touch-friendly lesson flow.
- Static prototype cleanup: split, tighten, and align existing HTML screens
  before connecting private implementation.
- AI-agent UX: mentor prompt, answer, correction, and confirmation states.
- Voice UX: dictate -> preview -> edit/confirm -> apply.
- Investor-safe architecture communication: explain capabilities without
  publishing private backend, model, data, or orchestration details.

## Private implementation track

- Backend services, persistence, auth, agent orchestration, model/provider
  choices, prompts, evaluation logic, and telemetry are implemented in private
  repositories or closed branches.
- Public files may reference these capabilities only at product-surface level.

## Public non-goals

- No runnable backend or private frontend application source in this repository.
- No secrets, prompts, proprietary algorithms, raw architecture diagrams, or
  confidential deck content.
- No production data, training data, database schemas, or internal API contracts.
