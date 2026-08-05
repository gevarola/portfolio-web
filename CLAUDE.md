# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A static, single-page portfolio site for Germán Rojas La Valle (Content & Social Media Manager). No build step, no framework, no package manager — plain HTML/CSS/JS served as-is.

## Commands

There is no `package.json`, linter, test suite, or build process. To preview the site locally, run the static file server defined in `.claude/launch.json`:

```bash
node .claude/serve.js
```

This serves the repo root at `http://127.0.0.1:8743` (`.claude/serve.js` maps `/` to `index.html` and serves files by extension — `.html`, `.css`, `.js`, `.jpg/.jpeg`, `.png`, `.pdf`). There's no live-reload; refresh the browser after edits.

## Architecture

The page is a content/render split across three files, all loaded directly by `index.html` (no bundler, no modules):

- **`index.html`** — static shell only. Every section (`intro`, `details`, `pillars`, `work`, `other-work`, `creator`, `ai`, `contact`) is an empty container with `id`s; almost no text lives here. A modal overlay (`#case-modal`) is also present but hidden by default.
- **`assets/content.js`** — pure data, no DOM logic. Defines:
  - `SITE` — full bilingual (`en`/`es`) copy for every section, keyed by language then section.
  - `LINKS` — external URLs (email, socials, CV files, live dashboard).
  - `CASES` — the "Selected work" case studies (client, stats, and per-language challenge/process/result/strategic-thinking/lessons-learned), rendered as cards and expanded into `#case-modal` on click.
  - `PLATFORMS` / `TOOLS` — badge chip data (icon or wordmark) for the Details section.
  - `TICKER_KEYWORDS`, `OTHER_CLIENTS`, `CREATOR_ITEMS` — data for the scrolling ticker, "Other work" grid, and "As a creator" grid.
  - `ICON_PATHS` — raw SVG path data for inline social/tool icons.
- **`assets/script.js`** — an IIFE that owns all rendering and interaction. One `render*` function per section (`renderHeader`, `renderIntro`, `renderTicker`, `renderDetails`, `renderPillars`, `renderWork`, `renderOtherWork`, `renderCreator`, `renderAI`, `renderContact`), all called from `renderAll()`. Content is injected via `textContent`/`innerHTML` string templates — there is no virtual DOM or diffing.

**Language switching**: state is a single `{ lang: "en" | "es" }` object, persisted to `localStorage` (`grlv-lang`). Toggling language calls `renderAll()` again, fully re-rendering every section from `SITE[state.lang]`. To add or edit copy, edit `SITE.en.*` and `SITE.es.*` in `assets/content.js` in parallel — the two languages must stay structurally identical (same keys/array lengths) since `script.js` indexes them positionally.

**Case study modal**: `openCaseModal(caseId)` looks up the case in `CASES` by `id`, builds the modal HTML from that case's per-language fields plus shared fields (`stats`, `image`/`image2`), and toggles the `.open` class on `#case-modal`. Adding a new case study means adding one object to `CASES` with both `en` and `es` blocks — no other wiring needed, since `renderWork()` maps over `CASES` automatically.

**Styling**: single stylesheet `assets/styles.css`. Theming uses CSS custom properties on `:root` (`--bg`, `--ink`, `--blue`, `--coral`, `--yellow`, fonts), and sections alternate between dark (`.section-dark`) and light (`.section-light`) by overriding those same variables locally.

**Assets**: images live in `assets/images/`, downloadable CVs in `assets/files/`. Stray images at the repo root (`images.png`, `unnamed.png`, `capcut-logo-*.jpg`) are not referenced by the site — don't assume they belong to any section without checking `content.js` first.
