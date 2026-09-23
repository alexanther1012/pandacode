# 🐼 Panda Code

A personal React web app — a collection of interactive, music-accompanied pages dedicated to relationship milestones. Deployed on GitHub Pages.

**Live site:** [alexanther1012.github.io/pandacode](https://alexanther1012.github.io/pandacode)

---

## Pages

| Route | Description |
|---|---|
| `/home` | Anniversary greeting with a word-by-word love message reveal, a photo collage, and an embedded SoundCloud player |
| `/flores-amarillas` | Animated CSS flower garden with a personal message and music |
| `/boda-civil` | Civil wedding page with an embedded YouTube video and a live countdown since the wedding date |
| `/te-amo-3-millones` | Long-form love letter with a live relationship counter in days/years mode |

---

## Tech Stack

- **React 18** — UI framework (bootstrapped with Create React App)
- **React Router DOM v6** — client-side routing
- **MUI (Material UI) v6** — component library with a custom dark theme
- **Emotion / styled-components** — CSS-in-JS (MUI peer dependencies)
- **Sass (SCSS)** — custom stylesheets compiled alongside the React build
- **Moment.js** — date arithmetic for the live relationship counters
- **react-scroll** — smooth in-page scroll navigation
- **FontAwesome + MUI Icons** — iconography
- **gh-pages** — deployment to GitHub Pages

---

## Project Structure

```
src/
├── App.js                    # Root — routing, MUI ThemeProvider
├── theme.js                  # MUI dark theme configuration
├── constants/
│   └── messages.js           # Extracted text constants (messages, URLs)
├── assets/sass/              # SCSS stylesheets
│   ├── app.scss              # Entry point — imports all partials
│   ├── _home.scss            # Home / anniversary page styles
│   └── components/           # Per-component partials
├── components/
│   ├── layout/               # Header, Layout, Card, Top
│   ├── pages/                # Route-level page components
│   ├── contador/             # Live countdown component (seconds → years)
│   ├── SoundCloudPlayer/     # SoundCloud iframe wrapper
│   └── utilities/
│       └── WordByWordText.jsx  # Reveals text one word at a time
└── img/                      # Static images
```

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Install dependencies

```bash
npm install
```

### Run in development

```bash
npm start
```

Starts the React dev server and the Sass watcher in parallel. Open [http://localhost:3000/pandacode](http://localhost:3000/pandacode) in your browser.

### Run tests

```bash
npm test
```

### Build for production

```bash
npm run build
```

Compiles SCSS and bundles React into the `build/` folder.

### Deploy to GitHub Pages

```bash
npm run deploy
```

Runs the production build and pushes the `build/` folder to the `gh-pages` branch.

---

## Key Components

### `Contador`
A live ticking counter that accepts a `startDate` and a `type` prop:

| `type` | Output |
|---|---|
| `"complete"` | Total days + hours + minutes + seconds |
| `"years"` | Years + months + days + hours + minutes + seconds |
| `"moments"` | Total seconds as "N momentos" |

Updates every second via `setInterval`.

### `WordByWordText`
Reveals a string one word at a time with a configurable `delay` (ms) between words. Uses `Typography` from MUI for consistent text styling.

### `SoundCloudPlayer`
Wraps a SoundCloud embed iframe. Accepts `src`, `title`, `author`, `profile`, and `href` props. Autoplay is gated behind a user interaction to comply with browser autoplay policies.

---

## Scripts Reference

| Script | Description |
|---|---|
| `npm start` | Dev server + Sass watcher (parallel) |
| `npm run build` | Production build (Sass + React) |
| `npm run deploy` | Build + push to GitHub Pages |
| `npm test` | Run Jest test suite |
| `npm run sass` | One-off Sass compile |
| `npm run sass:watch` | Sass compile in watch mode |
