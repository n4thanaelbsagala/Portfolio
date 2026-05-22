'use client'

import dynamic from 'next/dynamic'
import type { Config } from 'sanity'

// Load the full Sanity Studio bundle client-side only so that Next.js build-time
// module analysis never hits Sanity's createContext calls in Node.js.
const NextStudio = dynamic(() => import('next-sanity/studio').then((m) => ({ default: m.NextStudio })), {
  ssr: false,
  loading: () => (
    <div className="flex h-screen items-center justify-center bg-white dark:bg-gray-950 text-gray-500 text-sm">
      Loading Studio…
    </div>
  ),
})

export function SanityStudio({ config }: { config: Config }) {
  return <NextStudio config={config} />
}
