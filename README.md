# Portfolio Framework (Astro + Manfred)

[![Build & Deploy](https://github.com/clystian/clystian.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/clystian/clystian.github.io/actions)

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=clystian&layout=compact&theme=midnight-purple)](https://github.com/anuraghazra/github-readme-stats)

A high-performance, schema-driven portfolio generated from a single JSON source.

**Live at:** [clystian.ninja](https://clystian.ninja) | [clystian.github.io](https://clystian.github.io)

---

## 🏗 Architecture & Tech Stack

- **Framework:** [Astro 4.x](https://astro.build/) (SSG)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Package Manager:** [pnpm](https://pnpm.io/)
- **Data Schema:** [Manfred MAC](https://github.com/getmanfred/mac) (`src/data/manfred.json`)

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

### Build & Validation

```bash
# Validates types and builds the static site to /dist
pnpm run build

# Execute Playwright/Vitest suite
pnpm test
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
    

## 📄 License

The CVs included in this repository contain my personal and professional data, and they can't be automatically processed without my explicit permission according to the [GDPR](https://gdpr-info.eu/) (General Data Protection Regulation).

The [MAC format](https://github.com/getmanfred/mac) is free and open-source software licensed and distributed under the [Creative Commons Attribution Share Alike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/) (CC BY-SA 4.0 International).

