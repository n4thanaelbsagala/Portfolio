import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, ArrowLeft, Calendar } from 'lucide-react'
import { PortableText } from '@portabletext/react'
import type { PortableTextReactComponents } from '@portabletext/react'
import { urlFor } from '@/sanity/lib/image'
import { TagBadge, CategoryBadge } from './TagBadge'
import { formatDate } from '@/lib/utils'
import type { Project } from '@/lib/types'

// GitHub icon (lucide Github deprecated)
function GitHubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

// code-window-card body renderer: dark surface, mono font, rounded-xl
const portableComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: { value: { asset: unknown; alt?: string } }) => (
      <div className="my-8 rounded-xl overflow-hidden border border-hairline dark:border-surface-dark-elevated">
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
      <h2 className="font-display text-display-sm font-[500] text-ink dark:text-on-dark mt-12 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-[1.5rem] leading-snug font-[500] tracking-[-0.01em] text-ink dark:text-on-dark mt-8 mb-3">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-body-md text-body-text dark:text-on-dark-soft mb-4 leading-relaxed">
        {children}
      </p>
    ),
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-primary-active underline underline-offset-2 transition-colors"
      >
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="font-mono text-body-sm bg-surface-card dark:bg-surface-dark-elevated px-1.5 py-0.5 rounded text-ink dark:text-on-dark">
        {children}
      </code>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-4 space-y-2 list-disc list-inside text-body-md text-body-text dark:text-on-dark-soft">
        {children}
      </ul>
    ),
  },
}

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const { title, description, body, mainImage, images, tags, category, liveUrl, githubUrl, publishedAt } =
    project

  return (
    <main className="bg-canvas dark:bg-surface-dark min-h-screen">
      <div className="max-w-[800px] mx-auto px-6 lg:px-8 py-12">

        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-body-sm font-[500] text-muted dark:text-on-dark-soft hover:text-ink dark:hover:text-on-dark mb-10 transition-colors"
        >
          <ArrowLeft size={14} />
          All projects
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-5">
            <CategoryBadge category={category} />
            {publishedAt && (
              <span className="flex items-center gap-1.5 text-caption text-muted dark:text-on-dark-soft">
                <Calendar size={11} />
                {formatDate(publishedAt)}
              </span>
            )}
          </div>

          {/* display-lg serif title */}
          <h1 className="font-display text-display-lg font-[500] text-ink dark:text-on-dark mb-4">
            {title}
          </h1>

          {description && (
            <p className="text-body-md text-body-text dark:text-on-dark-soft leading-relaxed max-w-2xl">
              {description}
            </p>
          )}

          {/* Tags + CTAs */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-6 border-t border-hairline dark:border-surface-dark-elevated">
            <div className="flex flex-wrap gap-1.5">
              {tags?.map((tag) => <TagBadge key={tag} label={tag} />)}
            </div>
            <div className="flex items-center gap-2.5">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-primary hover:bg-primary-active text-white text-body-sm font-[500] transition-colors"
                >
                  <ExternalLink size={13} />
                  Live site
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg border border-hairline dark:border-surface-dark-elevated text-ink dark:text-on-dark text-body-sm font-[500] hover:bg-surface-card dark:hover:bg-surface-dark-elevated transition-colors"
                >
                  <GitHubIcon size={13} />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </header>

        {/* Hero image */}
        {mainImage?.asset && (
          <div className="relative aspect-video rounded-xl overflow-hidden mb-12 bg-surface-card dark:bg-surface-dark-elevated border border-hairline dark:border-surface-dark-elevated">
            <Image
              src={urlFor(mainImage).width(1200).height(675).fit('crop').auto('format').url()}
              alt={mainImage.alt ?? title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 800px) 100vw, 800px"
            />
          </div>
        )}

        {/* Rich text body */}
        {body && (
          <div className="mb-16">
            <PortableText value={body} components={portableComponents} />
          </div>
        )}

        {/* Gallery */}
        {images && images.length > 0 && (
          <section>
            <h2 className="font-display text-display-sm font-[500] text-ink dark:text-on-dark mb-6">
              Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-video rounded-xl overflow-hidden bg-surface-card dark:bg-surface-dark-elevated border border-hairline dark:border-surface-dark-elevated"
                >
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
      </div>
    </main>
  )
}
