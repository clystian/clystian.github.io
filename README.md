# Portfolio Framework (Astro + Manfred)

[![Build & Deploy](https://github.com/clystian/clystian.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/clystian/clystian.github.io/actions)

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=clystian&layout=compact&theme=midnight-purple)](https://github.com/anuraghazra/github-readme-stats)

A high-performance, schema-driven portfolio generated from a single JSON source.

**Live at:** [clystian.ninja](https://clystian.ninja) | [clystian.github.io](https://clystian.github.io)

---

## 🏗 Architecture & Tech Stack

- **Framework:** [Astro 7.3.2](https://astro.build/) (SSG)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) via the Vite plugin
- **Package Manager:** [pnpm](https://pnpm.io/)
- **Code Quality:** [Biome 2.5.13](https://biomejs.dev/) (linting & formatting)
- **Data Schema:** [Manfred MAC](https://github.com/getmanfred/mac) (`manfred.json`)

### Why Manfred?
The site implements a **Data-First** approach. By using the Manfred MAC schema, the resume data is decoupled from the UI logic, allowing for easy updates and interoperability with other HR tools.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 24 or a current LTS release
- pnpm 12 (`corepack enable pnpm`)

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
# Builds the static site to /dist
pnpm build

# Run the Vitest smoke test
pnpm test

# Or run both:
pnpm test && pnpm build
```

---

## 🛠 Content Management

To update the portfolio content, modify the source of truth:

1. Edit the root-level `manfred.json` source file.
    
2. The UI components reactively map the JSON nodes to Tailwind-styled components.
    
3. Commit changes to `main` to trigger the GitHub Actions deployment.
    

---

## 📦 Deployment

This repository uses **GitHub Actions** for automated deployment.

- **Branch:** `main` triggers the build.
    
- **Environment:** GitHub Pages.
    
- **Custom Domain:** Optional. Add a `public/CNAME` file containing the domain name when configuring a custom GitHub Pages domain.

### Deployment Security

The deploy workflow implements security best practices:
- **Least privilege permissions** — Job-level permission scoping
- **Concurrency control** — Only latest commit deploys; older runs cancelled
- **Artifact validation** — Ensures build dist directory exists before upload

See `.github/workflows/deploy.yml` for full CI/CD configuration.

---

## 🔒 Security

### Current Status
- ✅ `astro` is on 7.3.2.
- ✅ `js-yaml` is forced to patched version 4.3.2 through the pnpm workspace override.
- ✅ `pnpm audit` reports zero known vulnerabilities in the current dependency tree.

Run `pnpm audit` to verify security status.

### Code Quality
- All source code checked by **Biome** linter (run `pnpm check`)
- Automatic formatting on save (enable [Biome VS Code extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome))
- Type-safe TypeScript with strict mode enabled

---

## 📄 License

The CVs included in this repository contain my personal and professional data, and they can't be automatically processed without my explicit permission according to the [GDPR](https://gdpr-info.eu/) (General Data Protection Regulation).

The [MAC format](https://github.com/getmanfred/mac) is free and open-source software licensed and distributed under the [Creative Commons Attribution Share Alike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/) (CC BY-SA 4.0 International).

