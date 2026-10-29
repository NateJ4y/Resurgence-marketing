# Resurgence Marketing

A responsive, multi-page marketing website built with React, TypeScript, Vite, Tailwind CSS and Framer Motion.

## UX architecture

- **Home** — brand introduction and route to the right next step
- **Services** — service overview and dedicated detail routes for key offerings
- **Work** — campaign formats and project portfolio structure
- **About** — positioning, principles and delivery approach
- **How we work** — transparent campaign process
- **Contact** — campaign enquiry form and direct contact options

The navigation is route-based with React Router; this is intentionally not a one-page website. Shared navigation and footer remain consistent while each page has its own job and content.

## Run locally

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deployment

The project is ready for a standard Vercel deployment. Use the repository root as the project root, build command `npm run build`, and output directory `dist`. Vercel's Vite framework preset can detect these automatically.

## Content and assets

The visual portfolio currently presents **campaign formats and illustrative editorial photography**, not verified client case studies. Replace these with approved Resurgence campaign assets, client permissions, accurate project descriptions and verified outcomes before publishing. No campaign statistics or client endorsements are fabricated.

## Contact form

The enquiry form opens a pre-addressed email draft to admin@resurgencemarketing.co.za. It does not submit to a server or store personal information. For production lead capture, connect a form backend/CRM and publish an appropriate privacy notice.

## Quality checklist

- Semantic landmarks and visible keyboard focus
- Mobile navigation with accessible expanded state
- Reduced-motion preference support
- Responsive layouts and descriptive image alternatives
- Page titles and baseline metadata
- No fabricated testimonials, client logos or performance metrics
