# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server at http://localhost:3000
npm run build      # Production build
npm test           # Jest tests (watch mode); press 'a' to run all
npm run gen:social # Regenerate public/og-image.png via Puppeteer
```

No explicit lint command — ESLint runs automatically via react-scripts using the `react-app` config.

To run a single test file: `npm test -- --testPathPattern=ComponentName`

## Architecture

**Single-page portfolio site** — no React Router. Navigation uses `scrollIntoView({ behavior: 'smooth' })` to jump to sections with hardcoded IDs (`hero`, `about`, `experience`, `skills`, `projects`, `contact`).

### Key files

- `src/App.tsx` — Root; wraps everything in MUI `ThemeProvider` and custom `LanguageProvider`. `AppContent` sets `document.dir` based on language and renders sections in order.
- `src/utils/theme.ts` — Single dark MUI theme (no light mode). Custom colors, typography, and component overrides.
- `src/utils/i18n.ts` — i18next with browser language detection; detection order: `localStorage → navigator → htmlTag`; fallback: `en`.
- `src/contexts/LanguageContext.tsx` — Provides `useLanguage()` hook with `currentLanguage`, `changeLanguage()`, and `isRTL`.
- `src/data/` — Static content (experience, skills, projects, contact). Edit here to update CV content.
- `src/locales/{en,ru,he}/translation.json` — All UI strings. Hebrew triggers RTL layout.

### i18n & RTL

Supported languages: `en`, `ru`, `he`. Language preference is persisted in `localStorage`. Hebrew (`he`) sets `document.dir = 'rtl'`; components read `isRTL` from context to flip margins/padding.

### Skills filtering

`src/utils/keySkills.ts` exports `getKeySkills(threshold?, limit?)` which reads from `src/data/skills.ts`, applies priority overrides and a blocklist, then returns top-N skills by level.

### CV PDF files

Language-specific PDFs live in `public/cv-files/`. The Hero section links to `/cv-files/Pavel Pulin Fullstack [lang].pdf` based on current language.
