import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/projects/ProjectCard'
import type { Project } from '@/lib/types'

interface FeaturedProjectsProps {
  projects: Project[]
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  if (projects.length === 0) return null

  return (
    <section className="section-padding bg-gray-50/50 dark:bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12">
            <SectionHeading
              title="Featured Work"
              subtitle="A selection of projects I'm proud of"
              className="mb-0"
            />
            <Link
              href="/projects"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:gap-3 transition-all"
            >
              All projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project._id} delay={i * 0.1}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-10 text-center sm:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400"
          >
            View all projects
            <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
