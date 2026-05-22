# Portfolio — Claude Instructions

## Stack
- Next.js 14+ App Router with TypeScript strict mode
- Tailwind CSS only — no inline styles, no CSS modules
- Sanity v3 CMS with GROQ queries via next-sanity
- Framer Motion for animations
- Resend for contact form emails via API route

## Architecture rules
- All CMS data fetching must happen in Server Components only
  — never fetch Sanity content from the client side
- GROQ queries live exclusively in /sanity/lib/queries.ts
  — never write raw GROQ strings inside page or component files
- All shared TypeScript interfaces live in /lib/types.ts
- Reusable UI pieces go in /components/ui — never duplicate 
  button or heading styles across components
- API route logic (validation, email sending) stays in 
  /app/api/contact/route.ts — no business logic in components

## Styling rules
- Tailwind utility classes only — no arbitrary values unless 
  absolutely necessary
- dark: utilities for all color-sensitive properties
- Mobile-first — always write base styles before md:/lg: overrides
- One accent color throughout (defined in tailwind.config.ts 
  as "accent") — never hardcode the hex elsewhere

## What to never do
- Never add client-side data fetching for Sanity content
- Never install new packages without asking first
- Never put environment variables in code — use .env.local only
- Never use SANITY_API_TOKEN on the client side (it's server only)
- Never skip TypeScript types — every prop and return value 
  must be typed

## Commands
- Dev server:    npm run dev
- Type check:    npx tsc --noEmit
- Lint:          npm run lint
- Tests:         npx jest
- Sanity studio: visit localhost:3000/studio
- Deploy:        push to GitHub → auto-deploys via Vercel

## Vercel deployment checklist
1. Connect GitHub repo to Vercel
2. Add all .env.local variables to Vercel environment variables
3. Sanity CORS: add the Vercel production URL in Sanity project 
   settings under API → CORS origins