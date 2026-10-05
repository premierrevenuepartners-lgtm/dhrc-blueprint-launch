# DHRC Master Blueprint 3.0 Launch Website

This repository contains a public-facing DHRC website prototype built for a free-to-start launch path and GitHub-friendly deployment workflow.

## What is included

- Public landing page and structured sections for mission, programs, approach, resources, and contact
- Content managed from a single editable JSON file
- Responsive design suitable for mobile and desktop
- Deployment-ready Vite project for GitHub + static hosting
- Clear placeholders so sensitive information is not exposed in public files

## Tech stack

- React
- Vite
- Static hosting friendly

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

## Edit the site content

Update `src/data/siteContent.json` for:
- hero text
- mission/organisation messaging
- program details
- resources and FAQ content
- contact form label text

## Deployment

### Cloudflare Pages
1. Push the repo to GitHub.
2. Create a Cloudflare Pages project and connect the repository.
3. Use:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Publish.

### Netlify or similar static host
Use the same build command and output directory: `dist`.

## Important safeguards

- Do not place confidential survivor information in public source files.
- Do not publish unverified claims, statistics, partner names, or sensitive details.
- Treat secure case management, AI workflows, WhatsApp automation, and payment systems as later-phase features.

## Domain setup

Once deployed, point your `.co.za` domain to the static host using the provider’s DNS instructions.

## Notes

This project is intentionally the public launch foundation only. It can be expanded later with a CMS, backend, or secure systems when those are ready.
