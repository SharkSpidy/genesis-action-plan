# HIVE — Venue Partnership Deck

A Vite + React + TypeScript rebuild of the HIVE pitch deck for Jain University.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL. Build for production with `npm run build`;
the output lands in `dist/` and can be hosted anywhere static files are served.

## Editing content

Each slide is its own component under `src/slides/`. Edit the text directly in
the relevant `SlideNN*.tsx` file — layout and styling live in `src/App.css`.
Navigation, keyboard/touch handling, and the progress bar are in `src/Deck.tsx`.

---

## Update: two design systems now live in this repo

**Internal ops deck** (`src/slides/`, wired into `src/Deck.tsx`) — unchanged apart from
`Slide05Esports.tsx` and `Slide11Ask.tsx`, which were rewritten as a cyberpunk/dark
dashboard using Tailwind + `lucide-react`. Tailwind is scoped with `preflight: false`
(see `tailwind.config.js`) specifically so it doesn't reset styles for the other ten
slides, which still run on the original `App.css` theme.

**Sponsor pitch deck** (`src/sponsor-deck/`) — a brand new, standalone set of slides
(`Slide02Audience.tsx`, `Slide04ROI.tsx`, `Slide05Tiers.tsx`) built for a B2B sponsorship
pitch. Deliberately *not* wired into `Deck.tsx` / `slides/index.ts` — it's a separate
deck with its own data model (`src/sponsor-deck/data/sponsorContent.ts`) that reuses the
verified figures from the ops budget (`src/data/budget.ts`) for its "backed by real
spend" proof points, but adds no fabricated audience percentages or sponsorship prices.
Uses `framer-motion` for entrance animations, newly added to `package.json`.

Both design systems share one source of truth for money: `src/data/budget.ts`. Total
₹52,58,000, verified against every line item and the prize-pool sub-splits via
`assertBudgetIntegrity()`.

### After pulling this update
```bash
npm install   # picks up tailwindcss, postcss, autoprefixer, lucide-react, framer-motion
npm run dev
```

Sponsor deck slides aren't rendered anywhere yet — import them into a page/route of your
choice, or ask for a `SponsorDeck.tsx` harness (own `Nav`/`ProgressBar`/index) to turn
them into a swipeable deck like the ops one.

---

## Update: internal Master Action Plan deck (`src/action-plan-deck/`)

A third, standalone deck for internal stakeholders/core committee — separate from both the
ops deck and the sponsor deck, per the same "don't touch the existing wiring" pattern.

- `data/actionPlanContent.ts` — the six phases, event metadata, and a `RECENT_UPDATES` list
  (currently populated with real milestones from this build: the budget dashboard and the
  sponsor deck — swap in actual committee updates as they land)
- `components/PhaseTimeline.tsx` — the shared glowing progress indicator, parameterized by
  `currentPhase` (0–6), dropped into every slide so progression reads consistently
- `components/PhaseHeader.tsx` — shared kicker/title/lead-time block reused by all 6 phase slides
- `slides/Slide01_Action_Summary.tsx` through `Slide07_Phase6_Tabletop.tsx` — one per phase,
  plus the summary dashboard

Phase 2 (Finance) and Phase 3 (VIP) slides pull real figures from `src/data/budget.ts`
(total budget, prize pool, celebrity buffer) rather than repeating numbers by hand — same
single-source-of-truth principle as the other two decks.

Not wired into any `Deck.tsx` yet — say the word and I'll build a `ActionPlanDeck.tsx`
harness (own Nav/ProgressBar) so it runs as a swipeable deck like the ops one.

---

## Update: master timeline (Sept 30, 2026 kickoff)

`action-plan-deck/data/actionPlanContent.ts` now has a `MILESTONES` array anchored to
`PLAN_START_DATE = '2026-09-30'` — the confirmed date of the first Jain University venue
meeting. Only that date is real; everything after it (`command-lock` through `event`) is
spaced out as a planning estimate off `ASSUMED_EVENT_DATE` ('2027-02-20', a placeholder —
no exact February date has been set). Replace `ASSUMED_EVENT_DATE` and re-space the later
milestones once the MOU locks real February dates.

`components/MasterTimeline.tsx` renders these as a vertical dated list on
`Slide01_Action_Summary.tsx`, auto-marking whichever milestone is soonest-but-not-yet-past
as "Next up" using the real current date — no manual updating needed as time passes.
`Slide02_Phase1_Command.tsx` also surfaces the Sept 30 meeting directly as a confirmed
callout, since that's the phase it belongs to.

---

## Correction: timeline is its own slide, not merged into others

`Slide01_Action_Summary.tsx` and `Slide02_Phase1_Command.tsx` are back to their original
content — the timeline is not folded into them. Instead, `Slide00_Timeline.tsx` is a new,
separate slide in `action-plan-deck/slides/` that renders `MasterTimeline` on its own.
Everything else about the milestone data (`MILESTONES`, `PLAN_START_DATE`,
`ASSUMED_EVENT_DATE` in `actionPlanContent.ts`) is unchanged.
