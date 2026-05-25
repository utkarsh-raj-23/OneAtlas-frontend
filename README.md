# OneAtlas Frontend

OneAtlas is an AI-native app builder frontend for generating, previewing, and customizing operational web apps from templates. The project includes the public marketing experience, template gallery, dashboard, and a responsive builder interface shell.

## Live Demo

https://one-atlas-frontend.vercel.app

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Zustand
- next-themes
- lucide-react

## Local Setup

```bash
git clone https://github.com/utkarsh-raj-23/oneatlas-frontend.git
cd oneatlas-frontend
npm install
npm run dev
```

Open http://localhost:3000.

## Available Scripts

```bash
npm run dev
npm run build
npm run lint
npm run start
```

## Pages

- `/` - Landing page with hero, product sections, templates, pricing, FAQ, and footer
- `/templates` - Responsive template gallery with search, category filters, complexity filters, and URL query sync
- `/templates/[id]` - Template preview page with mock generated app layout
- `/builder` - Three-panel builder shell with component tree, app canvas, properties panel, top bar, status bar, and prompt strip
- `/dashboard` - Mock app dashboard after clicking Start Building
- `/login` - Authentication UI shell
- `/docs` - Documentation landing page
- `/blog` - Blog listing page
- `/support` - Support page
- `/enterprise` - Enterprise product page
- `/security` - Security and compliance page
- `/pricing` - Pricing page

## Key Features

- Responsive mega navigation with desktop dropdowns and mobile menu
- Data-driven template cards from `src/data/templates.ts`
- Template filters synced to URL query parameters
- Real preview routes for each template
- Responsive builder shell with independent left and right panels
- Mock canvas that renders an operational CRM-style app instead of a blank placeholder
- Dark mode support through CSS variables and `next-themes`
- Mobile layouts tested for the main public pages, templates, and builder

## Architecture Notes

Template and pricing content live in data files under `src/data`, keeping page JSX focused on layout and interactions. Builder UI state is managed with Zustand in `src/store/builderStore.ts`, which keeps panel state, selected component state, app name, schema version, and connection status in one small store. Shared types live in `src/types/index.ts` so templates, pricing plans, and builder components stay consistent across pages.

## Deployment

The app is deployed on Vercel:

https://one-atlas-frontend.vercel.app

No environment variables are required for the current frontend-only implementation.
