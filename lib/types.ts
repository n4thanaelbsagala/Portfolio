import type { PortableTextBlock } from '@portabletext/react'

export enum Category {
  Development = 'Development',
  Design = 'Design',
  FullStack = 'Full-stack',
}

export interface SanityImage {
  _type: 'image'
  asset: {
    _type: 'reference'
    _ref: string
  }
  alt?: string
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

export interface Project {
  _id: string
  title: string
  slug: { current: string }
  description: string
  body?: PortableTextBlock[]
  mainImage: SanityImage
  images?: SanityImage[]
  liveUrl?: string
  githubUrl?: string
  tags: string[]
  category: Category
  featured: boolean
  publishedAt: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}
