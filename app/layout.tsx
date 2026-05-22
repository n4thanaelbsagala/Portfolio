import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/components/Providers'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
