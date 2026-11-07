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


## Content management with Decap CMS

The editorial interface is available at `/birds/admin/` after deployment. It manages two Git-backed collections:

- **Articles** → `src/content/blog/`
- **Bird Encyclopedia** → `src/content/birds/`

Images uploaded through the CMS are committed to `public/images/uploads/` and served from `/birds/images/uploads/`. The Astro Zod schemas validate CMS-created frontmatter during every build.

### Local CMS development

Run the Astro site and Decap's local proxy in two terminals:

```bash
npm run dev
npx decap-server
```

Open `http://localhost:4321/birds/admin/` (Astro's base path is `/birds`). With `local_backend: true`, the local proxy writes to your working tree. Review the Markdown changes and use Git normally.

### Production GitHub authentication

GitHub Pages serves static files and does not provide the OAuth server required by Decap's GitHub backend. Do not put a GitHub OAuth client secret or personal access token in `public/`, `config.yml`, browser JavaScript, or any committed file.

To enable production sign-in:

1. Create a GitHub OAuth App for the Avian World CMS. Set its callback URL to the callback endpoint of your OAuth proxy.
2. Deploy a small OAuth proxy (for example, the official Decap Cloudflare Worker template) on a separate Worker domain.
3. Store the OAuth client secret as a Worker secret, never in this repository.
4. Uncomment and set `backend.base_url` and `backend.auth_endpoint` in `public/admin/config.yml` to the deployed proxy URL and its auth path.
5. Keep repository write access restricted to trusted editors.

Until these OAuth values are configured, the production admin page is installed but GitHub sign-in is not active. Local editing remains available through `npx decap-server`.

See the [Decap GitHub backend guide](https://decapcms.org/docs/github-backend/) and [backend overview](https://decapcms.org/docs/backends-overview/).
