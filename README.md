
## Overview

This is a React 19 + Vite powered single‑page application for showcasing gaming related featured content, recommendations, and latest news. Layout components (Navbar, Sidebar, Footer) wrap dynamic card sections (Feature, Recommendation, Latest News). Tailwind CSS (v4) powers utility styling.

> NOTE: This project currently uses JavaScript (no TypeScript). ESLint is configured for React 19 + hooks.

## Tech Stack

- React 19 (Concurrent features ready)
- Vite 7 (Fast dev server + build)
- Tailwind CSS 4 (via `@tailwindcss/vite` plugin)
- ESLint 9 (React + hooks + refresh rules)

## Features

- Hero / Feature section with multiple card styles (Bento style + small cards)
- Recommendation section with horizontally structured cards
- Latest news modules (`LatestNews`, `LatestNew2`, etc.)
- Sidebar layout for extra highlight / trending content
- Reusable card components (`Card`, `FeatureCard`, `SmallCard`, etc.)
- Centralized data source in `src/data.js`
- Footer & Navbar shells (logo slot supported)
- Image assets served from `public/`

## Project Structure

```
frontend/
├─ index.html           # Entry HTML (includes optional static header w/ logo)
├─ public/              # Static assets (served at /)
│  ├─ logo.png
│  └─ *.jpg / *.png
├─ src/
│  ├─ main.jsx          # React entry (mounts <App />)
│  ├─ App.jsx           # Root component composition
│  ├─ index.css         # Tailwind + global styles
│  ├─ data.js           # Sample content data objects
│  └─ Components/
│     ├─ Navbar.jsx
│     ├─ Footer/Footer.jsx
│     ├─ Feature/       # Feature section + card variants
│     ├─ Recommendation/ # Recommendation + latest news + sidebar
│     └─ ...other UI parts
└─ package.json
```

## Quick Start

Prerequisites: Node.js 18+ (LTS recommended) & npm (comes with Node).

Install dependencies:

```powershell
npm install
```

Run development server (hot reload):

```powershell
npm run dev
```

Build for production:

```powershell
npm run build
```

Preview production build locally:

```powershell
npm run preview
```

## Adding / Using Images

Place image files in `public/`. Reference them with an absolute path beginning with `/`:

```jsx
<img src="/logo.png" alt="Atom Gaming Logo" />
<img src="/latest1.jpg" alt="Latest Article" />
```

If you prefer bundling via imports (e.g., for optimization), move images into `src/assets/` and import:

```jsx
import banner from '../assets/banner.png';
<img src={banner} alt="Banner" />
```

## Customizing

1. Logo: Replace `public/logo.png` or edit the `<header>` block in `index.html` / add inside `Navbar.jsx`.
2. Colors & spacing: Extend Tailwind config (Tailwind v4 inline plugin config if needed) or add custom classes in `index.css`.
3. Data: Modify / extend objects in `src/data.js` for cards & news.
4. Components: Duplicate an existing card component (e.g., `FeatureCard.jsx`) to create variants.
5. Layout: Edit `App.jsx` to change section order or remove modules.

## Environment Variables

No environment variables are required yet. If you add API calls later, create a `.env` file and access with `import.meta.env` (Vite standard). Example:

```
VITE_API_BASE_URL=https://api.example.com
```

Then:

```js
const base = import.meta.env.VITE_API_BASE_URL;
```

## Linting

Run ESLint:

```powershell
npm run lint
```

Fix issues (add `--fix` manually if desired):

```powershell
npm run lint -- --fix
```

## Deployment

1. Run `npm run build` (outputs to `dist/`).
2. Deploy `dist/` folder to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.).
3. Ensure correct base path if using a subdirectory (configure `base` in `vite.config.js`).

## Suggested Next Improvements

- Convert to TypeScript for stronger typing.
- Add routing (React Router) for article detail pages.
- Implement a real data source (fetch from API) with loading states.
- Add unit tests (Vitest + React Testing Library) for card components.
- Dark / light theme toggle.

## Contributing

Fork, create a feature branch, commit changes, open a pull request. Keep components small & composable. Run lint before submitting.

## License

Add your chosen license (e.g., MIT) here. (Create a `LICENSE` file.)

---

Made with React + Vite ⚡
