# VapePoints development rules

## Design
- Source of truth: `src/config/design-system.json` mirrored by CSS custom properties in `src/styles/tokens.css`.
- Bootstrap 5.3 grid/utilities; use dedicated scoped CSS for branded components instead of overriding generic Bootstrap selectors.
- Light-mode first, warm off-white background, white cards, muted gold decorative accents, charcoal action surfaces.
- Mobile-first: mobile padding 16px, tablet 24–30px; 24px section gaps, 12–16px card gaps; 16px rounded cards, soft shadows.
- Inter body type with system fallback. Meet WCAG contrast, 44px targets, visible focus, reduced motion.
- Bottom navigation: Home, Promos, Activity, Profile. Keep points badge in header. No tier labels until client confirms tier rules.
- Consistent 16:9 promotional imagery, `object-fit: cover` for actual assets; don't stretch user uploads.

## Architecture
- Reusable UI in `src/components`; screens in `src/pages`; sample data in `src/data`; styles in `src/styles`.
- Limit page components to orchestration/rendering. Domain operations should live in services, never directly in presentational components.
- Don't use a giant App.jsx or duplicate design tokens across pages.
- When backend is added, separate immutable points ledger transactions from cached balances; award only after completed payment.
- Role-based staff authorization, Supabase RLS, verified redemption, rate-limited verification, auditable adjustments. Never rely on client-only checks.
- Customer ID is not a secret. Do not expose another member's points or purchase records from an entered ID alone.

## Placeholder and compliance policy
- UI sample data must be clearly identified; never simulate successful monetary or security operations.
- No unreviewed advertising/promotions of regulated vape products. Require legal/owner compliance signoff and appropriate access restrictions before enabling offer publication.
- Keep deployment, credentials and Supabase ownership transferable to client.
- Add tests for any new business logic; update README and design system when rules change.
