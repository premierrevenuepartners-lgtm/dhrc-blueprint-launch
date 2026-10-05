# DHRC Master Blueprint 3.0 Launch Website

This repository contains a public-facing DHRC website prototype designed to be:
- launch-ready for a free hosting workflow
- easy to edit through a content file
- suitable for GitHub + Cloudflare Pages or similar static hosting
- safe for public publishing without exposing sensitive or confidential data

## Project structure

- `src/data/siteContent.json` — main editable website content
- `src/App.jsx` — layout and sections
- `src/styles.css` — design and responsive styling
- `public/favicon.svg` — branding icon

## Quick start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Editing the website content

Update the text in `src/data/siteContent.json` to change:
- hero messaging
- about copy
- program information
- resource links
- contact CTA text

This keeps the project CMS-friendly and simple to maintain without needing a backend for the initial public launch.

## Deployment options

### Cloudflare Pages
1. Push this repository to GitHub.
2. In Cloudflare Pages, select "Create a project" and connect the repo.
3. Use the build settings:
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
4. Publish.

### Netlify or similar static host
Use the same build command and output directory: `dist`.

## Important safeguards

- Do not place confidential survivor information in public source files.
- Do not publish unverified claims, statistics, names, or sensitive partnership data.
- Treat secure case management and AI features as optional later phases, not part of the initial public launch.

## Domain setup

After deployment, connect your `.co.za` domain through your host provider and configure DNS records as instructed by the platform.

## Notes

This is intentionally a static starter website that can be expanded with a CMS or backend later. It keeps the public launch simple, editable, and affordable.
