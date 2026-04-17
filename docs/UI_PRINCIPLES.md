# UI principles (prototype layer)

Constraints applied across `web/mvp/` screens. Implementation is Tailwind-utility-heavy with CDN injection per file.

## Visual

- **Dark, low-chrome base** — deep navy / obsidian-style surfaces; primary accent in cyan / sky range; secondary purple and tertiary green for semantic emphasis where used.  
- **Typography** — sans-first (Inter / Manrope on many screens via Google Fonts); monospace only for code blocks.  
- **Depth** — layered surfaces (cards, glass-style panels) instead of heavy outlines where the design allows.  

## Interaction

- **Progressive disclosure** — dense analytics and mentor views sit behind clear entry points (hub or nav within a screen).  
- **Feedback** — buttons, chips, and status badges communicate state; no guarantee of persistence.  
- **Consistency** — repeated patterns (top bar, side nav, card grid) across desktop variants; mobile variants adjust density.  

## Accessibility (intent)

- Semantic landmarks where authored (headers, main, nav).  
- Colour contrast targets WCAG-minded choices in the palette, but **no formal audit** is claimed for this bundle.  

## Non-goals

- Pixel-perfect parity between every mobile/desktop pair.  
- Internationalisation in the current static copy.  
- Design-token build pipeline (tokens live in inline Tailwind config per page).
