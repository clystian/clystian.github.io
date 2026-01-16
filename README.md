# Portfolio Framework (Astro + Manfred)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
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

This project is licensed under the **MIT License**. You are free to use the code, but please replace the `manfred.json` data with your own information.
