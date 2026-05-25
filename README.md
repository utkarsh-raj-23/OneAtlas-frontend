# OneAtlas Frontend

AI-native app builder frontend. Built with Next.js 15, TypeScript, TailwindCSS.

## Setup (under 5 commands)

git clone https://github.com/utkarsh-raj-23/oneatlas-frontend.git
cd oneatlas-frontend
npm install
npm run dev
# Open http://localhost:3000

## Pages

- `/` — Landing page with hero, how it works, templates, pricing, FAQ, footer
- `/templates` — Template grid with category + complexity filters, URL sync
- `/builder` — Three-panel builder shell with component tree, canvas, properties
- `/login` — Auth page
- `/dashboard` — App dashboard

## Architecture Decision

Template data lives in `/src/data/templates.ts` — never hardcoded in JSX.
Builder state managed via Zustand in `/src/store/builderStore.ts`.
All types shared from `/src/types/index.ts`.

## Live URL

https://oneatlas-frontend.vercel.app