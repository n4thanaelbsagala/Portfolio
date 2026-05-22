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

// category-tab + category-tab-active per DESIGN.md:
//   inactive: transparent bg, muted text, rounded-lg, 8px×14px padding
//   active:   surface-card bg, ink text

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [active, setActive] = useState<Filter>('All')

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <div>
      {/* Filter row */}
      <div className="flex flex-wrap gap-1.5 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={
              active === cat
                ? 'px-3.5 py-2 rounded-lg text-nav-link font-[500] bg-surface-card dark:bg-surface-dark-elevated text-ink dark:text-on-dark transition-colors'
                : 'px-3.5 py-2 rounded-lg text-nav-link font-[500] bg-transparent text-muted dark:text-on-dark-soft hover:bg-surface-card dark:hover:bg-surface-dark-elevated hover:text-ink dark:hover:text-on-dark transition-colors'
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-center py-20 text-body-md text-muted dark:text-on-dark-soft">
          No projects in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <AnimatedSection key={project._id} delay={i * 0.05}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      )}
    </div>
  )
}
