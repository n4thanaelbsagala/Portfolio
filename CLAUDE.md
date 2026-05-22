# CLAUDE.md

## Project overview

Personal portfolio — Next.js 14 App Router, TypeScript strict, Tailwind CSS, Sanity v3 CMS, Resend for email.

## Commands

```bash
npm run dev     # Dev server on :3000
npm run build   # Production build (must pass before merging)
npm run lint    # ESLint
npm test        # Jest
```

## Architecture

- **Route groups** — `app/(main)/` has Navbar + Footer via its own layout; `app/studio/` renders Sanity Studio without site chrome
- **Data fetching** — all CMS fetches happen in Server Components via `@/sanity/lib/client.ts`; no client-side SWR or React Query
- **State** — React built-in only (`useState`, `useContext`). No Redux, Zustand, etc.
- **Styling** — Tailwind only; no CSS modules, no styled-components. Accent colour is `#4F46E5` (Tailwind `indigo-600`)
- **Dark mode** — `next-themes` with `class` attribute strategy; toggle lives in `Navbar.tsx`

## Key files

| Path | Purpose |
|---|---|
| `lib/types.ts` | All shared TS types + `Category` enum |
| `sanity/lib/queries.ts` | All GROQ queries |
| `sanity/lib/image.ts` | `urlFor()` helper for `@sanity/image-url` |
| `sanity/schemaTypes/project.ts` | The single Sanity document type |
| `app/api/contact/route.ts` | POST handler; validates input, rate-limits, sends via Resend |

## Adding a new page

1. Create `app/(main)/your-route/page.tsx`
2. Export a `metadata` object for SEO
3. Add the link to `components/layout/Navbar.tsx` `navLinks` array and `Footer.tsx` `footerLinks` array

## Environment variables

All listed in `.env.local`. `SANITY_API_TOKEN` is server-side only (no `NEXT_PUBLIC_` prefix). Never commit `.env.local`.

## Sanity content

- Add/edit projects at `/studio`
- Mark `featured: true` on a project to include it in the homepage grid
- `revalidate = 60` on `/projects` page; individual project pages use `generateStaticParams` + `revalidate`

## Testing

Tests live in `__tests__/` or co-located as `*.test.tsx`. Run with `npm test`. Uses Jest + React Testing Library + `jest-environment-jsdom`.
