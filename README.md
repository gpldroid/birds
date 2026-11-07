# Avian World

An English-language bird encyclopedia and article publication platform built with Astro SSG, TypeScript, Astro Content Collections, Markdown/MDX, Tailwind CSS and GitHub Pages.

## Stack
- Astro (static output) and TypeScript
- Astro Content Collections with strict Zod frontmatter validation
- Tailwind CSS v4 and @tailwindcss/typography
- GitHub Actions deployment to GitHub Pages

## Requirements
Node.js 22+ and npm.

## Development
```bash
git clone https://github.com/gpldroid/birds.git
cd birds
npm install
npm run dev
```

## Checks and build
```bash
npm run check
npm run build
npm run preview
```
The generated website is in `dist/`.

## Structure
```text
bird-website/
├── .github/workflows/deploy.yml
├── public/favicon.ico
├── public/images/
├── src/components/{Header,Footer,ArticleCard,SEO}.astro
├── src/layouts/{BaseLayout,BlogPostLayout}.astro
├── src/pages/index.astro
├── src/pages/about.astro
├── src/pages/categories/[slug].astro
├── src/pages/blog/[...slug].astro
├── src/content/config.ts
├── src/content/blog/
├── src/content.config.ts
├── src/styles/global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

Astro loads the collection registry from `src/content.config.ts`; the collection schema and definition are kept in `src/content/config.ts`.

## Add an article
Create a Markdown or MDX file in `src/content/blog/`. The filename becomes its URL slug.

```md
---
title: "Peregrine Falcon: A Master of the Sky"
description: "Discover the peregrine falcon, its flight adaptations, habitat and conservation story."
category: "Bird Species"
categorySlug: "bird-species"
publishedAt: 2026-11-07
author: "Avian World Editorial Team"
cover: "https://example.com/peregrine.jpg"
featured: false
readTime: 6
tags: ["peregrine falcon", "raptors"]
---

Write your article in Markdown.
```

The strict schema validates required metadata and rejects malformed content during the build.

## GitHub Pages deployment
The workflow in `.github/workflows/deploy.yml` checks and builds the site, uploads `dist/`, then deploys it to GitHub Pages on pushes to `main`. In repository settings, select **Settings → Pages → Build and deployment → GitHub Actions**.

This repository is configured for `https://gpldroid.github.io/birds/` with site URL `https://gpldroid.github.io` and base path `/birds`.

## Contributing and license
Contributions are welcome. Verify species facts with reputable ornithological and conservation sources. The project is licensed under MIT; see [LICENSE](LICENSE).
