# CatPlay Website

Separated marketing site for CatPlay.

## Stack

- Astro static site
- Shared layout and components
- Static deployment target for `catplay.app`
- Waitlist submissions posted to a Convex HTTP endpoint

## Structure

- `src/pages/index.astro` landing page
- `src/pages/how-it-works.astro` secondary marketing page
- `src/pages/privacy.astro` privacy placeholder
- `src/pages/imprint.astro` imprint placeholder
- `src/components/*` shared header, footer, and waitlist form

## Local development

```bash
npm install
npm run dev
```

Set `PUBLIC_WAITLIST_ENDPOINT` in `.env` to your Convex HTTP action URL, for example:

```bash
PUBLIC_WAITLIST_ENDPOINT=https://your-deployment.convex.site/waitlist
```

## Deployment

- Hosting target: Vercel
- Production domain: `catplay.app`
- Required Vercel environment variable: `PUBLIC_WAITLIST_ENDPOINT`

Recommended Vercel settings:

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`

After the project is connected in Vercel:

1. Add `catplay.app` and `www.catplay.app` as domains.
2. Set `PUBLIC_WAITLIST_ENDPOINT` in Production.
3. Point the domain DNS to Vercel using the records shown in the Vercel domain setup.

## Deployment shape

- `cat-play/` remains the Expo mobile app
- `cat-play-website/` is the standalone website
- Both codebases can share the same Convex backend without sharing frontend runtime or routing
