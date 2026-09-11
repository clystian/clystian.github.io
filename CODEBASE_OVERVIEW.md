# Codebase Overview

This document summarizes the structure and key points of the repository for newcomers. It mirrors the explanations previously provided in other conversations but is kept separate from the main `README.md`.

## Project Summary

- **Purpose**: Personal portfolio site built with [Astro](https://astro.build/) and Tailwind CSS.
- **Deployment**: Static site deployed to GitHub Pages via a workflow in `.github/workflows/`.
- **Data Source**: Personal data comes from `manfred.json`, which follows the Manfred MAC schema.

## Directory Layout

```
.
├── public/          # static assets, favicon, robots.txt, and optional CNAME
├── manfred.json     # portfolio content source in Manfred MAC format
├── src/
│   ├── components/  # Astro components for page sections
│   ├── pages/       # Site pages (index.astro)
│   └── styles/      # Tailwind CSS imports
├── tests/           # vitest tests
```

Configuration files:

- `astro.config.mjs` – Sets the site URL and adds the Tailwind plugin.
- `tsconfig.json` – Uses Astro's strict TypeScript configuration.
- `.github/workflows/deploy.yml` – GitHub Actions workflow that builds and deploys the site.

## Development Workflow

1. Install dependencies: `pnpm install`
2. Start a development server: `pnpm dev`
3. Run the Vitest smoke test: `pnpm test`
4. Build for production: `pnpm build`

Pushing changes to `main` runs the deployment workflow and publishes the `dist/` directory to GitHub Pages. The workflow can also be started manually.

## Component Structure

`src/pages/index.astro` assembles the main page by importing components:

```astro
import "../styles/global.css";
import Header from "../components/Header.astro";
import Hero from "../components/Hero.astro";
import About from "../components/About.astro";
import Experience from "../components/Experience.astro";
import Education from "../components/Education.astro";
import Projects from "../components/Projects.astro";
import Skills from "../components/Skills.astro";
import Contact from "../components/Contact.astro";
import Footer from "../components/Footer.astro";
```

Each component primarily contains HTML with Tailwind classes and reads the root-level `manfred.json` data where appropriate.

## Key Points

- **Data** – The root-level `manfred.json` stores the content for each page section.
- **Tailwind** – No custom `tailwind.config.js` is provided; Tailwind CSS 4 is integrated through `@tailwindcss/vite`.
- **Static Assets** – Images in `public/` are copied directly to the final build.
- **Testing** – `tests/site.test.ts` builds the site, starts the Astro preview server, and checks that the home page responds successfully.
- **TypeScript** – Strict settings are enforced through Astro's strict tsconfig.

## Suggestions for Further Exploration

- Learn more about Astro's component syntax and features like partial hydration.
- Consider adding a custom `tailwind.config.js` if you need to extend the theme.
- Explore using Markdown/MDX to manage content if `manfred.json` becomes too large.
- Expand the test suite or use an end-to-end testing tool if the site grows.

