# Personal Portfolio (Astro)

A clean, fast, content-driven portfolio built with Astro, Tailwind CSS v4, and TypeScript.

This repository powers a single-page homepage plus a full projects section with dynamic project pages generated from Markdown/MDX content.

## Features

- Single-source personal info and section content in `src/config.ts`
- Project pages generated from `src/content/projects/*.{md,mdx}`
- Math support in Markdown/MDX via `remark-math` + `rehype-katex`
- Reusable Astro components for each section
- Static output, ideal for GitHub Pages / Netlify / Vercel

## Tech Stack

- [Astro](https://astro.build/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- TypeScript
- MDX (`@astrojs/mdx`)
- KaTeX (`remark-math`, `rehype-katex`, `katex`)

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Available Scripts

```bash
npm run dev      # Start local development server
npm run build    # Build static site to /dist
npm run preview  # Preview production build locally
```

## Content Model

Projects are defined in `src/content/projects/` and validated by `src/content.config.ts`.

Required frontmatter:

```yaml
title: "Project title"
description: "Short summary"
publishedAt: "2026-03-01"
skills:
  - "Astro"
  - "TypeScript"
```

Optional frontmatter:

- `coverImage`
- `coverImageAlt`
- `repoUrl`

Each file name becomes the project slug (e.g. `h-rssm.mdx` -> `/projects/h-rssm`).

## Customization

Edit `src/config.ts` to update:

- Name, title, description, accent color
- Social links
- About text
- Skills
- Experience
- Education

Sections render conditionally based on available data.

## Project Structure

```text
.
├── public/                 # Static assets (images, favicon, etc.)
├── src/
│   ├── components/         # UI sections and shared Astro components
│   ├── content/
│   │   └── projects/       # Markdown/MDX project entries
│   ├── pages/
│   │   ├── index.astro     # Homepage
│   │   └── projects/       # Projects list + [slug] pages
│   ├── styles/
│   │   └── global.css
│   ├── config.ts           # Portfolio content configuration
│   ├── content.config.ts   # Astro content collection schema
│   └── utils/
│       └── projects.ts     # Project sorting/helpers
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Deployment

This site builds to static files in `dist/`:

```bash
npm run build
```

Then deploy `dist/` on any static host:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

See Astro deployment guides: <https://docs.astro.build/en/guides/deploy/>

## License

MIT — see `LICENSE.md`.
