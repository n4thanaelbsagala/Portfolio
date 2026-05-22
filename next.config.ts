import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Prevent webpack from bundling Sanity Studio packages for the server.
  // They are browser-only and use dynamic requires that break webpack's
  // static analysis (resulting in createContext errors during `next build`).
  serverExternalPackages: ['sanity', '@sanity/client', 'next-sanity', '@sanity/vision'],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  },
}

export default nextConfig
