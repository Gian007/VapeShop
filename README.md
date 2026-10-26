# VapePoints

Mobile-first React + Vite + Bootstrap 5.3 customer loyalty portal **UI prototype** for a retail POS project.

## What's included
- Four-tab customer experience: Home, Promos, Activity, Profile
- Featured offers, category filters, details, local saved offers
- Consistent points indicator, membership details, sample points ledger
- Centralized design tokens in `src/config/design-system.json` and `src/styles/tokens.css`
- Reusable React components, accessible controls and responsive layouts

## Run
Requires Node.js compatible with Vite 8 (Node 20.19+ or 22.12+).
```bash
npm ci
npm run dev
npm run build
npm run lint
```
Bootstrap 5.3.3 styles currently load from the pinned jsDelivr CDN in `index.html`. For offline/client deployment, install and bundle Bootstrap locally and regenerate the lockfile. No Bootstrap JavaScript components are needed by this prototype.

## Important limitations
- **Demo only:** all membership, points, promos, and activity are hard-coded example data, not a real authenticated service.
- Sign-out, password controls, store info, and FAQ explicitly show an unavailable notice; no fake account action is implied.
- No redemption, checkout, POS, inventory, database, or login is implemented.
- Product art is abstract placeholder art; promotional content must be approved and legally reviewed before publishing.
- No Supabase credentials, private keys, or environment secrets should be committed.

## Next engineering milestones
1. Confirm membership registration, recovery, redemption validation, discount rules, and compliance.
2. Configure Supabase Auth + Postgres migrations + RLS and server-side point ledger operations.
3. Implement secure member flows and transactional staff POS integration.
4. Add automated tests and deployment instructions for client handover.

See `docs/development-rules.md` for project conventions.
