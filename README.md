# NON PROJECT

The personal portfolio of **Thaninpong "Non" Panthawong**, designed as a black-and-white
Japanese **web manga magazine** — high-contrast typography, halftone patterns, speed lines,
speech bubbles and manga-panel borders. Structure inspired by Ciao Plus; the design is
original.

🔗 Live: https://thaninpong.info

## Tech stack

- **Vue 3** (`<script setup>`) + **Vite 4**
- **Tailwind CSS 3** (custom monochrome tokens + manga texture utilities)
- **vue-router** (hash-anchored home sections), **@vueuse/head** (per-view SEO),
  **@vueuse/motion**
- Fonts (Google Fonts): Anton, Zen Kaku Gothic New, Shippori Mincho B1, Yusei Magic

## Getting started

```sh
npm install
npm run dev        # dev server with HMR
npm run build      # production build → dist/
npm run preview    # serve the built dist/
npm run deploy     # build, then publish dist/ to the gh-pages branch
```

No test runner, linter or formatter is configured.

## How it works

**All content lives in `src/data/content.js`** — bio, contact, socials, skills, activities,
projects, work `experience`, `hackathons`, and the magazine/CV block. The pages render
entirely from these objects, so edit that file to change copy, images, links or ordering.
The portfolio material is mapped onto magazine sections (work experience → "experience
ranking", projects → "manga titles", activities → "articles", skills → "recommended series",
About/CV → "magazine issue").

### Layout

| Area | Files |
| --- | --- |
| Global chrome | `src/App.vue` → `SiteHeader.vue` + `<router-view>` + `SiteFooter.vue` |
| Home sections | `src/components/sections/*` assembled by `src/views/Home.vue` |
| Shared UI | `src/components/ui/*` (`SectionHeading`, `MangaButton`, `SpeechBubble`, `TitleCard`, `RankHeart`) |
| Pages | `src/views/{About,Project,Resume,Contact}.vue` (lazy-loaded) |
| Theme | `tailwind.config.js` tokens + `src/assets/main.css` `@layer utilities` (halftone / speed-lines / text-outline / vertical text) |

Home section order: **Hero → Experience → Hackathons → Pick Up → Today's Updates →
Ranking → Articles & Videos → Recommended → Magazine**. Each `<section>` id is the target
of a `sectionNav` hash link; the `SectionHeading` `no=` numerals are hand-numbered in
document order.

### Assets

All imagery is in `public/images/` and referenced as absolute `/images/...`
(`company/` for job logos, `hackathons/` for hackathon banners). The downloadable CV is
`public/resume/Thaninpong_Resume.pdf`.

## Notes

- Routing uses `createWebHistory`, so any host must rewrite unknown paths to `index.html`.
- `npm run deploy` targets **GitHub Pages**; SEO canonical/sitemap point at
  `https://thaninpong.info` — keep them in sync if the host changes.
