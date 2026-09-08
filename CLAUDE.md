# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built `dist/` locally
- `npm run deploy` — `predeploy` builds, then `gh-pages -d dist` publishes `dist/` to the `gh-pages` branch

There is no test runner, linter, or formatter configured.

## Architecture

Single-page personal site for Thaninpong "Non" Panthawong, themed as a **black-and-white
Japanese web manga magazine** (structure inspired by Ciao Plus; original design). Vue 3
(`<script setup>`) + Vite 4 + Tailwind CSS 3, with `vue-router`, `@vueuse/head` (SEO) and
`@vueuse/motion` (available; used sparingly). Pinia is registered in `main.js` but unused.

### Content is data-driven

**`src/data/content.js` is the single source of truth** for all real content — bio, contact,
socials, skills, activities (camps), projects (builds), `experience` + `hackathons` (from the
résumé PDF), the magazine/CV block, and a merged date-sorted `updates` feed. The manga-magazine
layout renders entirely from these objects; to change copy, images, links or ordering, edit
this file, not the components. The portfolio material is mapped onto magazine sections
(projects → "manga titles", activities → "articles", `experience` → "experience ranking",
`hackathons` → the Hackathons section, skills → "recommended series", About/CV → "magazine
issue"). The downloadable CV is `public/resume/Thaninpong_Resume.pdf` (`contact.resume`).

### Layout

- **`src/App.vue`** — global chrome: `SiteHeader` + `<router-view>` + `SiteFooter`.
  (Do not wrap `<router-view>` in `<transition>` — an out-in fade here left `<main>` stuck
  at low opacity; it was removed.)
- **`src/components/SiteHeader.vue` / `SiteFooter.vue`** — nav (route links + hamburger
  under `lg`), running marquee, section "category bar", social/contact footer with disclaimer.
- **`src/components/sections/`** — the home-page sections assembled in order by
  `src/views/Home.vue`: `HeroPickUp` (cover splash, unnumbered), `ExperienceRanking` (01),
  `Hackathons` (02), `PickUpStrip` (03, `#pickup`), `TodayUpdates` (04), `MangaRanking` (05),
  `ArticlesVideos` (06), `RecommendedManga` (07), `MagazineFeature` (unnumbered). Each
  `<section>` carries the `id` its nav hash targets (`#experience`, `#hackathons`, `#pickup`,
  `#updates`, `#ranking`, `#articles`, `#recommended`, `#magazine`); `sectionNav` in
  `content.js` must stay in sync, the `SectionHeading` `no="0X"` numerals are hand-numbered
  in document order, and section backgrounds alternate `bg-paper-soft` / `bg-paper`.
- **`src/components/ui/`** — shared primitives: `SectionHeading` (EN display + JP kicker +
  index numeral), `MangaButton` (panel-shadow button; `to` / `href` / `download` props),
  `SpeechBubble`, `TitleCard`, `RankHeart` (heart rank badge, crown on #1 — position it with
  a wrapper div, not a class on the component, because Tailwind's `.relative` beats `.absolute`).
- Company logos for the Experience section live in `public/images/company/` (`experience[].logo`).
- Hackathon banners live in `public/images/hackathons/` (`hackathons[].banner`); the AABG
  certificate (`hackathons[].certImage`) is hidden until the card cover is hovered and opens
  a `<Teleport>`ed lightbox on click (state in `Hackathons.vue`).
- **Views** — `About`, `Project` (category filter, `#<project.id>` anchors — still routed at
  `/project` and linked from Pick Up / Ranking cards, but no longer in the top nav), `Contact`,
  `Resume` are all lazy-loaded and driven by `content.js`. The top nav's 3rd item is
  "Experience" → `{ path: '/', hash: '#experience' }` (a `pageNav` entry whose `to` is an
  object, not a string).

### Theming

- **`tailwind.config.js`** — custom tokens: colors `paper` / `paper-soft` / `paper-gray` /
  `ink` / `charcoal` / `smoke` / `line-gray` (strictly monochrome — no accent hue);
  fonts `display` (Anton), `gothic` (Zen Kaku Gothic New), `mincho` (Shippori Mincho B1),
  `marker` (Yusei Magic); `shadow-panel*` offset box-shadows; `marquee` / `pop-in` / `caret`
  animations. Google Fonts are loaded via `<link>` in `index.html`.
- **`src/assets/main.css`** — `@layer utilities` for the manga texture classes:
  `.halftone` / `.halftone-lg` / `.halftone-fade`, `.speed-lines` / `.speed-lines-diag`,
  `.radial-lines`, `.text-outline`, `.writing-vertical*`, `.no-scrollbar`. These pattern
  classes paint with `currentColor`, so set intensity via a `text-*` class on the element.
- Imagery renders in full colour (the layout stays monochrome); images get a small
  hover zoom. White-glyph social PNGs (`/images/facebook.png` etc.) must sit on a
  `bg-ink` circle to be visible.

### Routing

`src/router/index.js` — `createWebHistory` (host must rewrite unknown paths to `index.html`).
`/home` redirects to `/`; catch-all redirects to `/`. `scrollBehavior` handles hash targets
with a 132px top offset for the sticky header.

## Known quirks

- Deploy target is GitHub Pages (`npm run deploy`); SEO canonical/sitemap point at
  `https://thaninpong.info`. Confirm the intended host before changing either.
- All imagery lives in `public/images/` and is referenced as absolute `/images/...`.
