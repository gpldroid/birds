# Contributing to BIRDS

Thank you for considering a contribution. BIRDS is an open-source, bilingual bird encyclopedia and journal. Contributions should improve accuracy, accessibility, usability, or educational value.

## Ways to contribute

- Add a bird profile with reliable references.
- Write an educational article or translate an existing article into Arabic or English.
- Improve search, directory filters, responsive layouts, accessibility, or RTL support.
- Report reproducible bugs or suggest focused improvements.

## Development setup

1. Fork the repository.
2. Clone your fork and install dependencies:

   ```bash
   git clone https://github.com/YOUR-USERNAME/birds.git
   cd birds
   npm install
   npm run dev
   ```

3. Create a focused branch for your change.
4. Run validation before opening a pull request:

   ```bash
   npm run check
   npm run build
   ```

## Content standards

- Use the Astro content schemas in `src/content.config.ts`.
- Use clear, original writing and avoid unsupported claims.
- Include both English and Arabic metadata when practical.
- For conservation status, taxonomy, range, and other scientific claims, use reputable sources and include a source URL where the schema provides one.
- Do not present a conservation status as live data. It is the value recorded in the Markdown profile.
- Use images that you have permission to publish, and provide descriptive alt text through the content title/name.

## Pull requests

- Keep each pull request focused and explain the user-facing change.
- Include screenshots for visual changes where useful.
- Mention the commands you ran and whether they passed.
- Do not add a database, backend service, account system, or admin dashboard without first discussing the architectural impact in an issue.

By contributing, you agree that your contributions are provided under the repository's MIT License.
