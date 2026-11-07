# BIRDS — Bird Encyclopedia & Journal

BIRDS is an open-source, bilingual (English and Arabic) bird encyclopedia and editorial website. It brings species profiles, habitat and diet information, conservation status references, and educational articles together in a fast, responsive static website.

The project is intentionally simple: content lives in Markdown files, pages are generated at build time, and there is no database, account system, admin dashboard, or separate backend.

## Features

- **Bilingual experience:** English routes at `/` and Arabic routes at `/ar/`, including language switching and RTL layout.
- **Bird directory:** browse species by category, search by common or scientific name, and open a dedicated profile for each bird.
- **Species profiles:** common and scientific names, family, habitat, diet, image, and conservation status with an external reference.
- **Articles:** educational content about bird care, migration, behaviour, birds of prey, and ornithology.
- **Search and filtering:** search birds and articles, and filter the directory by bird group.
- **Responsive design:** layouts for mobile, tablet, and desktop, plus light and dark themes.
- **SEO foundations:** page titles, descriptions, canonical URLs, Open Graph and Twitter metadata.
- **Static output:** deploy the generated `dist/` directory to any static host.
- **Continuous integration:** GitHub Actions runs the project check and production build on pushes and pull requests.

## Technology

- [Astro 5](https://astro.build/) — static-first web framework
- TypeScript — typed content schemas and browser scripts
- Astro Content Collections — validated Markdown content
- CSS — responsive styling, RTL support, and theme variables
- GitHub Actions — automated validation and build

## Getting started

### Requirements

- Node.js 22 or newer
- npm

### Install and run

```bash
git clone https://github.com/gpldroid/birds.git
cd birds
npm install
npm run dev
```

Astro prints the local development URL, usually `http://localhost:4321`.

### Validate and build

```bash
npm run check
npm run build
npm run preview
```

The production website is generated in `dist/`.

## Project structure

```text
.github/workflows/       GitHub Actions CI
public/                  Static assets and favicon
src/
  components/            Header, Footer, cards, SEO and search
  content/
    blog/                English and Arabic Markdown articles
    birds/               Bird species profiles
  layouts/               Base and article layouts
  pages/
    index.astro          English homepage
    birds/               Bird directory and species profiles
    articles/            Article listing and article pages
    categories/          Article category pages
    search/              Unified English search
    ar/                  Arabic homepage and localized sections
  styles/global.css      Responsive, theme and RTL styles
astro.config.mjs         Astro configuration
package.json             Scripts and dependencies
README.md                Project documentation
CONTRIBUTING.md          Contribution guidelines
LICENSE                  MIT license
```

## Add a bird profile

Create a Markdown file in `src/content/birds/`. The filename becomes the species URL slug.

```md
---
name: "Example Bird"
nameAr: "اسم الطائر"
scientificName: "Example species"
family: "Example family"
habitat: "Describe its natural habitat"
habitatAr: "وصف الموطن الطبيعي"
diet: "Describe its diet"
dietAr: "وصف الغذاء"
image: "https://example.com/bird-photo.jpg"
summary: "A short English species summary."
summaryAr: "ملخص قصير باللغة العربية."
category: "nature"
conservationStatus: "Least Concern"
conservationSource: "https://www.iucnredlist.org/"
popular: false
---

Add a longer species description here.
```

Supported directory categories: `nature`, `migratory`, `ornamental`, `raptors`, `waterbirds`, and `garden`.

Use a reliable source for conservation information. The status shown by the website is the value recorded in the profile; it is not an automated live IUCN lookup.

## Add an article

Create a Markdown file in `src/content/blog/` for English, or in `src/content/blog/ar/` for Arabic.

```md
---
title: "Article title"
description: "A concise description of at least twenty characters."
category: "Garden Birds"
categorySlug: "garden-birds"
publishedAt: 2026-11-01
author: "BIRDS Editorial Team"
cover: "https://example.com/article-cover.jpg"
featured: false
readTime: 5
tags: ["birds", "nature"]
language: "en"
---

Write the article using Markdown headings, paragraphs, lists and blockquotes.
```

For Arabic articles, set `language: "ar"` and place the file in `src/content/blog/ar/`. English and Arabic articles with matching filenames are presented as localized versions by the language switcher.

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

Typical contributions include:
- Adding or improving bird species profiles.
- Writing or translating educational articles.
- Improving accessibility, responsive behaviour, and RTL support.
- Fixing bugs and improving documentation.

Please verify factual claims and cite reputable references, especially for conservation status, range, diet, and taxonomy.

## Deployment

The GitHub Actions workflow validates and builds the site on pushes and pull requests to `main`. Deploy the generated `dist/` directory using a static hosting provider such as Cloudflare Pages, Netlify, or Vercel. No server runtime or database is needed.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE).
