import { createClient } from 'next-sanity'

export const client = createClient({
  // Fall back to a placeholder so the module loads during `next build` when
  // env vars aren't present (e.g. CI without Sanity credentials). Actual
  // fetches will fail gracefully until a real project ID is supplied.
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})
