# Portfolio Framework (Astro + Manfred)

[![Build & Deploy](https://github.com/clystian/clystian.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/clystian/clystian.github.io/actions)

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=clystian&layout=compact&theme=midnight-purple)](https://github.com/anuraghazra/github-readme-stats)

A high-performance, schema-driven portfolio generated from a single JSON source.

**Live at:** [clystian.ninja](https://clystian.ninja) | [clystian.github.io](https://clystian.github.io)

---

## 🏗 Architecture & Tech Stack

- **Framework:** [Astro 6.4.8](https://astro.build/) (SSG)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Package Manager:** [pnpm](https://pnpm.io/)
- **Code Quality:** [Biome 2.5.0](https://biomejs.dev/) (linting & formatting)
- **Data Schema:** [Manfred MAC](https://github.com/getmanfred/mac) (`manfred.json`)

### Why Manfred?
The site implements a **Data-First** approach. By using the Manfred MAC schema, the resume data is decoupled from the UI logic, allowing for easy updates and interoperability with other HR tools.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (Latest LTS)
- pnpm `corepack enable pnpm`

### Installation
```bash
pnpm install
```

### Local Development

```bash
pnpm dev
```

### Code Quality & Linting

This project uses **Biome** — a fast, unified linter and formatter (Rust-based).

```bash
# Check formatting & linting
pnpm check

# Auto-fix formatting issues
pnpm format

# Run lint checks only
pnpm lint
```

### Build & Validation

```bash
# Validates types and builds the static site to /dist
pnpm run build

# Execute Playwright/Vitest suite
pnpm test

# Or run both:
pnpm test && pnpm build
```

---

## 🛠 Content Management

To update the portfolio content, modify the source of truth:

1. Edit `public/manfred.json` (or `src/data/manfred.json` depending on your setup).
    
2. The UI components reactively map the JSON nodes to Tailwind-styled components.
    
3. Commit changes to `main` to trigger the GitHub Actions deployment.
    

---

## 📦 Deployment

This repository uses **GitHub Actions** for automated deployment.

- **Branch:** `main` triggers the build.
    
- **Environment:** GitHub Pages.
    
- **Custom Domain:** Configured via `CNAME` in the `public/` directory.

### Deployment Security

The deploy workflow implements security best practices:
- **Least privilege permissions** — Job-level permission scoping
- **Concurrency control** — Only latest commit deploys; older runs cancelled
- **Artifact validation** — Ensures build dist directory exists before upload

See `.github/workflows/deploy.yml` for full CI/CD configuration.

---

## 🔒 Security

### Recent Updates (June 2026)
- ✅ Upgraded `astro` to 6.4.8 (fixes XSS, SSRF, path traversal advisories)
- ✅ Upgraded `vitest` to 4.1.9
- ✅ Pinned `esbuild` to ^0.28.1 via `pnpm.overrides`
- ✅ Zero known vulnerabilities (as of 2026-06-17)

Run `pnpm audit` to verify security status.

### Code Quality
- All source code checked by **Biome** linter (run `pnpm check`)
- Automatic formatting on save (enable [Biome VS Code extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome))
- Type-safe TypeScript with strict mode enabled

---

## 📄 License

The CVs included in this repository contain my personal and professional data, and they can't be automatically processed without my explicit permission according to the [GDPR](https://gdpr-info.eu/) (General Data Protection Regulation).

The [MAC format](https://github.com/getmanfred/mac) is free and open-source software licensed and distributed under the [Creative Commons Attribution Share Alike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/) (CC BY-SA 4.0 International).

