import type { Metadata, Viewport } from 'next'
import { SanityStudio } from '@/components/SanityStudio'
import config from '@/sanity/sanity.config'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Sanity Studio',
  robots: 'noindex, nofollow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function StudioPage() {
  return <SanityStudio config={config} />
}
