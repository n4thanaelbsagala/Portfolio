import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github, ArrowLeft, Calendar } from 'lucide-react'
import { PortableText } from '@portabletext/react'
import type { PortableTextReactComponents } from '@portabletext/react'
import { urlFor } from '@/sanity/lib/image'
import { TagBadge, CategoryBadge } from './TagBadge'
import { formatDate } from '@/lib/utils'
import type { Project } from '@/lib/types'

const portableComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: { value: { asset: unknown; alt?: string } }) => (
      <div className="my-8 rounded-2xl overflow-hidden">
        <Image
          src={urlFor(value).width(1200).height(675).fit('crop').auto('format').url()}
          alt={value.alt ?? ''}
          width={1200}
          height={675}
          className="w-full"
        />
      </div>
    ),
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">{children}</h3>
    ),
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-600 dark:text-indigo-400 underline underline-offset-2 hover:text-indigo-700"
      >
        {children}
      </a>
    ),
  },
}

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const {
    title,
    description,
    body,
    mainImage,
    images,
    tags,
    category,
    liveUrl,
    githubUrl,
    publishedAt,
  } = project

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 mb-8 transition-colors"
      >
        <ArrowLeft size={16} />
        All projects
      </Link>

      {/* Header */}
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <CategoryBadge category={category} />
          {publishedAt && (
            <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-600">
              <Calendar size={12} />
              {formatDate(publishedAt)}
            </span>
          )}
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
          {title}
        </h1>

        {description && (
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">{description}</p>
        )}

        {/* Tags + Links row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-wrap gap-2">
            {tags?.map((tag) => <TagBadge key={tag} label={tag} />)}
          </div>
          <div className="flex items-center gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
              >
                <ExternalLink size={14} />
                Live site
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <Github size={14} />
                GitHub
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Hero image */}
      {mainImage?.asset && (
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 bg-gray-100 dark:bg-gray-800">
          <Image
            src={urlFor(mainImage).width(1200).height(675).fit('crop').auto('format').url()}
            alt={mainImage.alt ?? title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>
      )}

      {/* Body */}
      {body && (
        <div className="prose prose-gray dark:prose-invert prose-lg max-w-none mb-16 prose-headings:font-bold prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-img:rounded-2xl">
          <PortableText value={body} components={portableComponents} />
        </div>
      )}

      {/* Gallery */}
      {images && images.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images.map((img, i) => (
              <div key={i} className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                {img?.asset && (
                  <Image
                    src={urlFor(img).width(800).height(450).fit('crop').auto('format').url()}
                    alt={img.alt ?? `${title} screenshot ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
