import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { TagBadge, CategoryBadge } from './TagBadge'
import { urlFor } from '@/sanity/lib/image'
import type { Project } from '@/lib/types'

// GitHub icon (lucide Github is deprecated — use inline SVG)
function GitHubIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

interface ProjectCardProps {
  project: Project
}

// connector-tile adapted with image: canvas bg + hairline border + rounded-xl
// Hover: shadow-card + -translate-y-px (DESIGN.md: "0 1px 3px rgba(20,20,19,0.08)")
export function ProjectCard({ project }: ProjectCardProps) {
  const { title, slug, description, mainImage, tags, category, liveUrl, githubUrl } = project

  return (
    <article className="group flex flex-col bg-canvas dark:bg-surface-dark-elevated rounded-xl border border-hairline dark:border-surface-dark-soft hover:shadow-card hover:-translate-y-px transition-all duration-200 overflow-hidden">

      {/* Image — aspect-video, scale on hover */}
      <Link
        href={`/projects/${slug.current}`}
        className="relative block aspect-video overflow-hidden bg-surface-card dark:bg-surface-dark-soft"
      >
        {mainImage?.asset ? (
          <Image
            src={urlFor(mainImage).width(800).height(450).fit('crop').auto('format').url()}
            alt={mainImage.alt ?? title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-display-md font-[500] text-hairline dark:text-surface-dark-elevated select-none">
              {title.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
        {/* Category badge floated over image */}
        <div className="absolute top-3 left-3">
          <CategoryBadge category={category} />
        </div>
      </Link>

      {/* Content — p-5 per connector-tile sizing */}
      <div className="flex flex-col flex-1 p-5">
        <Link href={`/projects/${slug.current}`}>
          <h3 className="text-title-sm font-[500] text-ink dark:text-on-dark mb-2 hover:text-primary dark:hover:text-primary transition-colors line-clamp-1">
            {title}
          </h3>
        </Link>

        {description && (
          <p className="text-body-sm text-body-text dark:text-on-dark-soft line-clamp-2 mb-4 flex-1">
            {description}
          </p>
        )}

        {/* Tags — badge-pill */}
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.slice(0, 4).map((tag) => (
              <TagBadge key={tag} label={tag} />
            ))}
            {tags.length > 4 && (
              <span className="text-caption text-muted dark:text-on-dark-soft self-center">
                +{tags.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Links row — text-links in primary per DESIGN.md */}
        <div className="flex items-center gap-4 pt-3 border-t border-hairline dark:border-surface-dark-soft">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-caption font-[500] text-muted dark:text-on-dark-soft hover:text-primary dark:hover:text-primary transition-colors"
            >
              <ExternalLink size={12} />
              Live
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-caption font-[500] text-muted dark:text-on-dark-soft hover:text-primary dark:hover:text-primary transition-colors"
            >
              <GitHubIcon size={12} />
              Code
            </a>
          )}
          <Link
            href={`/projects/${slug.current}`}
            className="ml-auto flex items-center gap-1 text-caption font-[500] text-primary hover:text-primary-active transition-colors"
          >
            Details <ArrowRight size={11} />
          </Link>
        </div>
      </div>
    </article>
  )
}
