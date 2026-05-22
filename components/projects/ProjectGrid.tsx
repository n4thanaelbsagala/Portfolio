'use client'

import { useState } from 'react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ProjectCard } from './ProjectCard'
import type { Project } from '@/lib/types'

interface ProjectGridProps {
  projects: Project[]
}

const categories = ['All', 'Development', 'Design', 'Full-stack'] as const
type Filter = (typeof categories)[number]

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [active, setActive] = useState<Filter>('All')

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <div>
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              active === cat
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-center py-20 text-gray-400 dark:text-gray-600">
          No projects in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <AnimatedSection key={project._id} delay={i * 0.06}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      )}
    </div>
  )
}
