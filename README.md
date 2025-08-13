Overview
This is a React 19 + Vite powered single‑page application for showcasing gaming related featured content, recommendations, and latest news. Layout components (Navbar, Sidebar, Footer) wrap dynamic card sections (Feature, Recommendation, Latest News). Tailwind CSS (v4) powers utility styling.

NOTE: This project currently uses JavaScript (no TypeScript). ESLint is configured for React 19 + hooks.

Tech Stack
React 19 (Concurrent features ready)
Vite 7 (Fast dev server + build)
Tailwind CSS 4 (via @tailwindcss/vite plugin)
ESLint 9 (React + hooks + refresh rules)
Features
Hero / Feature section with multiple card styles (Bento style + small cards)
Recommendation section with horizontally structured cards
Latest news modules (LatestNews, LatestNew2, etc.)
Sidebar layout for extra highlight / trending content
Reusable card components (Card, FeatureCard, SmallCard, etc.)
Centralized data source in src/data.js
Footer & Navbar shells (logo slot supported)
Image assets served from public/
