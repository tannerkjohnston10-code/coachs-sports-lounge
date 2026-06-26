# Coach's Sports Lounge

A premium Next.js + TypeScript sports-media dashboard for coaches, fans, and staff-room operators. The app uses mock data today and is structured for future sports scores, news, user preference sync, and real-time updates.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui-compatible primitives
- lucide-react icons
- Static export for Cloudflare Pages

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

Run the full production check before deploying:

```bash
npm run check
```

This runs:

- `npm run lint`
- `npm run typecheck`
- `npm run build`

The production build writes a static export to `out/`.

## Cloudflare Pages Deployment

Create a Cloudflare Pages project connected to this repository.

Recommended settings:

- Framework preset: `Next.js`
- Node version: `20`
- Install command: `npm install`
- Build command: `npm run check`
- Build output directory: `out`

If you prefer faster deploys after CI already ran lint/type checks, use:

```bash
npm run build
```

Preview the static export locally after building:

```bash
npm run build
npm run preview
```

## Environment Variables

Copy `.env.example` to `.env.local` for local development.

```bash
cp .env.example .env.local
```

Cloudflare Pages variables to configure:

```bash
NEXT_PUBLIC_SITE_URL=https://your-project.pages.dev
NEXT_PUBLIC_SPORTS_API_BASE_URL=
NEXT_PUBLIC_SPORTS_API_KEY=
NEXT_PUBLIC_SPORTS_NEWS_API_BASE_URL=
NEXT_PUBLIC_SPORTS_NEWS_API_KEY=
NEXT_PUBLIC_USER_PREFERENCES_API_BASE_URL=
NEXT_PUBLIC_USER_PREFERENCES_API_KEY=
```

The API variables are placeholders for future integrations. The app currently ships with mock data, so API keys are not required for deployment.

## Routes

- `/`
- `/football`
- `/basketball`
- `/baseball`
- `/hockey`
- `/soccer`
- `/track`
- `/college-hub`
- `/transfer-portal`
- `/pro-hub`
- `/coaches-lounge`
- `/rankings`
- `/standings`
- `/calendar`
- `/settings`

## Production Notes

- `next.config.ts` uses `output: "export"` for Cloudflare Pages static hosting.
- Images are marked `unoptimized` for static export compatibility.
- `public/_headers` adds baseline security headers for Cloudflare Pages.
- `app/sitemap.ts`, `app/robots.ts`, and app metadata use `NEXT_PUBLIC_SITE_URL`.
- `public/favicon.svg`, `public/apple-touch-icon.svg`, and `public/manifest.webmanifest` are placeholder production assets.
