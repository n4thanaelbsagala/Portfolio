import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/projects/ProjectCard'
import type { Project } from '@/lib/types'

interface FeaturedProjectsProps {
  projects: Project[]
}

// surface-soft band — alternating rhythm from the canvas hero above
export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  if (projects.length === 0) return null

  return (
    <section className="bg-surface-soft dark:bg-surface-dark-soft section-padding">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12">
            <SectionHeading
              title="Featured Work"
              subtitle="A selection of projects I'm proud of"
              className="mb-0"
            />
            <Link
              href="/projects"
              className="hidden sm:flex items-center gap-1.5 text-body-sm font-[500] text-primary hover:text-primary-active transition-colors"
            >
              All projects
              <ArrowRight size={14} />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <AnimatedSection key={project._id} delay={i * 0.08}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-8 sm:hidden text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-body-sm font-[500] text-primary hover:text-primary-active transition-colors"
          >
            View all projects <ArrowRight size={14} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
