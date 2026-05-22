# Portfolio

Personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Sanity CMS. Projects are managed entirely through Sanity Studio — no code changes required to add, edit, or remove content.

## Tech Stack

- **Frontend** — Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion
- **CMS** — Sanity v3, embedded studio at `/studio`
- **Email** — Resend API for contact form
- **Deployment** — Vercel

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.local` and fill in your values:

```bash
cp .env.local .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID (from sanity.io/manage) |
| `NEXT_PUBLIC_SANITY_DATASET` | Dataset name (default: `production`) |
| `SANITY_API_TOKEN` | Sanity API token with write access (server-side only) |
| `RESEND_API_KEY` | API key from resend.com |
| `CONTACT_EMAIL` | Email address that receives contact form submissions |

### 3. Set up Sanity (first time only)

```bash
npx sanity@latest init --env
```

This will prompt you to create a new Sanity project (or connect to an existing one) and write the project ID and dataset to your `.env.local`.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 5. Access the CMS dashboard

Visit [http://localhost:3000/studio](http://localhost:3000/studio) and log in with your Sanity account. From here you can add, edit, or remove projects without touching any code.

**Seeding example content** — after opening the Studio for the first time, create 2–3 projects to make the homepage non-empty. Mark at least one as **Featured** so it appears in the homepage grid.

## Deployment

1. Push this repository to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Add all environment variables from `.env.local` in the Vercel dashboard under **Settings → Environment Variables**.
4. Deploy. Vercel automatically detects Next.js.

### Sanity CORS origin (production)

In [sanity.io/manage](https://sanity.io/manage), go to your project → **API → CORS Origins** and add your Vercel production URL (e.g. `https://your-domain.vercel.app`).

## Project structure

```
app/
  (main)/               ← Pages with Navbar + Footer
    page.tsx            ← Home
    projects/           ← Project grid + detail
    about/              ← Bio, stack, experience
    contact/            ← Contact form
  studio/[[...index]]/  ← Embedded Sanity Studio
  api/contact/          ← Email API route (Resend)
components/
  layout/               ← Navbar, Footer
  home/                 ← Hero, FeaturedProjects, SkillsSection, AboutSnippet
  projects/             ← ProjectCard, ProjectGrid, ProjectDetail, TagBadge
  contact/              ← ContactForm, FormField
  ui/                   ← Button, SectionHeading, AnimatedSection
sanity/
  schemaTypes/          ← Sanity document schemas
  lib/                  ← Client, queries, image URL builder
lib/
  types.ts              ← Shared TypeScript types
  utils.ts              ← cn() and formatDate()
```

## Scripts

```bash
npm run dev         # Start development server
npm run build       # Production build
npm run lint        # ESLint
npm run format      # Prettier
npm test            # Jest unit tests
```
