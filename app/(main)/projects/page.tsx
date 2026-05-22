import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ProjectGrid } from '@/components/projects/ProjectGrid'
import { client } from '@/sanity/lib/client'
import { getAllProjects } from '@/sanity/lib/queries'
import type { Project } from '@/lib/types'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A full collection of my development and design work.',
}

export default async function ProjectsPage() {
  let projects: Project[] = []
  try {
    projects = await client.fetch<Project[]>(getAllProjects)
  } catch {
    // Sanity not yet configured; render empty state.
  }

  return (
    <main className="bg-canvas dark:bg-surface-dark min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <AnimatedSection>
          <div className="mb-12">
            <span className="text-caption-xs font-[500] uppercase tracking-[0.1em] text-primary mb-5 block">
              Work
            </span>
            <h1 className="font-display text-display-lg font-[500] text-ink dark:text-on-dark mb-4">
              All Projects
            </h1>
            <p className="text-body-md text-body-text dark:text-on-dark-soft">
              {projects.length} project{projects.length !== 1 ? 's' : ''} — development, design, and everything in between
            </p>
          </div>
        </AnimatedSection>
        <ProjectGrid projects={projects} />
      </div>
    </main>
  )
}
