import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond, JetBrains_Mono } from 'next/font/google'
import { Providers } from '@/components/Providers'
import '@/styles/globals.css'

// Body / UI sans-serif
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Display / serif headline — closest open-source substitute for Copernicus/Tiempos Headline
// Per DESIGN.md: use weight 500 when substituting with Cormorant Garamond
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

// Code blocks
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Nathanael Sagala — Developer & Designer',
    template: '%s | Nathanael Sagala',
  },
  description:
    'Personal portfolio showcasing full-stack development and design work by Nathanael Sagala.',
  keywords: ['developer', 'designer', 'full-stack', 'portfolio', 'Next.js', 'React'],
  authors: [{ name: 'Nathanael Sagala' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Nathanael Sagala Portfolio',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${cormorant.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
