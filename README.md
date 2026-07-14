# Sergio Naranjo — Portfolio

Personal portfolio for [Sergio Naranjo](mailto:sergionaranjopuentes@gmail.com), a software engineer based in Manizales, Colombia. Built with Astro and Tailwind CSS.

## Features

- Bilingual site (English / Spanish) via Astro i18n
- Light / dark theme toggle
- Project showcase with dedicated detail pages
- Tech stack, experience, bio, and contact sections

## Tech stack

- [Astro](https://astro.build) 7
- [Tailwind CSS](https://tailwindcss.com) 4
- TypeScript
- [pnpm](https://pnpm.io)

## Project structure

```text
/
├── public/                 # Static assets (avatars, screenshots, icons)
├── src/
│   ├── components/         # UI primitives (Button, TechBadge, toggles, …)
│   ├── data/               # Project metadata
│   ├── layouts/            # Page layout
│   ├── lib/                # Utilities (tech map, celebrate, cn helpers)
│   ├── pages/
│   │   ├── index.astro     # Home (EN)
│   │   ├── es/             # Spanish routes
│   │   └── projects/       # Project detail pages
│   ├── sections/           # Home sections (Bio, Experience, TopProjects, …)
│   ├── constants.ts
│   ├── i18n.ts             # Translations
│   └── styles/
└── package.json
```

## Getting started

**Requirements:** Node.js `>= 22.12.0` and pnpm.

```sh
pnpm install
pnpm dev
```

The site runs at `http://localhost:4321`.

| Command          | Action                                      |
| :--------------- | :------------------------------------------ |
| `pnpm install`   | Install dependencies                        |
| `pnpm dev`       | Start local dev server                      |
| `pnpm build`     | Build production site to `./dist/`          |
| `pnpm preview`   | Preview the production build locally        |

## i18n

- Default locale: `en` (no URL prefix)
- Spanish: `/es` and `/es/projects/[slug]`

Copy lives in `src/i18n.ts`. Project metadata (slug, stack, links) lives in `src/data/projects.ts`.
