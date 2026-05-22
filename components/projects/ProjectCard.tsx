import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import { TagBadge, CategoryBadge } from './TagBadge'
import { urlFor } from '@/sanity/lib/image'
import type { Project } from '@/lib/types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, slug, description, mainImage, tags, category, liveUrl, githubUrl } = project

  return (
    <article className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      <Link href={`/projects/${slug.current}`} className="relative block aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
        {mainImage?.asset ? (
          <Image
            src={urlFor(mainImage).width(800).height(450).fit('crop').auto('format').url()}
            alt={mainImage.alt ?? title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-300 dark:text-gray-700 text-4xl font-bold select-none">
            {title.slice(0, 2).toUpperCase()}
          </div>
        )}
        <div className="absolute top-3 left-3">
          <CategoryBadge category={category} />
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <Link href={`/projects/${slug.current}`}>
          <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors line-clamp-1">
            {title}
          </h3>
        </Link>

        {description && (
          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4 flex-1">
            {description}
          </p>
        )}

        {/* Tags */}
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.slice(0, 4).map((tag) => (
              <TagBadge key={tag} label={tag} />
            ))}
            {tags.length > 4 && (
              <span className="text-xs text-gray-400 dark:text-gray-600 self-center">
                +{tags.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Links */}
        <div className="flex items-center gap-3 pt-3 border-t border-gray-100 dark:border-gray-800">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <ExternalLink size={13} />
              Live
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <Github size={13} />
              Code
            </a>
          )}
          <Link
            href={`/projects/${slug.current}`}
            className="ml-auto text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            View details →
          </Link>
        </div>
      </div>
    </article>
  )
}
