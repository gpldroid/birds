# Contributing to Avian World

Thank you for considering a contribution. Avian World is an open-source, English-language bird encyclopedia and article publication platform. Contributions should improve factual accuracy, accessibility, usability or educational value.

## Ways to contribute

- Add or improve a bird species profile.
- Write an educational article about birds, habitats, behaviour or conservation.
- Improve responsive layouts, accessibility, semantic HTML or SEO.
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

- Write content in English.
- Follow the strict Zod schema in `src/content/config.ts`.
- Add Markdown or MDX files under `src/content/blog/`.
- Use original writing and avoid unsupported scientific claims.
- Verify taxonomy, distribution, habitat, diet and conservation information with reputable ornithological or conservation sources.
- Use images that you have permission to publish and provide meaningful alt text through the article title and image context.
- Do not present a conservation status as live data unless the article clearly cites a current source.

## Pull requests

- Keep each pull request focused and explain the user-facing change.
- Include screenshots for visual changes where useful.
- Mention the commands you ran and whether they passed.
- Preserve the static-first architecture; do not add a database, backend service, account system or admin dashboard without first discussing the architectural impact.

By contributing, you agree that your contributions are provided under the repository's MIT License.
