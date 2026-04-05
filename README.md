# Zeo's Portfolio Page

Personal CV / landing page for Zoárd Manó Csoltai, built with Astro and deployed on Vercel.

## Current Shape

- Two-column desktop homepage with a sticky hero and scrolling content rail
- Mobile-friendly single-column layout
- Native writing system powered by Astro content collections
- Markdown/MDX support for technical posts and case studies
- Shared site content and metadata driven from `src/config/index.ts`
- Custom styling, motion, and prose treatment in `src/styles/global.css`

## Project Structure

- `src/pages/index.astro`
  Homepage
- `src/pages/writing/index.astro`
  Writing index
- `src/pages/writing/[slug].astro`
  Writing article route
- `src/content/writing/`
  Native Markdown/MDX posts
- `src/config/index.ts`
  Site metadata and homepage content
- `src/styles/global.css`
  Theme tokens, layout polish, motion, prose, and component effects

## Writing Workflow

Add new posts under `src/content/writing/` as `.md` or `.mdx` files with frontmatter.

Example:

```md
---
title: "Article Title"
description: "Short summary for cards and metadata."
published: 2026-04-05
tags: ["Identity", "Automation"]
featured: true
draft: false
---
```

Posts marked `featured: true` can be surfaced on the homepage.

## Commands

| Command        | Action                                       |
| :------------- | :------------------------------------------- |
| `pnpm install` | Install dependencies                         |
| `pnpm dev`     | Start local dev server at `localhost:4321`   |
| `pnpm build`   | Build production output to `./dist/`         |
| `pnpm preview` | Preview the built site locally               |

## Notes

- The site is intended to stay lightweight and Vercel-friendly.
- Global CSS is imported from `src/layouts/Layout.astro`, so all routes share the same styling.
- If `pnpm preview` looks stale, run `pnpm build` first and restart preview.
