## Goal

Right now every service+location page (e.g. "Meeting Room in Mahape", "Coworking Space in Andheri") uses the same `LocationServicePage` — same hero, same audience grid, same plans block, same FAQs, same images. You want:

1. **Per-service templates** — each service (Meeting Room, Conference Room, Private Cabin, Office Suites, Fixed Desk, Virtual Office) gets its own unique page structure, sections, copy and image set. Coworking Space keeps its current rich template.
2. **Per-location uniqueness for Coworking Space** — only the H1 stays the same pattern (`Coworking Space in [Location]`), all other section headings and body copy are rewritten uniquely per location.

## Approach

### 1. Service-specific templates

Replace the single `LocationServicePage` with a router that picks the right template per service:

```text
src/pages/services/
  CoworkingTemplate.tsx       (current LocationServicePage, kept rich)
  MeetingRoomTemplate.tsx     (new — booking-led)
  ConferenceRoomTemplate.tsx  (new — events/boardroom-led)
  PrivateCabinTemplate.tsx    (new — team-focus-led)
  OfficeSuitesTemplate.tsx    (new — enterprise-led)
  FixedDeskTemplate.tsx       (new — productivity-led)
  VirtualOfficeTemplate.tsx   (new — compliance/address-led)
LocationServicePage.tsx       → thin switch on route.service
```

Each template has its own section order, headings, hero copy and visuals. Examples:

- **Meeting Room template**: Hero with "Book by the hour" pricing pill → Room types & capacities (4/6/8/12 seater) → AV & tech inclusions → Hourly + half-day + full-day pricing table → "Perfect for" use-case grid (client pitch, interview, workshop, off-site) → Booking process (3 steps) → Photo strip of meeting rooms only → Location & access → Meeting-room FAQs → Enquiry form. No "audiences for every kind of team" grid, no full plans block.
- **Conference Room template**: Hero with capacity/AV badges → Boardroom showcase carousel → Event setups (U-shape / theatre / classroom / boardroom) → Catering & concierge add-ons → Premium features (4K display, VC bridge, mic array) → Past events / use cases → Capacity-based pricing → Conference FAQs.
- **Private Cabin template**: Hero with team-size selector copy (2/4/6/8-seater) → Cabin types gallery → "Why a cabin over open desks" comparison → What's inside a cabin → Pricing per seat → Move-in process → Cabin-specific FAQs.
- **Office Suites template**: Enterprise-led hero → Logos of enterprise clients → Suite sizes (10/25/50/100+ seats) → Custom branding & fit-out showcase → All-inclusive billing breakdown → Compliance & security → Enterprise process → Case-study style testimonials → Enterprise FAQs.
- **Fixed Desk template**: Productivity-led hero → "Your desk, every day" gallery → What's on your desk (monitor, storage, ergonomic chair) → Member perks (24/7, mail handling, MR credits) → Monthly pricing → Fixed-desk FAQs.
- **Virtual Office template**: Compliance-led hero → GST + incorporation explainer → What you get (address, mail, call answering) → Step-by-step registration process → Document checklist → Pricing tiers (Address / GST / Premium) → Virtual-office FAQs.

Each template imports a small set of shared building blocks (`Header`, `Footer`, `ContactForm`, `Reveal`, `SEO`, `BookTourDialog`, `Testimonials`) but composes its own layout — no shared "every kind of team" grid, no shared `InlinePlans` block on non-coworking templates.

### 2. Per-location uniqueness for Coworking pages

Add a per-location content map so the Coworking template reads location-specific copy instead of the generic strings:

```text
src/data/coworking-content.ts
  perLocation: Record<LocationSlug, {
    heroSubheading: string        // unique 1-line subhead per location
    heroIntro: string             // unique 2-3 sentence intro
    whyHereHeading: string        // unique section H2 ("A coworking floor that...")
    whyHereBody: string
    audienceHeading: string       // unique H2 for the audience section
    audienceIntro: string
    neighbourhoodHeading: string  // unique H2 ("Around our X campus" → unique phrasing)
    neighbourhoodIntro: string
    closingCTA: string            // unique tour CTA H2
  }>
```

The H1 stays `Coworking Space in {location.name}` — only this pattern is reused. Every other heading and paragraph on the Coworking template reads from `perLocation[route.location]`, so Andheri, Andheri East, Goregaon, Goregaon East, Mahape, Navi Mumbai, etc. all read differently end-to-end.

### 3. Mahape imagery scoping

Mahape real photos currently leak into all services via `LocationServicePage`. After the split, only `CoworkingTemplate` keeps the Mahape-vs-default branching. Other templates use service-appropriate Mahape images where relevant (e.g. `MeetingRoomTemplate` for Mahape uses the Mahape meeting/conference photos only; `PrivateCabinTemplate` uses Mahape cabin photos only) — no cross-leak from coworking floor shots.

## Scope of this build

This is a multi-file build. Confirm before I start:

- 6 new service templates (1 file each, ~250–350 LOC each).
- 1 new per-location coworking content map.
- Refactor existing `LocationServicePage` into a thin switch.
- No data-model changes to `services` / `locations` / `pageRoutes` — routes & SEO stay intact.
- Plans/pricing block (`InlinePlans`) is removed from non-coworking templates and replaced by service-appropriate pricing UI inside each template.

## Question before I start

Do you want me to build **all 6 new templates + per-location coworking copy in one pass**, or start with **Meeting Room + Conference Room** first (the two you implied with "Meeting Room in Mahape") so you can review the new direction before I rebuild the rest?