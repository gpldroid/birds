# BIRDS — Bird Journal

A lightweight static editorial website about birds, built with Astro 5 and Markdown content collections.

## Requirements
- Node.js 22 or newer
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Astro (usually http://localhost:4321).

## Production build
```bash
npm run check
npm run build
npm run preview
```
The generated static website is written to `dist/`.

## Add an article
Create a Markdown file inside `src/content/blog/`, for example `my-new-story.md`:

```md
---
title: "Your article title"
description: "A useful summary of at least twenty characters."
category: "Garden Birds"
categorySlug: "garden-birds"
publishedAt: 2026-11-01
author: "BIRDS Editorial Team"
cover: "https://images.unsplash.com/photo-example"
featured: false
readTime: 5
tags: ["birds", "nature"]
---

Write your article in Markdown.
```

The article automatically appears in the article listing and its category page. Its URL is generated from the filename.

## Add a bird profile
Add a Markdown file to `src/content/birds/` with the fields defined in `src/content.config.ts`. Bird profiles are kept in a separate collection.

## Structure
- `src/components/`: reusable Astro components
- `src/layouts/`: shared page layouts
- `src/pages/`: file-based routes
- `src/content/blog/`: editorial articles
- `src/content/birds/`: bird reference entries
- `src/styles/global.css`: responsive global styling
- `.github/workflows/ci.yml`: automated validation and build

## Deployment
The GitHub Actions workflow validates and builds the site on pushes and pull requests to `main`. Deploy the generated `dist/` directory to Cloudflare Pages, Netlify or Vercel. No database or server runtime is required.